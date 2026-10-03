# Stage 4 — Technical Pre-Registration

**Stage:** 4  
**Status:** In review — Tier A audit repairs owner-approved; narrow confirmation pending  
**Sector:** Agriculture  
**Route:** RoyaCheck Offline  
**Controlling product lock:** `docs/stages/03_product_scope/STAGE_03_PRODUCT_ROUTE_LOCK.md`  
**Evaluation integrity rule:** no definitive training result, internal held-out readout, external readout, or challenge-set result may be used before the applicable pre-registration/freeze gate.

---

## 1. Purpose

Stage 4 converts the closed Stage 3 product route into a technical and evaluation contract.

This file distinguishes:

- **Verified external facts** — supported by primary/authoritative sources.
- **Project constraints** — inherited from the closed case/product contract.
- **Technical hypotheses** — plausible but not yet measured.
- **Owner-approved pre-registration decisions** — D4-01 through D4-20 explicitly accepted by José Antonio on 2026-10-03, subject to the stated license gates and later evidence requirements.
- **Later evidence** — measurements that may only be produced after the authorized Stage 7 sequence.

Nothing in this document is a training result.

No held-out, external, or challenge-set performance has been inspected.

---

## 2. Non-negotiable product behavior inherited from Stage 3

The technical design must preserve:

1. browser-local visual inference after required assets are cached;
2. outputs limited to:
   - `visible rust`;
   - `no visible rust`;
   - `not sure`;
3. an AI proposal never becomes a formal observation automatically;
4. only the human disposition becomes formal;
5. `visible rust` routes to **Review first**, not to treatment;
6. `not sure` routes to **Retake or request review**;
7. `no visible rust` routes to **Record and monitor**, never “healthy”, “all clear”, or “no disease”;
8. no geolocation;
9. no autonomous sending or notification;
10. image retention is Noor opt-in at save time;
11. reviewer image display requires separate Noor consent;
12. reviewer-visible payload excludes `ai_score`, treatment, yield/income/price claims, location, and unnecessary profile data;
13. RoyaCheck is designed for **intermittent, shared or assisted smartphone access** and does not assume continuous personal possession or independent operation by Noor;
14. capture/select a **current eligible coffee-leaf image** when the household smartphone and any needed assistance are available; no weekend, daughter-operated, original-plant, attached-leaf, backing-card, preservation, transport, or detachment protocol is a mandatory product invariant;
15. the handoff remains user-initiated, in-person and on-device at a qualifying human-review opportunity when the household smartphone is present;
16. Lugisu remains the current named prototype localization direction, but qualified human validation gates a **validated-localized-usability claim**, not technical MVP progress; without validation, any Lugisu strings are explicitly an unvalidated prototype draft and English remains available;
17. Uganda/Bugisu is an evidence anchor only, never Noor's fictional location.

The daughter/weekend scenario remains a case-faithful demo example of intermittent assisted use, not the only valid operating path.

---

# 3. Data-source dossier

## 3.1 BRACOL — owner-approved development source

**Primary source:** Mendeley Data, DOI `10.17632/yy2k5y8mxg.1`  
**License shown by source:** CC BY 4.0; re-check exact downloaded archive and attribution obligations at Stage 7A  
**Crop/species:** Arabica coffee  
**Geography:** Espírito Santo, Brazil  
**Collection:** 1,747 leaves collected; **1,685 labelled**; 62 excluded by the authors because predominant stress was not distinguishable  
**Additional symptom crops:** 2,147 cropped symptom images exist but are excluded from the preferred path  
**Capture devices reported by the source/publication:** ASUS Zenfone 2, Xiaomi Redmi 5A, Xiaomi S2, Samsung Galaxy S8, iPhone 6S  
**Acquisition:** detached leaves, lower/abaxial side, partially controlled, white background  
**Published label metadata:** `predominant_stress` plus per-stress presence flags including `rust`  
**Coverage limitation:** strong task relevance; no direct evidence of ordinary on-plant field robustness.

### Recommendation D4-01

**Owner status:** Accepted originally on 2026-10-03 and repaired with explicit owner approval after Tier A audit.

Use only the **1,685 labelled whole-leaf records** for the preferred development path.

Exclude:

- all 62 author-excluded/unlabelled leaves from every partition;
- all cropped symptom images from the preferred path.

Stage 7A must confirm that the downloaded archive contains the expected per-stress metadata before Stage 7B. If the expected rust-presence metadata are missing or materially inconsistent, stop and return to the owner before any definitive training.

