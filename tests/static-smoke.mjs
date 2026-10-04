import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(path, "utf8");

const appJs = read("app/app.js");
const followupsJs = read("app/followups.js");
const swJs = read("app/sw.js");
const html = read("app/index.html");
const webManifest = read("app/manifest.webmanifest");
const preprocessJs = read("app/preprocess.js");
const stageManifest = read("docs/stages/08_mvp/STAGE_08_ASSET_MANIFEST.json");
const followupDoc = read("docs/stages/08_mvp/STAGE_08_FOLLOWUP_BUILD.md");
const offlineDoc = read("docs/submission/SUPPORTED_BROWSER_AND_OFFLINE_LIMITATIONS.md");

function extractConstString(fileText, name) {
  const match = fileText.match(new RegExp(`const\\s+${name}\\s*=\\s*"([^"]+)"`));
  assert.ok(match, `${name} must be declared as a string constant`);
  return match[1];
}

function extractNumberConst(fileText, name) {
  const match = fileText.match(new RegExp(`(?:export\\s+)?const\\s+${name}\\s*=\\s*([0-9.]+);`));
  assert.ok(match, `${name} must be declared as a numeric constant`);
  return Number(match[1]);
}

function extractArray(fileText, name) {
  const match = fileText.match(new RegExp(`(?:export\\s+)?const\\s+${name}\\s*=\\s*\\[([\\s\\S]*?)\\];`));
  assert.ok(match, `${name} must be declared as an array`);
  return [...match[1].matchAll(/"([^"]+)"|([0-9.]+)/g)].map((item) => item[1] ?? Number(item[2]));
}

function extractCoreAssets(fileText, label) {
  const match = fileText.match(/const\s+CORE_ASSETS\s*=\s*\[([\s\S]*?)\];/);
  assert.ok(match, `${label} must declare CORE_ASSETS`);
  return [...match[1].matchAll(/"(\.\/[^"]*)"/g)].map((item) => item[1]);
}

const frozenSha = "4037c09663190b7caed0773e525e5da39bd05286992612537991358b7acfd041";

// Frozen preprocessing/model contract from Stage 7D A0.
assert.equal(extractConstString(preprocessJs, "MODEL_SHA256"), frozenSha, "MODEL_SHA256 must remain frozen");
assert.equal(extractNumberConst(preprocessJs, "T_RUST"), 0.50, "T_RUST must remain 0.50");
assert.equal(extractNumberConst(preprocessJs, "T_HEALTHY"), 0.70, "T_HEALTHY must remain 0.70");
assert.equal(extractNumberConst(preprocessJs, "INPUT_SIZE"), 224, "INPUT_SIZE must remain 224");
assert.deepEqual(extractArray(preprocessJs, "CLASS_NAMES"), [
  "healthy",
  "rust_present",
  "leaf_miner_no_rust",
  "brown_leaf_spot_no_rust",
  "cercospora_no_rust",
], "CLASS_NAMES order must remain frozen");
assert.deepEqual(extractArray(preprocessJs, "IMAGENET_MEAN"), [0.485, 0.456, 0.406], "ImageNet mean must remain frozen");
assert.deepEqual(extractArray(preprocessJs, "IMAGENET_STD"), [0.229, 0.224, 0.225], "ImageNet std must remain frozen");
assert.match(preprocessJs, /width < outputSize \|\| height < outputSize/, "small-image eligibility guard must remain present");
assert.match(preprocessJs, /routeFromProbabilities/, "routing function must remain present");

// Runtime integrity and local-record contract.
assert.match(appJs, /ort\.env\.wasm\.numThreads\s*=\s*1/, "ORT wasm numThreads must remain fixed at 1");
assert.match(appJs, /ort\.env\.wasm\.wasmPaths\s*=\s*ORT_BASE_URL/, "ORT wasmPaths must remain self-hosted");
assert.match(appJs, /actualSha\s*!==\s*MODEL_SHA256/, "runtime ONNX SHA check must remain present");
assert.match(appJs, /raw_image_retained:\s*false/, "records must not retain raw images");
assert.match(appJs, /confirmed_by_role:\s*"farmer_decision_maker"/, "human-final role marker must remain present");
assert.match(appJs, /model_sha256:\s*MODEL_SHA256/, "saved records must include model hash");

// Cache/offline asset contract.
const appCacheName = extractConstString(appJs, "CACHE_NAME");
const swCacheName = extractConstString(swJs, "CACHE_NAME");
assert.equal(appCacheName, swCacheName, "app.js and sw.js cache names must match");
assert.ok(appCacheName.endsWith("-r2"), "cache name must remain bumped to r2");

