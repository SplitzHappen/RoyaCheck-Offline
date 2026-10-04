import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(path, "utf8");
const [html, js, followups, preprocess, sw, manifest] = await Promise.all([
  read("app/index.html"),
  read("app/app.js"),
  read("app/followups.js"),
  read("app/preprocess.js"),
  read("app/sw.js"),
  read("app/manifest.webmanifest"),
]);

const lockedFragments = [
  'export const T_RUST = 0.50;',
  'export const T_HEALTHY = 0.70;',
  '"healthy",',
  '"rust_present",',
  '"leaf_miner_no_rust",',
  '"brown_leaf_spot_no_rust",',
  '"cercospora_no_rust",',
  'export const IMAGENET_MEAN = [0.485, 0.456, 0.406];',
  'export const IMAGENET_STD = [0.229, 0.224, 0.225];',
  'export const INPUT_SIZE = 224;',
  'resizeTriangleRgbToU8',
  'triangleContribs',
  'routeFromProbabilities',
  '4037c09663190b7caed0773e525e5da39bd05286992612537991358b7acfd041',
];
for (const fragment of lockedFragments) {
  assert.ok(preprocess.includes(fragment), `Missing locked preprocessing fragment: ${fragment}`);
}

const requiredJsFragments = [
  'import * as ort from "./vendor/onnxruntime-web/ort.wasm.min.mjs";',
  'from "./preprocess.js"',
  'ort.env.wasm.numThreads = 1;',
  'ort.env.wasm.proxy = false;',
  'ort.env.wasm.wasmPaths = ORT_BASE_URL;',
  'executionProviders: ["wasm"]',
  'await sha256Hex(modelBytes)',
  'activeSession.run({ input: tensor })',
  'results.logits.data',
  'raw_image_retained: false',
  'human_disposition',
  'confirmed_by_role: "farmer_decision_maker"',
  'model_sha256: MODEL_SHA256',
  'cacheName: CACHE_NAME',
];
for (const fragment of requiredJsFragments) {
  assert.ok(js.includes(fragment), `Missing locked app contract fragment: ${fragment}`);
}

const followupFragments = [
  'const LUGISU_PROMPTS',
  'Lugisu translation pending human validation',
  'getAllRecords',
  'tx.objectStore("observations").getAll()',
  'deleteRecord(record.id)',
  'persistentReviewCard',
  'raw_image_retained',
];
for (const fragment of followupFragments) {
  assert.ok(followups.includes(fragment), `Missing follow-up contract fragment: ${fragment}`);
}

assert.ok(js.includes('const ORT_BASE_URL = new URL("./vendor/onnxruntime-web/", import.meta.url).href;'));
assert.ok(preprocess.includes('blank_canvas'));
assert.ok(!js.includes('\\n'), "App shell must not contain literal escaped newline artifacts.");

const appCacheName = js.match(/const CACHE_NAME = "([^"]+)";/)?.[1];
const swCacheName = sw.match(/const CACHE_NAME = "([^"]+)";/)?.[1];
assert.ok(appCacheName, "App cache name must be declared.");
assert.ok(swCacheName, "Service-worker cache name must be declared.");
assert.equal(appCacheName, swCacheName, "App and service-worker cache names must stay synchronized.");

const htmlLower = html.toLowerCase();
for (const output of ["visible rust", "no visible rust", "not sure"]) {
  assert.ok(htmlLower.includes(output), `Missing public output: ${output}`);
}
assert.ok(html.includes("not a diagnosis"));
assert.ok(html.includes("not treatment advice"));
assert.ok(html.includes("no RoCoLe external readout"));
assert.ok(html.includes("Only the human disposition becomes formal"));
assert.ok(html.includes("It does not verify that an image is a coffee leaf."));
assert.ok(html.includes("66 of 95 rust leaves"));
assert.ok(html.includes("27 of 95 rust leaves"));
assert.ok(html.includes("2 of 95 rust leaves"));
assert.ok(html.includes("7 of 117 other-condition leaves"));
assert.ok(html.includes('id="savedRecordsSection"'));
assert.ok(html.includes('id="lugisuSection"'));
assert.ok(html.includes('src="./followups.js"'));
assert.ok(html.includes("Validated localized usability has not been established."));
assert.ok(!html.includes("accepted rust recall"));
assert.ok(!html.includes('capture="environment"'));
assert.ok(!html.includes('<script src="./vendor/onnxruntime-web/ort.all.min.js"></script>'));
assert.ok(html.includes("script-src 'self' 'wasm-unsafe-eval'"));
assert.ok(!html.match(/https?:\/\//), "App shell must not depend on remote HTTP assets.");

for (const asset of [
  "./assets/model/royacheck_a0_fp32.onnx",
  "./preprocess.js",
  "./followups.js",
  "./vendor/onnxruntime-web/ort.wasm.min.mjs",
  "./vendor/onnxruntime-web/ort-wasm-simd-threaded.mjs",
  "./vendor/onnxruntime-web/ort-wasm-simd-threaded.wasm",
]) {
  assert.ok(sw.includes(asset), `Service worker missing core asset: ${asset}`);
}
assert.ok(sw.includes('const CACHE_NAME = "royacheck-stage8-a0-4037c096-20261004-r1";'));
assert.ok(!sw.includes('CACHE_NAME = "royacheck-stage8-a0-v1"'));

const parsedManifest = JSON.parse(manifest);
assert.equal(parsedManifest.display, "standalone");
assert.equal(parsedManifest.start_url, "./index.html");

console.log("Stage 8 static smoke checks: PASS");
