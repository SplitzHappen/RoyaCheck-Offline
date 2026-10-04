import assert from "node:assert/strict";
import { chromium } from "playwright";

const baseUrl = process.env.ROYA_BASE_URL || "http://127.0.0.1:4173/app/";

const browser = await chromium.launch();
const context = await browser.newContext({ serviceWorkers: "allow" });
const page = await context.newPage();
const requests = [];
page.on("request", (request) => requests.push({ method: request.method(), url: request.url() }));

async function seedRecord(id, overrides = {}) {
  await page.evaluate(async ({ id, overrides }) => {
    const db = await new Promise((resolve, reject) => {
      const request = indexedDB.open("royacheck-offline", 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains("observations")) db.createObjectStore("observations", { keyPath: "id" });
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    const record = {
      id,
      crop: "coffee",
      capture_date: "2026-10-04",
      saved_at: new Date(Date.now() + Number(id.replace(/\D/g, "")) * 1000).toISOString(),
      ai_proposal: "visible_rust",
      human_disposition: "visible_rust",
      confirmed_by_role: "farmer_decision_maker",
      action_route: "Review first",
      farmer_note: "seeded browser follow-up test",
      raw_image_retained: false,
      model_sha256: "4037c09663190b7caed0773e525e5da39bd05286992612537991358b7acfd041",
      ...overrides,
    };
    await new Promise((resolve, reject) => {
      const tx = db.transaction("observations", "readwrite");
      tx.objectStore("observations").put(record);
      tx.oncomplete = () => { db.close(); resolve(); };
      tx.onerror = () => { db.close(); reject(tx.error); };
    });
  }, { id, overrides });
}

async function dbCount() {
  return await page.evaluate(async () => {
    const db = await new Promise((resolve, reject) => {
      const request = indexedDB.open("royacheck-offline", 1);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    return await new Promise((resolve, reject) => {
      const tx = db.transaction("observations", "readonly");
      const count = tx.objectStore("observations").count();
      count.onsuccess = () => resolve(count.result);
      count.onerror = () => reject(count.error);
      tx.oncomplete = () => db.close();
    });
  });
}

async function listCount() {
  return await page.locator("#savedRecordsList .record-item").count();
}

async function refreshAndAssertCount() {
  await page.click("#refreshRecordsButton");
  await page.waitForFunction(async () => {
    const listCount = document.querySelectorAll("#savedRecordsList .record-item").length;
    const db = await new Promise((resolve, reject) => {
      const request = indexedDB.open("royacheck-offline", 1);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    const dbCount = await new Promise((resolve, reject) => {
      const tx = db.transaction("observations", "readonly");
      const count = tx.objectStore("observations").count();
      count.onsuccess = () => resolve(count.result);
      count.onerror = () => reject(count.error);
      tx.oncomplete = () => db.close();
    });
    return listCount === dbCount;
  });
  assert.equal(await listCount(), await dbCount());
}

await page.goto(baseUrl, { waitUntil: "networkidle" });
await page.waitForSelector("#savedRecordsSection");
const origin = new URL(baseUrl).origin;

for (const request of requests) {
  assert.equal(request.method, "GET", `Unexpected default non-GET request: ${request.method} ${request.url}`);
  assert.equal(new URL(request.url).origin, origin, `Unexpected default external request: ${request.url}`);
}

await seedRecord("followup-1");
await seedRecord("followup-2", { ai_proposal: "no_visible_rust", human_disposition: "no_visible_rust", action_route: "Record and monitor" });
await seedRecord("followup-3", { ai_proposal: "not_sure", human_disposition: "request_review", action_route: "Retake or request review" });

await refreshAndAssertCount();
assert.equal(await dbCount(), 3);
assert.equal(await listCount(), 3);

await Promise.all([
  page.click("#refreshRecordsButton"),
  page.click("#refreshRecordsButton"),
  page.click("#refreshRecordsButton"),
]);
await page.waitForTimeout(250);
assert.equal(await dbCount(), 3);
assert.equal(await listCount(), 3, "Rapid refreshes must not duplicate list items");

await page.locator("#savedRecordsList .record-item").first().getByText("View text review card").click();
await page.waitForFunction(() => !document.querySelector("#persistentReviewCard")?.hidden);
assert.equal(await page.locator("#savedRecordsSection img, #savedRecordsSection canvas").count(), 0, "Saved-record review section must not render image/canvas elements");
assert.equal(await page.locator("#savedRecordsSection [src^='blob:']").count(), 0, "Saved-record review section must not render blob previews");

page.on("dialog", (dialog) => dialog.accept());
await page.locator("#savedRecordsList .record-item").first().getByText("Delete saved record").click();
await page.waitForFunction(() => document.querySelectorAll("#savedRecordsList .record-item").length === 2);
assert.equal(await dbCount(), 2);
assert.equal(await listCount(), 2);
assert.equal(await page.locator("#persistentReviewCard").isHidden(), true, "Deleting the active saved-record list item must clear its review card");

await page.click("[data-lugisu-step='visible_rust']");
await page.waitForFunction(() => document.querySelector("#lugisuPrompt")?.textContent.includes("Draft Lugisu string"));
assert.ok((await page.locator("#lugisuPrompt").innerText()).includes("unvalidated"));
assert.ok((await page.locator("#lugisuPrompt").innerText()).includes("Human action: Review first"));

await page.reload({ waitUntil: "networkidle" });
await page.waitForSelector("#savedRecordsSection");
await refreshAndAssertCount();
assert.equal(await dbCount(), 2);
assert.equal(await listCount(), 2, "Persisted records should render after reload");

await page.waitForFunction(() => document.querySelector("#offlineBadge")?.textContent.includes("verified"), null, { timeout: 60000 });
await context.setOffline(true);
await page.reload({ waitUntil: "domcontentloaded" });
await page.waitForSelector("#savedRecordsSection");
await refreshAndAssertCount();
assert.equal(await listCount(), await dbCount(), "Saved-record list should render after offline reload");
await context.setOffline(false);

for (const request of requests) {
  assert.notEqual(request.method, "POST", `Unexpected POST request: ${request.url}`);
  assert.notEqual(request.method, "PUT", `Unexpected PUT request: ${request.url}`);
  if (request.url.startsWith("blob:")) continue;
  assert.equal(new URL(request.url).origin, origin, `Unexpected external request: ${request.url}`);
}

await browser.close();

console.log(JSON.stringify({
  status: "PASS",
  records_after_delete: 2,
  rapid_refresh_deduplicated: true,
  offline_saved_record_list: true,
  no_raw_image_elements_in_section_5: true,
}, null, 2));
