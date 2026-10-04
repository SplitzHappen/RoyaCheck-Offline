# Stage 5 — Readiness, Fallback, and Submission Protection

**Stage:** 5  
**Status:** In review — deliberate readiness verification complete; owner closure decision pending  
**Sector:** Agriculture  
**Route:** RoyaCheck Offline  
**Controlling technical preregistration:** `docs/stages/04_technical_prereg/STAGE_04_TECHNICAL_PREREGISTRATION.md`  
**Verification branch:** `chatgpt/stage-05-readiness-verification`  
**Verification PR:** #18

---

## 1. Purpose and boundary

Stage 5 determines whether the already-approved RoyaCheck route can be executed reliably within the hackathon constraints **without changing the Stage 3 product contract or the Stage 4 evaluation contract**.

This is readiness verification, not definitive implementation.

This pass did **not**:

- train or fine-tune a project model;
- use validation performance to make a design decision;
- inspect the internal held-out partition;
- inspect RoCoLe outcomes;
- inspect frozen challenge outcomes;
- implement the finished RoyaCheck MVP;
- perform the final deployment;
- create competition submission videos;
- submit the entry;
- begin Stage 6 or Stage 7.

All executable technical checks used untrained/pretrained infrastructure, synthetic inputs, dummy artifacts, public source pages, or service metadata.

---

## 2. Readiness verdict

**Overall Stage 5 readiness: AMBER-GREEN.**

There is no readiness blocker requiring a change to the Stage 3 product route or Stage 4 technical/evaluation architecture.

The core technical path is materially more executable than it was at Stage 5 entry:

- a reproducible Python/Node execution environment is available through GitHub Actions;
- the planned compact model family exports to ONNX successfully;
- ONNX Runtime CPU inference succeeds;
- the exact pretrained MobileNetV3-Small artifact is technically accessible and hashable;
- the pinned ONNX Runtime Web package installs and loads;
- the pHash / union-find / deterministic-manifest / integer-gate mechanisms are implementable;
- binary model artifacts can be preserved and recovered through workflow artifacts;
- the primary BRACOL and RoCoLe public source pages are reachable from the execution environment;
- a static Render deployment account/path already exists, although its current RoyaCheck service points to a retired repository and must not be treated as the canonical deployment.

The remaining risks are mostly **operational/manual**, not unresolved architecture:

1. exact BRACOL archive acquisition and metadata/hash verification;
2. exact RoCoLe archive acquisition/quarantine-manifest creation;
3. current authenticated submission-surface access;
4. later real iPhone/Safari Home Screen PWA proof;
5. final static-host binding to the active repository;
6. video capture/upload rehearsal;
7. final third-party notice/repository-licence implementation;
8. owner-side network/power/upload contingency.

Those items must be completed in their authorized later stages or explicitly accepted before Stage 5 closure where noted.

---

## 3. Verified execution environment

### 3.1 Primary reproducible execution route — GitHub Actions

A non-evaluative Stage 5 smoke workflow was run on GitHub-hosted Ubuntu runners.

Verified environment:

- runner image: Ubuntu 24.04;
- Python: 3.12.14;
- pip: 26.2.1;
- Node: 22.23.3;
- available filesystem during the representative run: ~87 GB free;
- memory: ~15 GiB total / ~14 GiB available at start.

Successfully installed and exercised:

- PyTorch 2.14.1;
- torchvision 0.29.1;
- ONNX 1.23.1;
- ONNX Runtime 1.30.0;
- ImageHash 4.3.2;
- `onnxruntime-web@1.30.0`.

This environment is sufficiently capable to serve as the **primary reproducible automation/execution environment** for bounded model/export/tooling work if José's local machine setup becomes a bottleneck.

### 3.2 Owner-local machine

The exact current package state on José's physical development machine was **not directly inspected by this verification pass**.

That is not a Stage 5 blocker because the GitHub Actions route above is already working and reproducible.

Owner-local execution remains a useful acceleration/fallback path, but it should not become a prerequisite unless explicitly verified later.

**Readiness decision:** do not spend competition time making the local machine perfect merely because a local environment would be conventional. Use the verified CI path where it is faster and simpler.

---

## 4. Model/export/runtime smoke evidence

### 4.1 Untrained MobileNetV3-Small ONNX path

Using synthetic zero input only:

