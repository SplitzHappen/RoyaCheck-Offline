# Stage 5 — Readiness, Fallback, and Submission Protection

**Stage:** 5  
**Status:** In progress — initial findings only  
**Sector:** Agriculture  
**Route:** RoyaCheck Offline  
**Controlling technical preregistration:** `docs/stages/04_technical_prereg/STAGE_04_TECHNICAL_PREREGISTRATION.md`

---

## 1. Purpose

Stage 5 determines whether the already-approved RoyaCheck route can be executed reliably within the hackathon constraints **without changing the Stage 3 product contract or the Stage 4 evaluation contract**.

This is a readiness stage, not an implementation stage.

It may identify missing tools, fragile dependencies, deployment risks, submission risks, backup needs, and fallback triggers.

It must not:

- train or fine-tune a model;
- inspect validation, internal-test, external, or challenge outcomes;
- implement the finished MVP;
- silently change Stage 4 thresholds, dataset roles, quarantine rules, or claim ceilings;
- advance Stage 6 or Stage 7.

---

## 2. Initial findings

The following are the current **initial readiness findings**. They are not a closure decision.

| Area | Initial finding | Status |
|---|---|---|
| Repository access | GitHub repository operations are working and Stages 0–4 are preserved on `main`. | **Verified** |
| Canonical stage state | Stage 4 is closed. Stage 5 is the active stage. Stage 6 and Stage 7 are not started. | **Verified** |
| Repository implementation state | The repository currently contains roadmap/specification/audit material but no finished project implementation. | **Verified** |
| Product scope | The Stage 3 simplification is controlling: intermittent/shared/assisted smartphone access is the invariant; rigid weekend/daughter/on-slope/backing-card choreography is not required. | **Verified** |
| Technical preregistration | BRACOL/RoCoLe roles, MobileNetV3-Small family, ORT Web/WASM path, full-frame preprocessing, quarantine rules, validation gates, N1/N2 controls, exact-artifact parity, and privacy/localization constraints are owner-approved in Stage 4. | **Verified** |
| Physical browser target | José Antonio has an **iPhone 17 Pro Max with Safari** available for later real-device evidence. | **Verified from owner input** |
| Local training environment | The actual machine/environment to be used for model work has not yet been checked for Python, PyTorch, torchvision/timm, ONNX export, package compatibility, disk space, or reproducibility. | **Unverified** |
| JavaScript/browser build environment | Node/package-manager versions, local web build tooling, service-worker/PWA support, and the exact ORT Web package path have not yet been smoke-tested in the project environment. | **Unverified** |
| Model artifact access | The exact MobileNetV3-Small pretrained artifact, source, hash, cache/download path, and applicable provenance/licence terms have not yet been verified against the actual artifact. | **Unverified** |
| BRACOL acquisition | The actual BRACOL archive has not yet been downloaded/hashed/checked against the expected 1,685 labelled-record metadata structure in the project environment. | **Unverified** |
| RoCoLe quarantine mechanics | The external source role is preregistered, but the concrete identifier manifest and non-inspection workflow have not yet been operationalized. | **Unverified** |
| Duplicate-control tooling | The Stage 4 pHash/union-find rule is specified, but the exact implementation/tooling has not yet been tested. | **Unverified** |
| Static/PWA deployment path | No hosting target has yet been validated for HTTPS, service worker behavior, static asset limits, cache behavior, or clean-session access. | **Unverified** |
| Offline/persistence proof | The protocol is specified, but no iPhone/Safari Home Screen PWA persistence/offline test has been run. | **Unverified** |
| Video capture workflow | The required video obligations are known from Stage 0, but the actual recording/edit/export/upload workflow has not yet been rehearsed. | **Unverified** |
| Submission access | Stage 0 captured the known submission surfaces/requirements, but Stage 5 has not independently rechecked authenticated access or upload mechanics. | **Needs readiness verification** |
| Backup/recovery | GitHub is the canonical repository, but local artifact backup, model/checkpoint backup, deployment rollback, and final upload recovery procedures have not yet been demonstrated. | **Unverified** |
| Network/power resilience | The product is designed to avoid live-network dependence after caching, but the builder-side network/power contingency for tonight has not yet been documented. | **Unverified** |
| Repository licence/third-party notices | Stage 4 records provenance concerns, but the final repository licence/third-party notice strategy is not yet operationalized. | **Unresolved readiness item** |

