# Roadmap Audit Reconciliation

**Audit PR:** #1 — `Audit: adversarial review of project roadmap`  
**Audit verdict:** FAIL / BLOCKED  
**Audit counts:** 2 blocking, 11 major, 6 minor  
**Reconciliation status:** Builder reconciliation complete, focused re-audit completed, final owner decision pending  
**Artifacts repaired on this branch:** `ROADMAP.md`, `docs/PROJECT_WORKFLOW.md`

This reconciliation treats the audit as independent red-team input, not as an automatic decision. Each material finding is accepted, partially accepted, or rejected based on the project’s locked goals, competition clock, and owner-selected stage-by-stage public process.

---

## Summary

The audit correctly identified two high-value weaknesses:

1. the original roadmap did not convert the competition deadline into an executable time budget;
2. the original evaluation rules protected threshold tuning but did not fully protect model/design choices from held-out leakage.

Those two issues are repaired.

The audit also identified several valid major controls around label semantics, OOD behavior, browser/runtime feasibility, human authority, licensing, offline evidence, metrics, and submission mechanics. Those are incorporated into the repaired roadmap.

Two recommendations are **not** adopted literally because they conflict with the owner’s chosen public development method:

- collapsing Stages 0–6 into only two PRs;
- eliminating Stage 6 as a distinct project stage.

Instead, the repaired process keeps one bounded PR per stage while using risk-tiered review and strict time boxes so the public project history remains detailed without forcing full independent-audit ceremony at every step.

---

# Blocking findings

| ID | Disposition | Reconciliation |
|---|---|---|
| **B-01 — no executable time budget / excessive pre-build ceremony** | **PARTIALLY ACCEPTED** | Accepted: deadline-anchored budget, 3.5-hour protected buffer, overrun rule, review tiers, parallel technical de-risking, and one independent final claims audit rather than duplicate Stage 9/10 audits. Rejected: collapsing Stages 0–6 into at most two PRs. Owner explicitly selected a stage-by-stage public process. One bounded PR per stage remains, but Tier B stages use lightweight owner/builder review unless material risk appears. |
| **B-02 — held-out/external evidence vulnerable to re-use after design changes** | **ACCEPTED** | Added committed split manifest, class map, operating-point rule, mandatory metric list, one-shot test/external partitions, burned-partition rule, pre-designated external role, group-aware splitting or near-duplicate controls, and prohibition on using held-out/external data for any design choice. |

---

# Major findings

| ID | Disposition | Reconciliation |
|---|---|---|
| **M-01 — “no visible rust” vs healthy / other-disease semantics** | **ACCEPTED** | `no visible rust` is explicitly not equivalent to “healthy.” Other disease/stress routes to `not sure`; mixed rust + other condition routes to `visible rust`. “Healthy specificity” is replaced with specificity on clearly healthy images and an other-disease outcome distribution. |
| **M-02 — Stage 7 gate/fallback ladder lacks pre-registered criteria and triggers** | **ACCEPTED** | Stage 4 must pre-register maximum confident-miss rate, minimum coverage floor, maximum model+runtime bytes, maximum latency, target device/browser, and Stage 7 kill time. Stage 5 now has an ordered learned-AI fallback ladder with triggers/claim reductions. Handcrafted color/texture rules are diagnostic only, not the qualifying AI core. |
| **M-03 — browser runtime tested too late** | **ACCEPTED** | Browser/runtime smoke test moved to the start of Stage 7 and is also allowed as bounded parallel de-risking before definitive model work. |
| **M-04 — abstaining-classifier metrics incomplete** | **ACCEPTED** | Mandatory core now includes class counts, accepted-prediction confusion matrix where defined, overall/per-class coverage, selective accuracy/risk, rust recall, specificity on clearly healthy images, confident-miss rate, abstention rate, other-disease outcome distribution, and 95% intervals for headline rates where defensible. |
| **M-05 — OOD/fail-safe control could be rhetorical/cherry-picked** | **ACCEPTED** | A user pre-check is additive only. A licensed frozen challenge set is required before fail-safe claims, with non-coffee, other-disease/stress, and low-quality categories; all results must be reported. If no measured OOD guard exists, the public claim is downgraded. |
| **M-06 — offline/device proof unspecified** | **ACCEPTED** | Stage 4 must name the actual target evidence device/browser. Stage 9 now contains a fixed seven-step offline protocol plus screen/network/cache evidence and an explicit limitation if only desktop/emulation evidence is available. |
| **M-07 — human authority specified but not verified** | **ACCEPTED** | Added separate AI and human record fields, no-prefill rule, explicit `not sure` resolution, enumerated/self-declared `confirmed_by_role`, human-only formal disposition, and Stage 9 authority tests. |
| **M-08 — license gate incomplete** | **ACCEPTED** | License verdict now covers datasets, pretrained encoder/weights, runtime/library, training use, derived-weight redistribution, attribution, and repository-license compatibility. Unclear/incompatible terms trigger a stop/swap before held-out evidence is opened. |
| **M-09 — stage artifacts risk unsupported process-history implications** | **PARTIALLY ACCEPTED** | Accepted: public stage artifacts are decision records, not narrative diaries; unsupported process-history claims are prohibited; Stage 2 is framed as documenting the comparison/rationale; Stage 6 authorization must be recorded in the Stage 6 artifact. Not adopted: adding public chronology commentary. The owner explicitly selected chronology-neutral public artifacts. |
| **M-10 — Stage 0 compliance does not propagate** | **PARTIALLY ACCEPTED** | Stage 0 becomes one authoritative compliance checklist mapped to enforcing stages/evidence. Stage 6 remains a distinct bounded recheck/greenlight stage rather than being collapsed into Stage 0. Rechecks also occur at Stage 7 start and Stage 10 submission. |
| **M-11 — submission mechanics insufficiently protected** | **ACCEPTED** | Live deployment is moved earlier once the browser artifact passes; Stage 0 must reconcile video requirements; submission forms are dry-run before the protected buffer; early complete submission is preferred if editable; submission receipt evidence is required. |

