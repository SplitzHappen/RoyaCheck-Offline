# Stage 4 Tier A Audit Reconciliation — RoyaCheck Offline

**Audit source:** `docs/audits/stage-04/STAGE_04_AUDIT.md`  
**Audit verdict:** PASS WITH MAJOR REPAIRS  
**Findings:** 0 blocking / 10 major / 9 minor  
**Owner authorization:** José Antonio explicitly approved one bounded reconciliation of M1–M10 and the listed minor repairs on 2026-10-03.  
**Stage status:** In review — original Tier A repairs confirmed; owner-directed Stage 3 simplification reconciled; N1 repaired; N2 cap awaiting owner lock.

---

## 1. Reconciliation standard

Claude found no blocker and did not require a new product route, model family, runtime family, or reopening of Stages 0–3.

The repair pass therefore:

- preserves the Stage 3 product contract;
- changes only the owner-approved Stage 4 technical/evaluation rules needed to make later evidence defensible;
- creates no model result;
- opens no validation, internal test, external, or challenge readout;
- leaves Stage 4 unclosed and PR #13 unmerged pending narrow confirmation.

---

## 2. Major findings

| Finding | Disposition | Repair applied | Owner impact | Residual |
|---|---|---|---|---|
| **M1 — BRACOL rust truth/counts** | Accepted | BRACOL now records 1,747 collected / 1,685 labelled / 62 author-excluded. All 62 are excluded. Rust truth uses the published rust-presence flag regardless of predominant stress; healthy requires no supported stress flags; other disease is constructed only where rust is absent. All rust safety metrics use rust-presence truth. Stage 7A must confirm the downloaded archive contains the expected metadata before Stage 7B. | Explicitly owner approved. | Archive metadata must be confirmed at Stage 7A. |
| **M2 — infeasible/undefined validation metrics** | Accepted | Replaced overall coverage with target-class coverage and froze exact R/H/O and VR/NVR/NS denominators. Tie-break now minimizes confident-miss count, then maximizes target-class coverage, then accepted rust recall, then higher `T_healthy`, then higher `T_rust`. | Explicitly owner approved. | Integer gates are computed from the frozen Stage 7B manifest. |
| **M3 — sample-size-aware claims** | Accepted | Percentage gates remain engineering gates but must be converted to integer pass/fail caps. Exact numerators/denominators and exact 95% Clopper–Pearson intervals are mandatory; one-sided 95% upper bounds control strong reliability language. Reduced-claim wording is pre-written. A validation-configuration ledger is mandatory. | Explicitly owner approved. | Later claims depend on actual held-out intervals. |
| **M4 — center crop can remove disease evidence** | Accepted | Removed center crop. One full-frame direct bilinear resize to 224×224 is used everywhere. Capture guidance keeps the whole target leaf in frame. Training augmentation cannot crop away more than 20% of the frame. | Explicitly owner approved. | Exact implementation parity is tested before held-out readout. |
| **M5 — held-out evidence may not match shipped artifact** | Accepted | Preferred artifact is FP32 ONNX; ≤5 MB target removed; no post-readout quantization. Exact ONNX + preprocessing are frozen before one-shot evidence. Validation-only parity requires ≥99% route agreement and records max absolute probability difference. Internal/external readouts use the same frozen artifact. ROADMAP 7D–7G order was updated accordingly. | Explicitly owner approved. | Parity failures must be fixed using validation only. |
| **M6 — OOD/challenge concepts conflated** | Accepted | Split into Q image quality, K known non-rust disease, U unknown/OOD. No deterministic blur claim. K is measured on BRACOL internal test. U uses non-coffee/maize/bean/BRACOT/other licensed unknowns. ≥20 per U category where feasible; below that descriptive only. No combined target. | Explicitly owner approved. | Challenge manifest must freeze before Stage 7C. |
| **M7 — fallback/configuration/clock indeterminate** | Accepted | Fixed A0 and A1 training configurations and time caps; deleted redundant embedding/linear rung; runtime-only C is MobileNetV3-Small 0.50-class; D is stop/reduce. Stage 7 must commit absolute ET timestamps and preserve the 10:00 PM ET end with a 30-minute evidence reservation. Degraded safety mode disables `no visible rust` if confident-miss safety cannot be met. | Explicitly owner approved. | Stage 5 must operationalize the caps without weakening them. |
| **M8 — pretrained-weight licence standard missing** | Accepted as residual-risk decision | Owner accepts ImageNet-pretrained artifact risk only for the non-commercial hackathon/research entry with pinned artifact/hash, licence/provenance disclosure, no commercial-use claim, no raw ImageNet redistribution, Stage 6 organiser-licence recheck, and owner return if clear incompatibility is found. | Explicit owner risk acceptance; not a legal compatibility finding. | Stage 6 can still block pretrained use. |
| **M9 — iOS/Safari storage persistence unregistered** | Accepted | Primary evidence context is iPhone 17 Pro Max → Safari → Add to Home Screen → standalone PWA. `persist()` result is recorded. Offline proof includes termination, airplane mode, relaunch, inference, save, reopen/persistence. Public limitation states persistence is not guaranteed indefinitely. | Explicitly owner approved. | Short test does not prove multi-month durability. |
| **M10 — capture-condition evidence map missing** | Accepted | Added explicit BRACOL, RoCoLe, and Stage 3 workflow condition table. Subject to Stage 7A confirmation, capture asks user to gently turn the attached leaf to expose the lower/abaxial side without detaching it. On-plant + backing-card is explicitly not directly measured. RoCoLe failure withdraws field/general-transfer claims and returns the workflow to the owner. | Explicitly owner approved. | On-plant + card remains an acknowledged unmeasured condition. |