const appAssets = extractCoreAssets(appJs, "app.js");
const swAssets = extractCoreAssets(swJs, "sw.js");
assert.deepEqual(appAssets, swAssets, "app.js and sw.js CORE_ASSETS arrays must match exactly");
assert.deepEqual(appAssets, [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./followups.js",
  "./preprocess.js",
  "./manifest.webmanifest",
  "./assets/icon.svg",
  "./assets/model/royacheck_a0_fp32.onnx",
  "./vendor/onnxruntime-web/ort.wasm.min.mjs",
  "./vendor/onnxruntime-web/ort-wasm-simd-threaded.mjs",
  "./vendor/onnxruntime-web/ort-wasm-simd-threaded.wasm",
], "CORE_ASSETS must match the expected offline bundle exactly");
assert.match(swJs, /new\s+Request\(asset,\s*\{\s*cache:\s*"reload"\s*\}\)/, "service-worker precache must bypass stale browser HTTP cache with cache: reload");
assert.match(swJs, /new\s+Request\(event\.request,\s*\{\s*cache:\s*"no-cache"\s*\}\)/, "service-worker runtime network fetch must revalidate before cache fallback");
assert.match(swJs, /if \(event\.request\.method !== "GET"\) return;/, "service worker must ignore non-GET requests");

// HTML evidence and safety boundaries.
assert.match(html, /66 of 95/, "internal-holdout rust capture figure must remain bounded");
assert.match(html, /27 of 95/, "internal-holdout not-sure rust figure must remain bounded");
assert.match(html, /2 of 95/, "internal-holdout no-visible-rust rust figure must remain bounded");
assert.match(html, /7 of 117/, "other-condition false-visible-rust figure must remain bounded");
assert.match(html, /Content-Security-Policy/, "CSP must remain present");
assert.match(html, /script-src 'self' 'wasm-unsafe-eval'/, "CSP script-src must remain self plus wasm unsafe eval only");
assert.doesNotMatch(html, /(?:src|href)=["']https?:\/\//i, "HTML must not use remote script/style/image assets");
assert.doesNotMatch(html, /accepted rust recall/i, "app must not claim accepted rust recall");
assert.doesNotMatch(html, /capture=["']environment["']/i, "file input must not force camera capture");
assert.match(html, /does not diagnose/i, "app must retain no-diagnosis safety copy");
assert.match(html, /not treatment advice/i, "app must retain no-treatment-advice safety copy");
assert.match(html, /Stage 7D A0 FP32 ONNX/i, "app must retain frozen model reference");

// Web app manifest contract.
const parsedWebManifest = JSON.parse(webManifest);
assert.equal(parsedWebManifest.name, "RoyaCheck Offline", "web manifest name must remain stable");
assert.equal(parsedWebManifest.short_name, "RoyaCheck", "web manifest short name must remain stable");
assert.equal(parsedWebManifest.start_url, "./index.html", "web manifest start_url must remain local");
assert.equal(parsedWebManifest.scope, "./", "web manifest scope must remain local");
assert.equal(parsedWebManifest.display, "standalone", "web manifest display must remain standalone");
assert.equal(parsedWebManifest.icons?.[0]?.src, "./assets/icon.svg", "web manifest icon must remain local SVG");

// Review-later and local-language follow-up guards.
assert.match(html, /storage eviction/i, "UI must warn that browser storage eviction can remove saved records");
assert.match(html, /no backup or export/i, "UI must warn there is no backup or export");
assert.match(offlineDoc, /storage eviction/i, "offline limitations must mention storage eviction");
assert.match(offlineDoc, /no backup or export|no cloud backup,\s*export/i, "offline limitations must mention no backup/export mechanism");
assert.match(html, /Validated localized usability has not been established\./, "UI must retain validated-localized-usability limitation");
assert.match(followupsJs, /Actual Lugisu\/Lumasaba wording: pending fluent human validation; not claimed in this build\./, "followups must not claim completed Lugisu\/Lumasaba strings");
assert.match(followupDoc, /not fully complete/i, "follow-up doc must mark local-language item not fully complete");
assert.match(stageManifest, /local_language_item_complete"\s*:\s*false/, "stage manifest must keep local-language item incomplete pending fluent validation");
assert.doesNotMatch(html + followupsJs + stageManifest, /lang="myx"|lang',\s*'myx'|lang",\s*"myx"/, "unverified text must not use lang=myx");
assert.doesNotMatch(html + followupsJs + stageManifest, /Obulwadde|kifaananyi|Tekitegeerekeka|Ekiwandiiko|lugisu_draft/, "suspected wrong-language draft strings must not be present");
assert.doesNotMatch(followupsJs, /AI proposal only:\s*(visible rust|no visible rust|not sure)/i, "human-keyed/rehearsal strings must not be labelled as AI proposal only");
assert.match(followupsJs, /AI proposal: .*proposal only, not a diagnosis and not treatment advice/, "only the primary AI proposal line should name the AI proposal");
assert.match(followupsJs, /Human choice:/, "local-language panel must show human choice separately");

console.log("static smoke checks: PASS");
