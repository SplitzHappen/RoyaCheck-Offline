# Stage 8 — Closure-Readiness Package

## Status

This document is a Stage 8 closure-readiness consolidation package after merged PR #25.

It does **not** close Stage 8. It does **not** deploy, submit, produce video, run RoCoLe or challenge-set inference, retrain, fine-tune, or change product behavior.

Current package branch: `chatgpt/stage-08-closure-readiness-package`.

Base for this package: `03487327a15d4f8286ca0e275c834fa4c21a0e40` (PR #25 squash merge commit).

## Closure-readiness summary

Stage 8 has strong merged evidence for the browser-local MVP loop, no-upload/local-only posture, review-later record handling, static closure guards, routing threshold guards, and headless Chromium/Linux browser offline inference through the frozen ONNX model.

Stage 8 should remain open until the owner and Claude closure audit resolve the remaining closure decisions:

1. **Target device evidence:** Stage 4 D4-07 defines the primary physical evidence context as `iPhone 17 Pro Max → Safari → Add to Home Screen → standalone PWA`. Stage 4 D4-18 defines the latency/technical-budget protocol for that target. Current evidence is headless Chromium/Linux and does not satisfy that physical target.
2. **Naming/branding:** Stage 0 already defines the naming/branding policy. A formal Stage 8 sweep must apply it to UI strings and any live-demo metadata.
3. **Route variety:** Claude's PR #26 audit run at head `e2abb94c916e0493ed2d8c0afac5d59b14e23316` confirmed the deterministic current-head browser offline inference route as `not_sure` in one headless Chromium run. Earlier PR #21 browser smoke covered all three routes, but no current-head live inference has rendered `visible_rust` or `no_visible_rust`; this is sufficient only with explicit owner acceptance/caveat.
4. **Human-authority evidence caveat:** PR #21 browser e2e evidence and code inspection support the Save-gating and no-prefilled-disposition controls, but the current-head committed tests do not include a negative "Save stays disabled" assertion.
5. **Item 36:** validated Lugisu/Lumasaba local-language support remains an owner deferral. Closing Stage 8 with this deferral means closing against a reduced component list and carrying a Stage 10 submission risk.
6. **PR #21 deferrals:** prior accepted/deferred findings must receive explicit closure dispositions.
7. **Requirements trace:** every ROADMAP Stage 8 component and gate must map to evidence, owner acceptance, deferral, or unresolved blocker.
8. **Final closure:** Stage 8 still requires a Claude closure audit and explicit owner closure decision.

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
  - no raw image retention by default;
  - required human disposition;
  - current-session record/review/delete;
  - service-worker/PWA cache posture.
- Route-variety evidence:
  - `docs/stages/08_mvp/STAGE_08_BROWSER_SMOKE_EVIDENCE.md` records a browser smoke using synthetic fixtures that covered `visible_rust`, `no_visible_rust`, and `not_sure`;
  - the Playwright browser route matched the Python/Pillow reference route for each fixture;
  - the fixtures/workflow were not retained as current-head committed route-variety tests;
  - `app/preprocess.js` was later audited by Claude as unchanged since PR #21 through PR #25.
- Human-authority evidence:
  - PR #21 `browser-e2e.mjs` asserted that Save starts disabled, stays disabled without confirmation, and enables only after a disposition plus the confirmation checkbox;
  - PR #21 static smoke guarded the role marker and relevant authority copy;
  - current code inspection, as summarized by Claude's PR #26 audit, shows the disposition defaults to `""` and the Save path requires both a disposition and confirmation checkbox;
  - current-head committed tests exercise the happy path but do not include a negative current-head assertion that Save stays disabled.
- PR #21 deferrals are listed separately below.

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
  - static-smoke guard coverage.
- Source transparency:
  - the final `PASS` characterization for PR #23 is carried from the PR review/audit conversation and later owner-control merge context, not from a single merged in-repo verdict line.

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
- Closure effect:
  - route logic and no-upload posture are guarded by static/unit evidence.
- Non-evidence clarification:
  - PR #24 / `tests/closure-guards.mjs` does **not** provide human-authority Save-button negative assertions. It covers CSP, outbound-transport, local-only/no-upload posture, and routing assertions.

### PR #25 — Browser offline inference evidence

- Squash merge commit: `03487327a15d4f8286ca0e275c834fa4c21a0e40`
- Scope: browser offline inference evidence harness and documentation.
- Source transparency:
  - Claude's final PR #25 `PASS`, 50/50 repeat evidence, and environment details are carried from the PR review/audit conversation. `STAGE_08_BROWSER_INFERENCE_EVIDENCE.md` in the merged repo records the earlier `db57bbd` `PASS WITH MINOR REPAIRS` state and still treats the final fixed-head validation as required.
  - The confirmed `not_sure` route should not be attributed to the PR #25 final audit. The provenance for the current-head route confirmation is Claude's PR #26 audit run at head `e2abb94c916e0493ed2d8c0afac5d59b14e23316`, one headless Chromium run. Because `app/` did not change and the synthetic image is deterministic, that route observation is treated as applicable to the repaired PR #26 documentation-only heads.
- Evidence carried forward from Claude final audit at PR head `7db0dfbc4125d1655c8b39e40c420c9a3ea22065`:
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
- Scope confirmation from PR #25 audit:
  - PR #25 changed only documentation, package script, and test harness files;
  - `app/` was untouched;
  - no product behavior, model, threshold, class-order, preprocessing, ONNX, ORT, service-worker behavior, or route logic changed.
- Closure effect:
  - resolves the current-head headless Chromium/Linux browser offline inference evidence gap, subject to the route-variety and physical target-device decisions below.

## Evidence limitations and closure decisions

### Route-variety status

Current-head browser-level offline inference evidence has one confirmed deterministic synthetic-image route: `not_sure`.

Provenance:

- Claude confirmed `offline_inference_route: "not_sure"` during the PR #26 audit at head `e2abb94c916e0493ed2d8c0afac5d59b14e23316`;
- this was one headless Chromium run;
- because PR #26 is documentation/manifest-only and `app/` did not change, the observation is treated as applicable to the repaired PR #26 head;
- this observation is not presented as a PR #25 final-audit result.

Prior PR #21 browser smoke evidence covered all three public routes:

- `visible_rust`;
- `no_visible_rust`;
- `not_sure`.

That PR #21 route-variety smoke ran at an earlier head and its fixtures/workflow were not retained as committed current-head route-variety evidence. However, the route function and preprocessing path are materially guarded:

- PR #24 closure guards exercise route threshold behavior, disease/non-public top-class routing, and precedence;
- `app/preprocess.js` is recorded by Claude as unchanged since PR #21;
- PR #25 proves current-head offline browser inference works end-to-end for `not_sure`.

Closure decision required:

- Route variety is **sufficient only with explicit owner acceptance/caveat**.
- It is not automatically a Stage 8 closure blocker if the owner accepts: prior PR #21 three-route browser evidence + unchanged preprocessing/route logic + PR #24 route guards + PR #25 current-head offline inference.
- It becomes a blocker if the owner requires current-head browser-level rendering of all three routes.

Optional way to remove the caveat:

- commit the three synthetic fixtures or a deterministic generator; and
- re-run current-head browser route-variety evidence covering `visible_rust`, `no_visible_rust`, and `not_sure`.

### Target browser/device evidence level

The package does not treat this as a missing-source issue. A source-backed target already exists.

Source-backed target:

- Stage 4 D4-07 / browser runtime and offline architecture defines the primary physical evidence context as:
  - `iPhone 17 Pro Max → Safari → Add to Home Screen → standalone PWA`;
  - call `navigator.storage.persist()` where supported and record the returned value;
  - do not assume storage created in a Safari tab is shared with the installed Home Screen app.
- Stage 4 D4-18 / technical budgets define the latency and timing evidence requirements for the target-device path:
  - at least 30 timed runs plus one warm-up;
  - median latency ≤2.0 seconds;
  - p95 latency ≤4.0 seconds;
  - median latency above 5.0 seconds is unusable;
  - iOS and Safari versions must be recorded.
- Stage 5 readiness records this physical proof as pending by design and states that José has the iPhone 17 Pro Max + Safari available for later physical-device proof. It lists the later protocol:
  1. connected first load;
  2. install/add to Home Screen;
  3. request `navigator.storage.persist()` where supported and record result;
  4. terminate app;
  5. airplane/offline state;
  6. relaunch from Home Screen;
  7. fresh inference;
  8. save record;
  9. close/reopen;
  10. verify record persistence.
- ROADMAP Stage 8 says Stage 8 closes when the full user-value loop works end to end on the defined target browser/device evidence level.
- ROADMAP Stage 9 says that if the offline proof protocol cannot be run on a physical phone, state the actual environment and limitation.

Current evidence level:

- headless Chromium on Linux;
- Playwright 1.56.1;
- Node v22.22.0 / npm 10.9.4 in Claude PR #25 audit environment;
- browser follow-up and browser inference tests passing in headless Chromium.

Closure status:

- Current evidence **does not satisfy** the defined physical target.
- This is a **Stage 8 closure blocker** unless José explicitly chooses one of two paths:
  1. run the D4-07 iPhone/Safari standalone-PWA physical protocol and include D4-18 latency/timing measurement as part of the target-device evidence package; or
  2. record an explicit owner amendment that cites both D4-07 and D4-18, sets the Stage 8 evidence level to headless Chromium/Linux for the hackathon-timeboxed Stage 8 close, and moves physical proof plus latency-budget validation to Stage 9 with disclosure.

### Naming/branding status

The package does not treat this as a missing-source issue. A source-backed policy exists.

Policy sources:

- `docs/stages/00_rules/STAGE_00_COMPLIANCE_CHECKLIST.md`, row 48: organizer/partner naming and branding restriction;
- `docs/stages/00_rules/STAGE_00_COMPLIANCE_CHECKLIST.md`, §5.7 Branding;
- Stage 0 reconciliation findings M-01 and r-02, as referenced by Claude's PR #26 audit. Direct citation to `docs/audits/stage-00/RECONCILIATION.md` should be added if that file is fetched cleanly in a later cleanup pass;
- ROADMAP Stage 8 gate: before Stage 8 closes, UI strings and live-demo metadata must pass the Stage 0 naming/branding policy.

Stage 0 policy coverage:

- organizer and partner names;
- titles;
- acronyms;
- logos;
- other visual branding;
- no implied endorsement or official status;
- competition/organization names only as minimal plain-text factual identification where necessary for a citation or submission context.

Naming/branding checklist for Stage 8 closure:

- product-only naming remains `RoyaCheck Offline`;
- repository remains `SplitzHappen/RoyaCheck-Offline`;
- public repository description remains neutral;
- app UI strings contain no organizer/partner logos, titles, unnecessary acronyms, or implied endorsement;
- demo/public metadata contains no organizer/partner logos, titles, unnecessary acronyms, or implied endorsement;
- any competition/organization name is minimal, factual, plain text, and necessary;
- live-demo metadata is checked when a live deployment exists;
- if no deployed demo metadata exists at Stage 8, record it as not applicable at Stage 8 and carry it to deployment/Stage 10.

Closure status:

- Preliminary Claude grep found no organizer/partner/competition names in app files, which is encouraging but not the formal sweep.
- A formal Stage 8 naming/branding sweep remains a closure blocker until recorded.

### Item 36 status and consequence

Owner decision carried forward:

- validated Lugisu/Lumasaba local-language support is deferred due to hackathon time constraint;
- English-only scaffold is not completed local-language support;
- `local_language_item_complete: false`;
- demo, submission, and pitch material must disclose the deferral if local-language support is mentioned.

Consequence:

- Item 36 is a confirmed participant-material requirement: at least one local-language interaction.
- Annex B / ROADMAP expected at least one visible interaction in the named language.
- Closing Stage 8 with item 36 deferred means closing Stage 8 against a reduced component list.
- The unmet requirement becomes a Stage 10 submission risk.
- Disclosure alone does **not** satisfy the requirement.
- Stage 8 closure must explicitly approve the item 36 **owner deferral** as part of the Stage 8 closure criteria.
- This package does not record an item 36 waiver. A waiver would be a different and stronger owner decision: knowingly submitting without satisfying the requirement and accepting the compliance risk. José has not authorized that framing here.

### PR #21 deferrals ledger

| Item | Source | Proposed Stage 8 closure disposition |
|---|---|---|
| M1 — near-uniform-image routing | `STAGE_08_CLAUDE_AUDIT_REPAIR_SUMMARY.md` | Accepted residual risk for Stage 8 if the owner reaffirms the prior decision not to add a uniform-image routing rule; carry image-quality/OOD hardening to Stage 9. |
| Minor 5 — hard-coded `confirmed_by_role` | `STAGE_08_CLAUDE_AUDIT_REPAIR_SUMMARY.md` | Stage 8 closure blocker unless mapped to owner-accepted MVP role assumption. If accepted, carry to Stage 9/10 as UX/data-quality limitation. |
| Minor 7 — minimum device not documented | `STAGE_08_CLAUDE_AUDIT_REPAIR_SUMMARY.md` | D4-07 supersedes the evidence-target part, but does not fully close the original documentation concern. `SUPPORTED_BROWSER_AND_OFFLINE_LIMITATIONS.md` still needs a Stage 10 supported-browser/minimum-device statement. An iPhone 17 Pro Max proof is not evidence for affordable phones. Carry this item forward to Stage 10 even if the Stage 8 target-device path is run or amended. |
| Minor 9 — training code only in history | `STAGE_08_CLAUDE_AUDIT_REPAIR_SUMMARY.md` | Not a Stage 8 technical-closure blocker; defer to Stage 10 repository/submission transparency and training-code/history disclosure posture. |
| Minor 10 — leftover branches not inspected | `STAGE_08_CLAUDE_AUDIT_REPAIR_SUMMARY.md` | Not a Stage 8 product-evidence blocker; defer to Stage 10 repository hygiene/submission freeze. |

### ROADMAP Stage 8 requirements trace

| Stage 8 requirement / gate | Current status | Evidence / disposition |
|---|---|---|
| Stage 3 named local-language UI interaction | Deferred | Item 36 remains owner-deferred; closure requires explicit reduced-component acceptance and Stage 10 risk acknowledgement. |
| Image capture/upload | Evidence present | PR #21 and PR #25 exercise file-input path; no app change in PR #26. |
| Browser-local inference | Evidence present in headless Chromium/Linux | PR #25 proves current-head offline ONNX inference in headless Chromium/Linux. Physical D4-07/D4-18 target remains unresolved. |
| Visible-rust / no-visible-rust / not-sure output | Evidence present with caveat | PR #21 browser smoke covered all three routes at an earlier head; PR #24 route guards cover threshold/routing logic; PR #26 audit confirmed current-head `not_sure` route in one headless Chromium run. Owner acceptance or current-head route-variety evidence required. |
| Explicit AI-suggestion state | Evidence present with caveat | PR #21 e2e and static smoke covered AI-proposal copy/flow at an earlier head; current code inspection supports the state. Current-head committed tests do not include a negative Save-button authority assertion. |
| Pending-human-confirmation state | Evidence present with caveat | PR #21 `browser-e2e.mjs` asserted Save starts disabled, stays disabled without confirmation, and enables only after disposition plus confirmation. Current-head code inspection supports the same requirement, but no current-head negative assertion is committed. |
| Confirm/correct/review actions | Evidence present | PR #21/PR #22 app behavior and follow-up/review-later flow support this; closure audit should verify wording and payload. |
| No pre-filled human disposition | Evidence present with caveat | Current code inspection shows disposition defaults to `""`; PR #21 evidence covered negative Save gating. No current-head negative assertion is committed. |
| `confirmed_by_role` | Accepted MVP assumption pending owner closure disposition | Current MVP uses hard-coded `farmer_decision_maker`; PR #21 static smoke guarded the role marker/copy. Owner acceptance required. |
| Structured local record | Evidence present | PR #21, PR #22, PR #25 saved-record checks. |
| IndexedDB/local storage | Evidence present | PR #22 follow-up behavior and PR #25 saved-record checks. |
| Deterministic extension handoff summary | Partially evidenced / closure-audit confirmation needed | On-device review card exists; Claude PR #26 audit maps D3-07 to D3-10 but did not independently verify deterministic summary generation. |
| Stage-3-locked user-initiated handoff | Partially evidenced / owner acceptance needed | `Prepare on-device review card` button and saved-record card support user-initiated handoff. Closure record should confirm this satisfies D3-07. |
| Consent step / image inclusion | Moot as built; record owner acceptance | No image-retention opt-in is offered and image does not travel. Closure record should state that D3-09 consent is moot because image inclusion is not offered. |
| Reviewer-visible payload | Partially evidenced / closure-audit confirmation needed | Claude PR #26 audit observed crop, capture date, AI proposal labelled as AI-only, human disposition, action route, farmer note, image not retained/sent, and no geolocation. Closure audit should confirm this mapping. |
| Store-now/review-later behavior | Evidence present | PR #22 follow-up build and browser-followups tests. |
| No all-day smartphone claim | Evidence/claim-control check needed | Stage 3/4 invariant says intermittent/shared/assisted smartphone access; closure audit should confirm app/docs do not imply continuous possession. |
| Clear limitation/safety language | Evidence present / final sweep needed | PR #21 and PR #22 wording plus Stage 8 docs. Final claim sweep still required. |
| Local-record deletion path | Evidence present | PR #21/PR #22 local record and delete paths. |
| Static PWA architecture | Evidence present | `app/` static bundle, service worker, local app assets, and PR #24 closure guards. |
| No server-side rust inference | Evidence present | Browser-local ONNX path and local-only closure guards; no server inference path. |
| No cloud LLM dependency | Evidence present | Static browser-local app; no LLM route in app. |
| Self-hosted runtime/model assets | Evidence present | Vendored ORT runtime/model assets and asset manifest. |
| No geolocation collection | Evidence present / final sweep needed | App-facing docs and closure guards indicate no geolocation path; final Stage 8/10 sweep should preserve this. |
| No raw-image retention by default | Evidence present | PR #25 saved-record checks show `raw_image_retained:false` and no raw image/blob field. |
| Target browser/device gate | Not met | D4-07/D4-18 physical target unresolved; owner must run protocol or amend evidence level. |
| Naming/branding gate | Pending | Formal Stage 0 sweep of UI strings and live-demo metadata disposition required. |

## Claims boundary for closure

The Stage 8 package supports these claims only:

- browser-local MVP loop exists;
- the app has been shown to run the frozen ONNX model locally in headless Chromium/Linux;
- the app can run the canonical browser inference harness with the local server shut down after cache verification;
- raw image retention is not used in the saved record path covered by tests;
- human disposition is required before saving, supported by earlier-head PR #21 evidence and current code inspection caveat;
- no-upload/static local-only posture is guarded by tests;
- route threshold logic is guarded by tests.

The Stage 8 package does **not** support these claims:

- new Stage 8 model accuracy, sensitivity, specificity, recall, precision, or field performance evidence;
- field validation;
- treatment recommendation;
- production deployment;
- completed validated Lugisu/Lumasaba support;
- World Bank Group or partner endorsement;
- RoCoLe or challenge-set inference unless separately authorized, performed, and documented;
- Stage 8 closure without a separate owner decision.

Any existing app-displayed internal holdout figures, such as `104 / 106` and `66 / 95`, are governed by the Stage 7 evidence ceiling. Stage 8 does not create new model-performance evidence.

## Current blockers before PR #26 Ready for Review

This package should remain draft until Claude confirms the repaired text at the current head.

## Current blockers before PR #26 merge

After Claude confirms the repaired text and José authorizes Ready for Review:

1. verify the repaired head still touches only the three documentation/manifest files;
2. verify the manifest still parses as JSON;
3. verify `npm test` still passes if owner wants the same check Claude requested;
4. obtain explicit owner authorization for Ready for Review and merge.

## Current blockers before Stage 8 closure

Before marking Stage 8 closed, resolve:

1. **Target device:** run D4-07 iPhone/Safari standalone-PWA protocol including D4-18 latency/timing measurement, or record explicit owner amendment citing both D4-07 and D4-18 and moving physical proof/latency validation to Stage 9 with disclosure.
2. **Naming/branding:** run and record the formal Stage 0 sweep of UI strings and record live-demo metadata as not applicable at Stage 8 or deferred to deployment/Stage 10.
3. **Route variety:** record owner acceptance of the caveat or produce current-head three-route browser evidence.
4. **Human-authority gate:** record owner acceptance of earlier-head PR #21 + code-inspection evidence, or create a separate test-change PR adding current-head negative Save-gating assertions.
5. **Item 36:** explicitly approve the owner deferral as part of closing against a reduced Stage 8 component list and carry Stage 10 submission risk.
6. **PR #21 deferrals:** record owner disposition of each ledger item.
7. **Handoff/consent trace:** confirm D3-07 to D3-10 mapping and record that image retention is not offered.
8. **Final steps:** Claude closure audit and explicit owner closure decision.

## Closure-readiness verdict for audit

This package is not a closure decision. It prepares the closure audit and surfaces the decisions required before Stage 8 can close.
