# RoyaCheck Offline — End-to-End Project Roadmap

**Competition:** World Bank Group Small AI for Development Hackathon 2026  
**Challenge:** Challenge 4 — Small AI for Development  
**Sector:** Agriculture  
**Submission deadline:** 4 October 2026, 9:00 AM ET — Stage 0 must reconfirm this against the official submission source  
**Entrant:** José Antonio Tamburini Martínez — sole human entrant

---

## Purpose

This repository records a stage-gated path from challenge requirements and problem definition through technical proof, MVP implementation, validation, audit, and submission.

The process is deliberately narrow. The goal is not to maximize feature count. The goal is to build and evidence the smallest credible Small AI system that addresses a concrete agricultural workflow under realistic connectivity, device, safety, data, and time constraints.

Stage documents are **decision records, not narrative diaries**. They state the evidence, alternatives, decisions, controls, and current status needed by the next stage. A stage is not closed merely because its document exists.

---

## Status vocabulary

Every stage uses exactly one status:

- **Not started**
- **In progress**
- **In review**
- **Closed — owner approved** (with the merged PR linked)

---

## Locked product direction

RoyaCheck Offline is an offline-first coffee-leaf observation and extension-record aid.

The target user loop is:

1. A farmer, intermediary, or field actor captures or selects a coffee-leaf image.
2. A compact browser-local visual system proposes:
   - **visible rust**;
   - **no visible rust**; or
   - **not sure**.
3. A responsible human explicitly confirms, corrects, or requests extension review.
4. Only the human disposition becomes the formal observation.
5. The confirmed observation is stored locally and can produce a deterministic extension-ready summary.

Canonical technical contract:

> **compact browser-local vision → thresholded abstention → deterministic human disposition → structured local record → deterministic extension summary**

The system is not a treatment engine, autonomous diagnosis system, or replacement for an extension officer.

---

## Canonical exclusions

The public product must not expand into:

- pesticide recommendations;
- fungicide recommendations;
- dosage advice;
- treatment advice or treatment plans;
- autonomous farm decisions;
- generic crop diagnosis;
- weather features;
- maps;
- voice;
- WhatsApp integration;
- dashboards;
- LLM features in the rust decision;
- market-price prediction;
- unsupported Dominican field-validation claims.

All later stage documents should reference this list rather than create competing exclusion lists.

---

## Operating principles

1. **Solve one narrow problem well.**
2. **Use AI only where it adds distinct value.**
3. **Keep the core visual inference local to the user's browser/device.**
4. **Design the core loop to remain usable after required assets are cached locally.**
5. **Make uncertainty visible instead of forcing a confident answer.**
6. **Keep a human responsible for the formal disposition.**
7. **Do not generate agronomic treatment advice.**
8. **Do not claim impact, adoption, field validation, or performance that has not been measured.**
9. **Preserve dataset, model, runtime, tooling, and license provenance.**
10. **Prefer a complete, reliable loop over stretch features.**
11. **Keep held-out and external evidence one-shot.**
12. **Protect submission completion before adding polish.**

---

# Competition-clock budget

The process must fit the remaining competition clock. The deadline and time zone are rechecked in Stage 0. If that recheck changes the deadline, the same priorities apply relative to the corrected deadline.

### Fixed latest end times

The schedule below assumes the repaired roadmap is accepted no later than **3:30 PM ET on 3 October 2026**. If acceptance occurs later, the clock times below do not move; the lost time is absorbed by the earliest remaining non-buffer block.

| Work block | Maximum budget | Latest end time (ET) |
|---|---:|---:|
| Stages 0–6 documentation, decisions, and gates | up to 2 hours | **5:30 PM, 3 Oct** |
| Stage 7 — definitive AI technical proof | up to 4.5 hours | **10:00 PM, 3 Oct** |
| Stage 8 — minimum complete MVP | up to 3 hours | **1:00 AM, 4 Oct** |
| Stage 9 — hardening and evidence | up to 2 hours | **3:00 AM, 4 Oct** |
| Stage 10 — final docs, videos, audit, and submission | up to 2.5 hours | **5:30 AM, 4 Oct** |
| Protected recovery/submission buffer | **3.5 hours minimum** | **5:30–9:00 AM, 4 Oct** |

