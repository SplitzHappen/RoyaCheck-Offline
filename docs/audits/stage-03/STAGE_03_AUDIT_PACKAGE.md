# Stage 3 Independent Audit Package — Product Scope and Route Lock

## Purpose

Independently audit the owner-accepted Stage 3 product-scope decisions for RoyaCheck Offline before Stage 3 is closed or PR #11 is merged.

This is a **Stage 3 product/governance audit**, not a Stage 4 technical-design exercise.

## Repository target

Repository: `SplitzHappen/RoyaCheck-Offline`

PR: `#11 — Stage 3: propose product scope and route lock`

Branch: `chatgpt/stage-03-product-route-lock`

Read the current branch state, especially:

1. `docs/stages/03_product_scope/STAGE_03_PRODUCT_ROUTE_LOCK.md`
2. `ROADMAP.md`
3. `docs/stages/00_rules/ANNEX_B_CASE_CONTRACT.md`
4. `docs/stages/01_problem_research/STAGE_01_AGRICULTURE_PROBLEM_RESEARCH.md`
5. `docs/stages/02_concept_comparison/STAGE_02_CONCEPT_COMPARISON.md`
6. `docs/audits/noor-case-alignment/POST_RECONCILIATION_AUDIT.md`
7. `docs/audits/noor-case-alignment/RECONCILIATION.md`

## Owner-approved Stage 3 decisions under audit

José Antonio has explicitly accepted D3-01 through D3-15. Treat them as owner decisions to audit for coherence, case fidelity, safety, evidence fit, and downstream feasibility—not as invitations to redesign the product unless a material defect requires it.

The accepted package locks:

- one better agricultural decision as **human-review attention triage**, not severity/treatment/yield;
- Noor as final farmer decision-maker, with Noor's daughter assisting with the smartphone on weekends;
- weekend on-slope, on-plant capture without requiring leaf detachment/preservation, with an ordinary plain backing card/sheet where practical;
- possible multi-day delay until the next weekend session, while evaluating the current leaf at capture time;
- no required role for Noor's own calls/messages/mobile-money phone in the core loop;
- extension officer as the prototype reviewer because that is the reviewer role supported by the case;
- user-initiated, in-person, on-device review card as the MVP handoff;
- no image export/transmission; optional local image reveal only with explicit consent;
- deletion of the observation also deletes its retained image;
- a minimal reviewer-visible payload with no geolocation/treatment/yield/price/profile overreach;
- **Bududa / Bugisu, Mount Elgon, Uganda** as a real-world implementation evidence anchor only—not Noor's location/nationality;
- **Lugisu** as the named local-language text interaction, using a small fixed-string language pack with independent human verification before submission;
- a conservative less-supported-language position: no localized-usability claim without validated critical strings;
- action-based routing:
  - `visible rust` → **Review first**
  - `not sure` → **Retake or request review**
  - `no visible rust` → **Record and monitor**, with review still available
- explicit non-solutions: yield cause, market-price bargaining/reference, farmer-registry creation, extension staffing/capacity, and treatment selection.

## External evidence supporting the anchor

The branch cites these sources. Verify the factual propositions that matter to Stage 3, preferably from the cited primary/authoritative sources:

1. Uganda Ministry of Agriculture, Animal Industry and Fisheries, *Coffee Manual* (2026)  
   https://www.agriculture.go.ug/wp-content/uploads/2026/01/coffee_manual.pdf

2. World Bank, *Making Farming More Productive and Profitable for Ugandan Farmers* (2018)  
   https://www.worldbank.org/en/country/uganda/publication/making-farming-more-productive-and-profitable-for-ugandan-farmers

3. Uganda National Curriculum Development Centre, *Lugisu Orthography 2024*  
   https://ncdc.go.ug/wp-content/uploads/2025/06/Lugisu-Orthography-2024.6.2.25.Web-File-1.pdf

