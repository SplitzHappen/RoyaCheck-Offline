# RoyaCheck Offline — End-to-End Project Roadmap

**Competition:** World Bank Group Small AI for Development Hackathon 2026  
**Challenge:** Challenge 4 — Small AI for Development  
**Sector:** Agriculture  
**Competition window:** 3–4 October 2026  
**Entrant:** José Antonio Tamburini Martínez — sole human entrant

---

## Purpose of this roadmap

This repository is intended to show the complete development process from problem framing through final submission.

The process is deliberately stage-gated. Each stage has:

- a clear objective;
- defined outputs;
- an evidence standard;
- explicit stop/go criteria;
- a distinction between facts, assumptions, inferences, and claims;
- a provenance label showing whether the work was performed before or during the competition window.

The goal is not to maximize feature count. The goal is to build and evidence the smallest credible Small AI system that addresses a concrete agricultural workflow under realistic connectivity, device, safety, and data constraints.

---

# Provenance and chronology

## Pre-event preparation

Stages 0–5 summarize legitimate research, planning, concept evaluation, architecture thinking, risk analysis, and build-readiness work completed before the official competition window.

Those stages are being reconstructed into this public repository during the competition window for transparency and reviewer usability.

They must **not** be interpreted as competition implementation work.

No claim is made that these planning artifacts originated after this repository was created.

## Competition-window work

Stage 6 records the official competition greenlight and final scope after reviewing the challenge materials and accepting residual rule uncertainty.

Stages 7–10 contain the definitive competition implementation, model/data processing, evaluation, product build, hardening, evidence package, videos, and submission work.

---

# Project principles

The project follows these operating principles throughout:

1. **Solve one narrow problem well.**
2. **Use AI only where it adds distinct value.**
3. **Keep the core inference local to the user's device/browser.**
4. **Design for weak or absent connectivity.**
5. **Make uncertainty visible instead of forcing a confident answer.**
6. **Keep a human responsible for the final disposition.**
7. **Do not generate treatment, pesticide, fungicide, or dosage advice.**
8. **Do not claim field validation, impact, adoption, or accuracy that has not been measured.**
9. **Preserve dataset, model, tooling, and AI-assistance provenance.**
10. **Prefer a complete, reliable user-value loop over additional features.**

---

# Locked product direction

The selected concept is an offline-first coffee-leaf observation and extension-record aid.

The target user story is:

> A coffee farmer, intermediary, or field actor captures/selects a coffee-leaf image. A compact browser-local visual model proposes **visible rust**, **no visible rust**, or **not sure**. A responsible human then confirms, corrects, or sends the case for extension review. Only the confirmed human disposition becomes the formal observation.

The canonical technical contract is:

> **compact browser-local vision → thresholded abstention → deterministic human disposition → structured local record → deterministic extension summary**

The system is not a treatment engine, autonomous diagnosis system, or replacement for an extension officer.

---

# Stage 0 — Rules, challenge scope, and compliance frame

**Provenance:** Pre-event research, summarized publicly during the competition window.

## Objective

Establish what the competition requires, what remains uncertain, and what constraints govern the build.

## Key questions

- What challenge and sector are eligible?
- Is solo participation allowed?
- What must be submitted?
- Is a public repository required?
- Is a live demo required?
- What video artifacts are required?
- What are the Small AI constraints?
- What are the AI-assistance and originality boundaries?
- What must be disclosed?
- What constitutes a disqualifying implementation choice?

## Required outputs

- rules and requirements summary;
- known-vs-unknown table;
- compliance assumptions;
- disclosure policy;
- implementation boundaries;
- submission checklist.

## Gate

Stage 0 is complete when the project has a defensible rules interpretation and no unresolved ambiguity prevents legitimate implementation.

---

# Stage 1 — Agriculture problem-space research

**Provenance:** Pre-event research, summarized publicly during the competition window.

## Objective

Establish that the proposed problem is real, specific, development-relevant, and compatible with Small AI constraints.

## Research areas

- smallholder coffee production context;
- infrequent or constrained extension access;
- manual field-observation workflows;
- connectivity and device constraints;
- current non-AI alternatives;
- farmer/intermediary/extension roles;
- coffee-rust observation workflow;
- data and model feasibility;
- safety and responsible-AI constraints.

## Required outputs

- target-user definition;
- problem statement;
- current workflow;
- friction points;
- why AI may add value;
- why simpler tools alone are insufficient;
- operating constraints;
- measurable near-term outcome or proxy.

## Gate

Stage 1 is complete when the problem is specific enough to support a narrow user-value loop and a plausible AI intervention.

---

# Stage 2 — Concept portfolio and elimination

