# Stage 4 Tier A Audit — RoyaCheck Offline

**Auditor:** Claude (independent Tier A audit, Claude Code)
**Audit package:** `docs/audits/stage-04/STAGE_04_AUDIT_PACKAGE.md`, read at the audited head
**PR:** `SplitzHappen/RoyaCheck-Offline#13`, "Stage 4: technical pre-registration"
**Audited head:** `chatgpt/stage-04-technical-preregistration` at `8ea4540f260df303af167eae293e00feb542846d`. This matches the expected head and the remote PR ref (`refs/pull/13/head`).
**Base:** `main` at `2e52cd098bef4077a9c8825b80c2aeb16e945044`. This matches. The merge base equals the base, so the PR diff is exactly the five branch commits.
**Audit date:** 2026-10-03, about 19:00–20:00 ET
**Output path:** `docs/audits/stage-04/STAGE_04_AUDIT.md` on branch `claude/wonderful-turing-cvugnp`, branched from the audited head. The package names no output path, so this follows the earlier `docs/audits/<stage>/STAGE_XX_AUDIT.md` convention. No audited file was modified.

**Scope and method notes**

- **Diff audited.** PR #13 changes three files:
  - `STAGE_04_TECHNICAL_PREREGISTRATION.md` (new, 818 lines);
  - `STAGE_04_AUDIT_PACKAGE.md` (new);
  - two status edits to `ROADMAP.md`.

  I read all six required documents in full, and the ROADMAP sections for the clock, review tiers and Stages 3–7. I compared the proposed version (`510ef8f`) with the owner-approved version (`1466896`). Owner approval changed status text and the device target only; it changed no numeric rule.
- **No results used.** I trained nothing and ran no model. I opened no image from any dataset, and I created no split. The only dataset content I inspected was the publisher's *label metadata*: the authors' published `dataset.csv` for BRACOL, and published class statistics for RoCoLe. This is the kind of file-count and structure check that ROADMAP "Parallel de-risking" permits. It cannot reveal any model result.
- **External-source access.** This environment's egress policy blocked direct retrieval of several sites:
  - data.mendeley.com and its public API;
  - doi.org, DataCite, arXiv, ScienceDirect;
  - gsma.com;
  - huggingface.co, onnxruntime.ai, docs.pytorch.org, webkit.org and image-net.org.

  Where possible I verified facts from the **canonical source repositories** behind those pages, through raw.githubusercontent.com and the npm registry. Those sources are:
  - the PyTorch Vision, timm and ONNX Runtime `gh-pages` docs sources;
  - the BRACOL authors' repository `esgario/lara2018`;
  - MDN browser-compat-data and the MDN content repository;
  - the `onnxruntime-web` npm tarballs, which I measured directly;
  - Dataset Ninja metadata mirrors.

  Every factual proposition is labelled **Verified** (primary or canonical-source file), **Verified (secondary)** (mirror or search excerpt), or **Not independently verified**. "Not independently verified" never means "false".

---

## Verdict

**PASS WITH MAJOR REPAIRS**

- Blocking findings: **0**
- Major findings: **10**
- Minor findings: **9**

No finding requires a new route, model family, runtime or product output. Every Major is a definitional, procedural or claim-boundary repair. They are still **closure conditions**. If Stage 4 closed without M1–M3, the Stage 7 validation gate would measure the wrong ground truth with an unattainable coverage rule. The resulting evidence would then be invalid or misleading. Several repairs change owner-approved rules (D4-05, D4-08, D4-11, D4-13, D4-19, D4-20), so they must return to José Antonio.

---

## Executive assessment

**What is strong.** This is a serious pre-registration.
- It separates verified facts, constraints, hypotheses and later evidence.
- It quarantines test, external and challenge data with an explicit burned-partition rule.
- It refuses to treat softmax as an OOD detector.
- It refuses to claim superiority over the printed symptom guide.
- It distinguishes framework code licences from pretrained-weight terms.
- It records iPhone 17 Pro Max + Safari as a high-end, non-representative device.
- It keeps the Stage 3 three-state contract intact.

The architecture is sound: MobileNetV3-Small, a frozen backbone with a small head, and ONNX Runtime Web on WASM. The architecture facts check out against TorchVision's own source: 2,542,856 parameters, 0.057 GFLOPs, 9.829 MB and resize-256/crop-224. Nothing in the PR produces or relies on a training, validation, test, external or challenge result.

**The decisive problem is the ground truth, not the model.** The BRACOL whole-leaf labels are *predominant-stress* labels. The authors' published label file has 1,685 labelled leaves, not 1,747. It records **per-stress presence flags** alongside the predominant label. **99 leaves (5.9% of the dataset, 15.7% of all rust-bearing leaves) carry rust as a secondary stress** under a leaf-miner, cercospora or brown-leaf-spot label. ROADMAP label semantics say rust plus another condition routes to `visible rust`. D4-05 as written trains and scores those leaves as "other disease". The confident-miss metric therefore cannot see a rust-bearing leaf routed to `no visible rust` if rust is not dominant. That is precisely the safety failure the metric exists to catch (M1).

**The validation gate is internally infeasible as written.** "Overall coverage ≥ 50%" over all eligible images conflicts with D4-05, because supported non-rust diseases must route to `not sure`. On the actual label distribution (272 healthy + 531 rust of 1,685), a *perfect* router reaches at most 47.7% overall coverage. It can pass only by routing other-disease leaves to rust/no-rust, which is the behaviour the design forbids. Tie-break 2, "maximize overall coverage", rewards the same misrouting. Several metric denominators are also undefined (M2).

**The safety gate is not sample-size-aware.** A 15% validation split contains roughly 80–95 rust leaves and about 41 healthy leaves. At that size, a ≤ 5% confident-miss *point estimate* is compatible with a true rate above 11%: 4/80 has a one-sided 95% Clopper–Pearson upper bound of 11.1%. The internal-test trigger (10%) and the "reduced proof-of-concept claim" have no fixed claim ceiling. Post-hoc wording is therefore still possible (M3).

**Preprocessing can delete the evidence it is meant to classify.** The BRACOL publisher pipeline squashes whole leaves to 224×224. The reported BRACOL image size is 2048×1024 (secondary source). Resize-256 → center-crop-224 on a 2:1 image keeps only 43.75% of the long axis. 59% of rust-predominant leaves are in the lowest severity band (≤ 5% leaf area). Cropping can therefore remove all visible rust from a leaf labelled rust, both in training and on Noor's photo (M4). Separately, nothing guarantees that the held-out readout is run on the artifact that ships. The quantization path is open, and the ROADMAP places export after the test readout (M5).

**The challenge/OOD design blurs three different things.** These are image-quality rejection, known non-rust disease routing and genuine unknown/OOD inputs.
- No deterministic image-quality check is defined beyond a 224-pixel minimum. The "blurry → `not sure` ≥ 90%" target therefore silently relies on softmax.
- The field-scene category has no target.
- BRACOT appears to carry leaf-instance masks, not verified per-leaf disease labels. It comes from the same lab and locality as BRACOL.
- No category has a minimum count (M6).

