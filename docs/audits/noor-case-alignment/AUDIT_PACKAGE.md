# Independent Audit Package — Annex B / Noor Case Alignment

**Audit type:** Independent adversarial case-alignment audit  
**Audit tier:** Tier A  
**Repository:** `SplitzHappen/RoyaCheck-Offline`  
**Audit branch:** `chatgpt/noor-case-alignment-repair`  
**Purpose:** Determine whether the project foundation is now a faithful, internally consistent response to the official Agriculture Annex B case before Stage 3 product lock and Stage 4 technical/evaluation pre-registration.

---

## 1. Why this audit exists

The project originally incorporated broader Agriculture research and an earlier coffee-rust concept frame.

After the official participant Agriculture brief was re-read against the public repository, the owner directed a full correction so that:

> **Annex B / Noor is the controlling problem specification, and all generic research is subordinate to it.**

The owner has explicitly required this independent audit before further building.

Do not assume that the current selected route deserves to survive. If the repaired documents still fail the official case, identify that as a blocker or major finding.

---

## 2. Primary source to compare against

The auditor should read the original:

> **Small AI for Development Challenge Brief — pp. 5–11 and Annex B, pp. 16–17**

If the original PDF is available, treat it as authoritative over any repository paraphrase.

Key source-derived facts that the repository is expected to preserve include:

- Noor is a smallholder farmer with coffee, maize, and beans on a two-hectare farm.
- Her coffee yields have fallen and she does not know why.
- Extension access is infrequent.
- She lacks an independent price reference at harvest.
- Extension systems face staff shortages, manual data collection, and delayed alerts.
- Missing farmer registries, phones, or trust can be binding implementation constraints.
- Her own phone is used for calls/messages/mobile money; the household smartphone belongs to her daughter and Noor uses it with help when available.
- There is no household Wi-Fi; data bundles are purchased as needed.
- Noor is generally on the slope while the phone is at the house.
- Noor speaks a local language and a national language, but the brief does not name them.
- The challenge is to help Noor make, communicate, or act on **one better agricultural decision**.
- Allowed examples include crop/post-harvest identification, timing, localized advisory, field-observation documentation, quality/value addition, and pricing/market/extension next steps.
- The core feature must work offline, run on a device the user already has, use small model files, and show at least one named local-language interaction.
- Human final authority and fail-safe uncertainty are required.
- Provided datasets are suggestions; teams must cite sources/licenses/sizes/coverage limits.
- The data guidance has both common and sector layers.
- BRACOL is listed as directly relevant to Noor’s coffee crop.
- The brief distinguishes controlled/studio crop imagery from field imagery and expects teams to be honest about the gap.
- The 2–5 minute challenge video has specified content requirements.
- The judging rubric has weighted criteria plus a responsible-AI/data/safety pass/fail gate.

---

## 3. Files under audit

Review the complete current contents of:

1. `ROADMAP.md`
2. `docs/PROJECT_WORKFLOW.md`
3. `docs/stages/00_rules/ANNEX_B_CASE_CONTRACT.md`
4. `docs/stages/00_rules/STAGE_00_COMPLIANCE_CHECKLIST.md`
5. `docs/stages/01_problem_research/STAGE_01_AGRICULTURE_PROBLEM_RESEARCH.md`
6. `docs/stages/02_concept_comparison/STAGE_02_CONCEPT_COMPARISON.md`
7. this audit package

Also inspect the PR changed-file scope and flag unexpected files.

---

## 4. Current selected route

The repaired foundation currently selects:

> **RoyaCheck Offline — a small, offline-capable coffee-leaf observation aid that helps Noor structure a suspicious leaf observation and prepare it for human review, with explicit uncertainty and human final authority.**

Current case-level decision:

> **Should this suspicious leaf observation be documented and flagged for human extension/cooperative review rather than treated as a confident answer or left only to memory?**

The AI contribution is intended to be a bounded visual proposal:

- visible rust;
- no visible rust;
- not sure.

The selected route explicitly does **not** claim to solve:

- the overall cause of Noor’s yield decline;
- the price-reference/bargaining problem;
- farmer-registry infrastructure;
- extension staffing;
- treatment planning;
- pesticide/fungicide/dose decisions.

---

## 5. Required audit questions

### A. 1:1 case fidelity

