# Project Workflow

This repository follows a stage-gated development process for the WBG Small AI for Development Hackathon 2026.

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

8. **Review consequential stages adversarially.**  
   Independent review should challenge compliance, evidence quality, architecture, evaluation validity, safety, execution risk, and claim discipline.

9. **Reconcile findings before closure.**  
   Material audit findings are reviewed by the builder, accepted or rejected with rationale, repaired where necessary, and rechecked before a stage is considered closed.

10. **Owner approval remains final.**  
    José Antonio Tamburini Martínez is the sole human entrant and final decision-maker. A stage is not final merely because a document, pull request, or audit exists.

11. **Do not merge consequential changes without owner authorization.**  
    Review, reconciliation, and merge are separate steps.

12. **Prefer completion over process theater.**  
    Documentation and audit depth must remain proportionate to the remaining competition time. Any control that costs more than the risk it mitigates should be simplified.

## Standard stage flow

`stage artifact → pull request → independent review → reconciliation → owner decision → merge → stage close`

The depth of review can vary by stage. Technical, evaluation, compliance, and final-submission gates should receive the strongest scrutiny.

## Repository communication rule

GitHub comments, reviews, PR bodies, and public documents should discuss only the public artifact, its evidence, its decisions, and its risks. They should not expose private working context that is not necessary to understand or evaluate the project.
