# Stage 4 Narrow Repair Confirmation — RoyaCheck Offline

**Auditor:** Claude (narrow Tier A repair confirmation, Claude Code)
**Package:** `docs/audits/stage-04/STAGE_04_CONFIRMATION_PACKAGE.md`, read at the repaired head
**PR:** `SplitzHappen/RoyaCheck-Offline#13`, "Stage 4: technical pre-registration"
**Repaired head:** `chatgpt/stage-04-technical-preregistration` at `9ec0ea3fa960f1277b48ea18901a60960ff9aeb2`. This matches the expected SHA and `refs/pull/13/head`.
**Original audited head:** `8ea4540f260df303af167eae293e00feb542846d`
**Base:** `main` at `2e52cd098bef4077a9c8825b80c2aeb16e945044`. Unchanged.
**Date:** 2026-10-03, about 19:25–19:45 ET
**Output:** `docs/audits/stage-04/STAGE_04_CONFIRMATION.md` on `claude/wonderful-turing-cvugnp`. The repaired head was merged into that branch first, so the PR #14 diff is this file only. No audited file was modified.

**Scope.** I inspected the complete repair diff `8ea4540..9ec0ea3`: five commits, five files. No changes touch Stages 0–3. This is a narrow confirmation, not a second audit. I trained no model, viewed no image, created no split, and inspected no validation, test, external or challenge result. External facts were already established in the original audit and were not re-fetched.

---

## Verdict

**PASS WITH MINOR REPAIRS**

- All ten majors (M1–M10) and all nine minors (m1–m9) are **Confirmed**.
- **Audit preservation is confirmed byte-for-byte.** `STAGE_04_AUDIT.md` on the repaired head and on `claude/wonderful-turing-cvugnp` are the same git blob, `5a022656ab0596ce5b5399fa557c8cb73f3c16c7`.
- **New findings: 0 blocking, 0 major, 2 minor (N1, N2).** Both are one-paragraph rule clarifications that the owner can approve during reconciliation. Neither needs another Claude audit, and both must be fixed before the challenge manifest and the 7B commit are frozen.

---

## Repair confirmation matrix

### Major findings

