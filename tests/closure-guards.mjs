import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { routeFromProbabilities } from "../app/preprocess.js";

const read = (path) => readFileSync(path, "utf8");

const html = read("app/index.html");
const appJs = read("app/app.js");
const followupsJs = read("app/followups.js");
const preprocessJs = read("app/preprocess.js");
const combinedJs = [appJs, followupsJs, preprocessJs].join("\n");

const cspMatch = html.match(/<meta\s+http-equiv="Content-Security-Policy"\s+content="([^"]+)">/i);
assert.ok(cspMatch, "HTML must define a Content-Security-Policy meta tag");
const csp = cspMatch[1];
assert.match(csp, /(?:^|;\s*)connect-src 'self'(?:;|$)/, "CSP must restrict connect-src to self");
assert.match(csp, /(?:^|;\s*)form-action 'none'(?:;|$)/, "CSP must disable form submissions");

assert.doesNotMatch(html, /<form\b/i, "UI must not introduce an HTML form upload path");
assert.doesNotMatch(combinedJs, /\b(?:XMLHttpRequest|WebSocket|EventSource)\b/, "App JavaScript must not introduce non-fetch outbound transports");
assert.doesNotMatch(combinedJs, /\bnavigator\s*\.\s*sendBeacon\b/i, "App JavaScript must not use sendBeacon for uploads");
assert.doesNotMatch(combinedJs, /\bmethod\s*:\s*["'`](?:POST|PUT|PATCH|DELETE)["'`]/i, "App JavaScript must not declare mutating request methods");
assert.doesNotMatch(combinedJs, /\bfetch\s*\([^)]*\bmethod\s*:/is, "App JavaScript fetch calls must not set explicit request methods");

assert.equal(routeFromProbabilities([0.20, 0.50, 0.10, 0.10, 0.10]), "visible_rust", "rust at T_RUST and top class routes visible_rust");
assert.equal(routeFromProbabilities([0.20, 0.499, 0.10, 0.10, 0.10]), "not_sure", "rust below T_RUST routes not_sure");
assert.equal(routeFromProbabilities([0.70, 0.20, 0.05, 0.03, 0.02]), "no_visible_rust", "healthy at T_HEALTHY and top class routes no_visible_rust");
assert.equal(routeFromProbabilities([0.699, 0.20, 0.05, 0.03, 0.02]), "not_sure", "healthy below T_HEALTHY routes not_sure");
assert.equal(routeFromProbabilities([0.10, 0.20, 0.80, 0.10, 0.10]), "not_sure", "non-public disease top class routes not_sure");
assert.equal(routeFromProbabilities([0.80, 0.60, 0.10, 0.10, 0.10]), "no_visible_rust", "rust above threshold does not override a higher healthy top class");
assert.equal(routeFromProbabilities([0.65, 0.55, 0.10, 0.10, 0.10]), "visible_rust", "rust top class above threshold routes visible_rust even when healthy is below T_HEALTHY");

console.log("closure guard checks: PASS");
