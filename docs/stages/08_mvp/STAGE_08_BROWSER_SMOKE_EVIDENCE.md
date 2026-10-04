# Stage 8 — Browser Smoke Evidence

**Stage:** 8 — MVP browser-local smoke evidence  
**Status:** PASS for the repaired partial Stage 8 hardening increment  
**Branch:** `chatgpt/stage-08-mvp-build`  
**Final minor smoke-tested commit:** `d24cd352226a931a04c397ea9cf50a7b715a9fad`  
**Final evidence commit:** follows the tested commit and removes the temporary workflow / updates evidence docs only.

## Commands / execution context

Evidence was collected through a temporary GitHub Actions workflow named `Stage 8 final minor smoke`:

- run id: `37177866620`;
- job id: `111364182320`;
- event: branch push;
- test environment: Ubuntu 24.04 GitHub Actions runner, Node 22, Python 3.12, Chromium via Playwright 1.56.1.

The temporary workflow is not part of the final evidence branch state.

## Test evidence

`npm test` passed. The command runs:

1. `tests/static-smoke.mjs` — static contract checks for frozen thresholds, class order, ImageNet constants, ONNX SHA, local ORT references, human-authority copy, safety wording, evidence wording including the `2 / 95` safety-relevant rust miss, CSP, service-worker assets, and app/service-worker cache-name equality.
2. `tests/preprocess-reference.mjs` — synthetic non-protected preprocessing reference checks for the browser-side triangle-filter resize path, including synthetic fixtures, tensor-shape sanity, too-small image guard, and blank-canvas guard.

Python reference-route generation passed using Pillow 12.3.0, onnxruntime 1.30.0, the frozen A0 ONNX file, the fixed class order, and the Stage 7C thresholds. The route-variety synthetic fixtures were:

| Fixture | Python/Pillow reference route | Key probabilities |
|---|---|---|
| `visible_rust_spots_leaf` | `visible_rust` | healthy `0.137372`; rust `0.858536` |
| `no_visible_gradient_leaf` | `no_visible_rust` | healthy `0.996918`; rust `0.000995` |
| `not_sure_healthy_rust_blend_0.85` | `not_sure` | healthy `0.698743`; rust `0.290276` |

Browser route-variety image-to-record smoke passed. The Playwright smoke:

- served the static app locally;
- loaded browser-local ONNX Runtime Web assets;
- loaded the fixed A0 ONNX model in Chromium;
- selected synthetic fixture images through the real file input;
- cleared the previous route before each inference and waited for `Local inference complete` plus the expected route;
- covered all three public routes: `visible rust`, `no visible rust`, and `not sure`;
- asserted browser route equals the Python/Pillow reference route;
- asserted public labels remain limited to `visible rust`, `no visible rust`, and `not sure`;
- verified Save remains disabled until a human disposition and confirmation checkbox are both supplied;
- saved a local observation;
- read back the IndexedDB record;
- verified `raw_image_retained:false`;
- verified no `raw_image` or `image_blob` field in the stored record;
- verified no default non-GET requests and no default external requests;
- verified offline cache readiness;
- reloaded offline and performed an offline inference path.

Observed browser smoke summary:

```json
{
  "status": "PASS",
  "fixtures": [
    {"name": "visible_rust_spots_leaf", "expected_route": "visible_rust"},
    {"name": "no_visible_gradient_leaf", "expected_route": "no_visible_rust"},
    {"name": "not_sure_healthy_rust_blend_0.85", "expected_route": "not_sure"}
  ],
  "route_variety": ["no_visible_rust", "not_sure", "visible_rust"],
  "saved_record_raw_image_retained": false,
  "default_requests": 20
}
```

## Claude audit finding coverage

This evidence directly addresses Claude's final minor repair list:

- stale-route e2e race: repaired by clearing the route and waiting for inference completion / exact expected route;
- route-variety e2e coverage: repaired with `visible_rust`, `no_visible_rust`, and large synthetic `not_sure` fixtures;
- safety-relevant evidence wording: repaired by adding `2 / 95 rust leaves were routed to no visible rust`;
- cache-name drift: repaired by static equality check between `app/app.js` and `app/sw.js`;
- owner decisions: recorded in `STAGE_08_CLAUDE_AUDIT_REPAIR_SUMMARY.md`.

## Boundaries preserved

No deployment, RoCoLe inference, challenge-set inference, model change, threshold change, class-order change, intended preprocessing-contract change, retraining, fine-tuning, raw dataset commit, video production, submission, treatment recommendation, claim expansion, Stage 7 closure, or Stage 8 closure was performed.
