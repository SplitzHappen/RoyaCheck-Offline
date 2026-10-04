# Stage 8 — Minimum Browser-Local MVP Build

**Stage:** 8 — MVP implementation  
**Status:** Implementation in progress; deployment / physical-device smoke evidence not yet authorized  
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
- preprocessing: RGB decode; require both dimensions >=224 px; preserve the full frame; direct bilinear resize to 224×224; ImageNet normalization; no center crop;
- `T_rust = 0.50`;
- `T_healthy = 0.70`;
- runtime: self-hosted `onnxruntime-web@1.30.0`, WASM-only path, one thread;
- minimal browser runtime assets: `ort.wasm.min.mjs`, `ort-wasm-simd-threaded.mjs`, and `ort-wasm-simd-threaded.wasm`.

No Stage 8 change is authorized to alter the model, class map, thresholds, preprocessing contract, or public three-way routing.

## Implemented MVP loop

The static app under `app/` implements:

1. image capture/upload input;
2. local image decode and full-frame 224×224 preprocessing;
3. browser-local ONNX Runtime Web inference;
4. public AI proposal limited to:
   - `visible rust`;
   - `no visible rust`;
   - `not sure`;
5. blank-by-default human disposition;
6. explicit human confirmation before a record can be saved;
7. local structured record in IndexedDB;
8. deterministic action route derived from the **human** disposition;
9. user-initiated, text-only on-device review card;
10. local record deletion;
11. no raw-image retention in this MVP;
12. no raw-image upload or autonomous sending;
13. service-worker / manifest structure for a self-hosted PWA.

The AI proposal never pre-fills the human disposition.

## Safety and authority

The app states explicitly that:

- the model output is an AI proposal;
- it is not a diagnosis;
- it is not treatment advice;
- `no visible rust` does not mean healthy, all clear, or no disease;
- only the human disposition becomes formal;
- nothing is automatically sent;
- no treatment recommendation is produced.

The reviewer card excludes model scores and raw-image transmission.

## Evidence shown in the prototype

Only already produced Stage 7C / Stage 7E evidence is used:

- Stage 7C validation gate: **PASS**.
- Stage 7E frozen BRACOL internal-holdout readout: **COMPLETE**.
- Internal-holdout selective accuracy among confident target-class outputs: `104 / 106 = 98.1%`.
- Accepted rust recall: `66 / 68 = 97.1%`.
- Accepted healthy specificity: `38 / 38 = 100.0%`.

Claim ceiling remains unchanged:

- no field validation;
- no RoCoLe external readout yet;
- no challenge-set evidence;
- no diagnosis claim;
- no treatment recommendation.

## Static checks

`npm test` runs `tests/static-smoke.mjs`, which fails on drift in the frozen thresholds, class order, ImageNet constants, model hash, ONNX input/output usage, human-authority fields, public outputs, remote shell dependencies, or offline core-asset declarations.

Binary model/runtime assets are intentionally populated from the fixed Stage 7D artifact and `onnxruntime-web@1.30.0` by a temporary Actions workflow because ordinary connector file writes are text-only. That workflow must be removed after the verified asset commit.

## Explicitly not performed in Stage 8 build

- no deployment;
- no video production;
- no submission;
- no RoCoLe inference;
- no challenge-set inference;
- no model retraining or fine-tuning;
- no threshold selection;
- no preprocessing change;
- no field-validation claim;
- no raw dataset commit.

## Next gate

After the local MVP source + fixed binary/runtime assets are present and static checks pass, stop for owner authorization before deployment / live-browser smoke evidence.
