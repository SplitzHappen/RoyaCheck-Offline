# Stage 8 — Browser E2E Offline Inference Evidence

## Status

This is a draft Stage 8 closure-evidence increment after PR #24. It does **not** close Stage 8, deploy, submit, produce video, run RoCoLe inference, run challenge-set inference, retrain, fine-tune, or change product model behavior.

Base commit: `8f738852873723e9aed98b48ecfd96094f9dd1f1` (PR #24 squash merge).

Branch: `chatgpt/stage-08-real-inference-evidence`.

## Purpose

Prior Stage 8 evidence showed browser follow-up behavior, offline cache posture, static contract guards, and no-upload routing guards. The main remaining closure-readiness gap was current-head browser evidence that the MVP can run the frozen ONNX inference path in the browser while offline.

This increment adds a constrained browser-local evidence harness for that gap without using RoCoLe or any challenge-set image.

## Scope implemented

### Real browser-local inference harness

Added `tests/browser-real-inference.mjs`.

The harness:

1. Generates a deterministic synthetic `224 x 224` PNG inside the test process.
2. Serves the committed `app/` bundle from localhost, or uses `ROYA_BASE_URL` when supplied.
3. Loads the app in headless Chromium with service workers enabled.
4. Waits for the app's core offline cache verification.
5. Sets the browser context offline.
6. Reloads the app while offline.
7. Uploads the synthetic `224 x 224` image.
8. Runs the normal UI inference path through the frozen browser-local ONNX model.
9. Waits for a public route in `visible_rust`, `no_visible_rust`, or `not_sure`.
10. Requires the model status to report `Local inference complete`.
11. Asserts the too-small bypass was not used.
12. Saves a human `request_review` disposition.
13. Verifies the saved local record includes:
    - the AI route actually rendered by the browser;
    - `human_disposition: request_review`;
    - `raw_image_retained: false`;
    - the frozen model SHA-256 value.
14. Checks observed requests are GET and same-origin or `blob:`.

### Package script

Updated `package.json` with:

```bash
npm run test:browser-inference
```

The script runs:

```bash
ROYA_BASE_URL=http://127.0.0.1:4173/app/ node tests/browser-real-inference.mjs
```

As with the existing browser-followups harness, the test can also run in built-in-server mode by calling the node script directly without `ROYA_BASE_URL`.

## Evidence boundaries

This harness is **browser evidence**, not model-performance evidence.

It does not estimate accuracy, sensitivity, specificity, recall, precision, or field performance. It does not use RoCoLe or any challenge-set image. It does not imply that the synthetic image is agronomically meaningful. It only checks that the committed app can execute the frozen ONNX path in a browser-local/offline context and produce one of the public routes without the too-small bypass.

The synthetic image is generated solely to exercise the real inference path with an eligible image size.

## Validation status

Not run by Vale in this connector-only pass.

Required independent validation before Ready for Review:

- `npm test`
- `npm run test:browser-followups`
- `npm run test:browser-inference` with the documented external-server mode
- optionally `node tests/browser-real-inference.mjs` with no `ROYA_BASE_URL`

## Remaining Stage 8 closure-readiness considerations

If the new browser inference harness passes under independent audit, the main technical Stage 8 closure blocker becomes substantially reduced. Before Stage 8 closure, a closure package should still ask Claude to verify:

1. the current head runs the full intended evidence suite;
2. the browser inference harness really exercises ONNX inference and not a fallback or too-small path;
3. no product code, model, threshold, class-order, preprocessing, ONNX, ORT, service-worker behavior, or route logic changed;
4. item 36 remains honestly deferred in any public/demo/submission material;
5. no claim is made for field validation, treatment guidance, deployment, or external dataset performance.

## Boundaries preserved

This PR does not perform or claim:

- deployment;
- submission;
- video production;
- RoCoLe inference;
- challenge-set inference;
- model retraining or fine-tuning;
- model, threshold, class-order, preprocessing, ONNX, ORT, service-worker, or route-logic changes;
- treatment recommendations;
- field validation;
- Stage 7 closure;
- Stage 8 closure.
