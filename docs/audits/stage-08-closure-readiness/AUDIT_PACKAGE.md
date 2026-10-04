# Claude Audit Package — Stage 8 Closure-Readiness

Repository: `SplitzHappen/RoyaCheck-Offline`

Branch: `chatgpt/stage-08-closure-readiness-package`

Base commit: `03487327a15d4f8286ca0e275c834fa4c21a0e40` (PR #25 squash merge)

Purpose: audit the repaired Stage 8 closure-readiness package after Claude's prior `PASS WITH MAJOR REPAIRS` finding. This package is for audit and owner decision support only. It must not be treated as Stage 8 closure, deployment readiness, field validation, submission, or treatment guidance.

## Scope of this PR

Expected changed files:

- `docs/stages/08_mvp/STAGE_08_CLOSURE_READINESS.md`
- `docs/stages/08_mvp/STAGE_08_CLOSURE_READINESS_MANIFEST.json`
- `docs/audits/stage-08-closure-readiness/AUDIT_PACKAGE.md`

Expected scope:

- documentation and manifest only;
- no `app/` changes;
- no model asset changes;
- no test changes;
- no package-script changes;
- no product behavior changes;
- no model, threshold, class-order, preprocessing, ONNX, ORT, service-worker, or route-logic changes;
- no Stage 8 closure.

Please verify this scope directly.

## Repair context

Your previous PR #26 closure-readiness audit at head `e2abb94c916e0493ed2d8c0afac5d59b14e23316` returned:

`PASS WITH MAJOR REPAIRS`

You confirmed the original package was mechanically accurate where checked, but found two major defects:

1. the package incorrectly said no target browser/device source existed;
2. the package incorrectly said no Stage 0 naming/branding policy source existed.

This repaired package should now:

- cite the existing D4-07 / Stage 5 / ROADMAP target-device sources;
- classify current headless Chromium/Linux evidence as not satisfying the physical iPhone/Safari standalone-PWA target;
- cite Stage 0 naming/branding sources and align the checklist with organizer/partner naming and branding restrictions;
- state route-variety as a caveat requiring owner acceptance, not an automatic blocker;
- state the current-head PR #25 synthetic route as confirmed `not_sure`;
- cite PR #21's three-route browser smoke as earlier evidence;
- label PR #23/PR #25 final Claude verdicts and 50/50 runs as sourced from PR review/audit conversation where not fully recorded in merged repo docs;
- add the PR #21 deferrals ledger;
- state the item 36 reduced-component / Stage 10 risk consequence;
- qualify browser claims as headless Chromium/Linux;
- separate existing Stage 7E internal-holdout figures from Stage 8 evidence;
- add a ROADMAP Stage 8 requirements trace.

## Background evidence to verify

PR #25 was squash merged as `03487327a15d4f8286ca0e275c834fa4c21a0e40`.

Claude final verdict on PR #25 head `7db0dfbc4125d1655c8b39e40c420c9a3ea22065`: `PASS`.

PR #25 evidence carried forward from the PR review/audit conversation:

- `npm test`: PASS.
- `npm run test:browser-followups`: PASS.
- `npm run test:browser-inference`: 50/50 PASS, 0 hangs.
- Every canonical inference run reported:
  - `offline_network_down_enforced: true`;
  - `server_closed_before_offline_reload: true`;
  - `post_cutoff_server_hits: 0`.
- Confirmed current-head offline inference route: `not_sure`.
- Broken service-worker cache fallback fails.
- Corrupted model fails.
- `10 x 10` too-small image fails at `Local inference complete`.
- `app/` was untouched.
- No product behavior, model, threshold, class-order, preprocessing, ONNX, ORT, service-worker behavior, or route logic changed.
- Evidence boundaries and item 36 deferral were clean.

The current package consolidates PR #21 through PR #25 evidence and identifies remaining closure decisions.

## Materials to inspect

Please inspect:

- `docs/stages/08_mvp/STAGE_08_CLOSURE_READINESS.md`
- `docs/stages/08_mvp/STAGE_08_CLOSURE_READINESS_MANIFEST.json`
- this audit package
- `docs/stages/08_mvp/STAGE_08_BROWSER_SMOKE_EVIDENCE.md`
- `docs/stages/08_mvp/STAGE_08_CLAUDE_AUDIT_REPAIR_SUMMARY.md`
- `docs/stages/04_technical_prereg/STAGE_04_TECHNICAL_PREREGISTRATION.md`
- `docs/stages/05_readiness/STAGE_05_READINESS_AND_FALLBACK.md`
- `docs/stages/00_rules/STAGE_00_COMPLIANCE_CHECKLIST.md`
- `ROADMAP.md`
- relevant app/test/package files only if needed to verify scope or claims

## Required audit questions

### A. Scope verification

Confirm whether this PR changes only the expected documentation/manifest files.

Confirm whether any of the following changed:

- `app/`
- model assets
- tests
- package scripts
- product behavior
- model thresholds
- class order
- preprocessing
- ONNX or ORT configuration
- service-worker behavior
- route logic

### B. Evidence consolidation accuracy

Verify whether `STAGE_08_CLOSURE_READINESS.md` and the manifest accurately consolidate merged evidence from:

- PR #21 / `751c99e9d16890ceb87ed2c4790f00c3289ceff5`
- PR #22 / `80eb5f3c6574c9b7ceb829792aef75e915122b01`
- PR #23 / `d2f9f976d07af4ac1a0ff58fb229ef00d4f9733b`
- PR #24 / `8f738852873723e9aed98b48ecfd96094f9dd1f1`
- PR #25 / `03487327a15d4f8286ca0e275c834fa4c21a0e40`

Flag any incorrect commit, evidence, or claim.

### C. Frozen model contract

Verify whether the closure-readiness package accurately preserves the Stage 7D A0 frozen model contract:

- model path `app/assets/model/royacheck_a0_fp32.onnx`
- SHA-256 `4037c09663190b7caed0773e525e5da39bd05286992612537991358b7acfd041`
- source artifact ID `11292181113`
- artifact name `stage7d-a0-export-parity`
- ONNX Runtime Web `1.30.0`
- thresholds `T_RUST=0.50`, `T_HEALTHY=0.70`
- class order `healthy`, `rust_present`, `leaf_miner_no_rust`, `brown_leaf_spot_no_rust`, `cercospora_no_rust`
- preprocessing contract: RGB decode, dimensions at least `224`, preserve full frame, resize `224 x 224`, ImageNet normalization, no center crop.

### D. Target browser/device sourcing repair

Verify that the package now correctly cites and interprets:

- Stage 4 D4-07 primary physical evidence context:
  - `iPhone 17 Pro Max → Safari → Add to Home Screen → standalone PWA`;
  - `navigator.storage.persist()` where supported, with returned value recorded;
  - no assumption that Safari-tab storage is shared with Home Screen standalone PWA storage.
- Stage 5 readiness:
  - iPhone/Safari physical proof pending by design;
  - device available;
  - protocol fixed;
  - later physical test required.
- ROADMAP Stage 8 gate:
  - full loop must work on the defined target browser/device evidence level.
- ROADMAP Stage 9 offline protocol:
  - if physical-phone protocol cannot be run, state actual environment and limitation.

Assess whether current evidence is sufficient or whether this remains a Stage 8 closure blocker unless the owner runs the physical protocol or explicitly amends the Stage 8 evidence level.

### E. Naming/branding sourcing repair

Verify that the package now correctly cites and applies:

- `docs/stages/00_rules/STAGE_00_COMPLIANCE_CHECKLIST.md`, row 48;
- `docs/stages/00_rules/STAGE_00_COMPLIANCE_CHECKLIST.md`, §5.7 Branding;
- Stage 0 reconciliation findings M-01 and r-02, if present;
- ROADMAP Stage 8 gate requiring UI strings and live-demo metadata to pass Stage 0 naming/branding policy.

Check whether the package covers:

- organizer and partner names;
- titles;
- acronyms;
- logos;
- visual branding;
- no implied endorsement or official status;
- minimal factual plain-text identification only where necessary;
- live-demo metadata disposition.

Classify naming/branding as satisfied, pending formal sweep, or blocking.

### F. Route-variety closure question

Assess whether Stage 8 can close with the repaired route evidence framing:

- current-head PR #25 browser offline inference route is confirmed `not_sure`;
- PR #21 browser smoke covered `visible_rust`, `no_visible_rust`, and `not_sure` at an earlier head;
- PR #21 fixtures/workflow were not retained as current-head committed route-variety evidence;
- PR #24 closure guards cover route threshold/top-class behavior;
- `app/preprocess.js` was recorded as unchanged since PR #21;
- no current-head live inference has rendered `visible_rust` or `no_visible_rust`.

Please classify route variety as one of:

- not a blocker;
- owner-acceptance caveat;
- blocking issue requiring additional current-head browser-level route evidence.

### G. PR #21 deferrals ledger

Verify the package now records and disposition-proposes:

- M1: near-uniform-image routing, declined by owner;
- Minor 5: hard-coded `confirmed_by_role`;
- Minor 7: minimum device not documented;
- Minor 9: training code only in history;
- Minor 10: leftover branches not inspected.

Assess whether the proposed disposition for each is acceptable before PR #26 Ready for Review, before PR #26 merge, and before Stage 8 closure.

### H. Item 36 consequence framing

Verify whether item 36 is handled safely:

- validated Lugisu/Lumasaba support remains deferred by owner decision;
- English-only scaffold is not completed local-language support;
- `local_language_item_complete: false`;
- demo/submission/pitch material must disclose the deferral if local-language support is mentioned;
- no completed validated Lugisu/Lumasaba support is claimed;
- closing Stage 8 with item 36 deferred is explicitly framed as closing against a reduced component list;
- the unmet requirement becomes a Stage 10 submission risk;
- disclosure alone does not satisfy the requirement;
- Stage 8 closure must explicitly approve the deferral as part of closure criteria.

Classify item 36 as accepted deferral with owner decision, minor caveat, or blocking issue.

### I. Claims boundary

Verify the package does not claim:

- new model-performance evidence from Stage 8;
- field validation;
- treatment guidance;
- production deployment;
- completed validated Lugisu/Lumasaba support;
- WBG or partner endorsement;
- RoCoLe/challenge-set inference;
- Stage 8 closure.

Verify that:

- browser inference claims are qualified as headless Chromium/Linux;
- existing internal-holdout figures are governed by the Stage 7 evidence ceiling, not created by Stage 8.

### J. ROADMAP Stage 8 requirements trace

Assess whether the requirements trace is sufficient or still missing closure-critical evidence/decisions for:

- named local-language interaction;
- image capture/upload;
- browser-local inference;
- three public outputs;
- explicit AI-suggestion state;
- pending-human-confirmation state;
- confirm/correct/review actions;
- no pre-filled human disposition;
- `confirmed_by_role`;
- structured local record;
- IndexedDB/local storage;
- deterministic extension handoff summary;
- Stage-3-locked user-initiated handoff and consent step;
- store-now/review-later without live connection;
- no claim that Noor carries the smartphone all day;
- safety/limitation language;
- local-record deletion path;
- defined target browser/device evidence level;
- Stage 0 naming/branding gate.

## Output requested

Please answer in this structure:

## Verdict for PR #26 review-readiness

Use one:

- PASS
- PASS WITH MINOR REPAIRS
- PASS WITH MAJOR REPAIRS
- FAIL / BLOCKED

## Scope verification

List changed files and confirm whether the PR is documentation/manifest only.

## Evidence consolidation assessment

State whether PR #21–#25 evidence and model contract are accurately represented.

## Target browser/device sourcing assessment

State whether the repair is accurate and what remains before Stage 8 closure.

## Naming/branding sourcing assessment

State whether the repair is accurate and what remains before Stage 8 closure.

## Route-variety assessment

Classify and explain.

## PR #21 deferrals ledger assessment

Assess the ledger and proposed dispositions.

## Item 36 assessment

Classify and explain.

## Claims-boundary assessment

State whether any overclaims exist.

## ROADMAP Stage 8 requirements-trace assessment

State whether the trace is adequate for PR #26 and what remains before closure.

## Remaining issues before PR #26 Ready for Review

List only items that should block moving PR #26 from draft to Ready for Review.

## Remaining issues before PR #26 merge

List only items that should block merging PR #26 after Ready for Review and owner authorization.

## Remaining blockers before Stage 8 closure

List separately. Do not confuse these with PR #26 merge blockers.

## Final recommendation

State one:

- Keep draft until major repairs are complete.
- Ready for Review after minor repairs.
- Ready for Review now.
- Blocked.

Then separately state whether PR #26 appears merge-ready after Ready for Review and owner authorization, and whether Stage 8 appears closeable now or only after additional owner decisions/evidence.
