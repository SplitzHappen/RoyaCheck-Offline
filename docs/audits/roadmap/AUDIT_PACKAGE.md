> **Historical / supersession note (2026-10-03):** This audit package predates the official Annex B / Noor case-alignment repair in PR #9. Any Spanish-language or other pre-Annex-B implementation assumptions below are historical audit inputs, not current project policy. The current controlling case/language rules are in `docs/stages/00_rules/ANNEX_B_CASE_CONTRACT.md` and the Noor reconciliation/verification records.

# Claude Adversarial Audit Package — Project Roadmap

**Project:** RoyaCheck Offline  
**Competition:** World Bank Group Small AI for Development Hackathon 2026  
**Challenge:** Challenge 4 — Small AI for Development  
**Sector:** Agriculture  
**Entrant:** José Antonio Tamburini Martínez — sole human entrant  
**Artifact under audit:** `ROADMAP.md`  
**Audit role:** Independent adversarial reviewer / red team  
**Audit type:** Process, governance, evidence, compliance, and execution audit  
**Status:** Requested before Stage 0 begins

---

## 1. Why this audit exists

The repository has intentionally begun with a complete Stage 0–10 roadmap before substantive implementation artifacts are added.

The purpose of this audit is to determine whether that roadmap is rigorous enough to serve as the public process spine for the entire competition entry.

The audit should test whether the process:

- is internally coherent;
- can be executed under hackathon time pressure;
- distinguishes planning from implementation;
- preserves evidence integrity;
- makes responsible-AI and human-authority controls operational rather than rhetorical;
- prevents unsupported claims;
- creates enough auditability for an external reviewer;
- protects submission completion;
- remains narrow enough for a solo entrant.

This is not a style review. It is an adversarial process review.

---

## 2. Current project state

The public repository is being built from a clean starting point.

At the time of this audit:

- `ROADMAP.md` is the only canonical public project artifact;
- no definitive competition model has been trained in this repository;
- no definitive UI/MVP has been implemented in this repository;
- no definitive deployment has been created from this repository;
- no final evidence package exists yet;
- no stage has been publicly marked closed in this repository.

The roadmap defines the project's public stage structure, decision gates, and evidence expectations.

For this audit, use only `ROADMAP.md` and the context in this package. Do not infer facts or evidence that are not supported by the artifacts under review.

---

## 3. Locked strategic scope

Do **not** reopen broad concept selection.

The selected route is:

> WBG Challenge 4 → Agriculture → repaired Concept A.

The locked product frame is:

> An offline-first coffee-leaf observation and extension-record aid in which a compact browser-local visual system proposes **visible rust**, **no visible rust**, or **not sure**; a responsible human confirms, corrects, or requests extension review; only the human disposition becomes the formal observation.

The canonical technical contract is:

> **compact browser-local vision → thresholded abstention → deterministic human disposition → structured local record → deterministic extension summary**

The audit may challenge whether the roadmap adequately operationalizes this scope, but it should not propose a different sector or a new product concept unless the roadmap itself contains a fatal contradiction that makes the locked route impossible.

---

## 4. Locked product boundaries

The project must not expand into:

- pesticide recommendations;
- fungicide recommendations;
- dosage advice;
- treatment plans;
- autonomous farm decisions;
- generic crop diagnosis;
- weather features;
- maps;
- voice;
- WhatsApp integration;
- dashboards;
- LLM features for the rust decision;
- market-price prediction;
- unsupported Dominican field-validation claims.

The project must preserve:

- browser-local/client-side rust inference;
- explicit `visible rust / no visible rust / not sure` states;
- thresholded abstention/fail-safe behavior;
- human final authority;
- Spanish/local-language interaction;
- offline-capable core;
- small/sideloadable model/runtime footprint;
- structured local record;
- `confirmed_by_role`;
- deterministic extension summary;
- OOD/non-coffee handling;
- privacy-minimal local behavior;
- explicit dataset/model provenance and limitations;
- strict claims discipline.

---

## 5. Competition/process constraints to test

The roadmap should make the following operational rather than aspirational:

1. **One-sector scope**
   - Agriculture only.

2. **Small AI fidelity**
   - targeted task;
   - constrained-environment realism;
   - no decorative AI.

3. **Device realism**
   - usable on an accessible device/browser;
   - no high-end hardware dependency for core operation.

4. **Offline core**
   - core rust/no-rust/not-sure inference must function without network once required assets are locally available;
   - offline claims require actual hard-reload/cache evidence.

5. **Model/runtime size**
   - model/runtime assets must be small enough to support weak-connectivity/sideloading claims;
   - size must be measured rather than assumed.

6. **Local-language interaction**
   - at least one named local-language interaction;
   - current implementation target is Spanish text.