**The fallback ladder and kill time are not operationally determinate.** D4-06's "last-block unfreeze" fallback appears nowhere in D4-19/D4-20. Rung B (frozen encoder + linear classifier on embeddings) is functionally almost identical to Rung A, so it is not a lower-risk alternative. The training configuration is not fixed, so "no broad hyperparameter search" cannot be enforced. The relative 3-hour kill time no longer fits the ROADMAP's fixed 10:00 PM ET Stage 7 end time (M7).

**Licensing, platform and Stage 3 carry-forwards.**
- The pretrained-weight gate has no pre-decided acceptance standard. timm's metadata says Apache-2.0, but its README says ImageNet-trained weights should be assumed to carry ImageNet's non-commercial terms. Without a pre-decided standard, the gate either blocks the learned path at 7A or gets passed ad hoc under time pressure (M8).
- On the chosen iPhone/Safari target, browser storage is not guaranteed to persist for the months that the D3-07 handoff may wait. Safari's 7-day script-storage eviction, the separate storage context of a home-screen web app, and the heuristic `persist()` grant are not pre-registered (M9).
- Stage 3 carried two evaluation obligations to Stage 4: with-card vs without-card capture conditions, and the leaf-side rule. D4 does not map either to any evaluation condition (M10).

**Bottom line.** The plan is close. With roughly ten precise text repairs, re-approved by the owner, it would make later evidence defensible. Without them, the most likely Stage 7 outcomes are:
- a spurious fallback, caused by the infeasible coverage rule;
- a safety number that undercounts real confident misses;
- a reduced claim written after the results are seen.

---

## D4-01 through D4-20 verification matrix

| D4 | Status | Evidence | Assessment | Required repair |
|---|---|---|---|---|
| **D4-01** BRACOL whole-leaf development role | Confirmed with caveat | **Verified:** the authors' `lara2018/classification/dataset/dataset.csv` has columns `id,predominant_stress,miner,rust,phoma,cercospora,severity` and 1,685 rows. The 62 missing IDs match the paper's statement (secondary) that 62 leaves with indistinguishable predominant stress "were not used". **Verified (secondary):** CC BY 4.0, Arabica, released 2019-11-06; Espírito Santo, Brazil; ASUS Zenfone 2, Xiaomi Redmi 5A, Xiaomi S2, Galaxy S8, iPhone 6S; abaxial side, partially controlled, white background; 2,147 symptom crops. | Excluding the crops is correct. "1,747 original whole-leaf images" is the *collected* total; **1,685 are labelled**. Dataset Ninja's mirror reports 1,402 images, which is unexplained. The archive count must be re-verified at 7A. | Record "1,747 collected / 1,685 labelled (62 excluded by the authors)". Exclude the 62 from all partitions. See M1 for the label map. |
| **D4-02** RoCoLe primary external | Confirmed with caveat | **Verified (secondary):** CC BY 4.0; Robusta; Manabí, Ecuador; 1,560 images = 4 per plant × 390 plants; on-plant field capture with natural backgrounds; "upper and back sides" of leaves. Labels: healthy 791 / unhealthy 769; rust_level_1–4 = 344/166/62/30; red_spider_mite 167, never co-labelled with rust. 8 images have conflicting `state` and `classification` values. Three resolutions; red mite is over-represented at 4128 px. | The labels **do** support rust recall, healthy specificity, confident miss and coverage once a frozen map exists. The shift is multiply confounded: species, capture, leaf side, resolution and plant clustering. The ROADMAP default external was Saposoa; D4-02 changes it without a supersession note (m3). | Freeze the RoCoLe map from annotation files only (m6). Describe the shift as species + on-plant capture + mixed leaf side, not species/capture alone. |
| **D4-03** Saposoa optional secondary | Confirmed with caveat | **Not independently verified:** the Mendeley record, licence, 18 Sep 2026 date, version history and acquisition details (all blocked). **Verified (secondary):** a Jan 2026 article (Santa-María & Rodríguez, RCSI 6(1) e1349) describes 1,500 = 500/500/500 images from Saposoa, San Martín, Peru under a uniform protocol. It calls the data its own, and its leaf-spot class is "ojo de gallo". | "Ojo de gallo" usually denotes American leaf spot (*Mycena citricolor*), not Cercospora. The class's mapping to a BRACOL class is therefore unresolved. Reading it only "if time permits" after RoCoLe is a selective-reporting channel. | m2 (verification labelling, pathogen identity) and m6 (decide whether to read it before the RoCoLe readout). |
| **D4-04** BRACOT optional challenge | Confirmed with caveat | **Verified (secondary):** 300 images, 1,662 instances, Galaxy S8, on-tree, Santa Maria de Marechal Floriano (ES, Brazil), Sep 2019 / Mar 2020. Contributors include Krohling, a BRACOL author. Annotations are VIA polygons that appear to be leaf masks. **Not verified:** per-instance disease labels. | The role is coherent only as a **scene-complexity / multi-leaf input** whose expected route is `not sure`. It cannot serve as a rust/no-rust test without project-authored labels, which would be new labelling. It shares a lab and locality with BRACOL, so it is not independent of the development domain. | M6. |
| **D4-05** five-way head → three outputs | **Not confirmed** | See D4-01. | A five-way head is supported and preferable to a binary head. But "rust" means *predominant* rust, which contradicts ROADMAP label semantics for 99 rust-bearing leaves. | **M1.** |
| **D4-06** MobileNetV3-Small, frozen-head first | Confirmed with caveat | **Verified (canonical source):** TorchVision `mobilenetv3.py`: `num_params 2542856`, `_ops 0.057`, `_file_size 9.829`, acc@1 67.668; transform resize 256 bilinear (antialias), crop 224, ImageNet mean/std. **Verified:** timm `mobilenetv3_small_100.lamb_in1k` 2.54M params, crop_pct 0.875, **bicubic**. TorchVision models note: pretrained models "may have their own licenses or terms". | Defensible first candidate for about 1.2k training leaves. Unspecified: the feature layer (576-d pooled vs the ImageNet-trained 1024-d hidden layer), the training configuration, and how the unfreeze fallback maps to the ladder. | M7 (config and ladder), M8 (weights gate). |
| **D4-07** ORT Web WASM required | Confirmed with caveat | **Verified (ORT docs source):** WASM ✔ on Safari macOS/iOS; WebGPU ❌ on Safari in ORT's table (MDN lists WebGPU in Safari 26, so the table lags the browser); "WebGL support is in maintenance mode"; the WebGPU guide recommends WASM for "very lightweight models". MIT licence. Multi-threading needs `crossOriginIsolated`, which GitHub Pages cannot set. ORT issue #26827: severe Safari 26 CPU/memory problems in JSEP mode, absent on plain WASM. | WASM-only is the right required path. Optional WebGPU means shipping the 21–27 MB JSEP binary, which conflicts with the 30 MB core budget. | m7 (pin the WASM-only build and thread policy). |
| **D4-08** preprocessing / capture | **Not confirmed** | Reported BRACOL size 2048×1024 (secondary); the publisher code uses `Resize((224,224))` (verified). | Center-crop-224 discards most of a 2:1 leaf frame. Browser/Python resampling parity is unaddressed. Flips are semantically safe (see Runtime/Preprocessing below). | **M4**, **M5**, **M10**. |
| **D4-09** split / leakage / quarantine | Confirmed with caveat | **Verified:** no split files are distributed. The authors' split is defined only in code: `seed = 150`, image-level, unstratified 70/15/15 with five rotated folds. | 70/15/15 stratified by the repaired class map is acceptable for 1,685 leaves. The pHash rule needs an implementation and a transitivity rule. | m5, m6. |
| **D4-10** threshold / abstention rule | Confirmed with caveat | — | Two thresholds on a five-way head are well defined: at T ≥ 0.50 the top-class condition is implied except at exact ties. The objective's second key rewards misrouting (M2). "Higher thresholds" is ambiguous for a pair (m6). | M2, m6. |
| **D4-11** validation gate | **Not confirmed** | Label counts above; Clopper–Pearson bounds computed by the auditor. | Overall coverage is infeasible, denominators are undefined, and the gate is not sample-size-aware. | **M2**, **M3**. |
| **D4-12** external readout / claim reduction | Confirmed with caveat | See D4-02. | No-retuning and honest transfer framing are correct. Plant clustering, red-mite handling and the 8 label conflicts need frozen rules. The trigger uses point estimates. | M3, m6. |
| **D4-13** challenge / OOD targets | **Not confirmed** | — | Image-quality, known-disease and unknown/OOD are conflated. No quality check is defined, the field-scene target is missing, and there are no minimum counts. | **M6**. |
| **D4-14** symptom-guide baseline | Confirmed | Stage 1 §10, Stage 2, D3-01. | Honest. Superiority stays "not measured" without a human study. | — |
| **D4-15** privacy / shared device | Confirmed with caveat | Canvas re-encoding drops EXIF in practice; it must be tested. | Sound minimization. `not_sure_reason` could leak an inferred diagnosis to the reviewer. Storage persistence is not guaranteed on iOS. | m8, M9. |
| **D4-16** localization contract | Confirmed with caveat | — | Small and correctly chooses no translation. It is missing two safety-critical strings and has no validator-unavailability rule. | m9. |
| **D4-17** common-data binding | Confirmed with caveat | GSMA PDF blocked here and in the two prior Stage 3 audits. | The binding logic is valid and correctly bounded. The figure is still not independently verified, yet the record calls it "Verified". | m4. |
| **D4-18** budgets + iPhone 17 Pro Max | Confirmed with caveat | WASM binary sizes measured from npm tarballs. | The budgets are coherent engineering rules. The device limitation is correctly stated. The measurement protocol and byte accounting are undefined. | m7. |
| **D4-19** kill time | **Not confirmed** | ROADMAP clock: Stage 7 latest end 10:00 PM ET. Audit performed about 7–8 PM ET with Stages 4–6 still open. | 90 + 45 + 30 = 165 min ≤ 180 min holds arithmetically. But it is unclear whether 7.0/7A/7B time is inside the A budget, and a relative clock now overruns the fixed Stage 7 end. | **M7**. |
| **D4-20** fallback ladder | **Not confirmed** | — | B ≈ A, and the unfreeze rung is unmapped. D lacks a safety floor. | **M7**. |

