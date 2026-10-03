# Project Workflow

This repository follows a stage-gated development process for the Small AI for Development Hackathon 2026.

## Operating rules

For each project stage:

1. **Create one bounded stage deliverable.**  
   Each stage produces a normal project artifact focused on that stage's substantive analysis, decisions, evidence, or implementation.

2. **Use the strongest available validated knowledge.**  
   Stage work should reuse already-established facts, decisions, and evidence where appropriate rather than repeat unnecessary research or analysis.

3. **Use a dedicated pull request for the stage.**  
   Each stage should normally be proposed through its own branch and pull request so the change can be reviewed before acceptance.

4. **Keep public artifacts substantive.**  
   Public stage documents should focus on the problem, evidence, tradeoffs, decisions, implementation, evaluation, and limitations relevant to that stage.

5. **Do not invent chronology.**  
   Public artifacts should not fabricate dates, timestamps, research sequences, or claims about when underlying thinking occurred unless a date is directly relevant and supported.

6. **Do not expose private working systems.**  
   Public repository artifacts should not discuss private note systems, private repositories, internal orchestration, or other non-public working surfaces unless disclosure is specifically required.

7. **Separate evidence from inference.**  
   Facts, measurements, assumptions, recommendations, and unsupported claims must remain distinguishable.

8. **Use risk-tiered review.**  
   Independent adversarial review is mandatory for the roadmap/process architecture, Stage 0 compliance, Stage 4 technical/evaluation pre-registration, Stage 7 technical/evidence readout, and Stage 10 final submission. Other stages receive owner/builder review unless they introduce a material compliance, safety, licensing, evaluation, or architecture risk.

9. **Reconcile material findings before closure.**  
   Blocking and major findings are reviewed by the builder, accepted or rejected with rationale, repaired where necessary, and rechecked before the affected artifact is considered final.

10. **Owner approval remains final.**  
    José Antonio Tamburini Martínez is the sole human entrant and final decision-maker. A stage is not final merely because a document, pull request, or audit exists.

11. **Do not merge consequential changes without owner authorization.**  
    Review, reconciliation, owner decision, and merge are separate steps.

12. **Prefer completion over process theater.**  
    Documentation and audit depth must remain proportionate to the competition clock. Any control that costs more than the risk it mitigates should be simplified without weakening compliance, safety, licensing, or evaluation integrity.

13. **Protect held-out evidence.**  
    Final test and external partitions are one-shot evidence. They must not be used to choose models, preprocessing, class mappings, thresholds, OOD guards, or fallback paths.

14. **Protect the final submission buffer.**  
    The roadmap defines a minimum protected recovery/submission buffer. Feature work stops when that buffer begins.

15. **Treat the official sector annex as the controlling problem specification.**  
    For Agriculture, Annex B / Noor controls the user, scenario, sector constraints, and allowed problem space. Generic research may add context but may not redefine the case. If a later artifact drifts away from the annex, the artifact is repaired rather than the case being rewritten.

16. **Preserve unsolved case branches explicitly.**  
    Solving one better agricultural decision does not authorize implying that the entry solves Noor’s other problems. The selected RoyaCheck route must keep the market-price branch, farmer-registry precondition, and broader yield-cause/advisory problem visible as out of scope or external dependencies.

17. **Do not turn reconciliation into premature product lock.**  
    Audit reconciliation may repair facts, requirements, safety boundaries, and future gates. When the audit identifies a substantive owner choice for a later stage, the reconciliation records that choice as an explicit gate rather than silently making it early.

18. **Preserve historical audits as historical evidence.**  
    Earlier audit conclusions are not rewritten to match later policy. If an old audit contains country-, language-, or case-framing that a later controlling source supersedes, add only a narrow historical/supersession note and keep the original audit body intact. Current Agriculture policy is governed by the Annex B case contract and the latest owner-approved reconciliation.

## Review tiers

### Tier A — independent adversarial review

Required for:

- roadmap/process architecture, including a material official-case realignment;
- Stage 0 — compliance;
- Stage 4 — technical/evaluation pre-registration;
- Stage 7 — technical/evidence readout;
- Stage 10 — final pre-submission red team.

### Tier B — owner/builder review

Default for:

- Stages 1, 2, 3, 5, 6, 8, and 9.

A Tier B stage escalates to Tier A only if it creates a new material compliance, safety, licensing, evaluation-integrity, or architecture risk.

## Standard stage flow

`official case/rules → stage artifact → stage PR → review according to tier → reconciliation if needed → owner decision → merge → stage close`

Stage 9 performs the internal evidence/claims check. The independent final claims/compliance red team happens once in Stage 10 rather than duplicating the same independent audit twice.

## Stage closure rule

A stage closes only when:

- the required outputs are present;
- material findings are reconciled;
- the owner decision is recorded;
- the approved PR is merged.

If a non-blocking documentation stage exceeds its time box, prose expansion stops and residual gaps are recorded. A true rules, license, safety, or evaluation-integrity blocker remains blocking regardless of schedule pressure.

To avoid serial waiting across stage PRs, work on stage N+1 may begin once the owner decision for stage N is recorded, with the approved merge following promptly. Two hard gates remain strict: Stage 4 pre-registration must be fixed before any training/validation result or held-out readout is produced, and Stage 6 greenlight must be recorded before definitive Stage 7 implementation begins. The protected submission buffer is never consumed by stage overruns.

## Repository communication rule

GitHub comments, reviews, PR bodies, and public documents should discuss only the public artifact, its evidence, its decisions, and its risks. They should not expose private working context that is not necessary to understand or evaluate the project.

Stage artifacts should read as decision records rather than narrative diaries. They should state evidence and conclusions directly and should not make unsupported process-history claims.

For case-based challenges, public artifacts should make clear which part of the official case they solve, which parts remain unsolved, and which infrastructure preconditions sit outside the prototype.