License verdict at Stage 4: **provisional pass for planning only**; exact archive, attribution, and redistribution obligations remain a Stage 7A gate.

---

## 3.2 RoCoLe v2 — owner-approved sole planned external-transfer source for this submission

**Primary source:** Mendeley Data, DOI `10.17632/c5yvn32dzg.2`  
**License shown by source:** CC BY 4.0; re-check archive-level terms at Stage 7A  
**Crop/species:** Robusta coffee  
**Geography:** Manabí, Ecuador  
**Images:** 1,560, reported as four images per plant across 390 plants  
**Acquisition:** on-plant smartphone field capture, natural backgrounds, mixed upper/back leaf views and mixed resolutions  
**Published labels:** healthy, rust levels 1–4, and red-spider-mite structures; eight state/classification conflicts were identified by the Tier A audit and must be re-confirmed at Stage 7A  
**Coverage limitation:** a multiply shifted transfer source: species, field capture, leaf side, resolution, geography, and plant clustering differ from BRACOL.

### Recommendation D4-02

**Owner status:** Accepted originally on 2026-10-03 and repaired with explicit owner approval after Tier A audit.

RoCoLe v2 is the **sole planned external-transfer readout for the 2026 submission**.

Freeze the metadata-only map before viewing evaluation images:

- rust levels 1–4 → `R`;
- healthy → `H`;
- red-spider-mite → `O-unseen`, reported separately and excluded from rust/healthy metrics;
- the eight reported state/classification conflicts → exclude and disclose if confirmed at Stage 7A.

No RoCoLe image may influence model choice, preprocessing, threshold selection, fallback choice, OOD design, or any other design decision before the one-shot external readout.

Frame any result as **cross-dataset transfer under species + acquisition-domain shift**, never field validation for Noor, Uganda, or low-cost devices.

---

## 3.3 Saposoa Arabica v2 — future candidate only

Saposoa is **removed from the active 2026 evidence path**.

The current record may retain it as a future external candidate, but:

- it will not be read conditionally after RoCoLe;
- it will not influence Stage 7 decisions;
- its recent Mendeley metadata, licence, acquisition protocol, and leaf-spot pathogen identity must be independently re-verified before any future use.

This supersedes the earlier ROADMAP default that named Saposoa as the primary external readout.

### Recommendation D4-03

**Owner status:** Modified and accepted by José Antonio after Tier A audit.

For this submission, **do not use Saposoa as an external readout**. This removes a selective-reporting channel and keeps one external source.

---

## 3.4 BRACOT — optional unknown/scene-complexity challenge source

**Primary source:** Mendeley Data, DOI `10.17632/pmkbyjpf6k.1`  
**License shown by source:** CC BY 4.0; re-check at Stage 7A  
**Crop/species:** Arabica coffee  
**Geography:** same Espírito Santo region/lab lineage as BRACOL  
**Images:** 300 field photographs with 1,662 annotated leaf instances  
**Acquisition:** on-tree smartphone field scenes  
**Annotation limitation:** per-leaf disease labels are not relied upon by this project.

### Recommendation D4-04

**Owner status:** Accepted originally on 2026-10-03 and repaired with explicit owner approval after Tier A audit.

BRACOT may be used only as a frozen **unknown/scene-complexity** challenge source.

If used:

- select the subset by seeded file-list sampling without browsing images;
- expected product route is `not sure`;
- do not create project-authored disease labels;
- do not present BRACOT as an independent rust/no-rust test set;
- disclose its shared lab/locality relationship with BRACOL.

# 4. Source-class and product-output mapping

## Recommendation D4-05 — rust-presence-priority five-way head → three product outputs

**Owner status:** Repaired and accepted by José Antonio after Tier A audit.

Use the BRACOL published per-stress metadata to construct source truth.

Define:

- `R` = every labelled leaf with `rust flag = 1`, regardless of predominant stress;
- `H` = labelled leaf with all supported stress flags absent;
- `O` = non-rust other-condition leaf, defined only where `rust flag = 0`, then separated by predominant non-rust class.

The five learned source classes are:

1. healthy;
2. rust-present;
3. leaf miner without rust;
4. brown leaf spot / source-equivalent class without rust;
5. cercospora without rust.

A rust-bearing mixed-stress leaf is therefore **never** trained or scored as a safe non-rust case.

The public product outputs remain exactly:

- `visible rust`;
- `no visible rust`;
- `not sure`.

Routing:

