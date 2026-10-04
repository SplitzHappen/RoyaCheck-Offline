# Stage 8 — Closure-Readiness Package

## Status

This document is a Stage 8 closure-readiness consolidation package after merged PR #25. It does **not** close Stage 8. It does **not** deploy, submit, produce video, run RoCoLe or challenge-set inference, retrain, fine-tune, or change product behavior.

Current package branch: `chatgpt/stage-08-closure-readiness-package`.

Base for this package: `03487327a15d4f8286ca0e275c834fa4c21a0e40` (PR #25 squash merge commit).

## Closure-readiness summary

Stage 8 has strong merged evidence for the browser-local MVP loop, no-upload/local-only posture, review-later record handling, static closure guards, routing threshold guards, and browser offline inference through the frozen ONNX model.

Stage 8 should remain open until the owner and Claude closure audit resolve the remaining closure decisions:

1. Route-variety acceptance: browser evidence covers one synthetic-image route, apparently `not_sure`; threshold and route behavior are otherwise covered by closure guards.
2. Target browser/device evidence level: no specific target-browser/device evidence-level source was found by bounded repository search in this package pass.
3. Naming/branding policy: no Stage 0 naming/branding policy source was found by bounded repository search in this package pass.
4. Item 36 disclosure: validated Lugisu/Lumasaba local-language support remains deferred and must be disclosed if local-language support is mentioned.
5. Final closure: Stage 8 still requires a Claude closure audit and explicit owner closure decision.

## Frozen Stage 7D A0 ONNX contract

The Stage 8 MVP evidence remains tied to the frozen Stage 7D A0 artifact contract:

- Model path: `app/assets/model/royacheck_a0_fp32.onnx`
- Model SHA-256: `4037c09663190b7caed0773e525e5da39bd05286992612537991358b7acfd041`
- Source artifact ID: `11292181113`
- Artifact name: `stage7d-a0-export-parity`
- ONNX Runtime Web: `1.30.0`
- Thresholds:
  - `T_RUST=0.50`
  - `T_HEALTHY=0.70`
- Class order:
  - `healthy`
  - `rust_present`
  - `leaf_miner_no_rust`
  - `brown_leaf_spot_no_rust`
  - `cercospora_no_rust`
- Preprocessing contract:
  - RGB decode
  - both dimensions must be at least `224`
  - preserve full frame
  - resize to `224 x 224`
  - ImageNet normalization
  - no center crop

This package does not alter that contract.

## Merged Stage 8 evidence through PR #25

### PR #21 — Browser-local MVP build

- Squash merge commit: `751c99e9d16890ceb87ed2c4790f00c3289ceff5`
- Scope: browser-local MVP build under `app/`.
- Evidence carried forward:
  - static browser-local user-value loop;
  - preprocessing and ONNX runtime integration;
  - frozen model SHA verification;
  - no raw image retention;
  - required human disposition;
  - current-session record/review/delete;
  - service-worker/PWA cache posture.
- Closure effect: foundational Stage 8 implementation evidence.

### PR #22 — Review-later and disclosure scaffold

- Squash merge commit: `80eb5f3c6574c9b7ceb829792aef75e915122b01`
- Scope: review-later / saved-record behavior and disclosure scaffold.
- Evidence carried forward:
  - IndexedDB saved-record/review-later list;
  - text review cards;
  - delete behavior;
  - disclosure drafts;
  - English-only scaffold for local-language review flow.
- Item 36 status:
  - validated Lugisu/Lumasaba support was not completed;
  - the scaffold is not completed local-language support.

### PR #23 — Evidence consolidation and audit package

- Squash merge commit: `d2f9f976d07af4ac1a0ff58fb229ef00d4f9733b`
- Scope: Stage 8 evidence consolidation and audit package.
- Evidence carried forward:
  - SHA-256 and asset manifest evidence;
  - item 36 guard restoration;
  - static-smoke guard coverage;
  - Claude confirmation that repaired evidence package passed after item 36 disclosure repair.
- Closure effect: consolidated Stage 8 evidence state without closing Stage 8.

### PR #24 — Closure-readiness hardening

- Squash merge commit: `8f738852873723e9aed98b48ecfd96094f9dd1f1`
- Scope: closure guard tests and no-upload/local-only/routing hardening.
- Evidence carried forward:
  - `connect-src 'self'` guard;
  - `form-action 'none'` guard;
  - no HTML form upload path;
  - no mutating request methods in app JS;
  - no explicit non-GET fetch methods;
  - route threshold cases for `T_RUST=0.50` and `T_HEALTHY=0.70`;
  - disease/non-public top-class routes remain `not_sure`;
  - top-class precedence behavior preserved.
- Closure effect: route logic and no-upload posture are guarded by static/unit evidence.

### PR #25 — Browser offline inference evidence

- Squash merge commit: `03487327a15d4f8286ca0e275c834fa4c21a0e40`
- Scope: browser offline inference evidence harness and documentation.
- Claude final audit result at PR head `7db0dfbc4125d1655c8b39e40c420c9a3ea22065`: `PASS`.
- Evidence carried forward:
  - `npm test`: PASS;
  - `npm run test:browser-followups`: PASS;
  - `npm run test:browser-inference`: 50/50 PASS, 0 hangs;
  - every canonical inference run reported:
    - `offline_network_down_enforced: true`;
    - `server_closed_before_offline_reload: true`;
    - `post_cutoff_server_hits: 0`;
  - broken service-worker cache fallback fails;
  - corrupted model fails;
  - `10 x 10` too-small image fails at `Local inference complete`;
  - synthetic `224 x 224` image exercises normal browser UI file-input, Run, and Save path;
  - saved record checks include `raw_image_retained: false`, no `raw_image`, no `image_blob`, and the frozen model SHA.
- Scope confirmation:
  - PR #25 changed only documentation, package script, and test harness files;
  - `app/` was untouched;
  - no product behavior, model, threshold, class-order, preprocessing, ONNX, ORT, service-worker behavior, or route logic changed.
- Closure effect: resolves the current-head browser offline inference evidence gap, subject to the route-variety and target-evidence decisions below.

## Evidence limitations and closure decisions

### Route-variety status

Current browser-level offline inference evidence from PR #25 exercises one synthetic-image route, apparently `not_sure`.

Other route evidence is covered by PR #24 route threshold and closure guards, including:

- rust threshold edge behavior;
- healthy threshold edge behavior;
- disease/non-public top-class routing to `not_sure`;
- top-class precedence behavior.

Closure decision required:

- Option A: owner accepts unit/guard route evidence plus the single-route browser offline inference run as sufficient for Stage 8 closure.
- Option B: require additional browser-level route-variety evidence before Stage 8 closure.

Current package recommendation: treat route variety as an explicit owner decision and ask Claude whether it should block Stage 8 closure.

### Target browser/device evidence level

Bounded repository searches performed in this package pass found no explicit source defining a target browser/device evidence level using the searched terms:

- `target browser device ROADMAP`
- `browser device evidence level`

Current evidence level recorded for closure audit:

- headless Chromium on Linux;
- Playwright 1.56.1;
- Node v22.22.0 / npm 10.9.4 in Claude audit environment;
- browser follow-up and browser inference tests passing in headless Chromium.

Closure decision required:

- If Stage 8 requires real-device or specific-browser evidence, this remains a blocker.
- If headless Chromium/Linux is accepted as sufficient for the hackathon MVP closure, record the owner decision explicitly before closing Stage 8.

Current package recommendation: mark target browser/device evidence level as unresolved until owner/Claude closure audit resolves it.

### Naming/branding status

Bounded repository search performed in this package pass found no Stage 0 naming/branding policy source using the searched terms:

- `naming branding Stage 0`

Naming/branding checklist for closure audit:

- Product name `RoyaCheck Offline` is used consistently.
- UI/demo text must not imply official World Bank Group endorsement.
- UI/demo text must not claim diagnosis, treatment guidance, field validation, or production readiness.
- UI/demo text must preserve the human-decision-maker framing.
- UI/demo text must preserve the no-upload/local-only posture.
- Any local-language mention must disclose item 36 deferral.

Closure decision required:

- If a Stage 0 naming/branding policy exists outside the repository, apply it before closure.
- If no external policy is available, owner must decide whether the checklist above is sufficient for Stage 8 closure.

Current package recommendation: mark naming/branding as pending source confirmation.

### Item 36 status

Owner decision carried forward:

- validated Lugisu/Lumasaba local-language support is deferred due to hackathon time constraint;
- English-only scaffold is not completed local-language support;
- demo, submission, and pitch material must disclose the deferral if local-language support is mentioned.

Closure status:

- item 36 does not block technical Stage 8 closure if the deferral is disclosed and no completed local-language support is claimed;
- item 36 remains a submission/demo/pitch claim-control requirement.

## Claims boundary for closure

The Stage 8 package supports these claims only:

- browser-local MVP loop exists;
- the app can run the frozen ONNX model locally in the browser;
- the app can run the canonical browser inference harness with the local server shut down after cache verification;
- raw image retention is not used in the saved record path covered by tests;
- human disposition is required before saving;
- no-upload/static local-only posture is guarded by tests;
- route threshold logic is guarded by tests.

The Stage 8 package does **not** support these claims:

- model accuracy, sensitivity, specificity, recall, precision, or field performance;
- field validation;
- treatment recommendation;
- production deployment;
- completed validated Lugisu/Lumasaba support;
- World Bank Group endorsement;
- RoCoLe or challenge-set inference unless separately authorized, performed, and documented;
- Stage 8 closure without a separate owner decision.

## Closure-readiness verdict for audit

This package is not a closure decision. It prepares the closure audit.

Recommended Claude closure-audit questions:

1. Does merged evidence through PR #25 support closing Stage 8, or do route-variety, target-evidence, or naming/branding gaps remain blockers?
2. Is single-route browser inference evidence plus route threshold guards enough for Stage 8 closure?
3. Is headless Chromium/Linux sufficient for the target-browser/device evidence level, or is real-device/specific-browser evidence required?
4. Is the naming/branding checklist sufficient, or is Stage 0 policy unavailable and therefore unresolved?
5. Is item 36 deferral properly disclosed and claim-safe?
6. Are there any overclaims in Stage 8 docs, demo-facing wording, or submission-facing wording?

## Current closure blockers to resolve

Before marking Stage 8 closed, resolve:

1. Route-variety acceptance or additional browser-route evidence.
2. Target browser/device evidence-level decision.
3. Stage 0 naming/branding source confirmation or owner acceptance of the checklist.
4. Item 36 disclosure in demo/submission/pitch material if local-language support is mentioned.
5. Claude closure audit.
6. Explicit owner decision to close Stage 8.