---

## 3. Immediate Stage 5 questions to resolve

Stage 5 should now answer, in order:

1. **What exact machine/environment will perform model development and export?**
   - OS;
   - Python version;
   - PyTorch/torchvision or timm availability;
   - ONNX/onnxruntime tooling;
   - Node/package manager;
   - available disk/RAM;
   - reproducible environment capture.

2. **Can the browser stack be built and served locally without product implementation drift?**
   - static app shell;
   - ONNX Runtime Web/WASM package load;
   - service worker/PWA installability;
   - local HTTPS/deployment approach.

3. **Can the exact Stage 4 datasets/artifacts be acquired and verified cleanly?**
   - BRACOL primary archive;
   - RoCoLe external archive/metadata without using outcomes for design;
   - exact pretrained artifact;
   - hashes and licences.

4. **Can the Stage 4 evaluation controls actually be operationalized?**
   - deterministic split manifest;
   - pHash grouping;
   - integer gate calculation;
   - configuration ledger;
   - quarantine discipline;
   - exact-artifact parity.

5. **What is the simplest reliable deployment route?**
   - static HTTPS host;
   - no server-side inference;
   - clean-session access;
   - recoverable redeploy.

6. **What is the concrete fallback/recovery plan?**
   - tool/package failure;
   - dataset download failure;
   - pretrained-artifact failure;
   - browser-runtime failure;
   - deployment failure;
   - video/export/upload failure;
   - local network/power interruption.

7. **What must be ready before Stage 5 can close?**
   - environment checklist;
   - build order;
   - fallback matrix;
   - backup/recovery plan;
   - deployment readiness plan;
   - video/submission readiness plan;
   - explicit owner approval.

---

## 4. Fallback structure inherited from Stage 4

Stage 5 does not redesign the learned path.

The controlling fallback structure remains:

- **A0:** MobileNetV3-Small 1.0, frozen backbone, five-way linear head;
- **A1:** bounded final-block fine-tuning only if the preregistered conditions permit it;
- **C:** smaller MobileNetV3-Small-class runtime fallback only for a pre-training runtime/model-budget failure;
- **D:** stop/reduce; if the full three-state path cannot satisfy the safety gate, apply the already-approved degraded-mode rule, including the 20% false-alarm-share cap; if that fails, use no learned proposal.

Stage 5's task is to make these fallbacks executable and recoverable, not to change their evaluation rules.

---

## 5. Readiness principles

1. Do not confuse a written plan with a tested toolchain.
2. Verify dependencies before they become critical-path dependencies.
3. Prefer one simple deployment route and one backup over multiple fragile options.
4. Preserve the Stage 4 quarantine and one-shot evidence rules while testing tooling.
5. Do not consume protected evidence to test whether the pipeline works.
6. Capture hashes, versions, commands, and failure notes as readiness evidence.
7. Keep builder-side backup/recovery separate from product-side offline claims.
8. Treat localization validation as a claim gate, not a technical build blocker.
9. Do not add features during readiness work.
10. Stage 5 closes only after the owner sees the actual readiness gaps and accepts the recovery plan.

---

## 6. Current Stage 5 assessment

The project is **conceptually and procedurally prepared**, but several execution-critical items remain unverified.

The largest current readiness risks are:

- the untested local model/export environment;
- exact artifact/data acquisition and provenance;
- browser/PWA runtime readiness;
- static deployment readiness;
- operationalization of split/quarantine/duplicate controls;
- backup/recovery and video/submission mechanics.

None of these findings authorizes Stage 6 or Stage 7 work.

**Current Stage 5 status: In progress — initial findings only.**
