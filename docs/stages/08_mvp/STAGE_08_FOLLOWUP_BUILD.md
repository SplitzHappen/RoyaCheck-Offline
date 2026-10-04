# Stage 8 — Follow-up Review-Later and Disclosure Repair

## Status

PR #22 remains a **draft Stage 8 follow-up increment**. It does **not** close Stage 8.

Current repair candidate: `chatgpt/stage-08-followups` after the minor repair pass that follows Claude's `PASS WITH MINOR REPAIRS` verification.

## Purpose

This follow-up repairs the deferred review-later and disclosure work that remained after the merged PR #21 partial Stage 8 browser-local MVP increment.

The implemented scope is intentionally narrow:

- saved-record / review-later list backed by local IndexedDB;
- per-record text review card;
- per-record local delete;
- fixed-string local-language scaffold;
- disclosure drafts for AI/tooling, supported browsers/offline limits, and third-party notices.

## Repair summary

### Review-later persistence

The saved-record list now:

- reads persisted observations from the existing `royacheck-offline` IndexedDB database;
- uses latest-request-wins refresh logic to avoid duplicate rendering under rapid refresh;
- builds refreshed content off-screen before replacing the visible list;
- re-reads a record before rendering a review card;
- clears current-session and persistent review cards when their record is deleted;
- provides visible refresh/delete error reporting.

The record posture remains text-only. Raw images are not retained or displayed by the review-later list.

### Local-language scaffold

The local-language item is **not fully complete**.

The app now includes an English-only fixed-string scaffold showing where bounded local-language prompts would appear. Actual Lugisu/Lumasaba wording is pending fluent human validation and is not claimed in this build. The scaffold deliberately avoids:

- claiming current UI strings are Lugisu/Lumasaba;
- using `lang="myx"` for unverified text;
- presenting suspected wrong-language strings as Lugisu;
- chatbot or free-form translation behavior.

The panel separates the actual AI proposal from the human choice. The first line is the only line that may name the AI proposal; human disposition is shown separately as human choice. This preserves the human-final design and avoids implying that the model made the human's choice.

Compliance item 36 remains unresolved/deferred until validated local-language strings exist.

### Service-worker upgrade hardening

The service worker now avoids the stale-code r1-to-r2 upgrade path identified by Claude:

- install-time precache fetches core assets using `cache: "reload"`;
- runtime network fetch uses `cache: "no-cache"` before falling back to cache;
- static smoke checks guard cache-name parity, asset-list parity, and stale-cache-bypassing fetch behavior.

A first-load transitional state can still occur under an already-controlling old service worker, but the r2 cache should not be populated with stale r1 scripts.

### Browser-test coverage

`tests/browser-followups.mjs` is intended to cover:

- real save flow and `royacheck:record-saved`;
- section 4 delete refreshing section 5;
- section 5 delete clearing section 4 and its review card when the same record is displayed;
- review-card refusal for deleted records;
- exact-target deletion;
- local-language panel separation of AI proposal from human choice;
- local-language panel reset after a new image is selected;
- reload persistence;
- offline saved-list render;
- absence of raw images, canvases, blob previews, non-GET requests, and cross-origin requests.

These tests still need to be executed and recorded on the final candidate SHA before Ready for Review.

## Validation status

Validation is pending. Vale has not run:

- `npm test`;
- `npm run test:browser-followups`;
- the original browser e2e route/offline inference test;
- an r1-to-r2 upgrade browser probe.

Do not mark Ready for Review or merge until green validation evidence is recorded or the owner explicitly accepts a narrower evidence basis.

## Boundaries preserved

This PR does not perform or claim:

- deployment;
- submission;
- RoCoLe inference;
- challenge-set inference;
- model retraining or fine-tuning;
- model, threshold, class-order, or preprocessing-contract changes;
- treatment recommendations;
- field validation;
- Stage 7 closure;
- Stage 8 closure.