- model top class = rust-present and rust threshold passes → `visible rust`;
- model top class = healthy and healthy threshold passes → `no visible rust`;
- model top class = any supported non-rust disease → `not sure`;
- low-confidence/abstaining eligible image → `not sure`;
- deterministic eligibility failure → `not sure`.

All rust safety metrics use the **rust-presence truth**, not predominant-stress truth.

No non-rust source class becomes a diagnosis in the UI or reviewer payload.

# 5. Candidate learned model

## Verified candidate facts

MobileNetV3-Small remains the preferred model family.

TorchVision reports the standard MobileNetV3-Small family at roughly:

- 2.54 million parameters;
- 0.057–0.06 GFLOPs under its documented configuration;
- about 9.8 MB for the standard ImageNet-1K FP32 weight file.

## Recommendation D4-06 — MobileNetV3-Small first family

**Owner status:** Accepted originally on 2026-10-03 and repaired with explicit owner approval after Tier A audit.

Preferred A0 architecture:

> **MobileNetV3-Small 1.0, pooled 576-dimensional pre-classifier features, five-way linear head.**

The backbone is frozen in A0.

A1 may unfreeze only the final MobileNetV3 backbone block plus head, under the fixed training plan in D4-19/D4-20.

No broad hyperparameter search is permitted.

### Pretrained-weight licence/provenance standard

The exact pretrained artifact remains license-gated.

The project explicitly acknowledges that:

- framework/code licensing does not by itself clear pretrained weights;
- TorchVision/timm warn that pretrained weights may inherit or implicate source-dataset terms;
- ImageNet access terms are non-commercial research/education terms.

José Antonio accepts the residual provenance/licensing risk for an ImageNet-pretrained MobileNetV3 artifact **only for this non-commercial hackathon/research entry** and only if all of the following hold:

- exact artifact source and SHA-256 are pinned;
- code licence and ImageNet provenance are disclosed;
- no commercial-use claim is made for the pretrained weights or derived model;
- raw ImageNet is not redistributed;
- the raw upstream pretrained artifact is not unnecessarily re-hosted;
- Stage 6 rechecks compatibility with the organizer's submission/promotion licence before Stage 7C;
- any clear incompatibility blocks the pretrained path and returns to the owner.

This is project risk acceptance, **not a legal determination of licence compatibility**.

# 6. Browser runtime and offline architecture

## Recommendation D4-07 — ONNX Runtime Web WASM compatibility path

**Owner status:** Accepted originally on 2026-10-03 and repaired with explicit owner approval after Tier A audit.

Required runtime:

> **`onnxruntime-web` 1.30.0, WebAssembly-only core path, `numThreads = 1`.**

WebGPU may be explored only as optional non-core acceleration and must not be required for the user-value loop.

Do not use WebGL as the preferred path.

Core architecture remains:

- static web application / PWA;
- self-hosted app/runtime/model assets;
- one connected first-load/cache step allowed;
- no server-side rust inference;
- no cloud LLM;
- no account/login requirement;
- no background-sync or push dependency;
- after required assets are cached, capture/select → inference → human disposition → local record → review-card generation requires no network.

Primary physical evidence context:

> **iPhone 17 Pro Max → Safari → Add to Home Screen → standalone PWA**

Call `navigator.storage.persist()` where supported and record the returned value.

Do not assume storage created in a Safari tab is shared with the installed Home Screen app.

Public limitation:

> **Local browser storage is not guaranteed to persist indefinitely; records may be lost through browser/device storage policy, storage pressure, user clearing of site data, or app removal.**

No short hackathon persistence test may be presented as proof of multi-month durability.

# 7. Preprocessing and capture contract

## Recommendation D4-08 — full-frame 224×224 transform

**Owner status:** Repaired and accepted by José Antonio after Tier A audit.

Use one identical full-frame transform for development evaluation, internal test, external readout, and browser inference:

1. decode a color image;
2. require both decoded dimensions ≥224 px;
3. preserve the entire decoded frame;
4. resize directly to **224×224 using bilinear interpolation**;
5. apply the frozen encoder normalization constants;
6. **do not center crop**.

The browser implementation must use the same semantic transform and be covered by the validation-only parity test in D4-11.

Capture guidance:

- keep the complete target leaf inside the framing guide;
- do not require detachment, preservation, transport, re-identification of the originally noticed plant, or a backing card;
- do not require the leaf to remain attached as a product invariant;
- subject to Stage 7A train-only inspection and acquisition metadata, the UI may recommend an evidence-supported leaf side/orientation, but that guidance must not exceed what the data actually support;
- a plain backing card may be explored only as an **optional experimental aid**, never as required product behavior.

