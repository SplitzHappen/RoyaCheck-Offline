# RoyaCheck Offline — End-to-End Project Roadmap

**Competition:** Small AI for Development Hackathon 2026  
**Challenge:** Challenge 4 — Small AI for Development  
**Sector:** Agriculture  
**Submission deadline:** 4 October 2026, 9:00 AM ET / 13:00 UTC — confirmed by Stage 0; platform shows a 15-minute technical grace period that is recovery-only  
**Entrant:** José Antonio Tamburini Martínez — sole human entrant

---

## Purpose

This repository records a stage-gated path from challenge requirements and problem definition through technical proof, MVP implementation, validation, audit, and submission.

The process is deliberately narrow. The goal is not to maximize feature count. The goal is to build and evidence the smallest credible Small AI system that addresses a concrete agricultural workflow under realistic connectivity, device, safety, data, and time constraints.

Stage documents are **decision records, not narrative diaries**. They state the evidence, alternatives, decisions, controls, and current status needed by the next stage. A stage is not closed merely because its document exists.

## Controlling Agriculture case

The official participant challenge brief, especially Annex B, is the controlling problem specification. The canonical case interpretation is `docs/stages/00_rules/ANNEX_B_CASE_CONTRACT.md`.

Generic Agriculture research may contextualize the case but may not redefine it. If a generic assumption conflicts with Annex B, Annex B controls.

The entry is built for **Noor, a smallholder coffee farmer**, under the case constraints of extension access only about twice a year at best, manual/delayed service workflows, Noor’s own phone, her daughter’s weekend-assisted smartphone access, weak-connectivity conditions, and explicit scale preconditions such as farmer registries, phone access, and institutional trust.

The challenge-level unit of value is **one better agricultural decision**. RoyaCheck selects only the crop-observation/documentation/extension-handoff branch. It does not claim to explain Noor’s yield decline, solve her market-price problem, create a farmer registry, or replace extension capacity.

---

## Status vocabulary

Every stage uses exactly one status:

- **Not started**
- **In progress**
- **In review**
- **Closed — owner approved** (with the merged PR linked)
- **Reopened — in review** (used only when a later official-source or material-alignment issue requires correction)

---

## Locked product direction

RoyaCheck Offline is an offline-first coffee-leaf observation and extension-handoff aid for the Annex B Noor case.

The target user loop is:

1. Noor has a suspicious coffee-leaf concern under her ordinary farm workflow; the product does **not** assume a smartphone is continuously with her.
2. When the household smartphone and any needed assistance are available, a current eligible coffee-leaf image is captured or selected. The product does not require a weekend, a daughter-operated session, an attached-leaf protocol, a backing card, or re-identification of the originally noticed plant.
3. A compact browser-local visual system proposes:
   - **visible rust**;
   - **no visible rust**; or
   - **not sure**.
4. Noor explicitly confirms, corrects, or requests human review; assistance with device operation does not transfer agricultural authority.
5. Only the human disposition becomes the formal observation.
6. The observation is stored locally and can support the **Stage-3-locked, user-initiated** handoff for later human review.

The daughter/weekend scenario remains a case-faithful demo example of intermittent assisted access, not a mandatory technical protocol.

The exact supported agricultural decision is **not yet owner-locked**. Stage 3 must lock a real next-step prioritization decision in which the visual proposal materially affects what is prioritized for review.

Candidate direction to evaluate:

> **Does this suspicious coffee leaf show enough visible evidence consistent with rust that Noor should prioritize it for human review, or should she record that no visible rust was observed while keeping review available if concern remains?**

Canonical technical contract:

> **compact browser-local vision → thresholded abstention → deterministic human disposition → structured local record → deterministic extension summary**

The system is not a treatment engine, autonomous diagnosis system, or replacement for an extension officer.

---

## Product-scope exclusions and canonical claims pointer

The public product must not expand into these out-of-scope product features:

- pesticide recommendations;
- fungicide recommendations;
- dosage advice;
- treatment advice or treatment plans;
- autonomous farm decisions;
- generic crop diagnosis;
- weather features;
- maps;
- speech recognition;
- generative voice advisory;
- voice-agent workflows;
- automatic/direct WhatsApp integration (ordinary user-initiated sharing remains a Stage 3 option, not a locked decision);
- dashboards;
- LLM features in the rust decision;
- market-price prediction or market-price-reference features in the MVP;
- farmer-registry or extension-capacity features.

