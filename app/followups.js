const $ = (id) => document.getElementById(id);

const savedRecordsSection = $("savedRecordsSection");
const savedRecordsList = $("savedRecordsList");
const refreshRecordsButton = $("refreshRecordsButton");
const clearReviewPanelButton = $("clearReviewPanelButton");
const persistentReviewCard = $("persistentReviewCard");
const persistentReviewFields = $("persistentReviewFields");
const persistentReviewStatus = $("persistentReviewStatus");
const lugisuPrompt = $("lugisuPrompt");

let refreshRequestSeq = 0;
let activeReviewRecordId = null;

const LUGISU_PROMPTS = {
  visible_rust: {
    title: "Visible rust",
    english: "AI proposal: visible rust. Review the leaf before deciding.",
    lugisu_draft: "Obulwadde bwa roya bubonekera ku likoola. Kebera n’omuntu omumanyi nga tonasalawo.",
    action: "Review first",
  },
  no_visible_rust: {
    title: "No visible rust",
    english: "AI proposal: no visible rust. This does not mean healthy or all clear.",
    lugisu_draft: "Roya teraboneka ku kifaananyi kino. Kino tekitegeeza nti omuti mulamu oba nti tewali bulwadde.",
    action: "Record and monitor",
  },
  not_sure: {
    title: "Not sure",
    english: "AI proposal: not sure. Retake the image or request human review.",
    lugisu_draft: "Tekitegeerekeka bulungi. Ddamu okukuba ekifaananyi oba saba omuntu omumanyi akebere.",
    action: "Retake or request review",
  },
  review_later: {
    title: "Review later",
    english: "Saved locally for later human review. No photo is retained or sent.",
    lugisu_draft: "Ekiwandiiko kiterekiddwa mu browser eno okwebuuza oluvannyuma. Ekifaananyi tekisigaziddwa era tekisindikiddwa.",
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
    clearPersistentReviewCard();
    setPersistentStatus("That local record is no longer available in this browser.", true);
    await refreshSavedRecords({ preserveReviewCard: false });
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

async function refreshSavedRecords({ preserveReviewCard = true } = {}) {
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
    clearPersistentReviewCard();
  }
}

function currentProposalRoute() {
  return document.querySelector("#proposalLabel")?.dataset.route || null;
}

function currentHumanDisposition() {
  return document.querySelector("#humanDisposition")?.value || "";
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
  slot.setAttribute("lang", "myx");
  slot.textContent = `Draft Lugisu string — unvalidated, pending fluent human review: ${prompt.lugisu_draft}`;

  const validation = document.createElement("span");
  validation.className = "hint";
  validation.textContent = "Do not use as validated Lugisu. This is a bounded fixed-string draft for review only.";

  const action = document.createElement("span");
  action.className = "pill";
  action.textContent = `Human action: ${prompt.action}`;

  lugisuPrompt.append(title, english, slot, validation, action);
}

function syncLugisuToCurrentFlow() {
  const disposition = currentHumanDisposition();
  const route = currentProposalRoute();
  const key = disposition && disposition !== "request_review" ? disposition : route;
  if (key && LUGISU_PROMPTS[key]) {
    renderLugisuPrompt(key);
  }
}

document.querySelectorAll("[data-lugisu-step]").forEach((button) => {
  button.addEventListener("click", () => renderLugisuPrompt(button.dataset.lugisuStep));
});

document.querySelector("#humanDisposition")?.addEventListener("change", syncLugisuToCurrentFlow);
document.addEventListener("royacheck:proposal-rendered", syncLugisuToCurrentFlow);
refreshRecordsButton?.addEventListener("click", () => refreshSavedRecords({ preserveReviewCard: true }).catch((error) => setPersistentStatus(`Refresh failed: ${error.message}`, true)));
clearReviewPanelButton?.addEventListener("click", clearPersistentReviewCard);

document.addEventListener("royacheck:record-saved", () => {
  refreshSavedRecords({ preserveReviewCard: true }).catch((error) => setPersistentStatus(`Refresh failed: ${error.message}`, true));
  renderLugisuPrompt("review_later");
});

document.addEventListener("royacheck:record-deleted", (event) => {
  if (event.detail?.id && event.detail.id === activeReviewRecordId) clearPersistentReviewCard();
  refreshSavedRecords({ preserveReviewCard: true }).catch((error) => setPersistentStatus(`Refresh failed: ${error.message}`, true));
});

window.__royacheckFollowups = {
  lugisuPrompts: LUGISU_PROMPTS,
  refreshSavedRecords,
  getAllRecords,
  getActiveReviewRecordId: () => activeReviewRecordId,
};

refreshSavedRecords({ preserveReviewCard: false }).catch((error) => setPersistentStatus(`Refresh failed: ${error.message}`, true));
