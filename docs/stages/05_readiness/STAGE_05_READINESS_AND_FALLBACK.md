# Stage 5 — Readiness, Fallback, and Submission Protection

**Stage:** 5  
**Status:** In review — owner authorization active  
**Sector:** Agriculture  
**Route:** RoyaCheck Offline  
**Controlling technical preregistration:** `docs/stages/04_technical_prereg/STAGE_04_TECHNICAL_PREREGISTRATION.md`

---

## 1. Purpose

Stage 5 converts the closed Stage 4 preregistration into an execution-ready plan without changing the product route or contaminating evaluation evidence.

This stage does **not** train a model, inspect validation outcomes, open the internal held-out partition, open RoCoLe, inspect frozen challenge outcomes, implement the finished MVP, or submit the entry.

---

## 2. Clock reality

The original ROADMAP schedule assumed Stages 0–6 would finish by 5:30 PM ET.

That assumption is stale.

At the owner authorization/reconciliation checkpoint on 3 October 2026, the verified local clock was approximately **7:49 PM ET**.

Therefore:

- the protected 5:30–9:00 AM ET submission/recovery buffer on 4 October remains untouched;
- Stage 7 still has a latest end of **10:00 PM ET on 3 October**;
- documentation work must be compressed rather than shifting the protected buffer;
- **A1 is not assumed to fit**. It may be attempted only if A0 finishes early enough that the full A1 cap plus the 30-minute evidence reserve still fit before 10:00 PM ET.

### Compressed Stage 7 entry plan

Target:

- Stage 5 + Stage 6: close as quickly as possible;
- Stage 7.0 + 7A + 7B combined pre-training preflight: **≤30 minutes total**;
- A0 development cap: **≤60 minutes**;
- reserve final **≥30 minutes before 10:00 PM ET** for freeze/parity/one-shot evidence/browser evidence;
- A1: only if the remaining clock mathematically permits its full 30-minute cap plus the protected evidence reserve.

No stage may borrow from the protected 5:30–9:00 AM ET submission/recovery buffer.

---

## 3. Readiness checklist

| Area | Status | Control / next action |
|---|---|---|
| Git/GitHub access | **Verified** | Repository writes, PRs, guarded merges, and public-repo workflow are functioning. |
| Stage 4 preregistration | **Verified closed** | PR #13 merged before any validation/test/external result. |
| Stage 3 product assumptions | **Verified simplified** | PR #15 controls intermittent/shared/assisted access; rigid weekend/on-slope/backing-card choreography is not required. |
| Primary test device | **Available** | iPhone 17 Pro Max + Safari; primary proof context is Home Screen standalone PWA. |
| Browser runtime path | **Pre-registered** | `onnxruntime-web` 1.30.0, WASM core, `numThreads=1`; Stage 7.0 must smoke-test before training. |
| Learned architecture | **Pre-registered** | MobileNetV3-Small 1.0 A0; exact pretrained artifact still subject to Stage 6/7A provenance and licence gates. |
| Runtime fallback | **Pre-registered** | MobileNetV3-Small 0.50-class path only if Stage 7.0 runtime/model budget fails before definitive training. |
| Development dataset | **Pre-registered** | BRACOL labelled whole-leaf records; archive/license/metadata confirmation remains Stage 7A. |
| External readout | **Quarantined** | RoCoLe v2 only; may not influence model/preprocessing/threshold/fallback decisions. |
| Challenge evidence | **Quarantined** | Q/K/U rules fixed; frozen challenge IDs must precede Stage 7C. |
| Preprocessing | **Frozen in specification** | Full-frame bilinear resize to 224×224; no center crop. |
| Threshold/evaluation rules | **Frozen in specification** | D4-10/D4-11 plus N1/N2; no retroactive rule changes after results. |
| Exact-artifact parity | **Required** | FP32 ONNX + browser preprocessing freeze/parity before one-shot readouts. |
| Static/PWA deployment | **Execution-ready path** | Prefer a simple static HTTPS PWA; no cloud inference. Use the smallest host already available that supports service-worker assets. Hosting choice may not change the model/evaluation contract. |
| Offline proof | **Protocol fixed** | Connected first load → installed Home Screen app → termination → airplane/offline relaunch → fresh inference → save/reopen persistence check. |
| Submission access | **Previously verified** | Stage 0 records accepted participant access, platform submission, and required Google Form backup. Stage 6 must recheck current official surfaces. |
| Public GitHub requirement | **Known** | Repository is already public and product-only. Logged-out URL test remains Stage 10. |
| Live URL | **Required, not yet built** | Stage 7/8 must deploy early enough for clean-session verification. |
| Video obligations | **Known but partly unresolved** | Three 60-second platform videos are confirmed; separate 2–5 minute challenge-video destination remains a Stage 6/10 recheck item. |
| Team photo | **Required, not yet produced** | Stage 10 artifact; no technical dependency. |
| Repository LICENSE | **Required by project policy** | Add only after Stage 6/7 licence compatibility review identifies the correct project licence. |
| Backup/recovery | **Control fixed** | GitHub main is canonical; preserve last-known-good deploy; capture exact submitted commit in Stage 10. |
| Power/network failure | **Scope control** | Do not add online dependencies. Keep core inference/build artifacts locally available once acquired; use the protected buffer for redeploy/re-upload recovery, not features. |

