# Third-Party Notices

This notice summarizes the third-party code, runtime, dataset, and model-artifact lineage relevant to the RoyaCheck Offline public hackathon repository. It is not legal advice and does not replace review of the applicable upstream licenses or source notices.

## Repository code

The repository includes an MIT `LICENSE` file for the project source code unless a more specific notice applies to a third-party component, dataset, model weight, or artifact.

The repository MIT license does not replace upstream license or attribution duties for third-party software, training data, pretrained weights, model artifacts, or documentation incorporated by reference.

## ONNX Runtime Web

The browser MVP vendors ONNX Runtime Web assets from `onnxruntime-web@1.30.0`:

- `app/vendor/onnxruntime-web/ort.wasm.min.mjs`
- `app/vendor/onnxruntime-web/ort-wasm-simd-threaded.mjs`
- `app/vendor/onnxruntime-web/ort-wasm-simd-threaded.wasm`

Project Stage 7D records ONNX Runtime Web npm version `1.30.0`. The repository should retain the applicable ONNX Runtime Web upstream notices and license text for redistributed runtime files.

## BRACOL data lineage

The frozen RoyaCheck model artifact is derived from BRACOL coffee-leaf imagery as recorded in the project evidence. Project records characterize BRACOL as CC BY 4.0.

The public repository's MIT source-code license does not replace BRACOL attribution or license obligations. Any public use of the derived model should preserve BRACOL attribution and the evidence boundary that the project evaluated a constrained coffee-leaf observation prototype, not field validation or plant diagnosis.

## TorchVision / MobileNetV3-Small pretrained-weight lineage

The model starts from a TorchVision MobileNetV3-Small pretrained-weight lineage. Project records preserve the owner's acceptance of residual pretrained-artifact licensing risk subject to disclosure.

This notice distinguishes repository source-code licensing from model-artifact rights and pretrained-weight lineage. The public submission should not imply that the repository MIT license independently resolves every right associated with the pretrained weights or the derived ONNX model.

## Derived ONNX model artifact

Project Stage 7D records the exported model as:

- model: `A0 frozen MobileNetV3-Small + Linear(576,5)`;
- export format: FP32 ONNX;
- ONNX file: `royacheck_a0_fp32.onnx`;
- ONNX SHA-256: `4037c09663190b7caed0773e525e5da39bd05286992612537991358b7acfd041`;
- evidence artifact: `stage7d-a0-export-parity`, artifact id `11292181113`.

The repository does not claim field validation, coffee-leaf verification, plant diagnosis, treatment recommendation, pesticide recommendation, WBG endorsement, production readiness, or replacement of qualified human review.

## Human-final and safety boundary

RoyaCheck Offline is a human-final observation prototype. The AI proposes `visible_rust`, `no_visible_rust`, or `not_sure`; the user reviews the image and signs the saved local observation. The saved local record is the human disposition, not automatic acceptance of the model output.