The protected buffer begins at **5:30 AM ET on 4 October 2026** if the Stage 0 deadline is confirmed. It is closed to feature work and must remain large enough for at least one redeploy, one re-upload of required videos, completion/retry of all submission forms, and capture of submission receipt evidence.

### Overrun rule

An overrun in any work block from Stages 0–9 never shrinks the protected buffer. Instead it:

- reduces the next non-buffer block;
- triggers the pre-approved fallback ladder or a claim/scope reduction where applicable;
- freezes the Stage 8 or Stage 9 candidate at the stated end time and records remaining gaps as limitations rather than continuing feature work.

For a documentation-stage overrun:

- stop expanding prose;
- record the remaining non-blocking gaps;
- obtain the owner decision;
- move on.

A true rules, license, safety, or evaluation-integrity blocker does **not** become non-blocking merely because time is short.

Work on stage N+1 may begin once the owner decision for stage N is recorded, with the merge following promptly. Two hard gates remain strict: **Stage 4 pre-registration must be fixed before any training/validation result or held-out readout is produced, and Stage 6 greenlight must be recorded before definitive Stage 7 implementation begins.**

### Parallel de-risking permitted

While Stages 0–6 are being documented, the project may run bounded technical de-risking that does not consume held-out or external evidence:

- dataset download/access checks and file counts;
- license reading;
- browser-runtime smoke tests with an untrained/pretrained candidate encoder;
- deployment-shell smoke tests.

No final test partition or quarantined external partition may be opened during these spikes.

---

# Review tiers

The repository keeps one bounded PR per stage, but not every stage receives the same audit ceremony.

### Tier A — independent adversarial review required

- Roadmap/process architecture
- Stage 0 — compliance checklist
- Stage 4 — evaluation pre-registration and technical specification
- Stage 7 — technical/evidence readout
- Stage 10 — final pre-submission red team

### Tier B — owner/builder review by default

- Stages 1, 2, 3, 5, 6, 8, and 9

A Tier B stage escalates to independent review only if it creates a new material compliance, safety, evaluation, licensing, or architecture risk.

Stage 9 contains the internal claims/evidence audit; the final independent claims red team occurs once in Stage 10.

---

# Stage 0 — Rules, submission requirements, and compliance control

## Objective

Create one authoritative compliance checklist that later stages can enforce rather than re-interpreting the rules repeatedly.

## Required outputs

A single table with, for every applicable requirement:

- requirement;
- official/public source;
- interpretation;
- enforcing stage;
- evidence required for compliance;
- status: confirmed / unresolved / not applicable;
- owner decision if ambiguity remains.

At minimum the checklist must cover:

- eligible challenge and sector;
- solo-entry status;
- submission deadline and time zone;
- public repository requirement;
- live-demo requirement;
- required videos, lengths, content, and whether requirements can be satisfied by the same recording;
- Hack-Nation platform submission;
- Google Form or backup submission;
- AI-assistance/originality rules;
- outside-help restrictions, if any;
- source-code/repository visibility;
- dataset/model/benchmark permissions;
- model/runtime license obligations;
- cloud/API/offline restrictions;
- local-language requirement;
- human-final-authority requirement;
- uncertainty/fail-safe requirement;
- data attribution and limitations;
- responsible-AI/privacy requirements;
- explicit disqualification risks.

## Submission-mechanics check

Stage 0 also creates a compact submission table:

| Artifact | Required? | Length/format | Destination | Can overlap with another artifact? | Status |
|---|---|---|---|---|---|

The exact fields are filled from the official sources.

## Gate

Stage 0 closes when:

- every listed compliance item has a source and status;
- every confirmed requirement is mapped to a later enforcing stage/evidence item;
- any unresolved rule silence has an explicit owner disposition;
- the deadline and submission surfaces are reconfirmed.

**Review:** Tier A.

---

# Stage 1 — Agriculture problem-space research

## Objective

Establish that the proposed problem is specific, development-relevant, compatible with Small AI constraints, and grounded in evidence.

