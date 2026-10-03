# Annex B / Noor Case-Alignment Reconciliation

**PR:** #9 — `Case alignment: make Annex B / Noor controlling`  
**Independent audit:** `docs/audits/noor-case-alignment/CLAUDE_AUDIT.md`  
**Reconciliation scope:** Documentation/case-foundation repair only. No Stage 3 execution or technical implementation is authorized.

## Reconciliation standard

The independent audit reported **0 blockers / 6 majors / 8 minors**. The selected RoyaCheck route survives. This record preserves each finding, records its disposition, states the exact repair applied in PR #9, and keeps substantive Stage 3 choices with the owner.

“Accepted” means the finding is adopted as a required repair. “Modified” means the finding is adopted in substance but its proposed implementation is narrowed to preserve an owner decision or a safety boundary. No finding below is silently discarded.

## Major findings

| Finding | Disposition | Exact repair in PR #9 | Rationale | Residual owner decision |
|---|---|---|---|---|
| **M1 — one better agricultural decision is too weak** | **Modified / accepted in substance** | Remove the record-keeping-vs-memory framing as the controlling decision. The roadmap, case contract, Stage 1 and Stage 2 now require a real agricultural next-step prioritization decision in which the bounded visual proposal materially changes what Noor prioritizes for human review. The organizer problem-sentence template is preserved exactly, and its evidence clause must use real evidence rather than the fictional scenario. | The audit is correct that a camera/form can solve documentation alone and that all labels cannot collapse to the same practical action. | **Stage 3:** exact judge-facing decision wording and final label-to-action routing. |
| **M2 — user-day/device story incomplete** | **Accepted** | Add the daughter’s boarding-school fact, weekend-only smartphone use with her assistance, screen-literacy implication, Noor’s own-phone role, and observation-to-capture delay risk. Narrow the blanket voice exclusion to speech recognition / generative voice advisory / voice-agent workflows; do not preclude simple prerecorded or human-voiced accessibility prompts. Stage 2 explicitly evaluates the voice/local-language advisory route. | These facts materially change workflow realism and inclusion. | **Stage 3:** who operates the smartphone; when; where; whether/how the leaf is brought to the phone; delay; role of Noor’s own phone. |
| **M3 — store-and-forward/handoff/consent undefined** | **Accepted** | Stage 3 must lock reviewer role, assumption status, channel, payload, image travel, consent and reviewer-visible fields. Later technical stages must implement only a user-initiated handoff; no autonomous sending or fake integration. If an image travels, inclusion requires explicit consent. | A stored record with no honest human handoff does not complete “what happens next” and leaves consent unaddressed. | **Stage 3:** reviewer, handoff channel, image yes/no, consent flow, reviewer-visible payload. |
| **M4 — rubric paraphrases lost official language** | **Accepted** | The case contract and Stage 0 preserve the official questions, including “add other constraints,” the identified data gap/modeling question, reuse in another setting, and privacy/consent/bias/human oversight. Stage 10 must map evidence to the questions as well as weights. | The weights alone are insufficient; judges are told what to ask. | None beyond later evidence production. |
| **M5 — common-data layer not engineering-relevant** | **Accepted** | Remove any implication that an existing country citation is already the final anchor. Stage 3 must select one coherent real-world implementation evidence anchor, explicitly not Noor’s location. Stage 4 must make at least one common-data figure bind a concrete design parameter. | Scattered references do not constitute data grounding unless they constrain the design. | **Stage 3:** evidence anchor. **Stage 4:** exact common-data figure and bound parameter. |
| **M6 — local-language gate may be weakly satisfied** | **Accepted** | Stage 3 must choose either a real local/home language in the selected evidence-anchor context with reasoning, or explicitly disclose a national/vehicular-language choice as weaker case fit. The less-supported-language answer is pre-committed as a required deliverable. | The official brief distinguishes Noor’s local/home language from the national language she uses when necessary. | **Stage 3:** actual prototype language and rationale; less-supported-language answer. |