### Training-only augmentation

Freeze before Stage 7C:

- flips;
- random rotation ±15°;
- mild brightness/contrast variation;
- mild scale variation;
- no random crop removing more than 20% of the original frame;
- no heavy hue shift;
- no synthetic lesion generation.

### Capture-condition evidence map

Pre-register the evidence domains:

| Evidence source / workflow | Capture condition | Claim role |
|---|---|---|
| BRACOL internal | detached, lower/abaxial side, white/controlled background | internal task evidence |
| RoCoLe external | on-plant field capture, natural background, mixed leaf side, Robusta | external transfer stress test |
| Stage 3 product capture envelope | current eligible coffee-leaf image when device/assistance are available; no mandatory detachment/attachment/backing-card/original-plant protocol | **not directly validated as one complete field condition** |

The MVP does not pretend BRACOL directly validates natural-field operation.

If the RoCoLe claim-reduction trigger fires, withdraw field/general-transfer claims and return the capture/workflow claim to the owner before final submission.

# 8. Split, leakage, and quarantine rules

## Recommendation D4-09

**Owner status:** Accepted originally on 2026-10-03 and repaired with explicit owner approval after Tier A audit.

### Development split

Use the 1,685 labelled BRACOL records only.

Unless Stage 7A discovers an authoritative publisher split that satisfies the same rust-presence truth and leakage controls, use a deterministic **70% / 15% / 15%** stratified split under the D4-05 class construction.

Seed: `20261003`.

### Near-duplicate grouping

Before partition assignment:

- compute exact file hashes;
- compute `imagehash.phash`, hash size 8 / 64 bits;
- treat Hamming distance ≤5 as a duplicate-candidate edge;
- form components transitively using union-find;
- record the largest component;
- if any component exceeds **2%** of the labelled dataset, perform a logged same-leaf yes/no review before assignment;
- assign each component wholly to one partition.

Manual inspection is limited to that same-leaf grouping decision and occurs before partition assignment.

Disclose residual leakage and possible over-grouping risk.

### Quarantine

Before Stage 7C:

- freeze internal-test identifiers;
- freeze RoCoLe external identifiers and metadata map;
- freeze challenge identifiers;
- do not inspect quarantined evaluation images for model, preprocessing, threshold, fallback, OOD, or augmentation decisions.

If a quarantined partition influences a design decision, preserve the original readout, burn the partition, relabel it development evidence, and make no later held-out claim from it.

BRACOL leaf-side inspection, if required at Stage 7A, may use **training-partition images only after the split is frozen** and may not use internal test images.

# 9. Operating-point and abstention rule

## Recommendation D4-10

**Owner status:** Accepted originally on 2026-10-03 and repaired with explicit owner approval after Tier A audit.

Use probabilities from the five-way head.

Thresholds:

- `T_rust`;
- `T_healthy`.

Routing:

- rust-present top class and `P(rust) >= T_rust` → `visible rust`;
- healthy top class and `P(healthy) >= T_healthy` → `no visible rust`;
- supported non-rust disease → `not sure`;
- otherwise → `not sure`.

Search threshold pairs from **0.50 through 0.95 inclusive in 0.01 increments**, using validation only.

Among feasible threshold pairs:

1. minimize confident-miss **count**;
2. maximize target-class coverage;
3. maximize accepted rust recall;
4. prefer higher `T_healthy`;
5. then prefer higher `T_rust`.

No held-out, external, or challenge result may affect threshold selection.

# 10. Pre-registered validation gate

## Recommendation D4-11

**Owner status:** Repaired and accepted by José Antonio after Tier A audit.

Let:

- `R` = rust-bearing leaves;
- `H` = healthy leaves;
- `O` = non-rust other-condition leaves;
- `VR` = route `visible rust`;
- `NVR` = route `no visible rust`;
- `NS` = route `not sure`.

Pre-registered engineering gates:

| Metric | Definition | Gate |
|---|---|---:|
| Target-class coverage | `|(R∪H)→{VR,NVR}| / |R∪H|` | ≥50% |
| Rust coverage | `|R→{VR,NVR}| / |R|` | ≥50% |
| Healthy coverage | `|H→{VR,NVR}| / |H|` | ≥50% |
| Selective accuracy | `(|R→VR| + |H→NVR|) / |(R∪H)→{VR,NVR}|` | ≥85% |
| Accepted rust recall | `|R→VR| / |R→{VR,NVR}|` | ≥90% |
| Accepted healthy specificity | `|H→NVR| / |H→{VR,NVR}|` | ≥80% |
| Confident-miss rate | `|R→NVR| / |R|` | ≤5% |
| Other-condition → NVR | `|O→NVR| / |O|` | ≤10% |