---

## Blocking findings

None.

---

## Major findings

### M1 — The "rust" ground truth contradicts the ROADMAP label semantics; BRACOL counts misstated (D4-01, D4-05)

- **Issue.**
  - BRACOL whole-leaf labels are predominant-stress labels plus per-stress presence flags (verified, authors' `dataset.csv`).
  - Of 1,685 labelled leaves, 630 carry rust and 531 have rust as the predominant stress.
  - **99 rust-bearing leaves are labelled with another class:** 45 leaf miner, 52 cercospora, 2 brown leaf spot.
  - D4-05 trains "rust" as the predominant class and maps every other disease class to `not sure`.
  - The ROADMAP label semantics require: "if rust and another condition appear together, route to visible rust".
  - Separately, the record says "1,747 original whole-leaf images". Only 1,685 are labelled; the authors excluded 62 leaves with no distinguishable predominant stress.
- **Why it matters.**
  - (a) The confident-miss metric, true rust → `no visible rust`, would exclude 15.7% of rust-bearing leaves from its denominator.
  - (b) A rust-bearing leaf routed to `no visible rust` would be scored as a tolerable "other-disease" outcome, not a confident miss.
  - (c) A model that correctly says `visible rust` on such a leaf would be scored wrong.
  - (d) The head is trained to suppress rust evidence on mixed leaves.
- **Consequence.** The headline safety metric undercounts the failure it exists to catch. That is a judge-vulnerable evidence defect.
- **Repair (narrowest).** Pre-register the class map from the label file, not the folder names:
  - `rust` = rust flag 1 (630 leaves, regardless of predominance);
  - `healthy` = all flags 0 (272; this is also severity 0);
  - `leaf_miner` / `brown_leaf_spot` / `cercospora` = predominant class with rust flag 0;
  - the 62 unlabelled leaves are excluded from every partition and disclosed.

  Truth for every rust metric uses the rust flag. If the owner prefers to keep a predominant-stress head, the minimum acceptable alternative is: train on the predominant classes, but compute *all* rust-truth metrics from the rust flag and report the 99 mixed leaves separately. Either option changes an owner-approved rule and needs owner approval. At 7A, confirm that the Mendeley archive ships the same CSV (Dataset Ninja's converter reads `leaf/dataset.csv` with the same columns). If the archive lacks the flags, stop and return to the owner before 7B.

### M2 — Validation-gate definitions are infeasible or undefined (D4-10, D4-11)

- **Issue.**
  - (a) **Overall coverage ≥ 50%** over all eligible validation images is infeasible for a correct router:
    - under predominant labels, a perfect router covers at most (272 + 531)/1,685 = **47.7%**;
    - under the M1 map, it covers at most (272 + 630)/1,685 = 53.5%, which still requires ≥ 93% acceptance of every rust and healthy leaf with zero other-disease misroutes.
  - (b) Tie-break 2, "maximize overall coverage", rewards routing other-disease leaves to a rust/no-rust answer.
  - (c) Several terms are undefined:
    - the confident-miss denominator: all true rust, or accepted rust;
    - "rust recall on accepted rust cases";
    - "clearly healthy";
    - whether an other-disease leaf → `no visible rust` counts as correct in "selective accuracy". That outcome is semantically true under the label semantics but contrary to the routing policy.
- **Why it matters.** The gate either forces a spurious fallback for a good model or passes a model that misroutes. Undefined denominators allow choosing the flattering one after the results are seen.
- **Repair.** Replace the gate's metric definitions with the table below, keep the owner's numeric levels, and replace "overall" with "target-class" coverage. Let R = rust (M1 map), H = healthy, O = other-only, and routes VR / NVR / NS.

| Metric | Definition | Gate |
|---|---|---|
| Target-class coverage | \|(R∪H)→{VR,NVR}\| / \|R∪H\| | ≥ 50% |
| Rust coverage | \|R→{VR,NVR}\| / \|R\| | ≥ 50% |
| Healthy coverage | \|H→{VR,NVR}\| / \|H\| | ≥ 50% |
| Selective accuracy | (\|R→VR\| + \|H→NVR\|) / \|(R∪H)→{VR,NVR}\| | ≥ 85% |
| Accepted rust recall | \|R→VR\| / \|R→{VR,NVR}\| | ≥ 90% |
| Accepted healthy specificity | \|H→NVR\| / \|H→{VR,NVR}\| | ≥ 80% |
| **Confident-miss rate** | **\|R→NVR\| / \|R\|** (all true rust, accepted or not) | ≤ 5%, as a count cap; see M3 |
| Other → NVR | \|O→NVR\| / \|O\| | ≤ 10% |
| Reported, not gated | overall abstention \|E→NS\|/\|E\|; O→VR; \|R→NVR\|/\|R→{VR,NVR}\| | — |

The threshold objective then becomes:
1. minimize the confident-miss count;
2. maximize target-class coverage;
3. maximize accepted rust recall;
4. take the higher `T_healthy`, then the higher `T_rust` (m6).

### M3 — The safety gate and claim triggers are not sample-size-aware, and the reduced claim is undefined (D4-11, D4-12, §11)

- **Issue.** A 15% stratified validation split under M1 holds about 94 R, 41 H and 118 O. The internal test is similar. One-sided 95% Clopper–Pearson upper bounds computed by the auditor:

  | Observed misses | Upper bound |
  |---|---|
  | 0/80 | 3.7% |
  | 2/80 | 7.7% |
  | 3/80 | 9.4% |
  | 4/80 (= 5%) | 11.1% |

  So a validation pass at "≤ 5%" is compatible with a true confident-miss rate above 11%. The healthy-specificity gate rests on about 21 accepted healthy leaves.
  - The threshold is selected on the same set. The realized validation rates are therefore optimistically biased (winner's curse), and minimizing the miss count first can pin `T_healthy` to a single validation image.
  - "95% intervals where sample size supports them" is discretionary. Exact intervals are valid at any n.
  - The test claim-reduction trigger (> 10% / < 75%) leaves the 5–10% band unaddressed.
  - The "explicitly reduced proof-of-concept claim" has no pre-written text.
- **Why it matters.** Point-estimate gates at n ≈ 80 cannot support a "≤ 5%" safety statement. An unwritten reduced claim can be shaped after the readout.
- **Repair.**
  1. At 7B, convert each rate gate to an **integer cap computed from the frozen manifest**, for example max confident misses = floor(0.05 × n_R,val). Record n_R, n_H and n_O in the manifest commit.
  2. **Always** report exact counts and two-sided 95% Clopper–Pearson intervals for every gated and headline rate. Report one-sided upper bounds for confident miss and Other → NVR.
  3. Keep the owner's point thresholds as the *engineering* survival gate and claim-reduction trigger. Add a pre-registered *claim-language* rule: words such as "reliable/robust rust triage" are permitted only if the internal-test one-sided 95% upper bound on confident miss is ≤ 10%. Otherwise the public text states the observed count and interval only.
  4. Pre-write the reduced-claim sentence now, for example: "On BRACOL held-out leaves the prototype missed X of N rust leaves with a confident `no visible rust` (95% CI a–b); this is a proof-of-concept measurement, not evidence of reliable rust triage."
  5. Keep a ledger of every model/configuration evaluated on validation, and disclose the count.

  Cluster-aware intervals for RoCoLe (4 images per plant) are desirable if plant IDs are recoverable. Otherwise, state that the intervals ignore clustering.

### M4 — Resize-256 → center-crop-224 can remove the disease evidence (D4-08)

- **Issue.**
  - BRACOL images are reported as 2048×1024 (secondary; aspect ratio 2:1). The shorter-side resize gives 512×256, and a 224 center crop keeps **43.75% of the long axis**.
  - 313 of 531 rust-predominant leaves (59%) are severity 1, ≤ 5% leaf area. Lesions can therefore lie entirely in the discarded margins.
  - The same transform drops 25% of a 4:3 phone frame and about 44% of RoCoLe's 16:9 frames.
  - The publisher's own pipeline uses `transforms.Resize((224, 224))`, which squashes the whole leaf (verified).
  - The TorchVision default is an ImageNet object-centring convention, not a requirement for fine-tuning.
- **Why it matters.** This produces label noise in training and missed rust at inference. On an elongated leaf photographed on-plant, the crop can hide rust from the model, which is exactly the confident-miss path.
- **Repair.** Pre-register a **full-frame** transform used identically in training, validation, test, external readout and the browser: either pad to square with a fixed constant fill and then resize to 224×224, or direct-resize to 224×224 as the publisher does. Keep the encoder's normalization constants.
  - Pick one rule now. The choice is not a validation hyperparameter.
  - Add a capture-UI framing instruction: the whole leaf inside the square guide.
  - Training-only random-resized-crop must keep a scale floor, for example ≥ 0.8 of the frame, so that it cannot crop away lesions.

### M5 — The held-out readout is not guaranteed to measure the shipped artifact (D4-08 item 6, D4-18, §21)

- **Issue.**
  - The quantization path is "deliberately left open".
  - The ROADMAP orders 7E/7F (readouts) before 7G (export).
  - D4-18 prefers a ≤ 5 MB "optimized/quantized" model.
  - Browser resampling (canvas) is not identical to PIL/TorchVision antialiased bilinear or bicubic, and D4-08's "same interpolation" cannot be guaranteed by naming it.
- **Why it matters.** Quantizing or re-implementing preprocessing *after* the one-shot readout is a design change after the readout. Under the burned-partition rule that turns the test into development evidence. Doing it silently would mean the published held-out numbers describe a model that does not ship.
- **Repair.**
  1. Freeze export format and precision (FP32 / FP16 / INT8) in 7D, before 7E.
  2. Run 7E and 7F on the **exact exported ONNX artifact** with the exact preprocessing implementation that ships, for example by running the browser preprocessing code in Node/Python, or by decoding and resizing with the same library.
  3. Add a **validation-only parity check** before 7E on the actual iPhone/Safari path: routing agreement with the evaluation pipeline ≥ 99% on the validation set, and a maximum absolute probability difference recorded.

  If parity fails, fix it on validation data before 7E.

### M6 — Challenge/OOD design conflates three behaviours and lacks targets, counts and label provenance (D4-04, D4-13)

- **Issue.**
  - (a) **Image-quality rejection.** "Image failing deterministic eligibility checks" is defined only as decodable and ≥ 224 px. The "blurry/unreadable → `not sure` ≥ 90%" target therefore relies on softmax confidence, which D4-13 itself disclaims as an OOD detector.
  - (b) **Known non-rust disease routing.** The "other coffee disease/stress" category has no source. BRACOL's other classes are in-distribution and belong to the internal test. Unseen coffee stresses would come from RoCoLe (red mite) or Saposoa (leaf spot), which are both quarantined externals, so using them would be double use.
  - (c) **Unknown/OOD.** Field-scene/multi-leaf inputs are listed but have no target. BRACOT's annotations appear to be leaf masks without verified per-leaf disease labels. BRACOT shares a lab and locality with BRACOL.
  - No category has a minimum count. A 10-image category gives a 90% target a 95% CI of roughly 55–100%.
  - "All challenge cases combined ≥ 75%" depends on the category mix.
- **Why it matters.** A blended challenge score can pass by being good at one easy category and say nothing about the others. Creating disease labels for BRACOT field scenes would be new, unvalidated labelling.
- **Repair.** Split D4-13 into three separately reported families:
  - **Q — image quality.** Either pre-register a deterministic check now (method and threshold fixed at 7B from *training* images only, for example variance of the Laplacian and an exposure-clipping fraction), or state that no quality gate exists. In the second case, report blurred images descriptively without a fail-safe claim.
  - **K — known non-rust coffee disease.** Measured on the internal test via the M2 "Other → NVR" metric, not on the challenge set.
  - **U — unknown/OOD.** Non-coffee, maize, bean, BRACOT multi-leaf scenes and any licensed unseen coffee stress not drawn from a quarantined external set.
    - Expected route: `not sure`.
    - BRACOT subset chosen by seeded sampling from the file list, without browsing images.
    - No project-authored disease labels.
  - **Minimum n ≥ 20 per reported category.** Below that, report descriptively with counts and exact intervals, and make no target claim.
  - Drop the combined target or fix the category composition in advance.
  - Freeze the challenge manifest (file IDs, sources, licences) at 7B, before 7C.

### M7 — The model-development procedure, fallback ladder and kill time are not determinate (D4-06, D4-19, D4-20)

- **Issue.**
  - (a) D4-06 pre-authorizes "unfreeze only the final backbone block". D4-19 names a "first" and "second" fallback, and D4-20 names Rungs B/C/D. Which is which is undefined, so the rung can be chosen after validation numbers are seen.
  - (b) Rung B, "frozen encoder + fixed embeddings + linear/prototype classifier", is functionally nearly the same as Rung A, a frozen backbone with a linear head. A validation-gate failure of A is very likely to recur in B, so B is not a meaningful lower-risk path.
  - (c) The training configuration is unspecified: feature layer, optimizer, learning rate, epochs, early stopping, class weighting, augmentation magnitudes and seed. "No broad hyperparameter search" is therefore unenforceable.
  - (d) The kill time is relative, "3 hours after Stage 7 begins".
    - The ROADMAP fixes Stage 7's latest end at 10:00 PM ET on 3 Oct, and this audit is being written at about 7–8 PM ET with Stages 4–6 still open. A 3-hour learned path plus 7D–7G cannot fit, and the overrun rule then eats Stage 8.
    - It is also unstated whether 7.0/7A/7B (download, licence verdict, hashing, manifest commit) fall inside A's 90 minutes. If they fall outside, only 15 minutes of the 3 hours remain for them.
  - (e) Rung D lacks a safety floor. After a gate failure, the owner could still ship a model that emits `no visible rust` despite failing the confident-miss constraint.
- **Why it matters.** This is the main remaining forking path for post-hoc choice. It also makes a schedule collision with the protected Stage 8–10 work likely.
- **Repair.**
  1. Fix the order:
     - **A0** frozen backbone + head: 90 min, including 7C only.
     - **A1** A0 + unfreeze the final block: 45 min.
     - **B′** a genuinely different low-risk path, for example a class-prototype or k-NN classifier on frozen embeddings with the same routing rules: 30 min. If no such path is wanted, delete B.
     - **C** triggers only on 7.0 runtime-budget failure, *before* training, with the encoder named now, for example a ≤ 0.75-width MobileNetV3-Small, licence-gated.
     - **D** stop/reduce.
  2. Fix one training configuration now, for example:
     - pooled 576-d features;
     - AdamW, learning rate 1e-3, 30 epochs;
     - keep the epoch with the best validation loss;
     - class-weighted cross-entropy;
     - seed 20261003.

     Only one predeclared change is allowed per rung.
  3. Restate the kill times as **absolute ET clock times computed and committed at Stage 7 start**. Define the hard kill as min(start + 3 h, the time that leaves the 7D–7G reservation before the ROADMAP Stage 7 latest end). State that 7.0/7A/7B run before the A0 clock starts, with their own cap.
  4. Add to D: a model failing the confident-miss cap must not emit `no visible rust`. The owner may choose, before results, between (i) no learned proposal and (ii) a degraded output in which `no visible rust` is disabled (an owner decision, because it narrows the Stage 3 three-state behaviour).

### M8 — The pretrained-weight licence gate has no pre-decided acceptance standard (D4-06, licence gate)

- **Issue.**
  - TorchVision says pretrained models "may have their own licenses or terms and conditions derived from the dataset used for training. It is your responsibility to determine whether you have permission" (verified, `docs/source/models.rst`).
  - timm's model metadata says `apache-2.0`, but its README states: "ImageNet was released for non-commercial research purposes only… one should assume that the original dataset license applies to the weights" (verified).
  - Essentially every available MobileNetV3-Small weight set is ImageNet-trained, so a "clearly permitted weight source" may not exist.
  - Stage 0 item 46 says submission grants the organizer a broad licence covering promotion.
- **Why it matters.** At 7A the gate will either block the learned path entirely, since training from scratch on about 1.2k leaves is not credible, or be passed ad hoc under deadline pressure. Both outcomes are worse than deciding the standard now.
- **Repair.** The owner pre-decides and records the acceptance standard. Recommended: accept ImageNet-1k-pretrained weights for this non-commercial competition entry, conditional on:
  - pinning the exact artifact (URL and SHA-256);
  - attributing both the code licence and ImageNet provenance;
  - stating in the README that the weights may carry ImageNet's non-commercial terms;
  - making no commercial-use claim.

  The owner also records whether that residual risk is acceptable given the organizer's promotion licence. This is an owner/legal-risk decision, not an auditor verdict on the law. If the owner rejects that standard, D must be invoked before 7C, not discovered at 7A.

### M9 — iOS Safari storage persistence and install context are not pre-registered (D4-07, D4-15, D4-18; Stage 3 D3-07)

- **Issue.**
  - In Safari, script-written storage of an origin with no user interaction in the last seven days of browser use is deleted. That covers IndexedDB and Cache Storage, and therefore records *and* cached model/runtime (verified via MDN; WebKit wording seen in search excerpts only).
  - Home-screen web apps "have their own counter of days of use" (WebKit, search excerpt).
  - `navigator.storage.persist()` is granted heuristically, for example for home-screen web apps.
  - Third-party sources report that home-screen app storage is separated from the Safari tab's storage. A record made in a tab would then be invisible in the installed app, and vice versa. This is not verified on webkit.org.
  - The D3-07 handoff may wait months for an extension encounter.
- **Why it matters.** On the chosen evidence device, the "offline core after caching" and the "record waits for the next encounter" could silently fail. Claims about durable local records would then be unsupported.
- **Repair.** Pre-register:
  1. The iPhone evidence context: home-screen-installed web app, or Safari tab, stated explicitly. Recommended: installed.
  2. Call `persist()` and record its result.
  3. An offline proof that kills and relaunches the app in airplane mode, then runs the core loop.
  4. A limitation sentence: "browser storage on this device is not guaranteed to persist; records can be deleted by the browser's storage policy or by clearing site data."
  5. No claim of durable storage beyond what is measured.

### M10 — Stage 3 capture-condition obligations are not mapped to any evaluation (D4-08, D4-12; Stage 3 §8, D3-03)

- **Issue.** Stage 3 §8 carried forward "evaluation of both with-backing-card and without-backing-card conditions where the product permits both" and an ergonomically feasible leaf-side rule. Against that:
  - BRACOL is detached leaves, abaxial side, on white (verified, secondary).
  - RoCoLe is on-plant without a card and mixes upper and lower sides (verified, secondary).
  - **No dataset represents on-plant + backing card**, which is the product's recommended capture condition.
  - D4 defers the leaf side and never states which condition each evaluation represents.
  - D3-03 says to reopen the workflow if evidence cannot support on-plant capture, but D4 does not define what evidence triggers that.
- **Why it matters.** Judges will ask how the evidence relates to Noor's photo. Without a pre-registered mapping, the answer will be constructed after the results.
- **Repair.** Pre-register a capture-condition table:
  - BRACOL test = detached, abaxial, white background.
  - RoCoLe = on-plant, no card, mixed side, Robusta.
  - On-plant + card = **not measured**, a mandatory limitation.

  Also pre-register:
  - the leaf-side rule *now*, conditional on 7A train-only confirmation: photograph the abaxial (lower) side by gently turning the attached leaf, because that is the only side the development data cover;
  - the D3-03 reopen trigger: the RoCoLe claim-reduction trigger firing means field-photo claims are withdrawn, and the owner decides whether the on-plant workflow stands.

---

## Minor findings

### m1 — The dataset dossier omits fields the ROADMAP requires

The ROADMAP Data plan requires geography and coverage limits for every dataset. These are missing:

- BRACOL: Espírito Santo, Brazil; five named phones.
- RoCoLe: Manabí, Ecuador; 390 plants × 4 images; mixed resolutions; 8 conflicting labels.
- Saposoa: San Martín, Peru.
- BRACOT: same locality and lab as BRACOL.

**Repair:** add these fields with their verification status.

### m2 — Saposoa facts are stated as source-shown facts but are not independently verifiable here

The unverifiable facts are the licence, the 18 Sep 2026 date, the counts, the protocol and the species. The leaf-spot pathogen identity is also unresolved: it may be *Mycena citricolor* rather than Cercospora.

**Repair:**
- Label these facts "as displayed on the Mendeley record, retrieved [date] by [who]; re-verify at 7A".
- Resolve the leaf-spot pathogen from the record before any mapping. If it is not a BRACOL class, map it to O-unseen.

### m3 — ROADMAP / D4-02 inconsistency

The ROADMAP Data plan still names Saposoa v2 as the default external readout and lists Saposoa ahead of RoCoLe.

**Repair:** add a one-line supersession note, with the owner's approval, in either the ROADMAP or the Stage 4 record.

### m4 — The GSMA figure is labelled "Verified" without recorded verification evidence

The Stage 3 confirmation required that the figure be verified before Stage 4 binds a parameter to it. This audit, like both Stage 3 audits, could not reach gsma.com. Nothing found contradicts it.

The binding logic itself is valid:
- the 20% individual rural ownership figure supports not assuming a farmer-owned smartphone;
- the household-sharing condition comes from the case facts, not the figure;
- D4-17 correctly refuses to derive bandwidth or device-performance numbers.

**Repair:** add a verification note (figure title, base/source line, retrieval date, verifier), or relabel the figure "cited; not independently verified by the Tier A audit".

### m5 — Split and near-duplicate procedure needs implementation precision

**Repair:**

- Specify the pHash implementation, for example `imagehash.phash`, hash_size 8, 64 bits.
- Apply the ≤ 5 rule transitively (union-find) and record the size of the largest component.
- Set a cap: if any group exceeds 2% of the dataset, inspect it before assignment.
- Limit manual inspection to a logged same-leaf yes/no before partition assignment.
- State that no publisher split exists in the archive. The authors' code split (seed 150, unstratified) is not a "publisher-provided split", so the 70/15/15 split stratified by the M1 class map applies.

pHash on uniform white-background leaves may over-group. That is conservative for leakage but can distort stratification, which is why the component-size record matters.

### m6 — Tie-break and external-mapping ambiguities

**Repairs:**

- **Tie-break.** "Higher thresholds" is undefined for a pair. Use the higher `T_healthy` first, then the higher `T_rust`.
- **RoCoLe mapping**, frozen from annotation files without viewing images:
  - rust_level_1–4 → R;
  - healthy → H;
  - red_spider_mite → O-unseen, reported separately and excluded from the rust and healthy metrics;
  - the 8 state/classification conflicts → excluded and disclosed.
- **Saposoa.** Decide and commit whether Saposoa will be read *before* the RoCoLe readout. If it is read, report both. This closes the "run the second external if the first disappoints" path.
- **Inspection scope.** 7A leaf-side inspection may use BRACOL training-partition images only.

### m7 — Byte and latency budgets lack a measurement protocol

- **Runtime build size.** Measured uncompressed sizes for the `onnxruntime-web` WASM build:

  | Build | Size |
  |---|---|
  | Plain WASM (1.20–1.30) | 10.7–13.6 MB |
  | JSEP/WebGPU | 20.7–27.0 MB |
  | Both shipped | Over the 30 MB core budget |

- **Model size.** MobileNetV3-Small with a five-way head fits ≤ 12 MB easily. Replacing the 1,000-way layer leaves about 6 MB in FP32.
- **Latency.** At 0.057 GFLOPs, the 2 s / 4 s budgets are not a real test on an iPhone 17 Pro Max. They catch pathological failure only, which is acceptable if stated.

**Repair:** pre-register:
- the pinned ORT version and the **WASM-only** build in the core budget, with WebGPU as a separately fetched, non-core asset or omitted;
- bytes counted as uncompressed stored bytes;
- `numThreads` policy: set it to 1, or document cross-origin isolation;
- what is timed: preprocessing + `session.run`, with cold start including session creation reported separately;
- the run count: 1 warm-up + ≥ 30 timed runs;
- the iOS, Safari and ORT versions.

### m8 — Privacy-field precision

**Repairs:**

- **`not_sure_reason`.** It must be an enumeration that never exposes an other-disease class name (D3-10 forbids inferred diagnosis to the reviewer; D4-05 forbids it in the UI). For example: `image_ineligible`, `low_confidence`, `other_condition_possible`.
- **EXIF stripping.** Canvas re-encoding does drop EXIF in practice. Stage 9 should verify the retained derivative with a metadata dump, not assume it.
- **Model version.** Optionally record a `model_version` local field for auditability.

### m9 — Localization inventory gaps

**Missing safety-critical concepts**, which should be added:

- "AI proposal — not a diagnosis, not treatment advice";
- "`no visible rust` does not mean healthy; review remains available" (D3-14);
- two *distinct* consent prompts, keep photo with record and show photo to reviewer, instead of one generic prompt (D3-09);
- the `confirmed_by_role` option labels.

**Missing fallback rule.** There is no rule for what happens if no qualified Bududa/south-Bugisu validator is available before the Stage 8/9 cutoff.

**Repair:** add the strings above. The owner should pre-decide the validator fallback: either label the strings "unvalidated draft" with a claim limit, or invoke the D3-12 naming-return path.

Stage 4 correctly approves no Lugisu translation.

---

## Dataset and license review

| Source | Licence | Counts / labels | Acquisition | Status |
|---|---|---|---|---|
| BRACOL (10.17632/yy2k5y8mxg.1) | CC BY 4.0 (secondary) | 1,747 collected / **1,685 labelled**. Healthy 272, miner 387, rust 531, brown leaf spot 348, cercospora 147. **Per-stress flags; 315 multi-stress leaves; rust present in 630** (verified, authors' CSV). 2,147 symptom crops (secondary). No distributed split. | Detached, abaxial, white background, five phones, Espírito Santo (secondary). 2048×1024 (secondary). | Supports the five-way head only with the M1 map. |
| RoCoLe v2 (10.17632/c5yvn32dzg.2) | CC BY 4.0 (secondary) | 1,560; healthy 791; rust L1–L4 602; red mite 167; 8 label conflicts (secondary) | On-plant field, natural background, upper and back sides, 390 plants × 4, mixed resolutions, Manabí, Ecuador (secondary). "Huawei P20" is unsupported, but the record does not claim it. | Coherent quarantined transfer source under a frozen map. |
| Saposoa v2 (10.17632/mfpxg4y65r.2) | **Not independently verified** | 1,500 = 500/500/500 (secondary, via an article) | Uniform protocol, Saposoa, Peru (secondary). Detached leaves, background and devices unverified. | Optional. Verify at 7A (m2). |
| BRACOT (10.17632/pmkbyjpf6k.1) | CC BY 4.0 (search excerpt) | 300 images / 1,662 instances (secondary). Leaf masks; disease labels unverified. | On-tree, Galaxy S8, same locality and lab as BRACOL (secondary) | Scene-level OOD only (M6). |
| TorchVision MobileNetV3-Small weights | Code BSD-3. Weights carry dataset-derived terms per TorchVision's own note (verified). | — | ImageNet-1k | Licence-gated (M8). |
| timm `mobilenetv3_small_100.lamb_in1k` | Metadata Apache-2.0; README says to assume ImageNet terms apply (verified) | — | ImageNet-1k, bicubic | Licence-gated (M8). |
| ImageNet terms | "non-commercial research and educational purposes" (search excerpt; also quoted in the timm README) | — | — | Residual risk to disclose. |
| ONNX Runtime / onnxruntime-web | MIT (verified) | — | — | Pass. |

**Attribution.** CC BY 4.0 requires attribution wherever images appear: README, demo and video. Derived weights trained on CC BY data carry no share-alike obligation. The "no re-hosting of full datasets" rule is correctly retained.

**Unresolved provenance risks:**
- the ImageNet-derived weights (M8);
- the Saposoa record (m2);
- whether the Mendeley BRACOL archive ships the same per-stress CSV as the authors' repository (7A check, M1).

---

## Evaluation-integrity review

- **Split.** 70/15/15 stratified by the M1 class map, seed 20261003, is appropriate for 1,685 leaves. The archive provides no grouping ID. BRACOL appears to be one image per leaf, so pHash grouping is the right safeguard (m5).
- **Quarantine.**
  - Freezing test, external and challenge IDs before any training result is correct.
  - The burned-partition rule matches the ROADMAP one-shot rule, which also covers early stopping and fallback rung.
  - External label maps and the leaf-side inspection must avoid viewing quarantined images (m6).
- **Threshold selection.** A two-dimensional, monotone search is low-capacity, so overfitting is modest but not zero. The real risks are:
  - the coverage objective that rewards misrouting (M2);
  - point-estimate optimism (M3);
  - the ambiguous tie-break (m6).
- **One-shot readouts.** These are sound in principle. They are undermined if the evaluated model is not the shipped artifact (M5), or if Saposoa is read conditionally on RoCoLe (m6).
- **Rules still loose enough for post-hoc choice before repair:**
  - overall vs target-class coverage and the miss denominator (M2);
  - the reduced-claim wording (M3);
  - fallback rung identity and training configuration (M7);
  - the challenge composition and the field-scene target (M6);
  - the Saposoa read decision (m6);
  - the weight-licence standard (M8).

---

## Safety/statistical review

- **Confident miss.** The correct definition is |R→NVR| / |R| over **all** true rust under the rust-presence flag (M1, M2). At n_R ≈ 94, ≤ 5% means ≤ 4 misses, and the one-sided 95% upper bound is then about 9.5% (11.1% at n_R = 80). The ≤ 5% gate is a reasonable engineering screen, but it is **not** evidence that the true rate is ≤ 5%. A confidence interval should govern claim language (M3) rather than the survival gate. Making the gate itself "upper bound ≤ 5%" would require about 0–1 misses in about 94 rust leaves, which is defensible but strict. That choice belongs to the owner.
- **Abstention and coverage.** Coverage over the target classes is meaningful. Coverage over all images is not (M2). Report overall abstention, but do not gate on it.
- **Internal and external triggers.** A validation cap of 5% with a test trigger of 10% is a coherent degradation allowance. Under M3, the 5–10% band is governed by count-and-interval reporting. The external trigger is coherent provided it uses the same definitions and RoCoLe's red-mite and conflict exclusions.
- **OOD.** Rejecting softmax as a general OOD detector is correct. The three families (Q/K/U) must be reported separately with minimum counts (M6).
- **Rust co-occurrence.** Any leaf with rust is ground-truth `visible rust` (M1). If the head routes it to "other disease → `not sure`", that is safe but counts as reduced rust coverage, not as a confident miss.

---

## Runtime/device review

- **ONNX Runtime Web / WASM.**
  - Verified as supported on iOS Safari.
  - WebGPU is optional and its ORT support on Safari is listed as ❌, which lags Safari 26's browser support. Even so, keep WebGPU optional; ORT issue #26827 documents severe Safari 26 problems in JSEP mode.
  - WebGL is in maintenance mode (verified).
  - Pin the WASM-only build and the thread policy (m7).
- **iPhone 17 Pro Max + Safari.**
  - Valid as a real-device compatibility and performance target, and correctly disclaimed as high-end and non-representative.
  - Success there supports only "runs on that tested phone and browser".
  - The case invariant forbids designing as if Noor owns a high-end phone. D4-18 respects that because the iPhone is a *test* device, not a design assumption.
  - No affordable or Android evidence is planned. Final claims must therefore name the single tested device. Optionally, add a clearly labelled desktop throttling run as an emulation supplement.
- **Budgets.** ≤ 12 MB model, ≤ 5 MB preferred and ≤ 30 MB core are coherent and achievable *only* with the WASM-only runtime build (11–14 MB). Latency budgets are loose engineering kill rules (m7).
- **Cache and offline.** See M9 for Safari storage eviction, install context and `persist()`. "Fully offline" must keep the first-load caveat.
- **Preprocessing.** Flips and small rotations are semantically safe: lesion appearance is orientation-invariant, a mirror does not change leaf side, and on-plant orientation is arbitrary. Mild brightness and contrast changes are coherent. Freeze the magnitudes at 7B (M7). Center-crop is not safe (M4). The 224-pixel minimum-dimension rejection is logically sound: below it, upsampling fabricates detail.

---

## Privacy/localization review

- **Strengths.**
  - Data minimization is strong.
  - Images are retained only on opt-in, as a re-encoded derivative.
  - Display requires separate consent.
  - Deletion cascades.
  - No user images are stored in the service-worker cache.
  - `ai_score` is local only.
  - The reviewer payload is consistent with D3-10.
  - The record honestly disclaims shared-browser-profile exposure and adds no fake PIN.
- **Repairs.** Two precision repairs remain:
  - the `not_sure_reason` enumeration (m8);
  - verified EXIF removal (m8).

  Storage persistence on iOS is the material risk (M9).
- **Lugisu.** The 13-concept inventory is appropriately small, and no translation is silently approved. Add the two safety caveats and the split consent prompts, and pre-decide the validator-unavailable fallback (m9).

---

## AI-value / baseline review

D4-14 is honest:
- the printed or laminated symptom guide plus form plus later review remains the strongest simple baseline;
- superiority is "not measured" without a human study;
- the learned contribution is framed narrowly as an image-dependent, abstaining proposal that changes routing.

A human baseline study is not feasible in the remaining time.

**Claims available after repair:** measured selective routing and abstention behaviour on BRACOL held-out leaves, external transfer evidence on RoCoLe, and measured OOD behaviour on the Q/U families.

**Claims not available:** better than the guide, better than extension, field accuracy, or Noor-specific performance.

---

## Stage-boundary review

- PR #13 contains documentation only: three files, no code, no data, no split manifest, no model, and no results.
- No validation, test, external or challenge result was produced or used, and nothing in the commit history suggests otherwise.
- Owner approval changed no numeric rule.
- The ROADMAP edits are status-only and accurate.
- This audit inspected label metadata only. It created no partition and viewed no image.
- **Status: clean.** The one boundary risk is forward-looking: the time pressure in M7 could push 7A/7B decisions into the training window.

---

## Stage-control decision

1. **Can D4-01 through D4-20 stand?**
   - Stand **in substance**: D4-01–D4-04, D4-06, D4-07, D4-09, D4-10, D4-12, D4-14–D4-18, with the stated caveats.
   - Need **owner-approved definitional repair before closure**: D4-05 (M1), D4-08 (M4, M5), D4-11 (M2, M3), D4-13 (M6), D4-19 and D4-20 (M7).
   - The M8 standard and the M7 safety-floor choice are owner decisions.
2. **Can Stage 4 close after reconciliation?** Yes, once M1–M10 are repaired and the changed rules are re-approved by José Antonio. Minors may be repaired or explicitly accepted.
3. **Can PR #13 proceed toward owner closure and merge after repairs?** Yes.
4. **Is narrow confirmation sufficient after repair?** Yes, a narrow confirmation of M1–M10 and the touched minors is sufficient. A full re-audit is needed only if the owner changes the model family, dataset roles, product outputs or runtime.
5. **Can Stage 5/6 planning proceed?** Yes. Per the ROADMAP, Stage N+1 work may begin once the stage-N owner decision is recorded, while Stage 7B onward stays blocked until Stage 4 is closed and merged and Stage 6 greenlights. The Stage 5 fallback ladder must adopt the repaired D4-20 (M7), not the current one. Bounded de-risking may proceed now under the ROADMAP rules: the 7.0 runtime smoke test with a pretrained encoder, and the archive and licence check.
6. **Does anything require reopening Stages 0–3?** No. M10 is resolved inside Stage 4. D3-03's own reopen rule would apply only if a later readout triggers it, or if the owner finds abaxial on-plant capture unworkable.

---

## Scope boundary

No model was trained. No held-out, internal-test, external or challenge result was inspected or used. No image was viewed and no split was created. The Stage 3 product was not redesigned. The only Stage 3-touching recommendation is the optional `no visible rust` safety-floor choice in M7, which is flagged as an owner decision. No Stage 7 implementation was performed. Facts that could not be reached are marked **not independently verified**, not false.

## Principal sources

- BRACOL authors' labels and split code:
  - https://raw.githubusercontent.com/esgario/lara2018/master/classification/dataset/dataset.csv
  - `.../classification/utils/customdatasets.py`
  - `.../classification/loaders.py`
- Dataset Ninja metadata mirrors: github.com/dataset-ninja/bracol, github.com/dataset-ninja/rocole (licence files, class balance and co-occurrence statistics)
- TorchVision source: `torchvision/models/mobilenetv3.py`, `transforms/_presets.py`, `docs/source/models.rst` (github.com/pytorch/vision)
- timm: `timm/models/mobilenetv3.py`, `results/results-imagenet.csv`, README "Licenses" (github.com/huggingface/pytorch-image-models)
- ONNX Runtime docs source (microsoft/onnxruntime `gh-pages`):
  - `docs/get-started/with-javascript/web.md`
  - `docs/tutorials/web/ep-webgpu.md`
  - `docs/tutorials/web/env-flags-and-session-options.md`
  - `docs/tutorials/web/deploy.md`
- ONNX Runtime issues: #26827, #22086
- `onnxruntime-web` npm tarballs 1.20.1–1.30.0, measured directly
- MDN browser-compat-data (SharedArrayBuffer, `persist()`, WebGPU) and MDN "Storage quotas and eviction criteria"
- Santa-María & Rodríguez (2026), RCSI 6(1) e1349 (search excerpt only)
- **Blocked in this environment:**
  - Mendeley Data;
  - DataCite and doi.org;
  - arXiv;
  - gsma.com, including SOMIC 2025 Figure 15;
  - huggingface.co;
  - onnxruntime.ai;
  - docs.pytorch.org;
  - webkit.org;
  - image-net.org.
