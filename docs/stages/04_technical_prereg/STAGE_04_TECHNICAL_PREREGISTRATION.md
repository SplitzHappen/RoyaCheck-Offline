# Stage 4 — Technical Pre-Registration

**Stage:** 4  
**Status:** In review — owner-approved pre-registration; Tier A audit pending  
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
13. the handoff is user-initiated, in-person, on-device, at a qualifying extension encounter when the household smartphone is present;
14. Lugisu is the current named local-language interaction, with Bududa/south-Bugisu human validation required before final public strings;
15. Uganda/Bugisu is an evidence anchor only, never Noor's fictional location.

---

# 3. Data-source dossier

## 3.1 BRACOL — proposed development source

**Primary source:** Mendeley Data, DOI `10.17632/yy2k5y8mxg.1`  
**License shown by source:** CC BY 4.0  
**Crop/species:** Arabica coffee  
**Published:** 2019  
**Image count:** 1,747 original whole-leaf images; 2,147 cropped symptom images also exist  
**Capture devices:** multiple smartphones  
**Acquisition:** leaves photographed from the abaxial/lower side under partially controlled conditions on a white background  
**Labels:** healthy and major coffee biotic stresses, including rust, leaf miner, brown leaf spot, and cercospora leaf spot; whole-leaf labels describe predominant stress/severity  
**Stage 4 assessment:** strong task relevance, weak evidence for ordinary field-photo robustness.

Primary source: https://data.mendeley.com/datasets/yy2k5y8mxg/1

### Recommendation D4-01

**Owner status:** Accepted by José Antonio on 2026-10-03.
Use **only the original whole-leaf BRACOL images** as the first development candidate.

Do **not** use the cropped symptom dataset in the first path because:

- the final product consumes a whole-leaf photograph;
- symptom crops create a larger train/deployment acquisition mismatch;
- derivative crops can complicate leakage control if related originals cross partitions.

License verdict at Stage 4: **provisional pass for evaluation/training planning; re-check exact downloaded archive and attribution obligations at Stage 7A before use or redistribution.**

---

## 3.2 RoCoLe v2 — proposed primary external-transfer source

**Primary source:** Mendeley Data, DOI `10.17632/c5yvn32dzg.2`  
**License shown by source:** CC BY 4.0  
**Crop/species:** Robusta coffee  
**Image count:** 1,560  
**Acquisition:** smartphone images obtained in real-world conditions in a coffee field  
**Labels:** healthy/unhealthy with coffee-rust spots and red-mite structures; disease severity annotations are also available  
**Stage 4 assessment:** useful field-capture transfer stress test, but species and label semantics differ from BRACOL.

Primary source: https://data.mendeley.com/datasets/c5yvn32dzg/2  
Data article: https://doi.org/10.1016/j.dib.2019.104414

### Recommendation D4-02

**Owner status:** Accepted by José Antonio on 2026-10-03.
Make **RoCoLe v2 the primary quarantined external-transfer readout**, not development data.

Reason:

- it is materially closer to real-world smartphone capture than BRACOL;
- the Robusta/Arabica mismatch makes it a legitimate transfer stress test rather than a disguised second validation set;
- failure can honestly constrain field-generalization claims.

No RoCoLe image may be used for training, threshold selection, preprocessing selection, OOD design, model choice, or fallback choice before the one-shot external readout.

License verdict: **provisional CC BY 4.0 pass; confirm archive-level terms at Stage 7A.**

---

## 3.3 Saposoa Arabica v2 — proposed secondary external source

**Primary source:** Mendeley Data, DOI `10.17632/mfpxg4y65r.2`  
**License shown by source:** CC BY 4.0  
**Published:** 18 September 2026  
**Crop/species:** Arabica coffee  
**Images:** 1,500 total; 500 healthy, 500 rust, 500 coffee leaf spot  
**Acquisition:** plantation-origin leaves collected under a uniform protocol with controlled camera-to-leaf distance, homogeneous natural light, focus requirements, and exclusion of blurred/occluded/poorly exposed images  
**Stage 4 assessment:** strong cross-geography/species-aligned external source, but its curated acquisition protocol is less useful than RoCoLe for stressing ordinary field capture.

Primary source: https://data.mendeley.com/datasets/mfpxg4y65r/2

