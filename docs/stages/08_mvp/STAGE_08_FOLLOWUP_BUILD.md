# Stage 8 — Follow-up Review-Later and Evidence Consolidation

## Status

PR #21 and PR #22 are merged partial Stage 8 increments. Stage 8 remains **open**.

PR #23 is an evidence-consolidation and audit-readiness increment only. It does not close Stage 8, does not deploy, does not submit, and does not expand claims.

## Merged implementation context

### PR #21 — browser-local MVP build

Merged as `751c99e9d16890ceb87ed2c4790f00c3289ceff5`.

Implemented the static browser-local MVP loop: self-hosted ONNX Runtime Web, the frozen Stage 7D A0 FP32 ONNX model, browser-local preprocessing/inference, no raw-image retention, human-final disposition before saving, current-session observation card, and service-worker/PWA cache verification.

### PR #22 — review-later and disclosure follow-up

Squash merged as `80eb5f3c6574c9b7ceb829792aef75e915122b01`.

Implemented the saved-record/review-later list backed by local IndexedDB, per-record text review cards, per-record local delete, delete-path synchronization, latest-request-wins refresh logic, the English-only local-language scaffold, and submission disclosure drafts.

PR #22 remained a partial Stage 8 follow-up increment. It did not close Stage 8.

## Frozen technical contract

The frozen contract remains:

- model path: `app/assets/model/royacheck_a0_fp32.onnx`
- model expected SHA-256: `4037c09663190b7caed0773e525e5da39bd05286992612537991358b7acfd041`
- source Stage 7D artifact ID: `11292181113`
- source Stage 7D artifact name: `stage7d-a0-export-parity`
- ONNX Runtime Web version: `1.30.0`
- thresholds: `T_RUST = 0.50`, `T_HEALTHY = 0.70`
- class order: `healthy`, `rust_present`, `leaf_miner_no_rust`, `brown_leaf_spot_no_rust`, `cercospora_no_rust`
- preprocessing: RGB decode; require both dimensions at least 224 px; preserve full frame; resize to 224 x 224; ImageNet normalization; no center crop.

PR #23 is documentation/evidence plus one test-harness-only repair. It does not change product model behavior, thresholds, class order, or preprocessing.

## Core asset evidence

`STAGE_08_ASSET_MANIFEST.json` records the exact expected core asset list:

1. `./`
2. `./index.html`
3. `./styles.css`
4. `./app.js`
5. `./followups.js`
6. `./preprocess.js`
7. `./manifest.webmanifest`
8. `./assets/icon.svg`
9. `./assets/model/royacheck_a0_fp32.onnx`
10. `./vendor/onnxruntime-web/ort.wasm.min.mjs`
11. `./vendor/onnxruntime-web/ort-wasm-simd-threaded.mjs`
12. `./vendor/onnxruntime-web/ort-wasm-simd-threaded.wasm`

The manifest records connector-derived byte counts and Git blob SHAs, plus Claude auditor-recomputed SHA-256 values at branch head `f6e75c5a1402bda82b85ba23fafe38dad7d2a869`.

Total core asset size is `18,102,457` bytes, counting `./` as an index-equivalent root cache entry. This is within the 30 MB core asset budget.

The committed ONNX file SHA-256 was independently recomputed by Claude and confirmed to match the frozen Stage 7D value. Static smoke guards the `MODEL_SHA256` constant and the presence of the runtime hash-check path; it does not itself hash the committed ONNX binary.

## Local-language item 36 status

The local-language item is **not fully complete**.

Current UI wording does not claim completed Lugisu/Lumasaba support. Actual Lugisu/Lumasaba strings remain pending fluent human validation, and `lang="myx"` remains excluded for unverified text. Compliance item 36 remains incomplete/deferred until either fluent-speaker validation completes or the owner explicitly approves a deferral/waiver as part of the Stage 8 closure criteria.

## Validation evidence

Claude auditor-run local evidence, not Vale-run evidence:

- At head `b1ac54b220171f48228b2361523983f8cb73b52f`, `npm test` failed with exit 1 because exactly two static-smoke item 36 disclosure guards failed: the missing `not fully complete` phrase and the missing `local_language_item_complete: false` manifest flag.
- This repair restores those two guarded disclosures. Vale did not run `npm test` after this connector-only restoration pass.
- `node tests/preprocess-reference.mjs`: PASS in Claude's audit at `b1ac54b`.
- `npm run test:browser-followups` with `python3 -m http.server 4173` at repo root / documented `serve:app`: PASS in one Claude auditor-run harness execution, reporting 2 saved records and 28 same-origin GET requests.
- `node tests/browser-followups.mjs` with no `ROYA_BASE_URL`: PASS in one Claude auditor-run built-in-mode harness execution, reporting 2 saved records and 28 same-origin GET requests.
- Claude reproduced the old harness built-in-mode timeout, confirming that the rewrite fix addressed the original `/app.js` to `/.js` bug.
- Scratch mutation suite from the prior repair candidate: 9/9 frozen-contract mutations caught.
- Frozen core compared with `751c99e9d16890ceb87ed2c4790f00c3289ceff5`: unchanged at the time of Claude's audit.
- `app/` compared with `c395889c180ef4a280f6ef4ba59e3643cdc23163`: byte-identical at the time of PR #22 verification.
- Prior app-behaviour and r1-to-r2 upgrade probes were carried forward because `app/` was unchanged since that verification point.

Vale did not run tests or independently recompute SHA-256 values in this connector-only pass.

## Claude minor repairs applied in PR #23

After Claude returned `PASS WITH MINOR REPAIRS`, this branch applied the following minor repairs:

- populated the manifest with Claude auditor-recomputed SHA-256 values for all 12 core cache entries;
- clarified that SHA-256 values were auditor-recomputed, not Vale-recomputed;
- corrected ONNX wording so it no longer implies static smoke hashes the committed ONNX binary;
- clarified the browser-followups result as one harness execution rather than an ambiguous `3/3` claim;
- fixed the built-in `tests/browser-followups.mjs` path-rewrite bug so `/app.js` is no longer rewritten to `/.js`.

## Claude major repair finding and restoration

Claude then returned `PASS WITH MAJOR REPAIRS` on head `b1ac54b220171f48228b2361523983f8cb73b52f` because `npm test` failed after the repair pass accidentally removed two static-guarded item 36 disclosure controls.

This follow-up restoration:

- restores `"local_language_item_complete": false` in the machine-readable manifest;
- restores the phrase `not fully complete` in this item 36 discussion;
- updates validation wording so the failed `npm test` result at `b1ac54b` is recorded honestly and not overwritten by a stale pass claim.

## Remaining Stage 8 closure blockers

PR #23 can proceed through review once its own test-guard restoration is confirmed, but Stage 8 closure-readiness still requires separate work or explicit owner decisions:

1. Current-head browser e2e/offline inference evidence is still needed. The original `browser-e2e.mjs` fixtures are unavailable or not committed.
2. No-upload and routing regression guards are still needed for closure quality, including checks for `connect-src 'self'`, non-GET request APIs in JavaScript, and `routeFromProbabilities` threshold cases.
3. Local-language compliance item 36 remains incomplete/deferred pending fluent Lumasaba/Lugisu validation or an explicit owner-approved deferral/waiver.

## Boundaries preserved

This PR does not perform or claim:

- deployment;
- submission;
- video production;
- RoCoLe inference;
- challenge-set inference;
- model retraining or fine-tuning;
- model, threshold, class-order, or preprocessing-contract changes;
- treatment recommendations;
- field validation;
- Stage 7 closure;
- Stage 8 closure.
