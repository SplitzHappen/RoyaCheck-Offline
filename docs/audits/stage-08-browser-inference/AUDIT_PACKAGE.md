# Claude Audit Package — Stage 8 Browser Offline Inference Evidence

Repository: `SplitzHappen/RoyaCheck-Offline`

Branch: `chatgpt/stage-08-real-inference-evidence`

Base commit: `8f738852873723e9aed98b48ecfd96094f9dd1f1` (PR #24 squash merge)

Purpose: audit the draft browser offline inference evidence increment. This package is for review only. It must not be treated as Stage 8 closure, deployment readiness, field validation, submission, or treatment guidance.

## Background

PR #24 merged Stage 8 closure-readiness hardening: closure guard tests, routing threshold tests, and no-upload/local-only guards. Claude's remaining Stage 8 closure blocker was current-head browser e2e/offline inference evidence, because the existing browser-followups harness uses a 10 x 10 PNG and intentionally exercises the `too_small -> not_sure` path rather than real ONNX inference.

This PR adds a constrained replacement evidence path intended to exercise real browser-local ONNX inference while offline, without using RoCoLe or challenge-set inference.

## Claimed scope

Expected changed files:

- `package.json`
- `tests/browser-real-inference.mjs`
- `docs/stages/08_mvp/STAGE_08_BROWSER_INFERENCE_EVIDENCE.md`
- `docs/audits/stage-08-browser-inference/AUDIT_PACKAGE.md`

Expected implementation:

- add `tests/browser-real-inference.mjs`;
- add `npm run test:browser-inference`;
- generate a deterministic synthetic `224 x 224` PNG inside the test process;
- load the committed app bundle in headless Chromium;
- verify the app's offline cache;
- set the browser context offline;
- reload the app while offline;
- upload the synthetic eligible-size image;
- run the normal UI inference path through the frozen browser-local ONNX model;
- assert the route is one of the three public routes;
- assert `Local inference complete` is reached;
- assert the too-small bypass was not used;
- save a human `request_review` disposition;
- assert the saved record keeps `raw_image_retained: false` and the frozen model SHA-256;
- assert observed requests are GET and same-origin or `blob:`.

## Requested audit tasks

Please classify findings as blocking, major, or minor for both PR review-readiness and later Stage 8 closure-readiness.

### A. Scope check

Verify that this PR changes only the expected files and does not change product app behavior, model files, thresholds, class order, preprocessing, ONNX, ORT, service-worker behavior, or route logic.

### B. Test execution

Run, if feasible:

- `npm test`
- `npm run test:browser-followups`
- `npm run test:browser-inference`
- `node tests/browser-real-inference.mjs` with no `ROYA_BASE_URL`

Report environment, command, result, and any failures.

### C. Real-inference adequacy

Verify that `tests/browser-real-inference.mjs` actually exercises the real ONNX inference path rather than:

- the too-small bypass;
- a mocked route;
- seeded IndexedDB state;
- a hard-coded proposal;
- a fallback path after inference failure.

Confirm whether the harness is adequate as **browser execution evidence**, while not overclaiming model performance.

### D. Offline adequacy

Verify whether the harness meaningfully exercises offline execution:

- core cache verified before offline reload;
- browser context set offline;
- app reloads while offline;
- inference completes while offline;
- requests remain GET and same-origin or `blob:`.

Flag any false positives or gaps.

### E. Claim safety

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

### F. Remaining Stage 8 closure-readiness

Assess whether passing this PR's evidence suite is enough to remove the prior current-head browser offline inference blocker, or whether any additional evidence remains necessary before Stage 8 closure.

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
5. Real-inference and offline adequacy assessment.
6. Remaining blockers before Stage 8 closure-readiness.
7. Final recommendation: keep draft, Ready for Review after repairs, or Ready for Review now.