**Provenance:** Pre-event planning, summarized publicly during the competition window.

## Objective

Show that the chosen concept emerged from structured comparison rather than from first-idea bias.

## Evaluation dimensions

Candidate concepts are screened against:

- development importance;
- distinct AI value;
- Small AI fit;
- measurable value;
- user realism;
- solo-build feasibility;
- demo reliability;
- data feasibility;
- inclusivity/localization;
- safety/privacy tractability;
- differentiation.

## Hard rejection triggers

A concept is rejected or radically redesigned if:

- it requires unavailable proprietary data;
- it depends on multiple fragile integrations;
- it requires claims the prototype cannot support;
- it assumes strong connectivity or high-end devices;
- the AI component is decorative;
- the end-to-end loop cannot be demonstrated;
- the claimed value cannot be measured or credibly proxied;
- it is too broad for a solo competition build.

## Required outputs

- longlist of candidate concepts;
- shortlist;
- rejection rationale;
- surviving route(s).

## Gate

Stage 2 is complete when only concepts with credible development relevance, evidence paths, and solo-build feasibility remain.

---

# Stage 3 — Concept selection and route lock

**Provenance:** Pre-event planning plus competition-window official-brief reconciliation.

## Objective

Select one primary concept and stop broad ideation.

## Selected route

**WBG Challenge 4 → Agriculture → repaired Concept A**

### Product frame

Offline-capable, local-language coffee-leaf observation and extension-communication aid.

### Primary value unit

A suspicious coffee-leaf observation is converted into:

1. a bounded AI proposal;
2. explicit uncertainty where appropriate;
3. a human-reviewed disposition;
4. a structured local record;
5. an extension-ready summary.

## Explicit exclusions

The project does not include:

- pesticide recommendations;
- fungicide recommendations;
- dosage advice;
- autonomous farm decisions;
- generic crop diagnosis;
- weather;
- maps;
- voice;
- WhatsApp;
- dashboards;
- LLM features in the rust decision;
- market-price prediction;
- unsupported Dominican field-validation claims.

## Gate

Stage 3 is complete when the concept, user, AI job, claim ceiling, and major exclusions are locked.

---

# Stage 4 — Product, data, model, architecture, and evaluation specification

**Provenance:** Pre-event planning, summarized publicly during the competition window.

## Objective

Define the system before implementation so architecture and evaluation choices can be judged against explicit requirements.

## Product specification

Core user loop:

1. User opens the tool.
2. User selects or captures a coffee-leaf image.
3. Browser-local inference runs.
4. AI returns:
   - visible rust;
   - no visible rust;
   - not sure.
5. User sees that the AI result is a proposal, not a final diagnosis.
6. Human:
   - confirms;
   - corrects; or
   - requests extension review.
7. Confirmed disposition becomes the formal record.
8. Record is stored locally.
9. Deterministic extension-ready summary is generated.

## Required governance states

- AI suggestion;
- pending human confirmation;
- confirmed observation;
- marked for extension review.

Required record field:

- `confirmed_by_role`.

## Data plan

Preferred coffee-image dataset order:

1. BRACOL;
2. Saposoa Arabica;
3. RoCoLe.

Every dataset used must document:

- source;
- license;
- size;
- geography;
- acquisition setting;
- class mapping;
- limitations;
- role in training, validation, testing, or external evaluation.

Full third-party datasets should not be re-hosted in this repository unless licensing and competition requirements clearly permit it.

## Model design space

Candidate paths include:

- browser-side compact pretrained visual encoder + small task-specific head;
- browser-side embedding/similarity;
- compact fine-tuned classifier;
- handcrafted feature baseline only as an emergency fallback, not the preferred route.

## Safety and uncertainty

The model must not force non-coffee, ambiguous, blurry, unusual, or other-disease inputs into a binary rust/no-rust decision.

A `not sure` path is part of the product contract.

## Evaluation design

The evaluation plan should measure, where feasible:

- class counts;
- confusion matrix;
- balanced accuracy;
- rust recall;
- healthy specificity;
- abstention rate / coverage;
- external transfer performance;
- local inference latency;
- model file size;
- cached/offline bundle size;
- offline reload behavior;
- representative failure cases.

## Gate

Stage 4 is complete when the project has an implementable specification with a measurable evidence plan and an explicit claim ceiling.

---

# Stage 5 — Hackathon readiness and fallback planning

**Provenance:** Pre-event planning, summarized publicly during the competition window.

## Objective

Minimize avoidable setup work and define recovery routes before the competition build begins.

## Readiness areas

- local development environment;
- Git/GitHub access;
- Python/runtime environment;
- model-training route;
- browser-runtime route;
- deployment path;
- screen/video recording;
- backup/storage;
- network/power fallback;
- participant submission access.

