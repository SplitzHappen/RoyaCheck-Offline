const $ = (id) => document.getElementById(id);

const savedRecordsSection = $("savedRecordsSection");
const savedRecordsList = $("savedRecordsList");
const refreshRecordsButton = $("refreshRecordsButton");
const clearReviewPanelButton = $("clearReviewPanelButton");
const persistentReviewCard = $("persistentReviewCard");
const persistentReviewFields = $("persistentReviewFields");
const persistentReviewStatus = $("persistentReviewStatus");
const localLanguagePrompt = $("lugisuPrompt");
const imageInput = $("imageInput");
const humanDisposition = $("humanDisposition");

let refreshRequestSeq = 0;
let activeReviewRecordId = null;
let latestAiProposal = null;

const FIXED_STRINGS = {
  visible_rust: {
    title: "Visible rust",
    english: "AI proposal only: visible rust. Review the leaf before deciding. Not a diagnosis and not treatment advice.",
    action: "Review first",
  },
  no_visible_rust: {
    title: "No visible rust",
    english: "AI proposal only: no visible rust. This does not mean healthy or all clear. Not a diagnosis and not treatment advice.",
    action: "Record and monitor",
  },
  not_sure: {
    title: "Not sure",
    english: "AI proposal only: not sure. Retake the image or request human review. Not a diagnosis and not treatment advice.",
    action: "Retake or request review",
  },
  request_review: {
    title: "Request human review",
    english: "Human choice: request human review. Nothing is sent automatically and no photo is retained.",
    action: "Request human review",
  },
  review_later: {
    title: "Review later",
    english: "Human action: saved locally for later review. Stored only in this browser; no photo is retained or sent.",
    action: "Review later",
  },
};

function setPersistentStatus(message, isError = false) {
  if (!persistentReviewStatus) return;
  persistentReviewStatus.textContent = message || "";
  persistentReviewStatus.style.color = isError ? "#9b2c2c" : "";
}

function dispatchLocalRecordEvent(type, detail) {
  document.dispatchEvent(new CustomEvent(type, { detail }));
}

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

async function getRecord(id) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("observations", "readonly");
    const request = tx.objectStore("observations").get(id);
    request.onsuccess = () => resolve(request.result || null);
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

function actionRoute(value) {
  if (value === "visible_rust") return "Review first";
  if (value === "no_visible_rust") return "Record and monitor";
  return "Retake or request review";
}

function clearPersistentReviewCard({ preserveStatus = false } = {}) {
  activeReviewRecordId = null;
  persistentReviewFields.innerHTML = "";
  persistentReviewCard.hidden = true;
  if (!preserveStatus) setPersistentStatus("");
}

function appendField(container, label, value) {
  const dt = document.createElement("dt");
  const dd = document.createElement("dd");
  dt.textContent = label;
  dd.textContent = value || "—";
  container.append(dt, dd);
}

async function showPersistentReviewCard(id) {
  const record = await getRecord(id);
  if (!record) {
    clearPersistentReviewCard({ preserveStatus: true });
    setPersistentStatus("That local record is no longer available in this browser.", true);
    await refreshSavedRecords({ preserveReviewCard: false, preserveStatus: true });
    return;
  }

  activeReviewRecordId = record.id;
  persistentReviewFields.innerHTML = "";
  appendField(persistentReviewFields, "Record ID", record.id);
  appendField(persistentReviewFields, "Capture date", record.capture_date);
  appendField(persistentReviewFields, "Saved at", record.saved_at ? new Date(record.saved_at).toLocaleString() : "—");
  appendField(persistentReviewFields, "AI proposal", `${aiLabel(record.ai_proposal)} — AI proposal only`);
  appendField(persistentReviewFields, "Human disposition", humanLabel(record.human_disposition));
  appendField(persistentReviewFields, "Action route", record.action_route);
  appendField(persistentReviewFields, "Farmer note", record.farmer_note);
  appendField(persistentReviewFields, "Image", record.raw_image_retained === false ? "Not retained / not sent" : "Retention status unavailable — do not assume image is retained");
  appendField(persistentReviewFields, "Model SHA-256", record.model_sha256);
  persistentReviewCard.hidden = false;
  setPersistentStatus("");
}