## Research areas

- smallholder coffee production context;
- extension-access constraints;
- manual field-observation/documentation workflows;
- connectivity/device constraints;
- farmer/intermediary/extension roles;
- coffee-rust observation workflow;
- non-AI alternatives;
- data/model feasibility;
- privacy, safety, and inclusion constraints.

## Required outputs

- target-user definition;
- problem statement;
- current workflow;
- friction points;
- sourced facts versus project inferences;
- why AI may add value;
- why simpler tools alone do not fully satisfy the intended visual-observation step;
- operating constraints;
- measurable near-term outcome or proxy.

## Gate

Stage 1 closes when all required outputs are present, sourced facts are distinguishable from inference, and the owner approves the problem frame.

**Review:** Tier B unless a material compliance/safety issue appears.

---

# Stage 2 — Concept comparison and elimination record

## Objective

Document the structured comparison and elimination rationale supporting the selected route.

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

- concept longlist;
- screening matrix;
- shortlist;
- rejection rationale;
- selected route and residual risks.

## Gate

Stage 2 closes when the comparison record and elimination rationale are present and the owner accepts the selected route.

**Review:** Tier B.

---

# Stage 3 — Product scope and route lock

## Objective

Freeze the public product definition, authority boundary, and exclusions so later technical work cannot silently expand the intervention.

## Locked route

**WBG Challenge 4 → Agriculture → RoyaCheck Offline**

## Primary value unit

A suspicious coffee-leaf observation is converted into:

1. a bounded AI proposal;
2. explicit uncertainty where appropriate;
3. a human-reviewed disposition;
4. a structured local record;
5. an extension-ready deterministic summary.

## Label semantics

The user-facing labels are defined as:

- **visible rust:** visible evidence consistent with coffee leaf rust is present; if rust and another condition appear together, route to **visible rust**;
- **no visible rust:** no rust is observed on an otherwise eligible coffee-leaf image; this does **not** mean “healthy” and does not assert the absence of other conditions;
- **not sure:** low-confidence, ambiguous, low-quality, non-coffee/OOD, or other-disease/stress cases that should not be forced into the binary rust/no-rust authority path.

Other disease/stress without visible rust is routed to **not sure**, not silently treated as healthy.

Public UI and summaries must explicitly avoid equating “no visible rust” with “healthy leaf.”

## Gate

Stage 3 closes when the product frame, label semantics, authority model, canonical exclusions, and claim ceiling are owner approved.

**Review:** Tier B.

---

# Stage 4 — Product, data, model, privacy, architecture, and evaluation pre-registration

## Objective

Specify the system and evaluation rules before any held-out or external readout.

This stage is the main technical pre-registration gate.

## Product specification

Core loop:

1. User opens the tool.
2. User selects or captures a coffee-leaf image.
3. Browser-local inference runs.
4. AI proposes:
   - visible rust;
   - no visible rust;
   - not sure.
5. The interface clearly labels the result as an AI proposal.
6. Human explicitly:
   - confirms;
   - corrects; or
   - requests extension review.
7. Only the human disposition becomes the formal observation.
8. Formal record is stored locally.
9. Deterministic extension summary is generated from human dispositions.

## Record schema and human-authority rules

At minimum:

- `ai_proposal`;
- `ai_score` or equivalent confidence value;
- `human_disposition`;
- `confirmed_by_role`;
- `status`.

`confirmed_by_role` uses an enumerated set such as:

- farmer;
- intermediary/field actor;
- extension worker;
- other/self-described.

Controls:

- `human_disposition` is never pre-filled from `ai_proposal`;
- a `not sure` proposal requires an explicit human disposition or review request;
- a formal record cannot be saved without explicit human action;
- extension summaries are generated from human dispositions;
- if the AI proposal is displayed in a summary, it is labeled as AI-generated and is not substituted for the human disposition;
- `confirmed_by_role` is self-declared.

## Privacy and local-data rules

- no geolocation collection;
- raw uploaded/captured images are not persisted by default;
- image metadata is stripped on ingest before any image/derivative is exported or retained;
- service-worker/app caches contain application/model assets, not user images;
- deletion removes the local structured record and any retained user-image derivative associated with it;
- any future export path must be explicit and user initiated.

