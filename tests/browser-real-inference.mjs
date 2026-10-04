import assert from "node:assert/strict";
import { createServer } from "node:http";
import { existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { extname, join, resolve } from "node:path";
import { deflateSync } from "node:zlib";
import { chromium } from "playwright";

const ROOT = resolve("app");
const PORT = Number(process.env.ROYA_TEST_PORT || 4173);
const BASE_URL = process.env.ROYA_BASE_URL || `http://127.0.0.1:${PORT}/`;
const MODEL_SHA256 = "4037c09663190b7caed0773e525e5da39bd05286992612537991358b7acfd041";
const ROUTES = new Set(["visible_rust", "no_visible_rust", "not_sure"]);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".wasm": "application/wasm",
  ".onnx": "application/octet-stream",
  ".png": "image/png",
};

function crcTable() {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
}

const CRC_TABLE = crcTable();

function crc32(buffer) {
  let c = 0xffffffff;
  for (const byte of buffer) c = CRC_TABLE[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data = Buffer.alloc(0)) {
  const typeBuffer = Buffer.from(type, "ascii");
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const crcInput = Buffer.concat([typeBuffer, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(crcInput), 0);
  return Buffer.concat([length, typeBuffer, data, crc]);
}

function syntheticLeafLikePng(width = 224, height = 224) {
  const raw = Buffer.alloc(height * (1 + width * 3));
  for (let y = 0; y < height; y += 1) {
    const row = y * (1 + width * 3);
    raw[row] = 0;
    for (let x = 0; x < width; x += 1) {
      const idx = row + 1 + x * 3;
      const centerX = x - width / 2;
      const centerY = y - height / 2;
      const leafMask = (centerX * centerX) / 9000 + (centerY * centerY) / 3600 < 1;
      const rustMask = (x - 137) * (x - 137) + (y - 92) * (y - 92) < 360;
      raw[idx] = rustMask ? 156 : leafMask ? 42 + Math.floor((y / height) * 30) : 218;
      raw[idx + 1] = rustMask ? 86 : leafMask ? 116 + Math.floor((x / width) * 35) : 226;
      raw[idx + 2] = rustMask ? 32 : leafMask ? 56 : 214;
    }
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 2;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw)),
    chunk("IEND"),
  ]);
}

function startServer() {
  if (process.env.ROYA_BASE_URL) return Promise.resolve(null);
  const server = createServer((req, res) => {
    const url = new URL(req.url || "/", BASE_URL);
    const pathname = url.pathname === "/" || url.pathname === "/app/" ? "/index.html" : url.pathname.replace(/^\/app\//, "/");
    const filePath = resolve(ROOT, `.${pathname}`);
    if (!filePath.startsWith(ROOT) || !existsSync(filePath)) {
      res.writeHead(404);
      res.end("not found");
      return;
    }
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("Content-Type", MIME[extname(filePath)] || "application/octet-stream");
    res.end(readFileSync(filePath));
  });
  return new Promise((resolveServer, rejectServer) => {
    server.once("error", rejectServer);
    server.listen(PORT, "127.0.0.1", () => resolveServer(server));
  });
}

async function latestRecord(page) {
  return page.evaluate(() => window.__royacheckTest.latestRecord());
}

async function getRecords(page) {
  return page.evaluate(async () => {
    const db = await new Promise((resolve, reject) => {
      const request = indexedDB.open("royacheck-offline", 1);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    return new Promise((resolve, reject) => {
      const tx = db.transaction("observations", "readonly");
      const request = tx.objectStore("observations").getAll();
      request.onsuccess = () => resolve(request.result.map((record) => ({ ...record })));
      request.onerror = () => reject(request.error);
      tx.oncomplete = () => db.close();
      tx.onerror = () => { db.close(); reject(tx.error); };
    });
  });
}

async function waitForOfflineReady(page) {
  await page.waitForFunction(() => document.querySelector("#offlineBadge")?.textContent.includes("Offline cache verified"), null, { timeout: 60000 });
}

async function runOneInference(page, imagePath) {
  await page.setInputFiles("#imageInput", imagePath);
  await page.waitForFunction(() => !document.querySelector("#runButton")?.disabled, null, { timeout: 60000 });
  await page.click("#runButton");
  await page.waitForFunction(() => {
    const route = document.querySelector("#proposalLabel")?.dataset.route;
    return route === "visible_rust" || route === "no_visible_rust" || route === "not_sure";
  }, null, { timeout: 120000 });
  await page.waitForFunction(() => document.querySelector("#modelStatus")?.textContent.includes("Local inference complete"), null, { timeout: 120000 });
  return page.$eval("#proposalLabel", (node) => node.dataset.route);
}

async function run() {
  const server = await startServer();
  const tmp = mkdtempSync(join(tmpdir(), "royacheck-real-inference-"));
  const imagePath = join(tmp, "synthetic-224.png");
  writeFileSync(imagePath, syntheticLeafLikePng());

  const requests = [];
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ serviceWorkers: "allow" });
  context.on("request", (request) => requests.push({ method: request.method(), url: request.url() }));
  const page = await context.newPage();

  try {
    await page.goto(BASE_URL, { waitUntil: "domcontentloaded" });
    await waitForOfflineReady(page);

    await context.setOffline(true);
    await page.reload({ waitUntil: "domcontentloaded" });
    await waitForOfflineReady(page);

    const route = await runOneInference(page, imagePath);
    assert.ok(ROUTES.has(route), `Unexpected route ${route}`);
    assert.doesNotMatch(await page.textContent("#modelStatus"), /too_small|minimum is 224/i, "real-inference harness must not use the too-small bypass");

    await page.selectOption("#humanDisposition", "request_review");
    await page.check("#humanConfirm");
    await page.click("#saveButton");
    await page.waitForFunction(() => window.__royacheckTest.latestRecord()?.human_disposition === "request_review");
    const record = await latestRecord(page);
    assert.equal(record.ai_proposal, route);
    assert.equal(record.human_disposition, "request_review");
    assert.equal(record.raw_image_retained, false);
    assert.equal(record.model_sha256, MODEL_SHA256);
    assert.equal((await getRecords(page)).some((item) => item.id === record.id), true);

    const origin = new URL(BASE_URL).origin;
    for (const request of requests) {
      const url = new URL(request.url);
      assert.ok(request.method === "GET" || url.protocol === "blob:", `Unexpected request method: ${request.method} ${request.url}`);
      if (url.protocol !== "blob:") assert.equal(url.origin, origin, `Unexpected cross-origin request: ${request.url}`);
    }

    console.log(JSON.stringify({
      status: "PASS",
      offline_inference_route: route,
      raw_image_retained: record.raw_image_retained,
      model_sha256: record.model_sha256,
      requests: requests.length,
    }));
  } finally {
    await context.setOffline(false).catch(() => {});
    await browser.close();
    if (server) await new Promise((resolveServer) => server.close(resolveServer));
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