## Build-order principle

The project should establish technical viability before spending significant time on polished UI.

Preferred sequence:

1. verify data path;
2. prove local visual inference;
3. freeze operating point;
4. run held-out/external evidence;
5. build the minimum user-value loop;
6. prove offline behavior;
7. harden;
8. document;
9. record videos;
10. submit with protected recovery time.

## Fallback philosophy

When a component fails:

- narrow scope first;
- reduce claims;
- remove optional features;
- preserve the complete user-value loop;
- preserve human authority;
- preserve evidence integrity;
- protect submission time.

## Gate

Stage 5 is complete when the entrant can begin implementation without unresolved setup dependencies that would block the core build.

---

# Stage 6 — Official challenge overlay and implementation greenlight

**Provenance:** Competition-window control stage.

## Objective

Reconcile the prepared plan against the official WBG challenge brief and the available Hack-Nation materials before implementation.

## Locked competition route

- Challenge 4 — Small AI for Development;
- Agriculture;
- repaired Concept A.

## Official constraints carried into implementation

The definitive build must:

- address one sector;
- use targeted Small AI;
- run on an accessible device;
- have its core feature work offline;
- use model/runtime assets small enough for constrained connectivity;
- implement at least one named local-language interaction;
- keep the final decision with a human;
- surface uncertainty/fail-safe behavior;
- avoid hallucinated agronomy;
- cite all data sources;
- disclose dataset license, size, and coverage limitations;
- explain why AI adds value beyond a spreadsheet, SMS, or search;
- address privacy, inclusion, bias, and human oversight;
- produce a working prototype;
- produce required competition videos and submission artifacts.

## Administrative decision

Where detailed participant rules remained silent after reasonable checking, the owner authorized proceeding under conservative disclosure:

- disclose AI assistance;
- disclose pre-event planning;
- use public/open datasets and pretrained components only with attribution and license checks;
- stop if a contradictory official rule later appears.

## Gate

Stage 6 is complete when the route is locked and implementation is authorized.

---

# Stage 7 — Definitive AI technical proof

**Provenance:** Competition-window implementation.

## Objective

Build and test the smallest credible learned visual system before building the full product UI.

## Planned technical path

Current preferred direction:

> compact pretrained visual encoder → tiny coffee-specific head → thresholded abstention → browser-local export

The exact model/runtime remains subject to measured feasibility.

## Workstream 7A — Data acquisition and provenance

- acquire dataset from primary source;
- preserve original license and citation;
- inspect archive structure;
- record exact file counts;
- document classes;
- define class mapping before reading final results;
- identify duplicates/group structure if available;
- define train/validation/test roles.

## Workstream 7B — Minimum learned model

- preprocess images;
- train the smallest task-specific head first;
- keep backbone frozen initially;
- avoid broad hyperparameter search;
- establish reproducible seed/configuration;
- freeze the candidate once acceptable.

## Workstream 7C — Abstention

- define validation-only threshold/margin;
- map ambiguous outputs to `not sure`;
- ensure other disease is not silently treated as healthy;
- preserve a separate non-coffee/OOD guard or user pre-check.

## Workstream 7D — Held-out evidence

Measure the frozen operating point on held-out data.

No final reported test examples should be used to tune the threshold.

## Workstream 7E — External transfer evidence

If feasible, run a frozen external dataset readout after the operating point is fixed.

External data used for final transfer evidence must not be used to tune the same model/threshold.

## Workstream 7F — Browser artifact

- export model;
- verify local inference;
- measure model/runtime size;
- confirm browser compatibility.

## Gate

Stage 7 closes only when a real browser-local inference path exists and has enough evidence to justify building the definitive product loop.

If it fails, narrow the model/claim rather than hiding the failure.

---

# Stage 8 — Minimum complete MVP

**Provenance:** Competition-window implementation.

## Objective

Build the smallest complete user-value loop around the validated technical core.

## Required MVP components

- Spanish UI;
- image capture/upload;
- browser-local inference;
- visible-rust / no-visible-rust / not-sure output;
- explicit AI-suggestion state;
- pending-human-confirmation state;
- confirm/correct/review actions;
- `confirmed_by_role`;
- structured local record;
- IndexedDB or equivalent appropriate local storage;
- deterministic extension summary;
- clear limitations and safety language.

## Architecture target

- static web application / PWA;
- browser-local inference;
- no server-side rust inference;
- no cloud LLM dependency;
- self-hosted runtime assets required for core operation;
- local persistence;
- no geolocation.

## Gate

Stage 8 is complete when the full user-value loop works end to end on the target browser.

No stretch features are added before this gate passes.

---