7. **Human authority**
   - AI suggests;
   - a person confirms/corrects/reviews;
   - AI never autonomously finalizes an agricultural decision.

8. **Uncertainty/fail-safe**
   - uncertain, OOD, non-coffee, low-quality, or other-disease inputs must not be forced into rust/no-rust.

9. **Data provenance**
   - source;
   - license;
   - size;
   - geography;
   - acquisition conditions;
   - coverage;
   - limitations;
   - exact role in training/validation/testing/external evaluation.

10. **Responsible AI**
    - privacy;
    - consent;
    - bias/domain shift;
    - human oversight;
    - claim limits.

11. **Evidence integrity**
    - validation threshold must not be tuned on final reported test/external evidence;
    - external evidence must remain external if reported as such;
    - test leakage must be guarded against;
    - metrics must include uncertainty/coverage where relevant.

12. **Submission completeness**
    - public repository;
    - live demo;
    - required videos;
    - platform submission;
    - backup form;
    - protected final recovery time.

---

## 6. Roadmap design under audit

The roadmap defines these stages:

- **Stage 0 — Rules, challenge scope, and compliance frame**
- **Stage 1 — Agriculture problem-space research**
- **Stage 2 — Concept portfolio and elimination**
- **Stage 3 — Concept selection and route lock**
- **Stage 4 — Product, data, model, architecture, and evaluation specification**
- **Stage 5 — Hackathon readiness and fallback planning**
- **Stage 6 — Official challenge overlay and implementation greenlight**
- **Stage 7 — Definitive AI technical proof**
- **Stage 8 — Minimum complete MVP**
- **Stage 9 — Hardening, evidence, and claims audit**
- **Stage 10 — Final repository, videos, red team, and submission**

The roadmap organizes the project into:

- Stages 0–3: rules, problem definition, concept screening, and route selection;
- Stages 4–6: product/technical specification, readiness, and implementation greenlight;
- Stages 7–10: technical proof, MVP implementation, validation, hardening, and submission.

Audit whether this sequencing is clear, defensible, and operationally useful.

---

## 7. Required audit dimensions

### A. Process integrity

Test whether:

- stages have clear entry/exit conditions;
- stage closure cannot be inferred merely from document existence;
- dependencies are ordered correctly;
- build work cannot outrun technical/evidence viability;
- failure routes are explicit;
- the process protects against sunk-cost rescue;
- owner control remains visible.

Identify any stage whose current gate is too vague to be auditable.

### B. Stage-record and traceability integrity

Test whether:

- each stage has a clear purpose, output, and closure condition;
- a reviewer can distinguish planned, in-progress, and completed work;
- document existence is not treated as evidence that a gate passed;
- decisions and evidence are traceable to the stage that depends on them;
- stage-status language is unambiguous;
- the audit trail remains concise enough to support rather than obscure the build.

### C. Competition compliance

Test whether the roadmap creates explicit controls for:

- public repository requirements;
- disclosure;
- licensing;
- dataset/model terms;
- offline proof;
- local-language interaction;
- human-in-the-loop authority;
- submission deliverables;
- potential contradictory official rules.

Flag any area where the roadmap could lead to an unsupported or disqualifying interpretation.

### D. Technical architecture discipline

Test whether the roadmap:

- proves model viability before investing heavily in UI;
- preserves browser-local inference;
- treats runtime/model size as a measured requirement;
- separates model training/evaluation from UI work;
- provides a credible fallback ladder;
- avoids unnecessary integrations;
- has a realistic browser-runtime path;
- makes OOD/other-disease behavior explicit.

### E. Evaluation integrity

Test whether:

- splits are fixed before final readout;
- abstention thresholds are selected on validation only;
- final test/external evidence remains untouched;
- class mapping is defined before results;
- other disease does not silently become healthy;
- uncertainty/coverage is reported;
- external-transfer evidence is honestly framed;
- dataset/domain limitations flow into the claim ceiling;
- performance metrics are appropriate to an abstaining classifier.

Identify missing metrics or leakage risks.

### F. Responsible AI / safety

Test whether the roadmap adequately enforces:

- no treatment advice;
- no autonomous diagnosis;
- human authority;
- explicit uncertainty;
- local privacy;
- deletion/control of local records;
- non-coffee/OOD handling;
- domain-shift disclosure;
- no fabricated field-impact claim.

Responsible-AI weaknesses should be treated as material, not cosmetic.

### G. Solo-execution realism

The entrant is one human.

Test whether:

- the roadmap is too documentation-heavy for the remaining competition window;
- audit gates are proportionate;
- implementation sequence is realistic;
- any stage should be compressed;
- any artifact is redundant;
- model training/conversion/browser integration risk is underestimated;
- final submission time is sufficiently protected.

Prefer removing unnecessary process over adding ceremonial documentation.

