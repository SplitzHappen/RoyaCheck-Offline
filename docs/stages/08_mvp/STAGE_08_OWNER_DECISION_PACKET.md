# Stage 8 — Owner Decision Packet

## Status

This is a Stage 8 owner-decision aid after the merged Stage 8 closure-readiness package.

It does **not** close Stage 8. It does **not** close Stage 7. It does **not** deploy, submit, produce video, run RoCoLe inference, run challenge-set inference, retrain, fine-tune, or change product behavior.

This packet converts the remaining Stage 8 closure blockers into explicit owner-decision items. Any acceptance, amendment, or closure decision must be made explicitly by the owner in a later step.

## Product and claim boundaries

Product: `RoyaCheck Offline`.

Public outputs remain limited to:

- `visible_rust`
- `no_visible_rust`
- `not_sure`

The human remains the final decision-maker.

This packet does not introduce or authorize:

- treatment recommendation;
- field-validation claim;
- World Bank Group endorsement claim;
- completed validated Lugisu/Lumasaba support;
- deployment/submission/video;
- model-performance expansion beyond the recorded evidence;
- route, threshold, class-order, preprocessing, ONNX, ORT, service-worker, or product-behavior changes.

## Frozen Stage 7D A0 ONNX contract carried forward

The Stage 8 MVP remains tied to the frozen Stage 7D A0 artifact contract:

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
- Preprocessing:
  - RGB decode
  - both dimensions must be at least `224`
  - preserve full frame
  - resize to `224 x 224`
  - ImageNet normalization
  - no center crop

This packet does not alter that contract.

## Current merged Stage 8 evidence base

Merged Stage 8 PRs through the closure-readiness package:

1. PR #21 — `Stage 8: browser-local MVP build`
   - Squash merge commit: `751c99e9d16890ceb87ed2c4790f00c3289ceff5`
2. PR #22 — `Stage 8 follow-up: review-later and disclosure scaffold`
   - Squash merge commit: `80eb5f3c6574c9b7ceb829792aef75e915122b01`
3. PR #23 — `Stage 8: evidence consolidation and audit package`
   - Squash merge commit: `d2f9f976d07af4ac1a0ff58fb229ef00d4f9733b`
4. PR #24 — `Stage 8: closure-readiness hardening`
   - Squash merge commit: `8f738852873723e9aed98b48ecfd96094f9dd1f1`
5. PR #25 — `Stage 8: browser offline inference evidence`
   - Squash merge commit: `03487327a15d4f8286ca0e275c834fa4c21a0e40`
6. PR #26 — `Stage 8: closure-readiness package`
   - Squash merge commit: `aac763b61fe0a80511634eaa1138891d13077686`

## Owner-decision register

### OD-01 — Physical target evidence or owner amendment

**Issue.** The closure-readiness package records that the defined target evidence path is physical iPhone/Safari standalone-PWA evidence, including D4-07 runtime/offline proof expectations and D4-18 latency/timing expectations. Current merged browser inference evidence is headless Chromium/Linux, not physical iPhone/Safari standalone PWA evidence.

**Decision required.** Choose exactly one path before Stage 8 closure:

- **Option A — Evidence path:** run and record the D4-07/D4-18 physical target protocol.
- **Option B — Amendment path:** explicitly amend the Stage 8 evidence level for the hackathon-timeboxed close to headless Chromium/Linux, while carrying physical iPhone/Safari standalone-PWA proof and latency-budget validation forward to Stage 9 with disclosure.

**Recommended disposition.** For a hackathon-timeboxed close, Option B is acceptable only if the owner explicitly accepts the limitation and the closure record states the actual evidence environment. Option A is stronger but costs more time and physical-device execution.

**Current closure effect.** Blocker remains unresolved until the owner chooses Option A or Option B.

### OD-02 — Formal Stage 0 naming/branding sweep

**Issue.** Stage 8 cannot close without a formal sweep against the Stage 0 naming/branding policy.

**Decision required.** Confirm that UI strings, repository/demo metadata, documentation intended for public use, and any live-demo surfaces do not imply organizer/partner endorsement, official status, or unauthorized branding.

**Recommended disposition.** Perform a bounded naming/branding sweep before final closure. If the sweep finds only documentation wording issues, repair them in documentation. If it finds UI/product strings, handle those in a separate narrow PR so product-surface changes remain visible.

**Current closure effect.** Blocker remains unresolved until the sweep is completed or explicitly scoped.

### OD-03 — Route-variety caveat or current-head three-route browser evidence

**Issue.** Current-head browser-level offline inference evidence confirms a deterministic `not_sure` route. Earlier PR #21 browser smoke covered `visible_rust`, `no_visible_rust`, and `not_sure`, but the three-route browser evidence was not retained as a current-head committed route-variety test.