Simple prerecorded or human-voiced accessibility prompts are **not** excluded if Stage 3 later justifies them.

The **single authoritative prohibited-claims ceiling** is `docs/stages/00_rules/ANNEX_B_CASE_CONTRACT.md` §4. This roadmap must point to that ceiling rather than duplicate or paraphrase it.

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
13. **Treat Annex B as the controlling case specification.** Do not optimize for a generic Agriculture story that drifts away from Noor.
14. **Solve one Annex B branch explicitly.** The price, registry, and broader advisory branches remain acknowledged but out of scope.
15. **Respect Noor’s actual device context.** Do not assume continuous personal smartphone access or live connectivity.
16. **Use both data layers deliberately.** Sector data supports the AI task; common data grounds at least one real device/connectivity/language/inclusion constraint.

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

### Live clock reconciliation — 3 October 2026

The original schedule assumed Stages 0–6 would close by 5:30 PM ET. That assumption is now stale.

At the Stage 5 authorization checkpoint, the verified clock was approximately **7:49 PM ET**. The protected 5:30–9:00 AM submission/recovery buffer remains unchanged.

For the remaining pre-10:00 PM technical-proof window:

- close Stages 5/6 immediately;
- cap Stage 7.0 + 7A + 7B pre-training work at **30 minutes total**;
- preserve A0's **60-minute** development cap;
- preserve a final **30-minute minimum evidence/freeze reserve** before 10:00 PM ET;
- attempt A1 only if its full 30-minute cap plus the 30-minute evidence reserve mathematically fit before 10:00 PM ET.

Documentation overrun is absorbed by dropping/shortening non-buffer work, never by shrinking the protected submission buffer.

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

- Roadmap/process architecture, including material official-case realignments
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

Create one authoritative compliance checklist and one controlling Annex B case contract that later stages can enforce rather than re-interpreting the rules or the Noor scenario repeatedly.

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
- explicit disqualification risks;
- Annex B / Noor case invariants;
- exact challenge-brief judging weights and responsible-AI pass/fail gate;
- required 2–5 minute challenge-video content;
- common + sector data-layer expectations.

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
- the deadline and submission surfaces are reconfirmed;
- any active naming/branding compliance issue is repaired;
- authenticated participant submission fields that are visible at Stage 0 are captured rather than deferred.

**Review:** Tier A.

---

# Stage 1 — Agriculture problem-space research

## Objective

Establish the exact Annex B problem structure, Noor’s user/device/workflow constraints, the selected crop-observation problem slice, the unsolved price and registry branches, and why Small AI is appropriate for that one bounded decision.

## Research areas

- Noor’s exact Annex B scenario and day/device constraints;
- crop-uncertainty versus price-reference branches;
- extension scarcity, manual collection, delayed alerts, registry/phone/trust preconditions;
- shared/intermittent smartphone access;
- coffee-leaf observation/documentation workflow;
- non-AI baselines;
- why BRACOL is task-relevant but not field-validation evidence;
- common-data evidence for connectivity/device/inclusion;
- privacy, safety, localization, and human-authority constraints.

## Required outputs

- target-user definition;
- problem statement;
- current workflow;
- friction points;
- sourced facts versus project inferences;
- why AI may add value;
- why simpler tools alone do not fully satisfy the intended visual-observation step;
- operating constraints;
- measurable near-term outcome or proxy;
- one explicit better-agricultural-decision statement;
- real-world common-data context labeled as an evidence anchor, not Noor’s location;
- explicit non-claims for yield cause, price, registry, and institutional deployment.

## Gate

Stage 1 closes when all required outputs are present, sourced facts are distinguishable from inference, and the owner approves the problem frame.

**Review:** Tier B unless a material compliance/safety issue appears.

---

# Stage 2 — Concept comparison and elimination record

## Objective

