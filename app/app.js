import * as ort from "./vendor/onnxruntime-web/ort.wasm.min.mjs";
import {
  CLASS_NAMES,
  INPUT_SIZE,
  MODEL_SHA256,
  preprocessImageData,
  routeFromProbabilities,
} from "./preprocess.js";

const ORT_BASE_URL = new URL("./vendor/onnxruntime-web/", import.meta.url).href;
const MODEL_URL = "./assets/model/royacheck_a0_fp32.onnx";
const CACHE_NAME = "royacheck-stage8-a0-4037c096-20261004-r1";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./preprocess.js",
  "./manifest.webmanifest",
  "./assets/icon.svg",
  "./assets/model/royacheck_a0_fp32.onnx",
  "./vendor/onnxruntime-web/ort.wasm.min.mjs",
  "./vendor/onnxruntime-web/ort-wasm-simd-threaded.mjs",
  "./vendor/onnxruntime-web/ort-wasm-simd-threaded.wasm",
];

const $ = (id) => document.getElementById(id);
const imageInput = $("imageInput");
const preview = $("preview");
const runButton = $("runButton");
const modelStatus = $("modelStatus");
const proposalSection = $("proposalSection");
const proposalLabel = $("proposalLabel");
const proposalExplanation = $("proposalExplanation");
const proposalDetail = $("proposalDetail");
const humanSection = $("humanSection");
const humanDisposition = $("humanDisposition");
const humanConfirm = $("humanConfirm");
const farmerNote = $("farmerNote");
const saveButton = $("saveButton");
const savedSection = $("savedSection");
const savedRecord = $("savedRecord");
const reviewCardButton = $("reviewCardButton");
const reviewCard = $("reviewCard");
const reviewFields = $("reviewFields");
const deleteButton = $("deleteButton");
const offlineBadge = $("offlineBadge");
const sourceCanvas = $("sourceCanvas");

let session = null;
let modelLoadPromise = null;
let selectedFile = null;
let selectedImage = null;
let previewUrl = null;
let currentProposal = null;
let currentSavedId = null;
let inferenceToken = 0;

function setStatus(message, isError = false) {
  modelStatus.textContent = message;
  modelStatus.style.color = isError ? "#9b2c2c" : "";
}

function resetPostImageState() {
  currentProposal = null;
  currentSavedId = null;
  proposalSection.hidden = true;
  humanSection.hidden = true;
  savedSection.hidden = true;
  reviewCard.hidden = true;
  humanDisposition.value = "";
  humanConfirm.checked = false;
  farmerNote.value = "";
  updateSaveState();
}

async function sha256Hex(buffer) {
  const digest = await crypto.subtle.digest("SHA-256", buffer);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function loadModel() {
  if (session) return session;
  if (modelLoadPromise) return modelLoadPromise;

  modelLoadPromise = (async () => {
    ort.env.wasm.numThreads = 1;
    ort.env.wasm.proxy = false;
    ort.env.wasm.wasmPaths = ORT_BASE_URL;
    setStatus("Loading frozen local model…");

    const response = await fetch(MODEL_URL);
    if (!response.ok) throw new Error(`Model fetch failed with HTTP ${response.status}.`);
    const modelBytes = await response.arrayBuffer();
    const actualSha = await sha256Hex(modelBytes);
    if (actualSha !== MODEL_SHA256) {
      throw new Error("Frozen ONNX model SHA-256 mismatch; refusing to run inference.");
    }

    session = await ort.InferenceSession.create(modelBytes, {
      executionProviders: ["wasm"],
      graphOptimizationLevel: "all",
    });
    if (!session.inputNames.includes("input") || !session.outputNames.includes("logits")) {
      throw new Error("Unexpected ONNX input/output contract.");
    }
    setStatus("Frozen model ready. Inference stays in this browser.");
    runButton.disabled = !selectedImage;
    return session;
  })().catch((error) => {
    modelLoadPromise = null;
    throw error;
  });

  return modelLoadPromise;
}

function loadImageElement(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => resolve({ img, url });
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("The selected file could not be decoded as an image."));
    };
    img.src = url;
  });
}

function imageDataFromImage(image) {
  const width = image.naturalWidth;
  const height = image.naturalHeight;
  sourceCanvas.width = width;
  sourceCanvas.height = height;
  const ctx = sourceCanvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) throw new Error("Browser canvas is unavailable.");
  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(image, 0, 0, width, height);
  return ctx.getImageData(0, 0, width, height);
}

