# Stage 7D — A0 Artifact Export and Parity Summary

**Stage:** 7D — A0 export/parity/budget evidence  
**Status:** PASS  
**Run:** GitHub Actions `Stage 7D A0 export parity`, run id `37172702270`, head `7bfc7ae2c2236e4885846d071ca8d8a76829299c`  
**Evidence artifact:** `stage7d-a0-export-parity`, artifact id `11292181113`, artifact digest `sha256:8ea53cef1d17c1cd1bbad4a2d92cba8ebd533d57160a639f5ca06df6f8db981d`

## Boundary

This evidence was produced under the owner-authorized Stage 7D A0-only scope.

No A1 training occurred. No internal-test inference occurred. No RoCoLe inference occurred. No challenge-set inference occurred. No deployment, video production, or submission occurred.

The parity check used synthetic non-protected inputs only. The validation partition was not used for parity.

## Source artifact

- Source Stage 7C run id: `37171911439`
- Source Stage 7C artifact id: `11291109525`
- Source A0 head-state SHA-256: `5c366089a8ee91d3a7752b0fae505df3f96463c32417861fbf28482f0b919a44`
- Stage 7C source summary reported `gate_pass = true`.

## Exported model

- Model: `A0 frozen MobileNetV3-Small + Linear(576,5)`
- Export format: FP32 ONNX
- Opset: `18`
- Input name: `input`
- Output name: `logits`
- ONNX file: `royacheck_a0_fp32.onnx`
- ONNX bytes: `3730046`
- ONNX SHA-256: `4037c09663190b7caed0773e525e5da39bd05286992612537991358b7acfd041`
- ONNX checker: PASS

The trained ONNX model is not committed to the repository in Stage 7D. It is preserved in the GitHub Actions artifact for the next authorized build step.

## PyTorch / ONNX parity

- Provider: `CPUExecutionProvider`
- Synthetic parity inputs: `zeros, half, randn_seeded, ramp`
- Maximum absolute difference: `2.2649765014648438e-05`
- Maximum relative difference: `6.432188820326701e-05`
- Tolerance: `atol=0.0001`, `rtol=0.0001`
- Parity result: PASS

## Budget check

| Item | Bytes | Result |
|---|---:|---|
| ONNX model | 3730046 | PASS vs 12,000,000-byte model budget |
| ONNX Runtime Web primary runtime files | 15059505 | informational |
| Current model + measured primary runtime | 18789551 | PASS vs 30,000,000-byte core budget before final app shell |

Primary runtime files measured:

- `node_modules/onnxruntime-web/dist/ort.all.min.js`
- `node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.wasm`

The Stage 8 app shell must remeasure the final service-worker cache after UI and asset implementation.

## Package versions

- Python: `3.12.14 (main, Aug 13 2026, 02:47:42) [GCC 13.3.0]`
- Platform: `Linux-6.17.0-1022-azure-x86_64-with-glibc2.39`
- Torch: `2.14.1+cpu`
- TorchVision: `0.29.1+cpu`
- ONNX: `1.23.1`
- ONNX Runtime: `1.30.0`
- ONNX Runtime Web npm: `1.30.0`

## Result

**Stage 7D A0 export/parity/budget gate: PASS.**
