import * as ort from "./vendor/onnxruntime-web/ort.wasm.min.mjs";\n\nconst MODEL_URL = "./assets/model/royacheck_a0_fp32.onnx";
const MODEL_SHA256 = "4037c09663190b7caed0773e525e5da39bd05286992612537991358b7acfd041";
const T_RUST = 0.50;
const T_HEALTHY = 0.70;
const CLASS_NAMES = [
  "healthy",
  "rust_present",
  "leaf_miner_no_rust",
  "brown_leaf_spot_no_rust",
  "cercospora_no_rust",
];
const IMAGENET_MEAN = [0.485, 0.456, 0.406];
const IMAGENET_STD = [0.229, 0.224, 0.225];
const INPUT_SIZE = 224;

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
let selectedFile = null;
let selectedImage = null;
let previewUrl = null;
let currentProposal = null;
let currentSavedId = null;

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

async function loadModel() {
  if (!window.ort) throw new Error("ONNX Runtime Web did not load.");
  ort.env.wasm.numThreads = 1;
  ort.env.wasm.proxy = false;
  ort.env.wasm.wasmPaths = "./vendor/onnxruntime-web/";
  setStatus("Loading frozen local model…");
  session = await ort.InferenceSession.create(MODEL_URL, {
    executionProviders: ["wasm"],
    graphOptimizationLevel: "all",
  });
  if (!session.inputNames.includes("input") || !session.outputNames.includes("logits")) {
    throw new Error("Unexpected ONNX input/output contract.");
  }
  setStatus("Frozen model ready. Inference stays in this browser.");
  runButton.disabled = !selectedImage;
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

function bilinearResizeRgb(image) {
  const width = image.naturalWidth;
  const height = image.naturalHeight;
  if (width < INPUT_SIZE || height < INPUT_SIZE) {
    return { eligible: false, width, height };
  }

  sourceCanvas.width = width;
  sourceCanvas.height = height;
  const ctx = sourceCanvas.getContext("2d", { willReadFrequently: true });
  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(image, 0, 0, width, height);
  const src = ctx.getImageData(0, 0, width, height).data;

  const chw = new Float32Array(3 * INPUT_SIZE * INPUT_SIZE);
  const plane = INPUT_SIZE * INPUT_SIZE;

  for (let y = 0; y < INPUT_SIZE; y += 1) {
    const sy = Math.max(0, Math.min(height - 1, ((y + 0.5) * height / INPUT_SIZE) - 0.5));
    const y0 = Math.floor(sy);
    const y1 = Math.min(y0 + 1, height - 1);
    const wy = sy - y0;

    for (let x = 0; x < INPUT_SIZE; x += 1) {
      const sx = Math.max(0, Math.min(width - 1, ((x + 0.5) * width / INPUT_SIZE) - 0.5));
      const x0 = Math.floor(sx);
      const x1 = Math.min(x0 + 1, width - 1);
      const wx = sx - x0;

      const i00 = (y0 * width + x0) * 4;
      const i01 = (y0 * width + x1) * 4;
      const i10 = (y1 * width + x0) * 4;
      const i11 = (y1 * width + x1) * 4;
      const outIndex = y * INPUT_SIZE + x;

      for (let c = 0; c < 3; c += 1) {
        const top = src[i00 + c] * (1 - wx) + src[i01 + c] * wx;
        const bottom = src[i10 + c] * (1 - wx) + src[i11 + c] * wx;
        const value255 = top * (1 - wy) + bottom * wy;
        const value01 = value255 / 255.0;
        chw[c * plane + outIndex] = (value01 - IMAGENET_MEAN[c]) / IMAGENET_STD[c];
      }
    }
  }
  return { eligible: true, tensorData: chw, width, height };
}

function softmax(logits) {
  const max = Math.max(...logits);
  const exps = logits.map((value) => Math.exp(value - max));
  const denom = exps.reduce((sum, value) => sum + value, 0);
  return exps.map((value) => value / denom);
}

function routeFromProbabilities(probabilities) {
  let topIndex = 0;
  for (let i = 1; i < probabilities.length; i += 1) {
    if (probabilities[i] > probabilities[topIndex]) topIndex = i;
  }
  if (topIndex === 1 && probabilities[1] >= T_RUST) return "visible_rust";
  if (topIndex === 0 && probabilities[0] >= T_HEALTHY) return "no_visible_rust";
  return "not_sure";
}

function proposalCopy(route) {
  if (route === "visible_rust") {
    return {
      label: "visible rust",
      explanation: "Review first.",
      detail: "RoyaCheck proposes that the image shows visible evidence consistent with coffee leaf rust. This is not a confirmed diagnosis and does not recommend treatment.",
    };
  }
  if (route === "no_visible_rust") {
    return {
      label: "no visible rust",
      explanation: "Record and monitor.",
      detail: "RoyaCheck did not identify visible evidence consistent with rust in this image. This does not mean healthy, all clear, or no disease. Human review remains available if concern persists.",
    };
  }
  return {
    label: "not sure",
    explanation: "Retake or request review.",
    detail: "RoyaCheck is uncertain, the image may be unsuitable, or an unsupported condition may be present. It makes no rust conclusion.",
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
  runButton.disabled = true;
  setStatus("Running local preprocessing and inference…");
  try {
    const preprocessed = bilinearResizeRgb(selectedImage);
    if (!preprocessed.eligible) {
      renderProposal("not_sure");
      setStatus(`Image is ${preprocessed.width}×${preprocessed.height}; minimum is 224×224. Routed to not sure without model inference.`);
      return;
    }
    if (!session) await loadModel();
    const tensor = new ort.Tensor("float32", preprocessed.tensorData, [1, 3, INPUT_SIZE, INPUT_SIZE]);
    const results = await session.run({ input: tensor });
    const logits = Array.from(results.logits.data);
    if (logits.length !== CLASS_NAMES.length) throw new Error("Unexpected model output shape.");
    const probabilities = softmax(logits);
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

async function registerOfflineSupport() {
  if (!("serviceWorker" in navigator)) {
    offlineBadge.textContent = "Offline cache unavailable";
    return;
  }
  try {
    await navigator.serviceWorker.register("./sw.js", { scope: "./" });
    const persisted = navigator.storage?.persist ? await navigator.storage.persist() : false;
    offlineBadge.textContent = persisted ? "Offline cache · persistent storage requested" : "Offline cache ready";
  } catch {
    offlineBadge.textContent = "Offline cache needs HTTP(S)";
  }
}

imageInput.addEventListener("change", async () => {
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
saveButton.addEventListener("click", () => saveObservation().catch((error) => setStatus(error.message, true)));
reviewCardButton.addEventListener("click", prepareReviewCard);
deleteButton.addEventListener("click", () => removeCurrentRecord().catch((error) => setStatus(error.message, true)));

registerOfflineSupport();
loadModel().catch((error) => setStatus(`Model load failed: ${error.message}`, true));