### H. Judge readability

Test whether an external reviewer can answer quickly:

- What problem is being solved?
- For whom?
- Why AI?
- Why Small AI?
- What is actually implemented?
- What evidence supports it?
- What does the model not know?
- Who makes the final decision?
- What is offline?
- What data was used?
- What was measured?
- What is explicitly not being claimed?
- How did the project respond to failures?

Flag process detail that obscures rather than strengthens the competition story.

---

## 8. Severity definitions

### BLOCKING

A finding is blocking if it creates a material risk of:

- disqualification;
- a false or misleading project record;
- unsafe product authority;
- invalid core evaluation;
- inability to complete a qualifying submission;
- contradiction with a locked competition requirement;
- a roadmap structure that cannot realistically be executed.

### MAJOR

A finding is major if it materially weakens:

- technical credibility;
- evidence integrity;
- responsible-AI posture;
- offline/Small-AI credibility;
- judge interpretability;
- stage-gate effectiveness;
- solo execution feasibility.

### MINOR

A finding is minor if it improves:

- wording;
- structure;
- traceability;
- navigation;
- precision;
- redundancy;
- presentation;

without materially affecting validity or execution.

Do not inflate stylistic preferences into major findings.

---

## 9. Required audit output

Use this exact top-level structure:

# Roadmap Audit — RoyaCheck Offline

## Verdict

Use exactly one:

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

Answer:

- Is the process credible?
- Is it executable?
- Is it sufficiently auditable?
- Does it preserve evidence integrity?
- Does it protect competition completion?
- What is the largest residual process risk?

## Blocking findings

For each:

1. **Finding ID**
2. **Exact issue**
3. **Why it blocks**
4. **Evidence from the roadmap**
5. **Narrowest defensible repair**

If none, write: `None.`

## Major findings

Use the same five-part structure.

## Minor findings

Use the same five-part structure.

## Process-integrity review

Assess stage ordering, closure gates, recovery logic, and owner-control integrity.

## Stage-record / traceability review

Assess whether the roadmap makes stage status, evidence dependencies, and closure conditions clear and auditable.

## Competition-compliance review

Assess the roadmap's controls for compliance and submission completeness.

## Technical / evaluation-gate review

Assess whether the model, data, abstention, OOD, browser-local, offline, and evaluation gates are adequately specified.

## Responsible-AI review

Assess human authority, fail-safe behavior, privacy, bias/domain shift, and claim limits.

## Solo-execution / time-budget review

Identify documentation or audit work that should be removed, compressed, or delayed to protect the build and submission.

## Judge-readability review

Identify anything that makes the process hard to understand from an external reviewer perspective.

## Required repairs before roadmap acceptance

Provide a short prioritized list:

- P0 — blocking;
- P1 — major;
- P2 — minor.

Do not include optional polish in this section.

## Optional improvements

Only improvements that can be skipped without weakening validity.

---

## 10. Auditor behavior

Claude is acting as an independent adversarial reviewer.

Claude should:

- challenge assumptions;
- cite exact roadmap sections when possible;
- distinguish missing evidence from weak wording;
- recommend the narrowest repair;
- resist feature expansion;
- protect the remaining competition clock;
- prefer simpler controls when they achieve the same assurance;
- identify false confidence;
- flag any audit/process ritual that costs more than it protects.

Claude should **not**:

- rewrite the project as a different concept;
- invent new features;
- reopen sector selection;
- act as a hidden co-builder;
- fabricate rules or evidence;
- claim to have inspected artifacts it was not given;
- infer evidence or project facts that are not present in the reviewed artifacts.

If a GitHub comment or review is used, keep it focused on the public artifact under review and the findings. Detailed reasoning should live in the formal audit artifact if one is created.

---

## 11. Acceptance rule

The roadmap should not be treated as audited/accepted merely because Claude submits a review.

After Claude's audit:

1. Vale/ChatGPT reconciles every blocking and major finding.
2. José Antonio retains final owner authority.
3. Accepted repairs are applied to `ROADMAP.md`.
4. A reconciliation record captures:
   - accepted findings;
   - rejected findings and rationale;
   - exact repairs;
   - residual risks.
5. The roadmap is marked accepted only after the repaired artifact is rechecked.

The audit does not authorize Stage 7 implementation by itself.

---

## 12. Scope boundary

**In scope:** `ROADMAP.md` as the public operating process.

**Out of scope for this audit:**

- actual model performance;
- actual dataset contents;
- actual implementation code;
- actual UI;
- actual deployment;
- actual browser/offline test results;
- actual submission portal state;
- final licensing choice;
- final README;
- final videos.

Those will be audited when the corresponding artifacts exist.

The auditor may flag where the roadmap fails to create a future control for one of these items, but should not pretend to validate an artifact that does not yet exist.
