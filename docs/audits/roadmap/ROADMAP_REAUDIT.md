# Roadmap Re-Audit

**Scope:** A focused recheck of draft PR #2 (`Roadmap: reconcile adversarial audit findings`, head `26fc115`) against the 19 findings in `docs/audits/roadmap/ROADMAP_AUDIT.md`. The files rechecked are:

- `ROADMAP.md`
- `docs/PROJECT_WORKFLOW.md`
- `docs/audits/roadmap/RECONCILIATION.md`

These are read against the current `docs/audits/roadmap/AUDIT_PACKAGE.md`.

**Not in scope:** This recheck does not reopen the concept, the sector, or the project from first principles.

**Owner-locked process choices treated as given:**

1. One bounded PR per stage, with no collapse of Stages 0–6.
2. Stage 6 kept as a distinct official-source recheck and greenlight stage.

Both are judged only on whether they achieve the assurance the original repair aimed at.

**Line references** are to the PR #2 versions of the files at `26fc115`. A reference with no file name points to `ROADMAP.md`; a reference prefixed `WF` points to `docs/PROJECT_WORKFLOW.md`.

The original audit verdict was **FAIL / BLOCKED** (2 blocking, 11 major, 6 minor). That record stands unchanged in `ROADMAP_AUDIT.md`.

---

## Final verdict

**PASS WITH MAJOR REPAIRS**

- Original blocking findings still unresolved: 0
- Original major findings still unresolved: 0
- New blocking findings: 0
- New major findings: 0
- Minor residual findings: 3

**Major residual: 1.** Finding B-01 is now only partially resolved. Its blocking elements are repaired, but one execution gap remains, rated **Major**: the competition-clock budget is not anchored to clock times (R-1).

---

## Executive re-assessment

PR #2 is a substantive repair, not a cosmetic one. Both original blocking problems are addressed at their core:

- **Evaluation integrity (B-02) is fully resolved.** Held-out and external partitions are now one-shot against *every* design choice. A burned-partition rule is in place, the external dataset is named and quarantined in advance, and group-aware splitting or near-duplicate control is mandatory.
- **The time-budget problem (B-01) is mostly resolved.** There is now an explicit deadline, a budget per work block, a protected buffer of at least 3.5 hours, an overrun rule, Tier A/Tier B review, and bounded parallel de-risking.
- **All 11 major findings are resolved or replaced by an acceptable alternative.** Label semantics, the pre-registered Stage 7 criteria and fallback ladder, the early browser smoke test, the selective-classification metrics, the measured OOD challenge set, the offline protocol, the human-authority schema and tests, the license stop condition, and the submission mechanics are all now concrete. Each sits in the stage that has to enforce it.
- **The two owner-locked alternatives hold up.** Keeping one PR per stage, with Tier B owner/builder review, achieves the time protection the original repair aimed at. Keeping Stage 6 as a recorded recheck and greenlight, reusing the Stage 0 checklist, achieves the compliance propagation M-10 asked for.

**What remains (R-1).** The competition-clock budget is written as durations "from the current roadmap checkpoint" (line 99). That moment is never defined, and the six blocks add up to 17.5 hours against a fixed deadline. The table does not say when the buffer starts or which block gives up time when an earlier one overruns. The overrun rule also covers only documentation stages; Stage 8 and Stage 9 have no time-box consequence. The buffer can therefore still be eroded in practice, which is the failure B-01 was about. The repair is one column of clock times plus two sentences.

**Minor residuals.** Three remain, all wording or consistency items. None affects validity.

---

## Finding-by-finding disposition