Document a comparison limited to intervention paths that directly answer Annex B, including the crop-observation, price-reference, localized-advisory, timing, quality/value, and registry/precondition branches.

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
- selected route and residual risks;
- explicit treatment of Noor’s unsolved price branch;
- explicit treatment of farmer registry as a possible binding precondition rather than an AI feature.

## Gate

Stage 2 closes when the comparison record and elimination rationale are present and the owner accepts the selected route.

**Review:** Tier B.

---

# Stage 3 — Product scope and route lock

## Objective

Freeze the Annex B-specific product definition, one-better-decision statement, **intermittent/shared/assisted device-access invariant**, named prototype localization direction, authority boundary, unsolved case branches, and exclusions so later technical work cannot silently expand the intervention. Do not convert case examples such as daughter/weekend assistance into unnecessary mandatory choreography.

## Locked route

**Challenge 4 — Small AI for Development → Annex B Agriculture / Noor → RoyaCheck Offline**

Before Stage 3 closes it must lock all of the following owner decisions:

- the exact judge-facing one-better-agricultural-decision statement;
- the controlling device-access invariant, including intermittent/shared/assisted smartphone use without assuming continuous personal possession;
- the product-level capture contract, while leaving evidence-conditioned framing/side/orientation guidance to the technical/data stage;
- the rule that capture occurs when a suitable household smartphone and any needed assistance are available, without making delay itself a requirement;
- the role, if any, of Noor’s own calls/messages/mobile-money phone;
- the reviewer role, explicitly labeling any role not stated in Annex B as a project assumption;
- the handoff channel;
- whether the leaf image travels with the record;
- the explicit consent rule for image inclusion;
- what the reviewer sees;
- one coherent real-world implementation evidence anchor, explicitly not Noor’s fictional location;
- the actual prototype language: either a real local/home language in the anchor context with reasoning, or an explicitly weaker national/vehicular-language choice;
- the pre-committed answer to how the tool would fare in a less-supported language;
- the final label-to-action routing for **visible rust / no visible rust / not sure**;
- the explicit non-solution of the price-reference and farmer-registry branches.

## Primary value unit

A suspicious coffee-leaf observation is converted into:

1. a bounded AI proposal;
2. explicit uncertainty where appropriate;
3. a human-reviewed disposition;
4. a structured local record;
5. a deterministic extension handoff-ready summary.

## Label semantics

The user-facing labels are defined as:

- **visible rust:** visible evidence consistent with coffee leaf rust is present; if rust and another condition appear together, route to **visible rust**;
- **no visible rust:** no rust is observed on an otherwise eligible coffee-leaf image; this does **not** mean “healthy” and does not assert the absence of other conditions;
- **not sure:** low-confidence, ambiguous, low-quality, non-coffee/OOD, or other-disease/stress cases that should not be forced into the binary rust/no-rust authority path.

Other disease/stress without visible rust is routed to **not sure**, not silently treated as healthy.

Public UI and summaries must explicitly avoid equating “no visible rust” with “healthy leaf.” On a leaf Noor herself flagged as suspicious, the human-review option must remain prominent after a `no visible rust` proposal.

These label semantics do **not** silently decide the action mapping. Stage 3 must lock the final label-to-action routing. The three routes must differ meaningfully in **priority and/or urgency** rather than collapsing into the same action, while human review may still remain available and prominent after a `no visible rust` proposal.

### Owner-directed simplification note — 2026-10-03

The controlling Stage 3 amendment clarifies that:

- intermittent/shared/assisted smartphone access is the invariant;
- weekend/daughter/on-slope/backing-card details are examples or evidence-conditioned guidance, not mandatory product protocol;
- Lugisu remains the named prototype localization direction, but qualified human validation gates **validated-localized-usability claims**, not technical MVP progress;
- the product's development value is better allocation of scarce human-review attention, not faster extension access or additional extension capacity.

## Gate

Stage 3 closes when the product frame, label semantics, authority model, product-scope exclusions, and the Contract §4 claim ceiling are owner approved.

**Review:** Tier B.

---

# Stage 4 — Product, data, model, privacy, architecture, and evaluation pre-registration

## Objective

Specify the system and evaluation rules before any held-out or external readout.

This stage is the main technical pre-registration gate.

