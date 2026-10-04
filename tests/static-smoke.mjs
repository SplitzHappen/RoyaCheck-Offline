import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(path, "utf8");
const [html, js, sw, manifest] = await Promise.all([
  read("app/index.html"),
  read("app/app.js"),
  read("app/sw.js"),
  read("app/manifest.webmanifest"),
]);

const requiredJsFragments = [
  'const ort = window.ort;',
  'const T_RUST = 0.50;',
  'const T_HEALTHY = 0.70;',
  '"healthy",',
  '"rust_present",',
  '"leaf_miner_no_rust",',
  '"brown_leaf_spot_no_rust",',
  '"cercospora_no_rust",',
  'const IMAGENET_MEAN = [0.485, 0.456, 0.406];',
  'const IMAGENET_STD = [0.229, 0.224, 0.225];',
  'const INPUT_SIZE = 224;',
  'ort.env.wasm.numThreads = 1;',
  'ort.env.wasm.proxy = false;',
  'ort.env.wasm.wasmPaths = "./vendor/onnxruntime-web/";',
  'executionProviders: ["wasm"]',
  'session.run({ input: tensor })',
  'results.logits.data',
  'raw_image_retained: false',
  'human_disposition',
  'confirmed_by_role: "farmer_decision_maker"',
  '4037c09663190b7caed0773e525e5da39bd05286992612537991358b7acfd041',
];
for (const fragment of requiredJsFragments) {
  assert.ok(js.includes(fragment), `Missing locked app contract fragment: ${fragment}`);
}

assert.doesNotThrow(() => new Function(js), "app.js must be syntactically valid classic JavaScript");
assert.ok(!js.includes('ort.wasm.min.mjs'), "App shell must not reference missing ORT module assets.");
assert.ok(!js.includes('\\n'), "App shell must not contain literal escaped newline artifacts.");

const htmlLower = html.toLowerCase();
for (const output of ["visible rust", "no visible rust", "not sure"]) {
  assert.ok(htmlLower.includes(output), `Missing public output: ${output}`);
}
assert.ok(html.includes("not a diagnosis"));
assert.ok(html.includes("not treatment advice"));
assert.ok(html.includes("no RoCoLe external readout"));
assert.ok(html.includes("Only the human disposition becomes formal"));
assert.ok(html.includes('<script src="./vendor/onnxruntime-web/ort.all.min.js"></script>'));
assert.ok(!html.match(/https?:\/\//), "App shell must not depend on remote HTTP assets.");

for (const asset of [
  "./assets/model/royacheck_a0_fp32.onnx",
  "./vendor/onnxruntime-web/ort.all.min.js",
  "./vendor/onnxruntime-web/ort-wasm-simd-threaded.wasm",
]) {
  assert.ok(sw.includes(asset), `Service worker missing core asset: ${asset}`);
}

const parsedManifest = JSON.parse(manifest);
assert.equal(parsedManifest.display, "standalone");
assert.equal(parsedManifest.start_url, "./index.html");

console.log("Stage 8 static smoke checks: PASS");