| ID | Status | Evidence | Reason |
|---|---|---|---|
| **M1** BRACOL truth/counts | **Confirmed** | Prereg §3.1, D4-01, D4-05, D4-09, §21 | The accounting is consistent: 1,747 collected / 1,685 labelled / 62 author-excluded, excluded "from every partition". The definitions are correct and exhaustive: `R` = rust flag 1 regardless of predominant stress, `H` = all stress flags absent, `O` = rust flag 0, split by predominant non-rust class. On the published label file this partition gives R 630 / H 272 / O 783, which sums to 1,685. The five learned classes are rust-present plus three "without rust" classes plus healthy. All rust safety metrics use rust-presence truth. There is a stop-and-return gate at 7A if the archive metadata are missing or inconsistent. |
| **M2** metric definitions | **Confirmed** | D4-10, D4-11 table | Target-class coverage replaces overall coverage. R/H/O and VR/NVR/NS denominators are exact. Confident miss = `\|R→NVR\| / \|R\|`. Other → NVR uses all of `O`. Selective accuracy excludes `O`, which removes the earlier ambiguity. The tie-break is fully ordered: count, then target-class coverage, then accepted rust recall, then higher `T_healthy`, then higher `T_rust`. Overall abstention is still reported, which satisfies the ROADMAP "coverage overall" reporting item without gating on it. |
| **M3** sample-size-aware claims | **Confirmed** | D4-11, §11 | Every gate is converted to an integer condition at 7B, with `n_R`, `n_H` and `n_O` committed. Every gated or headline rate gets exact counts and an exact two-sided Clopper–Pearson interval, plus one-sided upper bounds for confident miss and O → NVR. The ≤5% gate is explicitly labelled an engineering gate. "Reliable/robust" wording requires an internal-test upper bound ≤10%, and this applies even when the point trigger passes. The reduced-claim template is pre-written, and the validation-configuration ledger is mandatory. |
| **M4** preprocessing | **Confirmed** | D4-08, §22 lock set | "Do not center crop" is now explicit. One full-frame direct bilinear resize to 224×224 applies to evaluation and to the browser. The framing guide keeps the whole leaf in view. Training crops may remove at most 20% of the frame. No stale resize-256 or crop text remains in the prereg or the ROADMAP. |
| **M5** shipped-artifact parity | **Confirmed** | D4-11 parity gate, §11, D4-18, ROADMAP 7D–7G | The FP32 ONNX artifact is frozen before any readout. The ≤5 MB target is removed and "no post-held-out quantization" is stated. Validation-only parity requires ≥99% route agreement, records the maximum absolute probability difference, and repairs must use validation only. 7E/7F use "the same frozen ONNX artifact and preprocessing path that passed 7D parity". ROADMAP 7D now exports the artifact, runs parity and measures bytes and compatibility on the target before any readout. 7G uses the already-evaluated artifact. The order is consistent. |
| **M6** Q/K/U split | **Confirmed** (see **N1**) | D4-04, D4-13 | Q, K and U are separate. No blur detector is claimed and the ≥90% blur target is gone. K is measured on internal BRACOL `O`, and quarantined externals are not double-used. U excludes quarantined data. BRACOT is unknown/scene-only: seeded file-list sampling, expected route `not sure`, no project labels. The ≥20-per-category rule applies, with descriptive-only reporting below 20. There is no combined target, and challenge IDs are frozen before 7C. The repair also removed the U target share, which is regression **N1**. |
| **M7** deterministic ladder/clock | **Confirmed** (see **N2**) | D4-06, D4-19, D4-20, ROADMAP Stage 5 ladder | A0 and A1 have fully specified configurations: features, optimizer, learning rate, weight decay, batch size, loss, epochs, checkpoint rule, seed, and caps of 60 and 30 minutes. The redundant embedding/linear rung is removed. C is runtime-only, chosen before training, and named. D is stop/reduce. The clock commits absolute ET timestamps, keeps the 10:00 PM ET end, reserves 30 minutes for evidence, and gives 7.0/7A/7B separate caps. No rung may start unless its full cap fits. Degraded mode disables `no visible rust`. That degraded mode is under-specified, which is **N2**. |
| **M8** weight-risk standard | **Confirmed** | D4-06 licence/provenance standard | The standard requires a pinned source and SHA-256, disclosure of code licence and ImageNet provenance, no commercial-use claim, no ImageNet redistribution, and no unnecessary re-hosting. A Stage 6 organiser-licence recheck happens before 7C, and any clear incompatibility blocks the path and returns it to the owner. The text says explicitly "project risk acceptance, **not a legal determination**". |
| **M9** iPhone/Safari persistence | **Confirmed** | D4-07, D4-18 persistence protocol | The primary context is Safari → Add to Home Screen → standalone PWA. The `persist()` result is recorded. The 9-step protocol covers termination, airplane mode, relaunch, inference, save and reopen. The durability limitation is explicit, and "no multi-month durability claim" is stated. Storage in Safari-tab context and installed-app context is not assumed to be shared. |
| **M10** capture-domain evidence | **Confirmed** | D4-08 capture-condition table, D4-12 | BRACOL, RoCoLe and the Stage 3 workflow have separate condition rows. "On-plant + card" is marked "not directly measured as a complete condition". The abaxial attached-leaf instruction is conditional on 7A metadata confirmation. A RoCoLe trigger withdraws field/general claims and returns the on-plant workflow to the owner, consistent with D3-03. |

### Minor findings

