# Stage 8 — Browser Smoke Evidence

**Stage:** 8 — MVP browser-local smoke evidence  
**Branch:** `chatgpt/stage-08-mvp-build`  
**Evidence execution:** GitHub Actions temporary local static server + headless Chromium  
**Status:** PASS

`npm test` passed. Browser smoke verified app shell load, local ONNX Runtime Web asset load, fixed A0 ONNX model browser load, ONNX SHA-256 `4037c09663190b7caed0773e525e5da39bd05286992612537991358b7acfd041`, image input presence, no default non-GET requests, no default external requests, public outputs limited to `visible rust`, `no visible rust`, and `not sure`, blank-by-default human disposition, visible not-diagnosis/not-treatment-advice messaging, and Stage 7C / Stage 7E-only evidence boundary including no RoCoLe external readout.

No deployment, RoCoLe inference, challenge-set inference, model change, threshold change, preprocessing change, raw dataset commit, video production, submission, treatment recommendation, claim expansion, or Stage 7 closure was performed.

Runtime asset repair: final branch uses self-hosted WASM ES-module assets from `onnxruntime-web@1.30.0`, an absolute ORT asset prefix derived from `import.meta.url`, and the minimum CSP allowance `wasm-unsafe-eval` needed for browser WebAssembly compilation.

The temporary workflow removed itself before committing this evidence file.