| ID | Original severity | Status | Evidence in PR #2 | Residual |
|---|---|---|---|---|
| **B-01** — no time budget; pre-build process cannot fit the window | Blocking | **PARTIALLY RESOLVED** | Deadline stated, subject to a Stage 0 reconfirmation (line 6). Budget table, 3.5 h minimum buffer, overrun rule, and parallel de-risking (lines 95–132). Review tiers (lines 136–154; WF lines 30–31, 51–69). Single independent claims red team in Stage 10 (line 154; WF line 75). Buffer closed to feature work (WF rule 14). One PR per stage plus Tier B review is an acceptable alternative to collapsing Stages 0–6. | **R-1 (Major).** The budget is relative to an undefined checkpoint and is not anchored to clock times. There is no rule for Stage 8/9 overruns. See below. |
| **B-02** — held-out/external evidence protected only against threshold tuning | Blocking | **RESOLVED** | Split manifest, class map, operating-point rule, metric list, and numerical criteria committed before readout (lines 457–465, 674–685). Group-aware splitting or near-duplicate control is mandatory (lines 467–471). The one-shot rule covers all design choices, including fallback rung (lines 473–487; WF rule 13). Burned-partition rule (lines 489–494). External dataset pre-designated and quarantined, with re-designation only before any readout (lines 421–425). Development uses validation data only (lines 687–695). | Minor wording inconsistency on when the manifest is committed. See R-2. |
| **M-01** — "no visible rust" vs "healthy"; other-disease routing | Major | **RESOLVED** | Label semantics (lines 330–340). Other disease → `not sure`. Mixed infection → `visible rust`. "No visible rust" is not "healthy". Specificity is now measured on clearly healthy images, and the other-disease outcome distribution is reported (lines 506, 509). | — |
| **M-02** — Stage 7 gate and fallback ladder lack pre-registered criteria and triggers | Major | **RESOLVED** | Stage 4 must set a maximum confident-miss rate, a coverage floor, a byte budget, a latency budget, a target device, and a kill time, all before readout (lines 528–538, 544). Ordered learned-AI ladder, Rungs A–C (lines 568–580). Each rung must define its trigger and the claim reduction it implies, approved in Stage 5 (lines 586–592, 609). Handcrafted rules are diagnostic only (line 584). Honest outcome if nothing qualifies (line 745). Stage 7 gate is tied to the pre-registered criteria (lines 737–743). Deferring the numbers to the Tier A Stage 4 gate is appropriate. | — |
| **M-03** — browser runtime tested last | Major | **RESOLVED** | Smoke test is the first step in Stage 7 and comes before training (lines 649–662). Allowed as parallel de-risking (lines 123–132). Build order step 1 (line 596). | — |
| **M-04** — metrics insufficient for an abstaining classifier; no uncertainty | Major | **RESOLVED** | Mandatory core includes coverage overall and by class, selective accuracy/risk, confident-miss rate, abstention rate, other-disease distribution, and 95% intervals where sample size permits (lines 496–512). The same core applies to external readouts (line 512). | — |
| **M-05** — OOD controls rhetorical; challenge tests open to cherry-picking | Major | **RESOLVED** | A threshold is not assumed to detect OOD inputs. The challenge set must be frozen and licensed, with recorded counts, all cases reported, and a pre-registered `not sure` target. A user pre-check is additive only, and the claim is downgraded if no measured guard exists (lines 514–526). Stage 9 reports every result (lines 801–810). | — |
| **M-06** — offline proof and target device undefined | Major | **RESOLVED** | Stage 4 names the device or device class and the browser, and must state any emulation-only limitation (lines 528–540). Seven-step offline protocol with screen recording, network evidence, and cache size (lines 821–838). Stage 8 gate is bound to the defined target (line 787). | — |
| **M-07** — human authority specified but not verified | Major | **RESOLVED** | Separate `ai_proposal` and `human_disposition` fields. Enumerated `confirmed_by_role`, declared self-reported. No-prefill rule, `not sure` resolution rule, and human-only summary (lines 378–402). Reflected in the MVP component list (line 766) and the Stage 8 gate (line 787). Four Stage 9 authority tests (lines 812–819). | — |
| **M-08** — license gate incomplete; no stop condition | Major | **RESOLVED** | Verdict required for every dataset, encoder/weights, and runtime. It covers training use, redistribution of derived weights through the repo and live demo, attribution, and compatibility with the repository license. An incompatible or unclear license forces a stop or swap before any held-out evidence is opened (lines 440–455). Executed in 7A (line 670). | A Rung B coverage gap. See R-3. |
| **M-09** — stage artifacts risk implying an unsupported sequence | Major | **RESOLVED** | Stage artifacts are framed as decision records (line 17; WF line 92). Stage 2 is reframed as a comparison and elimination record (lines 259–264). The unsupported past-tense owner authorization is removed; Stage 6 now records the greenlight (lines 621–637). Stage order is stated as a dependency structure (line 1008). Sourced facts are separated from inference (line 245; WF rule 7). This meets the original repair; no chronology commentary is required. | — |
| **M-10** — Stage 0 compliance does not propagate | Major | **SUPERSEDED BY ACCEPTABLE ALTERNATIVE** | Stage 0 produces a single checklist mapping each requirement to its source, enforcing stage, and evidence (lines 158–217). Stage 6 records the recheck and the owner's greenlight, without recreating Stage 0 (lines 615–639). Rechecks also happen at the start of Stage 7 and at Stage 10 (lines 628–631). The originality, assistance, license, and disclosure rule binds every submitted asset (line 633). | Minor redundancy between the Stage 6 recheck and the Stage 7-start recheck. See R-4. |
| **M-11** — submission mechanics listed but not protected | Major | **RESOLVED** | Stage 0 video/submission matrix (lines 183, 199–206). Early live shell deployment (line 733). Before the buffer: demo deployed, video matrix resolved, forms dry-run, links tested (lines 941–948). Early editable submission (line 950). Receipt evidence is part of the Stage 10 gate (lines 969–986). | — |
| **m-01** — qualitative pre-build gates | Minor | **RESOLVED** | Gates require the listed outputs, a recorded owner decision, and a merged PR (e.g., lines 208–215, 251–253, 302–304; WF lines 77–84). | — |
| **m-02** — inconsistent status vocabulary | Minor | **RESOLVED** | Fixed four-value vocabulary (lines 21–28), applied in the status table (lines 1012–1027). The unexplained qualifier is removed. | — |
| **m-03** — claims ledger location; duplicate tables | Minor | **RESOLVED** | One public evidence + claims table with a tag column (lines 850–879). | — |
| **m-04** — image retention, metadata, deletion scope | Minor | **RESOLVED** | No raw-image retention by default. Metadata stripped on ingest. App caches hold no user images. Deletion scope defined. Export must be explicit (lines 404–411). Tested in Stage 9 (line 846). | — |
| **m-05** — jargon and judge readability | Minor | **RESOLVED** | The public route is now named "RoyaCheck Offline" (line 318). The README opens with a one-screen judge summary answering the judge-facing questions (lines 913–939). | — |
| **m-06** — inconsistent exclusion lists | Minor | **RESOLVED** | One canonical list, including treatment plans, referenced by later stages (lines 55–74). | — |