Report but do not gate on:

- overall abstention;
- `O→VR`;
- accepted-rust miss rate;
- class counts.

At Stage 7B, use the frozen manifest to convert every percentage gate into its exact integer pass/fail condition and commit the relevant `n_R`, `n_H`, and `n_O`.

For every gated/headline rate:

- report exact numerator/denominator;
- report exact two-sided 95% Clopper–Pearson interval;
- report a one-sided 95% upper confidence bound for confident miss and `O→NVR`.

The ≤5% confident-miss threshold is an **engineering survival gate**, not proof that the true miss probability is ≤5%.

Public wording such as **reliable** or **robust** rust triage is allowed only if the internal held-out test one-sided 95% upper bound for confident miss is ≤10%.

Otherwise use count-and-interval language only.

Pre-registered reduced-claim template:

> **On BRACOL held-out leaves, the prototype produced a confident `no visible rust` on X of N rust-bearing leaves (observed rate Y%; 95% CI A–B). This is a proof-of-concept measurement, not evidence of reliable field rust triage.**

Maintain a ledger of every configuration evaluated on validation.

### Browser/artifact parity gate before held-out readout

Before any internal/external readout:

- export and freeze the exact **FP32 ONNX** artifact;
- freeze the browser preprocessing implementation;
- run a validation-only parity check against the development evaluation pipeline;
- require **≥99% route agreement**;
- record maximum absolute probability difference;
- fix any parity issue from validation evidence only.

The exact frozen ONNX artifact and preprocessing path that pass parity are the artifacts used for the one-shot internal and external readouts.

# 11. Internal one-shot test readout

After validation acceptance, parity acceptance, and freeze:

- run the internal test exactly once using the exact frozen FP32 ONNX artifact and frozen preprocessing path;
- report all mandatory Stage 4 metrics;
- preserve failures;
- do not retune.

### Claim-reduction trigger

If internal-test confident miss exceeds **10%** or accepted rust recall falls below **75%**, do not make a robust rust-triage performance claim.

Even if the point trigger passes, the words **reliable** or **robust** require the one-sided 95% upper bound for confident miss to be ≤10%.

Otherwise use only the pre-registered count-and-interval proof-of-concept wording.

No post-test tuning is allowed without burning the partition.

# 12. External-transfer readout

## Recommendation D4-12 — RoCoLe-only external readout

**Owner status:** Accepted originally on 2026-10-03 and repaired with explicit owner approval after Tier A audit.

Primary and sole planned 2026 external source: **RoCoLe v2**.

Frozen metadata-only mapping, subject to Stage 7A confirmation:

- rust levels 1–4 → `R`;
- healthy → `H`;
- red-spider-mite → `O-unseen`, reported separately;
- eight state/classification conflicts → exclude and disclose if confirmed.

Report where labels permit:

- rust recall;
- healthy specificity;
- confident-miss rate;
- target-class coverage;
- abstention rate;
- routing counts;
- exact intervals.

Where plant IDs are recoverable, disclose the four-images-per-plant clustering and avoid presenting ordinary image-level intervals as cluster-independent evidence without qualification.

Frame the result as:

> **cross-dataset transfer evidence under species and acquisition-domain shift, not field validation for Noor or Uganda.**

If RoCoLe confident miss exceeds **10%** or accepted rust recall is below **75%**:

- withdraw field/general-transfer claims;
- make the controlled/background limitation prominent;
- do not retune from RoCoLe;
- return the Stage 3 on-plant workflow to the owner for a final claim/workflow decision before submission.

Saposoa is not an active 2026 external readout.

# 13. Q / K / U safety evaluation

## Recommendation D4-13

**Owner status:** Repaired and accepted by José Antonio after Tier A audit.

Do **not** present a blended OOD/fail-safe score.

Keep three families separate.

### Q — image quality

Deterministic eligibility checks for this submission are limited to:

- image decodes successfully;
- both dimensions are at least 224 px.

No deterministic blur detector is claimed unless a separate quality rule is pre-registered before evaluation.

Deliberately blurred/poor-quality images may be reported descriptively, but there is no ≥90% blur-detection target.

### K — known non-rust coffee disease

Measure known non-rust disease behavior on the internal BRACOL test using `O→NVR` and related routing counts.