---

## 3. Minor findings

| Finding | Disposition | Repair applied |
|---|---|---|
| **m1 — dataset dossier fields** | Accepted | Added geography/device/count/acquisition/coverage limitations for BRACOL/RoCoLe/BRACOT and future-candidate framing for Saposoa. |
| **m2 — Saposoa verification/selective reporting** | Accepted with scope reduction | Removed Saposoa from the active 2026 evidence path. It is future-only and cannot be conditionally opened after RoCoLe. |
| **m3 — ROADMAP external-source inconsistency** | Accepted | ROADMAP now explicitly supersedes the earlier Saposoa default and makes RoCoLe the sole planned 2026 external transfer readout. |
| **m4 — GSMA verification traceability** | Accepted | Stage 4 records the 33% urban / 20% rural Uganda figure as reverified against SOMIC 2025 Figure 15, PDF p. 31, on 2026-10-03 while preserving its narrow design-binding interpretation. |
| **m5 — duplicate-control precision** | Accepted | Frozen `imagehash.phash`, 64-bit, Hamming ≤5, transitive union-find grouping, largest-component reporting, >2% component review trigger, and pre-assignment logged same-leaf review. |
| **m6 — tie-break / external map ambiguity** | Accepted | Tie-break order is explicit. RoCoLe metadata-only map is frozen. Saposoa is not read. BRACOL leaf-side inspection is limited to the training partition after split freeze. |
| **m7 — runtime byte/latency protocol** | Accepted | Pinned `onnxruntime-web` 1.30.0, WASM-only core, `numThreads=1`, uncompressed stored bytes, cold-load separation, one warm-up + ≥30 timed runs, and iOS/Safari/ORT version recording. |
| **m8 — privacy-field precision** | Accepted | `not_sure_reason` is non-diagnostic and enumerated. Metadata removal is verified in Stage 9 rather than assumed. Optional local `model_version` may be recorded. |
| **m9 — localization inventory/fallback** | Accepted | Added explicit non-diagnosis/treatment warning, no-visible-rust safety language, separate retention/display consent prompts, role labels, and validator-unavailable fallback to explicitly unvalidated Lugisu draft + English with no validated-localization claim. |

---

## 4. ROADMAP reconciliation

The ROADMAP now reflects the repaired Stage 4 contract:

- RoCoLe supersedes Saposoa as the sole planned 2026 external readout;
- fallback ladder is A0 → A1, runtime-only C, then D stop/reduce;
- Stage 7 7D now freezes/exports the exact FP32 ONNX artifact and completes validation-only parity **before** 7E/7F one-shot readouts;
- later browser evidence uses the already evaluated artifact rather than changing it after the test;
- Stage 4 remains in review pending narrow confirmation.

---

## 5. Audit preservation

Claude's Tier A audit was copied verbatim from:

`claude/wonderful-turing-cvugnp:docs/audits/stage-04/STAGE_04_AUDIT.md`

to:

`docs/audits/stage-04/STAGE_04_AUDIT.md`

No audit text was edited during reconciliation.

---

## 6. Stage boundary

This repair pass produced no:

- training result;
- validation result;
- internal held-out readout;
- external readout;
- challenge-set result;
- production MVP;
- deployment;
- submission action.

Stage 4 remains **In review**.

Next control:

1. Claude narrow confirmation;
2. reconciliation of any confirmation finding;
3. explicit owner closure/merge authorization.

**Current status: In review — repairs applied; narrow confirmation pending.**

---

## 7. Narrow confirmation result

Claude's narrow confirmation at repaired head `9ec0ea3fa960f1277b48ea18901a60960ff9aeb2` returned **PASS WITH MINOR REPAIRS**.

Confirmed:

- all M1–M10;
- all m1–m9;
- audit preservation byte-for-byte;
- 0 new blockers;
- 0 new majors.

New minors:

- **N1** — U-family `not sure` target share had been removed;
- **N2** — degraded safety mode lacked a complete trigger/`T_rust` selection/readout rule.

Claude stated that no further full audit is required after these narrow rules are reconciled.

The confirmation is preserved verbatim at:

`docs/audits/stage-04/STAGE_04_CONFIRMATION.md`

---

## 8. Owner-directed Stage 3 simplification delta

After the narrow confirmation, José Antonio authorized a Stage 3 simplification amendment, merged as PR #15.

The controlling product invariant is now:

> **RoyaCheck Offline is designed for intermittent/shared/assisted smartphone access.**

The amendment removes rigid product requirements for:

- weekend-only capture;
- daughter-required device operation;
- on-slope capture;
- original-plant re-identification;
- attached-leaf capture;
- backing-card use;
- leaf preservation/transport.

It also clarifies that Lugisu human validation gates a **validated localized-usability claim**, not technical MVP progress.

Stage 4 reconciliation is deliberately limited to the product-assumption wrapper:

- §2 inherited behavior;
- D4-08 capture wording/evidence map;
- D4-16 localization fallback;
- ROADMAP coherence.

No change is made to D4-01–D4-07, D4-09–D4-15, D4-17–D4-19, model family, runtime family, split/quarantine rules, metrics, held-out discipline, or exact-artifact parity except for Claude's separate N1/N2 rules.

Historical Claude audit/confirmation files are not rewritten.

---

## 9. N1 reconciliation

**Status: Repaired.**

For every reported U/unknown-OOD category with at least 20 frozen examples:

> **≥70% must route to `not sure`.**

If the category is below 70%, no fail-safe/OOD claim is permitted for that category.

For n < 20, counts and exact intervals are descriptive only and no target claim is made.

The combined Q/K/U target remains removed.

---

## 10. N2 reconciliation

**Status: Partially repaired; one owner numerical lock remains.**

The degraded-mode rule now fixes:

- trigger: A0 and, if clock permits, A1 both fail the **full D4-11 gate**;
- `T_healthy` disabled;
- `T_rust` selected from the existing 0.50–0.95 validation grid only;
- objective: maximize `|R→VR|`;
- tie-break: higher `T_rust`;
- no feasible threshold → no learned proposal;
- same Stage 7D exact-artifact parity;
- same Stage 7E/7F one-shot discipline;
- required R→VR, H→VR, O→VR counts and exact intervals.

Claude's confirmation requires a **pre-set owner-chosen false-alarm-share cap** on:

`|(H∪O)→VR| / |→VR|`

The confirmation did not fix the numeric share. The repository therefore intentionally does **not invent one**.

That cap must be owner-locked before Stage 4 closure and before any validation result is produced.

---

## 11. Bounded post-edit coherence check

Current delta does not alter:

- three-way Stage 3 routing for the full model;
- human-final authority;
- privacy/consent;
- RoCoLe quarantine;
- BRACOL truth map;
- D4-11 metric definitions;
- FP32 ONNX parity requirement;
- one-shot held-out/external rules;
- ImageNet risk gate;
- runtime budgets.

The Stage 3 simplification reduces implementation assumptions and removes a localization build dependency without expanding product scope.

**Only unresolved Stage 4 decision:** N2 false-alarm-share cap for degraded safety mode.

