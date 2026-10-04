# Stage 7 — Pre-Training Gates

**Stage:** 7 — Definitive AI technical proof  
**Authorized scope:** 7.0, 7A, 7B only  
**Status:** In progress — 7.0 passed; 7A BRACOL recovered; BRACOL 7B freeze complete; RoCoLe/challenge quarantine still pending before Stage 7C  
**Branch:** `chatgpt/stage-07-pretraining-gates-clean`

---

## 1. Boundary

José Antonio authorized Stage 7.0 runtime/tooling verification, Stage 7A exact data/licence/provenance verification, and Stage 7B deterministic split/quarantine freeze.

This record does **not** authorize Stage 7C.

No A0/A1 training has occurred. No validation model performance has been produced. No internal held-out, RoCoLe external, or challenge-set inference has occurred.

---

## 2. Stage 7.0 — runtime/tooling gate

**Result: PASS for the preferred A0 architecture.**

Evidence run:

- GitHub Actions workflow: `Stage 7 pre-training gates`
- run id: `37168618767`
- conclusion: success

Environment:

- PyTorch: `2.14.1+cpu`
- torchvision: `0.29.1+cpu`
- ONNX: `1.23.1`
- ONNX Runtime: `1.30.0`
- ONNX Runtime Web package: `1.30.0`

Exact pretrained artifact technically accessed:

- URL: `https://download.pytorch.org/models/mobilenet_v3_small-047dcff4.pth`
- bytes: `10,306,551`
- SHA-256: `047dcff4addef86ea5bc2eff13c9614dc11f47ab1160d0a71a25e7db994f4e1f`

The runtime probe used the Stage 4 A0 skeleton:

- MobileNetV3-Small feature extractor;
- global average pool;
- flatten to **576 dimensions**;
- untrained `Linear(576, 5)` head.

Untrained tooling-only FP32 ONNX:

- input: `(1,3,224,224)`
- output: `(1,5)`
- bytes: `3,728,714`
- SHA-256: `a0b164248583f12b80beb1ed55ee4e67a2388a3d49bb8a47043b5cb84982b20f`

This ONNX hash is **not a trained model artifact** and has no performance meaning.

Required browser-compatibility core assets:

- `ort-wasm-simd-threaded.wasm`: `14,239,897` bytes
- `ort.wasm.min.mjs`: `50,126` bytes
- untrained A0 ONNX: `3,728,714` bytes
- total: `18,018,737` bytes
- headroom to the Stage 4 decimal 30 MB core-assets budget: `11,981,263` bytes

**Gate conclusion:** preferred architecture/runtime path fits the preregistered model/core-asset budgets. Runtime fallback C is **not triggered** by Stage 7.0.

Actual iPhone/Safari latency remains a later physical-device evidence item and is not claimed here.

---

## 3. Stage 7A — BRACOL acquisition/provenance

### 3.1 Failed Mendeley archive route

The Mendeley-published BRACOL route was found to expose a malformed/truncated image archive even when its bytes matched Mendeley's own published object/hash metadata.

That path remained unsuitable for the closed Stage 4 1,685-record development-source contract.

### 3.2 Recovered author/source-adjacent route

José Antonio located and uploaded `coffee-datasets.zip`, sourced from the author/source-adjacent `esgario/lara2018` Coffee datasets route.

Verified local inspection:

- source file: `coffee-datasets.zip`
- bytes: `278,741,231`
- SHA-256: `e6fc32d504ae33e667475dec4c4aef710aac65ad12f16a401c706445c46c9f89`
- ZIP integrity: passed (`testzip() == None`)
- total archive entries: `4,990`
- metadata: `coffee-datasets/leaf/dataset.csv`
- metadata rows: `1,747`
- leaf images: `1,747` JPG files
- image IDs: `1` through `1747`
- missing image IDs relative to metadata: `0`
- extra image IDs: `0`
- valid decoded images: `1,747 / 1,747`
- image dimensions: `2048 x 1024`
- image mode: `RGB`

The recovered archive supports the closed Stage 4 BRACOL development-source contract after excluding the 62 `predominant_stress == 5` rows.

**Gate conclusion:** BRACOL acquisition/provenance is no longer blocked for the development source.

---

## 4. Stage 7A — RoCoLe acquisition/provenance status

The prior Stage 7A run established RoCoLe v2 acquisition/provenance facts for quarantine preparation:

- DOI/version: `10.17632/c5yvn32dzg.2`
- official Download-All bytes: `2,245,588,288`
- official/observed SHA-256: `31daa765fb0cc27d4b9b897fa6350aacf0087ee5771d3c7599d2ac7041b866ff`
- archive inventory: 1,560 JPG photos plus annotation files.

No RoCoLe model inference or performance readout has occurred.

