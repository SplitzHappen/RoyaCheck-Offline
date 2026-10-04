# Claude Audit Package — Stage 8 Closure-Readiness

Repository: `SplitzHappen/RoyaCheck-Offline`

Branch: `chatgpt/stage-08-closure-readiness-package`

Base commit: `03487327a15d4f8286ca0e275c834fa4c21a0e40` (PR #25 squash merge)

Purpose: audit whether Stage 8 can be closed based on merged evidence through PR #25 and the closure-readiness package. This package is for audit and owner decision support only. It must not be treated as Stage 8 closure, deployment readiness, field validation, submission, or treatment guidance.

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
- no product behavior changes;
- no model, threshold, class-order, preprocessing, ONNX, ORT, service-worker, or route-logic changes;
- no Stage 8 closure.

Please verify this scope directly.

## Background

PR #25 was squash merged as `03487327a15d4f8286ca0e275c834fa4c21a0e40`.

Claude final verdict on PR #25 head `7db0dfbc4125d1655c8b39e40c420c9a3ea22065`: `PASS`.

PR #25 evidence carried forward:

- `npm test`: PASS.
- `npm run test:browser-followups`: PASS.
- `npm run test:browser-inference`: 50/50 PASS, 0 hangs.
- Every canonical inference run reported:
  - `offline_network_down_enforced: true`;
  - `server_closed_before_offline_reload: true`;
  - `post_cutoff_server_hits: 0`.
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
- any existing Stage 8 evidence docs needed to verify consistency
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

### D. Route-variety closure question

Assess whether Stage 8 can close with the current route evidence:

- browser offline inference evidence covers one synthetic-image route, apparently `not_sure`;
- route threshold and top-class behavior are covered by PR #24 closure guards;
- all three public route outputs are represented by logic/guard tests but not by browser-level real-image or synthetic-image route-variety evidence.

Please classify route variety as one of:

- not a blocker;
- minor closure caveat requiring owner acceptance;
- blocking issue requiring additional browser-level route evidence.

### E. Target browser/device evidence-level question

The package records current browser evidence as headless Chromium/Linux. Bounded repository search in the package pass did not find a specific target browser/device evidence-level source.

Please verify whether the repo contains any target browser/device requirement that the package missed. If a requirement exists, compare current evidence against it.

Classify target-browser/device evidence as one of:

- satisfied;
- minor closure caveat requiring owner acceptance;
- blocking issue requiring additional evidence;
- unresolved because source policy is unavailable.

### F. Naming/branding question

The package records that bounded repository search did not find a Stage 0 naming/branding policy source.

Please verify whether the repo contains any naming/branding policy that the package missed. If a policy exists, compare current closure-readiness language against it.

Classify naming/branding as one of:

- satisfied;
- minor closure caveat requiring owner acceptance;
- blocking issue requiring repair;
- unresolved because source policy is unavailable.

### G. Item 36 deferral

Verify whether item 36 is handled safely:

- validated Lugisu/Lumasaba support remains deferred by owner decision;
- English-only scaffold is not completed local-language support;
- demo/submission/pitch material must disclose the deferral if local-language support is mentioned;
- no completed validated Lugisu/Lumasaba support is claimed.

Classify item 36 as one of:

- not a blocker if disclosed;
- minor closure caveat;
- blocking issue.

### H. Claims boundary

Verify the package does not claim:

- model performance;
- field validation;
- treatment guidance;
- production deployment;
- completed validated Lugisu/Lumasaba support;
- World Bank Group endorsement;
- RoCoLe/challenge-set inference;
- Stage 8 closure.

### I. Closure readiness verdict

Based on merged evidence through PR #25 and this package, answer:

1. Can Stage 8 be closed now after owner decision, or are there blocking issues?
2. If closure is possible, what owner decisions must be explicitly recorded?
3. If closure is not possible, what exact repairs/evidence are required?

## Output requested

Please answer in this structure:

## Verdict

Use one:

- PASS — Stage 8 can close after owner decision.
- PASS WITH OWNER DECISIONS — Stage 8 can close if listed owner decisions are explicitly recorded.
- PASS WITH MINOR REPAIRS — repair small documentation/claim issues before closure.
- PASS WITH MAJOR REPAIRS — significant evidence/doc repairs required before closure.
- FAIL / BLOCKED — Stage 8 cannot close based on current evidence.

## Scope verification

List changed files and confirm whether the PR is documentation/manifest only.

## Evidence consolidation assessment

State whether PR #21–#25 evidence and model contract are accurately represented.

## Route-variety assessment

Classify and explain.

## Target browser/device assessment

Classify and explain.

## Naming/branding assessment

Classify and explain.

## Item 36 assessment

Classify and explain.

## Claims-boundary assessment

State whether any overclaims exist.

## Required owner decisions before Stage 8 closure

List exact decisions, if any.

## Required repairs before Stage 8 closure

List exact repairs, if any.

## Final recommendation

State whether to keep Stage 8 open, close after owner decisions, or repair first.
