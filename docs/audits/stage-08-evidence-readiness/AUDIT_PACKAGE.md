# Claude Audit Package — Stage 8 Evidence Readiness

Repository: `SplitzHappen/RoyaCheck-Offline`

Branch: `chatgpt/stage-08-evidence-consolidation`

Base `main` commit: `80eb5f3c6574c9b7ceb829792aef75e915122b01`

Purpose: audit Stage 8 evidence readiness after merged PR #21 and PR #22. This package is for evidence/readiness review only. It must not be treated as Stage 8 closure, deployment readiness, field validation, submission, or treatment guidance.

## Context

RoyaCheck Offline is a browser-local coffee-leaf rust observation prototype for constrained/offline settings. The public routes are:

- `visible rust`
- `no visible rust`
- `not sure`

The human remains the final decision-maker. The app does not diagnose, does not recommend treatment, does not claim field validation, and does not upload raw images.

## Merged implementation history

### PR #21 — Stage 8 browser-local MVP build

Merged into `main` as commit:

- `751c99e9d16890ceb87ed2c4790f00c3289ceff5`

Implemented:

- static browser-local app under `app/`;
- self-hosted ONNX Runtime Web 1.30.0;
- frozen Stage 7D A0 FP32 ONNX model reference;
- browser-local preprocessing and inference path;
- no raw-image retention;
- human-final disposition before saving;
- current-session observation card;
- service-worker/PWA cache verification.

### PR #22 — Stage 8 review-later and disclosure follow-up

Squash merged into `main` as commit:

- `80eb5f3c6574c9b7ceb829792aef75e915122b01`

Implemented:

- saved-record / review-later list backed by local IndexedDB;
- per-record text review card;
- per-record local delete;
- current-session and persistent review-card synchronization on delete;
- latest-request-wins refresh logic to avoid duplicate saved-record rendering;
- fixed-string local-language scaffold;
- disclosure drafts for AI/tooling, supported browsers/offline limits, and third-party notices;
- static/browser follow-up tests and evidence records.

PR #22 was explicitly a partial Stage 8 follow-up increment. It did not close Stage 8.

## Frozen technical contract

Please verify no evidence-consolidation change alters this contract:

- model path: `app/assets/model/royacheck_a0_fp32.onnx`
- model expected SHA-256: `4037c09663190b7caed0773e525e5da39bd05286992612537991358b7acfd041`
- source Stage 7D artifact ID: `11292181113`
- source Stage 7D artifact name: `stage7d-a0-export-parity`
- ONNX Runtime Web version: `1.30.0`
- thresholds:
  - `T_RUST = 0.50`
  - `T_HEALTHY = 0.70`
- class order:
  - `healthy`
  - `rust_present`
  - `leaf_miner_no_rust`
  - `brown_leaf_spot_no_rust`
  - `cercospora_no_rust`
- preprocessing:
  - RGB decode;
  - require both dimensions at least 224 px;
  - preserve full frame;
  - resize to 224 x 224;
  - ImageNet normalization;
  - no center crop.

## Current evidence-consolidation changes

This branch updates evidence/docs only:

- `docs/stages/08_mvp/STAGE_08_ASSET_MANIFEST.json`
- `docs/stages/08_mvp/STAGE_08_FOLLOWUP_BUILD.md`
- this audit package

It records:

- core asset list;
- Git tree byte counts;
- Git blob SHAs;
- total core asset size: `18,102,457` bytes, counting `./` as an index-equivalent root cache entry;
- core budget: `30,000,000` bytes;
- ONNX expected SHA-256 from Stage 7D;
- ONNX Runtime Web version;
- service-worker cache name: `royacheck-stage8-a0-4037c096-20261004-r2`;
- Claude auditor-run local validation evidence;
- unresolved evidence gaps.

## Core asset list to verify

Expected service-worker core assets:

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

Connector-derived byte counts and Git blob SHAs are recorded in `docs/stages/08_mvp/STAGE_08_ASSET_MANIFEST.json`.

