# Stage 4 Tier A Independent Audit Package — Technical Pre-Registration

## Purpose

Independently audit the **owner-approved Stage 4 technical pre-registration** for RoyaCheck Offline **before any definitive training, validation-result-driven design, held-out readout, external readout, or challenge-set result**.

This is the main technical/evaluation pre-registration gate.

The audit should attack the plan as if later evidence will only be credible if these rules were fixed correctly in advance.

---

## Repository target

Repository: `SplitzHappen/RoyaCheck-Offline`

PR: `#13 — Stage 4: technical pre-registration`

Branch: `chatgpt/stage-04-technical-preregistration`

Read at minimum:

1. `docs/stages/04_technical_prereg/STAGE_04_TECHNICAL_PREREGISTRATION.md`
2. `ROADMAP.md`
3. `docs/stages/03_product_scope/STAGE_03_PRODUCT_ROUTE_LOCK.md`
4. `docs/stages/00_rules/ANNEX_B_CASE_CONTRACT.md`
5. `docs/stages/01_problem_research/STAGE_01_AGRICULTURE_PROBLEM_RESEARCH.md`
6. `docs/stages/02_concept_comparison/STAGE_02_CONCEPT_COMPARISON.md`
7. the complete PR #13 diff

The owner has explicitly approved D4-01 through D4-20, subject to the stated license gates and later evidence requirements.

The primary physical browser/device evidence target is **Apple iPhone 17 Pro Max + Safari**.

Treat owner approval as a governance fact, not as evidence that a technical choice is correct. Challenge any materially weak rule.

---

# Audit scope

## A. Stage-boundary and pre-registration integrity

Confirm that Stage 4 has not:

- produced definitive training results;
- used validation results to select a model, threshold, preprocessing rule, or fallback;
- opened an internal test partition;
- opened RoCoLe/Saposoa as external evidence;
- opened/fitted a challenge set;
- prematurely implemented the production MVP.

Check whether the pre-registration is sufficiently specific that Stage 7 cannot silently redefine success after seeing results.

Identify any rule that remains vague enough to permit post-hoc cherry-picking.

---

## B. Dataset factual verification

Verify from primary/authoritative sources wherever possible:

### BRACOL

Check:

- DOI / source;
- CC BY 4.0 or other actual license;
- whole-leaf original image count;
- cropped-image count;
- Arabica species;
- capture devices/settings;
- lower/abaxial-side claim;
- white-background/controlled-acquisition claim;
- actual whole-leaf class labels and whether the proposed five-way mapping is valid.

Determine whether D4-01 and D4-05 accurately reflect the archive/publication.

### RoCoLe v2

Check:

- DOI / source;
- license;
- 1,560 image count;
- Robusta species;
- field/smartphone acquisition;
- exact labels/annotations;
- whether healthy-vs-rust metrics required by D4-12 can actually be derived without inventing labels.

Assess whether using RoCoLe as a quarantined transfer source is technically coherent.

### Saposoa Arabica v2

Check:

- source/version/publication date;
- license;
- 1,500 image count;
- class balance;
- Arabica status;
- acquisition protocol;
- whether it is legitimate to treat it as an optional second external readout.

Because this source is very recent, be especially skeptical of unsupported metadata.

### BRACOT

Check:

- source/license;
- image and instance counts;
- field-scene nature;
- whether a frozen challenge role is coherent without turning it into an undeclared tuning source.

Flag any source that cannot be independently substantiated.

---

## C. License and provenance review

Audit whether the plan properly distinguishes:

- code/library license;
- dataset license;
- pretrained-weight/model-artifact terms;
- upstream training-data restrictions;
- redistribution rights for derived weights;
- attribution obligations;
- public repository/live-demo/video use.

Pay particular attention to:

- TorchVision model code vs pretrained weight terms;
- `timm` / Hugging Face model-card licensing;
- ImageNet-derived pretrained weights;
- ONNX Runtime license;
- CC BY requirements for datasets.

If exact pretrained weights are not yet legally cleared, confirm that keeping the **architecture** approved while leaving the exact weight artifact license-gated is acceptable.

---

## D. Source-class → product-output mapping

Audit D4-05 adversarially.

Check whether:

- a five-way BRACOL source head is actually supported by the whole-leaf labels;
- `healthy` can defensibly map to `no visible rust` rather than “healthy”;
- supported non-rust disease classes routing to `not sure` is safe and coherent;
- the mapping creates any hidden class imbalance or semantic leakage;
- a five-way head is preferable to a binary rust/non-rust head for this product;
- the public output remains exactly the Stage 3 three-state contract.

Do not choose new agronomic labels.

---

## E. Model-family and training-plan review

Audit D4-06.

Check:

- factual MobileNetV3-Small parameter/FLOP/weight-size claims;
- whether frozen-backbone + linear five-way head is technically plausible for this dataset size;
- whether the narrowly pre-authorized last-block unfreeze fallback is precise enough;
- whether the plan accidentally authorizes broad hyperparameter exploration;
- whether model choice remains feasible for browser export.

