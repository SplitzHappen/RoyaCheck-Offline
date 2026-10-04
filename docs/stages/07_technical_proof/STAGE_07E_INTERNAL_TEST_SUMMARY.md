# Stage 7E — A0 One-Shot Internal-Test Readout

**Stage:** 7E — sealed internal-test readout  
**Status:** COMPLETE — one-shot readout recorded  
**Model:** A0 FP32 ONNX from Stage 7D artifact `11292181113`  

## Boundary

This was a one-shot readout on the frozen BRACOL internal-test partition. No A1 training, threshold change, architecture change, preprocessing change, RoCoLe inference, challenge inference, MVP implementation, deployment, video production, or submission occurred.

## Source artifact

- ONNX SHA-256: `4037c09663190b7caed0773e525e5da39bd05286992612537991358b7acfd041`
- Thresholds: `T_rust = 0.50`, `T_healthy = 0.70`
- Internal-test records: `253`

## Internal-test counts

| Metric | Count |
|---|---:|
| `target_confident` | 106 |
| `R_confident` | 68 |
| `H_confident` | 38 |
| `O_confident` | 9 |
| `R_to_VR` | 66 |
| `R_to_NVR` | 2 |
| `R_to_NS` | 27 |
| `H_to_VR` | 0 |
| `H_to_NVR` | 38 |
| `H_to_NS` | 3 |
| `O_to_VR` | 7 |
| `O_to_NVR` | 2 |
| `O_to_NS` | 108 |

## Key proportions, Wilson 95% intervals

| Metric | Estimate | Wilson 95% CI | Numerator / denominator |
|---|---:|---:|---:|
| `selective_accuracy` | 98.1% | 93.4% – 99.5% | 104 / 106 |
| `accepted_rust_recall` | 97.1% | 89.9% – 99.2% | 66 / 68 |
| `accepted_healthy_specificity` | 100.0% | 90.8% – 100.0% | 38 / 38 |
| `target_class_coverage` | 77.9% | 70.3% – 84.1% | 106 / 136 |
| `rust_coverage` | 71.6% | 61.8% – 79.7% | 68 / 95 |
| `healthy_coverage` | 92.7% | 80.6% – 97.5% | 38 / 41 |
| `other_to_no_visible_rust` | 1.7% | 0.5% – 6.0% | 2 / 117 |
| `confident_miss_R_to_NVR` | 2.1% | 0.6% – 7.4% | 2 / 95 |

## Claim ceiling

This supports only a frozen-BRACOL internal-holdout claim. It is not field validation, not RoCoLe external transfer evidence, and not challenge-set evidence.

## Result

**Stage 7E internal-test readout: COMPLETE.**