---

# Minor findings

| ID | Disposition | Reconciliation |
|---|---|---|
| **m-01 — qualitative pre-build gates** | **ACCEPTED** | Gates now tie closure to required outputs, reconciled findings, owner decision, and merged PR. |
| **m-02 — inconsistent stage status vocabulary** | **ACCEPTED** | Fixed vocabulary: Not started / In progress / In review / Closed — owner approved. |
| **m-03 — duplicate claims ledger/evidence table** | **ACCEPTED** | Replaced with one public evidence + claims table containing a claim-tag column. |
| **m-04 — image retention/metadata/delete scope unclear** | **ACCEPTED** | Added no raw-image retention by default, metadata stripping on ingest before retention/export, cache restrictions, and deletion scope. |
| **m-05 — internal jargon / judge readability** | **ACCEPTED** | Public route now uses RoyaCheck Offline rather than “repaired Concept A.” Stage 10 requires a one-screen README summary answering the judge-facing questions. |
| **m-06 — exclusion lists inconsistent** | **ACCEPTED** | One canonical exclusion list now includes treatment plans and is referenced by later stages. |

---

# Residual decisions intentionally left to later gates

The roadmap should not invent technical numbers that Stage 4 is explicitly designed to pre-register. Therefore the following values remain owner-set Stage 4 decisions:

- maximum acceptable confident-miss rate;
- minimum coverage floor;
- maximum model + runtime bytes;
- maximum latency;
- exact target test device/browser;
- Stage 7 kill time;
- OOD challenge-set `not sure` target.

They must be fixed **before** held-out/external readout.

---

# Builder conclusion

The audit was valuable and materially improved the process.

After the repairs on this branch:

- the competition clock is explicit;
- the public stage-by-stage PR structure is preserved;
- independent review is concentrated at the highest-risk gates;
- held-out/external evidence is protected against all design feedback, not just threshold tuning;
- the browser/runtime risk is tested early;
- human authority is testable;
- licensing has a stop condition;
- offline claims have a fixed proof protocol;
- OOD claims require measured evidence or downgraded wording;
- submission completion has a protected buffer and receipt requirement.

The repaired roadmap received a focused independent re-audit in PR #1. Claude's re-audit verdict was **PASS WITH MAJOR REPAIRS** with one major residual (R-1) and three minor residuals (R-2 to R-4). Those four residuals have now been applied on this branch. Final owner acceptance and merge remain pending.

---

# Focused re-audit residual reconciliation

| Residual | Disposition | Final repair |
|---|---|---|
| **R-1 — budget not anchored to clock times** | **ACCEPTED** | Added fixed latest end times in ET, a hard **5:30 AM ET** buffer start, explicit cross-stage overrun behavior, Stage 8/9 freeze rules, and permission to begin stage N+1 after owner decision while merge follows. Stage 4 pre-registration and Stage 6 greenlight remain hard gates. |
| **R-2 — split manifest timing inconsistent** | **ACCEPTED** | Stage 4 now pre-registers the split procedure; Stage 7B commits the generated manifest before any training or validation result is produced. |
| **R-3 — license verdict omitted derived reference data** | **ACCEPTED** | License gate now covers redistribution of derived weights, embeddings, and reference sets. |
| **R-4 — duplicate Stage 6 / Stage 7 compliance recheck** | **ACCEPTED** | Stage 6 recheck satisfies the Stage 7-start recheck unless official materials change between them; Stage 10 retains the final recheck. |

## Final builder assessment

With R-1 through R-4 applied, no known blocking or major roadmap finding remains unreconciled. The repaired process is ready for owner acceptance, subject to a final scope/merge guard check.