Do not double-use quarantined external sources to manufacture a K challenge set.

### U — unknown / OOD

Eligible categories may include:

- non-coffee;
- maize;
- bean;
- BRACOT multi-leaf/scene inputs;
- other properly licensed unknown inputs not drawn from quarantined external sets.

Expected route: `not sure`.

For every reported U category with **at least 20 frozen examples**, the pre-registered target is:

> **≥70% routed to `not sure`.**

If a U category with at least 20 examples falls below 70%, make **no fail-safe/OOD claim for that category**.

Use at least 20 examples per reported U category where feasible.

If a category has fewer than 20 examples:

- report counts and exact intervals descriptively;
- make no category target claim.

For BRACOT:

- seeded file-list sampling only;
- no image browsing for subset choice;
- no project-authored disease labels.

Freeze every challenge identifier before Stage 7C.

No combined Q/K/U target is permitted.

# 14. Simple baseline

## Recommendation D4-14

The strongest simple baseline remains:

> **printed/laminated coffee-rust symptom guide + structured observation form + later human review.**

Stage 4 does **not** pre-register a claim that RoyaCheck beats human use of the guide.

The learned component's measurable contribution is narrower:

- it produces an image-dependent visual proposal;
- it may abstain;
- it routes the record differently based on that proposal;
- it attaches that bounded proposal to the structured human-authority workflow.

Unless a real human baseline study is conducted, the final entry must say that superiority over the printed guide is **not measured**.

---

# 15. Privacy, retention, and shared-device contract

## Recommendation D4-15

**Owner status:** Accepted originally on 2026-10-03 and repaired with explicit owner approval after Tier A audit.

Local record fields:

- `record_id`;
- `capture_date`;
- `crop = coffee`;
- `ai_proposal`;
- `ai_score` — local technical/audit field only, not reviewer-visible;
- `not_sure_reason`;
- `human_disposition`;
- `confirmed_by_role`;
- `action_route`;
- optional farmer note;
- `image_retained`;
- `status`;
- optional local `model_version` for auditability.

`not_sure_reason` is non-diagnostic and restricted to values such as:

- `image_ineligible`;
- `low_confidence`;
- `other_condition_possible`.

Do not collect geolocation, farmer name, phone number, account ID, farm ID, or yield/price profile.

Image rules:

- raw image not persisted by default;
- explicit Noor opt-in required for retention;
- retained image is re-encoded before storage;
- reviewer card is text-only if no image retained;
- showing retained image requires separate Noor consent;
- delete cascades to structured record + retained image;
- user images are not placed in the service-worker/app cache.

Stage 9 must verify metadata removal on any retained derivative using an actual metadata inspection rather than assuming re-encoding succeeded.

Shared-device rule:

> **The MVP does not claim private multi-user isolation on the daughter's phone.**

Stored records may be visible to someone with access to the same browser/app storage context.

# 16. Localization-validation contract

## Recommendation D4-16

**Owner status:** Accepted originally on 2026-10-03 and repaired with explicit owner approval after Tier A audit.

Freeze a small, fixed critical-string inventory before Stage 8 closes.

Required semantic concepts include:

1. capture/select coffee-leaf photo;
2. **AI proposal — not a diagnosis and not treatment advice**;
3. visible rust;
4. no visible rust;
5. **no visible rust does not mean healthy; review remains available**;
6. not sure;
7. retake photo;
8. request/review first;
9. record and monitor;
10. confirm/correct;
11. save record;
12. **keep photo with record** consent;
13. **show photo to reviewer** consent;
14. delete record/photo;
15. privacy/shared-device warning;
16. every `confirmed_by_role` option label.

Stage 4 approves **no Lugisu translation**.

The final pack requires a human validator familiar with the targeted Bududa/south-Bugisu variety and orthographic convention.

Validation record:

- source string;
- candidate Lugisu string;
- validator role/qualification;
- date;
- accepted/corrected result;
- final string.

If no qualified validator is already available by the Stage 8/9 localization cutoff:

- **technical MVP work continues**;
- do not spend the competition clock sourcing a specialist solely to satisfy this self-created dependency;
- Lugisu strings may appear only as an explicitly **unvalidated prototype localization draft**;
- English remains available;
- the submission may not claim validated/localized usability.

Any proposed public naming change from Lugisu to Lumasaaba, or any different named-language implementation, returns to José Antonio.

# 17. Common-data binding

## Verified external figure

The project records the GSMA *State of Mobile Internet Connectivity 2025 — Trends in Mobile Internet Connectivity*, Figure 15, PDF p. 31, as reverified on **2026-10-03** for Uganda 2024 smartphone ownership:

- **33% urban**
- **20% rural**

The Stage 4 Tier A auditor could not independently reach GSMA and did not contradict the figure.

## Recommendation D4-17

**Owner status:** Accepted by José Antonio on 2026-10-03.

Bind the **20% rural smartphone-ownership figure** only to this design rule:

> **The core RoyaCheck loop must work on one intermittently available/shared household smartphone and must not require a second personal smartphone, account sync, cloud inference, background push, or live network after required assets are cached.**

The household-sharing premise itself comes from the Noor case, not from the 20% statistic.

Do not derive bandwidth, model-size, phone-performance, or Noor-specific ownership claims from this figure.

# 18. Technical budgets

## Recommendation D4-18

**Owner status:** Repaired and accepted by José Antonio after Tier A audit.

### Model/core asset budget

- preferred artifact: **FP32 ONNX**;
- serialized model hard budget: **≤12 MB**;
- required core cached assets, including WASM runtime + model + critical app assets: **≤30 MB uncompressed stored bytes**;
- no ≤5 MB optimized-model requirement;
- no post-held-out quantization.

Pin `onnxruntime-web` **1.30.0**, WASM-only for the required core path, `numThreads = 1`.

WebGPU, if explored, is a separate optional/non-core path.

### Measurement protocol

Record:

- iOS version;
- Safari version;
- ONNX Runtime Web version;
- execution provider;
- uncompressed stored runtime/model/core asset bytes;
- cold session-creation/load time separately;
- preprocessing + `session.run` latency;
- one warm-up run followed by **at least 30 timed runs**.

Primary physical evidence target:

> **iPhone 17 Pro Max + Safari, installed to Home Screen as a standalone PWA.**

### Latency engineering targets

On that actual target:

- median preprocessing + inference ≤2.0 s;
- p95 ≤4.0 s;
- >5.0 s median = unusable for the preferred path.

These are engineering go/no-go budgets, not evidence-derived claims.

Success on this device supports only a claim that the tested high-end iPhone/Safari environment works; it is not affordable/basic-phone evidence.

### Persistence/offline protocol

For the primary physical proof:

1. first connected load/cache;
2. request `navigator.storage.persist()` where supported and record result;
3. terminate app;
4. enable airplane/offline state;
5. relaunch from Home Screen;
6. run a fresh inference;
7. save a record;
8. close/reopen;
9. confirm record persistence.

No multi-month durability claim follows from this short test.

# 19. Stage 7 development clock

## Recommendation D4-19

**Owner status:** Repaired and accepted by José Antonio after Tier A audit.

At Stage 7 start, commit explicit **absolute ET timestamps**.

Preserve the ROADMAP Stage 7 latest end of **10:00 PM ET on 3 October 2026**.

Reserve at least the final **30 minutes before the Stage 7 latest end** for:

- freeze;
- exact-artifact parity completion;
- one-shot internal readout;
- external readout if feasible;
- browser evidence/export record.

Stage 7.0 / 7A / 7B occur before the A0 development clock and receive their own bounded caps in the Stage 5 readiness plan.

No development rung may start unless its full cap fits before the reserved evidence window.

---

# 20. Deterministic fallback ladder

## Recommendation D4-20

**Owner status:** Repaired and accepted by José Antonio after Tier A audit.

### A0 — preferred

MobileNetV3-Small 1.0:

- frozen backbone;
- pooled 576-dimensional pre-classifier features;
- five-way linear head;
- AdamW;
- learning rate 1e-3;
- weight decay 1e-4;
- batch size 32;
- class-weighted cross-entropy;
- maximum 30 epochs;
- retain checkpoint with lowest validation loss;
- seed 20261003;
- maximum Stage 7C development time: **60 minutes**.

### A1 — only if A0 fails and clock permits

Initialize from A0:

- unfreeze only final MobileNetV3 backbone block plus head;
- AdamW;
- learning rate 1e-4;
- weight decay 1e-4;
- batch size 32;
- same loss and seed;
- maximum 15 epochs;
- retain lowest-validation-loss checkpoint;
- maximum additional development time: **30 minutes**.

### C — runtime-only architecture fallback

Trigger only if the primary architecture fails the Stage 7.0 runtime/model budget **before definitive training**.

Candidate:

> **MobileNetV3-Small 0.50-class architecture**, exact artifact still subject to the same licence/provenance gate.

No runtime fallback may be selected because of internal-test or external performance.