| ID | Status | Evidence | Reason |
|---|---|---|---|
| **m1** dossier fields | **Confirmed** | §3.1–3.4 | Geography, devices, counts, acquisition and coverage limits are recorded for BRACOL, RoCoLe and BRACOT. RoCoLe's species, capture, side, resolution and clustering shifts are disclosed. |
| **m2** Saposoa | **Confirmed** | §3.3, D4-03, ROADMAP Data plan | Saposoa is a future candidate only, will not be read after RoCoLe, and must be re-verified (including the pathogen identity) before any future use. |
| **m3** ROADMAP supersession | **Confirmed** | ROADMAP Data plan | The plan says "supersedes the earlier candidate order". RoCoLe is the sole planned 2026 external. If BRACOL fails, the decision returns to the owner and no external source is redesignated. |
| **m4** GSMA record | **Confirmed** | §17 | Figure 15, PDF p. 31, is recorded as reverified on 2026-10-03, with the auditor's non-access disclosed. Its use is narrow: the household-sharing premise is attributed to the case, and bandwidth, size and performance derivations are prohibited. *Optional:* name who performed the reverification. |
| **m5** duplicate control | **Confirmed** | D4-09 | `imagehash.phash`, 64-bit, Hamming ≤5, transitive union-find, largest component recorded, >2% component triggers a logged review, review happens before assignment, and whole components are assigned to one partition. |
| **m6** tie-break / external map | **Confirmed** | D4-10, D4-02/D4-12, D4-09 | The tie-break is explicit. The RoCoLe map is metadata-only: L1–L4 → R, healthy → H, red mite → O-unseen reported separately, conflicts excluded. There is no conditional Saposoa read. Leaf-side inspection is limited to the training partition, after the split is frozen. |
| **m7** runtime protocol | **Confirmed** | D4-07, D4-18 | The protocol pins `onnxruntime-web` 1.30.0, WASM-only, `numThreads = 1`. It counts uncompressed stored bytes, reports cold load separately, measures preprocessing + `session.run`, uses 1 warm-up and ≥30 timed runs, and records iOS, Safari and ORT versions. The arithmetic is coherent: the 1.30.0 plain WASM is 13.58 MB measured, and an FP32 576→5 head model should be well under 12 MB, so ≤30 MB is attainable. |
| **m8** privacy precision | **Confirmed** | D4-15 | `not_sure_reason` is non-diagnostic and enumerated. Metadata removal is verified in Stage 9 by actual inspection. `model_version` is an optional local field. This is consistent with D3-09/D3-10. |
| **m9** localization | **Confirmed** | D4-16 | The inventory adds the non-diagnosis/treatment warning, "no visible rust ≠ healthy; review available", separate keep-photo and show-photo consents, and role labels. If no validator is available, the fallback is an unvalidated draft plus English with no localization claim, consistent with D3-12/D3-13. A naming change returns to the owner. |

### Audit preservation

**Confirmed verbatim.** The git blob `5a022656ab0596ce5b5399fa557c8cb73f3c16c7` is identical on `9ec0ea3` and on `claude/wonderful-turing-cvugnp`.

---

## Regression check

**No new blocker or major.**

The repairs introduce no Stage 3 incompatibility, no licence or privacy contradiction, and no runtime contradiction. Other checks:

- No stale center-crop, ≤5 MB, quantization, Rung B or relative-kill text remains in the prereg or the ROADMAP.
- Stages 0–3 are untouched.
- Removing the burned-partition sentence from ROADMAP 7D is not a regression. The rule still stands in the ROADMAP "One-shot evidence rule" section and in D4-09.

**Two new minors:**

### N1 — The U-family target share was removed, contradicting the ROADMAP (introduced by the M6 repair)

- **Issue.** The original D4-13 set a ≥70% `not sure` target for non-coffee, maize and bean inputs. The repaired D4-13 sets an expected route but **no target share** for any U category. The reconciliation does not record that removal, which went beyond the audit's request to drop only the combined and blur targets. The ROADMAP OOD section (line 607) still requires: "pre-register the target share that should route to `not sure`."
- **Why it matters.** The rule "If a category has fewer than 20 examples… make no category target claim" implies a target that does not exist. Without one, the U results can be described after they are seen, which is a small post-hoc claim channel.
- **Repair.** Restore one pre-registered share per reported U category with n ≥ 20, for example the original **≥70%** routed to `not sure`, and state the consequence: below target, no fail-safe/OOD claim for that category. The number is the owner's choice; it must be fixed before the challenge manifest freezes.

