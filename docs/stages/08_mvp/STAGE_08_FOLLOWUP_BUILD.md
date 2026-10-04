# Stage 8 — Follow-up Review-Later and Disclosure Repair

**Stage:** 8 — MVP follow-up increment  
**Status:** draft repair after Claude PR #22 audit; Stage 8 remains open  
**Branch:** `chatgpt/stage-08-followups`

## Purpose

This follow-up PR addresses the Stage 8 items that PR #21 explicitly deferred:

1. saved-record / review-later persistence;
2. per-record text-only review cards;
3. per-record local deletion;
4. fixed-string local-language interaction scaffold;
5. draft submission-readiness disclosures.

This PR does **not** close Stage 8.

## Claude audit repair scope

Claude audited PR #22 at `d419ceb64aab449bce2e0530383f33d66dd072e7` and returned `PASS WITH MAJOR REPAIRS`.

This repair pass addresses the reported blockers:

| Finding | Repair status |
|---|---|
| B1 saved-record duplicate rendering race | Repaired in `app/followups.js` with a latest-request-wins refresh counter and off-screen list construction before DOM swap. |
| B2 stale deleted-record paths | Repaired with shared `royacheck:record-saved` and `royacheck:record-deleted` events between `app.js` and `followups.js`. Deleting from either view refreshes/clears the other affected view. |
| B3 Lugisu placeholder mismatch | Repaired by replacing English-only placeholders with draft fixed-string Lugisu text, still explicitly unvalidated and pending fluent human review. |
| B4 no behavioral coverage | Partially repaired by adding `tests/browser-followups.mjs`, a dedicated Playwright browser probe for the follow-up behavior. Execution evidence is still pending. |

## Review-later behavior

The follow-up module now:

- reads persisted records from the existing `royacheck-offline` IndexedDB `observations` store;
- renders a text-only saved-record list;
- uses `refreshRequestSeq` so rapid refreshes cannot append duplicate records from stale refreshes;
- builds a fresh list off-screen and swaps it into the DOM only if the refresh is current;
- exposes per-record text review cards only after re-reading the selected record from IndexedDB;
- refuses to render a review card for a deleted/missing record;
- deletes only the requested record ID;
- clears section 4 and the saved-record review card when either is showing a deleted record;
- reports refresh/delete errors through visible status text.

The record posture remains text-only. Raw images are not retained or sent.

## Lugisu fixed-string scaffold

This PR adds draft fixed-string Lugisu text for bounded statuses/actions:

- visible rust;
- no visible rust;
- not sure;
- review later.

The app states that these strings are:

- draft;
- unvalidated;
- pending review by a fluent human;
- not evidence of validated localization, field readiness, or usability.

The Lugisu scaffold is fixed-string only. It does not add chatbot behavior or free-form translation.

## Cache and offline repair

The cache name is bumped to:

`royacheck-stage8-a0-4037c096-20261004-r2`

`app/followups.js` is included in both `app.js` and `app/sw.js` `CORE_ASSETS`, and `tests/static-smoke.mjs` checks that the app and service-worker asset lists remain identical.

## Validation status

Static validation has been updated:

- `npm test` checks the static app shell, cache-name equality, asset-list equality, Lugisu warning strings, review-later repair hooks, and preprocessing reference behavior.
- `tests/browser-followups.mjs` is added for browser-level follow-up behavior.

Required before Ready for Review:

1. run `npm test`;
2. run `node tests/browser-followups.mjs` against a served app with Playwright available;
3. record commands, outputs, tested SHA, and whether the evidence is local-only or hosted.

No hosted browser evidence is recorded yet for this repaired PR.

## Boundaries preserved

No deployment, video, submission, RoCoLe inference, challenge-set inference, model retraining/fine-tuning, model change, threshold change, class-order change, preprocessing-contract change, raw dataset commit, field-validation claim, treatment recommendation, Stage 7 closure, or Stage 8 closure was performed.

## Remaining submission-stage blockers

The following remain open before final submission:

- final repository `LICENSE`;
- final third-party notices with BRACOL CC BY 4.0 attribution, TorchVision/ImageNet-pretrained-weight disclosure, and ONNX Runtime Web MIT notice;
- final AI/tooling disclosure;
- supported-browser/offline statement;
- owner decision on whether local-only browser evidence is acceptable if hosted Actions remains unavailable.