### Recommendation D4-03

**Owner status:** Accepted by José Antonio on 2026-10-03.
Keep Saposoa v2 as an **optional second quarantined external readout** only if time permits after the primary RoCoLe readout.

It must not become another tuning set.

---

## 3.4 BRACOT — proposed field-scene challenge source

**Primary source:** Mendeley Data, DOI `10.17632/pmkbyjpf6k.1`  
**License:** CC BY 4.0  
**Crop/species:** Arabica coffee  
**Images:** 300 field photographs containing 1,662 annotated leaf instances  
**Acquisition:** smartphone photographs taken in a coffee plantation  
**Content:** healthy and diseased leaves on coffee trees, including rust and other stresses  
**Stage 4 assessment:** useful as a field-scene / multi-leaf challenge source; not directly equivalent to the single-leaf classifier input.

Primary source: https://data.mendeley.com/datasets/pmkbyjpf6k/1

### Recommendation D4-04

**Owner status:** Accepted by José Antonio on 2026-10-03.
Use only a **small frozen licensed subset** of BRACOT as an out-of-distribution/scene-complexity challenge source if its mapping can be defined before any result is viewed.

Do not call BRACOT a classification test set for the single-leaf task unless a defensible instance-to-input mapping is frozen first.

---

# 4. Source-class and product-output mapping

## Recommendation D4-05 — five-way learned head, three-way user output

Where BRACOL labels support it, train/evaluate the learned head on source-level classes:

1. healthy;
2. rust;
3. leaf miner;
4. brown leaf spot / source-equivalent class;
5. cercospora leaf spot.

The public user output remains only:

- `visible rust`;
- `no visible rust`;
- `not sure`.

Mapping:

- model top class = rust **and** rust operating-point rule passes → `visible rust`;
- model top class = healthy **and** healthy operating-point rule passes → `no visible rust`;
- model top class = any supported non-rust disease → `not sure`;
- low-confidence/abstaining eligible image → `not sure`;
- image failing deterministic eligibility checks → `not sure`.

Why this is preferred over a binary rust/non-rust head:

- a binary model encourages other visible disease/stress to collapse into “no rust”;
- a source-level multi-class head lets known non-rust disease patterns route safely to `not sure`;
- the user still receives only the narrow three-state product contract.

No other-disease label may become an agronomic diagnosis in the UI.

---

# 5. Candidate learned model

## Verified candidate facts

MobileNetV3-Small is explicitly designed for low-resource/mobile image classification.

TorchVision's current documentation reports the standard MobileNetV3-Small architecture at approximately:

- 2.54 million parameters;
- 0.06 GFLOPs under its documented configuration;
- about 9.8 MB for its ImageNet-1K FP32 weight file;
- 224×224 crop input.

Reference: https://docs.pytorch.org/vision/stable/models/generated/torchvision.models.mobilenet_v3_small.html

## Recommendation D4-06 — preferred architecture family

Preferred first candidate:

> **MobileNetV3-Small, 224×224 input, frozen visual backbone initially, coffee-specific five-way linear classifier head.**

Initial training policy:

1. freeze the backbone;
2. train only the five-way classifier head;
3. make threshold/coverage decisions using validation only;
4. if the frozen-head path cannot meet the pre-registered validation gate, invoke the pre-approved fallback sequence rather than broad hyperparameter search.

A narrowly pre-authorized fallback may unfreeze only the final backbone block **before any test/external readout**, using train/validation evidence only.

### Pretrained-weight license warning

Do **not** treat a framework code license as sufficient clearance for pretrained weights.

TorchVision explicitly warns that pretrained models may inherit separate licenses/terms from their training data.

The Hugging Face model card for `timm/mobilenetv3_small_100.lamb_in1k` displays Apache-2.0 and a 2.5M-parameter MobileNetV3-Small model, but the upstream `timm` repository separately warns that ImageNet-trained weights may remain subject to ImageNet-related terms.

Therefore:

> **The architecture is recommended; the exact pretrained weight artifact remains license-gated and is NOT yet owner-locked for redistribution/use in the public entry.**

Sources:
- https://huggingface.co/timm/mobilenetv3_small_100.lamb_in1k
- https://github.com/huggingface/pytorch-image-models
- https://docs.pytorch.org/vision/master/models.html

