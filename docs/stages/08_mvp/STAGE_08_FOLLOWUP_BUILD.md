# Stage 8 — Follow-up Review-Later and Evidence Consolidation

## Status

PR #21 and PR #22 are merged partial Stage 8 increments. Stage 8 remains **open**.

This document now records the Stage 8 evidence-consolidation posture after PR #22, on branch `chatgpt/stage-08-evidence-consolidation` based on `main` at PR #22 squash merge commit `80eb5f3c6574c9b7ceb829792aef75e915122b01`.

This pass does not deploy, submit, close Stage 7, close Stage 8, or add product features.

## Implemented MVP and follow-up scope

Merged PR #21 implemented the browser-local Stage 8 partial MVP:

- static browser-local app under `app/`;
- self-hosted ONNX Runtime Web 1.30.0;
- frozen Stage 7D A0 FP32 ONNX model reference;
- browser-local preprocessing and inference path;
- no raw-image retention;
- human-final disposition before saving;
- current-session observation card;
- service-worker/PWA cache verification.

Merged PR #22 implemented the deferred follow-up increment:

- saved-record / review-later list backed by local IndexedDB;
- per-record text review card;
- per-record local delete;
- current-session and persistent review-card synchronization on delete;
- latest-request-wins refresh logic to avoid duplicate saved-record rendering;
- fixed-string local-language scaffold;
- disclosure drafts for AI/tooling, supported browsers/offline limits, and third-party notices;
- test-layer repairs and Claude auditor-run local validation evidence.

The saved-record posture remains text-only. Raw images are not retained or displayed by the review-later list.

## Frozen technical contract

The following remain the frozen Stage 8 contract:

- model artifact: `app/assets/model/royacheck_a0_fp32.onnx`;
- expected model SHA-256: `4037c09663190b7caed0773e525e5da39bd05286992612537991358b7acfd041`;
- ONNX Runtime Web version: `1.30.0`;
- public labels/routes: `visible rust`, `no visible rust`, `not sure`;
- thresholds: `T_RUST = 0.50`, `T_HEALTHY = 0.70`;
- class order: `healthy`, `rust_present`, `leaf_miner_no_rust`, `brown_leaf_spot_no_rust`, `cercospora_no_rust`;
- preprocessing: RGB decode, minimum 224 px dimensions, full-frame resize to 224 x 224, ImageNet normalization, no center crop;
- service-worker cache name: `royacheck-stage8-a0-4037c096-20261004-r2`.

## Core asset evidence recorded

`STAGE_08_ASSET_MANIFEST.json` now records connector-derived core asset evidence for `main` at `80eb5f3c6574c9b7ceb829792aef75e915122b01`:

- exact core asset list;
- Git tree byte counts;
- Git blob SHAs;
- total core asset size of `18,102,457` bytes, counting `./` as an index-equivalent root cache entry;
- 30 MB core asset budget pass;
- frozen ONNX expected SHA-256 from Stage 7D evidence;
- ONNX Runtime Web version;
- service-worker cache name.

Limit: exact per-file SHA-256 values, except the frozen ONNX expected SHA already carried from Stage 7D, were not recomputed by Vale in this connector-only pass. Final local/auditor recomputation remains recommended before submission.

## Local-language scaffold status

The local-language item is **not fully complete**.

The app includes an English-only fixed-string scaffold showing where bounded local-language prompts would appear. Actual Lugisu/Lumasaba wording is pending fluent human validation and is not claimed in this build. The scaffold deliberately avoids:

- claiming current UI strings are Lugisu/Lumasaba;
- using `lang="myx"` for unverified text;
- presenting suspected wrong-language strings as Lugisu;
- chatbot or free-form translation behavior.

The panel separates the actual AI proposal from the human choice. The first line is the only line that may name the AI proposal; human disposition is shown separately as human choice. This preserves the human-final design and avoids implying that the model made the human's choice.

Compliance item 36 remains unresolved/deferred until validated local-language strings exist.

## Service-worker upgrade hardening

The service worker avoids the stale-code r1-to-r2 upgrade path identified by Claude:

- install-time precache fetches core assets using `cache: "reload"`;
- runtime network fetch uses `cache: "no-cache"` before falling back to cache;
- static smoke checks guard cache-name parity, asset-list parity, and stale-cache-bypassing fetch behavior.

A first-load transitional state can still occur under an already-controlling old service worker, but the r2 cache should not be populated with stale r1 scripts.

## Validation evidence

Evidence below is Claude auditor-run local evidence, not Vale-run evidence.

Claude-reported environment:

- local read-only clone;
- Node `22.22.0`;
- Playwright `1.56.1`;
- headless Chromium `1194`;
- `git archive` export of `469486f390251e47a327f06b7a0f52d8f3148b77` in a scratch directory;
- no repository writes by Claude.

Claude-reported results:

- `npm test`: PASS, exit 0; static smoke checks and preprocessing reference checks passed;
- `npm run test:browser-followups` with `python3 -m http.server 4173` at repo root / documented `serve:app`: PASS, 3/3;
- scratch mutation suite: 9/9 frozen-contract mutations caught;
- frozen core compared with `751c99e9d16890ceb87ed2c4790f00c3289ceff5`: unchanged;
- `app/` compared with `c395889c180ef4a280f6ef4ba59e3643cdc23163`: byte-identical;
- prior app-behaviour and r1-to-r2 upgrade probes carried forward because `app/` is unchanged since `c395889`.

## Remaining evidence gaps and caveats

The following remain unresolved and should be reviewed by Claude before any Stage 8 closure decision:

1. Exact per-file SHA-256 values, except the frozen ONNX expected SHA, were not recomputed by Vale in the connector-only pass.
2. The original browser e2e route/offline inference test was not run because expected route fixtures are unavailable or not committed.
3. The r1-to-r2 upgrade evidence remains Claude local/auditor-run evidence unless a reproducible repository test is added later.
4. The built-in `tests/browser-followups.mjs` server mode has a known `/app.js` to `/.js` rewrite bug.
5. Static smoke does not yet catch CSP `connect-src *` mutation, remote POST injected into JavaScript, or route-body mutation.
6. Compliance item 36 remains incomplete/deferred pending fluent Lumasaba/Lugisu validation.

## Boundaries preserved

This evidence-consolidation branch does not perform or claim:

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

## Recommendation

Send the evidence-consolidation PR to Claude before Ready for Review. Claude should classify remaining issues as blocking, major, or minor, and determine whether the current evidence posture is sufficient for Stage 8 closeout planning or whether additional local tests/hash recomputation are required.
