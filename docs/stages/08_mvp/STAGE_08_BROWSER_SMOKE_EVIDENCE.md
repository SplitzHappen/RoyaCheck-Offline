# Stage 8 — Browser Smoke Evidence

**Stage:** 8 — MVP browser-local smoke evidence  
**Status:** PASS for the repaired partial Stage 8 hardening increment  
**Branch:** `chatgpt/stage-08-mvp-build`  
**Smoke-tested commit:** `60ea706e10129d74a50b317d167a06f2d964f248`  
**Final evidence commit:** follows the tested commit and removes the temporary workflow / updates evidence docs only.

## Commands / execution context

Evidence was collected through a temporary GitHub Actions workflow named `Stage 8 audit repair smoke`:

- run id: `37177257854`;
- job id: `111362360773`;
- event: branch push;
- test environment: Ubuntu 24.04 GitHub Actions runner, Node 22, Python 3.12, Chromium via Playwright 1.56.1.

The temporary workflow is not part of the final evidence branch state.

## Test evidence

`npm test` passed. The command runs:

1. `tests/static-smoke.mjs` — static contract checks for frozen thresholds, class order, ImageNet constants, ONNX SHA, local ORT references, human-authority copy, safety wording, evidence wording, CSP, service-worker assets, and cache-version drift.
2. `tests/preprocess-reference.mjs` — synthetic non-protected preprocessing reference checks for the browser-side triangle-filter resize path, including three synthetic fixtures, tensor-shape sanity, too-small image guard, and blank-canvas guard.

Python reference-route generation passed using Pillow 12.3.0, onnxruntime 1.30.0, the frozen A0 ONNX file, the fixed class order, and the Stage 7C thresholds. The two generated fixture routes were:

| Fixture | Python/Pillow reference route |
|---|---|
| `gradient_leaf` | `no_visible_rust` |
| `stripe_spots` | `no_visible_rust` |

Browser image-to-record smoke passed. The Playwright smoke:

- served the static app locally;
- loaded the browser-local ONNX Runtime Web assets;
- loaded the fixed A0 ONNX model in Chromium;
- selected synthetic fixture images through the real file input;
- ran browser preprocessing and ONNX inference;
- asserted browser route equals the Python/Pillow reference route;
- asserted public labels remain limited to `visible rust`, `no visible rust`, and `not sure`;
- verified Save remains disabled until a human disposition and confirmation checkbox are both supplied;
- saved a local observation;
- read back the IndexedDB record;
- verified `raw_image_retained:false`;
- verified no `raw_image` or `image_blob` field in the stored record;
- verified no default non-GET requests and no default external requests;
- verified offline cache readiness and an offline reload path in Chromium.

Observed browser smoke summary:

```json
{
  "status": "PASS",
  "fixtures": [
    {"name": "gradient_leaf", "expected_route": "no_visible_rust"},
    {"name": "stripe_spots", "expected_route": "no_visible_rust"}
  ],
  "saved_record_raw_image_retained": false,
  "default_requests": 18
}
```

## Claude audit finding coverage

This evidence directly addresses Claude B1 and B2 pending Claude verification:

- B1: browser preprocessing no longer uses the prior non-antialiased 2x2 bilinear path; preprocessing is isolated in `app/preprocess.js` with synthetic reference checks.
- B2: smoke now exercises the actual browser image-to-result-to-record loop.

B3 is not implemented in this PR. PR #21 is documented as a partial Stage 8 hardening increment, not full Stage 8 closure.

## Boundaries preserved

No deployment, RoCoLe inference, challenge-set inference, model change, threshold change, class-order change, intended preprocessing-contract change, retraining, fine-tuning, raw dataset commit, video production, submission, treatment recommendation, claim expansion, Stage 7 closure, or Stage 8 closure was performed.