If no pretrained weight source passes the Stage 7A license gate, fall back before training to a clearly permitted weight source or to the pre-approved lower-claim path.

---

# 6. Browser runtime and offline architecture

## Verified runtime facts

ONNX Runtime Web supports in-browser inference with WebAssembly and other execution providers.

Its current browser support documentation shows WebAssembly support across major desktop/mobile browsers, while WebGPU support is narrower. ONNX Runtime's own WebGPU guidance recommends WASM for very lightweight models when a small, broadly compatible path is desired.

ONNX Runtime is MIT licensed.

Sources:
- https://onnxruntime.ai/docs/tutorials/web/
- https://onnxruntime.ai/docs/get-started/with-javascript/web.html
- https://onnxruntime.ai/docs/tutorials/web/ep-webgpu.html
- https://github.com/microsoft/onnxruntime

## Recommendation D4-07

Lock the **core runtime target** as:

> **ONNX Runtime Web + WebAssembly CPU execution provider as the required compatibility path.**

Optional acceleration:

> WebGPU may be used when available, but the product must not require WebGPU for the core loop or make a claim that excludes browsers/devices supported only through WASM.

Do not use WebGL as the preferred path; ONNX Runtime documents it as maintenance mode.

Core architecture:

- static web application / PWA;
- self-hosted app/runtime/model assets;
- one connected first-load/cache step allowed;
- after core assets are cached, capture/select → inference → human disposition → local record → review-card generation requires no network;
- no server-side rust inference;
- no cloud LLM;
- no account/login requirement for the MVP;
- no background sync or push dependency.

---

# 7. Preprocessing and capture contract

## Recommendation D4-08

Pre-register the candidate model preprocessing as:

1. accept a decodable color image;
2. reject/route to `not sure` if either decoded dimension is below 224 pixels;
3. re-encode the working image in-browser before persistence/export so EXIF/location metadata are removed;
4. resize using the selected encoder's frozen inference transform;
5. use a 224×224 model input;
6. preserve the same normalization constants and interpolation in training, validation, test, external readout, and browser inference.

For the current MobileNetV3-Small candidate, the initial transform recommendation is:

- resize to 256 on the shorter side;
- center crop to 224×224;
- normalize with the selected pretrained encoder's published transform.

Capture guidance inherited from Stage 3:

- on-plant;
- no required detachment;
- ordinary backing card/sheet where practical;
- exact leaf-side/orientation remains unselected until Stage 7A data inspection confirms what the development data actually support.

### Training-only augmentation recommendation

Keep augmentation deliberately mild:

- random rotation: ±15°;
- horizontal/vertical flips if source semantics permit;
- mild scale/crop variation;
- mild brightness/contrast variation;
- no heavy hue shift;
- no synthetic lesion generation.

The exact augmentation implementation must be frozen in Stage 7B before any validation result is used.

---

# 8. Split, leakage, and quarantine rules

## Recommendation D4-09

### Development split hierarchy

After Stage 7A archive inspection:

1. **Prefer a publisher-provided train/validation/test split** only if it is explicit, whole-leaf, and does not mix derivative crops/originals across partitions.
2. Otherwise build a deterministic **70% / 15% / 15%** stratified split from whole-leaf images.

Fallback split seed:

`20261003`

### Near-duplicate grouping

If no source-level leaf/group identifier exists:

- compute exact file hashes;
- compute a perceptual hash on decoded images;
- group obvious/near duplicates before assigning partitions;
- initial pre-registered pHash rule: Hamming distance ≤ 5 is treated as a duplicate candidate requiring same-partition grouping or manual inspection;
- disclose residual leakage risk.

### Quarantine

Before any training/validation result:

- internal test file identifiers are frozen;
- RoCoLe external identifiers are frozen;
- optional Saposoa identifiers are frozen;
- challenge-set identifiers are frozen;
- none of those assets may be inspected for model/preprocessing/threshold/OOD decisions after designation.

If any quarantined partition influences a design decision, it is burned and relabeled development evidence.

---

# 9. Operating-point and abstention rule

## Recommendation D4-10

Use source-class probabilities from the five-way head.

Two thresholds are permitted:

- `T_rust`;
- `T_healthy`.

Routing:

- if top class is rust and `P(rust) >= T_rust` → `visible rust`;
- if top class is healthy and `P(healthy) >= T_healthy` → `no visible rust`;
- if top class is a supported non-rust disease → `not sure`;
- otherwise → `not sure`.

Thresholds are chosen from validation only.

### Deterministic selection rule

Search threshold values from **0.50 to 0.95 inclusive in 0.01 increments**.

A threshold pair is feasible only if validation satisfies all safety constraints below.

Among feasible pairs:

1. minimize confident-miss rate;
2. then maximize overall coverage;
3. then maximize rust recall on accepted rust cases;
4. then choose the higher thresholds as the final tie-break.

No test, external, or challenge-set result may affect the selected thresholds.

---

# 10. Pre-registered validation gate

## Recommendation D4-11

The preferred learned path survives validation only if all of the following are met:

| Metric | Proposed validation criterion |
|---|---:|
| Overall coverage | **≥ 50%** |
| Rust-class coverage | **≥ 50%** |
| Healthy-class coverage | **≥ 50%** |
| Selective accuracy on accepted eligible cases | **≥ 85%** |
| Rust recall on accepted rust cases | **≥ 90%** |
| Specificity on accepted clearly healthy cases | **≥ 80%** |
| Confident-miss rate: true rust → `no visible rust` | **≤ 5%** |
| Supported other-disease → `no visible rust` | **≤ 10%** |

These are engineering acceptance thresholds, not published claims.

Report exact numerators/denominators and 95% intervals where sample size supports them.

If no threshold pair satisfies the gate, do not inspect the test partition. Invoke the pre-approved fallback ladder.

---

# 11. Internal one-shot test readout

After validation acceptance and freeze:

- run internal test once;
- report all mandatory ROADMAP metrics;
- do not retune;
- preserve all failures.

The test readout is evidence, not a second optimization set.

### Claim-reduction trigger

If the internal test's confident-miss rate exceeds **10%** or rust recall on accepted rust cases falls below **75%**, do not make a robust rust-triage performance claim. The product may continue only under an explicitly reduced proof-of-concept claim if the owner accepts that reduction.

No post-test tuning is allowed without burning the partition.

---

# 12. External-transfer readout

## Recommendation D4-12

Primary external: **RoCoLe v2**.

Report, where labels support it:

- rust recall;
- healthy specificity;
- confident-miss rate;
- coverage;
- abstention rate;
- confusion/routing counts.

Frame the result as:

> **cross-dataset transfer evidence under a different coffee species/capture domain, not field validation for Noor or Uganda.**

### External claim-reduction trigger

If RoCoLe confident-miss rate exceeds **10%** or accepted rust recall is below **75%**:

- no claim of field/general cross-domain reliability;
- field-photo language is reduced;
- the backing-card / controlled-capture limitation becomes prominent;
- no retuning from the RoCoLe result.

Optional Saposoa v2 may be read only after the system is frozen and only if time permits.

---

# 13. OOD / challenge-set rule

## Recommendation D4-13

The project will **not** claim that softmax confidence alone is a general OOD detector.

A frozen challenge set should include, where licensed:

- non-coffee objects/images;
- maize leaves;
- bean leaves;
- other coffee disease/stress;
- blurred/low-quality coffee-leaf images;
- field-scene/multi-leaf examples.

The challenge set is not used for threshold selection.

### Proposed fail-safe targets

| Challenge category | Target routed to `not sure` |
|---|---:|
| Blurry/unreadable image-quality cases | **≥ 90%** |
| Other visible coffee disease/stress | **≥ 80%** |
| Non-coffee / maize / bean inputs | **≥ 70%** |
| All challenge cases combined | **≥ 75%** |

If these targets fail:

- preserve every failure;
- remove or narrow any public OOD/fail-safe claim;
- do not tune against the challenge set;
- keep `not sure` claims limited to behavior actually demonstrated.

---

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

Local record fields:

- `record_id`;
- `capture_date`;
- `crop = coffee`;
- `ai_proposal`;
- `ai_score` (local technical/audit field only; not reviewer-visible);
- `not_sure_reason` where available;
- `human_disposition`;
- `confirmed_by_role`;
- `action_route`;
- optional farmer note;
- `image_retained`;
- `status`.

