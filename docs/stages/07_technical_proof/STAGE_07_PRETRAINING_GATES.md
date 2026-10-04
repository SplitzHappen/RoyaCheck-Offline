# Stage 7 — Technical Proof Gates

**Stage:** 7 — Definitive AI technical proof  
**Authorized scope recorded here:** 7.0, 7A, 7B, owner-authorized 7C A0 validation, owner-authorized 7D A0 export/parity, and owner-authorized 7E one-shot internal-test readout only  
**Status:** In progress — 7.0 passed; 7A BRACOL recovered; BRACOL 7B freeze complete; A0 validation gate passed; A0 export/parity/budget gate passed; A0 internal-test readout complete; RoCoLe exact identifier freeze remains pending before any RoCoLe external readout  
**Branch:** `chatgpt/stage-07-pretraining-gates`

---

## 1. Boundary

José Antonio authorized Stage 7.0 runtime/tooling verification, Stage 7A exact data/licence/provenance verification, Stage 7B deterministic split/quarantine freeze, Stage 7C A0 training with the clock-preserving RoCoLe freeze deferral, Stage 7D A0 export/parity verification, and Stage 7E one-shot internal-test readout.

No A1 training has occurred. No RoCoLe external or challenge-set inference has occurred. No MVP implementation, deployment, video production, or submission has occurred.

---

## 2. Gate summary

- **7.0 runtime/tooling:** PASS.
- **7A pretrained artifact provenance:** PASS under existing residual-risk policy.
- **7A BRACOL development source:** PASS via author/source-adjacent `coffee-datasets.zip`.
- **7B BRACOL deterministic manifest/quarantine freeze:** PASS.
- **7B RoCoLe external freeze:** PARTIAL; exact identifiers/metadata still required before Stage 7F RoCoLe readout.
- **7C A0 validation:** PASS on validation only.
- **7D A0 export/parity/budget:** PASS using synthetic non-protected parity inputs only.
- **7E A0 internal-test readout:** COMPLETE using the frozen internal-test partition and unchanged Stage 7C thresholds.
- **A1:** NOT AUTHORIZED / NOT STARTED.
- **RoCoLe external readout:** NOT AUTHORIZED / NOT STARTED.
- **Challenge readout:** NOT AUTHORIZED / NOT STARTED.

---

## 3. Runtime/tooling evidence

The preferred A0 runtime path passed the Stage 7.0 evidence run:

- GitHub Actions workflow: `Stage 7 pre-training gates`
- run id: `37168618767`
- PyTorch: `2.14.1+cpu`
- torchvision: `0.29.1+cpu`
- ONNX: `1.23.1`
- ONNX Runtime: `1.30.0`
- ONNX Runtime Web package: `1.30.0`

Pinned pretrained artifact:

- URL: `https://download.pytorch.org/models/mobilenet_v3_small-047dcff4.pth`
- bytes: `10,306,551`
- SHA-256: `047dcff4addef86ea5bc2eff13c9614dc11f47ab1160d0a71a25e7db994f4e1f`

A0 skeleton:

- MobileNetV3-Small feature extractor;
- global average pool;
- flatten to 576 dimensions;
- untrained `Linear(576, 5)` head.

Untrained tooling-only FP32 ONNX:

- input: `(1,3,224,224)`
- output: `(1,5)`
- bytes: `3,728,714`
- SHA-256: `a0b164248583f12b80beb1ed55ee4e67a2388a3d49bb8a47043b5cb84982b20f`

Browser-compatibility core assets totaled `18,018,737` bytes, below the Stage 4 decimal 30 MB core-assets budget. Runtime fallback C was not triggered.

---

## 4. BRACOL source and freeze

The Mendeley-published BRACOL ZIP route exposed a malformed/truncated archive even when bytes matched Mendeley's object/hash metadata.

José Antonio then located and uploaded `coffee-datasets.zip`, sourced from the author/source-adjacent `esgario/lara2018` Coffee datasets route.

Verified source archive:

- source file: `coffee-datasets.zip`
- bytes: `278,741,231`
- SHA-256: `e6fc32d504ae33e667475dec4c4aef710aac65ad12f16a401c706445c46c9f89`
- ZIP integrity: passed
- metadata rows: `1,747`
- leaf images: `1,747`
- image IDs: `1` through `1747`
- missing image IDs: `0`
- valid decoded images: `1,747 / 1,747`
- image dimensions: `2048 x 1024`
- image mode: `RGB`

Closed Stage 4 defines a 1,685-record labelled BRACOL development source. Stage 7B excludes the 62 rows with `predominant_stress == 5`.

Frozen split, seed `20261003`:

| Partition | Records | R | H | O |
|---|---:|---:|---:|---:|
| train | 1,180 | 441 | 190 | 549 |
| validation | 252 | 94 | 41 | 117 |
| internal_test | 253 | 95 | 41 | 117 |

---

## 5. RoCoLe freeze status

RoCoLe v2 remains the planned external-transfer source.

Frozen now:

- DOI/version: `10.17632/c5yvn32dzg.2`
- licence/provenance facts from the official source and Stage 6 record;
- official archive byte/hash facts from the prior Stage 7A acquisition;
- folder IDs;
- planned Stage 4 mapping;
- quarantine/no-model-use rule.

Not frozen yet:

- exact RoCoLe image identifier list;
- exact external metadata table committed to repository;
- confirmed explicit state/classification conflict list.

Under the owner-approved clock-preserving amendment, A0 training could proceed. Exact RoCoLe identifiers/metadata must be frozen before any Stage 7F RoCoLe external readout.

No RoCoLe model inference or performance readout has occurred.

---

## 6. Stage 7C A0 validation result

A0 training and validation completed successfully using only frozen BRACOL train/validation partitions.

Evidence run:

- GitHub Actions workflow: `Stage 7C A0 training`
- run id: `37171911439`
- head: `d8d27cb9ba507f7300a58fb1c3b2a8dab0880f37`
- artifact: `stage7c-a0-validation-evidence`
- artifact id: `11291109525`
- artifact digest: `sha256:58f1373b4f655b49db3b49180c3cb56e1a921478a5e1c202d720d893e564680a`

Training configuration:

- model: A0 frozen MobileNetV3-Small + `Linear(576,5)`;
- seed: `20261003`;
- optimizer: AdamW;
- learning rate: `0.001`;
- weight decay: `0.0001`;
- batch size: `32`;
- loss: class-weighted cross entropy;
- max epochs: `30`;
- best epoch: `28`;
- best validation loss: `0.4838894307613373`.

Selected validation operating point:

- `T_rust = 0.50`
- `T_healthy = 0.70`
- feasible threshold pairs: `1452`

Stage 4 validation gate result: **PASS**.

No A1 training occurred.

---

## 7. Stage 7D A0 export/parity/budget result

Stage 7D exported the owner-authorized trained A0 model to FP32 ONNX and verified parity using synthetic non-protected inputs only.

Evidence run:

- GitHub Actions workflow: `Stage 7D A0 export parity`
- run id: `37172702270`
- head: `7bfc7ae2c2236e4885846d071ca8d8a76829299c`
- artifact: `stage7d-a0-export-parity`
- artifact id: `11292181113`
- artifact digest: `sha256:8ea53cef1d17c1cd1bbad4a2d92cba8ebd533d57160a639f5ca06df6f8db981d`

Exported model:

- file: `royacheck_a0_fp32.onnx`
- bytes: `3,730,046`
- SHA-256: `4037c09663190b7caed0773e525e5da39bd05286992612537991358b7acfd041`
- ONNX checker: PASS.

Parity check:

- provider: `CPUExecutionProvider`
- inputs: synthetic `zeros`, `half`, `randn_seeded`, and `ramp`;
- maximum absolute difference: `2.2649765014648438e-05`;
- maximum relative difference: `6.432188820326701e-05`;
- tolerance: `atol=1e-4`, `rtol=1e-4`;
- parity result: PASS;
- validation partition used for parity: NO.

Budget check:

- ONNX model budget: PASS (`3,730,046 <= 12,000,000` bytes);
- model plus measured primary ONNX Runtime Web runtime bytes: PASS (`18,789,551 <= 30,000,000` bytes) before final app shell.

