import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFileSync, existsSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { extname, join, resolve } from "node:path";
import { chromium } from "playwright";

const ROOT = resolve("app");
const PORT = Number(process.env.ROYA_TEST_PORT || 4173);
const BASE_URL = process.env.ROYA_BASE_URL || `http://127.0.0.1:${PORT}/`;

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

const TINY_PNG = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAFElEQVR4nGNkaGAgCTpgwiM3gqUBAIKtAflq7JYyAAAAAElFTkSuQmCC",
  "base64",
);

function startServer() {
  if (process.env.ROYA_BASE_URL) return Promise.resolve(null);
  const server = createServer((req, res) => {
    const url = new URL(req.url || "/", BASE_URL);
    const pathname = url.pathname === "/" || url.pathname === "/app/" ? "/index.html" : url.pathname.replace(/^\/app\/?/, "/");
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

async function seedRecords(page, records) {
  await page.evaluate(async (items) => {
    const db = await new Promise((resolve, reject) => {
      const request = indexedDB.open("royacheck-offline", 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains("observations")) {
          db.createObjectStore("observations", { keyPath: "id" });
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    await new Promise((resolve, reject) => {
      const tx = db.transaction("observations", "readwrite");
      const store = tx.objectStore("observations");
      for (const item of items) store.put(item);
      tx.oncomplete = () => { db.close(); resolve(); };
      tx.onerror = () => { db.close(); reject(tx.error); };
    });
  }, records);
}

async function deleteRecordBehindApp(page, id) {
  await page.evaluate(async (recordId) => {
    const db = await new Promise((resolve, reject) => {
      const request = indexedDB.open("royacheck-offline", 1);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    await new Promise((resolve, reject) => {
      const tx = db.transaction("observations", "readwrite");
      tx.objectStore("observations").delete(recordId);
      tx.oncomplete = () => { db.close(); resolve(); };
      tx.onerror = () => { db.close(); reject(tx.error); };
    });
  }, id);
}

function record(id, disposition, offset = 0) {
  return {
    id,
    crop: "coffee",
    capture_date: "2026-10-04",
    saved_at: new Date(Date.UTC(2026, 9, 4, 5, offset, 0)).toISOString(),
    ai_proposal: disposition === "visible_rust" ? "not_sure" : "no_visible_rust",
    human_disposition: disposition,
    confirmed_by_role: "farmer_decision_maker",
    action_route: disposition === "visible_rust" ? "Review first" : "Record and monitor",
    farmer_note: `seed ${id}`,
    raw_image_retained: false,
    model_sha256: "4037c09663190b7caed0773e525e5da39bd05286992612537991358b7acfd041",
  };
}

async function waitForListCount(page, expected) {
  await page.waitForFunction((count) => document.querySelectorAll("#savedRecordsList .record-item").length === count, expected);
}

async function waitForPersistentCard(page) {
  await page.waitForFunction(() => {
    const card = document.querySelector("#persistentReviewCard");
    return card && !card.hidden && card.textContent.includes("AI proposal");
  });
}

async function waitForCurrentReviewCard(page) {
  await page.waitForFunction(() => {
    const card = document.querySelector("#reviewCard");
    return card && !card.hidden && card.textContent.includes("AI proposal");
  });
}

async function saveTinyObservation(page, imagePath, disposition = "visible_rust") {
  await page.setInputFiles("#imageInput", imagePath);
  await page.waitForFunction(() => !document.querySelector("#runButton")?.disabled, null, { timeout: 30000 });
  await page.click("#runButton");
  await page.waitForFunction(() => document.querySelector("#proposalLabel")?.dataset.route === "not_sure");
  await page.selectOption("#humanDisposition", disposition);
  await page.check("#humanConfirm");
  await page.click("#saveButton");
  await page.waitForFunction(() => !document.querySelector("#savedSection")?.hidden);
  return page.evaluate(() => window.__royacheckTest.latestRecord().id);
}

async function run() {
  const server = await startServer();
  const tmp = mkdtempSync(join(tmpdir(), "royacheck-followups-"));
  const imagePath = join(tmp, "tiny-a.png");
  const secondImagePath = join(tmp, "tiny-b.png");
  writeFileSync(imagePath, TINY_PNG);
  writeFileSync(secondImagePath, TINY_PNG);

  const requests = [];
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ serviceWorkers: "allow" });
  context.on("request", (request) => requests.push({ method: request.method(), url: request.url() }));
  const page = await context.newPage();
  page.on("dialog", (dialog) => dialog.accept());
  await page.addInitScript(() => {
    window.__royacheckEvents = [];
    document.addEventListener("royacheck:record-saved", (event) => window.__royacheckEvents.push({ type: "saved", id: event.detail?.record?.id }));
    document.addEventListener("royacheck:record-deleted", (event) => window.__royacheckEvents.push({ type: "deleted", id: event.detail?.id, source: event.detail?.source }));
  });

  try {
    await page.goto(BASE_URL, { waitUntil: "domcontentloaded" });
    await page.waitForFunction(() => document.querySelector("#offlineBadge")?.textContent.includes("Offline cache verified"));

    await seedRecords(page, [record("seed-a", "no_visible_rust", 1), record("seed-b", "visible_rust", 2), record("seed-c", "no_visible_rust", 3)]);
    await page.click("#refreshRecordsButton");
    await waitForListCount(page, 3);

    for (let index = 0; index < 5; index += 1) await page.click("#refreshRecordsButton");
    await waitForListCount(page, 3);

    await page.click('[data-record-id="seed-b"] button');
    await waitForPersistentCard(page);
    assert.match(await page.textContent("#persistentReviewCard"), /seed-b|Visible rust observation/);

    await deleteRecordBehindApp(page, "seed-b");
    await page.click('[data-record-id="seed-b"] button');
    await page.waitForFunction(() => document.querySelector("#persistentReviewStatus")?.textContent.includes("no longer available"));
    await waitForListCount(page, 2);

    const savedBefore = await getRecords(page);
    const currentId = await saveTinyObservation(page, imagePath);
    await page.waitForFunction(() => window.__royacheckEvents.some((event) => event.type === "saved"));
    await waitForListCount(page, savedBefore.length + 1);

    const panelText = await page.textContent("#lugisuPrompt");
    assert.match(panelText, /AI proposal: not sure/);
    assert.match(panelText, /Human choice: Visible rust observation/);
    const nonPrimaryText = panelText.replace(/AI proposal: not sure[^.]*\./, "");
    assert.doesNotMatch(nonPrimaryText, /AI proposal/i, "Only the primary line may name the AI proposal");

    await page.click("#reviewCardButton");
    await waitForCurrentReviewCard(page);
    await page.click("#deleteButton");
    await page.waitForFunction((id) => window.__royacheckEvents.some((event) => event.type === "deleted" && event.id === id), currentId);
    await page.waitForFunction(() => document.querySelector("#savedSection")?.hidden);
    await waitForListCount(page, savedBefore.length);
    assert.equal((await getRecords(page)).some((item) => item.id === currentId), false);

    const section5Id = await saveTinyObservation(page, imagePath);
    await page.click("#reviewCardButton");
    await waitForCurrentReviewCard(page);
    const beforeSection5Delete = await getRecords(page);
    await page.click(`[data-record-id="${section5Id}"] .danger`);
    await page.waitForFunction(() => document.querySelector("#savedSection")?.hidden && document.querySelector("#reviewCard")?.hidden);
    await waitForListCount(page, beforeSection5Delete.length - 1);
    const afterSection5Delete = await getRecords(page);
    assert.equal(afterSection5Delete.some((item) => item.id === section5Id), false, "Section 5 delete must remove the exact target ID");
    assert.equal(afterSection5Delete.length, beforeSection5Delete.length - 1, "Section 5 delete must not remove other records");

    await seedRecords(page, [record("section5-current", "visible_rust", 4)]);
    await page.click("#refreshRecordsButton");
    const beforeExactDelete = await getRecords(page);
    await waitForListCount(page, beforeExactDelete.length);
    await page.click('[data-record-id="section5-current"] .danger');
    await waitForListCount(page, beforeExactDelete.length - 1);
    const afterExactDelete = await getRecords(page);
    assert.equal(afterExactDelete.some((item) => item.id === "section5-current"), false, "Section 5 delete must remove the exact target ID");
    assert.equal(afterExactDelete.length, beforeExactDelete.length - 1, "Section 5 delete must not remove other records");

    await page.click('[data-lugisu-step="visible_rust"]');
    let rehearsalText = await page.textContent("#lugisuPrompt");
    assert.match(rehearsalText, /AI proposal: not sure/);
    assert.doesNotMatch(rehearsalText.replace(/AI proposal: not sure[^.]*\./, ""), /AI proposal/i);

    await page.setInputFiles("#imageInput", secondImagePath);
    await page.click('[data-lugisu-step="visible_rust"]');
    rehearsalText = await page.textContent("#lugisuPrompt");
    assert.doesNotMatch(rehearsalText, /AI proposal: not sure/);
    assert.match(rehearsalText, /No current AI proposal is active/);

    const persistedCount = (await getRecords(page)).length;
    await page.reload({ waitUntil: "domcontentloaded" });
    await waitForListCount(page, persistedCount);
    await context.setOffline(true);
    await page.reload({ waitUntil: "domcontentloaded" });
    await waitForListCount(page, persistedCount);
    await context.setOffline(false);

    const mediaCount = await page.locator("#savedRecordsSection img, #savedRecordsSection canvas, #savedRecordsSection [src^='blob:']").count();
    assert.equal(mediaCount, 0, "Section 5 must not render raw images, canvases, or blob previews");

    const pageOrigin = new URL(BASE_URL).origin;
    for (const request of requests) {
      const url = new URL(request.url);
      assert.ok(request.method === "GET" || url.protocol === "blob:", `Unexpected request method: ${request.method} ${request.url}`);
      if (url.protocol !== "blob:") assert.equal(url.origin, pageOrigin, `Unexpected cross-origin request: ${request.url}`);
    }

    console.log(JSON.stringify({ status: "PASS", saved_records: persistedCount, requests: requests.length }));
  } finally {
    await browser.close();
    if (server) await new Promise((resolveServer) => server.close(resolveServer));
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