### D — stop/reduce

If no accepted learned path meets the safety gate within the available clock:

- do not substitute decorative AI;
- do not inspect extra held-out/external evidence to choose a rescue path;
- stop the full three-state learned claim.

Pre-authorized degraded safety mode:

> **Disable `no visible rust`. High-confidence rust may still route to `visible rust`; every other learned outcome routes to `not sure`.**

Trigger:

- A0 and, if the preregistered clock permits, A1 must both fail the **full D4-11 validation gate**.

Selection rule:

- `T_healthy` is disabled;
- select `T_rust` on validation only from the existing 0.50–0.95 grid;
- maximize `|R→VR|` subject to a **pre-set false-alarm-share cap** on `|(H∪O)→VR| / |→VR|`;
- ties go to the higher `T_rust`;
- if no threshold satisfies the owner-fixed cap, there is **no learned proposal**.

The exact false-alarm-share cap is an unresolved owner value and must be fixed **before Stage 4 closes and before any validation result is produced**. Claude's confirmation intentionally left this as an owner-chosen share; this record does not invent one.

The degraded artifact must:

- pass the same Stage 7D FP32-ONNX/browser-preprocessing parity gate;
- use the same one-shot Stage 7E internal and Stage 7F external readout discipline;
- report `R→VR`, `H→VR`, and `O→VR` counts and exact confidence intervals.

The degraded mode must be disclosed and cannot be presented as the full three-state Stage 3 performance claim.

# 21. Decisions deliberately left open until Stage 7A/7B

Stage 4 does not fabricate values that require archive inspection or runtime evidence.

Still conditional:

- exact downloaded archive hashes/count verification;
- confirmation that BRACOL archive metadata match the expected per-stress CSV;
- exact pHash duplicate components;
- exact integer validation caps from the frozen manifest;
- exact pretrained artifact and SHA-256, subject to Stage 6 risk recheck;
- actual iOS/Safari runtime behavior;
- actual `persist()` result;
- actual validation-selected `T_rust` and `T_healthy`;
- actual held-out/external/challenge results.

The **rules** for resolving these values are pre-registered; their actual values come later.

# 22. Owner-approved Stage 4 lock set

José Antonio originally approved D4-01 through D4-20 on 2026-10-03 and explicitly approved the Tier A repairs on the same date.

The controlling repaired decisions are now:

- D4-01: BRACOL 1,685 labelled whole-leaf development source, rust-presence truth;
- D4-02: RoCoLe sole planned 2026 external-transfer source;
- D4-03: Saposoa future candidate only;
- D4-04: BRACOT unknown/scene challenge only;
- D4-05: rust-presence-priority five-way head → three product outputs;
- D4-06: MobileNetV3-Small first family + explicit ImageNet residual-risk standard;
- D4-07: ORT Web 1.30.0 WASM-only required path, standalone iPhone PWA evidence context;
- D4-08: full-frame direct resize 224×224, no center crop;
- D4-09: deterministic split/pHash/quarantine rules;
- D4-10: two-threshold deterministic selection rule;
- D4-11: target-class metrics, exact intervals, claim-language ceiling, exact-artifact parity;
- D4-12: RoCoLe-only external readout and claim-reduction trigger;
- D4-13: separate Q/K/U safety evaluation;
- D4-14: printed symptom guide baseline framing unchanged;
- D4-15: privacy/shared-device/non-diagnostic reason codes;
- D4-16: expanded localization-validation inventory + validator fallback;
- D4-17: GSMA common-data architecture binding;
- D4-18: FP32 ONNX ≤12 MB model, ≤30 MB core, pinned ORT/WASM measurement protocol;
- D4-19: absolute-clock reservation;
- D4-20: deterministic A0 → A1 / runtime-C → D ladder with degraded safety mode.

No later result may silently rewrite these rules.

# 23. Stage 4 gate

The Stage 4 owner-decision gate and Tier A repair authorization are complete.

Stage 4 remains **In review** until:

1. Claude performs the narrow confirmation of M1–M10 and the repaired minors;
2. confirmation findings are reconciled;
3. any consequential new issue returns to José Antonio;
4. José Antonio explicitly authorizes Stage 4 closure/merge.

Until those gates pass:

- no definitive training;
- no validation-result-driven design outside the pre-registered Stage 7 rules;
- no internal held-out readout;
- no external readout;
- no challenge-set result.

**Current status: In review — Stage 3 simplification reconciled; Claude confirmation N1 repaired; N2 false-alarm cap awaiting owner lock.**