---

## Residual required repairs

### R-1 — Anchor the competition-clock budget to clock times (Major; residual of B-01)

1. **Exact residual problem:**
   - The budget is "maximum budget from the current roadmap checkpoint" (line 99), but that checkpoint is never defined.
   - The six blocks add up to 17.5 hours against a fixed deadline (line 6), with no slack and no time allocated for accepting the roadmap itself.
   - The table does not state a clock time at which the buffer starts. It does not say which block gives up time when an earlier block overruns.
   - The overrun rule (lines 112–121; WF line 86) covers only documentation stages. Stage 7 has a kill time (line 538), but Stages 8 and 9 have no time-box consequence.
   - Closing a stage requires a merged PR (WF lines 79–84). The roadmap does not say whether the next stage may start once the owner decision is recorded but before the merge. This adds serial waiting on one person across 11 stage PRs.

   Read sequentially, the table lets late-running work push the buffer toward or past the deadline. Workflow rule 14 says feature work stops when the buffer begins, but nothing states when that is.
2. **Severity:** Major. This materially weakens solo execution feasibility and submission protection. It is not blocking, because the deadline, buffer size, and stop-feature-work rule are all present; only the anchoring is missing.
3. **Exact evidence from PR #2:**
   - `ROADMAP.md` line 6 (deadline), lines 99–110 (relative budget table), lines 112–121 (documentation-only overrun rule), line 538 (Stage 7 kill time only).
   - `PROJECT_WORKFLOW.md` lines 48–49 (rule 14) and lines 77–86 (closure rule).