### N2 — Degraded safety mode has no `T_rust` selection rule or explicit trigger (introduced by the M7 repair)

- **Issue.**
  - D says "if no accepted learned path meets the **safety gate**". It is unclear whether this means the full D4-11 gate or only the confident-miss and O → NVR rows.
  - With `no visible rust` disabled, the D4-10 pair search no longer applies, and the record does not say how `T_rust` is chosen, nor which gate the degraded mode must pass.
  - The record does not say whether the degraded artifact goes through the same 7D parity and the one-shot 7E/7F readouts.
- **Why it matters.** An unconstrained `T_rust` chosen after the A0/A1 validation results are seen is a fresh post-hoc choice. Without a precision-type constraint, degraded mode could flood "Review first" with healthy and other-disease leaves.
- **Repair (narrow).**
  1. The trigger is: A0 and A1 (as the clock permits) both fail the **full** D4-11 gate.
  2. In degraded mode, set `T_healthy` = disabled and pick `T_rust` from the same 0.50–0.95 grid on validation only. Maximize `|R→VR|` subject to one pre-set false-alarm cap, for example `|(H∪O)→VR| / |→VR|` ≤ an owner-chosen share, with ties broken toward the higher `T_rust`.
  3. If no `T_rust` meets the cap, there is no learned proposal at all.
  4. The degraded artifact passes the same 7D parity check and the same one-shot 7E/7F readouts, and those readouts report R → VR, H → VR and O → VR counts with exact intervals.

### Observations (not findings)

- **Clock.** At the time of this confirmation (about 7:30 PM ET), Stages 4 closure, 5 and 6 remain open. Under the repaired D4-19, A0 (60 min) plus the 30-minute reserve must finish by 10:00 PM ET. A0 therefore must start by about 8:30 PM ET, after 7.0/7A/7B, and A1 is unlikely to fit. The rule handles this correctly: no rung starts unless it fits, and the evidence reservation is protected. The owner should expect D or A0-only as the realistic paths.
- **Direct resize.** Direct resize squashes 2:1 BRACOL frames and roughly 4:3 phone frames by different factors, which adds a mild geometry shift. This was one of the two options the audit offered and is not a finding. The capture framing guide reduces it.
- **RoCoLe clustering.** The four-images-per-plant structure is known from the data article whether or not plant IDs can be recovered. The disclosure should not depend on recovering them. Optional wording fix.

---

## Stage-control answers

1. **Can the repaired D4-01 through D4-20 rules stand?** Yes. D4-13 needs the one-line N1 target restoration, and D4-20 needs the N2 degraded-mode rule, both owner-approved during reconciliation.
2. **Can Stage 4 proceed to owner closure/merge review?** Yes, after N1 and N2 are reconciled or explicitly owner-decided. Neither involves a result, and both must be settled before the challenge manifest and the 7B commit.
3. **Is any further Claude audit required before Stage 4 closes?** No. N1 and N2 are narrow rule clarifications that the owner can verify against this record.
4. **Can Stages 5/6 proceed after Stage 4 closure while definitive Stage 7 evidence stays blocked until the greenlight?** Yes. Stage 5 must turn the D4-19 clock into explicit 7.0/7A/7B caps and absolute ET timestamps without weakening them, and must adopt the repaired A0 → A1 / runtime-C → D ladder. Stage 7 training and readouts stay blocked until Stage 4 is merged and Stage 6 gives the greenlight.
5. **Does anything require reopening Stages 0–3?** No. Degraded mode outputs only a subset of the Stage 3 three-state set, is owner pre-authorized and is disclosed. The D3-03 reopen path stays conditional on the RoCoLe trigger.

---

## Scope boundary

No model was trained. No validation, internal-test, external or challenge result was inspected. No image was viewed and no split was created. No Stage 7 work was performed. No product redesign was proposed. Implementation details that are intentionally deferred to 7A/7B were not treated as findings.