## Minor findings

| Finding | Disposition | Exact repair in PR #9 | Rationale | Residual owner decision |
|---|---|---|---|---|
| **m1 — preserve precise case facts** | **Accepted** | Use “twice a year at best” where the Annex B cadence matters; distinguish Noor’s own phone from her daughter’s smartphone. | Prevents case drift. | None. |
| **m2 — “no visible rust” safety semantics** | **Accepted** | Keep “no visible rust” distinct from healthy/all-clear/no-disease; preserve an obvious human-review option; require later evaluation to distinguish low confidence, OOD/non-coffee, other disease/stress and image-quality causes of `not sure`. | Prevents false reassurance and makes abstention auditable. | Final UI wording remains later-stage work. |
| **m3 — capture realism/challenge set** | **Modified / accepted in substance** | Carry forward the studio-versus-field warning; add maize and bean leaves to the planned challenge/OOD set; require capture-side/acquisition-setting justification after data properties are verified. Do **not** decide in this reconciliation that a leaf is detached or photographed at the house. | The challenge set should reflect Noor’s farm, but the physical capture workflow is a Stage 3 choice and dataset properties still require verification. | **Stage 3:** detach/capture workflow. Later technical gate: capture-side rule after evidence review. |
| **m4 — shared-device privacy** | **Accepted** | Stage 4 privacy requirements explicitly address record visibility on a shared smartphone. | Local-only storage is not automatically private on a shared device. | Exact privacy UX belongs to Stage 4/8. |
| **m5 — unify prohibited claims** | **Accepted** | Maintain one canonical prohibited-claims list and make later stages reference it. Add case-specific prohibitions: yield cause, general diagnosis, price improvement, registry solution, Noor nationality/location/language as fact, autonomous notification, unsupported field validation. | Reduces contradictory claim ceilings. | None. |
| **m6 — video requirements** | **Accepted** | Preserve the organizer’s exact problem-sentence template and record that an entry without the 2–5 minute challenge video will not make the shortlist. | This is a hard submission consequence. | None. |
| **m7 — status vocabulary** | **Accepted** | Normalize the roadmap and Stage 0–2 to **Reopened — in review**. | Uses the repository’s canonical status vocabulary. | None. |
| **m8 — historical audits** | **Accepted** | Do not rewrite earlier audits. Add narrow supersession notes only to historical audit files that contain stale Spanish/Dominican or pre-Annex-B framing. | Preserves audit history while preventing judges from reading stale assumptions as current policy. | None. |

## Stage 3 owner-decision gate preserved

This reconciliation deliberately does **not** decide:

1. final agricultural next-step wording;
2. exact assisted/weekend user-day workflow;
3. whether/when a leaf is detached or photographed;
4. role of Noor’s own phone;
5. reviewer role;
6. handoff channel;
7. whether the image travels;
8. consent mechanics;
9. what the reviewer sees;
10. coherent real-world evidence anchor;
11. actual local/home prototype language;
12. less-supported-language answer;
13. label-to-action routing.

Those are owner decisions for Stage 3 unless separately authorized.

## Re-audit disposition

The independent audit concluded that the roadmap and Stages 0–2 can be re-closed after documentation repair, that Stage 3 may begin after reconciliation and owner re-closure, and that **no second full independent audit round is necessary**. The next planned Tier-A independent audit remains Stage 4.

This record does not itself close any stage, mark PR #9 Ready for Review, or authorize merge.

## Owner re-closure and merge authorization

José Antonio explicitly approved the repaired project foundation after reconciliation and authorized:

- re-closing the roadmap/process architecture and Stages 0–2;
- merging PR #9 at the freshly verified repaired state;
- beginning Stage 3 only **after** that merge.

This approval does **not** authorize any of the substantive Stage 3 decisions listed above, nor Stage 3 implementation beyond beginning the Stage 3 decision/lock process after merge.

**Owner disposition:** Approved for re-closure and merge.