- MobileNetV3-Small instantiated successfully;
- FP32 ONNX export succeeded;
- ONNX checker passed;
- ONNX Runtime CPU session creation/inference succeeded;
- output shape was `(1, 1000)`;
- representative dummy ONNX size: **10,154,283 bytes**, below the Stage 4 12 MB model hard budget.

This is **toolchain evidence only**, not model-performance evidence.

### 4.2 Exact pretrained artifact access

The intended torchvision MobileNetV3-Small ImageNet-1K artifact was successfully fetched from:

`https://download.pytorch.org/models/mobilenet_v3_small-047dcff4.pth`

Observed:

- file: `mobilenet_v3_small-047dcff4.pth`;
- bytes: **10,306,551**;
- SHA-256:

`047dcff4addef86ea5bc2eff13c9614dc11f47ab1160d0a71a25e7db994f4e1f`

- model forward pass on synthetic input succeeded.

This verifies **technical access, exact provenance endpoint, and hashability**.

It does **not** convert Stage 4's ImageNet/pretrained-weight residual-risk decision into a legal-compatibility finding. The existing licence/provenance controls remain binding.

### 4.3 ONNX Runtime Web package

A clean npm project successfully installed:

`onnxruntime-web@1.30.0`

The package loaded successfully in Node and exposed `InferenceSession`.

This verifies package acquisition and JS-runtime compatibility. It is **not** yet iPhone Safari inference evidence.

---

## 5. A0 computational-readiness smoke

A synthetic CPU-only smoke used the pretrained MobileNetV3-Small feature extractor with random 224×224 inputs and a five-way linear head.

Observed on the GitHub runner:

- pooled feature dimension: **576**;
- synthetic images processed: 96;
- measured feature-extraction rate: ~**350 images/second** in that synthetic in-memory smoke;
- extrapolated feature extraction for ~1,700 already-decoded synthetic-size inputs: far below one minute;
- five epochs of a synthetic 576→5 linear head completed in milliseconds.

These numbers are **not a training-time prediction for BRACOL**. Real image decoding, transforms, augmentation, I/O, validation, checkpointing and reproducibility controls add overhead.

The readiness conclusion is narrower:

> **The A0 frozen-backbone + tiny-head route is computationally lightweight enough that raw compute is unlikely to be the dominant hackathon bottleneck.**

Data acquisition, correctness, evidence discipline and integration are more likely to dominate.

---

## 6. Evaluation-control tooling readiness

Synthetic-only tests verified the mechanics needed by Stage 4:

### 6.1 pHash / duplicate grouping

Using `imagehash.phash(..., hash_size=8)`:

- 64-bit perceptual hashes were generated;
- Hamming-distance comparisons worked;
- transitive union-find grouping worked;
- synthetic near-duplicates were placed in one component.

No BRACOL image was used.

### 6.2 Integer gates

Synthetic counts successfully produced deterministic integer thresholds for percentage gates.

Example smoke only:

- `n_R = 94` → max 5% confident misses = 4;
- min 50% rust coverage = 47;
- `n_H = 120` → min 50% healthy coverage = 60;
- `n_O = 300` → max 10% O→NVR = 30.

Actual Stage 7B values must be computed from the frozen real manifest.

### 6.3 Manifest mechanics

A deterministic file-ID → partition CSV structure was created successfully using dummy identifiers.

### 6.4 Quarantine mechanism

The technical mechanism is straightforward:

- freeze identifiers/hashes first;
- partition manifests are committed before training;
- held-out/external/challenge outcomes are not loaded into development scripts;
- design scripts operate only on train/validation roles permitted by Stage 4.

The exact real manifests are Stage 7B artifacts and were not created here.

---

## 7. Binary artifact backup/recovery

A dummy ONNX model was uploaded successfully through GitHub Actions artifact storage and downloaded again through the connected GitHub tooling.

This verifies a workable binary-artifact recovery path independent of ordinary repository text files.

Operational policy:

- Git repository: source, manifests, configuration, documentation;
- workflow artifacts and owner-local backup: model/checkpoint/export binaries during build/evidence work;
- do not rely on one ephemeral runner filesystem;
- before final submission, keep a local copy of the exact frozen model + hashes + manifest/evidence bundle.

---

## 8. Data-source acquisition readiness

### 8.1 BRACOL

From the GitHub execution environment, the official BRACOL Mendeley page returned HTTP 200.

Stage 4's expected source remains:

- Mendeley Data;
- DOI `10.17632/yy2k5y8mxg.1`;
- version 1;
- CC BY 4.0 shown on the source page;
- expected whole-leaf/per-stress metadata must still be checked against the downloaded archive before use.