The audit may recommend narrower wording, but must not run training.

---

## F. Browser/runtime architecture

Audit D4-07 and D4-18.

Verify:

- ONNX Runtime Web supports WASM browser inference;
- current Safari/iOS support is sufficient for the required WASM path;
- WebGPU is correctly treated as optional rather than required;
- WebGL maintenance-mode wording is accurate;
- PWA/offline-cache assumptions are technically plausible on iPhone Safari;
- first-load/cache/offline wording does not overclaim browser-storage persistence guarantees.

Assess the evidence target:

> **iPhone 17 Pro Max + Safari**

Confirm that this is valid as a **real-device compatibility/performance target** but does not support affordable/basic-phone claims.

Flag any iOS/Safari-specific caching, service-worker, memory, model-loading, or browser-lifecycle risk that should be pre-registered before Stage 7.

---

## G. Preprocessing and capture-domain integrity

Audit D4-08.

Check:

- whether 224×224 minimum-dimension rejection is logically justified;
- whether resize-256 → center-crop-224 is appropriate for the selected pretrained transform;
- whether center cropping could remove relevant lesions under the Stage 3 on-plant capture workflow;
- metadata-stripping/re-encoding claim;
- whether vertical flips are agronomically/image-semantically safe;
- whether mild brightness/contrast augmentation is coherent;
- whether the backing-card/no-card capture conditions are adequately represented in the later evaluation plan;
- whether exact leaf-side/orientation is correctly deferred.

Any acquisition mismatch that undermines BRACOL → product transfer should be identified explicitly.

---

## H. Split, leakage and quarantine review

Audit D4-09.

Check whether:

- publisher-provided split preference is safe;
- otherwise 70/15/15 stratification is suitable for a 1,747-image dataset;
- any subject/leaf/device grouping metadata should supersede simple stratification;
- pHash Hamming distance ≤ 5 is defensible as a duplicate-candidate trigger rather than an evidence-free magic number;
- “manual inspection” of duplicate candidates could contaminate quarantine;
- the internal test and external sources can genuinely remain untouched while train/validation work proceeds;
- the burned-partition rule is sufficient.

Flag any leakage risk that could invalidate the evidence.

---

## I. Threshold-selection and statistical integrity

Audit D4-10 and D4-11 carefully.

Check:

- whether two separate thresholds (`T_rust`, `T_healthy`) are well-defined with a five-way head;
- whether searching 0.50–0.95 in 0.01 increments is statistically reasonable given validation size;
- whether the deterministic tie-break is unambiguous;
- whether selecting thresholds while simultaneously enforcing many validation constraints risks severe validation overfitting;
- whether “rust recall on accepted rust cases” and “specificity on accepted clearly healthy cases” have safe, unambiguous denominators;
- whether coverage definitions are precise;
- whether the proposed numerical validation criteria are achievable, appropriately conservative, and sample-size-aware;
- whether confidence intervals should be part of the gate itself for safety-critical rates.

Pay special attention to the **confident-miss rate**:

> true rust → confident `no visible rust`

Determine whether ≤5% on validation is a sufficient pre-registration control given sample size.

If a better mathematically precise definition is required, give the narrowest repair without using any model result.

---

## J. Internal test and external claim-reduction rules

Audit D4-11/D4-12.

Check whether:

- internal-test failure criteria (confident miss >10% or accepted-rust recall <75%) are coherent with the validation gate;
- the plan improperly allows the product to continue after failed held-out evidence;
- “reduced proof-of-concept claim” is specific enough or needs a fixed claim ceiling;
- RoCoLe label mapping can support the listed metrics;
- cross-species transfer is framed honestly;
- no retuning from external evidence is allowed.

---

## K. OOD/challenge-set design

Audit D4-13.

Check:

- whether non-coffee, maize, bean, other disease/stress, blurred images, and field scenes are appropriate;
- whether the proposed `not sure` targets are technically meaningful;
- whether softmax confidence is correctly rejected as a universal OOD detector;
- whether “image failing deterministic eligibility checks → not sure” requires a defined deterministic image-quality check before evaluation;
- whether target categories need minimum counts or confidence intervals;
- whether using BRACOT or other challenge assets could leak design information.

The audit should distinguish:

- **unknown/OOD detection**;
- **known non-rust coffee disease routing**;
- **image-quality rejection**.

Do not let those three concepts blur into one metric.

---

## L. Strongest simple baseline / AI necessity

Audit D4-14.

Ask whether:

- printed symptom guide + structured form + later human review remains the strongest realistic simple baseline;
- the Stage 4 AI-value statement is honest;
- the evaluation plan can demonstrate a distinct learned-AI contribution without claiming superiority that was not measured.

If a human baseline study is infeasible in the remaining hackathon time, confirm what can and cannot be claimed.

---

## M. Privacy/shared-device contract

Audit D4-15.

Check:

- data minimization;
- image retention opt-in;
- metadata stripping;
- separate display consent;
- cascading deletion;
- service-worker cache boundary;
- local `ai_score` handling;
- reviewer-visible payload consistency with Stage 3;
- shared-browser-profile exposure;
- whether claiming re-encoding strips EXIF is implementation-verifiable;
- whether any local-storage design implies false privacy.

Do not invent authentication or encryption unless later implemented and tested.

---

## N. Localization-validation contract

Audit D4-16.

Check whether the 13-item semantic string inventory is:

- small enough for human validation during the hackathon;
- sufficient for the safety-critical workflow;
- consistent with the Lugisu/Bududa/south-Bugisu Stage 3 constraint;
- free of hidden unvalidated dynamic text.

Confirm that no actual Lugisu translation is being silently approved in Stage 4.

---

## O. Common-data binding

Audit D4-17.

Verify the GSMA Uganda 2024 figure as reported in SOMIC 2025 if source access permits:

- 33% urban smartphone ownership;
- 20% rural smartphone ownership;
- Figure 15 / PDF p. 31.

Then assess whether the design binding is logically valid:

> one shared/intermittent household smartphone; no second personal device, account sync, cloud inference, background push, or live network after required assets are cached.

The 20% figure must not be misused to derive an unsupported bandwidth/model-size figure or to claim Noor's actual device ownership.

---

## P. Technical budgets and target-device evidence

Audit D4-18.

Check whether:

- ≤12 MB model;
- preferred ≤5 MB optimized model;
- ≤30 MB core cached assets;
- median ≤2.0 s;
- p95 ≤4.0 s;
- >5.0 s median unusable trigger

are technically coherent **pre-registered engineering targets**, rather than falsely evidence-derived thresholds.

Assess whether iPhone 17 Pro Max + Safari is an acceptable physical test target while requiring explicit limitation that it is high-end and non-representative of low-cost devices.

If a budget is arbitrary but useful, say so. The issue is not whether it was handed down by a source; the issue is whether it creates a defensible go/no-go rule.

---

## Q. Kill time and fallback ladder

Audit D4-19/D4-20.

Check:

- 90 min preferred path;
- +45 min first fallback;
- +30 min second fallback;
- hard 3-hour learned-path kill time;
- whether the timing is internally consistent;
- whether each fallback keeps the same product contract and evaluation integrity;
- whether the “stop/reduce” rung is sufficiently specific;
- whether a fallback could accidentally use test/external results to choose the next rung.

---

# Required verdict severity

Use:

- **Blocking** — Stage 4 cannot close or the preregistration would invalidate later evidence.
- **Major** — material problem in licensing, evaluation integrity, safety, dataset mapping, statistical validity, runtime feasibility, or Stage 3 compatibility.
- **Minor** — precision/traceability issue that does not change the technical route or evidence integrity.

Do not inflate optional refinements into findings.

---

# Required output

# Stage 4 Tier A Audit — RoyaCheck Offline

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

Maximum 10 concise paragraphs.

## D4-01 through D4-20 verification matrix

For every D4 item:

- **Status:** Confirmed / Confirmed with caveat / Not confirmed
- **Evidence**
- **Assessment**
- **Required repair**, only if needed

## Blocking findings

If none, write `None.`

## Major findings

If none, write `None.`

## Minor findings

If none, write `None.`

## Dataset and license review

Summarize factual verification and any unresolved license/provenance risk.

## Evaluation-integrity review

Assess split, quarantine, threshold selection, validation gate, test/external one-shot design, and burned-partition rules.

## Safety/statistical review

Assess confident-miss control, abstention, coverage, OOD/challenge design, and denominator/sample-size validity.

## Runtime/device review

Assess ONNX Runtime Web/WASM, iPhone 17 Pro Max + Safari evidence level, cache/offline claims, model/bundle/latency budgets, and any iOS-specific risk.

## Privacy/localization review

Assess shared-device privacy, image handling, reviewer payload, and Lugisu validation plan.

## AI-value / baseline review

Assess whether the plan supports a distinct learned-AI contribution without unsupported superiority claims.

## Stage-boundary review

Confirm whether any definitive result, held-out readout, external readout, or implementation choice was improperly made before closure.

## Stage-control decision

Answer explicitly:

1. Can D4-01 through D4-20 stand?
2. Can Stage 4 close after reconciliation of this audit?
3. Can PR #13 proceed toward owner closure/merge after repairs, if any?
4. Is a narrow confirmation sufficient after repair, or is a full re-audit required?
5. Can Stage 5/6 planning proceed after Stage 4 closure while definitive Stage 7 evidence remains blocked by the preregistration/greenlight gates?
6. Does anything require reopening Stages 0–3?

## Scope boundary

Do not train a model.

Do not inspect or use held-out/internal-test, external, or challenge-set results.

Do not redesign the Stage 3 product unless a genuine technical incompatibility requires owner reconsideration.

Do not perform Stage 7 implementation.

When a fact cannot be verified because a source is unavailable, distinguish **not verified** from **false**.