Do not collect:

- geolocation;
- farmer name;
- phone number;
- account identifier;
- farm identifier;
- price/yield profile.

Image rules:

- raw image is not persisted by default;
- explicit Noor opt-in is required to retain an image;
- retained image is a metadata-stripped re-encoded derivative;
- reviewer card is text-only if no image was retained;
- showing retained image requires a separate Noor confirmation;
- delete cascades to structured record + retained image;
- no image is placed in the service-worker/app cache.

Shared-device rule:

> The MVP does **not** claim private multi-user isolation on the daughter's phone.

Therefore the saved-record screen must avoid unnecessary identity/profile data, and the final limitations must state that locally stored records may be visible to another person who can access the same browser profile/device.

No fake PIN/security control is added unless it is actually implemented and tested.

---

# 16. Localization-validation contract

## Recommendation D4-16

Before Stage 8 closes, freeze a **small critical-string inventory** only.

Required semantic concepts:

1. capture/select coffee-leaf photo;
2. AI proposal;
3. visible rust;
4. no visible rust;
5. not sure;
6. retake photo;
7. request/review first;
8. record and monitor;
9. confirm/correct;
10. save record;
11. show photo to reviewer;
12. delete record/photo;
13. privacy/consent prompt.

Stage 4 chooses **no Lugisu translation**.

The final pack requires a human validator familiar with the targeted Bududa/south-Bugisu variety and the orthographic convention actually used.

Validation record must contain:

- source string;
- candidate Lugisu string;
- validator role/qualification;
- date;
- accepted/corrected result;
- final string.

If human validation shows the public label should be Lumasaaba rather than Lugisu, return that naming decision to José Antonio before finalization.

---

# 17. Common-data binding

## Verified external figure

GSMA's *State of Mobile Internet Connectivity 2025 — Trends in Mobile Internet Connectivity*, Figure 15 (PDF p. 31), reports Uganda 2024 smartphone ownership of:

- **33% urban**
- **20% rural**

Source: https://www.gsma.com/somic/wp-content/uploads/2025/09/The-State-of-Mobile-Internet-Connectivity-2025-Trends-in-Mobile-Internet-Connectivity.pdf

## Recommendation D4-17

Bind the **20% rural smartphone-ownership figure** to this concrete architecture parameter:

> **The core RoyaCheck loop must work on one intermittently available/shared household smartphone and must not require a second personal smartphone, login/account sync, cloud inference, background push, or live network after required assets are cached.**

This is the common-data-to-design binding.

The figure does **not** justify a bandwidth number or claim Noor personally has/does not have a smartphone.

---

# 18. Technical budgets

## Recommendation D4-18

### Cache / binary budget

- serialized learned model: **≤ 12 MB**
- preferred serialized model after safe optimization/quantization: **≤ 5 MB**
- model + runtime + critical core assets required after first load: **≤ 30 MB**
- no network required for the core loop after those assets are cached

These are engineering budgets, not figures derived from Uganda bandwidth data.

### Latency budget

On the actual Stage 4 target smartphone/browser:

- median single-image inference: **≤ 2.0 s**
- p95 single-image inference: **≤ 4.0 s**
- hard unusable threshold: **> 5.0 s median**

The core compatibility measurement must use ONNX Runtime Web WASM.

WebGPU measurements may be supplementary only.

### Primary physical browser/device evidence target — owner resolved

José Antonio has identified the primary available physical test environment as:

> **Apple iPhone 17 Pro Max + Safari**

Stage 7/9 browser evidence for the primary physical-device path must therefore record the actual iPhone 17 Pro Max, Safari version, iOS version, ONNX Runtime Web execution provider used, measured model/runtime bytes, and measured inference latency.

This is a **real-device compatibility/performance evidence target**, not a proxy for Noor's unknown household smartphone and not evidence of affordable/basic-phone performance. Because the iPhone 17 Pro Max is a high-end device, successful measurements on it may support claims that the system works on that tested phone/browser, but must **not** be generalized to low-cost smartphones without separate evidence.