4. Uganda Bureau of Statistics, *National Population and Housing Census 2024 — Final Report, Volume I*  
   https://statistics.ubos.org/nphc/reports/National-Population-and-Housing-Census-2024-Final-Report-Volume-1-Main.pdf

5. GSMA, *The State of Mobile Internet Connectivity 2025 — Trends in Mobile Internet Connectivity*  
   https://www.gsma.com/somic/wp-content/uploads/2025/09/The-State-of-Mobile-Internet-Connectivity-2025-Trends-in-Mobile-Internet-Connectivity.pdf

6. GSMA, Uganda digital-transformation report/release (2025)  
   https://www.gsma.com/newsroom/press-release/gsma-unveils-latest-report-showing-digital-policy-reforms-could-add-ugx-14-6-trillion-to-ugandas-gdp-connect-4-million-more-citizens-by-2030/

Key factual propositions to verify:

- Arabica coffee is grown in highland areas on the slopes of Mount Elgon;
- Bududa district on the Mount Elgon ranges has documented coffee farmers;
- Lugisu is spoken by the Bagisu of Bugisu / Mount Elgon and has a standardized 2024 orthography;
- Uganda's 2024 census questionnaire was translated into Lumasaba among local languages;
- GSMA Consumer Survey 2024 reports Uganda smartphone ownership of 33% urban / 20% rural;
- Uganda has high 4G population coverage while a large mobile-internet usage gap persists, with affordability, energy, and digital-skills barriers.

Do **not** infer that Noor is Ugandan, Bagisu, Lugisu-speaking, or located in Bududa.

## Required audit questions

### A. One-better-decision integrity

Does D3-01 genuinely satisfy the challenge's requirement for one better agricultural decision?

Test whether:

- the AI changes a real next action rather than merely labeling or recording;
- the decision is still proximal and demonstrable;
- it does not silently become disease severity, diagnosis, treatment, yield, income, or loss estimation;
- the claimed AI value is stronger than a photo/form-only baseline.

### B. User-day realism

Test whether D3-02 through D3-05 remain faithful to the official case:

- Noor remains primary farmer/final decision-maker;
- Noor's daughter is an assistive smartphone operator, not the agronomic authority;
- weekday smartphone access is not invented;
- the on-slope weekend capture does not contradict the case;
- the possible observation-to-capture delay is honest;
- no unsupported role is assigned to Noor's own phone.

### C. Capture-workflow safety and evidence burden

Test D3-03 critically.

Does on-plant capture with an ordinary backing card:

- avoid inventing a medically/agronomically unsafe leaf-handling instruction;
- remain plausible for Noor's device-access story;
- avoid silently assuming dataset-level field robustness;
- preserve Stage 4's responsibility to set leaf-side/orientation guidance only after data properties are verified?

If this choice creates a **material Stage 4 feasibility dependency**, identify it without choosing a dataset or model.

### D. Human reviewer and handoff integrity

Test D3-06 through D3-10:

- is "extension officer" genuinely the case-supported reviewer role?
- does in-person, on-device review remain a complete enough handoff to count as an actionable next step?
- does the design avoid invented messaging endpoints/institutional integrations?
- is image consent meaningful rather than cosmetic?
- does the reviewer-visible payload preserve human authority and privacy?
- is deletion behavior coherent with local image retention?

### E. Evidence-anchor coherence

Test D3-11.

Is Bududa / Bugisu / Mount Elgon a coherent single anchor for:

- Arabica coffee context;
- rural smallholder context;
- local-language reasoning;
- smartphone/connectivity constraints?

Flag any factual mismatch, overgeneralization, or evidence-chain break.

The anchor need not reproduce Noor's fictional case exactly. It must only provide a credible real-world context for implementation constraints while remaining explicitly separate from Noor.

### F. Language/localization integrity

Test D3-12 and D3-13:

