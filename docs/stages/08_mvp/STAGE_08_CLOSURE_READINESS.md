# Stage 8 — Closure-Readiness Package

## Status

This document is a Stage 8 closure-readiness consolidation package after merged PR #25. It does **not** close Stage 8. It does **not** deploy, submit, produce video, run RoCoLe or challenge-set inference, retrain, fine-tune, or change product behavior.

Current package branch: `chatgpt/stage-08-closure-readiness-package`.

Base for this package: `03487327a15d4f8286ca0e275c834fa4c21a0e40` (PR #25 squash merge commit).

## Closure-readiness summary

Stage 8 has strong merged evidence for the browser-local MVP loop, no-upload/local-only posture, review-later record handling, static closure guards, routing threshold guards, and headless Chromium/Linux browser offline inference through the frozen ONNX model.

Stage 8 should remain open until the owner and Claude closure audit resolve the remaining closure decisions:

1. **Target device evidence:** Stage 4 D4-07 defines the primary physical evidence context as `iPhone 17 Pro Max → Safari → Add to Home Screen → standalone PWA`. Current evidence is headless Chromium/Linux and does not satisfy that physical target.
2. **Naming/branding:** Stage 0 already defines the naming/branding policy. A formal Stage 8 sweep must apply it to UI strings and any live-demo metadata.
3. **Route variety:** the current-head browser offline inference harness confirms the synthetic route is `not_sure`. Earlier PR #21 browser smoke covered all three routes, but no current-head live inference has rendered `visible_rust` or `no_visible_rust`; this is sufficient only with explicit owner acceptance/caveat.
4. **Item 36:** validated Lugisu/Lumasaba local-language support remains deferred. Closing Stage 8 with this deferral means closing against a reduced component list and carrying a Stage 10 submission risk.
5. **PR #21 deferrals:** prior accepted/deferred findings must receive explicit closure dispositions.
6. **Requirements trace:** every ROADMAP Stage 8 component and gate must map to evidence, owner acceptance, deferral, or unresolved blocker.
7. **Final closure:** Stage 8 still requires a Claude closure audit and explicit owner closure decision.

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
- Route-variety evidence:
  - `docs/stages/08_mvp/STAGE_08_BROWSER_SMOKE_EVIDENCE.md` records a browser smoke using synthetic fixtures that covered `visible_rust`, `no_visible_rust`, and `not_sure`;
  - the Playwright browser route matched the Python/Pillow reference route for each fixture;
  - the fixtures/workflow were not retained as current-head committed route-variety tests;
  - `app/preprocess.js` was later audited by Claude as unchanged since PR #21 through PR #25.
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
- Closure effect: route logic and no-upload posture are guarded by static/unit evidence.

### PR #25 — Browser offline inference evidence

- Squash merge commit: `03487327a15d4f8286ca0e275c834fa4c21a0e40`
- Scope: browser offline inference evidence harness and documentation.
- Source transparency:
  - Claude's final PR #25 `PASS`, 50/50 repeat evidence, route `not_sure`, and environment details are carried from the PR review/audit conversation. `STAGE_08_BROWSER_INFERENCE_EVIDENCE.md` in the merged repo records the earlier `db57bbd` `PASS WITH MINOR REPAIRS` state and still treats the final fixed-head validation as required.
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
  - confirmed current-head offline inference route: `not_sure`;
  - saved record checks include `raw_image_retained: false`, no `raw_image`, no `image_blob`, and the frozen model SHA.
- Scope confirmation from PR #25 audit:
  - PR #25 changed only documentation, package script, and test harness files;
  - `app/` was untouched;
  - no product behavior, model, threshold, class-order, preprocessing, ONNX, ORT, service-worker behavior, or route logic changed.
- Closure effect: resolves the current-head headless Chromium/Linux browser offline inference evidence gap, subject to the route-variety and physical target-device decisions below.

## Evidence limitations and closure decisions

### Route-variety status

Current-head browser-level offline inference evidence from PR #25 confirms one deterministic synthetic-image route: `not_sure`.

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

The package no longer treats this as a missing-source issue. A source-backed target already exists.

Source-backed target:

- Stage 4 D4-07 / browser runtime and offline architecture defines the primary physical evidence context as:
  - `iPhone 17 Pro Max → Safari → Add to Home Screen → standalone PWA`;
  - call `navigator.storage.persist()` where supported and record the returned value;
  - do not assume storage created in a Safari tab is shared with the installed Home Screen app.
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
  1. run the D4-07 iPhone/Safari standalone-PWA physical protocol; or
  2. record an explicit owner amendment that cites D4-07, sets the Stage 8 evidence level to headless Chromium/Linux for the hackathon-timeboxed Stage 8 close, and moves physical proof to Stage 9 with disclosure.

### Naming/branding status

The package no longer treats this as a missing-source issue. A source-backed policy exists.

Policy sources:

- `docs/stages/00_rules/STAGE_00_COMPLIANCE_CHECKLIST.md`, row 48: organizer/partner naming and branding restriction;
- `docs/stages/00_rules/STAGE_00_COMPLIANCE_CHECKLIST.md`, §5.7 Branding;
- Stage 0 reconciliation findings M-01 and r-02, as referenced by Claude's PR #26 audit;
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
- Stage 8 closure must explicitly approve the item 36 deferral as part of the Stage 8 closure criteria.

### PR #21 deferrals ledger

| Item | Source | Proposed Stage 8 closure disposition |
|---|---|---|
| M1 — near-uniform-image routing | `STAGE_08_CLAUDE_AUDIT_REPAIR_SUMMARY.md` | Accepted residual risk for Stage 8 if the owner reaffirms the prior decision not to add a uniform-image routing rule; carry image-quality/OOD hardening to Stage 9. |
| Minor 5 — hard-coded `confirmed_by_role` | `STAGE_08_CLAUDE_AUDIT_REPAIR_SUMMARY.md` | Stage 8 closure blocker unless mapped to owner-accepted MVP role assumption. If accepted, carry to Stage 9/10 as UX/data-quality limitation. |
| Minor 7 — minimum device not documented | `STAGE_08_CLAUDE_AUDIT_REPAIR_SUMMARY.md` | Superseded by the D4-07 target-device issue; remains a Stage 8 closure blocker unless D4-07 protocol is run or amended. |
| Minor 9 — training code only in history | `STAGE_08_CLAUDE_AUDIT_REPAIR_SUMMARY.md` | Not a Stage 8 technical-closure blocker; defer to Stage 10 repository/submission transparency and training-code/history disclosure posture. |
| Minor 10 — leftover branches not inspected | `STAGE_08_CLAUDE_AUDIT_REPAIR_SUMMARY.md` | Not a Stage 8 product-evidence blocker; defer to Stage 10 repository hygiene/submission freeze. |

### ROADMAP Stage 8 requirements trace

| Stage 8 requirement / gate | Current status | Evidence / disposition |
|---|---|---|
| Stage 3 named local-language UI interaction | Deferred | Item 36 remains owner-deferred; closure requires explicit reduced-component acceptance and Stage 10 risk acknowledgement. |
| Image capture/upload | Evidence present | PR #21 and PR #25 exercise file-input path; no app change in PR #26. |
| Browser-local inference | Evidence present in headless Chromium/Linux | PR #25 proves current-head offline ONNX inference in headless Chromium/Linux. Physical D4-07 target remains unresolved. |
| Visible-rust / no-visible-rust / not-sure output | Evidence present with caveat | PR #21 browser smoke covered all three routes at earlier head; PR #24 guards route logic; PR #25 current-head live route is `not_sure`. Requires owner route-variety caveat acceptance or new evidence. |
| Explicit AI-suggestion state | Evidence present | PR #21/PR #24 static and browser smoke evidence; no closure blocker currently identified. |
| Pending-human-confirmation state | Evidence present | PR #21 browser smoke and PR #24 human-authority guards. |
| Confirm/correct/review actions | Evidence present with MVP limitations | PR #21/PR #22/PR #24 evidence; review-later persistence implemented in PR #22. |
| No pre-filled human disposition | Evidence present | PR #21 and PR #24 guards. |
| `confirmed_by_role` | Deferred/owner acceptance needed | PR #21 repair summary records hard-coded role as deferred. Closure requires explicit owner acceptance or repair. |
| Structured local record | Evidence present | PR #21/PR #22/PR #25 saved-record checks. |
| IndexedDB/local storage | Evidence present in headless Chromium/Linux | PR #22 and PR #25. D4-07 physical persistence target remains unresolved. |
| Deterministic extension handoff summary based on human disposition | Evidence partially present | Closure package must verify the current implementation and evidence against Stage 3 locked channel/payload. Remains a trace item for Claude audit. |
| Stage-3-locked user-initiated handoff, consent step, reviewer-visible payload | Unresolved for closure | Must be explicitly mapped to current implementation/evidence or deferred by owner. |
| Store-now/review-later without live connection | Evidence present in headless Chromium/Linux | PR #22 and PR #25; physical target unresolved. |
| No UX claim that Noor carries smartphone all day | Evidence/claim control present | Stage 4 invariant and app claim sweep should confirm no contrary UI string. |
| Clear limitation/safety language | Evidence present with final sweep needed | PR #21/PR #22/PR #24; final claims sweep still needed. |
| Local-record deletion path | Evidence present | PR #21/PR #22. |
| Full loop works on defined target browser/device evidence level | Not met | Current evidence is headless Chromium/Linux; D4-07 physical target unresolved. |
| UI strings and live-demo metadata pass Stage 0 naming/branding policy | Pending | Source-backed policy exists; formal Stage 8 sweep required. |

## Claims boundary for closure

The Stage 8 package supports these claims only:

- browser-local MVP loop exists;
- the app has been shown to run the frozen ONNX model locally in **headless Chromium/Linux**;
- the app has been shown to run the canonical headless Chromium/Linux browser inference harness with the local server shut down after cache verification;
- raw image retention is not used in the saved record path covered by tests;
- human disposition is required before saving;
- no-upload/static local-only posture is guarded by tests;
- route threshold logic is guarded by tests.

The Stage 8 package does **not** create new support for these claims:

- model accuracy, sensitivity, specificity, recall, precision, or field performance;
- field validation;
- treatment recommendation;
- production deployment;
- completed validated Lugisu/Lumasaba support;
- World Bank Group or partner endorsement;
- RoCoLe or challenge-set inference unless separately authorized, performed, and documented;
- Stage 8 closure without a separate owner decision.

Existing app-displayed internal-holdout figures, including values such as `104/106` and `66/95`, are governed by the Stage 7 evidence ceiling. Stage 8 does not create new model-performance evidence.

## Closure-readiness verdict for audit

This package is not a closure decision. It prepares the closure audit.

Recommended Claude closure-audit questions:

1. Does merged evidence through PR #25 support closing Stage 8, or do route-variety, target-device, naming/branding, item 36, handoff/consent, `confirmed_by_role`, or other Stage 8 trace gaps remain blockers?
2. Is prior PR #21 three-route browser evidence plus unchanged route/preprocessing code plus PR #24 route guards plus PR #25 current-head `not_sure` offline inference sufficient with owner acceptance?
3. Must the D4-07 iPhone/Safari standalone-PWA protocol run before Stage 8 closure, or may the owner amend Stage 8 evidence level to headless Chromium/Linux and move physical proof to Stage 9 with disclosure?
4. Does the formal Stage 0 naming/branding policy pass for current UI strings, and is live-demo metadata not applicable at Stage 8 or deferred to Stage 10?
5. Is item 36 deferral properly disclosed, and is the reduced-component Stage 8 closure consequence explicit enough?
6. Are PR #21 deferrals and ROADMAP Stage 8 trace items dispositioned adequately?
7. Are there any overclaims in Stage 8 docs, demo-facing wording, or submission-facing wording?

## Current blockers to resolve before Stage 8 closure

Before marking Stage 8 closed, resolve:

1. Target-device evidence: run D4-07 iPhone/Safari standalone-PWA protocol or record explicit owner amendment moving physical proof to Stage 9 with disclosure.
2. Naming/branding: run the formal Stage 0 sweep of UI strings and record live-demo metadata as not applicable or deferred.
3. Route variety: record owner acceptance with caveat or run current-head three-route browser evidence.
4. Item 36: record owner waiver as part of Stage 8 closure criteria, including the Stage 10 submission risk.
5. PR #21 deferrals: record a disposition for each item in the ledger above.
6. ROADMAP Stage 8 requirements trace: complete/confirm mapping for handoff and consent step, `confirmed_by_role`, human-authority controls, target-device gate, naming/branding gate, item 36, and offline/browser inference loop.
7. Claude closure-readiness audit.
8. Explicit owner decision to close Stage 8.
