# Stage 8 — Browser E2E Offline Inference Evidence

## Status

This is a draft Stage 8 closure-evidence increment after PR #24. It does **not** close Stage 8, deploy, submit, produce video, run RoCoLe inference, run challenge-set inference, retrain, fine-tune, or change product model behavior.

Base commit: `8f738852873723e9aed98b48ecfd96094f9dd1f1` (PR #24 squash merge).

Branch: `chatgpt/stage-08-real-inference-evidence`.

## Purpose

Prior Stage 8 evidence showed browser follow-up behavior, offline cache posture, static contract guards, and no-upload routing guards. The main remaining closure-readiness gap was current-head browser evidence that the MVP can run the frozen ONNX inference path in the browser while offline.

This increment adds a constrained browser-local evidence harness for that gap without using RoCoLe or any challenge-set image.

## Claude finding at initial PR #25 head

Claude audited initial PR #25 head `91d7eee9786215b5540f9432a662ab6ac16920b5` and returned `PASS WITH MAJOR REPAIRS`.

Claude found that the original harness passed while Playwright `context.setOffline(true)` still allowed service-worker-originated network-first fetches to reach the local server. During the claimed offline phase, the local server still served requests including the ONNX model and WASM files. Claude also confirmed that a deliberately broken service-worker cache fallback could still pass the original harness.

That finding meant the original evidence was a false positive for offline inference. The product itself appeared to work offline when Claude shut the server down after cache verification, but the harness did not prove it.

## Claude finding at repaired PR #25 head

Claude audited repaired head `db57bbda3229bfb3e9a49d7a8f82374c7c18adc5` and returned `PASS WITH MINOR REPAIRS`.

Claude confirmed that the false-positive offline assertion was fixed: the repaired harness shuts the server down, proves zero post-cutoff server hits, and fails when the service-worker cache fallback is broken. Claude also confirmed the real browser-local ONNX inference path, too-small bypass exclusion, item 36 deferral, and claim boundaries.

The remaining issue was reliability, not evidence correctness. The canonical command could intermittently hang inside `closeServer()` because Node `server.close()` may wait on stale keep-alive connections after the browser goes offline. Claude observed roughly 4 hangs in about 50 runs and validated that adding `server.closeAllConnections()` passed 40 of 40 runs with zero post-cutoff hits. This branch applies that reliability fix and adds a bounded close timeout so future close failures fail explicitly instead of hanging indefinitely.

## Scope implemented

### Real browser-local inference harness

Added and repaired `tests/browser-real-inference.mjs`.

The repaired built-in-server harness:

1. Generates a deterministic synthetic `224 x 224` PNG inside the test process.
2. Serves the committed `app/` bundle from an internal localhost server.
3. Loads the app in headless Chromium with service workers enabled.
4. Waits for the app's core offline cache verification.
5. Sets the browser context offline.
6. Records the server-hit cutoff.
7. Closes the internal localhost server before the offline reload using `server.close(...)`, `server.closeAllConnections()`, and a bounded timeout.
8. Reloads the app while the browser context is offline and the server is unavailable.
9. Waits for offline cache verification again.
10. Uploads the synthetic `224 x 224` image.
11. Runs the normal UI inference path through the frozen browser-local ONNX model.
12. Waits for a public route in `visible_rust`, `no_visible_rust`, or `not_sure`.
13. Requires the model status to report `Local inference complete`.
14. Asserts the too-small bypass was not used.
15. Saves a human `request_review` disposition.
16. Verifies the saved local record includes:
    - the AI route actually rendered by the browser;
    - `human_disposition: request_review`;
    - `raw_image_retained: false`;
    - no `raw_image` field;
    - no `image_blob` field;
    - the frozen model SHA-256 value.
17. Asserts zero post-cutoff server hits before claiming offline inference.
18. Checks observed page requests are GET and same-origin or `blob:`.

### Package script

Updated `package.json` with:

```bash
npm run test:browser-inference
```

The script now runs built-in-server mode directly:

```bash
node tests/browser-real-inference.mjs
```

This is the canonical PR #25 evidence command because the harness controls and shuts down its own server after cache verification.

Operational note: `npm run test:browser-inference` uses port 4173 by default. Stop any prior `npm run serve:app` / `python3 -m http.server 4173` process before running it, or set `ROYA_TEST_PORT` to another free port.

### External `ROYA_BASE_URL` mode

`ROYA_BASE_URL` mode remains supported for exploratory runs against an already served app bundle, but it does **not** prove network-down offline inference by itself because the harness cannot close or count the external server. In that mode the harness prints a warning and reports `offline_network_down_enforced: false`.

A full offline proof in external mode would require the operator to stop the external server, block it equivalently, or provide separate server-side request evidence.

## Evidence boundaries

This harness is **browser execution evidence**, not model-performance evidence.

It does not estimate accuracy, sensitivity, specificity, recall, precision, or field performance. It does not use RoCoLe or any challenge-set image. It does not imply that the synthetic image is agronomically meaningful. It only checks that the committed app can execute the frozen ONNX path in a browser-local/offline context and produce one of the public routes without the too-small bypass.

The synthetic image is generated solely to exercise the real inference path with an eligible image size.

The page-level request check does not reliably observe service-worker-originated fetches. The repaired offline proof therefore relies on the built-in server being shut down and on the explicit assertion that server hits after the cutoff are zero.

## Item 36 carry-forward

José deferred validated Lugisu/Lumasaba local-language support due to the hackathon time constraint.

This PR does not claim completed validated Lugisu/Lumasaba support. The existing English-only scaffold is not completed local-language support. Demo, submission, and pitch material must disclose the deferral if local-language support is mentioned.

## Validation status

Vale did not run tests in this connector-only repair pass.

Claude auditor-run evidence at initial head `91d7eee9786215b5540f9432a662ab6ac16920b5`:

- `npm test`: PASS.
- `npm run test:browser-followups`: PASS.
- `npm run test:browser-inference`: PASS, but with a false-positive offline assertion.
- `node tests/browser-real-inference.mjs` built-in mode: PASS, but the initial offline proof was insufficient.

Claude auditor-run evidence at repaired head `db57bbda3229bfb3e9a49d7a8f82374c7c18adc5`:

- `npm test`: PASS.
- `npm run test:browser-followups`: PASS.
- `npm run test:browser-inference`: PASS when it completed, but intermittent hangs were observed before the close reliability fix.
- Direct built-in inference mode: PASS.
- External `ROYA_BASE_URL` mode: PASS with `offline_network_down_enforced: false`, correctly labelled as limited.
- Negative controls: broken service-worker cache fallback failed; corrupted model failed; `10 x 10` too-small path failed.

Required independent validation before Ready for Review at the close-reliability fixed head:

- `npm test`
- `npm run test:browser-followups`
- `npm run test:browser-inference`
- repeated `npm run test:browser-inference` runs sufficient to confirm the intermittent close hang is resolved and zero post-cutoff server hits remain intact
- optional direct external-mode run with `ROYA_BASE_URL`, understood as not independently proving network-down offline behavior unless external server shutdown evidence is supplied

## Remaining Stage 8 closure-readiness considerations

If the repaired browser inference harness passes under independent audit with zero post-cutoff server hits and no close hang, the prior current-head browser offline inference blocker is substantially resolved. Before Stage 8 closure, a closure package should still ask Claude to verify:

1. the current head runs the full intended evidence suite;
2. the browser inference harness really exercises ONNX inference and not a fallback or too-small path;
3. no product code, model, threshold, class-order, preprocessing, ONNX, ORT, service-worker behavior, or route logic changed;
4. item 36 remains honestly deferred in any public/demo/submission material;
5. no claim is made for field validation, treatment guidance, deployment, or external dataset performance;
6. the closure package records or accepts the remaining browser-route variety issue, because this harness exercises one synthetic-image route and does not replace all-route fixture evidence.

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
