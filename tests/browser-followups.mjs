import assert from "node:assert/strict";
import { chromium } from "playwright";

const baseUrl = process.env.ROYA_BASE_URL || "http://127.0.0.1:4173/app/";
const tinyPng = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/p9sAAAAASUVORK5CYII=",
  "base64"
);

const browser = await chromium.launch();
const context = await browser.newContext({ serviceWorkers: "allow" });
const page = await context.newPage();

const requests = [];
page.on("request", (request) => requests.push({ method: request.method(), url: request.url() }));
page.on("dialog", (dialog) => dialog.accept());

const origin = new URL(baseUrl).origin;

async function dbRecords() {
  return await page.evaluate(async () => {
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
    return await new Promise((resolve, reject) => {
      const tx = db.transaction("observations", "readonly");
      const request = tx.objectStore("observations").getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
      tx.oncomplete = () => db.close();
    });
  });
}

async function putRecord(record) {
  await page.evaluate(async (record) => {
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
      tx.objectStore("observations").put(record);
      tx.oncomplete = () => { db.close(); resolve(); };
      tx.onerror = () => { db.close(); reject(tx.error); };
    });
  }, record);
}

async function deleteDirect(id) {
  await page.evaluate(async (id) => {
    const db = await new Promise((resolve, reject) => {
      const request = indexedDB.open("royacheck-offline", 1);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    await new Promise((resolve, reject) => {
      const tx = db.transaction("observations", "readwrite");
      tx.objectStore("observations").delete(id);
      tx.oncomplete = () => { db.close(); resolve(); };
      tx.onerror = () => { db.close(); reject(tx.error); };
    });
  }, id);
}

function seedRecord(id, route = "not_sure", disposition = "request_review", minutesAgo = 0) {
  return {
    id,
    crop: "coffee",
    capture_date: "2026-10-04",
    saved_at: new Date(Date.UTC(2026, 9, 4, 5, minutesAgo, 0)).toISOString(),
    ai_proposal: route,
    human_disposition: disposition,
    confirmed_by_role: "farmer_decision_maker",
    action_route: disposition === "visible_rust" ? "Review first" : disposition === "no_visible_rust" ? "Record and monitor" : "Retake or request review",
    farmer_note: `seed ${id}`,
    raw_image_retained: false,
    model_sha256: "4037c09663190b7caed0773e525e5da39bd05286992612537991358b7acfd041",
  };
}

async function listItemCount() {
  return await page.locator("#savedRecordsList article.record-item").count();
}

async function refreshList() {
  await page.click("#refreshRecordsButton");
  await page.waitForTimeout(200);
}

await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
await page.waitForSelector("#imageInput");
await page.waitForFunction(() => document.querySelector("#modelStatus")?.textContent.includes("Frozen model ready"), null, { timeout: 60000 });

for (const request of requests) {
  assert.equal(request.method, "GET", `Unexpected default non-GET request: ${request.method} ${request.url}`);
  assert.ok(request.url.startsWith(origin) || request.url.startsWith("blob:"), `Unexpected default external request: ${request.url}`);
}

await page.evaluate(async () => {
  const db = await new Promise((resolve, reject) => {
    const request = indexedDB.open("royacheck-offline", 1);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  await new Promise((resolve, reject) => {
    const tx = db.transaction("observations", "readwrite");
    tx.objectStore("observations").clear();
    tx.oncomplete = () => { db.close(); resolve(); };
    tx.onerror = () => { db.close(); reject(tx.error); };
  });
});
await refreshList();
assert.equal(await listItemCount(), 0, "Initial saved-record list should be empty");

await putRecord(seedRecord("seed-a", "visible_rust", "visible_rust", 1));
await putRecord(seedRecord("seed-b", "not_sure", "request_review", 2));
await putRecord(seedRecord("seed-c", "no_visible_rust", "no_visible_rust", 3));
await refreshList();
assert.equal(await listItemCount(), 3, "Seeded list count must equal database count");

await Promise.all(Array.from({ length: 5 }, () => page.click("#refreshRecordsButton")));
await page.waitForTimeout(300);
assert.equal(await listItemCount(), 3, "Rapid refresh must not duplicate record cards");
assert.equal((await dbRecords()).length, 3, "Database count should remain unchanged after rapid refresh");

await page.locator('[data-record-id="seed-b"] button').first().click();
assert.equal(await page.locator("#persistentReviewCard").isHidden(), false, "Persistent review card should open for seed-b");
await deleteDirect("seed-b");
await page.locator('[data-record-id="seed-b"] button').first().click();
await page.waitForFunction(() => document.querySelector("#persistentReviewStatus")?.textContent.includes("no longer available"));
assert.equal(await page.locator("#persistentReviewCard").isHidden(), true, "Deleted record must not render a persistent review card");

await refreshList();
const beforeIds = (await dbRecords()).map((record) => record.id).sort();
assert.deepEqual(beforeIds, ["seed-a", "seed-c"], "Direct stale delete should remove only seed-b");
await page.locator('[data-record-id="seed-a"] button.danger').click();
await page.waitForTimeout(300);
const afterIds = (await dbRecords()).map((record) => record.id).sort();
assert.deepEqual(afterIds, ["seed-c"], "Per-record delete must remove only the target ID");
assert.equal(await listItemCount(), 1, "List count must match database after per-record delete");

await page.setInputFiles("#imageInput", { name: "too-small.png", mimeType: "image/png", buffer: tinyPng });
await page.waitForFunction(() => !document.querySelector("#preview")?.hidden);
await page.click("#runButton");
await page.waitForFunction(() => document.querySelector("#proposalLabel")?.dataset.route === "not_sure", null, { timeout: 60000 });
await page.selectOption("#humanDisposition", "visible_rust");
await page.waitForFunction(() => document.querySelector("#lugisuPrompt")?.textContent.includes("AI proposal: not sure"));
const languageText = await page.locator("#lugisuPrompt").innerText();
assert.ok(languageText.includes("AI proposal: not sure"), "Local-language panel must preserve actual AI proposal");
assert.ok(languageText.includes("Human choice: Visible rust observation"), "Local-language panel must show human choice separately");
assert.ok(!languageText.includes("AI proposal: visible rust"), "Human choice must not be mislabeled as AI proposal");
assert.ok(languageText.includes("actual Lugisu/Lumasaba wording pending fluent human validation"), "Local-language panel must not claim validated Lugisu/Lumasaba text");

assert.equal(await page.locator("#saveButton").isDisabled(), true, "Save should require confirmation");
await page.check("#humanConfirm");
await page.fill("#farmerNote", "follow-up browser test");
await page.click("#saveButton");
await page.waitForFunction(() => !document.querySelector("#savedSection")?.hidden);
await page.waitForTimeout(300);
assert.equal((await dbRecords()).length, 2, "Real save must add one local record");
assert.equal(await listItemCount(), 2, "record-saved event must refresh section 5");

await page.click("#deleteButton");
await page.waitForTimeout(300);
assert.equal(await page.locator("#savedSection").isHidden(), true, "Section 4 delete should hide current record panel");
assert.equal(await listItemCount(), 1, "Section 4 delete should refresh section 5");

await page.setInputFiles("#imageInput", { name: "new-image.png", mimeType: "image/png", buffer: tinyPng });
await page.waitForFunction(() => document.querySelector("#lugisuPrompt")?.textContent.includes("none yet") || document.querySelector("#lugisuPrompt")?.textContent.includes("Actual Lugisu/Lumasaba wording is not claimed"));
const resetText = await page.locator("#lugisuPrompt").innerText();
assert.ok(!resetText.includes("AI proposal: not sure"), "Local-language panel must reset on new image selection");

await page.reload({ waitUntil: "domcontentloaded" });
await page.waitForSelector("#savedRecordsList");
await page.waitForFunction(() => window.__royacheckFollowups?.getAllRecords);
await refreshList();
assert.equal((await dbRecords()).length, 1, "Records must persist after reload");
assert.equal(await listItemCount(), 1, "List must render persisted records after reload");

await page.waitForFunction(() => document.querySelector("#offlineBadge")?.textContent.includes("verified"), null, { timeout: 60000 });
await context.setOffline(true);
await page.reload({ waitUntil: "domcontentloaded" });
await page.waitForSelector("#savedRecordsList", { timeout: 30000 });
await page.waitForFunction(() => window.__royacheckFollowups?.getAllRecords, null, { timeout: 30000 });
assert.equal(await listItemCount(), 1, "Saved-record list must render after offline reload");
await context.setOffline(false);

const section5Media = await page.locator("#savedRecordsSection img, #savedRecordsSection canvas, #savedRecordsSection [src], #savedRecordsSection a[href^='blob:']").count();
assert.equal(section5Media, 0, "Section 5 must not contain raw image, canvas, src media, or blob links");

for (const request of requests) {
  assert.notEqual(request.method, "POST", `Unexpected POST request: ${request.url}`);
  assert.notEqual(request.method, "PUT", `Unexpected PUT request: ${request.url}`);
  assert.ok(request.url.startsWith(origin) || request.url.startsWith("blob:"), `Unexpected external request: ${request.url}`);
}

await browser.close();

console.log(JSON.stringify({
  status: "PASS",
  checks: [
    "rapid-refresh-dedup",
    "deleted-record-refusal",
    "targeted-delete",
    "real-save-record-saved-event",
    "section4-delete-refreshes-section5",
    "proposal-human-choice-separated",
    "language-panel-reset",
    "reload-persistence",
    "offline-list-render",
    "no-section5-media",
    "no-non-get-or-cross-origin"
  ]
}, null, 2));
