# Claude Audit Package — Stage 8 Browser Offline Inference Evidence

Repository: `SplitzHappen/RoyaCheck-Offline`

Branch: `chatgpt/stage-08-real-inference-evidence`

Base commit: `8f738852873723e9aed98b48ecfd96094f9dd1f1` (PR #24 squash merge)

Purpose: audit the draft browser offline inference evidence increment. This package is for review only. It must not be treated as Stage 8 closure, deployment readiness, field validation, submission, or treatment guidance.

## Background

PR #24 merged Stage 8 closure-readiness hardening: closure guard tests, routing threshold tests, and no-upload/local-only guards. Claude's remaining Stage 8 closure blocker was current-head browser e2e/offline inference evidence, because the existing browser-followups harness uses a 10 x 10 PNG and intentionally exercises the `too_small -> not_sure` path rather than real ONNX inference.

This PR adds a constrained replacement evidence path intended to exercise real browser-local ONNX inference while offline, without using RoCoLe or challenge-set inference.

## Initial Claude finding and repair context

Claude audited initial PR #25 head `91d7eee9786215b5540f9432a662ab6ac16920b5` and returned `PASS WITH MAJOR REPAIRS`.

The major finding was that the original offline assertion was a false positive. Playwright `context.setOffline(true)` did not block service-worker-originated network-first fetches. During the claimed offline phase, Claude observed local-server hits including the ONNX model and WASM files. Claude also confirmed that the harness still passed when service-worker cache fallback was deliberately removed.

Claude separately found that the product appeared to work offline when the server was actually shut down after cache verification. The defect was in the evidence harness, not in product code.

The repaired harness therefore proves offline inference by shutting down the built-in local server after cache verification and asserting zero post-cutoff server hits.

## Repaired-head Claude finding and reliability fix

Claude audited repaired head `db57bbda3229bfb3e9a49d7a8f82374c7c18adc5` and returned `PASS WITH MINOR REPAIRS`.

Claude confirmed that the false-positive offline assertion was fixed and that negative controls behaved correctly:

- broken service-worker cache fallback failed;
- corrupted model failed;
- `10 x 10` too-small path failed;
- external `ROYA_BASE_URL` mode was correctly labelled as not full network-down proof.

Claude found one reliability defect: `server.close()` could intermittently hang on stale keep-alive connections after the browser was put offline. Claude validated a close reliability fix using `server.closeAllConnections()` with repeated passing runs. This branch now adds `server.closeAllConnections()` and a bounded timeout to ensure a future server-close failure fails explicitly rather than hanging indefinitely.

## Claimed scope

Expected changed files:

- `package.json`
- `tests/browser-real-inference.mjs`
- `docs/stages/08_mvp/STAGE_08_BROWSER_INFERENCE_EVIDENCE.md`
- `docs/audits/stage-08-browser-inference/AUDIT_PACKAGE.md`

Expected implementation after reliability repair:

- add and repair `tests/browser-real-inference.mjs`;
- make `npm run test:browser-inference` run built-in-server mode directly;
- generate a deterministic synthetic `224 x 224` PNG inside the test process;
- load the committed app bundle in headless Chromium;
- verify the app's offline cache;
- set the browser context offline;
- record the local-server hit cutoff;
- close the built-in local server before offline reload using `server.close(...)`, `server.closeAllConnections()`, and a bounded timeout;
- reload the app while offline and while the server is unavailable;
- verify the app's offline cache again;
- upload the synthetic eligible-size image;
- run the normal UI inference path through the frozen browser-local ONNX model;
- assert the route is one of the three public routes;
- assert `Local inference complete` is reached;
- assert the too-small bypass was not used;
- save a human `request_review` disposition;
- assert the saved record keeps `raw_image_retained: false`;
- assert the saved record has no `raw_image` or `image_blob` field;
- assert the saved record carries the frozen model SHA-256;
- assert observed page requests are GET and same-origin or `blob:`;
- assert zero local-server hits after the offline cutoff in built-in mode.

`ROYA_BASE_URL` mode may remain supported, but it must not be treated as full network-down proof unless external server shutdown or equivalent evidence is supplied. The canonical PR #25 evidence command is `npm run test:browser-inference`, which should run the built-in server and shut it down itself.

Operational note: `npm run test:browser-inference` uses port 4173 by default. Stop any existing `npm run serve:app` / `python3 -m http.server 4173` process before running it, or set `ROYA_TEST_PORT` to a free port.

## Requested audit tasks

Please classify findings as blocking, major, or minor for both PR review-readiness and later Stage 8 closure-readiness.

### A. Scope check

Verify that this PR changes only the expected files and does not change product app behavior, model files, thresholds, class order, preprocessing, ONNX, ORT, service-worker behavior, or route logic.

### B. Test execution

Run, if feasible:

- `npm test`
- `npm run test:browser-followups`
- `npm run test:browser-inference`
- repeated `npm run test:browser-inference` runs sufficient to check that the intermittent close hang is resolved
- optionally `ROYA_BASE_URL=http://127.0.0.1:4173/app/ node tests/browser-real-inference.mjs`, while treating this external mode as limited unless the external server is stopped or separately instrumented

Report environment, command, result, and any failures.

### C. Server-close reliability

Verify that the repaired harness:

- calls `server.closeAllConnections()` when closing the built-in server;
- has a bounded timeout around the close path;
- no longer intermittently hangs in repeated inference runs;
- still reports `server_closed_before_offline_reload: true` and `post_cutoff_server_hits: 0` in canonical built-in mode.

### D. Real-inference adequacy

Verify that `tests/browser-real-inference.mjs` actually exercises the real ONNX inference path rather than:

- the too-small bypass;
- a mocked route;
- seeded IndexedDB state;
- a hard-coded proposal;
- a fallback path after inference failure.

Confirm whether the harness is adequate as **browser execution evidence**, while not overclaiming model performance.

### E. Offline adequacy

Verify whether the repaired harness meaningfully exercises offline execution:

- core cache verified before offline reload;
- browser context set offline;
- built-in local server closed before offline reload;
- zero local-server hits after the offline cutoff;
- app reloads while offline and while the server is unavailable;
- inference completes while offline;
- requests remain GET and same-origin or `blob:`.

Please mutation-test or reason whether the harness would fail if the service-worker cache fallback were removed or broken.

### F. Claim safety

Verify that docs and PR wording do not claim:

- Stage 8 closure;
- deployment;
- submission;
- video production;
- RoCoLe or challenge-set inference;
- field validation;
- model performance;
- treatment guidance;
- completed validated Lugisu/Lumasaba support.

### G. Item 36 carry-forward

Verify that the PR preserves the owner decision:

- validated Lugisu/Lumasaba local-language support remains deferred due to time constraint;
- the English-only scaffold is not completed local-language support;
- demo/submission/pitch material must disclose the deferral if local-language support is mentioned.

### H. Remaining Stage 8 closure-readiness

Assess whether passing this PR's repaired evidence suite is enough to remove the prior current-head browser offline inference blocker, or whether any additional evidence remains necessary before Stage 8 closure.

Do not treat this PR itself as Stage 8 closure unless a separate owner decision and closure audit package authorize that.

## Output requested

Please answer in this structure:

1. Verdict for PR review-readiness:
   - PASS
   - PASS WITH MINOR REPAIRS
   - PASS WITH MAJOR REPAIRS
   - FAIL / BLOCKED
2. Findings by severity.
3. Test results.
4. Scope and claim-safety assessment.
5. Server-close reliability assessment.
6. Real-inference and offline adequacy assessment.
7. Item 36 deferral assessment.
8. Remaining blockers before Stage 8 closure-readiness.
9. Final recommendation: keep draft, Ready for Review after repairs, or Ready for Review now.
