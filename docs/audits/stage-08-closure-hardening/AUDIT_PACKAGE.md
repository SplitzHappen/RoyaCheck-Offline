# Claude Audit Package — Stage 8 Closure-Readiness Hardening

Repository: `SplitzHappen/RoyaCheck-Offline`

Branch: `chatgpt/stage-08-closure-hardening`

Base commit: `d2f9f976d07af4ac1a0ff58fb229ef00d4f9733b` (PR #23 squash merge)

Purpose: audit the PR #24 closure-readiness hardening increment. This package is for review only. It must not be treated as Stage 8 closure, deployment readiness, field validation, submission, or treatment guidance.

## Background

PR #23 merged the Stage 8 evidence-consolidation package. Claude confirmed the evidence package and José approved deferring validated Lugisu/Lumasaba local-language support due to the hackathon time constraint.

Remaining Stage 8 closure-readiness issues after PR #23 were:

1. current-head browser e2e/offline inference evidence;
2. no-upload and routing regression guards;
3. carrying forward the item 36 deferral without claiming completed validated local-language support.

PR #24 addresses item 2 and documents item 3. It does not fully close item 1.

## Claude repair context

Claude audited PR #24 at head `a742f50f558cd649171ce7c2de56a5defe7da2cb` and returned `PASS WITH MINOR REPAIRS`.

Blocking issue before Ready for Review:

- `npm test` failed because `tests/closure-guards.mjs` expected `visible_rust` for `[0.65, 0.55, 0.10, 0.10, 0.10]`.
- That input has healthy as the top class and healthy is below `T_HEALTHY`, so the correct result is `not_sure`.
- The product routing was correct; the test expectation was wrong.

This repair updates the incorrect expectation, adds the true rust-top visible-rust case, and expands non-public disease checks across indices 2, 3, and 4.

## Claimed PR #24 scope

Expected changed files:

- `package.json`
- `tests/closure-guards.mjs`
- `docs/stages/08_mvp/STAGE_08_CLOSURE_HARDENING.md`
- `docs/audits/stage-08-closure-hardening/AUDIT_PACKAGE.md`

Expected implementation:

- add `tests/closure-guards.mjs`;
- include `tests/closure-guards.mjs` in `npm test`;
- guard `connect-src 'self'`;
- guard `form-action 'none'`;
- guard against HTML form upload path;
- guard against outbound/transmission APIs or mutating request methods in app JavaScript;
- test `routeFromProbabilities` threshold behavior directly;
- document that validated Lugisu/Lumasaba item 36 is deferred, not completed.

## Requested audit tasks

Please classify findings as blocking, major, or minor for both PR #24 review-readiness and later Stage 8 closure-readiness.

### A. Scope check

Verify that PR #24 changes only the expected files and does not change product app behavior, model files, thresholds, class order, preprocessing, or public claims.

### B. Test behavior

Run, if feasible:

- `npm test`
- `npm run test:browser-followups`
- `node tests/browser-followups.mjs` with no `ROYA_BASE_URL`

Report environment, command, result, and any failures.

### C. No-upload / local-only guard adequacy

Check whether `tests/closure-guards.mjs` gives meaningful regression coverage for:

- `connect-src 'self'`;
- `form-action 'none'`;
- no HTML form upload path;
- no `XMLHttpRequest`, `WebSocket`, `EventSource`, or `navigator.sendBeacon` outbound path;
- no explicit mutating request methods in JavaScript;
- no explicit-method `fetch` calls.

Flag overbroad, brittle, or underinclusive checks.

### D. Routing threshold guard adequacy

Check whether `tests/closure-guards.mjs` adequately covers `routeFromProbabilities` threshold behavior:

- rust at `T_RUST = 0.50` routes `visible_rust` only when rust is the top class;
- rust below `T_RUST` routes `not_sure`;
- healthy at `T_HEALTHY = 0.70` and top class routes `no_visible_rust`;
- healthy below `T_HEALTHY` routes `not_sure`;
- leaf miner, brown leaf spot, and cercospora top classes route `not_sure`;
- rust above `T_RUST` does not override healthy when healthy is the top class;
- a true rust top-class case above `T_RUST` routes `visible_rust` even when healthy is below `T_HEALTHY`.

Flag missing edge cases or misleading expectations.

### E. Item 36 deferral

Verify that the PR preserves the owner decision:

- validated Lugisu/Lumasaba local-language support is deferred due to time constraint;
- `local_language_item_complete` should remain false in existing evidence files;
- docs and PR wording must not claim completed validated Lugisu/Lumasaba support.

### F. Remaining closure-readiness gap

Assess whether current-head browser e2e/offline inference evidence remains unresolved and whether that should block Stage 8 closure. Do not treat PR #24 itself as Stage 8 closure unless a separate owner decision and closure audit package authorize that.

## Output requested

Please answer in this structure:

1. Verdict for PR #24 review-readiness:
   - PASS
   - PASS WITH MINOR REPAIRS
   - PASS WITH MAJOR REPAIRS
   - FAIL / BLOCKED
2. Findings by severity.
3. Test results.
4. Scope and claim-safety assessment.
5. Remaining blockers before Stage 8 closure-readiness.
6. Final recommendation: keep draft, Ready for Review after repairs, or Ready for Review now.