---

## 4. Ordered fallback ladder

Stage 4 remains controlling.

### A0 — preferred

MobileNetV3-Small 1.0:

- frozen backbone;
- pooled 576-dimensional pre-classifier features;
- five-way linear head;
- fixed A0 optimizer/loss/seed/epoch rules;
- maximum development clock: 60 minutes.

### A1 — clock-conditional only

A1 may start only if:

1. A0 fails the full preregistered validation gate;
2. no held-out/external/challenge evidence has been opened;
3. at least **60 minutes remain before 10:00 PM ET**: 30 minutes for A1 plus 30 minutes reserved for evidence/freeze.

Otherwise skip A1 and follow the preregistered reduction path.

### C — runtime-size fallback

MobileNetV3-Small 0.50-class is permitted only if the primary architecture fails the runtime/model budget **before definitive training**.

It is not a performance rescue selected from held-out results.

### D — stop/reduce

If the full three-state learned route cannot satisfy the preregistered safety gate within the clock:

- disable `no visible rust`;
- choose degraded-mode `T_rust` from validation only under the owner-locked 20% false-alarm-share cap;
- if no degraded threshold qualifies, use **no learned proposal**;
- disclose the reduced claim.

---

## 5. Submission-protection rules

The following are hard:

1. 4 October **9:00 AM ET** remains the project submission deadline; the 15-minute grace is recovery-only.
2. The 5:30–9:00 AM protected buffer remains closed to feature work.
3. A complete honestly limited submission beats an incomplete stronger-looking system.
4. No feature work may continue past its stage freeze time by consuming submission buffer.
5. No result may be hidden because it weakens the preferred claim.
6. No test/external/challenge partition may be opened to rescue a failing configuration.
7. Live demo, videos, GitHub URL, both submission surfaces, and receipts are treated as independent completion risks.

---

## 6. Stage 7 preflight kill conditions

Stop or reduce before training if any of the following occurs:

- BRACOL archive/license/metadata cannot satisfy D4-01/D4-05;
- exact pretrained artifact cannot pass the Stage 6/7A licence/provenance gate;
- ORT Web/WASM primary path fails the Stage 4 model/runtime budgets on the target browser path and fallback C also cannot fit;
- required split/quarantine manifests cannot be frozen cleanly;
- current official competition rules conflict with the AI-assisted-development/originality/pretrained-component workflow;
- the remaining clock cannot fit A0 plus the protected evidence reserve.

These are stop/reduction triggers, not invitations to improvise new technical rules.

---

## 7. Stage 5 decision

The project is **operationally ready to proceed to the Stage 6 official-source recheck** because:

- the product and technical route are frozen;
- fallbacks are deterministic;
- evidence quarantine remains intact;
- the current clock is explicitly compressed;
- known submission mechanics have recovery controls;
- unresolved official-rule details are assigned to Stage 6 rather than silently assumed.

Stage 5 does **not** itself authorize definitive Stage 7 training.

**Current Stage 5 status: In review — owner authorization active.**
