# Stage 3 Audit Reconciliation — RoyaCheck Offline

**Audit source:** `docs/audits/stage-03/STAGE_03_AUDIT.md`  
**Audit verdict:** PASS WITH MAJOR REPAIRS  
**Findings:** 0 blocking / 3 major / 7 minor  
**Owner authorization:** José Antonio authorized one bounded reconciliation of M1–M3 and m1–m7 on 2026-10-03.  
**Stage status:** Closed — owner approved (PR #11); guarded merge authorized.

---

## 1. Reconciliation standard

The audit found that none of the owner-approved D3-01 through D3-15 decisions required reversal and that Stages 0–2 did not need reopening.

This reconciliation therefore applies only the narrow repairs authorized by the owner. It does not make Stage 4 decisions and does not close or merge Stage 3.

---

## 2. Major findings

| Finding | Disposition | Repair applied | Owner impact | Residual |
|---|---|---|---|---|
| **M1 — in-person handoff co-presence unstated** | **Accepted** | D3-07 now states that handoff occurs only at a **qualifying extension encounter when the household smartphone is physically present**. The co-presence condition is explicitly a project assumption. Noor's daughter may operate the device when present; alternatively the extension officer may operate it at Noor's request with the screen visible to Noor. The record explicitly refuses to assume weekday smartphone availability and states that a `Review first` observation may wait until the next qualifying encounter. The value claim is prepared/prioritized review, not faster extension availability. The integrated workflow and Stage 4 carry-forward list use the same condition. | José Antonio explicitly approved this clarification. | Stage 4/8 must depict the co-presence condition honestly. |
| **M2 — Lugisu / Lumasaaba naming, dialect and orthography chain** | **Accepted with evidence clarification** | The Stage 3 source record now distinguishes what the official sources actually establish. NCDC's *Lugisu Orthography 2024* says on PDF p. 6 that Lugisu is spoken by the Bagisu of Bugisu / Mount Elgon and is the first standardized Lugisu orthography introduced to the Bagisu community. Its dialect appendix (PDF pp. 83–92) compares Ludadili, Luhalasi, Lufumbo and Lumasaaba forms, but it does not establish the correct Bududa variety. UBOS Final Report Volume I, PDF p. 5, lists Lumasaba among the 20 questionnaire-translation languages. D3-12 therefore retains **Lugisu** as the owner-approved Bugisu/Mount Elgon language choice while requiring independent human validation by a reader familiar with the **Bududa / south-Bugisu target variety and the orthographic convention actually used**. If validation indicates that the public label/orthography should instead be Lumasaaba, the change returns to the owner. | José Antonio explicitly approved this clarification and the return-to-owner trigger. | Human validation remains a later prerequisite before final public strings. |
| **M3 — organizer value sentence not instantiated** | **Accepted** | Added the owner-approved organizer sentence: “Because of this tool, Noor will bring a prioritized, human-confirmed coffee-leaf observation to the next qualifying extension encounter when the household smartphone is available that she would otherwise bring without the same structured, uncertainty-labelled visual triage; we know because the prototype will report pre-registered evidence on visual routing/abstention, human-authority correctness, offline completion, and review-card generation.” The record explicitly labels this as a prototype-level claim structure/ceiling and requires the final evidence clause to be replaced or supplemented with actual later-stage measurements. | José Antonio explicitly approved the sentence and its claim ceiling. | Later measured evidence must replace/supplement the prospective evidence clause before final submission. |

---

## 3. Minor findings

| Finding | Disposition | Repair applied | Residual |
|---|---|---|---|
| **m1 — reviewer-role labelling and cooperative wording** | **Accepted** | D3-06 now states that using the extension officer as the RoyaCheck reviewer is a **project assumption grounded in the case-supported extension role**. Active ROADMAP references to “extension/cooperative handoff” were changed to “extension handoff”. | None at Stage 3. |
| **m2 — retained-image consent on shared device** | **Accepted** | D3-09 now makes image retention an explicit **Noor opt-in at save time**, separate from later display consent. The daughter's assistance does not substitute for Noor's consent. If no image is retained, review is text-only. Cascading deletion remains required. | Shared-device visibility mechanics remain Stage 4. |
| **m3 — `detected` / `monitor` wording** | **Accepted** | `visible rust` now says RoyaCheck **proposes that the image shows** visible evidence consistent with rust. `Monitor` is defined as Noor's ordinary continued observation with optional later weekend recapture; it does not imply reminders, surveillance or scheduling. | None. |
| **m4 — strongest simple baseline omitted** | **Accepted** | D3-01 now identifies a printed/laminated coffee-rust symptom guide as the strongest simple baseline. Any measurable advantage over that guide is explicitly deferred to later evaluation rather than claimed in Stage 3. | Later evaluation must test or bound the AI-vs-guide value proposition. |
| **m5 — GSMA Uganda URL inconsistency** | **Accepted** | Replaced the `...connecting-4-million...` URL with the canonical `...connect-4-million...` form used by the surfaced GSMA result. | Link availability remains subject to ordinary web availability. |
| **m6 — IICA Americas source unresolved against Uganda anchor** | **Accepted** | Stage 3 now states that the IICA 2019 Americas source is retained only as **general coffee-leaf-rust context**, not evidence for the Uganda/Bugisu anchor. | No Stage 1 reopening required. |
| **m7 — binding figures lack page/table locators** | **Accepted** | Added exact locators: GSMA SOMIC 2025 *Trends in Mobile Internet Connectivity*, **Figure 15, PDF p. 31**, for Uganda smartphone ownership (**33% urban / 20% rural**, GSMA Consumer Survey 2024); UBOS NPHC 2024 Final Report Volume I, **PDF p. 5**, for the 20 questionnaire-translation languages including Lumasaba. NCDC locators are also recorded for the language evidence. | Stage 4 must bind only a verified figure and keep the exact citation. |

---

## 4. Stage 4 dependencies preserved, not decided

This reconciliation does **not** choose or lock:

- a model;
- a definitive dataset;
- runtime;
- thresholds;
- architecture;
- training method;
- held-out/test procedure;
- exact leaf-side/orientation rule;
- implementation/UI;
- deployment;
- video/submission content.

The following dependencies are merely carried forward:

- verify development-data acquisition conditions against the accepted on-plant workflow;
- cover both with-backing-card and without-backing-card conditions if both remain allowed;
- ensure any leaf-side rule is ergonomically feasible on an attached leaf;
- pre-register a confident-miss control supporting the safety of `no visible rust → Record and monitor`;
- keep `ai_score` out of the owner-approved reviewer-visible payload unless the owner later changes that decision;
- define shared-device visibility/deletion mechanics;
- use a human validator familiar with the targeted Bududa / south-Bugisu variety and chosen orthographic convention;
- bind only an exactly cited common-data figure to a Stage 4 design parameter.

---

## 5. Audit-artifact preservation

Claude's audit was copied verbatim from:

`claude/lucid-curie-dr3x4d:docs/audits/stage-03/STAGE_03_AUDIT.md`

into the PR #11 working branch at:

`docs/audits/stage-03/STAGE_03_AUDIT.md`

No audited file was modified as part of Claude's own audit commit.

---

## 6. Closure disposition

The Stage 3 audit and narrow confirmation are fully reconciled.

Claude's narrow confirmation verified all 10 requested repairs, identified no new blocking or major finding, and stated that no additional Stage 3 audit is required after the N1 traceability entry. N1 is recorded in §7 below with explicit owner acknowledgement.

José Antonio explicitly authorized Stage 3 closure and the guarded merge sequence for PR #11 on 2026-10-03.

**Current status: Closed — owner approved (PR #11); guarded merge authorized.**

Stage 4 remains unauthorized until PR #11 is successfully merged and a separate Stage 4 owner-control authorization is granted.

---

## 7. Narrow confirmation traceability

Claude's narrow confirmation returned **PASS WITH MINOR REPAIRS** at PR #11 head `8f0b72cdb69792bc5b4cec9f698fd2917ed573ff`.

Confirmation result:

- all 10 requested repairs (M1–M3 and m1–m7) were confirmed;
- 0 new blocking findings;
- 0 new major findings;
- 1 new minor finding, **N1**, limited to record traceability;
- no additional Claude audit is required before Stage 3 closure review after N1 is recorded;
- nothing requires reopening Stages 0–2.

### N1 — D3-10 action-route terminology traceability

During the authorized audit-repair pass, D3-10's reviewer-visible payload bullet was renamed from **"review-priority route"** to **"action route (`Review first` / `Retake or request review` / `Record and monitor`)"**.

This was a **terminology-only consistency correction** aligning D3-10 with the already owner-approved D3-14 action-based routing. It did **not** change the information visible to the reviewer, the payload boundary, or the substance of D3-10.

José Antonio explicitly acknowledged and approved this neutral traceability correction on 2026-10-03.

Claude's narrow confirmation is preserved verbatim at:

`docs/audits/stage-03/STAGE_03_CONFIRMATION.md`

The N1 confirmation finding is reconciled. Stage 3 closure and the guarded PR #11 merge are explicitly owner-authorized; Stage 4 remains subject to separate explicit owner authorization after successful merge.

