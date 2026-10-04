const $ = (id) => document.getElementById(id);

const savedRecordsSection = $("savedRecordsSection");
const savedRecordsList = $("savedRecordsList");
const refreshRecordsButton = $("refreshRecordsButton");
const clearReviewPanelButton = $("clearReviewPanelButton");
const persistentReviewCard = $("persistentReviewCard");
const persistentReviewFields = $("persistentReviewFields");
const saveButton = $("saveButton");
const savedSection = $("savedSection");
const lugisuPrompt = $("lugisuPrompt");

const LUGISU_PROMPTS = {
  visible_rust: {
    title: "Visible rust",
    english: "AI proposal: visible rust. Review the leaf before deciding.",
    lugisu_slot: "Lugisu translation pending human validation: visible rust / review first.",
    route: "Review first",
  },
  no_visible_rust: {
    title: "No visible rust",
    english: "AI proposal: no visible rust. This does not mean healthy or all clear.",
    lugisu_slot: "Lugisu translation pending human validation: no visible rust / record and monitor.",
    route: "Record and monitor",
  },
  not_sure: {
    title: "Not sure",
    english: "AI proposal: not sure. Retake the image or request human review.",
    lugisu_slot: "Lugisu translation pending human validation: not sure / request review.",
    route: "Retake or request review",
  },
  review_later: {
    title: "Review later",
    english: "Saved locally for later human review. No photo is retained or sent.",
    lugisu_slot: "Lugisu translation pending human validation: saved locally for review later.",
    route: "Review later",
  },
};

function openDb() {
  return new Promise((resolve, reject) => {
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
}

async function getAllRecords() {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("observations", "readonly");
    const request = tx.objectStore("observations").getAll();
    request.onsuccess = () => {
      const records = request.result
        .slice()
        .sort((a, b) => String(b.saved_at).localeCompare(String(a.saved_at)));
      resolve(records);
    };
    request.onerror = () => reject(request.error);
    tx.oncomplete = () => db.close();
    tx.onerror = () => { db.close(); reject(tx.error); };
  });
}

async function deleteRecord(id) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("observations", "readwrite");
    tx.objectStore("observations").delete(id);
    tx.oncomplete = () => { db.close(); resolve(); };
    tx.onerror = () => { db.close(); reject(tx.error); };
  });
}

function humanLabel(value) {
  return {
    visible_rust: "Visible rust observation",
    no_visible_rust: "No visible rust observation",
    not_sure: "Not sure",
    request_review: "Request human review",
  }[value] || value || "—";
}

function aiLabel(value) {
  return {
    visible_rust: "visible rust",
    no_visible_rust: "no visible rust",
    not_sure: "not sure",
  }[value] || value || "—";
}

function clearPersistentReviewCard() {
  persistentReviewFields.innerHTML = "";
  persistentReviewCard.hidden = true;
}

function appendField(label, value) {
  const dt = document.createElement("dt");
  const dd = document.createElement("dd");
  dt.textContent = label;
  dd.textContent = value || "—";
  persistentReviewFields.append(dt, dd);
}

function showPersistentReviewCard(record) {
  persistentReviewFields.innerHTML = "";
  appendField("Record ID", record.id);
  appendField("Capture date", record.capture_date);
  appendField("Saved at", record.saved_at ? new Date(record.saved_at).toLocaleString() : "—");
  appendField("AI proposal", `${aiLabel(record.ai_proposal)} — AI proposal only`);
  appendField("Human disposition", humanLabel(record.human_disposition));
  appendField("Action route", record.action_route);
  appendField("Farmer note", record.farmer_note);
  appendField("Image", record.raw_image_retained ? "Unexpectedly retained" : "Not retained / not sent");
  appendField("Model SHA-256", record.model_sha256);
  persistentReviewCard.hidden = false;
}

function recordSummary(record) {
  const savedAt = record.saved_at ? new Date(record.saved_at).toLocaleString() : "unknown time";
  return `${humanLabel(record.human_disposition)} — ${record.action_route || "No route"} — ${savedAt}`;
}

async function refreshSavedRecords() {
  if (!savedRecordsSection) return;
  clearPersistentReviewCard();
  savedRecordsList.innerHTML = "";
  const records = await getAllRecords();

  if (records.length === 0) {
    const empty = document.createElement("p");
    empty.className = "hint";
    empty.textContent = "No saved local observations yet.";
    savedRecordsList.append(empty);
    return;
  }

  for (const record of records) {
    const item = document.createElement("article");
    item.className = "record-item";

    const summary = document.createElement("p");
    summary.textContent = recordSummary(record);

    const meta = document.createElement("p");
    meta.className = "hint";
    meta.textContent = `AI proposal: ${aiLabel(record.ai_proposal)}. Raw image retained: ${record.raw_image_retained === false ? "false" : "unexpected"}.`;

    const buttons = document.createElement("div");
    buttons.className = "button-row";

    const viewButton = document.createElement("button");
    viewButton.type = "button";
    viewButton.textContent = "View text review card";
    viewButton.addEventListener("click", () => showPersistentReviewCard(record));

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "danger";
    deleteButton.textContent = "Delete saved record";
    deleteButton.addEventListener("click", async () => {
      await deleteRecord(record.id);
      await refreshSavedRecords();
    });

    buttons.append(viewButton, deleteButton);
    item.append(summary, meta, buttons);
    savedRecordsList.append(item);
  }
}

function renderLugisuPrompt(key) {
  const prompt = LUGISU_PROMPTS[key];
  if (!prompt || !lugisuPrompt) return;
  lugisuPrompt.innerHTML = "";
  const title = document.createElement("strong");
  title.textContent = prompt.title;
  const english = document.createElement("span");
  english.textContent = prompt.english;
  const slot = document.createElement("span");
  slot.className = "translation-slot";
  slot.textContent = prompt.lugisu_slot;
  const route = document.createElement("span");
  route.className = "pill";
  route.textContent = `Route: ${prompt.route}`;
  lugisuPrompt.append(title, english, slot, route);
}

document.querySelectorAll("[data-lugisu-step]").forEach((button) => {
  button.addEventListener("click", () => renderLugisuPrompt(button.dataset.lugisuStep));
});

refreshRecordsButton?.addEventListener("click", () => refreshSavedRecords().catch(console.error));
clearReviewPanelButton?.addEventListener("click", clearPersistentReviewCard);
saveButton?.addEventListener("click", () => setTimeout(() => refreshSavedRecords().catch(console.error), 250));

if (savedSection) {
  const observer = new MutationObserver(() => {
    if (!savedSection.hidden) refreshSavedRecords().catch(console.error);
  });
  observer.observe(savedSection, { attributes: true, attributeFilter: ["hidden"] });
}

window.__royacheckFollowups = {
  lugisuPrompts: LUGISU_PROMPTS,
  refreshSavedRecords,
  getAllRecords,
};

refreshSavedRecords().catch(console.error);
