# Post-reconciliation verification audit: Annex B / Noor foundation (`SplitzHappen/RoyaCheck-Offline`)

**What I audited:** `main` at `88f598bcda20926e12c0051f08ae613ece0c11a4`, the merge of PR #9 with head `0702aed`. The parents are `97c8d71` and `0702aed`, which match the package. Every judging question and template sentence was checked word for word against the original brief PDF, pp. 10–11.

**Two scope notes:**
- `POST_RECONCILIATION_AUDIT_PACKAGE.md` is not on `main`. It exists only on `chatgpt/noor-post-reconciliation-audit` (commit `13a3743`, which adds only that file). I followed it as written.
- No output path or branch was named, and I have read-only access to this repository. This report exists only in this conversation.

---

## 1. Verdict: **PASS WITH MINOR REPAIRS**

All six majors are repaired in the canonical locations, without contradictions. Four findings are only partially repaired, but each residual is minor. Two of the reconciliation's claims are inaccurate (see N2). I found no new blocking or major issues.

---

## 2. Finding verification matrix

| # | Status | Evidence (merged `main`) | Assessment | Required repair |
|---|---|---|---|---|
| **M1** Decision is tool-centric | **Resolved** | Contract §3 l.60–72; ROADMAP l.59–63; Stage 1 l.70–78; Stage 2 l.93, l.281, l.364–366; Contract §10 l.239–247 | The record-versus-memory decision is gone from every file. A grep for "memory", "confident model answer" and "documented and flagged" finds no remaining use as a decision. The controlling requirement is now that the visual proposal must "materially affect what Noor prioritizes" and that the three labels must "not collapse into the same action". The candidate wording is clearly marked as not locked. The template is word for word, and the evidence clause must cite real evidence. Deferring the final wording is legitimate. | None. See the Stage 3 watch item W1 below. |
| **M2** User-day/device facts | **Resolved** | Contract §1 l.20–27 and gate l.295–296; Stage 1 l.29–31, l.135–147, l.188–196; Stage 2 l.142–163, l.237, l.314–318; ROADMAP l.25, l.85–89, l.107, l.382–386 | The facts match the brief (p. 5): the daughter boards in the district town, Noor uses the smartphone on weekends only with her help, which is a screen-literacy constraint, and Noor's own phone is distinct. The delay from observation to capture is explicit. All six user-day items are Stage 3 locks. The voice exclusion is narrowed to speech recognition, generative voice and voice agents, and prerecorded prompts are allowed. Stage 2 now actually evaluates the voice/local-language route, and its "Weak–Moderate" score for solo-build reliability justifies the downgrade. | None. Two small overstatements were introduced; see N1. |
| **M3** Handoff, reviewer and consent | **Partially resolved** | Contract §6 l.147–157; ROADMAP l.388–392, l.493–496; Stage 1 l.119–121 | The canonical controls are present: reviewer role (marked as case fact or assumption), channel, whether the image travels, consent, reviewer-visible payload, and no autonomous sending. The extension officer is correctly identified as the only reviewer the case names. **Gap 1:** Stage 8's required components (ROADMAP l.852–868) list only the "handoff summary" and "store-now/review-later". Carrying out the Stage-3-locked handoff is not a required build component, and Stage 9 doesn't test it. **Gap 2:** "No raw image retention by default" (l.489, l.879) is never reconciled with a handoff that happens days later and carries the image. If the image travels, it must sit on a shared phone until the handoff happens. | Add "the Stage-3-locked, user-initiated handoff (channel, consent step, payload)" to the Stage 8 required components and to the Stage 9 tests. State that keeping an image until handoff requires consent and is covered by the delete path. |
| **M4** Rubric questions | **Resolved** | Contract §11 l.255–263; Stage 0 row 59; ROADMAP l.1002–1011 | All seven questions match pp. 10–11 word for word, including "add other constraints", "identified gap in the data", "reuse" and "consent". The weights are correct. Stage 10 maps evidence to both the questions and the weights. | None. |
| **M5** Common-data layer and anchor | **Resolved** | Contract §8 l.215–217 and gate l.303–304; ROADMAP l.393, l.503; Stage 1 §7 l.155–165, §14 | Kenya/GSMA is withdrawn as the anchor. Stage 3 must choose one coherent anchor and label it as not Noor's location. Before Stage 4 closes, at least one common-data figure must "bind a real design parameter". This is enforced in the contract and the roadmap. **Residual:** Stage 1 §4 (l.96–99) still cites IICA 2019, which concerns the Americas, as rust context without calling it a candidate. That doesn't contradict anything, but it may clash with whatever anchor Stage 3 picks. | None for the foundation. At Stage 3, adopt or drop IICA to match the chosen anchor. |
| **M6** Local-language gate | **Resolved** | Contract §7 l.178–181 and gate l.298–299; Stage 0 row 36; Stage 1 §8; ROADMAP l.394–395 | Option (A), a local/home language in the anchor context with reasoning, or option (B), a national/vehicular language with the weaker fit disclosed. The answer for a less-supported language is pre-committed. The language is labelled an implementation choice. No language is chosen early. | None. |
| **m1** Fact precision | **Resolved** | Contract l.20–21; Stage 1 l.25, l.29; ROADMAP l.25 | "Twice a year at best" and "own phone" are present. | None. The word "basic" was added; see N1. |
| **m2** "No visible rust" semantics | **Resolved** | ROADMAP l.413–420, l.616; Contract l.72, l.101, l.301 | It is never "healthy", "all clear" or "no disease". The review option stays prominent after "no visible rust" on a leaf Noor flagged. The reasons for `not sure` (low confidence, out-of-distribution input, other disease, image quality) are reported separately. On reflection, the clause "does not assert the absence of other conditions" is a fair, conservative statement, not a contradiction. | None. |
| **m3** Studio/field, capture side, confusers | **Partially resolved** | ROADMAP l.615–616 | Maize and bean leaves are in the challenge set, and the capture side is decided only after data is verified. Both are done, and nothing was decided early. **However,** the reconciliation says it would "carry forward the studio-versus-field warning". A search of ROADMAP and every stage file for "studio", "plain background" and "field photo" finds nothing. The brief's specific warning (p. 8) is still only implied by "domain shift" and "acquisition setting". | Add the brief's p. 8 warning in your own words to Contract §8 (sector layer) and to the Stage 4 dataset record. Require the maize/bean "where licensed examples are available" exception to be disclosed if it is used. |
| **m4** Shared-device privacy | **Resolved** | ROADMAP l.493 | Stage 4 must deal with the fact that records are visible to other users of the daughter's phone. | None. The image-retention interaction is covered under M3. |
| **m5** Single prohibited-claims list | **Partially resolved** | ROADMAP "Canonical exclusions" l.73–105 and pointer l.109; Contract §4 l.95–112 ("this single claim ceiling"); Stage 9 l.981 refers to **both** | There are now two lists, and each calls itself canonical. They differ: only the contract includes "replacement of extension workers" and "spray timing". **Neither** includes two items from the original ceiling: showing Noor with a smartphone on the slope or always carrying one (that rule exists only in Stage 1 l.147 and Stage 8), and presenting a non-case reviewer (for example a cooperative technician) as a case fact. Stage 3's gate approves "the claim ceiling" (l.424). With two diverging lists, that approval is ambiguous. | Make Contract §4 the only claims list. In ROADMAP, keep the product-feature exclusions and replace the claim items with a pointer to the contract. Add the two missing items. |
| **m6** Video requirements | **Resolved** | Contract §12 l.271–281; Stage 0 row 24; ROADMAP l.1013–1017 | Shortlist-gating is recorded, and the template is word for word. | None. |
| **m7** Status vocabulary | **Resolved** | ROADMAP l.33–39, l.1135–1146; status lines in Stages 0–2 | Statuses are uniformly "Closed — owner approved (PR #9)", and Stage 3 onward is "Not started". This matches the vocabulary. | None. |
| **m8** Historical audits | **Partially resolved** | Notes added to `docs/audits/roadmap/ROADMAP_AUDIT.md` and `docs/audits/stage-00/STAGE_00_AUDIT.md`. Neither audit body was rewritten. | `docs/audits/roadmap/AUDIT_PACKAGE.md` still presents Spanish as "current implementation target" (3 matches) and has no note. | Add the same one-line supersession note to that file. |