If the primary iPhone/Safari path fails the required WASM compatibility or budget, the failure must be recorded and the pre-approved fallback path invoked; desktop/mobile emulation may supplement but not replace the disclosed physical-device result.

---

# 19. Stage 7 technical kill time

## Recommendation D4-19

From the start of definitive Stage 7 technical work:

- Candidate A frozen-head path: maximum **90 minutes**
- first fallback path: maximum additional **45 minutes**
- second fallback path: maximum additional **30 minutes**
- **hard learned-path kill time: 3 hours after Stage 7 begins**

The remaining Stage 7 budget is reserved for:

- freeze;
- one-shot internal readout;
- external readout if still feasible;
- ONNX export;
- browser measurement;
- evidence capture.

No sunk-cost extension beyond the hard kill time without an explicit owner decision that also protects the submission buffer.

---

# 20. Fallback ladder

## Recommendation D4-20

### A — preferred

MobileNetV3-Small-class encoder + five-way coffee head + validation-selected abstention + ONNX Runtime Web WASM.

### B — lower-training-risk

Frozen encoder + fixed embeddings + simple linear/prototype classifier, using the same product-output mapping and abstention rules.

Entry trigger:

- head training instability;
- time overrun;
- no validation-feasible operating point after the A budget.

Claim reduction:

- emphasize transfer-learning/embedding triage rather than task-specific feature learning.

### C — smaller/runtime path

Smaller browser-compatible encoder with the same three-way product mapping.

Entry trigger:

- model/runtime exceeds the Stage 4 binary or latency budget.

### D — stop/reduce

If no learned path meets the safety + coverage gate before the Stage 7 hard kill time:

- do not substitute decorative AI;
- preserve the human workflow;
- reduce the visual-AI claim;
- return to owner for a bounded submission-scope decision.

---

# 21. Decisions deliberately left open until Stage 7A/7B

Stage 4 should **not** falsely lock facts that require archive inspection or a real runtime smoke test.

These remain conditional even after owner approval:

- exact BRACOL file/class counts after download;
- whether publisher split files are structurally usable;
- exact near-duplicate groups;
- exact leaf-side instruction;
- exact pretrained weight artifact until its license verdict passes;
- exact quantization path;
- exact actual-phone latency;
- actual validation-selected thresholds;
- actual external/challenge performance.

The rules for deciding them are pre-registered here; their values come later.

---

# 22. Owner-approved Stage 4 lock set

José Antonio explicitly approved D4-01 through D4-20 on 2026-10-03, subject to the stated license gates and later evidence requirements:

- **D4-01** BRACOL whole-leaf development role
- **D4-02** RoCoLe primary external role
- **D4-03** Saposoa optional secondary external role
- **D4-04** BRACOT optional challenge role
- **D4-05** five-way source head → three product outputs
- **D4-06** MobileNetV3-Small first model family and frozen-head-first training rule
- **D4-07** ONNX Runtime Web WASM required runtime path
- **D4-08** preprocessing/capture contract
- **D4-09** split/leakage/quarantine rules
- **D4-10** threshold/abstention selection rule
- **D4-11** numerical validation gate
- **D4-12** external-transfer readout/claim reduction
- **D4-13** challenge/OOD targets
- **D4-14** symptom-guide baseline framing
- **D4-15** privacy/shared-device data contract
- **D4-16** localization-validation contract
- **D4-17** common-data design binding
- **D4-18** binary/latency budgets + target-device evidence rule, with **iPhone 17 Pro Max + Safari** as the primary physical evidence target
- **D4-19** Stage 7 hard kill time
- **D4-20** fallback ladder

---

# 23. Stage 4 gate

The substantive owner-decision gate is complete:

- D4-01 through D4-20 are owner approved;
- the primary physical evidence target is resolved as **iPhone 17 Pro Max + Safari**.

Stage 4 remains **In review** until:

1. the pre-registration is independently audited under the Tier A Claude gate;
2. material findings are reconciled without silently changing an owner-approved technical rule;
3. any consequential repair returns to José Antonio for explicit approval;
4. the owner explicitly authorizes Stage 4 closure/merge.

Until those gates pass:

- no definitive training;
- no validation result used for design;
- no internal test readout;
- no external readout;
- no challenge-set result.

**Current status: In review — owner-approved pre-registration; Tier A audit pending.**
