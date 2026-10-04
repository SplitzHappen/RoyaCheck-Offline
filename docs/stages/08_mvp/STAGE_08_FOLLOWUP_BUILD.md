# Stage 8 — Follow-up Review-Later and Disclosure Repair

## Status

PR #22 remains a **draft Stage 8 follow-up increment**. It does **not** close Stage 8.

Current repair candidate: `chatgpt/stage-08-followups` at tested SHA `469486f390251e47a327f06b7a0f52d8f3148b77`.

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

## Validation evidence recorded

Evidence below is **Claude auditor-run local evidence**, not Vale-run evidence. Vale did not execute the commands in this connector-only pass.

Tested SHA: `469486f390251e47a327f06b7a0f52d8f3148b77`.

Claude-reported environment:

- local read-only clone;
- Node `22.22.0`;
- Playwright `1.56.1`;
- headless Chromium `1194`;
- `git archive` export of `469486f` in a scratch directory;
- no repository writes by Claude.

Claude-reported results:

| Check | Result |
|---|---|
| `npm test` | PASS, exit 0; static smoke checks and preprocessing reference checks passed |
| `npm run test:browser-followups` with `python3 -m http.server 4173` at repo root / documented `serve:app` | PASS, 3/3 |
| Scratch mutation suite | 9/9 frozen-contract mutations caught |
| Frozen core compared with `751c99e9d16890ceb87ed2c4790f00c3289ceff5` | unchanged |
| `app/` compared with `c395889c180ef4a280f6ef4ba59e3643cdc23163` | byte-identical |
| Prior app-behaviour and r1-to-r2 upgrade probes | carried forward because `app/` is unchanged since `c395889` |

Claude-reported non-blocking caveats:

- built-in server mode still fails because `/app.js` rewrites to `/.js`;
- static smoke does not yet catch CSP `connect-src *`, remote POST injected into JS, or route-body mutation;
- original `browser-e2e.mjs` was not run because fixtures are not committed and no fixture generator exists;
- per-file SHA-256 and byte records remain a merge/submission-grade evidence item;
- local-language compliance item 36 remains incomplete/deferred pending fluent Lumasaba/Lugisu validation.

## Remaining validation posture

The auditor-run evidence supports moving toward Ready for Review if the owner accepts local auditor-run validation evidence. It is not a hosted clean-environment run and it is not Vale-run evidence.

Do not merge until merge-specific evidence and owner decisions are resolved.

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
