# Stage 7C — A0 Validation Summary

**Stage:** 7C — A0 training and validation  
**Status:** A0 validation gate PASS  
**Run:** GitHub Actions `Stage 7C A0 training`, run id `37171911439`, head `d8d27cb9ba507f7300a58fb1c3b2a8dab0880f37`  

## Boundary

This evidence was produced under the owner-authorized Stage 7C A0-only scope.

No A1 training occurred. No internal-test inference occurred. No RoCoLe inference occurred. No challenge-set inference occurred. No MVP implementation, deployment, video production or submission occurred.

## Data and model

- Model: `A0 frozen MobileNetV3-Small + Linear(576,5)`
- Seed: `20261003`
- Training records: `1180`
- Training feature rows: `3540`
- Validation records: `252`
- Best epoch: `28`
- Best validation loss: `0.4838894307613373`
- Feature extraction seconds: `233.08763647079468`
- Head-state SHA-256: `5c366089a8ee91d3a7752b0fae505df3f96463c32417861fbf28482f0b919a44`

## Training configuration

- Optimizer: `AdamW`
- Learning rate: `0.001`
- Weight decay: `0.0001`
- Batch size: `32`
- Loss: `class-weighted cross-entropy`
- Max epochs: `30`
- Preprocessing: RGB decode; require >=224px; full-frame direct bilinear resize to 224x224; ImageNet normalization; no center crop
- Training augmentation: two additional feature passes using allowed flips, ±15° rotation, mild brightness/contrast; no synthetic lesions

## Threshold search

- Threshold grid: `0.50..0.95 inclusive step 0.01`
- Feasible threshold pairs: `1452`
- Selected rust threshold: `0.5`
- Selected healthy threshold: `0.7`

## Selected validation operating point

| Metric | Count |
|---|---:|
| `target_confident` | 110 |
| `R_confident` | 75 |
| `H_confident` | 35 |
| `O_confident` | 9 |
| `R_to_VR` | 75 |
| `R_to_NVR` | 0 |
| `R_to_NS` | 19 |
| `H_to_VR` | 0 |
| `H_to_NVR` | 35 |
| `H_to_NS` | 6 |
| `O_to_VR` | 7 |
| `O_to_NVR` | 2 |
| `O_to_NS` | 108 |
| `selective_accuracy_num` | 110 |
| `selective_accuracy_den` | 110 |
| `accepted_rust_recall_num` | 75 |
| `accepted_rust_recall_den` | 75 |
| `accepted_healthy_specificity_num` | 35 |
| `accepted_healthy_specificity_den` | 35 |

Derived validation checks:

- Target-class coverage: `110 / 135` confident target-class leaves, above the integerized minimum `68`.
- Rust coverage: `75 / 94` rust-bearing validation leaves routed confidently, above the integerized minimum `47`.
- Healthy coverage: `35 / 41` healthy validation leaves routed confidently, above the integerized minimum `21`.
- Selective accuracy: `110 / 110` correct among confident target-class outputs, satisfying `>=85%`.
- Accepted rust recall: `75 / 75`, satisfying `>=90%`.
- Accepted healthy specificity: `35 / 35`, satisfying `>=80%`.
- Confident miss `R→NVR`: `0`, within the maximum `4`.
- Other-condition `O→NVR`: `2`, within the maximum `11`.

## Gate result

**A0 validation gate: PASS.**

This is validation-only evidence. It does not authorize or imply internal-test, RoCoLe, or challenge performance claims.

## Artifacts

- `stage7c_a0_summary.json`
- `stage7c_a0_threshold_ledger.csv`
- `stage7c_a0_validation_routes.csv`
- `stage7c_a0_training_history.csv`
- `stage7c_a0_head_state.pt` in the GitHub Actions artifact only; not committed to the repository.

Raw dataset images are not committed to the repository.