## Data plan

Preferred development dataset order:

1. BRACOL;
2. Saposoa Arabica;
3. RoCoLe.

Default plan:

- **development/internal evaluation:** BRACOL, if license/access/structure pass Stage 7A;
- **external transfer readout:** Saposoa Arabica v2, quarantined from training, model selection, threshold selection, OOD design, and de-risking;
- if BRACOL cannot serve as development data, the external dataset is re-designated **before any readout**, and the newly external partition remains untouched.

Every dataset used must document:

- source;
- license;
- size;
- geography;
- acquisition setting;
- class mapping;
- coverage limitations;
- exact role: training / validation / test / external / challenge set.

Full third-party datasets are not re-hosted unless their terms and the competition rules clearly permit it.

## License gate

Before training/evaluation proceeds, record a one-line license verdict for every:

- dataset;
- pretrained encoder/weights;
- browser runtime/library.

The verdict must cover:

- training/use permission;
- redistribution of derived weights, embeddings, or reference sets through the public repo/live demo;
- attribution obligations;
- compatibility with the chosen repository license.

If a required license is incompatible or materially unclear, stop that path and switch dataset/encoder/runtime **before** opening held-out or external evidence.

## Split and leakage controls

Before Stage 7 begins, pre-register:

- split procedure: grouping rule, train/validation/test ratios, near-duplicate rule, and deterministic seed where applicable;
- class mapping;
- operating-point selection rule;
- mandatory metric list;
- numerical Stage 7 acceptance criteria.

After Stage 7A data acquisition, the generated split manifest (file identifier/hash → train / validation / test / external) must be committed in Stage 7B **before any training or validation result is produced**.

Splits must be group-aware where group identifiers exist. If no reliable grouping field exists:

- run near-duplicate detection, such as perceptual hashing or equivalent;
- prevent detected near-duplicates crossing partitions;
- disclose residual leakage risk.

## One-shot evidence rule

The test and external partitions are one-shot evidence.

They may not be used to choose:

- model architecture;
- preprocessing;
- class mapping;
- augmentation;
- early stopping;
- hyperparameters;
- threshold;
- OOD guard;
- fallback rung.

If any design decision changes after a test/external readout:

- preserve the original readout;
- relabel that partition as development evidence;
- any later number from it is explicitly labeled **post-hoc, not held-out**;
- a new untouched partition is required for any later held-out claim.

## Mandatory evaluation core

For each reported final partition:

- class counts;
- confusion matrix on accepted predictions where defined;
- coverage overall;
- coverage by true class;
- selective accuracy/risk at the operating point;
- rust recall on accepted eligible cases;
- specificity on clearly healthy images;
- confident-miss rate: true rust → confident “no visible rust”;
- `not sure` / abstention rate;
- other-disease outcome distribution;
- 95% uncertainty intervals for headline rates where sample size permits defensible estimation.

External readouts report the same core where labels allow it.

## OOD/challenge evaluation design

A confidence threshold is **not** assumed to be a reliable OOD detector.

Before OOD/fail-safe results are reported:

- freeze a small licensed challenge set;
- record source/license/counts;
- include non-coffee images, other disease/stress, and blurry/low-quality images;
- report every case, including failures;
- pre-register the target share that should route to `not sure`.

A user pre-check may be additive, but it is not a substitute for measured fail-safe behavior. If no measured OOD guard exists, the public claim must be downgraded accordingly.

## Device/browser and technical budgets

Stage 4 must name:

- exact available target test device or honest device class;
- target browser/runtime;
- maximum model + runtime bytes;
- maximum per-image inference latency;
- minimum coverage floor;
- maximum acceptable confident-miss rate on validation;
- Stage 7 kill time.

If only desktop/mobile emulation evidence is available, say so; do not imply affordable-phone validation.

## Gate

Stage 4 closes only when the pre-registration artifacts above are committed and owner approved **before** any test/external readout.

**Review:** Tier A.

---

# Stage 5 — Readiness, fallback ladder, and submission protection

## Objective