## Product specification

Stage 4 must prove that the technical specification remains compatible with the Annex B case contract, including shared/intermittent smartphone access, offline core behavior, later store-and-forward handoff, and the selected named local-language interaction.

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
- shared-device privacy is explicit: Stage 4 must address the fact that records stored on the daughter’s smartphone may be visible to other users of that device;
- the Stage-3-locked handoff path must be explicit and user initiated;
- no autonomous sending or automatic notification is permitted;
- if an image travels with the record, image inclusion requires an explicit consent step and the reviewer-visible payload must match the Stage 3 lock.

## Data plan

The data plan has two required layers:

1. **Sector/task data** for the learned leaf-image component. BRACOL is the preferred first candidate because the official Agriculture annex identifies it as directly relevant to Noor’s crop.
2. **Common/context data** for at least one real implementation constraint (device/connectivity/inclusion/language). Stage 3 first selects one coherent real-world evidence anchor; the source, year, and real country/context must be recorded and must not be presented as Noor’s fictional location. Stage 4 must make at least one common-data figure bind an actual design parameter such as first-load/model/bundle size or language support.

Stage 4 owner-approved 2026 evidence plan (supersedes the earlier candidate order):

- **development/internal evaluation:** BRACOL labelled whole-leaf records, subject to Stage 7A archive/license/metadata verification;
- **sole planned external transfer readout:** RoCoLe v2, quarantined from training, model selection, threshold selection, OOD design, and de-risking;
- **Saposoa Arabica v2:** future candidate only for this submission; it is not conditionally opened after RoCoLe;
- **BRACOT:** optional frozen unknown/scene-complexity challenge source only, not a rust/no-rust test set.

If BRACOL cannot serve as development data, stop and return to the owner before redesignating any external source or opening any readout.

Every dataset used must document:

- source;
- license;
- size;
- geography;
- acquisition setting;
- class mapping;
- coverage limitations;
- exact role: training / validation / test / external / challenge set.

The Stage 4 dataset record must explicitly guard against the challenge brief's acquisition-setting warning: performance on controlled, studio-like, or plain-background imagery must not be presented as evidence of robustness on ordinary field photos. Dataset acquisition conditions and any field-photo coverage must therefore be recorded as a claim-limiting factor.

If maize or bean examples are included in the later challenge set only where licensed examples are available, the final challenge-set record must disclose any such licensing-driven omission rather than imply complete crop-set coverage.

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
- compatibility with the chosen repository license;
- compatibility of any third-party content that appears in the repository, live demo, videos, or submission with the organizer's stated downstream uses and required attribution.

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
- include non-coffee images, **maize and bean leaves from the case crop set where licensed examples are available**, other disease/stress, and blurry/low-quality images;
- define and justify the required coffee-leaf capture side/orientation after the development-data acquisition characteristics are verified; do not assume a leaf-side workflow without evidence;
- report low confidence, OOD/non-coffee, other disease/stress, and image-quality routes to `not sure` separately where the design supports those distinctions;
- report every case, including failures;
- for every reported U/unknown-OOD category with at least 20 frozen examples, pre-register **≥70% routed to `not sure`**; below that target, make no fail-safe/OOD claim for that category;
- for U categories with fewer than 20 examples, report counts/intervals descriptively and make no target claim.

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

Make likely failure modes cheap to discover and cheap to recover from without changing the Annex B problem. Fallbacks may simplify the technical route but may not silently switch to the price, registry, or unrelated Agriculture branches.

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

Stage 4 repairs supersede the earlier generic ladder.

### A0 — preferred learned path

MobileNetV3-Small 1.0, frozen backbone, pooled 576-dimensional features, five-way linear head, under the exact Stage 4 training configuration and 60-minute Stage 7C cap.

### A1 — bounded fine-tuning fallback

Only if A0 fails the pre-registered validation gate and clock permits: initialize from A0, unfreeze only the final MobileNetV3 backbone block plus head, under the exact Stage 4 configuration and 30-minute additional cap.

### C — runtime-size fallback

A smaller MobileNetV3-Small 0.50-class architecture may be invoked **only if Stage 7.0 runtime/model budgets fail before definitive training**. Its exact pretrained artifact remains license-gated.