function recordSummary(record) {
  const savedAt = record.saved_at ? new Date(record.saved_at).toLocaleString() : "unknown time";
  return `${humanLabel(record.human_disposition)} — ${record.action_route || "No action route"} — ${savedAt}`;
}

function buildRecordItem(record) {
  const item = document.createElement("article");
  item.className = "record-item";
  item.dataset.recordId = record.id;

  const summary = document.createElement("p");
  summary.textContent = recordSummary(record);

  const meta = document.createElement("p");
  meta.className = "hint";
  meta.textContent = record.raw_image_retained === false
    ? `AI proposal: ${aiLabel(record.ai_proposal)}. Photo not retained or sent.`
    : `AI proposal: ${aiLabel(record.ai_proposal)}. Image retention status unavailable; do not assume a photo was retained.`;

  const buttons = document.createElement("div");
  buttons.className = "button-row";

  const viewButton = document.createElement("button");
  viewButton.type = "button";
  viewButton.textContent = "View text review card";
  viewButton.addEventListener("click", () => showPersistentReviewCard(record.id).catch((error) => setPersistentStatus(`Review card failed: ${error.message}`, true)));

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "danger";
  deleteButton.textContent = "Delete saved record";
  deleteButton.addEventListener("click", async () => {
    if (!confirm("Delete this local text record from this browser? This cannot be undone.")) return;
    try {
      await deleteRecord(record.id);
      if (activeReviewRecordId === record.id) clearPersistentReviewCard();
      dispatchLocalRecordEvent("royacheck:record-deleted", { id: record.id, source: "saved-record-list" });
      await refreshSavedRecords({ preserveReviewCard: true });
      setPersistentStatus("Local record deleted.");
    } catch (error) {
      setPersistentStatus(`Delete failed: ${error.message}`, true);
    }
  });

  buttons.append(viewButton, deleteButton);
  item.append(summary, meta, buttons);
  return item;
}

async function refreshSavedRecords({ preserveReviewCard = true, preserveStatus = false } = {}) {
  if (!savedRecordsSection) return;
  const requestId = ++refreshRequestSeq;
  const records = await getAllRecords();
  if (requestId !== refreshRequestSeq) return;

  const fragment = document.createDocumentFragment();

  if (records.length === 0) {
    const empty = document.createElement("p");
    empty.className = "hint";
    empty.textContent = "No saved local observations yet.";
    fragment.append(empty);
  } else {
    for (const record of records) {
      fragment.append(buildRecordItem(record));
    }
  }

  savedRecordsList.replaceChildren(fragment);

  if (preserveReviewCard && activeReviewRecordId) {
    const stillExists = records.some((record) => record.id === activeReviewRecordId);
    if (!stillExists) clearPersistentReviewCard({ preserveStatus });
  } else if (!preserveReviewCard) {
    clearPersistentReviewCard({ preserveStatus });
  }
}

function currentProposalRoute() {
  return document.querySelector("#proposalLabel")?.dataset.route || latestAiProposal || null;
}

function currentHumanDisposition() {
  return humanDisposition?.value || "";
}

