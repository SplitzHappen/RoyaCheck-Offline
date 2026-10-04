# Stage 8 — Minimum Browser-Local MVP Build

**Stage:** 8 — MVP implementation  
**Status:** partial Stage 8 hardening increment; final minor smoke PASS; Stage 8 remains open  
**Branch:** `chatgpt/stage-08-mvp-build`

## Frozen technical core

Stage 8 consumes the already frozen Stage 7D A0 artifact without changing it:

- source artifact id: `11292181113`;
- source artifact name: `stage7d-a0-export-parity`;
- ONNX file: `royacheck_a0_fp32.onnx`;
- ONNX SHA-256: `4037c09663190b7caed0773e525e5da39bd05286992612537991358b7acfd041`;
- input: `input`;
- output: `logits`;
- class order: `healthy, rust_present, leaf_miner_no_rust, brown_leaf_spot_no_rust, cercospora_no_rust`;
- preprocessing contract: RGB decode; require both dimensions >=224 px; preserve the full frame; resize to 224×224; ImageNet normalization; no center crop;
- browser preprocessing implementation: `app/preprocess.js`, separable triangle-filter resize with synthetic reference checks against Pillow-style behavior;
- `T_rust = 0.50`;
- `T_healthy = 0.70`;
- runtime: self-hosted `onnxruntime-web@1.30.0`, WASM execution provider, one thread;
- committed browser runtime assets: `ort.wasm.min.mjs`, `ort-wasm-simd-threaded.mjs`, and `ort-wasm-simd-threaded.wasm`.

No Stage 8 change is authorized to alter the model, class map, thresholds, preprocessing contract, or public three-way routing.

## Implemented MVP loop

The static app under `app/` implements:

1. image capture/upload input;
2. local image decode and full-frame 224×224 preprocessing;
3. runtime ONNX SHA-256 verification before session creation;
4. browser-local ONNX Runtime Web inference;
5. public AI proposal limited to:
   - `visible rust`;
   - `no visible rust`;
   - `not sure`;
6. blank-by-default human disposition;
7. explicit human confirmation before a record can be saved;
8. local structured record in IndexedDB;
9. deterministic action route derived from the **human** disposition;
10. user-initiated, text-only on-device review card for the current session record;
11. local current-session record deletion;
12. no raw-image retention in this MVP;
13. no raw-image upload or autonomous sending;
14. service-worker / manifest structure for a self-hosted PWA with cache verification.

The AI proposal never pre-fills the human disposition.

## Safety and authority

The app states explicitly that:

- the model output is an AI proposal;
- it is not a diagnosis;
- it is not treatment advice;
- `no visible rust` does not mean healthy, all clear, or no disease;
- only the human disposition becomes formal;
- nothing is automatically sent;
- no treatment recommendation is produced;
- the system does not verify that an image is a coffee leaf.

The reviewer card excludes model scores and raw-image transmission.

## Evidence shown in the prototype

Only already produced Stage 7C / Stage 7E evidence is used:

- Stage 7C validation gate: **PASS**.
- Stage 7E frozen BRACOL internal-holdout readout: **COMPLETE**.
- Internal target-class routing coverage: 136 eligible target-class leaves.
- Confident target-class outputs: 106.
- Correct confident target-class outputs: 104 / 106.
- Rust leaves routed to visible rust: 66 / 95.
- Rust leaves routed to not sure: 27 / 95.
- Rust leaves routed to no visible rust: 2 / 95.
- Other-condition leaves routed to visible rust: 7 / 117.

Claim ceiling remains unchanged:

- no field validation;
- no RoCoLe external readout yet;
- no challenge-set evidence;
- no diagnosis claim;
- no treatment recommendation.

## Static and browser checks

`npm test` runs:

1. `tests/static-smoke.mjs`, which fails on drift in frozen thresholds, class order, ImageNet constants, model hash, ONNX input/output usage, human-authority fields, public outputs, evidence wording, offline core-asset declarations, cache-name equality between `app/app.js` and `app/sw.js`, remote shell dependencies, missing local ORT asset references, or literal escaped-newline artifacts in the app shell.
2. `tests/preprocess-reference.mjs`, which checks the browser-side preprocessing implementation against synthetic non-protected reference fixtures.

Final browser smoke evidence was collected by a temporary Actions workflow and passed at `d24cd352226a931a04c397ea9cf50a7b715a9fad`. The workflow covered route-variety fixtures (`visible_rust`, `no_visible_rust`, `not_sure`), route-staleness protection in the e2e test, browser inference, save gating, IndexedDB readback, no raw-image retention, no default non-GET or external requests, offline cache readiness, offline reload, and offline inference.

The temporary workflow has been removed from the branch after evidence capture.

## Explicitly not performed in Stage 8 build

- no deployment;
- no video production;
- no submission;
- no RoCoLe inference;
- no challenge-set inference;
- no model retraining or fine-tuning;
- no model change;
- no threshold change;
- no class-order change;
- no preprocessing-contract change;
- no field-validation claim;
- no raw dataset commit;
- no treatment recommendation;
- no Stage 7 closure;
- no Stage 8 closure.

## Deferred owner decisions / follow-ups

José explicitly accepts that PR #21 is a partial Stage 8 hardening increment. Lugisu fixed-string interaction and full review-later persistence are deferred from PR #21, and Stage 8 remains open.

José explicitly declines adding a uniform-image routing rule in PR #21 because it could alter routing behavior. Image-quality / near-uniform routing remains a future decision.

## Next gate

PR #21 is eligible for Ready-for-Review authorization. Ready for Review and merge both require separate explicit José authorization.
