# Stage 8 — Claude Audit Repair Summary

**Initial audited head:** `89e1d425c4fb542bff8c09ddb2def76c5038e980`  
**Initial Claude verdict:** `FAIL / BLOCKED`  
**First repair-tested head:** `60ea706e10129d74a50b317d167a06f2d964f248`  
**Claude verification verdict after first repair:** `PASS WITH MINOR REPAIRS`  
**Final minor smoke-tested head:** `d24cd352226a931a04c397ea9cf50a7b715a9fad`  
**Final evidence head:** this file's commit, after temporary workflow removal and documentation updates only.

## Scope of this repair summary

This document records Vale's disposition of Claude's Stage 8 findings for PR #21. It does not close Stage 8, approve merge, mark the PR Ready for Review, or replace José's final owner authorization.

## Finding disposition

| Finding | Claude severity | Final disposition in PR #21 | Evidence / note |
|---|---:|---|---|
| B1 — browser resize mismatch vs Stage 7C/7E preprocessing | Blocking | Fixed | Claude independently verified `app/preprocess.js` against Pillow across harder images. The final branch retains the repaired separable triangle-filter preprocessing and synthetic reference tests. |
| B2 — no recorded browser image-to-result loop | Blocking | Fixed | Browser e2e now exercises fixture selection, browser preprocessing, ONNX inference, route equality, save gating, IndexedDB readback, raw-image absence, request-boundary checks, offline reload, and offline inference. |
| B3 — Stage 8 scope conflict: Lugisu and review-later missing | Blocking for Stage 8 closure | Fixed as framing; substance deferred by owner decision | José explicitly accepts that PR #21 is a partial Stage 8 hardening increment. Lugisu fixed-string interaction and full review-later persistence are deferred from this PR; Stage 8 remains open. |
| M1 — blank or unsuitable image can get confident no-visible-rust | Major | Partially fixed; uniform-image routing declined/deferred by owner decision | Blank/unreadable canvas fails loud and copy is safer. José explicitly declines adding a uniform-image routing rule in PR #21 because it could alter routing behavior; image-quality / near-uniform routing remains a future decision. |
| M2 — on-screen evidence numbers selectively framed | Major | Fixed | Evidence text now includes coverage, confident-output accuracy, `66 / 95` rust leaves routed to visible rust, `27 / 95` routed to not sure, `2 / 95` routed to no visible rust, and `7 / 117` other-condition leaves routed to visible rust. |
| M3 — offline-ready badge before cache exists | Major | Fixed | Badge requires service-worker readiness and core-cache verification before saying offline cache is verified. Browser smoke covers offline reload. |
| M4 — old cached files can remain after update | Major | Fixed | Service-worker cache is versioned and static smoke now checks `CACHE_NAME` equality between `app/app.js` and `app/sw.js`. |
| M5 — phone picker skips photo library | Major | Fixed | `capture="environment"` was removed and static smoke guards against its return. |
| M6 — review-later and deletion only current session | Major | Deferred by owner decision | Current-session record view/delete remains. José explicitly accepts full saved-records / review-later persistence as a follow-up outside PR #21. |
| Minor 1 — stale build document | Minor | Fixed | `STAGE_08_MVP_BUILD.md` is updated. |
| Minor 2 — SHA recorded but not checked | Minor | Fixed | App computes the ONNX SHA-256 with `crypto.subtle` and refuses inference on mismatch. |
| Minor 3 — bot/tooling disclosure | Minor | Deferred to submission disclosure | Needs AI/tooling disclosure before final submission. |
| Minor 4 — two small races | Minor | Fixed for e2e route staleness; app race partially mitigated | E2e now clears the previous route and waits for `Local inference complete` plus the expected route. App keeps shared model-load promise and inference token. |
| Minor 5 — hard-coded role | Minor | Deferred | `confirmed_by_role` remains a fixed MVP assumption. |
| Minor 6 — plain HTTP testing breaks phone path | Minor | Deferred to deployment/submission docs | No deployment performed. |
| Minor 7 — minimum device not documented | Minor | Deferred | Supported-browser statement still needed before final submission. |
| Minor 8 — phone photo shape/domain shift | Minor | Partially repaired | UI hints landscape / one complete target leaf; no field-validation claim remains. |
| Minor 9 — training code only in history | Minor | Deferred to Stage 10 submission blocker | Not part of this repair pass. |
| Minor 10 — leftover branches not inspected | Minor | Deferred | Not part of this repair pass. |

## Verification performed

Temporary workflow run `37177866620`, job `111364182320`, passed:

- dependency installation;
- `npm test`;
- static smoke checks;
- preprocessing reference checks;
- Python/Pillow route-variety reference-route generation;
- Chromium browser route-variety image-to-record smoke;
- core asset hash capture.

The route-variety smoke covered:

| Fixture | Route |
|---|---|
| `visible_rust_spots_leaf` | `visible_rust` |
| `no_visible_gradient_leaf` | `no_visible_rust` |
| `not_sure_healthy_rust_blend_0.85` | `not_sure` |

The workflow was then removed from the final branch state.

## Remaining blockers / decisions

From Vale's perspective after the final minor repair pass:

1. There are no remaining technical blockers before moving PR #21 from draft to Ready for Review.
2. Ready for Review still requires separate explicit José authorization.
3. Merge requires separate explicit José authorization.
4. Stage 8 remains open until Lugisu/review-later follow-ups are implemented or formally rescoped.
5. Submission-stage items remain open: LICENSE/third-party notices, AI/tooling disclosure, supported-browser statement, training-code/history disclosure posture, and branch cleanup.
