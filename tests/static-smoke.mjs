import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(path, "utf8");

const appJs = read("app/app.js");
const followupsJs = read("app/followups.js");
const swJs = read("app/sw.js");
const html = read("app/index.html");
const manifest = read("docs/stages/08_mvp/STAGE_08_ASSET_MANIFEST.json");
const followupDoc = read("docs/stages/08_mvp/STAGE_08_FOLLOWUP_BUILD.md");
const offlineDoc = read("docs/submission/SUPPORTED_BROWSER_AND_OFFLINE_LIMITATIONS.md");

function extractConstString(fileText, name) {
  const match = fileText.match(new RegExp(`const\\s+${name}\\s*=\\s*"([^"]+)"`));
  assert.ok(match, `${name} must be declared as a string constant`);
  return match[1];
}

function extractCoreAssets(fileText, label) {
  const match = fileText.match(/const\s+CORE_ASSETS\s*=\s*\[([\s\S]*?)\];/);
  assert.ok(match, `${label} must declare CORE_ASSETS`);
  return [...match[1].matchAll(/"(\.\/[^"]*)"/g)].map((item) => item[1]);
}

const appCacheName = extractConstString(appJs, "CACHE_NAME");
const swCacheName = extractConstString(swJs, "CACHE_NAME");
assert.equal(appCacheName, swCacheName, "app.js and sw.js cache names must match");
assert.ok(appCacheName.endsWith("-r2"), "cache name must remain bumped to r2");

const appAssets = extractCoreAssets(appJs, "app.js");
const swAssets = extractCoreAssets(swJs, "sw.js");
assert.deepEqual(appAssets, swAssets, "app.js and sw.js CORE_ASSETS arrays must match exactly");
assert.ok(appAssets.includes("./"), "CORE_ASSETS must include ./");
assert.ok(appAssets.includes("./followups.js"), "CORE_ASSETS must include followups.js");
assert.ok(appAssets.includes("./app.js"), "CORE_ASSETS must include app.js");

assert.match(swJs, /new\s+Request\(asset,\s*\{\s*cache:\s*"reload"\s*\}\)/, "service-worker precache must bypass stale browser HTTP cache with cache: reload");
assert.match(swJs, /new\s+Request\(event\.request,\s*\{\s*cache:\s*"no-cache"\s*\}\)/, "service-worker runtime network fetch must revalidate before cache fallback");
assert.match(swJs, /if \(event\.request\.method !== "GET"\) return;/, "service worker must ignore non-GET requests");

assert.match(html, /storage eviction/i, "UI must warn that browser storage eviction can remove saved records");
assert.match(html, /no backup or export/i, "UI must warn there is no backup or export");
assert.match(offlineDoc, /storage eviction/i, "offline limitations must mention storage eviction");
assert.match(offlineDoc, /no backup or export/i, "offline limitations must mention no backup or export");

assert.match(html, /Validated localized usability has not been established\./, "UI must retain validated-localized-usability limitation");
assert.match(followupsJs, /Actual Lugisu\/Lumasaba wording: pending fluent human validation; not claimed in this build\./, "followups must not claim completed Lugisu\/Lumasaba strings");
assert.match(followupDoc, /not fully complete/i, "follow-up doc must mark local-language item not fully complete");
assert.match(manifest, /local_language_item_complete"\s*:\s*false/, "manifest must keep local-language item incomplete pending fluent validation");
assert.doesNotMatch(html + followupsJs + manifest, /lang="myx"|lang',\s*'myx'|lang",\s*"myx"/, "unverified text must not use lang=myx");
assert.doesNotMatch(html + followupsJs + manifest, /Obulwadde|kifaananyi|Tekitegeerekeka|Ekiwandiiko|lugisu_draft/, "suspected wrong-language draft strings must not be present");
assert.doesNotMatch(followupsJs, /AI proposal only:\s*(visible rust|no visible rust|not sure)/i, "human-keyed\/rehearsal strings must not be labelled as AI proposal only");
assert.match(followupsJs, /AI proposal: .*proposal only, not a diagnosis and not treatment advice/, "only the primary AI proposal line should name the AI proposal");
assert.match(followupsJs, /Human choice:/, "local-language panel must show human choice separately");

assert.match(html, /does not diagnose/i, "app must retain no-diagnosis safety copy");
assert.match(html, /not treatment advice/i, "app must retain no-treatment-advice safety copy");
assert.match(html, /Stage 7D A0 FP32 ONNX/i, "app must retain frozen model reference");

console.log("static smoke checks: PASS");