Make likely failure modes cheap to discover and cheap to recover from.

## Readiness areas

- local development/training environment;
- Git/GitHub access;
- model-training path;
- browser-runtime path;
- static/PWA deployment path;
- video recording;
- backup/storage;
- network/power fallback;
- participant submission access.

## Ordered compliant fallback ladder

### Rung A — preferred

Frozen compact pretrained visual encoder + tiny coffee-specific classifier head + thresholded abstention.

### Rung B — lower-training-risk

Browser-side frozen encoder + embedding/reference similarity + thresholded abstention.

### Rung C — runtime-size fallback

Smaller browser-compatible pretrained encoder + tiny head or similarity layer.

### Diagnostic baseline only

Handcrafted color/texture rules may be retained as a diagnostic/benchmark baseline, but they are **not** the qualifying Small AI core unless Stage 0/6 rules explicitly establish otherwise.

Each rung must define:

- entry trigger;
- expected claim reduction;
- conversion/runtime implications.

The Stage 4 kill time and validation criteria trigger fallback rather than ad hoc sunk-cost continuation.

## Build order

1. browser/runtime smoke test;
2. data and license verification;
3. committed evaluation pre-registration;
4. learned model proof;
5. browser export;
6. minimum complete user-value loop;
7. offline proof;
8. hardening/evidence;
9. videos/docs;
10. early submission + protected buffer.

## Gate

Stage 5 closes when the readiness checklist, fallback ladder, and submission/recovery path are owner approved.

**Review:** Tier B.

---

# Stage 6 — Official-source recheck and implementation greenlight

## Objective

Recheck the Stage 0 compliance checklist against the official sources immediately before definitive implementation.

Stage 6 does **not** recreate Stage 0. It records:

- what was rechecked;
- whether any requirement changed;
- whether any ambiguity now blocks implementation;
- the owner's greenlight or stop decision.

The Stage 6 recheck satisfies the Stage 7-start compliance recheck unless official materials change between the Stage 6 owner decision and Stage 7 start.

The same compliance checklist is rechecked again before final submission in Stage 10.

Every implementation asset included in the submission must remain consistent with the Stage 0 originality, assistance, license, and disclosure rulings.

## Gate

Stage 6 closes when the recheck is recorded and the owner explicitly authorizes the Stage 7 implementation path.

**Review:** Tier B unless the official rules materially changed.

---

# Stage 7 — Definitive AI technical proof

## Objective

Demonstrate a real, browser-local learned visual path with credible evidence before investing further in product polish.

## 7.0 — Browser/runtime smoke test first

Before training:

- load the candidate pretrained encoder through the intended browser runtime;
- run one local forward pass on non-evaluation input;
- measure model/runtime bytes;
- measure representative inference latency;
- inspect memory/compatibility where available;
- confirm required core assets can run from cache with the network disconnected.

This smoke test must not open test or external partitions.

If the candidate fails the Stage 4 technical budgets, move to the next fallback rung before training.

## 7A — Data access and license verdict

- acquire the chosen development dataset from its primary source;
- record source and license;
- inspect archive structure;
- record exact file/class counts;
- execute the license gate;
- establish the quarantined external source;
- create/freeze the challenge-set definition without using it for model tuning.

## 7B — Pre-registration commit

Commit **before any training or validation result is produced**:

- generated split manifest;
- group/near-duplicate controls;
- class map;
- model candidate;
- preprocessing;
- operating-point rule;
- mandatory metric list;
- numerical validation acceptance criteria.

## 7C — Validation-only model development

- preprocess training/validation images;
- train the smallest task-specific head first;
- keep the backbone frozen initially;
- avoid broad hyperparameter search;
- use reproducible seed/configuration;
- make design decisions only from train/validation evidence;
- select the abstention operating point on validation.

## 7D — Freeze

Freeze:

- preprocessing;
- model;
- class mapping;
- threshold/operating point;
- OOD/fail-safe guard;
- runtime candidate.

No further design choice is allowed after the one-shot readout without invoking the burned-partition rule.

## 7E — Internal held-out one-shot readout

Run the frozen system once on the untouched internal test partition.

