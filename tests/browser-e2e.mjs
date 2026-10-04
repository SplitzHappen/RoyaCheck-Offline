import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { chromium } from "playwright";

const expectedPath = process.argv[2] || "tmp/stage8-e2e/expected-routes.json";
const expected = JSON.parse(await readFile(expectedPath, "utf8"));
const baseUrl = process.env.ROYA_BASE_URL || "http://127.0.0.1:4173/app/";

const requiredRoutes = new Set(["visible_rust", "no_visible_rust", "not_sure"]);
const observedFixtureRoutes = new Set(expected.fixtures.map((fixture) => fixture.expected_route));
for (const route of requiredRoutes) {
  assert.ok(observedFixtureRoutes.has(route), `Route-variety smoke missing expected fixture route: ${route}`);
}

const browser = await chromium.launch();
const context = await browser.newContext({ serviceWorkers: "allow" });
const page = await context.newPage();

const requests = [];
page.on("request", (request) => requests.push({ method: request.method(), url: request.url() }));

async function clearProposalRoute(page) {
  await page.locator("#proposalLabel").evaluate((node) => {
    delete node.dataset.route;
    node.textContent = "";
  });
}

async function runFixture(page, fixture) {
  await page.setInputFiles("#imageInput", fixture.path);
  await page.waitForFunction(() => !document.querySelector("#preview")?.hidden);
  await clearProposalRoute(page);
  await page.click("#runButton");
  await page.waitForFunction(
    () => document.querySelector("#modelStatus")?.textContent.includes("Local inference complete"),
    null,
    { timeout: 60000 }
  );
  await page.waitForFunction(
    (route) => document.querySelector("#proposalLabel")?.dataset.route === route,
    fixture.expected_route,
    { timeout: 60000 }
  );
  const browserRoute = await page.locator("#proposalLabel").evaluate((node) => node.dataset.route);
  assert.equal(browserRoute, fixture.expected_route, `${fixture.name} route mismatch`);

  const labelText = await page.locator("#proposalLabel").innerText();
  assert.ok(["visible rust", "no visible rust", "not sure"].includes(labelText), `Unexpected public label: ${labelText}`);
}

await page.goto(baseUrl, { waitUntil: "networkidle" });
await page.waitForSelector("#imageInput");
await page.waitForFunction(() => document.querySelector("#modelStatus")?.textContent.includes("Frozen model ready"), null, { timeout: 60000 });

const origin = new URL(baseUrl).origin;
for (const request of requests) {
  assert.equal(request.method, "GET", `Unexpected default non-GET request: ${request.method} ${request.url}`);
  assert.equal(new URL(request.url).origin, origin, `Unexpected default external request: ${request.url}`);
}

let savedRecord = null;
for (const [index, fixture] of expected.fixtures.entries()) {
  await runFixture(page, fixture);

  if (index === 0) {
    assert.equal(await page.locator("#saveButton").isDisabled(), true, "Save should start disabled");
    await page.selectOption("#humanDisposition", fixture.expected_route === "visible_rust" ? "visible_rust" : "request_review");
    assert.equal(await page.locator("#saveButton").isDisabled(), true, "Save should require confirmation");
    await page.check("#humanConfirm");
    assert.equal(await page.locator("#saveButton").isDisabled(), false, "Save should be enabled after disposition and confirmation");
    await page.fill("#farmerNote", "Stage 8 e2e smoke fixture");
    await page.click("#saveButton");
    await page.waitForFunction(() => !document.querySelector("#savedSection")?.hidden);

    savedRecord = await page.evaluate(async () => {
      const db = await new Promise((resolve, reject) => {
        const request = indexedDB.open("royacheck-offline", 1);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
      return await new Promise((resolve, reject) => {
        const tx = db.transaction("observations", "readonly");
        const getAll = tx.objectStore("observations").getAll();
        getAll.onsuccess = () => resolve(getAll.result.at(-1));
        getAll.onerror = () => reject(getAll.error);
        tx.oncomplete = () => db.close();
      });
    });

    assert.equal(savedRecord.raw_image_retained, false);
    assert.equal(savedRecord.ai_proposal, fixture.expected_route);
    assert.equal(savedRecord.model_sha256, expected.model_sha256);
    assert.ok(!("raw_image" in savedRecord), "Raw image must not be present in stored record");
    assert.ok(!("image_blob" in savedRecord), "Image blob must not be present in stored record");
  }
}

assert.ok(savedRecord, "Expected one saved record");
await page.waitForFunction(() => document.querySelector("#offlineBadge")?.textContent.includes("verified"), null, { timeout: 60000 });

const offlineFixture = expected.fixtures.find((fixture) => fixture.expected_route === "visible_rust") || expected.fixtures[0];
await context.setOffline(true);
await page.reload({ waitUntil: "domcontentloaded" });
await page.waitForSelector("#imageInput", { timeout: 30000 });
await page.waitForFunction(() => document.querySelector("#modelStatus")?.textContent.includes("Frozen model ready"), null, { timeout: 60000 });
await runFixture(page, offlineFixture);
await context.setOffline(false);

for (const request of requests) {
  assert.notEqual(request.method, "POST", `Unexpected POST request: ${request.url}`);
  assert.notEqual(request.method, "PUT", `Unexpected PUT request: ${request.url}`);
  assert.equal(new URL(request.url).origin, origin, `Unexpected external request: ${request.url}`);
}

await browser.close();

console.log(JSON.stringify({
  status: "PASS",
  fixtures: expected.fixtures.map((fixture) => ({ name: fixture.name, expected_route: fixture.expected_route })),
  route_variety: Array.from(observedFixtureRoutes).sort(),
  saved_record_raw_image_retained: savedRecord.raw_image_retained,
  default_requests: requests.length,
}, null, 2));
