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
  '"./followups.js"',
  'royacheck:record-saved',
  'royacheck:record-deleted',
];
for (const fragment of requiredJsFragments) {
  assert.ok(js.includes(fragment), `Missing locked app contract fragment: ${fragment}`);
}

assert.ok(js.includes('const ORT_BASE_URL = new URL("./vendor/onnxruntime-web/", import.meta.url).href;'));
assert.ok(preprocess.includes('blank_canvas'));
assert.ok(!js.includes('\\n'), "App shell must not contain literal escaped newline artifacts.");

const appCacheName = js.match(/const CACHE_NAME = "([^"]+)";/)?.[1];
const swCacheName = sw.match(/const CACHE_NAME = "([^"]+)";/)?.[1];
assert.ok(appCacheName, "App cache name must be declared.");
assert.ok(swCacheName, "Service-worker cache name must be declared.");
assert.equal(appCacheName, swCacheName, "App and service-worker cache names must stay synchronized.");
assert.ok(appCacheName.endsWith("-r2"), "Follow-up cache version must remain r2 until a new asset set is introduced.");

const appAssets = Array.from(js.matchAll(/"(\.\/[^"]+)"/g)).map((match) => match[1]).filter((asset) => asset !== "./vendor/onnxruntime-web/");
const swAssets = Array.from(sw.matchAll(/"(\.\/[^"]+)"/g)).map((match) => match[1]);
assert.deepEqual(appAssets, swAssets, "App and service-worker core asset lists must match exactly.");
assert.ok(appAssets.includes("./followups.js"), "followups.js must be a core offline asset.");
assert.ok(sw.includes('new Request(asset, { cache: "reload" })'), "Service-worker precache must bypass stale HTTP cache.");
assert.ok(sw.includes('new Request(event.request, { cache: "no-cache" })'), "Service-worker runtime core fetch must revalidate instead of using stale HTTP cache.");

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
assert.ok(html.includes("Actual Lugisu/Lumasaba wording is pending fluent human validation"));
assert.ok(html.includes("Validated localized usability has not been established."));
assert.ok(!html.includes("accepted rust recall"));
assert.ok(!html.includes('capture="environment"'));
assert.ok(!html.includes('<script src="./vendor/onnxruntime-web/ort.all.min.js"></script>'));
assert.ok(html.includes("script-src 'self' 'wasm-unsafe-eval'"));
assert.ok(!html.match(/https?:\/\//), "App shell must not depend on remote HTTP assets.");

const followupFragments = [
  "refreshRequestSeq",
  "replaceChildren",
  "royacheck:record-saved",
  "royacheck:record-deleted",
  "AI proposal:",
  "Human choice:",
  "proposal only, not a diagnosis and not treatment advice",
  "actual Lugisu/Lumasaba wording pending fluent human validation",
  "Validated localized usability has not been established",
  "resetLocalLanguagePanel",
];
for (const fragment of followupFragments) {
  assert.ok(followups.includes(fragment), `Missing follow-up repair fragment: ${fragment}`);
}
assert.ok(!followups.includes('lang", "myx"'), "Unverified strings must not be tagged as myx/Lugisu.");
assert.ok(!followups.includes("lugisu_draft"), "Unverified Lugisu-like draft strings must not be shipped as Lugisu drafts.");
assert.ok(!followups.includes("Obulwadde"), "Known suspect Luganda-like string must not remain in the app.");
assert.ok(!followups.includes("Route: Review later"), "Review later must not be presented as a model route.");
assert.ok(!followups.includes("Raw image retained: false"), "Developer-oriented retention wording must not be shown to users.");

for (const asset of [
  "./assets/model/royacheck_a0_fp32.onnx",
  "./followups.js",
  "./preprocess.js",
  "./vendor/onnxruntime-web/ort.wasm.min.mjs",
  "./vendor/onnxruntime-web/ort-wasm-simd-threaded.mjs",
  "./vendor/onnxruntime-web/ort-wasm-simd-threaded.wasm",
]) {
  assert.ok(sw.includes(asset), `Service worker missing core asset: ${asset}`);
}
assert.ok(sw.includes('const CACHE_NAME = "royacheck-stage8-a0-4037c096-20261004-r2";'));
assert.ok(!sw.includes('CACHE_NAME = "royacheck-stage8-a0-4037c096-20261004-r1"'));

const parsedManifest = JSON.parse(manifest);
assert.equal(parsedManifest.display, "standalone");
assert.equal(parsedManifest.start_url, "./index.html");

console.log("Stage 8 static smoke checks: PASS");
