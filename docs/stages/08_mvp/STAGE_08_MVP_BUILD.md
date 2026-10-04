# Stage 8 — Minimum Browser-Local MVP Build

**Stage:** 8 — MVP implementation / technical hardening  
**Status:** partial Stage 8 hardening increment repaired after Claude audit; not Stage 8 closure  
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
- browser repair: preprocessing now lives in `app/preprocess.js` and uses a separable triangle-filter resize path designed to conform more closely to the Pillow / Stage 7C / Stage 7E resize behaviour than the previous non-antialiased 2x2 bilinear implementation;
- `T_rust = 0.50`;
- `T_healthy = 0.70`;
- runtime: self-hosted `onnxruntime-web@1.30.0`, WASM execution provider, one thread;
- committed browser runtime assets: `ort.wasm.min.mjs`, `ort-wasm-simd-threaded.mjs`, and `ort-wasm-simd-threaded.wasm`.

No Stage 8 repair altered the model, class map, thresholds, public three-way routing, or intended preprocessing contract.

## Implemented MVP loop

The static app under `app/` implements:

1. image capture/upload input;
2. local image decode and full-frame 224×224 preprocessing;
3. browser-local ONNX Runtime Web inference;
4. runtime SHA-256 check of the fetched ONNX bytes before session creation;
5. public AI proposal limited to:
   - `visible rust`;
   - `no visible rust`;
   - `not sure`;
6. blank-by-default human disposition;
7. explicit human confirmation before a record can be saved;
8. local structured record in IndexedDB;
9. deterministic action route derived from the **human** disposition;
10. user-initiated, text-only on-device review card for the current session record;
11. local deletion for the current session record;
12. no raw-image retention in this MVP;
13. no raw-image upload or autonomous sending;
14. service-worker / manifest structure for a self-hosted PWA.

The AI proposal never pre-fills the human disposition.

## Repairs after Claude audit

Claude returned `FAIL / BLOCKED` at `89e1d425c4fb542bff8c09ddb2def76c5038e980`. This repair pass addresses the owner-authorized subset:

- B1 preprocessing conformance: replaced the browser-only non-antialiased resize path with a shared `app/preprocess.js` triangle-filter implementation and synthetic reference checks.
- B2 browser smoke gap: added a browser image-to-record smoke path that selects images, runs inference, checks routes against Python/Pillow references, saves a record, and reads IndexedDB.
- B3 scope conflict: documented this PR as a partial Stage 8 hardening increment. Lugisu fixed-string interaction and full review-later persistence are deferred follow-up items; Stage 8 remains open.
- M1: added blank-canvas / unreadable-pixel failure behaviour and removed language implying the model can detect image suitability or verify coffee-leaf identity.
- M2: tightened on-screen evidence wording to include coverage and other-condition false-visible-rust information.
- M3: changed offline readiness messaging so the app only reports verified offline cache after cache verification.
- M4: versioned the service-worker cache.
- M5: removed `capture="environment"` from the file input.
- Minor 1: updated stale build documentation.
- Minor 2: added runtime ONNX SHA-256 verification before creating the inference session.

## Evidence shown in the prototype

Only already produced Stage 7C / Stage 7E evidence is used. The app states:

- Stage 7C validation gate: **PASS**.
- Stage 7E frozen BRACOL internal-holdout readout: **COMPLETE**.
- On the frozen BRACOL internal holdout, 136 target-class leaves were eligible for target-class routing.
- The model produced 106 confident target-class outputs and 104 of those 106 were correct.
- The visible-rust route captured 66 of 95 rust leaves.
- 27 of 95 rust leaves were routed to `not sure`.
- Other-condition false-visible-rust routing occurred for 7 of 117 other-condition leaves.

Claim ceiling remains unchanged:

- no field validation;
- no RoCoLe external readout yet;
- no challenge-set evidence;
- no diagnosis claim;
- no treatment recommendation;
- no assertion that the model verifies coffee-leaf identity.

## Static and browser checks

`npm test` runs:

1. `tests/static-smoke.mjs`; and
2. `tests/preprocess-reference.mjs`.

Browser-local image-to-record smoke evidence is recorded separately in `STAGE_08_BROWSER_SMOKE_EVIDENCE.md`.

## Explicitly not performed in this Stage 8 repair pass

- no deployment;
- no video production;
- no submission;
- no RoCoLe inference;
- no challenge-set inference;
- no model retraining or fine-tuning;
- no threshold selection;
- no class-order change;
- no field-validation claim;
- no raw dataset commit;
- no Lugisu localization implementation;
- no full saved-records review-later list;
- no Stage 7 closure;
- no Stage 8 closure.

## Remaining Stage 8 follow-ups

Before Stage 8 can close, either implement or formally rescope:

1. Lugisu fixed-string interaction pack / local-language path.
2. Review-later persistence beyond the current session record.
3. Claude verification of this repair pass.
4. Any remaining organizer-rule disclosure or licensing/notice requirements before submission.

## Next gate

Stop for owner review and Claude verification of the repaired head. PR #21 should remain draft until José explicitly authorizes Ready for Review.