**Decision required.** Choose one path before Stage 8 closure:

- **Option A — Accept caveat:** accept prior PR #21 three-route browser evidence plus unchanged preprocessing/route logic, PR #24 route guards, and PR #25 current-head offline inference as sufficient for Stage 8.
- **Option B — Remove caveat:** add or run current-head browser evidence covering all three public routes.

**Recommended disposition.** Option A is defensible for a reduced, timeboxed Stage 8 closure only if the caveat is explicit. Option B is stronger and should be used if time allows.

**Current closure effect.** Blocker remains unresolved until the owner accepts Option A or current-head three-route browser evidence is generated.

### OD-04 — Human-authority evidence caveat or current-head negative Save-gating test

**Issue.** PR #21 browser evidence and current code-inspection summaries support Save-gating and no-prefilled-disposition controls. Current-head committed tests do not include a negative assertion that Save stays disabled without the required human inputs.

**Decision required.** Choose one path before Stage 8 closure:

- **Option A — Accept caveat:** accept the existing PR #21 evidence and current code-inspection summary as sufficient.
- **Option B — Remove caveat:** add a current-head negative test that Save remains disabled until both a disposition and confirmation checkbox are present.

**Recommended disposition.** Option B is preferable because it is a narrow test-only improvement and directly supports the human-final-authority claim. If time is too constrained, Option A must be explicitly caveated.

**Current closure effect.** Blocker remains unresolved until the owner accepts Option A or the current-head negative test is added.

### OD-05 — Item 36 Lugisu/Lumasaba deferral

**Issue.** Validated Lugisu/Lumasaba local-language support remains incomplete. The merged review-later/disclosure scaffold is not completed validated local-language support.

**Decision required.** Decide whether Stage 8 may close as a reduced-component MVP with Item 36 explicitly deferred.

**Recommended disposition.** Defer Item 36 only if the closure record states that Lugisu/Lumasaba support is not completed and that this creates a Stage 10 submission/demo risk.

**Current closure effect.** Blocker remains unresolved until the owner explicitly approves reduced-component Stage 8 closure or chooses to complete validated local-language support before closure.

### OD-06 — PR #21 deferral dispositions

**Issue.** Prior accepted/deferred findings from PR #21 must receive explicit closure dispositions.

**Decision required.** For each PR #21 deferred item, classify it as one of:

- resolved by later Stage 8 evidence;
- accepted as closure caveat;
- carried to Stage 9;
- still blocking Stage 8 closure.

**Recommended disposition.** Create a compact PR #21 deferral table before final closure. Do not rely on memory or informal chat conclusions.

**Current closure effect.** Blocker remains unresolved until the disposition table is recorded.

### OD-07 — Handoff/consent D3-07 to D3-10 mapping confirmation

**Issue.** Handoff/consent requirements D3-07 through D3-10 must map to Stage 8 implementation evidence, owner acceptance, deferral, or unresolved blocker.

**Decision required.** Confirm each D3-07 to D3-10 item against the Stage 8 evidence base.

**Recommended disposition.** Add a requirements trace row for each item rather than closing from a broad summary.

**Current closure effect.** Blocker remains unresolved until the mapping is confirmed.

### OD-08 — Claude closure audit and explicit owner closure decision

**Issue.** Stage 8 still needs a final closure audit and explicit owner closure decision after blocker dispositions are recorded.

**Decision required.** After OD-01 through OD-07 are resolved or explicitly caveated, send the closure packet to Claude for final closure audit. Only after that audit should the owner make a Stage 8 closure decision.

**Recommended disposition.** Do not close Stage 8 in the same step as unresolved-caveat drafting. Keep closure as a separate owner-controlled action.

**Current closure effect.** Stage 8 remains open.

## Recommended next implementation sequence

1. **This packet:** record the owner-decision structure without making owner decisions.
2. **Naming/branding sweep:** complete OD-02 and repair any issues found.
3. **Evidence/caveat decision:** owner chooses OD-01, OD-03, OD-04, and OD-05 paths.
4. **Deferral and mapping table:** record OD-06 and OD-07 in a closure trace.
5. **Claude closure audit:** send the updated closure packet for audit.
6. **Owner closure decision:** close or do not close Stage 8 based on the audit and explicit owner acceptance.

## Non-closure statement

As of this packet, Stage 8 is **not closed**.

This packet is not a claim of field validation, not a medical/agricultural treatment recommendation, not a deployment record, and not a submission artifact. It is an owner-control document for deciding whether the remaining Stage 8 gaps are resolved, explicitly caveated, deferred, or still blocking.
