# Stage 8 — Deferred Follow-up Increment

**Stage:** 8 — MVP follow-up implementation  
**Status:** partial follow-up increment; Stage 8 remains open  
**Branch:** `chatgpt/stage-08-followups`  
**Base:** `main` after PR #21 squash merge `751c99e9d16890ceb87ed2c4790f00c3289ceff5`

## Purpose

This increment addresses the Stage 8 items explicitly deferred from PR #21:

1. a saved-record / review-later list backed by the same browser-local IndexedDB store;
2. per-record text review cards and per-record deletion;
3. a fixed-string local-language interaction scaffold for Lugisu;
4. draft submission-readiness disclosures.

This PR is not Stage 8 closure.

## Frozen core preserved

No change is made to:

- the Stage 7D A0 ONNX artifact;
- ONNX SHA-256 `4037c09663190b7caed0773e525e5da39bd05286992612537991358b7acfd041`;
- class order;
- `T_rust = 0.50`;
- `T_healthy = 0.70`;
- preprocessing contract;
- public output routes: `visible rust`, `no visible rust`, `not sure`.

## Saved-record / review-later behavior

The new `app/followups.js` module reads the existing `royacheck-offline` IndexedDB `observations` store and renders saved observations in `#savedRecordsSection`.

Implemented behavior:

- refresh saved local records;
- list each saved record as text only;
- view a saved-record review card;
- delete an individual saved record;
- keep `raw_image_retained:false` as the expected record posture;
- do not upload or send anything automatically.

This upgrades the PR #21 current-session-only review/delete behavior into a minimal review-later loop while keeping the raw-image non-retention constraint.

## Lugisu fixed-string scaffold

The prototype now includes `#lugisuSection`, a fixed-string local-language prompt rehearsal.

Important limitation:

- the Lugisu text is **not validated**;
- the UI marks each Lugisu slot as `Lugisu translation pending human validation`;
- this is an interaction scaffold, not validated localization;
- no chatbot or free-form translation is introduced.

Before final submission or field-use claims, a fluent reviewer must replace or approve the Lugisu strings.

## Submission-readiness disclosure drafts

This increment adds draft disclosure material under `docs/submission/`:

- AI/tooling disclosure draft;
- supported browser and offline limitations draft;
- third-party notices draft.

These are draft submission aids. They do not by themselves close Stage 8 or Stage 10.

## Validation target

`npm test` should continue to pass and now checks that:

- `app/followups.js` exists in the shell and service-worker cache;
- saved-record persistence uses IndexedDB `getAll`;
- per-record deletion exists;
- Lugisu fixed-string slots are marked as pending human validation;
- no remote shell assets are introduced;
- the frozen model/preprocessing/routing contracts remain unchanged.

## Explicitly not performed

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
- no raw dataset commit;
- no field-validation claim;
- no treatment recommendation;
- no Stage 7 closure;
- no Stage 8 closure.