### D — stop / reduce

If A0 and, when the preregistered clock permits, A1 both fail the **full D4-11 validation gate**, stop the full three-state learned claim. The pre-authorized degraded safety mode disables `no visible rust`: high-confidence rust may still route to `visible rust`; every other learned outcome routes to `not sure`. Its `T_rust` must be selected on validation only from the frozen 0.50–0.95 grid, maximizing `|R→VR|` subject to `|(H∪O)→VR| / |→VR| ≤ 20%` (at least 80% validation precision among `visible rust` routes); ties prefer the higher `T_rust`. If no threshold satisfies the 20% cap, there is no learned proposal. The degraded artifact remains subject to the same 7D parity and 7E/7F one-shot discipline.

### Diagnostic baseline only

Handcrafted color/texture rules may be retained as a diagnostic/benchmark baseline, but they are **not** the qualifying Small AI core unless Stage 0/6 rules explicitly establish otherwise.

Fallback selection may not use internal-test, external, or challenge results.

The Stage 4 absolute-clock rule and validation criteria trigger fallback rather than ad hoc sunk-cost continuation.

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

## 7D — Freeze, export, and validation-only parity

Freeze:

- preprocessing;
- model;
- class mapping;
- threshold/operating point;
- OOD/fail-safe guard;
- runtime candidate;
- export format and precision.

Before any one-shot readout:

- export the exact FP32 ONNX artifact intended to ship;
- freeze the exact browser preprocessing implementation;
- run the pre-registered validation-only parity check;
- require the Stage 4 route-agreement gate;
- measure model/runtime bytes and browser compatibility on the Stage 4 target.

No held-out or external result may be used to repair parity.

## 7E — Internal held-out one-shot readout

Run the untouched internal test partition exactly once using the **same frozen ONNX artifact and preprocessing path that passed 7D parity**.

Report the mandatory Stage 4 metric core and preserve failures.

## 7F — External frozen readout

If the owner-approved external source remains feasible and appropriately mapped, run the same frozen ONNX artifact and preprocessing path once on the quarantined external dataset.

Do not tune anything from the result.

Frame it as external transfer evidence, not field validation for Noor or any specific deployment context.

## 7G — Browser evidence and minimal deployable inference path

- run actual local browser inference using the already frozen artifact;
- measure final latency on the Stage 4 target under the pre-registered protocol;
- confirm offline/cache behavior and compatibility;
- prepare the minimal deployable inference path.

Deploy a minimal live shell as soon as this already-evaluated browser artifact passes so deployment failures surface early.

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

- the Stage 3 named local-language UI interaction;
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
- deterministic extension handoff summary based on human disposition;
- the **Stage-3-locked, user-initiated handoff** itself, using the locked channel, consent step, and reviewer-visible payload rather than an implied or autonomous integration;
- store-now/review-later behavior that does not require a live connection;
- no UX claim that Noor carries the smartphone on the slope all day;
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
- no raw image retention by default;
- if Stage 3 locks a handoff in which the image travels, retaining that image until the user-initiated handoff requires explicit consent and the local deletion path must cover the retained image as well as its record.

## Gate

Stage 8 closes when the full user-value loop works end to end on the defined target browser/device evidence level and all human-authority controls behave as specified.

Before Stage 8 closes, UI strings and live-demo metadata must pass the Stage 0 naming/branding policy.

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

## Handoff / consent tests

Using whatever Stage 3 locks, verify that:

1. the handoff requires an explicit user action and uses only the locked channel;
2. the reviewer receives only the locked reviewer-visible payload;
3. if an image travels, image inclusion cannot proceed without the locked consent step;
4. any image retained until handoff is removed by the local deletion path when the user deletes the associated local material;
5. no test or UI state implies autonomous sending, automatic notification, or institutional integration.

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

## Claims gate

Stage 9 does **not** create or rely on a second prohibited-claims list. It audits every README/demo/video phrase against the **single authoritative claims ceiling** in `docs/stages/00_rules/ANNEX_B_CASE_CONTRACT.md` §4.

