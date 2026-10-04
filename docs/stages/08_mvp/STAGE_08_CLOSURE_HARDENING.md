# Stage 8 — Closure-Readiness Hardening

## Status

PR #24 is a draft Stage 8 closure-readiness hardening increment. It does **not** close Stage 8, deploy, submit, produce video, or expand claims.

Base commit: `d2f9f976d07af4ac1a0ff58fb229ef00d4f9733b` (PR #23 squash merge).

Branch: `chatgpt/stage-08-closure-hardening`.

## Purpose

This increment reduces the remaining Stage 8 closure-readiness gap by adding repository-level guards for two issues Claude identified before closure:

1. no-upload / local-only posture;
2. routing threshold behavior for `routeFromProbabilities`.

It also carries forward José's owner decision on item 36: validated Lugisu/Lumasaba local-language support is deferred due to the hackathon time constraint. The prototype must not claim completed validated Lugisu/Lumasaba support.

## Scope implemented

### Closure guard test

Added `tests/closure-guards.mjs` and included it in `npm test`.

The new guard checks:

- Content-Security-Policy keeps `connect-src 'self'`;
- Content-Security-Policy keeps `form-action 'none'`;
- the UI does not introduce an HTML form upload path;
- app JavaScript does not introduce `XMLHttpRequest`, `WebSocket`, `EventSource`, or `navigator.sendBeacon` outbound paths;
- app JavaScript does not declare mutating request methods such as `POST`, `PUT`, `PATCH`, or `DELETE`;
- app JavaScript `fetch` calls do not set explicit request methods;
- `routeFromProbabilities` preserves the public routing contract at threshold edges and precedence cases:
  - rust at `T_RUST = 0.50` and top class routes `visible_rust`;
  - rust below `T_RUST` routes `not_sure`;
  - healthy at `T_HEALTHY = 0.70` and top class routes `no_visible_rust`;
  - healthy below `T_HEALTHY` routes `not_sure`;
  - leaf miner, brown leaf spot, and cercospora top classes route `not_sure`;
  - rust above threshold does not override a higher healthy top class that passes `T_HEALTHY`;
  - rust above `T_RUST` does not route `visible_rust` when healthy is the top class but below `T_HEALTHY`;
  - true rust top class above `T_RUST`, with healthy below `T_HEALTHY`, routes `visible_rust`.

### Package test chain

Updated `package.json` so `npm test` runs:

1. `node tests/static-smoke.mjs`
2. `node tests/preprocess-reference.mjs`
3. `node tests/closure-guards.mjs`

## Validation status

Vale did not run tests in this connector-only repair pass.

Claude auditor-run evidence at head `a742f50f558cd649171ce7c2de56a5defe7da2cb`:

- `npm test`: **FAIL**, exit 1. `static-smoke` and `preprocess-reference` passed; `closure-guards` failed because one routing assertion expected `visible_rust` for `[0.65, 0.55, 0.10, 0.10, 0.10]`, where healthy is actually the top class. The product routing was correct; the test expectation was wrong.
- `npm run test:browser-followups` with external server mode: **PASS**, 2 saved records, 27 requests.
- `node tests/browser-followups.mjs` with no `ROYA_BASE_URL`: **PASS**, 2 saved records, 25 requests.

This repair updates the incorrect closure-guards routing assertion and aligns the documented routing cases with the test. Independent validation is still required before Ready for Review:

- `npm test`
- `npm run test:browser-followups`
- optionally `node tests/browser-followups.mjs` with no `ROYA_BASE_URL`

## Item 36 decision carried forward

José has deferred validated Lugisu/Lumasaba local-language support due to the hackathon time constraint.

This means:

- `local_language_item_complete` remains `false`;
- the existing English-only scaffold must not be described as completed validated Lugisu/Lumasaba support;
- demo, submission, and pitch language must disclose the deferral if local-language support is mentioned.

## Remaining Stage 8 closure-readiness gaps after this increment

If the repaired guard tests pass, the main remaining Stage 8 closure-readiness gap is current-head browser e2e/offline inference evidence. The original `browser-e2e.mjs` fixtures remain unavailable or not committed.

A later closure package should still ask Claude to distinguish:

- PR #24 review/merge readiness;
- Stage 8 closure readiness;
- submission/demo readiness.

## Boundaries preserved

This PR does not perform or claim:

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
