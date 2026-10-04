const $ = (id) => document.getElementById(id);

const savedRecordsSection = $("savedRecordsSection");
const savedRecordsList = $("savedRecordsList");
const refreshRecordsButton = $("refreshRecordsButton");
const clearReviewPanelButton = $("clearReviewPanelButton");
const persistentReviewCard = $("persistentReviewCard");
const persistentReviewFields = $("persistentReviewFields");
const persistentReviewStatus = $("persistentReviewStatus");
const localLanguagePrompt = $("lugisuPrompt");

let refreshRequestSeq = 0;
let activeReviewRecordId = null;

const LOCAL_LANGUAGE_PROMPTS = {
  visible_rust: {
    title: "Visible rust",
    english: "Fixed string for visible-rust decision support: review the leaf before deciding. This is not a diagnosis and not treatment advice.",
    action: "Review first",
  },
  no_visible_rust: {
    title: "No visible rust",
    english: "Fixed string for no-visible-rust decision support: record and monitor, but do not treat this as all clear. This is not a diagnosis and not treatment advice.",
    action: "Record and monitor",
  },
  not_sure: {
    title: "Not sure",
    english: "Fixed string for uncertain output: retake the image or request human review. This is not a diagnosis and not treatment advice.",
    action: "Retake or request review",
  },
  review_later: {
    title: "Review later",
    english: "Fixed string for review-later action: the text record is saved in this browser for later human review. No photo is retained or sent.",
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

function clearPersistentReviewCard() {
  activeReviewRecordId = null;
  persistentReviewFields.innerHTML = "";
  persistentReviewCard.hidden = true;
  setPersistentStatus("");
}

function appendField(label, value) {
  const dt = document.createElement("dt");
  const dd = document.createElement("dd");
  dt.textContent = label;
  dd.textContent = value || "—";
  persistentReviewFields.append(dt, dd);
}

async function showPersistentReviewCard(id) {
  const record = await getRecord(id);
  if (!record) {
    persistentReviewFields.innerHTML = "";
    persistentReviewCard.hidden = true;
    activeReviewRecordId = null;
    setPersistentStatus("That local record is no longer available in this browser.", true);
    await refreshSavedRecords({ preserveReviewCard: false, preserveStatus: true });
    return;
  }

  activeReviewRecordId = record.id;
  persistentReviewFields.innerHTML = "";
  appendField("Record ID", record.id);
  appendField("Capture date", record.capture_date);
  appendField("Saved at", record.saved_at ? new Date(record.saved_at).toLocaleString() : "—");
  appendField("AI proposal", `${aiLabel(record.ai_proposal)} — AI proposal only`);
  appendField("Human disposition", humanLabel(record.human_disposition));
  appendField("Action route", record.action_route);
  appendField("Farmer note", record.farmer_note);
  appendField("Image", record.raw_image_retained === false ? "Not retained / not sent" : "Retention status unavailable — do not assume image is retained");
  appendField("Model SHA-256", record.model_sha256);
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
    if (!stillExists) clearPersistentReviewCard();
  } else if (!preserveReviewCard) {
    activeReviewRecordId = null;
    persistentReviewFields.innerHTML = "";
    persistentReviewCard.hidden = true;
    if (!preserveStatus) setPersistentStatus("");
  }
}

function currentProposalRoute() {
  const section = document.querySelector("#proposalSection");
  if (!section || section.hidden) return null;
  return document.querySelector("#proposalLabel")?.dataset.route || null;
}

function currentHumanDisposition() {
  const section = document.querySelector("#humanSection");
  if (!section || section.hidden) return "";
  return document.querySelector("#humanDisposition")?.value || "";
}

function renderLocalLanguagePrompt(key, context = {}) {
  const prompt = LOCAL_LANGUAGE_PROMPTS[key];
  if (!prompt || !localLanguagePrompt) return;
  const route = context.route ?? currentProposalRoute();
  const disposition = context.disposition ?? currentHumanDisposition();
  localLanguagePrompt.innerHTML = "";

  const title = document.createElement("strong");
  title.textContent = prompt.title;

  if (route) {
    const aiLine = document.createElement("span");
    aiLine.textContent = `AI proposal: ${aiLabel(route)} — proposal only, not a diagnosis and not treatment advice.`;
    localLanguagePrompt.append(title, aiLine);
  } else {
    const neutralLine = document.createElement("span");
    neutralLine.textContent = "No current AI proposal is active. Run the normal image flow before using proposal-specific wording.";
    localLanguagePrompt.append(title, neutralLine);
  }

  if (disposition) {
    const humanLine = document.createElement("span");
    humanLine.textContent = `Human choice: ${humanLabel(disposition)}.`;
    localLanguagePrompt.append(humanLine);
  }

  const english = document.createElement("span");
  english.textContent = prompt.english;

  const slot = document.createElement("span");
  slot.className = "translation-slot";
  slot.textContent = "Actual Lugisu/Lumasaba wording: pending fluent human validation; not claimed in this build.";

  const validation = document.createElement("span");
  validation.className = "hint";
  validation.textContent = "Validated localized usability has not been established. Fixed-string scaffold only; no chatbot or free-form translation.";

  const action = document.createElement("span");
  action.className = "pill";
  action.textContent = `Human action: ${prompt.action}`;

  localLanguagePrompt.append(english, slot, validation, action);
}

function resetLocalLanguagePrompt() {
  if (!localLanguagePrompt) return;
  localLanguagePrompt.innerHTML = "";
  const title = document.createElement("strong");
  title.textContent = "Choose a prompt or run the normal flow.";
  const text = document.createElement("span");
  text.textContent = "This scaffold shows fixed English instructions while actual Lugisu/Lumasaba wording remains pending fluent human validation.";
  localLanguagePrompt.append(title, text);
}

function syncLocalLanguageToCurrentFlow() {
  const route = currentProposalRoute();
  const disposition = currentHumanDisposition();
  const key = disposition && disposition !== "request_review" ? disposition : route;
  if (key && LOCAL_LANGUAGE_PROMPTS[key]) {
    renderLocalLanguagePrompt(key, { route, disposition });
  } else if (!route) {
    resetLocalLanguagePrompt();
  }
}

document.querySelectorAll("[data-lugisu-step]").forEach((button) => {
  button.addEventListener("click", () => renderLocalLanguagePrompt(button.dataset.lugisuStep));
});

document.querySelector("#humanDisposition")?.addEventListener("change", syncLocalLanguageToCurrentFlow);
document.querySelector("#imageInput")?.addEventListener("change", resetLocalLanguagePrompt);
document.addEventListener("royacheck:proposal-rendered", syncLocalLanguageToCurrentFlow);
refreshRecordsButton?.addEventListener("click", () => refreshSavedRecords({ preserveReviewCard: true }).catch((error) => setPersistentStatus(`Refresh failed: ${error.message}`, true)));
clearReviewPanelButton?.addEventListener("click", clearPersistentReviewCard);

document.addEventListener("royacheck:record-saved", () => {
  refreshSavedRecords({ preserveReviewCard: true }).catch((error) => setPersistentStatus(`Refresh failed: ${error.message}`, true));
  renderLocalLanguagePrompt("review_later", { route: currentProposalRoute(), disposition: currentHumanDisposition() });
});

document.addEventListener("royacheck:record-deleted", (event) => {
  if (event.detail?.id && event.detail.id === activeReviewRecordId) clearPersistentReviewCard();
  refreshSavedRecords({ preserveReviewCard: true }).catch((error) => setPersistentStatus(`Refresh failed: ${error.message}`, true));
});

window.__royacheckFollowups = {
  localLanguagePrompts: LOCAL_LANGUAGE_PROMPTS,
  refreshSavedRecords,
  getAllRecords,
  getActiveReviewRecordId: () => activeReviewRecordId,
};

refreshSavedRecords({ preserveReviewCard: false }).catch((error) => setPersistentStatus(`Refresh failed: ${error.message}`, true));