- is Lugisu a defensible **local/home-language** choice for the anchor rather than merely a national/vehicular language?
- is a fixed-string text pack sufficient to satisfy the named-local-language interaction requirement if the critical strings are independently human-verified?
- does the current language plan avoid pretending machine-generated translations are validated?
- is the less-supported-language answer honest and technically coherent?

Do not translate the UI or choose specific Lugisu strings in this audit.

### G. Label-to-action routing

Test D3-14 carefully.

Does the action-based routing create materially different next actions without implying unsupported severity?

Check:

- `visible rust → Review first`
- `not sure → Retake or request review`
- `no visible rust → Record and monitor`

Confirm whether:

- `not sure` correctly separates fixable image-quality uncertainty from acceptable-image/OOD/unsupported-condition uncertainty;
- `no visible rust` never becomes healthy/all-clear/no-disease;
- human review remains available after `no visible rust`;
- the route is about scarce human-review attention rather than agronomic urgency;
- only the human disposition becomes formal.

### H. Explicit non-solutions / claim ceiling

Check D3-15 and the Contract §4 claims ceiling for consistency.

The Stage 3 package must not imply it solves:

- the cause of falling yields;
- treatment;
- market-price bargaining/reference;
- farmer registry;
- extension staffing/capacity;
- field validation;
- Noor's real location/nationality/language.

### I. Stage-boundary integrity

Confirm that Stage 3 has **not** prematurely chosen:

- model;
- definitive dataset;
- runtime;
- threshold;
- architecture;
- exact leaf-side/orientation rule;
- training method;
- held-out/test procedure;
- implementation/UI details;
- deployment;
- video/submission content.

Distinguish legitimate product-scope decisions from technical choices that belong to Stage 4 or later.

## Review severity

Use:

- **Blocking** — Stage 3 cannot defensibly close.
- **Major** — material problem in case fidelity, safety, evidence grounding, AI necessity, or downstream feasibility.
- **Minor** — precision/traceability/documentation issue that does not change the accepted route.

Do not inflate optional improvements into findings.

## Required output

# Stage 3 Audit — RoyaCheck Offline

## Verdict

Choose exactly one:

- PASS
- PASS WITH MINOR REPAIRS
- PASS WITH MAJOR REPAIRS
- FAIL / BLOCKED

Then state:

- Blocking findings: N
- Major findings: N
- Minor findings: N

## Executive assessment

Maximum 8 concise paragraphs.

## Owner-decision verification matrix

For D3-01 through D3-15, give:

- **Status:** Confirmed / Confirmed with minor caveat / Not confirmed
- **Evidence**
- **Assessment**
- **Required repair**, only if needed

## Blocking findings

If none, write `None.`

## Major findings

If none, write `None.`

## Minor findings

If none, write `None.`

## Cross-decision coherence review

Assess whether the 15 accepted choices form one realistic end-to-end Noor workflow.

## Evidence-anchor and language review

Assess factual support and whether the anchor is honestly separated from Noor.

## AI-value / simpler-baseline review

Assess whether the accepted route demonstrates a real learned-AI contribution beyond a photo/form workflow.

## Safety / claims review

Assess human authority, uncertainty, review routing, consent/privacy, and claim ceiling.

## Stage-boundary review

Identify any Stage 4/later decision that was accidentally locked early.

## Stage-control decision

Answer explicitly:

1. Can the owner-accepted D3-01 through D3-15 decisions stand?
2. Can Stage 3 close after reconciliation of this audit?
3. Can PR #11 proceed toward owner review/merge after required repairs, if any?
4. Is another independent Stage 3 audit required after any repair, or would a narrow confirmation suffice?
5. Does anything discovered here require reopening Stage 0–2?

## Scope boundary

Do not redesign RoyaCheck merely because another concept might also work.

Do not choose model, definitive dataset, runtime, threshold, architecture, training/evaluation implementation, UI, deployment, video, or submission details.

If a later-stage dependency is material, identify it as a dependency rather than deciding it here.