The trained ONNX model is retained in the Stage 7D GitHub Actions artifact and is not committed to the repository at this stage.

---

## 8. Stage 7E A0 one-shot internal-test readout

Stage 7E completed the authorized one-shot internal-test readout using the frozen A0 ONNX artifact and frozen BRACOL internal-test partition.

Evidence run:

- GitHub Actions workflow: `Stage 7E A0 internal-test readout v2`
- run id: `37173195407`
- artifact: `stage7e-internal-test-readout`
- artifact id: `11291959630`
- artifact digest: `sha256:8dfe3778e43c7e0232984a8243c5b6b769f135f2eeca59d79487c155ac851ce1`
- ONNX SHA-256: `4037c09663190b7caed0773e525e5da39bd05286992612537991358b7acfd041`
- thresholds: `T_rust = 0.50`, `T_healthy = 0.70`
- internal-test records: `253`

Internal-test counts at the fixed Stage 7C operating point:

| Metric | Count |
|---|---:|
| target confident | 106 |
| R confident | 68 |
| H confident | 38 |
| O confident | 9 |
| R→VR | 66 |
| R→NVR | 2 |
| R→NS | 27 |
| H→VR | 0 |
| H→NVR | 38 |
| H→NS | 3 |
| O→VR | 7 |
| O→NVR | 2 |
| O→NS | 108 |

Key one-shot internal-test proportions, Wilson 95% intervals:

| Metric | Estimate | Wilson 95% CI | Numerator / denominator |
|---|---:|---:|---:|
| selective accuracy | 98.1% | 93.4% – 99.5% | 104 / 106 |
| accepted rust recall | 97.1% | 89.9% – 99.2% | 66 / 68 |
| accepted healthy specificity | 100.0% | 90.8% – 100.0% | 38 / 38 |
| target-class coverage | 77.9% | 70.3% – 84.1% | 106 / 136 |
| rust coverage | 71.6% | 61.8% – 79.7% | 68 / 95 |
| healthy coverage | 92.7% | 80.6% – 97.5% | 38 / 41 |
| other-condition to no-visible-rust | 1.7% | 0.5% – 6.0% | 2 / 117 |
| confident miss R→NVR | 2.1% | 0.6% – 7.4% | 2 / 95 |

This supports only a frozen-BRACOL internal-holdout claim. It is not field validation, not RoCoLe external-transfer evidence, and not challenge-set evidence.

---

## 9. Persistent evidence files

Committed evidence files include:

- `docs/stages/07_technical_proof/STAGE_07B_BRACOL_FREEZE_SUMMARY.md`
- `docs/stages/07_technical_proof/STAGE_07B_ROCOLE_FREEZE_ATTEMPT.md`
- `docs/stages/07_technical_proof/STAGE_07C_A0_VALIDATION_SUMMARY.md`
- `docs/stages/07_technical_proof/STAGE_07D_A0_EXPORT_PARITY_SUMMARY.md`
- `docs/stages/07_technical_proof/STAGE_07E_INTERNAL_TEST_SUMMARY.md`
- `docs/stages/07_technical_proof/manifests/bracol_stage7b_split_ids.json`
- `docs/stages/07_technical_proof/manifests/stage7b_config_ledger.json`
- `docs/stages/07_technical_proof/manifests/rocole_stage7b_freeze_attempt.json`
- `docs/stages/07_technical_proof/manifests/stage7c_a0_summary.json`
- `docs/stages/07_technical_proof/manifests/stage7d_a0_export_parity_summary.json`
- `docs/stages/07_technical_proof/manifests/stage7e_internal_test_summary.json`

The trained head state, trained ONNX artifact, and internal-test route CSV are retained in GitHub Actions artifacts only and are not committed to the repository.

---

## 10. Current gate verdict

A0 validation, export/parity, and internal-test readout are complete. The next authorized step must be explicitly approved by José Antonio.

Recommended next technical step: compact RoCoLe identifier/metadata recovery before any Stage 7F external readout, or proceed to MVP build with RoCoLe explicitly deferred and claim wording limited to BRACOL internal holdout until RoCoLe is frozen/read out.