A claim may move above that ceiling only if a later authorized evidence gate directly supports it and the owner explicitly approves the wording. Otherwise the Contract §4 prohibition remains controlling.

## Gate

Stage 9 closes when the frozen candidate, evidence table, offline proof, authority tests, and public claim language are internally consistent and owner approved.

**Review:** Tier B. The independent final claims/compliance red team occurs in Stage 10.

---

# Stage 10 — Final repository, videos, red team, and submission

## Objective

Finish the judge-facing package early enough to survive deployment, upload, and form failures.

## Judge-facing alignment

Before final packaging, map the submission to the official challenge-brief **questions as well as the weights**:

| Criterion | Weight / gate | Official question |
|---|---:|---|
| The built solution (Small AI fidelity) | 25% | **Does the tool work end to end within the constraints of the sector?** |
| Development relevance and impact | 20% | **Is this a real problem from the sector briefs, and does the outcome matter to the person it is built for?** |
| Data grounding | 15% | **Does the tool help address an identified gap in the data, is the data modeling sound?** |
| Evidence it works | 15% | **Does the solution fit the challenges identified in the sector, does it add other constraints?** |
| Clarity, design and inclusivity / Value proposition for AI | 15% | **What the tool does with AI (machine learning, computer vision, language, generative), and would a simpler tool (SMS, a spreadsheet, a search) do the same job?** |
| Scalability, replicability and what happens next | 10% | **Could another setting reuse this innovation?** |
| Responsible AI, data and safety | Pass/fail | **Are the limits respected, and the account of privacy, consent, bias, and human oversight credible?** |

The 2–5 minute challenge video is shortlist-gating: **entries without it will not make the shortlist**. It must use the organizer’s exact problem-sentence structure:

> **Because of this tool, [user] will [action] by [when] that they would otherwise [not do / do late / do worse]; we know because [evidence].**

It must also contain the AI-vs-simpler-tool explanation, guardrails, end-to-end demo, truthful user-day placement and “what happens next,” relevant stack details, and localization reflection.

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
- all links have been tested from a clean browser/session;
- all public repository documents, repository name/description, README, live-demo metadata, UI strings, video title cards/thumbnails, and submission-facing materials pass a naming/branding sweep;
- the final third-party asset inventory has been rechecked for organizer-license compatibility.

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
- video/submission consistency;
- naming/branding compliance;
- third-party asset compatibility with the organizer's submission licence;
- submitted-commit integrity and live-demo availability through judging.

Material blockers must be repaired or explicitly accepted only where they are genuinely non-blocking.

## Final human review and receipt

José Antonio performs the final human review and remains the accountable entrant and submitter.

Capture evidence that each required submission was received, such as:

- confirmation page;
- receipt;
- timestamped screenshot.

Keep raw receipt evidence private if it exposes account identifiers or personal information. If a public record is useful, publish only a redacted statement.

Tag or otherwise record the submitted commit SHA. Absent explicit organizer permission, do not push new judged-default-branch changes after the deadline while judging is active.

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
| Roadmap/process architecture | Closed — owner approved (PR #9) |
| 0 — Rules & compliance | Closed — owner approved (PR #9) |
| 1 — Agriculture problem research | Closed — owner approved (PR #9) |
| 2 — Concept comparison | Closed — owner approved (PR #9) |
| 3 — Product scope / route lock | Closed — owner approved (PR #11); simplified by PR #15 |
| 4 — Product/data/model/evaluation pre-registration | Closed — owner approved (PR #13) |
| 5 — Readiness / fallback planning | Closed — owner approved (PR #16) |
| 6 — Official-source recheck / greenlight | In review |
| 7 — Definitive AI technical proof | Not started |
| 8 — Minimum complete MVP | Not started |
| 9 — Hardening / evidence / claims audit | Not started |
| 10 — Final package / red team / submission | Not started |

---

# Immediate next action

Stages 0–5 are merged and closed. Stage 6 official-source recheck is **In review**.

The current public-source recheck found no new blocking rule and no reason to reopen Stages 0–4. The remaining work is to record the Stage 6 greenlight/closure and merge its bounded record. Definitive Stage 7 training and all held-out/external/challenge readouts remain blocked until that greenlight is merged.