### 8.2 RoCoLe

The official RoCoLe Mendeley v2 page also returned HTTP 200.

The external source remains quarantined under Stage 4.

### 8.3 Automated archive acquisition

A probe of the documented Mendeley API without authentication returned HTTP 401.

Therefore:

- public dataset pages are reachable;
- automated archive download through that authenticated API is **not yet a verified route**;
- manual official **Download All** is the safe fallback;
- Stage 7A must hash the actual downloaded archive/files before any training/evaluation use.

**Closure impact:** this is not a Stage 5 architecture blocker, but successful official archive acquisition is a hard Stage 7A pre-training gate.

---

## 9. Browser / PWA / device readiness

Stage 4 already selected ONNX Runtime Web + WASM as the core browser compatibility path.

Stage 5 verifies:

- the exact ORT Web package can be acquired/loaded;
- the product architecture can remain static/browser-local;
- José has an iPhone 17 Pro Max + Safari available for the later physical-device proof.

The actual later evidence protocol remains:

1. connected first load;
2. install/add to Home Screen;
3. request `navigator.storage.persist()` where supported and record result;
4. terminate app;
5. airplane/offline state;
6. relaunch from Home Screen;
7. fresh inference;
8. save record;
9. close/reopen;
10. verify record persistence.

Stage 5 does **not** claim this proof has occurred.

**Readiness status:** browser/PWA architecture ready; real-device evidence pending by design.

---

## 10. Static deployment readiness

### 10.1 Render — preferred operational route

The connected Render account is accessible and already contains a functioning static-site service named `royacheck-offline`.

A historical deployment reached `live` status successfully.

Important limitation:

> The existing service is connected to the retired repository `SplitzHappen/WBG-Small-AI-Hackathon-2026-retired`.

Therefore it must **not** be treated as the canonical future deployment.

Preferred later path:

- create/bind a fresh static Render site to `SplitzHappen/RoyaCheck-Offline`;
- deploy only the authorized later competition implementation;
- retain a last-known-good deployment and commit SHA.

### 10.2 Recovery route

GitHub Pages is an appropriate static HTTPS recovery option for a pure static/PWA asset bundle if Render becomes unavailable or reconfiguration costs too much time.

Stage 5 does not deploy either final route.

**Readiness status:** deployment infrastructure exists; active-repo binding remains a later execution step, not an architectural unknown.

---

## 11. Video and submission-production readiness

Stage 0 already established the required production matrix:

- team photo;
- Team Introduction video — ≤60 seconds;
- Product Demo video — ≤60 seconds;
- Technical Walkthrough video — ≤60 seconds;
- separate Small AI challenge video — 2–5 minutes, with destination still unresolved in captured materials;
- public GitHub repository;
- live project URL;
- Hack-Nation submission;
- Google Form backup;
- submission receipt evidence.

Stage 5 recommendation:

- **do not make sophisticated video editing a dependency**;
- team intro can be a direct single-take phone/selfie recording;
- product demo can be one screen recording with concise narration;
- technical walkthrough can be one screen recording with concise narration;
- the 2–5 minute challenge video should be a deliberately scripted longer master take/cut;
- record/export in common MP4/H.264 where available;
- prioritize intelligibility and proof over visual production polish.

Current authenticated submission access was **not re-opened by this tool pass**. Stage 0 remains the current evidence that the account/submission area was accepted and accessible.

Before Stage 5 closes, the owner should confirm that:

- Hack-Nation Team & Submission still opens while logged in;
- the project entry can still be edited;
- the Google Form link can still be opened;
- enough local free storage exists for several short video exports.

No submission should be made in Stage 5.

---

## 12. Repository licence / third-party notice readiness

Recommended later repository structure:

### Project-authored material

A project licence may cover only material José Antonio owns/controls, such as:

- project-authored source code;
- project-authored documentation;
- project-authored UI assets where applicable.

### Explicitly excluded from blanket project licence

Do not imply that the repository licence relicenses:

- BRACOL;
- RoCoLe;
- ImageNet;
- upstream MobileNetV3 pretrained weights;
- ONNX Runtime / ONNX Runtime Web;
- other third-party libraries/assets.

Prepare a later `THIRD_PARTY_NOTICES.md` / provenance section listing:

- component;
- source;
- version/artifact;
- hash where applicable;
- upstream licence/terms;
- whether redistributed or merely referenced/downloaded;
- attribution obligations;
- project-use limitation.