Report the mandatory Stage 4 metric core and preserve failures.

## 7F — External frozen readout

If the external dataset remains feasible and appropriately mapped, run the frozen system once on the quarantined external dataset.

Do not tune anything from the result.

Frame it as external transfer evidence, not Dominican field validation.

## 7G — Exported browser artifact

- export the frozen model;
- run actual local browser inference;
- measure final model/runtime bytes;
- measure latency on the Stage 4 target;
- confirm compatibility;
- prepare the minimal deployable inference path.

Deploy a minimal live shell as soon as this browser artifact passes so deployment failures surface early.

## Stage 7 gate

Stage 7 closes only if:

- the browser-local learned path works;
- the license gate passes;
- evaluation integrity controls were followed;
- the pre-registered validation criteria were met or the pre-approved fallback path was correctly triggered;
- the owner accepts the final evidence/claim ceiling.

If no qualifying learned path survives by the kill time, reduce claims and scope honestly rather than substituting a decorative non-AI component.

**Review:** Tier A.

---

# Stage 8 — Minimum complete MVP

## Objective

Build the smallest complete user-value loop around the frozen technical core.

## Required MVP components

- Spanish UI;
- image capture/upload;
- browser-local inference;
- visible-rust / no-visible-rust / not-sure output;
- explicit AI-suggestion state;
- pending-human-confirmation state;
- confirm/correct/review actions;
- no pre-filled human disposition;
- `confirmed_by_role`;
- structured local record;
- IndexedDB or equivalent local storage;
- deterministic extension summary based on human disposition;
- clear limitation/safety language;
- local-record deletion path.

## Architecture target

- static web application / PWA;
- browser-local visual inference;
- no server-side rust inference;
- no cloud LLM dependency;
- self-hosted runtime/model assets needed for the core;
- local persistence;
- no geolocation collection;
- no raw image retention by default.

## Gate

Stage 8 closes when the full user-value loop works end to end on the defined target browser/device evidence level and all human-authority controls behave as specified.

No stretch feature is added before this gate passes.

**Review:** Tier B unless implementation changes a locked safety/architecture boundary.

---

# Stage 9 — Hardening, challenge tests, evidence, and claims audit

## Objective

Turn the working prototype into a defensible submission candidate without adding new product scope.

## Fixed challenge tests

Run and report the frozen licensed challenge set, including:

- non-coffee;
- other disease/stress;
- blurry/low-quality;
- ambiguous inputs.

Report all results, including failures.

## Human-authority tests

At minimum:

1. attempting to save a formal observation without explicit human action must fail;
2. `human_disposition` must not be pre-filled from the AI proposal;
3. a `not sure` AI proposal must require explicit human disposition or review request;
4. deterministic summary output must not silently substitute an AI-only disposition for a human one.

## Offline proof protocol

1. First load online.
2. Confirm all required core assets have loaded.
3. Disconnect the network on the actual test device/environment.
4. Hard reload.
5. Run inference on an image not previously processed.
6. Save a formal human-confirmed record and generate its summary.
7. Close and reopen the app and confirm the record persists.

Capture:

- short screen recording;
- network/request evidence showing no core inference dependency;
- cached bundle size;
- device/browser used.

If this protocol cannot be run on a physical phone, state the actual environment and limitation.

## Other technical tests

- repeated inference timing;
- model/runtime integrity;
- local record persistence;
- delete-local-record behavior;
- image metadata/privacy behavior;
- deterministic summary behavior;
- broken/offline asset paths.

## One public evidence + claims table

Use one public table rather than separate overlapping ledgers.

Each material claim row should include:

- claim;
- tag: FACT / MEASURED / INFERENCE / ASSUMPTION / FUTURE WORK / PROHIBITED;
- supporting source or evidence artifact;
- measured value where applicable;
- device/dataset/partition context;
- limitation;
- README/demo wording allowed.

At minimum capture:

- dataset source/license/size;
- model/encoder/runtime and licenses;
- split/evaluation design;
- model/runtime bytes;
- cached bundle size;
- inference latency;
- internal metrics;
- abstention/coverage;
- confident-miss rate;
- external readout, if run;
- challenge-set behavior;
- offline proof;
- known failure modes;
- dataset geography/domain limitations.