1. Does every major project claim remain traceable to Annex B?
2. Is Noor clearly the primary challenge user?
3. Does the selected route genuinely help Noor make, communicate, or act on one better agricultural decision?
4. Is the selected decision sufficiently meaningful, or has the project reduced the challenge to record-keeping theater?
5. Is the project accidentally implying that coffee rust explains the falling yields?
6. Are the price branch and registry/infrastructure constraints acknowledged honestly?

### B. Device/workflow realism

7. Does the roadmap respect the fact that smartphone access is shared/intermittent and the phone is not assumed to be on the slope all day?
8. Is the offline/store-and-forward story compatible with that user-day constraint?
9. Is the planned browser-local approach plausible without silently assuming a device Noor does not actually have?

### C. AI necessity

10. Is image interpretation a defensible learned-AI task in this case?
11. Is the AI contribution materially different from a form, spreadsheet, search, or symptom guide?
12. Is the selected route better justified than the explicitly considered price/advisory/timing/quality/registry alternatives for this hackathon?

### D. Data grounding

13. Does the plan correctly use BRACOL as task-relevant evidence without treating it as field validation?
14. Does the roadmap honor the common + sector data-layer expectation?
15. Is the proposed common-data/device-context approach legitimate and clearly separated from Noor’s fictional location?
16. Are domain shift and field-image limitations strong enough?

### E. Language/inclusion

17. Does the plan handle the fact that Noor’s languages are unnamed without inventing a fictional-country fact?
18. Is it clear that Stage 3 must choose a real named prototype localization language?
19. Is the less-supported-language limitation planned honestly?

### F. Responsible AI and authority

20. Are `visible rust`, `no visible rust`, and `not sure` bounded safely?
21. Is `no visible rust` prevented from meaning “healthy”?
22. Is human final authority unambiguous?
23. Is uncertainty a first-class fail-safe rather than cosmetic?
24. Are treatment/autonomous-action exclusions sufficient for the pass/fail safety gate?

### G. Judging and deliverables

25. Are the official judging weights represented correctly and used to drive later stages?
26. Does the roadmap prepare every required component of the 2–5 minute challenge video?
27. Is the provisional user/action/time/evidence value statement honest and demonstrable?
28. Are scalability/replicability claims conditioned on registry/device/trust/institutional prerequisites?

### H. Stage architecture

29. Is reopening the roadmap and Stages 0–2 sufficient, or must another already-created artifact be corrected before Stage 3?
30. Are Stage 3 and Stage 4 gates now specific enough to prevent renewed case drift?
31. Does any public document still contain stale country-centric, technician-first, generic-Agriculture, or pre-Annex-B logic that materially conflicts with the repaired foundation?
32. Is there any blocker to proceeding to Stage 3 after reconciliation?

---

## 6. Severity standard

Classify every finding as:

### BLOCKING

The project should not proceed to Stage 3 because the foundation violates or materially misreads the official case/rules, creates a disqualifying/safety problem, or selects a route that cannot credibly answer the challenge.

### MAJOR

A material mismatch that must be repaired before the foundation is considered reliable, but does not necessarily invalidate the selected route.

### MINOR

A consistency, clarity, traceability, or documentation improvement that does not materially change the project decision.

Do not create findings merely to fill categories.

---

## 7. Required verdict format

Return:

1. **Verdict:** PASS / PASS WITH MINOR REPAIRS / FAIL-BLOCKED
2. **Counts:** blockers / majors / minors
3. **Blocking findings**
4. **Major findings**
5. **Minor findings**
6. **Specific file/section repair instructions**
7. **Route assessment:** whether RoyaCheck remains a defensible 1:1 response to Annex B
8. **Stage assessment:** whether roadmap + Stages 0–2 can be re-closed after repairs
9. **Explicit answer:** whether Stage 3 may begin after reconciliation
10. **Any claim or case-language that should never appear in the final README/video**

Be adversarial. Prefer a real blocker over politeness if the route is not actually aligned.

---

## 8. Builder boundary during audit

While this audit is pending:

- do not begin Stage 3;
- do not choose the final model, dataset split, runtime, thresholds, or acceptance metrics;
- do not train;
- do not inspect held-out/test evidence;
- do not build UI;
- do not deploy;
- do not create submission videos.

Only audit reconciliation and case-foundation repairs are allowed.
