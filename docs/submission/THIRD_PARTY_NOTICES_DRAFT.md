# Third-Party Notices Draft

This draft is not final legal review.

## Repository code

The repository now includes an MIT `LICENSE` file for the project software unless a more specific notice applies.

## ONNX Runtime Web

The browser MVP vendors ONNX Runtime Web assets from `onnxruntime-web@1.30.0`:

- `app/vendor/onnxruntime-web/ort.wasm.min.mjs`
- `app/vendor/onnxruntime-web/ort-wasm-simd-threaded.mjs`
- `app/vendor/onnxruntime-web/ort-wasm-simd-threaded.wasm`

ONNX Runtime Web is distributed under the MIT license. Final submission should include the exact upstream copyright and license text.

## BRACOL data lineage

The frozen ONNX model is derived from BRACOL coffee-leaf imagery. Project Stage 4 records BRACOL as CC BY 4.0. Final submission must include BRACOL attribution and should not imply the repository MIT license replaces dataset attribution duties.

## TorchVision / ImageNet-pretrained weights

The model starts from a TorchVision MobileNetV3-Small pretrained-weight lineage. Stage 4 records owner acceptance of residual pretrained-artifact licensing risk subject to disclosure. Final submission should include a specific pretrained-weights notice and should distinguish model-artifact rights from repository source-code licensing.

## Model artifact notice still required

The repository MIT license is not, by itself, a complete model notice for the derived ONNX artifact. Before final submission, add a model notice covering:

- BRACOL attribution / CC BY 4.0 lineage;
- TorchVision / pretrained ImageNet weight lineage;
- ONNX export and frozen Stage 7D artifact identity;
- no field-validation, diagnosis, or treatment-recommendation claim.