# Stage 9 — Hardening, evidence, and claims audit

**Provenance:** Competition-window implementation and testing.

## Objective

Turn a working prototype into a defensible competition artifact.

## Technical tests

- representative rust images;
- representative healthy images;
- other coffee disease/stress;
- low-quality/blurry image;
- non-coffee image;
- ambiguous image;
- repeat inference timing;
- offline reload;
- cache completeness;
- model/runtime path integrity;
- local record persistence;
- delete-local-record path;
- deterministic summary behavior.

## Evidence table

At minimum, record:

- dataset source/license/size;
- training/evaluation split;
- model architecture;
- model file size;
- runtime size;
- cached bundle size;
- median or representative inference latency;
- browser/device tested;
- internal metrics;
- abstention/coverage;
- external evidence, if any;
- known failure modes;
- dataset geography/domain limitations.

## Claims ledger

Every public claim must be tagged internally as one of:

- FACT / directly sourced;
- MEASURED;
- INFERENCE;
- ASSUMPTION;
- FUTURE WORK;
- PROHIBITED / unsupported.

## Claims that remain prohibited without direct evidence

Do not claim:

- improved yield;
- improved income;
- reduced pesticide use;
- treatment correctness;
- farmer adoption;
- field deployment;
- superior diagnostic accuracy;
- robustness on Dominican farms;
- replacement of extension officers.

## Gate

Stage 9 closes when the prototype, evidence, README claims, and demo language are internally consistent and no material claim exceeds the evidence.

---

# Stage 10 — Final repository, videos, red team, and submission

**Provenance:** Competition-window submission work.

## Objective

Produce a complete, auditable submission and protect enough time to recover from final failures.

## Repository completion

Required public-facing materials should include:

- README;
- explicit license;
- architecture explanation;
- data/model attribution;
- AI/tooling disclosure;
- pre-event planning disclosure;
- evidence and limitations;
- responsible-AI section;
- reproducibility/run instructions;
- live demo link;
- screenshots or figures where useful;
- roadmap and development record.

## Required competition artifacts

Track and reconcile:

- public GitHub repository;
- live demo;
- Demo Video;
- Tech Video;
- Team Video;
- WBG 2–5 minute video requirement;
- Hack-Nation platform submission;
- Google Form backup.

## Final independent red team

Before submission, conduct one concise adversarial audit focused on:

- disqualification risk;
- unsupported claims;
- broken demo paths;
- evidence/model mismatch;
- licensing/provenance;
- offline claim;
- safety/human-authority integrity;
- submission completeness.

Material blockers must be reconciled before submission.

## Final human review

José Antonio performs the final human review and remains the accountable entrant and submitter.

## Gate

Stage 10 closes only when the submission is successfully received and the evidence package matches the actual system.

---

# Repository development record

The repository will be populated in a controlled sequence so its history reflects the project logic.

Planned order:

1. `ROADMAP.md` — project process and provenance.
2. Stage 0 rules/compliance summary.
3. Stage 1 problem research.
4. Stage 2 concept screening.
5. Stage 3 route decision.
6. Stage 4 product/data/model/evaluation specification.
7. Stage 5 readiness and fallback plan.
8. Stage 6 official-brief overlay and implementation greenlight.
9. Stage 7 model/data/evaluation work.
10. Stage 8 definitive MVP.
11. Stage 9 hardening and evidence.
12. Stage 10 final documentation and submission package.

The first six stages will be reconstructed from legitimate pre-event planning with explicit provenance. Implementation artifacts will be created and recorded during the competition window.

---

# Current status

| Stage | Status |
|---|---|
| 0 — Rules & compliance | Ready to reconstruct from pre-event planning |
| 1 — Agriculture problem research | Ready to reconstruct from pre-event planning |
| 2 — Concept portfolio | Ready to reconstruct from pre-event planning |
| 3 — Concept selection | Ready to reconstruct from pre-event planning + official brief |
| 4 — Product/data/model/evaluation specification | Ready to reconstruct from pre-event planning |
| 5 — Hackathon readiness | Ready to reconstruct from pre-event planning |
| 6 — Official challenge overlay / greenlight | Ready to reconstruct from competition-window records |
| 7 — Definitive AI technical proof | Not started in this clean repository |
| 8 — Minimum complete MVP | Not started |
| 9 — Hardening / evidence / claims audit | Not started |
| 10 — Final package / red team / submission | Not started |

---

# Immediate next action

Publish the Stage 0 rules/compliance package and provenance disclosure, then proceed sequentially through Stages 1–6 before beginning the definitive Stage 7 technical proof.

No model training, definitive UI work, deployment, or additional product features should be treated as canonical before the repository reaches the Stage 6 greenlight.
