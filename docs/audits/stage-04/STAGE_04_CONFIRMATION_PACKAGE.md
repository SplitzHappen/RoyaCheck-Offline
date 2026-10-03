# Stage 4 Narrow Confirmation Package — Tier A Repairs

## Purpose

Perform a **narrow confirmation only** of the owner-approved Stage 4 Tier A audit repairs.

This is not a second full audit, not training, and not Stage 7 implementation.

## Repository target

Repository: `SplitzHappen/RoyaCheck-Offline`

PR: `#13 — Stage 4: technical pre-registration`

Branch: `chatgpt/stage-04-technical-preregistration`

Read:

1. `docs/audits/stage-04/STAGE_04_AUDIT.md`
2. `docs/audits/stage-04/STAGE_04_RECONCILIATION.md`
3. `docs/stages/04_technical_prereg/STAGE_04_TECHNICAL_PREREGISTRATION.md`
4. `ROADMAP.md`
5. the complete repair diff since audited head `8ea4540f260df303af167eae293e00feb542846d`

## Confirm M1–M10

### M1 — BRACOL truth/counts
Confirm 1,747 collected / 1,685 labelled / 62 excluded; rust-presence flag controls rust truth; healthy/other construction is coherent; 62 excluded from every partition; Stage 7A metadata-presence stop gate exists.

### M2 — metric definitions
Confirm target-class coverage replaces overall coverage; R/H/O and VR/NVR/NS denominators are exact; confident miss is `|R→NVR| / |R|`; other→NVR uses all O; tie-break order is deterministic.

### M3 — sample-size-aware claims
Confirm integer gates at Stage 7B, exact counts, exact Clopper–Pearson intervals, one-sided upper bounds, reliability-language ceiling, pre-written reduced claim, and validation-configuration ledger.

### M4 — preprocessing
Confirm no center crop; full frame direct-resized to 224×224 bilinear everywhere; complete-leaf framing guidance; augmentation cannot crop away more than 20% of the frame.

### M5 — shipped-artifact parity
Confirm FP32 ONNX is frozen before readout; ≤5 MB requirement removed; no post-readout quantization; validation-only parity requires ≥99% route agreement and max probability-difference reporting; 7E/7F use the exact frozen artifact and preprocessing path; ROADMAP ordering is consistent.

### M6 — Q/K/U split
Confirm Q, K and U are separate; no deterministic blur claim; K is internal BRACOL other-condition behavior; U excludes quarantined external data; BRACOT is scene/unknown only; ≥20/category rule; no combined target; challenge IDs freeze before Stage 7C.

### M7 — deterministic ladder/clock
Confirm fixed A0 and A1 configurations/caps; redundant old B removed; runtime-only C occurs before training; D is stop/reduce; absolute-clock rule protects the 10:00 PM ET Stage 7 end and 30-minute evidence reserve; degraded safety mode disables `no visible rust` when the safety gate cannot be met.

### M8 — pretrained-weight risk standard
Confirm exact artifact/hash/provenance requirements, non-commercial/no-commercial-claim boundary, Stage 6 organiser-licence compatibility recheck, and owner return on clear incompatibility. Confirm this is documented as risk acceptance, not a legal conclusion.

### M9 — iPhone/Safari persistence
Confirm primary context is Home Screen standalone PWA; `persist()` result is recorded; airplane-mode/relaunch/save/reopen persistence protocol exists; durability limitation is explicit; Safari-tab and installed-app storage are not assumed identical.

### M10 — capture-domain evidence
Confirm BRACOL/RoCoLe/Stage 3 workflow conditions are explicitly separated; on-plant + card is disclosed as unmeasured; lower/abaxial attached-leaf instruction is conditional on Stage 7A metadata confirmation; RoCoLe trigger returns field/workflow claims to the owner.

## Confirm minor repairs

Confirm:

- m1 dataset geography/device/count/coverage fields;
- m2 Saposoa removed from active 2026 path;
- m3 ROADMAP supersession to RoCoLe;
- m4 GSMA figure verification record and narrow use;
- m5 exact pHash/union-find/2% grouping rule;
- m6 RoCoLe metadata map, no Saposoa conditional read, training-only leaf-side inspection;
- m7 ORT 1.30.0 / WASM-only / numThreads=1 / byte and timing protocol;
- m8 non-diagnostic `not_sure_reason` + metadata-verification rule;
- m9 localization safety strings + validator-unavailable fallback.

## Audit preservation

Confirm `STAGE_04_AUDIT.md` is a verbatim copy of the audit from `claude/wonderful-turing-cvugnp`.

## Regression check

Check only whether these repairs introduce:

- a new blocking/major/minor contradiction;
- a Stage 3 incompatibility;
- a new evaluation-integrity loophole;
- a new licence/privacy/runtime contradiction.

Do not broaden into another full audit.

## Scope boundary

Do not train.

Do not inspect validation/test/external/challenge results.

Do not perform Stage 7 implementation.

Do not redesign the product because later implementation choices remain open.

## Required output

### Verdict

Choose exactly one:

- PASS
- PASS WITH MINOR REPAIRS
- FAIL / BLOCKED

### Repair confirmation matrix

For M1–M10 and m1–m9:

- **Status:** Confirmed / Not confirmed / Regressed
- **Evidence:** exact file/section
- **Reason**
- **Repair needed**, only where applicable

### Regression check

State whether any new blocker, major, or minor contradiction was introduced.

### Stage-control answers

1. Can the repaired D4-01 through D4-20 rules stand?
2. Can Stage 4 proceed to owner closure/merge review?
3. Is any further Claude audit required?
4. Can Stages 5/6 planning proceed after Stage 4 closure while Stage 7 evidence remains blocked until greenlight?
5. Does anything require reopening Stages 0–3?

Be adversarial but narrow.