function renderLocalLanguagePanel({ mode = "context", manualKey = null } = {}) {
  if (!localLanguagePrompt) return;
  const aiRoute = currentProposalRoute();
  const disposition = currentHumanDisposition();
  const selectedKey = manualKey || disposition || aiRoute;
  const selected = selectedKey ? FIXED_STRINGS[selectedKey] : null;

  localLanguagePrompt.innerHTML = "";

  const title = document.createElement("strong");
  title.textContent = selected ? selected.title : "Local-language scaffold pending fluent validation";

  const aiLine = document.createElement("span");
  aiLine.textContent = aiRoute
    ? `AI proposal: ${aiLabel(aiRoute)} — proposal only, not a diagnosis and not treatment advice.`
    : "AI proposal: none yet. Run the local AI check before using proposal-linked language.";

  const humanLine = document.createElement("span");
  humanLine.textContent = disposition
    ? `Human choice: ${humanLabel(disposition)}.`
    : "Human choice: none selected yet.";

  const english = document.createElement("span");
  english.textContent = selected ? selected.english : "English fixed-string scaffold only until a fluent reviewer supplies and validates Lugisu/Lumasaba wording.";

  const localSlot = document.createElement("span");
  localSlot.className = "translation-slot";
  localSlot.textContent = "Local-language slot: actual Lugisu/Lumasaba wording pending fluent human validation. No Lugisu/Lumasaba string is claimed in this build.";

  const validation = document.createElement("span");
  validation.className = "hint";
  validation.textContent = "Validated localized usability has not been established. Fixed strings only; no chatbot or free-form translation.";

  const action = document.createElement("span");
  action.className = "pill";
  action.textContent = selected
    ? `Human action: ${selected.action}`
    : "Human action: choose after review";

  localLanguagePrompt.append(title, aiLine, humanLine, english, localSlot, validation, action);
  localLanguagePrompt.dataset.mode = mode;
}

function resetLocalLanguagePanel() {
  latestAiProposal = null;
  if (!localLanguagePrompt) return;
  localLanguagePrompt.innerHTML = "";
  const title = document.createElement("strong");
  title.textContent = "Local-language scaffold pending fluent validation";
  const body = document.createElement("span");
  body.textContent = "Run the normal flow or choose a fixed-string rehearsal. Actual Lugisu/Lumasaba wording is not claimed in this build.";
  localLanguagePrompt.append(title, body);
  localLanguagePrompt.dataset.mode = "neutral";
}

document.querySelectorAll("[data-lugisu-step]").forEach((button) => {
  button.addEventListener("click", () => renderLocalLanguagePanel({ mode: "manual", manualKey: button.dataset.lugisuStep }));
});

humanDisposition?.addEventListener("change", () => renderLocalLanguagePanel({ mode: "context" }));
imageInput?.addEventListener("change", resetLocalLanguagePanel);

document.addEventListener("royacheck:proposal-rendered", (event) => {
  latestAiProposal = event.detail?.route || currentProposalRoute();
  renderLocalLanguagePanel({ mode: "context" });
});

refreshRecordsButton?.addEventListener("click", () => refreshSavedRecords({ preserveReviewCard: true }).catch((error) => setPersistentStatus(`Refresh failed: ${error.message}`, true)));
clearReviewPanelButton?.addEventListener("click", clearPersistentReviewCard);

document.addEventListener("royacheck:record-saved", () => {
  refreshSavedRecords({ preserveReviewCard: true }).catch((error) => setPersistentStatus(`Refresh failed: ${error.message}`, true));
  renderLocalLanguagePanel({ mode: "manual", manualKey: "review_later" });
});

document.addEventListener("royacheck:record-deleted", (event) => {
  if (event.detail?.id && event.detail.id === activeReviewRecordId) clearPersistentReviewCard();
  refreshSavedRecords({ preserveReviewCard: true }).catch((error) => setPersistentStatus(`Refresh failed: ${error.message}`, true));
});

window.__royacheckFollowups = {
  fixedStrings: FIXED_STRINGS,
  refreshSavedRecords,
  getAllRecords,
  getRecord,
  resetLocalLanguagePanel,
  getActiveReviewRecordId: () => activeReviewRecordId,
  latestAiProposal: () => latestAiProposal,
};

resetLocalLanguagePanel();
refreshSavedRecords({ preserveReviewCard: false }).catch((error) => setPersistentStatus(`Refresh failed: ${error.message}`, true));