Important limitation: exact per-file SHA-256 values, except the frozen ONNX expected SHA from Stage 7D, were not recomputed by Vale in the connector-only pass. Please determine whether this is blocking, major, or minor for Stage 8 evidence readiness.

## Validation evidence recorded

Evidence below is Claude auditor-run local evidence from prior PR #22 verification, not Vale-run evidence.

Reported environment:

- local read-only clone;
- Node `22.22.0`;
- Playwright `1.56.1`;
- headless Chromium `1194`;
- `git archive` export of `469486f390251e47a327f06b7a0f52d8f3148b77` in a scratch directory;
- no repository writes by Claude.

Reported results:

- `npm test`: PASS, exit 0; static smoke checks and preprocessing reference checks passed;
- `npm run test:browser-followups` with `python3 -m http.server 4173` at repo root / documented `serve:app`: PASS, 3/3;
- scratch mutation suite: 9/9 frozen-contract mutations caught;
- frozen core compared with `751c99e9d16890ceb87ed2c4790f00c3289ceff5`: unchanged;
- `app/` compared with `c395889c180ef4a280f6ef4ba59e3643cdc23163`: byte-identical;
- prior app-behaviour and r1-to-r2 upgrade probes carried forward because `app/` is unchanged since `c395889`.

## Known caveats to classify

Please classify each as blocking, major, or minor for Stage 8 evidence readiness:

1. Exact per-file SHA-256 values, except the frozen ONNX expected SHA, were not recomputed by Vale in the connector-only pass.
2. The original browser e2e route/offline inference test was not run because expected route fixtures are unavailable or not committed.
3. The r1-to-r2 upgrade evidence remains Claude local/auditor-run evidence unless a reproducible repository test is added later.
4. The built-in `tests/browser-followups.mjs` server mode has a known `/app.js` to `/.js` rewrite bug.
5. Static smoke does not yet catch CSP `connect-src *` mutation, remote POST injected into JavaScript, or route-body mutation.
6. Compliance item 36 remains incomplete/deferred pending fluent Lumasaba/Lugisu validation.

## Scope and claim boundaries to verify

Confirm whether the branch preserves all of the following:

- no deployment;
- no submission;
- no video production;
- no RoCoLe inference;
- no challenge-set inference;
- no model retraining or fine-tuning;
- no model change;
- no threshold change;
- no class-order change;
- no preprocessing-contract change;
- no treatment recommendation;
- no field-validation claim;
- no Stage 7 closure;
- no Stage 8 closure.

## Requested Claude audit output

Please answer in this structure:

### Verdict

Use one:

- PASS
- PASS WITH MINOR REPAIRS
- PASS WITH MAJOR REPAIRS
- FAIL / BLOCKED

### Evidence readiness findings

For each item below, state fixed / sufficient / insufficient / unclear, with evidence:

- asset byte counts and Git blob SHA evidence;
- exact SHA-256 recomputation status;
- ONNX expected SHA evidence;
- core asset size budget;
- service-worker cache-name and asset-list consistency;
- PR #21 / PR #22 validation evidence carry-forward;
- original browser e2e fixture gap;
- r1-to-r2 upgrade evidence status;
- local-language compliance item 36 status;
- static smoke mutation gaps;
- built-in browser-followups server bug.

### Blocking issues before Stage 8 Ready-for-Closure audit

List only issues that must block a Stage 8 closure-readiness audit.

### Major issues before merge of this evidence PR

List issues that should block merging this evidence-consolidation PR.

### Minor issues / recommendations

List non-blocking repairs or improvements.

### Scope and claim safety

State whether any wording overclaims deployment, submission, field validation, treatment guidance, model performance, local-language completion, or Stage 8 closure.

### Final recommendation

State one:

- Ready for Review now.
- Ready for Review after minor repairs.
- Keep draft until major repairs are complete.
- Blocked.

Then separately state whether this evidence posture is ready for a later Stage 8 closure-readiness audit.