function softmax(logits) {
  const max = Math.max(...logits);
  const exps = logits.map((value) => Math.exp(value - max));
  const denom = exps.reduce((sum, value) => sum + value, 0);
  return exps.map((value) => value / denom);
}

function proposalCopy(route) {
  if (route === "visible_rust") {
    return {
      label: "visible rust",
      explanation: "Review first.",
      detail: "RoyaCheck proposes that the image shows visible evidence consistent with coffee leaf rust. This is not a confirmed diagnosis and does not recommend treatment. The model does not verify that the image is a coffee leaf.",
    };
  }
  if (route === "no_visible_rust") {
    return {
      label: "no visible rust",
      explanation: "Record and monitor.",
      detail: "RoyaCheck did not identify visible evidence consistent with rust in this image. This does not mean healthy, all clear, or no disease. The model does not verify that the image is a coffee leaf.",
    };
  }
  return {
    label: "not sure",
    explanation: "Retake or request review.",
    detail: "RoyaCheck is uncertain or an unsupported condition may be present. It makes no rust conclusion. The model does not verify that the image is a coffee leaf.",
  };
}

function renderProposal(route) {
  const copy = proposalCopy(route);
  currentProposal = route;
  proposalLabel.textContent = copy.label;
  proposalLabel.dataset.route = route;
  proposalExplanation.textContent = copy.explanation;
  proposalDetail.textContent = copy.detail;
  proposalSection.hidden = false;
  humanSection.hidden = false;
  humanDisposition.value = "";
  humanConfirm.checked = false;
  updateSaveState();
  proposalSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function runInference() {
  if (!selectedImage) return;
  const token = inferenceToken;
  runButton.disabled = true;
  setStatus("Running local preprocessing and inference…");

  try {
    let imageData;
    try {
      imageData = imageDataFromImage(selectedImage);
    } catch (error) {
      throw new Error(`Image pixels could not be read safely: ${error.message}`);
    }

    const preprocessed = preprocessImageData(imageData);
    if (!preprocessed.eligible) {
      if (preprocessed.reason === "too_small") {
        if (token !== inferenceToken) return;
        renderProposal("not_sure");
        setStatus(preprocessed.message);
        return;
      }
      throw new Error(preprocessed.message || "Image pixels could not be prepared safely.");
    }

    const activeSession = await loadModel();
    if (token !== inferenceToken) return;
    const tensor = new ort.Tensor("float32", preprocessed.tensorData, [1, 3, INPUT_SIZE, INPUT_SIZE]);
    const results = await activeSession.run({ input: tensor });
    const logits = Array.from(results.logits.data);
    if (logits.length !== CLASS_NAMES.length) throw new Error("Unexpected model output shape.");
    const probabilities = softmax(logits);
    if (token !== inferenceToken) return;
    renderProposal(routeFromProbabilities(probabilities));
    setStatus("Local inference complete. Review the proposal before choosing your disposition.");
  } catch (error) {
    console.error(error);
    setStatus(`Inference failed: ${error.message}`, true);
  } finally {
    runButton.disabled = !selectedImage;
  }
}

function updateSaveState() {
  saveButton.disabled = !(currentProposal && humanDisposition.value && humanConfirm.checked);
}

function actionRoute(disposition) {
  if (disposition === "visible_rust") return "Review first";
  if (disposition === "no_visible_rust") return "Record and monitor";
  return "Retake or request review";
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

async function putRecord(record) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("observations", "readwrite");
    tx.objectStore("observations").put(record);
    tx.oncomplete = () => { db.close(); resolve(); };
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
  }[value] || value;
}

function aiLabel(value) {
  return {
    visible_rust: "visible rust",
    no_visible_rust: "no visible rust",
    not_sure: "not sure",
  }[value] || value;
}

