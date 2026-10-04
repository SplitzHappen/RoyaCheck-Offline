# Stage 8 — Claude Audit Repair Summary

**Audited head:** `89e1d425c4fb542bff8c09ddb2def76c5038e980`  
**Claude verdict:** `FAIL / BLOCKED`  
**Repair-tested head:** `60ea706e10129d74a50b317d167a06f2d964f248`  
**Final evidence head:** this file's commit, after temporary workflow removal and documentation updates only.

## Scope of this repair summary

This document records Vale's disposition of Claude's Stage 8 findings for PR #21. It does not close Stage 8, approve merge, mark the PR Ready for Review, or replace Claude's independent verification.

## Finding disposition

| Finding | Claude severity | Disposition in this repair pass | Evidence / note |
|---|---:|---|---|
| B1 — browser resize mismatch vs Stage 7C/7E preprocessing | Blocking | Repaired pending Claude verification | Added `app/preprocess.js` with separable triangle-filter resize, shared route constants, and `tests/preprocess-reference.mjs` synthetic reference checks. |
| B2 — no recorded browser image-to-result loop | Blocking | Repaired pending Claude verification | Added `tests/browser-e2e.mjs`; workflow run `37177257854` passed browser fixture selection, browser inference, reference-route comparison, save-gating, IndexedDB readback, raw-image absence, request-boundary checks, and offline reload. |
| B3 — Stage 8 scope conflict: Lugisu and review-later missing | Blocking for Stage 8 closure | Partially accepted / deferred by owner-authorized scope decision | PR #21 is documented as a partial Stage 8 hardening increment. Lugisu fixed-string interaction and review-later persistence remain follow-up items before Stage 8 closure unless formally rescoped. |
| M1 — blank or unsuitable image can get confident no-visible-rust | Major | Partially repaired | Added blank-canvas / unreadable-pixel fail-loud guard and corrected copy. Did not add a near-uniform routing rule because that would change routing behaviour and needs a separate owner decision. |
| M2 — on-screen evidence numbers selectively framed | Major | Repaired pending Claude verification | Replaced accepted-recall framing with coverage, confident-output accuracy, rust-route capture, rust-not-sure count, and other-condition false-visible-rust count. |
| M3 — offline-ready badge before cache exists | Major | Repaired pending Claude verification | Badge now says first load needs connection until service worker readiness and core-cache verification pass. Browser smoke includes offline reload. |
| M4 — old cached files can remain after update | Major | Repaired pending Claude verification | Service-worker cache name is versioned as `royacheck-stage8-a0-4037c096-20261004-r1`; static smoke checks cache drift. |
| M5 — phone picker skips photo library | Major | Repaired pending Claude verification | Removed `capture="environment"` from the image input. |
| M6 — review-later and deletion only current session | Major | Deferred | Current-session record view/delete remains. Full saved-records list remains a Stage 8 follow-up tied to B3. |
| Minor 1 — stale build document | Minor | Repaired | Updated `STAGE_08_MVP_BUILD.md`. |
| Minor 2 — SHA recorded but not checked | Minor | Repaired pending Claude verification | App now fetches ONNX bytes, computes SHA-256 with `crypto.subtle`, and refuses inference if the hash differs. |
| Minor 3 — bot/tooling disclosure | Minor | Deferred to submission disclosure | Needs AI/tooling disclosure before final submission. |
| Minor 4 — two small races | Minor | Partially repaired | Added shared model-load promise and inference token. |
| Minor 5 — hard-coded role | Minor | Deferred | `confirmed_by_role` remains a fixed MVP assumption. |
| Minor 6 — plain HTTP testing breaks phone path | Minor | Deferred to deployment/submission docs | No deployment performed. |
| Minor 7 — minimum device not documented | Minor | Deferred | Supported-browser statement still needed before final submission. |
| Minor 8 — phone photo shape/domain shift | Minor | Partially repaired | UI now hints landscape / one complete target leaf; no field-validation claim remains. |
| Minor 9 — training code only in history | Minor | Deferred to Stage 10 submission blocker | Not part of this repair pass. |
| Minor 10 — leftover branches not inspected | Minor | Deferred | Not part of this repair pass. |

## Verification performed

Temporary workflow run `37177257854` passed:

- dependency installation;
- static smoke checks;
- preprocessing reference checks;
- Python/Pillow reference-route generation;
- Chromium browser image-to-record smoke;
- core asset hash capture.

The workflow was then removed from the final branch state.

## Remaining blockers / decisions

From Vale's perspective after this repair pass:

1. Claude B1 and B2 are repaired but require Claude verification.
2. B3 remains a Stage 8 closure blocker unless Lugisu/review-later are implemented or formally rescoped.
3. M6 remains deferred; merge can be defensible only if José explicitly accepts it as a documented deferral.
4. PR #21 should remain draft until José authorizes Ready for Review.
5. Merge still requires separate explicit authorization.