For the pretrained weight artifact specifically, keep Stage 4's residual-risk wording and do not label the derived model as cleanly covered by the project's code licence without a separate basis.

**Readiness status:** notice structure is clear; final repository licence selection/notice population should occur only after the actual dependency/artifact inventory is frozen.

---

## 13. Builder-side backup and recovery plan

### Source/governance

- GitHub `main` is canonical.
- Use bounded branches/PRs for consequential stage work.
- Preserve exact final commit SHA.

### Model/data/evidence binaries

- hash every acquired archive and frozen model artifact;
- maintain local copy of irreplaceable frozen artifacts;
- use workflow artifacts for temporary recovery;
- keep manifests/configuration in Git.

### Deployment

- record host/service ID, URL and deployed commit;
- retain last-known-good deployment;
- prefer redeploy over ad-hoc server mutation.

### Video/submission

- keep original recordings locally;
- keep final exported copies locally;
- retain a second copy where practical;
- do not delete originals until receipts are captured.

### Network/power contingency

If owner-side network/power becomes unstable:

- use already-pushed GitHub state as source of truth;
- let cloud CI complete non-interactive jobs;
- avoid large repeated downloads;
- preserve local copies of datasets/model/video exports after first successful acquisition;
- use the protected final submission buffer for recovery, not feature work.

---

## 14. Stage 5 readiness matrix

| Readiness area | Status | Evidence | Required next action | Fallback | Owner action before closure? | Blocks Stage 5 closure? |
|---|---|---|---|---|---|---|
| Canonical repo/state | **Verified** | Stages 0–4 on `main`; Stage 5 active | None | GitHub canonical history | No | No |
| Reproducible Python environment | **Verified** | GitHub Actions Python 3.12 + working ML/export packages | Record versions in evidence | CI route | No | No |
| Reproducible Node environment | **Verified** | Node 22 + npm + ORT Web 1.30.0 load | Record versions | CI route | No | No |
| MobileNetV3 ONNX export | **Verified** | Dummy FP32 export/check/inference succeeds; ~10.15 MB | Real exact-artifact export later | Same verified tooling | No | No |
| Pretrained artifact access/hash | **Verified technically** | torchvision URL + SHA-256 captured | Preserve Stage 4 licence/provenance gate | Block pretrained path if terms fail later | No | No |
| Raw A0 compute feasibility | **Verified for readiness** | Synthetic 576-d feature + tiny head path is lightweight | Do not convert smoke into performance claim | CI CPU path | No | No |
| pHash/union-find tooling | **Verified synthetically** | 64-bit pHash + Hamming<=5 + transitive grouping smoke | Apply to BRACOL only after Stage 7 authorization | Exact hashes + logged review | No | No |
| Integer gates/manifests | **Verified synthetically** | Deterministic count/CSV smoke | Compute real values after frozen Stage 7B manifest | Stop if manifest cannot be made | No | No |
| Binary artifact recovery | **Verified** | GitHub workflow artifact upload/download succeeded | Preserve frozen real artifact later | Owner-local copy | No | No |
| BRACOL source reachability | **Verified** | Official Mendeley page HTTP 200 | Manual official download + hash in Stage 7A | Stop before training if unavailable | No | No |
| BRACOL exact archive metadata | **Unverified by design** | Not downloaded in Stage 5 | Verify in Stage 7A | Stop before training | No | No — Stage 7A hard gate |
| RoCoLe source reachability | **Verified** | Official Mendeley v2 page HTTP 200 | Acquire/freeze identifiers only at authorized gate | Do not substitute another external source silently | No | No |
| RoCoLe quarantine manifest | **Unverified by design** | Real archive not opened | Freeze in Stage 7B | Stop external claim if cannot quarantine | No | No — Stage 7B hard gate |
| Browser ORT Web package | **Verified** | exact 1.30.0 package installs/loads | Real browser integration later | static WASM path | No | No |
| iPhone/Safari physical proof | **Unverified by design** | Device available; protocol fixed | Run later physical test | disclose exact tested context/failure | No | No |
| Static hosting infrastructure | **Verified with repair needed** | Render static-site capability/live historical deploy exists | Bind fresh site to active repo later | GitHub Pages | No | No |
| Final deployment | **Not done by design** | Prohibited in Stage 5 | Deploy only when authorized | recovery host | No | No |
| Video workflow | **Plan ready; rehearsal unverified** | Stage 0 formats known | Owner confirms recording/export route | phone + simple screen recorder | **Yes** | **Yes, small owner check** |
| Authenticated submission access | **Previously verified; current session unverified** | Stage 0 captured acceptance/access | Owner opens both submission surfaces | preserve screenshots/receipts later | **Yes** | **Yes, small owner check** |
| Owner local machine | **Not directly inspected** | CI route already works | Optional local check only if desired | GitHub Actions primary | No | No |
| Backup/recovery | **Plan ready** | Git + workflow-artifact path tested | Owner confirms local storage/location | cloud + local copies | **Yes** | **Yes, small owner check** |
| Repository licence/notices | **Plan ready** | separation rules defined | populate after final dependencies freeze | conservative notice + exclusions | No | No |
| Network/power contingency | **Plan ready; owner state unknown** | cloud CI reduces local dependency | Owner confirms practical fallback | cloud CI + local copies | **Yes** | **Yes, small owner check** |