4. **Narrowest remaining repair:**
   - **(a)** Add a "latest end time (ET)" column to the budget table, computed back from the Stage 0-confirmed deadline. State the buffer start as a fixed clock time: deadline minus 3.5 hours, which is 05:30 ET on 4 October if the stated deadline is confirmed.
   - **(b)** Add one sentence: an overrun in any block (Stages 0–9) shrinks the next non-buffer block or triggers the fallback ladder or claim reduction. It never shrinks the buffer. At the Stage 8 and Stage 9 end times, the candidate is frozen as it stands and remaining gaps are recorded as limitations.
   - **(c)** Add one sentence: work on stage N+1 may begin once stage N's owner decision is recorded, with the merge following. The exceptions are the hard gates, which must stay strict: Stage 4 pre-registration before any readout, and the Stage 6 greenlight before definitive implementation.

### R-2 — Make the timing of the split manifest consistent (Minor; new, introduced by PR #2)

1. **Exact residual problem:** The Stage 4 gate requires the pre-registration artifacts, including the split manifest, to be committed and owner-approved (lines 459–465, 544). But the data is acquired in 7A, and the manifest is committed in 7B "before any final readout" (lines 664–685). Read literally, Stage 4 cannot close until Stage 7A has run. "Before any final readout" is also weaker than the 7B → 7C ordering implies. The manifest should be fixed before any training or validation result is seen, so the split cannot be redrawn on the basis of validation results.
2. **Severity:** Minor. The integrity condition that matters is already met in both places: commit before readout.
3. **Exact evidence from PR #2:** Lines 457–465, 542–544, 664–685.
4. **Narrowest remaining repair:** In Stage 4, pre-register the *split procedure*: grouping, near-duplicate rule, ratios, and seed. In 7B, commit the generated manifest *before any training or validation result is produced*.

### R-3 — Extend the license verdict to derived reference data (Minor; new)

1. **Exact residual problem:** Fallback Rung B, "embedding/reference similarity" (line 576), would ship a reference set derived from dataset images to the browser. The license gate covers "redistribution of derived weights" (line 451) but not derived embeddings or reference sets.
2. **Severity:** Minor. It matters only if Rung B is reached.
3. **Exact evidence from PR #2:** Lines 451, 576.
4. **Narrowest remaining repair:** Change line 451 to "redistribution of derived weights, embeddings, or reference sets through the public repo/live demo".

### R-4 — Remove the duplicate back-to-back compliance recheck (Minor; residual of M-10)

1. **Exact residual problem:** Stage 6 rechecks the compliance checklist "immediately before definitive implementation" (line 619). The roadmap then requires the same recheck "at the start of Stage 7" (line 630). Under the time budget, these are effectively the same moment.
2. **Severity:** Minor. This is a small process cost with no assurance gain.
3. **Exact evidence from PR #2:** Lines 619, 628–631.
4. **Narrowest remaining repair:** State that the Stage 6 recheck satisfies the Stage 7-start recheck unless official materials change in between.

R-4 is counted in the three minor residuals together with R-2 and R-3. R-1 is the single major residual.

---

## Final audit conclusion

PR #2 resolves both original blocking findings at their core. It resolves or acceptably replaces all 11 major findings and all 6 minor findings. The two owner-locked process choices are acceptable alternatives that keep the intended assurance:

- one PR per stage, with risk-tiered review;
- a distinct Stage 6 recheck and greenlight.

The repaired roadmap is **fit to become the project process spine once R-1 is applied**. Anchoring the budget to clock times, with a fixed buffer start and an overrun rule covering every stage, is the remaining control that turns the time protection from stated intent into an enforceable schedule. R-2 to R-4 are wording repairs and can ride the same edit.

This re-audit does not modify PR #2. It does not resolve its own findings. It does not authorize a merge; reconciliation of R-1 to R-4 and final disposition remain with the builder and the owner.