**Stage 3 watch item W1 (not a defect):** Two controls pull in opposite directions. One says the three labels must not collapse into the same action. The other says review must stay prominent after `no visible rust`. Both can hold only if the routes differ in *priority or urgency*, not in whether review is available. Stage 3 should make that explicit when it locks the label-to-action routing.

---

## 3. New regressions or contradictions

No blocking or major issues. Four minor ones:

- **N1 (Minor). Two device facts go beyond the brief.**
  - ROADMAP l.25 calls Noor's phone "her own **basic** phone". The brief never says "basic".
  - Stage 1 l.188 says "the **phones** are at the house". The brief says "the phone", and never says whether the daughter's smartphone stays home while she boards.
  - Both affect Stage 3 choices: the role of Noor's own phone, and whether she could use the smartphone on a weekday without help.
  - **Repair:** use "her own phone" and "the phone is at the house", matching the contract (l.21, l.26).
- **N2 (Minor, record integrity). The reconciliation overstates two repairs.**
  - `RECONCILIATION.md` row m3 says the studio-versus-field warning was carried forward. It was not.
  - Row m8 implies that every affected historical file was annotated. One was not.
  - The owner approved re-closure partly on the strength of this record.
  - **Repair:** correct both rows when the residuals are fixed.
- **N3 (Minor). The order for writing the problem sentence leaves out the handoff.** Contract §10 l.243 says to fill in the template after the decision and the weekend workflow are locked. Its "[when]" clause also depends on the handoff channel. **Repair:** add "and handoff" to that condition.
- **N4 (Minor, process record). This verification isn't recorded on `main`.**
  - The post-reconciliation package is not on `main`.
  - ROADMAP "Immediate next action" (l.1150) is still written as if the merge hadn't happened ("After PR #9 is merged…") and doesn't mention this verification.
  - **Repair:** record this verification's outcome on `main` and update the next-action text.