## Claims that remain prohibited without direct evidence

Do not claim:

- improved yield;
- improved income;
- reduced pesticide use;
- treatment correctness;
- farmer adoption;
- field deployment;
- superior diagnostic accuracy versus experts;
- robustness on Dominican farms;
- replacement of extension officers.

## Gate

Stage 9 closes when the frozen candidate, evidence table, offline proof, authority tests, and public claim language are internally consistent and owner approved.

**Review:** Tier B. The independent final claims/compliance red team occurs in Stage 10.

---

# Stage 10 — Final repository, videos, red team, and submission

## Objective

Finish the judge-facing package early enough to survive deployment, upload, and form failures.

## Repository completion

Public-facing materials should include:

- README with a one-screen judge summary first;
- explicit repository license;
- architecture explanation;
- data/model/runtime attribution;
- AI/tooling disclosure required by Stage 0;
- evidence/claims table;
- responsible-AI section;
- limitations;
- reproducibility/run instructions;
- live demo link;
- offline-proof link/evidence;
- roadmap and selected audit records.

The README opening should answer, quickly:

- What problem?
- For whom?
- Why AI?
- Why Small AI?
- What is actually implemented?
- What evidence supports it?
- What does the model not know?
- Who makes the final decision?
- What works offline?
- What data/model/runtime were used?
- What was measured?
- What is explicitly not claimed?

## Submission mechanics

Before the protected buffer begins:

- live demo is already deployed and rechecked;
- required video matrix from Stage 0 is resolved;
- both submission destinations/forms have been dry-run as far as the platform permits;
- all links have been tested from a clean browser/session.

If the platform permits edits after initial submission, submit a complete honestly limited version **before** the protected buffer and update only if safe.

## Final independent red team

One final Tier A audit covers:

- disqualification/compliance risk;
- unsupported claims;
- broken demo paths;
- evidence/model mismatch;
- licensing/provenance;
- offline claim;
- human-authority integrity;
- responsible-AI/privacy language;
- repository completeness;
- video/submission consistency.

Material blockers must be repaired or explicitly accepted only where they are genuinely non-blocking.

## Final human review and receipt

José Antonio performs the final human review and remains the accountable entrant and submitter.

Capture evidence that each required submission was received, such as:

- confirmation page;
- receipt;
- timestamped screenshot.

## Gate

Stage 10 closes only when:

- required submissions are successfully received;
- receipt evidence exists;
- the public claims match the actual frozen system;
- the owner confirms final submission state.

**Review:** Tier A.

---

# Repository development sequence

Each stage remains a bounded PR so the project record is easy to inspect:

1. Stage 0 — compliance checklist
2. Stage 1 — problem research
3. Stage 2 — concept comparison
4. Stage 3 — route/product lock
5. Stage 4 — technical/evaluation pre-registration
6. Stage 5 — readiness/fallback plan
7. Stage 6 — official-source recheck/greenlight
8. Stage 7 — technical proof
9. Stage 8 — MVP
10. Stage 9 — hardening/evidence
11. Stage 10 — final package/submission

The stage order is a dependency structure for the project record. Public artifacts should state evidence and decisions directly and should not invent unsupported process-history claims.

---

# Current status

| Stage | Status |
|---|---|
| Roadmap/process architecture | In review |
| 0 — Rules & compliance | Not started |
| 1 — Agriculture problem research | Not started |
| 2 — Concept comparison | Not started |
| 3 — Product scope / route lock | Not started |
| 4 — Product/data/model/evaluation pre-registration | Not started |
| 5 — Readiness / fallback planning | Not started |
| 6 — Official-source recheck / greenlight | Not started |
| 7 — Definitive AI technical proof | Not started |
| 8 — Minimum complete MVP | Not started |
| 9 — Hardening / evidence / claims audit | Not started |
| 10 — Final package / red team / submission | Not started |

---

# Immediate next action

Complete the independent roadmap audit reconciliation, obtain owner approval for the repaired roadmap, and then begin Stage 0 as the first stage PR.
