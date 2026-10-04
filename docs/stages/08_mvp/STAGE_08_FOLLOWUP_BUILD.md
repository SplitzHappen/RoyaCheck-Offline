# Stage 8 — Follow-up Review-Later and Disclosure Repair

**Stage:** 8 follow-up increment  
**Status:** second repair candidate; PR remains draft; Stage 8 remains open  
**Branch:** `chatgpt/stage-08-followups`  
**Current repair head:** pending final connector metadata refresh after this commit series

## Purpose

This PR follows merged PR #21, which delivered a browser-local MVP hardening increment without closing Stage 8.

This follow-up PR addresses deferred Stage 8 items:

- saved-record / review-later list backed by local IndexedDB;
- per-record text review card;
- per-record local delete;
- a bounded fixed-string local-language scaffold;
- submission-readiness disclosure drafts.

## Current repair posture

Claude's first audit of PR #22 at `d419ceb64aab449bce2e0530383f33d66dd072e7` returned `PASS WITH MAJOR REPAIRS`.

Claude's second verification of repair candidate `0d0e9dcde4ea8332aad0d760c7c6917f04c41252` also returned `PASS WITH MAJOR REPAIRS`.

The second repair pass intentionally takes the safer language path:

- no current user-facing string is claimed to be validated Lugisu or Lumasaba;
- no `lang="myx"` tag is applied to unverified text;
- suspected Luganda-like strings are removed from the app;
- the app states that actual Lugisu/Lumasaba wording is pending fluent human validation;
- the Stage 8 local-language item remains **not fully complete** until fluent validation supplies or approves actual language strings.

## Implemented repairs in this pass

### Review-later records

The app keeps the PR #22 repair architecture:

- explicit `royacheck:record-saved` and `royacheck:record-deleted` events;
- latest-request-wins saved-record refresh guard;
- off-screen list build before DOM swap;
- fresh IndexedDB reads before displaying saved-record review cards;
- delete synchronization between section 4 and section 5;
- user-visible delete / refresh errors.

### Local-language scaffold

The local-language panel now separates:

- the actual AI proposal;
- the human choice;
- the English fixed-string scaffold;
- the pending local-language slot.

The panel explicitly states that actual Lugisu/Lumasaba wording is pending fluent human validation. It does not present a fourth model route.

### Cache upgrade hardening

The service worker now precaches core assets using stale-cache-bypassing requests:

- install-time core asset fetch uses `cache: "reload"`;
- runtime network fetch uses `cache: "no-cache"` before fallback to cache;
- app and service-worker core asset lists remain synchronized and include `./followups.js`;
- cache name remains `royacheck-stage8-a0-4037c096-20261004-r2` for this repair series.

### Tests added or strengthened

The branch now includes:

- expanded `tests/static-smoke.mjs` checks for service-worker stale-cache bypassing, cache-name and asset-list parity, local-language non-claims, preserved localization limitation text, and absence of suspected Luganda-like draft strings;
- expanded `tests/browser-followups.mjs` intended to cover real save, `record-saved`, section-4 delete, section-5 delete, deleted-record refusal, exact-target deletion, proposal / human-choice separation, local-language reset, reload persistence, offline list render, no section-5 media, and no non-GET or cross-origin requests;
- `package.json` scripts documenting `npm test`, `serve:app`, and `test:browser-followups`.

## Validation status

Validation has **not** been executed by Vale in the connector-only repair pass.

Required before Ready for Review:

1. run `npm test` on the final candidate SHA;
2. run `node tests/browser-followups.mjs` against a served app on the final candidate SHA;
3. record command output and environment;
4. confirm no temporary workflow remains in final branch state.

Required before merge:

1. complete the Ready-for-Review validation above;
2. run or explicitly waive a clean upgrade test for r1-to-r2 stale-cache behavior;
3. run or explicitly waive a hosted clean-environment run if local-only evidence is accepted by the owner;
4. record owner decisions about local-language scope and evidence sufficiency.

## License and third-party status

The repository-level MIT `LICENSE` from `main` has been copied into this branch.

That MIT license covers the repository software unless a more specific notice applies. It does not by itself resolve all model/data notices. The ONNX model remains a derived artifact whose notices must separately disclose BRACOL CC BY 4.0 attribution and the pretrained TorchVision/ImageNet-weight lineage before final submission.

## Boundaries preserved

No deployment, video, submission, RoCoLe inference, challenge-set inference, model retraining/fine-tuning, model change, threshold change, class-order change, preprocessing-contract change, raw dataset commit, field-validation claim, treatment recommendation, Stage 7 closure, or Stage 8 closure was performed.

## Current recommendation

Keep PR #22 as draft until the static and browser tests are executed and recorded. Do not mark Ready for Review or merge yet.