I checked for decisions made too early and found none. The candidate decision wording appears in four files, but it is labelled "candidate" or "not yet owner-locked" every time. The only device the roadmap fixes is the daughter's smartphone, and that is the only smartphone the case gives the household, so it isn't a premature choice.

---

## 4. Claims and evidence integrity check

| Must avoid | Status in merged state |
|---|---|
| Rust as the cause of Noor's falling yields | Avoided: Contract §4 l.78–80 and l.99; ROADMAP l.92; Stage 1 l.66 |
| General disease diagnosis | Avoided: Contract l.100; ROADMAP l.82, l.96 |
| `no visible rust` = healthy / all clear | Avoided: Contract l.72, l.101; ROADMAP l.95, l.413–418 |
| Treatment recommendations | Avoided: ROADMAP l.77–80; Contract l.102 |
| Yield, income or price improvement | Avoided: Contract l.103–104; ROADMAP l.97–98 |
| Automatic notification or institutional integration | Avoided: Contract l.106, l.157; ROADMAP l.88, l.99, l.494 |
| Field validation | Avoided: Contract l.108, l.110; ROADMAP l.102 |
| Country, nationality or language assumptions | Avoided. Kenya is withdrawn and the language is deferred. The minor N1 overstatements are not about country or language. |
| Universal device or "fully offline" claims | Avoided: Contract l.111; ROADMAP l.103–104 |
| Scale without prerequisites | Avoided: Contract §9 and l.112; ROADMAP l.105 |

The claims ceiling is sound. The only weakness is that it's split across two lists (m5).

---

## 5. Stage-control decision

1. **Can the re-closure of the roadmap/process architecture and Stages 0–2 stand?** **Yes.** Every major is repaired in the canonical contract and the stage documents, with no contradiction elsewhere. The residuals are minor documentation fixes that don't change how the case is read. Under the workflow's closure rule, unreconciled *material* findings would justify reopening. None remain.

2. **Is the foundation verified strongly enough to begin Stage 3?** **Yes.** Stage 3 can begin now. Its 15-item lock list (ROADMAP l.380–396) and the 16-point case gate (Contract §13) are specific enough to prevent the drift seen before.

3. **Minimum repair, and when.** Nothing has to be fixed before Stage 3 *begins*. One small follow-up PR should land **before Stage 3 closes**:
   - make Contract §4 the only claims list and add the two missing items (m5), because Stage 3 approves "the claim ceiling";
   - add the handoff to the Stage 8 and Stage 9 lists and settle image retention until handoff (M3);
   - correct the two device phrasings (N1) and add "and handoff" to the template condition (N3);
   - add the missing supersession note (m8) and correct the reconciliation record (N2);
   - record this verification on `main` (N4).

   The studio-versus-field warning (m3) has to be in place before Stage 4 closes, since that's where the dataset record is fixed.

4. **Is another full audit needed?** **No.** A narrow check of that one PR's diff against the repair list above is enough. Owner review is sufficient. The next independent Tier A audit stays at Stage 4, as planned.

To commit this report to the repository's audit bus, give me the review path and branch and grant push access to `SplitzHappen/RoyaCheck-Offline`. I'll write it there and confirm the remote branch contains it.