---

## 15. Solo non-coder feasibility assessment

### Bottom line

A person without conventional coding experience **can plausibly complete this specific entry in the remaining hackathon window with AI assistance**, but only because:

1. Stages 0–4 have already removed most product/evaluation ambiguity.
2. The solution is intentionally narrow.
3. The core model is small.
4. The A0 training architecture is simple.
5. A reproducible CI environment now works.
6. Vale can act as the primary code/repository/test integrator.
7. José's remaining indispensable responsibilities can be concentrated on owner decisions, physical-device checks, authenticated platform actions, recording/presentation and final submission.

It would **not** be realistic for a non-coder to start this entire project from zero with roughly twelve hours left.

### What José does not need to do

José should not need to:

- design the neural architecture;
- hand-write training code;
- hand-write ONNX export code;
- manually implement duplicate clustering;
- manually calculate threshold gates;
- debug npm/Python dependency graphs;
- build a backend;
- understand every line of JavaScript/Python before progress can continue.

Those are appropriate AI-assisted builder tasks, subject to owner review and the competition's conservative assistance policy.

### What José still must do

José remains critical for:

- approving consequential product/evidence decisions;
- performing/logging into authenticated competition surfaces;
- manually downloading an official dataset if automated acquisition remains awkward;
- performing the real iPhone/Safari physical test when authorized;
- recording himself / the demo where required;
- checking that the final UX communicates the intended meaning;
- submitting the entry and preserving receipt evidence.

### AI role discipline

- **Vale/ChatGPT:** primary builder/integrator and execution coordinator.
- **Claude:** independent adversarial reviewer only at the roadmap-required Tier A/material-risk gates; not a serial second programmer for every change.
- **Sister's ChatGPT:** optional additional reviewer if available, but **not a critical-path dependency**. Because the exact outside-review rule remains conservatively treated under Stage 0, any such review should remain bounded and should not turn the sister into an undeclared human co-builder.

Running every decision through three AI systems would reduce rather than increase the chance of finishing.

### Main feasibility threat

The principal threat is now **coordination/production time**, not coding difficulty.

The failure mode to avoid is:

> repeatedly reopening settled design decisions, adding polish/features, or serially cross-reviewing every implementation step until the clock is consumed.

The winning execution pattern is:

> frozen scope → one primary builder → bounded verification → owner checks → required independent audit only at the specified gates → submit an honestly limited complete system.

---

## 16. Owner checks needed before Stage 5 closure

José should answer/confirm these four items only:

1. **Submission access:** Can you currently open the Hack-Nation Team & Submission page while logged in, and does the project remain editable?
2. **Backup form:** Can you open the official Google Form backup link from the participant surface?
3. **Video production:** Do you have a working way tonight to make:
   - a selfie/team-introduction clip,
   - a screen recording with narration,
   - an MP4/MOV export?
4. **Recovery:** Do you have sufficient local storage and a practical network/power fallback to retain downloaded datasets, frozen model artifacts, and final videos until submission?

If any answer is no, Stage 5 should repair that readiness item before closure.

---

## 17. Stage 5 closure condition

Stage 5 should close only after:

- the four owner checks above are answered;
- any resulting blocker is repaired or explicitly accepted with a fallback;
- the readiness matrix remains consistent with Stage 3/4;
- José explicitly authorizes Stage 5 closure.

No Claude audit is currently required because this Stage 5 pass has not introduced a new material architecture, evaluation, safety, licensing or compliance decision.

**Current Stage 5 status: In review — deliberate readiness verification complete; owner closure decision pending.**