A compact RoCoLe external identifier/mapping artifact still needs to be committed before Stage 7C unless the owner explicitly amends the pre-training gate.

---

## 5. Stage 7B — BRACOL deterministic manifest/quarantine freeze

**Result: BRACOL freeze complete.**

Persistent committed artifacts:

- `docs/stages/07_technical_proof/STAGE_07B_BRACOL_FREEZE_SUMMARY.md`
- `docs/stages/07_technical_proof/manifests/bracol_stage7b_split_ids.json`
- `docs/stages/07_technical_proof/manifests/bracol_stage7b_partition_source_class_counts.csv`
- `docs/stages/07_technical_proof/manifests/bracol_stage7b_partition_truth_group_counts.csv`
- `docs/stages/07_technical_proof/manifests/bracol_stage7b_duplicate_edges.csv`
- `docs/stages/07_technical_proof/manifests/bracol_stage7b_duplicate_groups_non_singleton.csv`
- `docs/stages/07_technical_proof/manifests/stage7b_config_ledger.json`

### 5.1 Class construction

Closed Stage 4 defines a 1,685-record labelled BRACOL development source. Stage 7B excludes the 62 rows with `predominant_stress == 5`.

Included source-class counts:

| Source class | Count |
|---|---:|
| healthy | 272 |
| rust_present | 630 |
| leaf_miner_no_rust | 342 |
| brown_leaf_spot_no_rust | 346 |
| cercospora_no_rust | 95 |
| **Total** | **1,685** |

Truth-group counts:

| Truth group | Count |
|---|---:|
| R | 630 |
| H | 272 |
| O | 783 |

### 5.2 Duplicate grouping

- pHash algorithm: `imagehash.phash`-compatible 64-bit pHash.
- Candidate edge: Hamming distance <= 5.
- Candidate edges: `17`.
- Duplicate components: `1,668`.
- Largest component size: `3`.
- Same-leaf review trigger: component size > 2% of 1,685 = > 33.70.
- Triggered: `false`.
- Mixed-source-class components: `8`.
- Mixed-truth-group components: `8`.

No same-leaf manual review is triggered under the closed Stage 4 rule.

### 5.3 Frozen split

Seed: `20261003`.

| Partition | Records | R | H | O |
|---|---:|---:|---:|---:|
| train | 1,180 | 441 | 190 | 549 |
| validation | 252 | 94 | 41 | 117 |
| internal_test | 253 | 95 | 41 | 117 |

Every duplicate component is assigned wholly to one partition.

### 5.4 Validation gate integerization

Validation counts: `n_R=94`, `n_H=41`, `n_O=117`.

- Target-class coverage requires at least `68` of `R∪H` routed confidently.
- Rust coverage requires at least `47` rust-bearing validation leaves routed confidently.
- Healthy coverage requires at least `21` healthy validation leaves routed confidently.
- Confident miss requires at most `4` `R→NVR`.
- Other-condition to NVR requires at most `11` `O→NVR`.

Variable-denominator gates are evaluated exactly as integer inequalities:

- Selective accuracy: `100*(R_to_VR + H_to_NVR) >= 85*((R_union_H)_to_{VR_or_NVR})`
- Accepted rust recall: `100*R_to_VR >= 90*(R_to_{VR_or_NVR})`
- Accepted healthy specificity: `100*H_to_NVR >= 80*(H_to_{VR_or_NVR})`

### 5.5 Internal-test freeze

Internal test counts: `n_R=95`, `n_H=41`, `n_O=117`.

The internal-test identifiers are frozen in the committed split-id artifact. No internal-test inference has been run.

---

## 6. Remaining before Stage 7C

Stage 7C training remains **not authorized**.

Before Stage 7C can be authorized, the owner must decide whether the current Stage 7B evidence is sufficient to proceed with training while treating RoCoLe/challenge quarantine artifacts as subsequent pre-readout requirements, or whether to require the compact RoCoLe metadata/identifier freeze before training exactly as originally specified.

No training may begin without a separate explicit Stage 7C authorization.

---

## 7. Current gate verdict

- **7.0 runtime/tooling:** PASS
- **7A pretrained artifact provenance:** PASS under existing residual-risk policy
- **7A BRACOL development source:** PASS via author/source-adjacent `coffee-datasets.zip`
- **7A RoCoLe acquisition/provenance:** PASS for quarantine preparation; compact identifier/mapping artifact still pending
- **7B BRACOL deterministic manifest/quarantine freeze:** PASS
- **7B RoCoLe external freeze:** PENDING
- **7C training:** NOT AUTHORIZED / NOT STARTED

**Overall pre-training verdict:** BRACOL path is ready for owner review. Stage 7C requires separate authorization and a decision on the pending RoCoLe/challenge freeze timing.