function renderSaved(record) {
  currentSavedId = record.id;
  savedRecord.innerHTML = "";
  const p = document.createElement("p");
  p.textContent = `${humanLabel(record.human_disposition)} — ${record.action_route}`;
  const meta = document.createElement("p");
  meta.className = "hint";
  meta.textContent = `Saved locally ${new Date(record.saved_at).toLocaleString()}. Photo not retained.`;
  savedRecord.append(p, meta);
  savedSection.hidden = false;
  reviewCard.hidden = true;
  savedSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function saveObservation() {
  if (saveButton.disabled) return;
  const disposition = humanDisposition.value;
  const record = {
    id: crypto.randomUUID(),
    crop: "coffee",
    capture_date: new Date().toISOString().slice(0, 10),
    saved_at: new Date().toISOString(),
    ai_proposal: currentProposal,
    human_disposition: disposition,
    confirmed_by_role: "farmer_decision_maker",
    action_route: actionRoute(disposition),
    farmer_note: farmerNote.value.trim(),
    raw_image_retained: false,
    model_sha256: MODEL_SHA256,
  };
  await putRecord(record);
  renderSaved(record);
  window.__royacheckLatestRecord = record;
}

function appendReviewField(label, value) {
  const dt = document.createElement("dt");
  const dd = document.createElement("dd");
  dt.textContent = label;
  dd.textContent = value || "—";
  reviewFields.append(dt, dd);
}

function prepareReviewCard() {
  const record = window.__royacheckLatestRecord;
  if (!record || record.id !== currentSavedId) return;
  reviewFields.innerHTML = "";
  appendReviewField("Crop", "Coffee");
  appendReviewField("Capture date", record.capture_date);
  appendReviewField("AI proposal", `${aiLabel(record.ai_proposal)} — AI proposal only`);
  appendReviewField("Human disposition", humanLabel(record.human_disposition));
  appendReviewField("Action route", record.action_route);
  appendReviewField("Farmer note", record.farmer_note);
  appendReviewField("Image", "Not retained / not sent");
  reviewCard.hidden = false;
}

async function removeCurrentRecord() {
  if (!currentSavedId) return;
  await deleteRecord(currentSavedId);
  currentSavedId = null;
  window.__royacheckLatestRecord = null;
  savedSection.hidden = true;
  reviewCard.hidden = true;
}

async function verifyCoreCache() {
  if (!("caches" in window)) return { ok: false, missing: CORE_ASSETS };
  const cache = await caches.open(CACHE_NAME);
  const missing = [];
  for (const asset of CORE_ASSETS) {
    const url = new URL(asset, window.location.href).href;
    const hit = await cache.match(url, { ignoreSearch: true }) || await cache.match(asset, { ignoreSearch: true });
    if (!hit) missing.push(asset);
  }
  return { ok: missing.length === 0, missing };
}

async function registerOfflineSupport() {
  if (!("serviceWorker" in navigator)) {
    offlineBadge.textContent = "Offline cache unavailable";
    return;
  }
  offlineBadge.textContent = "First load needs connection; preparing offline cache…";
  try {
    await navigator.serviceWorker.register("./sw.js", { scope: "./" });
    await navigator.serviceWorker.ready;
    const persisted = navigator.storage?.persist ? await navigator.storage.persist() : false;
    const cacheState = await verifyCoreCache();
    if (cacheState.ok) {
      offlineBadge.textContent = persisted ? "Offline cache verified · persistent storage requested" : "Offline cache verified";
    } else {
      offlineBadge.textContent = `First load needs connection; offline cache missing ${cacheState.missing.length} asset(s)`;
    }
  } catch {
    offlineBadge.textContent = "First load needs connection; offline cache not verified";
  }
}

imageInput.addEventListener("change", async () => {
  inferenceToken += 1;
  resetPostImageState();
  selectedFile = imageInput.files?.[0] || null;
  selectedImage = null;
  runButton.disabled = true;
  if (previewUrl) URL.revokeObjectURL(previewUrl);
  previewUrl = null;
  preview.hidden = true;
  if (!selectedFile) return;
  try {
    const loaded = await loadImageElement(selectedFile);
    selectedImage = loaded.img;
    previewUrl = loaded.url;
    preview.src = previewUrl;
    preview.hidden = false;
    runButton.disabled = !session;
    setStatus(session ? "Image ready for local inference." : "Image ready; loading model…");
    if (!session) await loadModel();
  } catch (error) {
    setStatus(error.message, true);
  }
});

runButton.addEventListener("click", runInference);
humanDisposition.addEventListener("change", updateSaveState);
humanConfirm.addEventListener("change", updateSaveState);
saveButton.addEventListener("click", () => saveObservation().catch((error) => setStatus(`Save failed: ${error.message}`, true)));
reviewCardButton.addEventListener("click", prepareReviewCard);
deleteButton.addEventListener("click", () => removeCurrentRecord().catch((error) => setStatus(`Delete failed: ${error.message}`, true)));

window.__royacheckLatestRecord = null;
window.__royacheckTest = {
  cacheName: CACHE_NAME,
  coreAssets: CORE_ASSETS,
  latestRecord: () => window.__royacheckLatestRecord,
};

loadModel().catch((error) => setStatus(`Model failed to load: ${error.message}`, true));
registerOfflineSupport();
