# Stage 0 Compliance Audit

> **Historical/supersession note:** This audit records an earlier Stage 0 state and intentionally preserves its original findings, including the then-current Spanish localization assumption. The later Annex B / Noor case alignment supersedes that assumption. Current localization policy is governed by `docs/stages/00_rules/ANNEX_B_CASE_CONTRACT.md` and the PR #9 reconciliation.

**Stage under review:** Stage 0 — Rules, Submission Requirements, and Compliance Control
**Primary artifact:** `docs/stages/00_rules/STAGE_00_COMPLIANCE_CHECKLIST.md`
**Audited head:** `c8230e266f20e3983219784263a2916e5355b662` (branch `chatgpt/stage-00-compliance`)
**Review type:** Tier A independent adversarial compliance audit
**Audit package:** `docs/audits/stage-00/AUDIT_PACKAGE.md`

The audited files were read at the head above. This audit modifies none of them.

---

## Verdict

**FAIL / BLOCKED**

- Blocking: **1**
- Major: **4**
- Minor: **8**

How to read this verdict: Stage 0 is **blocked**. The checklist did not fail. It is a substantively sound compliance control. The one blocker is a current project-state violation that the checklist itself surfaced correctly: the public repository name and description use organizer naming. The owner can repair it in minutes. Once B-01 is repaired and the four major findings are addressed with bounded edits, this audit expects Stage 0 to qualify for **PASS WITH MINOR REPAIRS** on recheck.

---

## Executive assessment

**What is strong.** The checklist does what the roadmap asks of Stage 0:

- it keeps official sources separate from project policy;
- it refuses to treat rule silence or sponsor/tool availability as permission;
- it adopts conservative defaults where details are missing (video separation, non-editability, AI-assistance disclosure);
- it maps nearly every confirmed requirement to a later enforcing stage and an evidence item.

The Small AI technical requirements (offline core, small model, local language, human final call, abstention, no autonomous action, no hallucinated agronomy, data disclosure) are captured accurately as written and enforced downstream with unusual precision. The publicly verifiable rules held up in this audit: deadline, competition window, eligibility, English, portal and receipt, ownership and organizer licence, third-party rights, and branding.

**What blocks closure.** The official terms prohibit using the organizer's or its partners' names, titles, acronyms, logos or branding on materials produced independently in connection with an entry, without prior written consent. The public repository name contains both the organizer acronym and the competition title. So does the repository description. That literally breaches a confirmed rule, today, on the very artifact whose URL will be submitted. Repair cost is near zero. Repair cost after the URL is embedded in the README, the live demo, the videos and two submission forms is much higher. → **B-01.**

**What weakens the control.** Four major gaps:

1. The checklist under-scopes the branding clause. The clause covers partners, including Hack-Nation, and covers titles. The checklist also maps branding enforcement to Stage 0 only, although most exposure arises in Stage 8 and Stage 10 materials. → M-01
2. Several "unresolved platform details" can be resolved by the entrant now, on the participant platform. They are deferred to the last 2.5-hour work block. → M-02
3. Participant-material rows (S5/S6) carry no pinpoint references, so no independent reviewer or later recheck can verify them. → M-03
4. Third-party data/model/asset licences are not tested against the organizer's licence grant. → M-04

**Decision for the owner:**

- Execute the rename now (B-01).
- Have the builder apply the M-01 to M-04 edits.
- Then close Stage 0.

None of this reopens the locked scope.

---

## Blocking findings

### B-01 — Public repository name and description use organizer naming

1. **Finding ID:** B-01
2. **Exact issue:** The repository is named `RoyaCheck-Offline-WBG-Small-AI-for-Development-Hackathon-2026-Agriculture`. The name contains:
   - the organizer acronym "WBG";
   - the organizer's competition title, "Small AI for Development Hackathon 2026".

   The repository description reads "…built for the WBG Small AI for Development Hackathon 2026". The checklist (row 47, §6) identifies only the acronym in the name. It does not mention the description or the title.
3. **Why it matters:**
   - S1 is a confirmed rule. Participants may not use the name, titles, acronyms, logos or other branding elements of the World Bank Group or its partners on materials produced independently in connection with their entry, without prior written consent from the relevant organization.
   - The repository is such a material, and it is already public.
   - Its URL is a required submission field (row 17). It will propagate into the README, the live-demo configuration, the videos, the Hack-Nation submission and the Google Form backup.
   - The World Bank Group is the final judging authority. A visible breach of its own branding term, on the primary judged artifact, is avoidable risk.
   - Enforcement probability is uncertain. Repair cost is minutes now and grows with every artifact that embeds the URL.
4. **Evidence/source:**
   - S1 branding term. The audit corroborated it against index excerpts of the S1 page. The clause names partners explicitly, including Hack-Nation, and covers "name, titles, acronyms, logos, or other branding elements".
   - Repository metadata: name and description of the repository under audit.
   - Checklist row 47 and §6.
5. **Narrowest defensible repair:**
   - **Owner action.** Rename the repository to a product-only name, for example `RoyaCheck-Offline` or `royacheck-offline`. Removing only "WBG" is not sufficient: it leaves the competition title, and the clause covers titles.
   - Rewrite the repository description without organizer or partner names, acronyms or the competition title. Example: "Offline-first, browser-local Small AI prototype for coffee-leaf observation with human review."
   - Do not use organizer or partner logos anywhere.
   - Execute the rename before Stage 0 closes and before the URL is used in Discord, the README, the live demo, the videos or any submission form.
   - Record the new canonical URL in the checklist.
   - Do not create a new repository under the old name. GitHub's redirect from the old URL depends on the old name staying unused.

---

## Major findings

### M-01 — The branding clause is under-scoped, and its enforcement stops at Stage 0

1. **Finding ID:** M-01
2. **Exact issue:**
   - Row 47 and §6 frame the problem as the organizer acronym in the repository name.
   - Row 47 maps enforcement to Stage 0 only.
   - The checklist does not record that the clause:
     - names partners explicitly, including Hack-Nation, the Youth Summit, the Development Economics Vice Presidency, and Information and Technology Solutions;
     - covers titles as well as acronyms;
     - applies to all materials the entrant produces independently in connection with the entry.
   - Organizer naming already appears in public project documents:
     - `ROADMAP.md` line 3 ("World Bank Group Small AI for Development Hackathon 2026");
     - `ROADMAP.md` line 328 ("WBG Challenge 4 → …");
     - `docs/PROJECT_WORKFLOW.md` line 3 ("WBG Small AI for Development Hackathon 2026");
     - the checklist itself: row 22, and the §4 row "WBG challenge video".
3. **Why it matters:**
   - Most branding exposure is still ahead: the README title, the live-demo page title and domain, the UI, video title cards and thumbnails, slide frames and video narration. Those are Stage 8 and Stage 10 artifacts.
   - With enforcement mapped only to Stage 0, nothing in the control makes later stages check them.
   - The §8 summary says "rechecked Stage 6 and Stage 10", but the authoritative matrix row does not carry that mapping, and the Stage 10 red-team list in the roadmap has no branding item.
4. **Evidence/source:** S1 branding clause (see B-01); checklist row 47, §6 and §8; `ROADMAP.md` lines 3, 328 and 963–976; `docs/PROJECT_WORKFLOW.md` line 3.
5. **Narrowest defensible repair:**
   - **Restate row 47.** Summarise the clause scope: World Bank Group and named partners, including Hack-Nation; names, titles, acronyms, logos and branding; any independently produced entry material.
   - **Re-map enforcement** to Stages 0, 8 and 10. Evidence item: a naming/branding sweep of the repository name and description, README, live-demo title and domain, UI strings, video title cards and narration, and thumbnails.
   - **Adopt an explicit project policy and label it PROJECT POLICY, not confirmed rule:**
     - no organizer or partner logos or visual branding;
     - no acronyms;
     - competition names used only as plain-text factual identification where a submission or citation requires it. Example: "Submitted to the Small AI for Development Hackathon Challenge (2026)."
     - no wording that implies endorsement, partnership or official status.
   - **Record the open point.** Whether plain-text factual identification counts as "use" is not settled by the clause. The owner may ask the organizer through an official participant channel if time allows. The checklist should not present the factual-reference carve-out as established.
   - **Replace the acronym "WBG"** in public project documents with a neutral descriptor, such as "the Small AI challenge", in a follow-up edit inside each document's own stage scope.

### M-02 — Participant-resolvable platform unknowns are deferred to the final work block

1. **Finding ID:** M-02
2. **Exact issue:** These rows remain UNRESOLVED and are deferred to Stage 10:
   - row 23: video duration caps and upload fields;
   - row 24: whether one video can satisfy multiple fields;
   - row 25: whether a submission can be edited;
   - row 15: the Google Form URL and fields;
   - §4: where the 2–5 minute challenge video goes.

   Rows 48 and 49 (originality and AI-assistance rule text) are rechecked only "if platform text appears".

   S1 states that the originality, submission, format, team, technical and deadline requirements are published on the Hack-Nation platform. An accepted entrant can therefore look them up now. The §9 owner-action list does not include that look-up.
3. **Why it matters:**
   - The Stage 0 gate requires that "the deadline and submission surfaces are reconfirmed". The Google Form URL is not captured, so one of the two required submission surfaces has not been reconfirmed.
   - Deferring field inspection to Stage 10 (3:00–5:30 AM ET) puts four video deliverables and an unknown field mapping into the last work block before the protected buffer.
   - Under the separate-videos default in §5.5, the owner may be producing four videos without knowing whether two are redundant, or whether caps require different cuts.
   - "Unresolved" also stops being an honest status once the source location is known and has not been checked.
4. **Evidence/source:** S1 (requirements are published on the Hack-Nation platform); checklist rows 15, 23, 24, 25, 48 and 49, and §4, §9; `ROADMAP.md` Stage 0 gate (lines 220–225) and Stage 10 time box (lines 103–110).
5. **Narrowest defensible repair:** Add one owner action required before Stage 0 closes:
   - open the participant submission page and any rules/FAQ page on the Hack-Nation platform;
   - record the field list, any video caps and formats, the editability statement, the Google Form backup URL and fields, and any originality, AI-assistance, team or technical rule text.
   - Where a detail is genuinely not displayed, record "searched [named surfaces]; not displayed" and keep the row UNRESOLVED with a Stage 6 recheck.
   - Do not publish personal account details.

### M-03 — Participant-material rows cannot be verified by an independent reviewer or by later rechecks

1. **Finding ID:** M-03
2. **Exact issue:**
   - Rows 14–15, 17–27, 29, 31–32 and 34–42 rest on S5 (kickoff materials) and S6 (Challenge Brief). Both are non-public.
   - The checklist cites them only as whole documents, with no slide, section or page reference, version, or operative wording.
   - Row 52 cites S6 for pretrained-model use without saying what S6 establishes. The row's status says this is project policy plus an unresolved detail.
3. **Why it matters:**
   - Rows 14–42 include the Small AI obligations and most of the submission obligations. They carry CONFIRMED — PARTICIPANT MATERIAL status, yet no reviewer outside the build can test them against the text.
   - The Stage 6 and Stage 10 rechecks have no anchor for detecting change.
   - It is the main auditability weakness in an otherwise well-sourced control.
   - It also hides interpretive choices. Row 35 adopts Spanish as the local-language interaction. That is plausible for the target users, but whether it satisfies S6 depends on S6's exact wording, which the checklist does not record.
4. **Evidence/source:** Checklist §1 (S5 and S6 definitions), rows 14–42 and 52. This auditor could not access S5 or S6. Every S5/S6 row is therefore **unverified by this audit**: it is neither confirmed nor disputed.
5. **Narrowest defensible repair:**
   - For each S5/S6 row, add a pinpoint reference: document title and version, plus slide, section or page.
   - Where publication is permitted, add a short quotation of the operative wording. Where it is not, add the pinpoint reference only and keep a copy in the entrant's own records.
   - For row 35, quote or paraphrase the S6 local-language wording precisely enough to show why Spanish text interaction satisfies it.
   - For row 52, state what S6 says about model size and on-device execution, and keep the pretrained-model permission explicitly as project policy.

### M-04 — Third-party licences are not tested against the organizer's licence grant

1. **Finding ID:** M-04
2. **Exact issue:**
   - Row 45 states the confirmed rule: submission grants the World Bank Group a worldwide, non-exclusive, royalty-free licence to reproduce, display, record, publish and present the submission, including for educational, promotional and knowledge-sharing purposes. Its evidence is "license compatibility check", mapped to Stages 4, 7 and 10.
   - The roadmap's Stage 4 licence gate tests four things for each dataset, encoder/weights and runtime: training/use permission, redistribution through the public repo and live demo, attribution, and repository-licence compatibility.
   - The gate does not test whether the entrant can grant the organizer's licence over third-party content that appears in submitted materials, such as dataset images shown in videos or the demo, or music, fonts and footage in videos.
3. **Why it matters:**
   - Agricultural image datasets and pretrained weights often carry non-commercial, share-alike, no-redistribution or attribution-specific terms.
   - The entrant cannot grant rights they do not hold. S1 also requires participants to hold all rights necessary to submit their materials.
   - This is the most plausible route to an actual rights/IP problem later in the build.
   - It is not blocking yet, because nothing has been selected or submitted.
4. **Evidence/source:** S1 (organizer licence grant; third-party rights requirement); checklist rows 43, 45 and 46; `ROADMAP.md` Stage 4 licence gate (lines 450–465).
5. **Narrowest defensible repair:**
   - In row 45's evidence column, and as a Stage 4 licence-gate criterion, add: "Third-party content that will appear in submitted materials (repository, live demo, videos) is licensed in a way compatible with the organizer's stated uses, with required attribution. Otherwise it is excluded from those materials or replaced."
   - Re-test this at Stage 10 for the video and asset inventory.

---

## Minor findings

### m-01 — No earliest-deadline rule and no UTC equivalent

1. **Finding ID:** m-01
2. **Exact issue:** Row 11 says 9:00 AM ET on 4 October controls "unless the participant platform itself shows a contradictory later instruction". There is no rule for conflicting surfaces, for example the Google Form closing earlier. No UTC equivalent is recorded.
3. **Why it matters:** The deadline is the highest-consequence control, and time-zone conversion is a common failure point. The 3.5-hour buffer absorbs most discrepancies, which is why this is minor.
4. **Evidence/source:**
   - S3. The audit corroborated the 4 October, 9:00 AM ET project-submission deadline against index excerpts of the cited event page.
   - Checklist row 11.
   - On 4 October 2026, US Eastern Time is EDT (UTC−4), so 9:00 AM ET is 13:00 UTC.
5. **Narrowest defensible repair:**
   - Add: "If official surfaces state different deadlines, the earliest controls. The protected buffer is measured against it."
   - Add: "9:00 AM ET = 9:00 AM EDT = 13:00 UTC."

### m-02 — The originality disposition contains an "accepted" loophole

1. **Finding ID:** m-02
2. **Exact issue:** §5.2 says definitive code and artifacts are "created/accepted within the competition build process". "Accepted" could be read as allowing project-specific work prepared earlier to be imported and merely accepted during the window. That contradicts the preceding bullet and row 51.
3. **Why it matters:** It weakens the one conservative position that protects against the unresolved originality rule.
4. **Evidence/source:** Checklist §5.2, row 51; S2 (participants are expected to build and demonstrate during the competition period).
5. **Narrowest defensible repair:** Replace with: "Definitive project-specific code, trained/fitted artifacts, UI and deployment are created during the competition window. Third-party libraries, pretrained components and public datasets are used under licence and disclosed."

### m-03 — The referral-code row blurs registration and submission

1. **Finding ID:** m-03
2. **Exact issue:** Row 16 frames referral code `WBGSmallAIGADS` as required "by the organizer entry route" at submission. The publicly confirmed use of the code is at application/registration.
3. **Why it matters:** The material risk is not the submission field. It is whether the entrant's Hack-Nation registration was linked to this challenge. That belongs to row 4A.
4. **Evidence/source:** S1 (referral code given for the registration step); checklist rows 4A and 16.
5. **Narrowest defensible repair:**
   - Restate row 16: "Code used at registration. Enter it at submission only if a field asks for it."
   - Extend the row 4A owner action: confirm that the platform account shows the entrant registered and accepted for this challenge.

### m-04 — Status vocabulary is applied inconsistently

1. **Finding ID:** m-04
2. **Exact issue:**
   - Rows 52, 53, 54 and 60 use composite statuses that §2 does not define.
   - OWNER ACTION REQUIRED is defined but never used in the matrix. Row 47, which requires owner action, is marked CONFIRMED.
3. **Why it matters:** It blurs the confirmed-versus-policy distinction that the checklist otherwise maintains well.
4. **Evidence/source:** Checklist §2; rows 47, 52, 53, 54 and 60.
5. **Narrowest defensible repair:** Either:
   - add a second "Owner action" column; or
   - split each composite row into a CONFIRMED part and a PROJECT POLICY part, and mark row 47 OWNER ACTION REQUIRED until B-01 is executed.

### m-05 — The checklist does not address post-deadline integrity or judging-period availability

1. **Finding ID:** m-05
2. **Exact issue:** The checklist does not address:
   - commits pushed to the judged repository after the deadline;
   - live-demo uptime through judging (free hosting tiers may sleep or expire);
   - entrant availability for any finalist step.
3. **Why it matters:** Late entries are ineligible (row 12). Post-deadline changes to a judged artifact create avoidable doubt, and the rules are silent on them, so silence is not permission. The event schedule lists finalist notification and a virtual finalist pitch after submission. This audit could not confirm whether those apply identically to this challenge.
4. **Evidence/source:** Checklist rows 12, 17 and 18; S3 schedule. This audit corroborated it against index excerpts only.
5. **Narrowest defensible repair:** Add PROJECT POLICY rows:
   - tag the submitted commit and reference it in the submission where a field allows;
   - make no default-branch pushes after the deadline until judging ends, unless the platform permits;
   - keep the live demo up through judging;
   - have the owner confirm availability for any finalist step published on official surfaces.

### m-06 — Receipt evidence may expose personal data

1. **Finding ID:** m-06
2. **Exact issue:** §4 sends receipt evidence to "Repository/private evidence package". Receipt screenshots typically show an email address and account details.
3. **Why it matters:** Row 46 requires privacy discipline for project materials. That should extend to the entrant's own data in a public repository.
4. **Evidence/source:** Checklist §4 and rows 46 and 60.
5. **Narrowest defensible repair:**
   - Store receipts privately.
   - If anything is published, publish only a redacted statement that receipt was obtained on both surfaces.

### m-07 — Row 50 wording leans toward silence-as-permission

1. **Finding ID:** m-07
2. **Exact issue:** Row 50 says "No accessible official text located that forbids AI-assisted review." That frames absence of prohibition as the operative fact, which the checklist's own source-use rule rejects. §5.3 (the disposition) is correctly conservative. §5.3 omits disclosure, which §5.1 covers only for development tooling.
3. **Why it matters:** Consistency of the rule-silence posture.
4. **Evidence/source:** Checklist §1 source-use rule, row 50, §5.1 and §5.3.
5. **Narrowest defensible repair:**
   - Rephrase row 50 to "Rule text not located; treated as unresolved."
   - Add to §5.3: "Independent AI review is included in the AI/tooling disclosure."

### m-08 — Roadmap status and next action are stale against the Stage 0 PR

1. **Finding ID:** m-08
2. **Exact issue:** On this branch, `ROADMAP.md`:
   - still lists Roadmap/process architecture as "In review";
   - lists Stage 0 as "Not started";
   - gives as the immediate next action: "complete the independent roadmap audit reconciliation… then begin Stage 0".
3. **Why it matters:** It is a navigation and consistency issue only. It may be outside this PR's authorized file scope.
4. **Evidence/source:** `ROADMAP.md` lines 1023–1044.
5. **Narrowest defensible repair:** Update the status table and next action at the point the owner records the Stage 0 decision, within whatever PR is authorized to touch `ROADMAP.md`.

---

## Source-authority review

**Verification performed.** Direct retrieval of S1–S4 was not available to this auditor. Key terms were corroborated through search-index excerpts of the cited S1 and S3 pages, and cross-checked against consistent public reproductions of the S1 terms. Results:

| Checklist claim | Source | Audit result |
|---|---|---|
| Sectors: Health, Agriculture, Tourism; one sector per entry | S1/S2 | Corroborated |
| Ages 18–35; individual or team of up to 4 | S1/S2 | Corroborated |
| Competition 3–4 October 2026 | S1–S4 | Corroborated |
| Submission deadline 4 October, 9:00 AM ET | S3 | Corroborated |
| Entries must comply with submission, format, team, originality, technical and deadline requirements published on Hack-Nation | S1 | Corroborated. This supports the UNRESOLVED classification of rows 48–51 and also grounds M-02. |
| Submissions in English | S1 | Corroborated |
| Only entries formally submitted and confirmed received through the official platform are considered | S1 | Corroborated |
| Participants retain ownership; World Bank Group receives a worldwide, non-exclusive, royalty-free licence | S1/S2 | Corroborated |
| Participants must hold necessary rights; no infringement of copyright, trademark, privacy, confidentiality, IP or contract rights | S1 | Corroborated |
| No use of World Bank Group/partner names, titles, acronyms, logos or branding without prior written consent | S1 | Corroborated. The scope is broader than the checklist records (M-01). |
| Referral code `WBGSmallAIGADS` | S1 | Corroborated for registration (m-03) |
| Active World Bank Group staff/consultants/interns ineligible; member-country requirement | S1/S2 | Not independently corroborated in this audit. Consistent with the cited source type; no contrary evidence found. |
| All S5/S6 participant-material rows | S5/S6 | **Not verifiable by this audit** (M-03) |

**Assessment.**

- The source hierarchy is appropriate.
- No row was found to rely on a secondary summary where a primary source exists.
- No publicly verifiable row was found to overstate its source, except:
  - the branding row, which **understates** its source (M-01);
  - the referral-code row, which shifts its context (m-03).
- The status vocabulary is well designed but inconsistently applied (m-04).

---

## Submission-mechanics review

| Item | Checklist handling | Assessment |
|---|---|---|
| Deadline / time zone | 9:00 AM ET, 4 October; 5:30 AM ET buffer | Correct and corroborated. Add the earliest-controls rule and the UTC equivalent (m-01). |
| Two submission surfaces | Hack-Nation platform plus Google Form backup | Correctly treated as two hard obligations with receipts. The Google Form URL is not captured, so the surface is not yet reconfirmed (M-02). |
| Public GitHub | Required; logged-out test | Correct. The repository name and description must be repaired first (B-01). Integrity after the deadline is not addressed (m-05). |
| Live demo | Required; hosts named in kickoff treated as examples, not exclusive | Correct and appropriately non-restrictive. Availability through judging is not addressed (m-05). |
| Demo / Tech / Team videos | Separate obligations; caps unresolved | The conservative default is sufficient for compliance. Deferring field inspection to Stage 10 is the weakness (M-02). |
| 2–5 minute challenge video | Separate compliant cut unless overlap is proven | Correct. Hard bounds are recorded and not assumed identical to the Demo Video. |
| Video overlap / length | Treat as separate until platform proves otherwise | Sufficient as a fallback. Resolve early so the conservative default does not cost avoidable production time. |
| Editability | Assume not editable | Correct, and the right conservative posture. |
| Receipt evidence | Both surfaces, retained | Correct. Store privately (m-06). |
| Challenge notification / team state | Owner confirmation | Correct as owner actions. |

The conservative fallbacks are **sufficient to prevent a compliance failure**. They are **not sufficient to prevent a schedule failure** unless the platform look-up in M-02 happens before Stage 10.

---

## Originality / AI-assistance rule-silence review

- **Originality (row 48):** correctly UNRESOLVED. S1 points to requirements published on the Hack-Nation platform, and this audit found no public text of them. The checklist does not infer permission. The §5.2 disposition is conservative apart from the "accepted" wording (m-02).
- **AI coding assistance (row 49):** correctly UNRESOLVED. The checklist expressly refuses to treat sponsor or tool availability as permission. Conservative disclosure plus stop-and-conform is the right disposition. It invents no prohibition, and it relies on no permission.
- **Outside review (row 50):** the disposition is correct. The interpretation wording leans toward silence-as-permission (m-07).
- **Pre-existing boilerplate (row 51):** correctly UNRESOLVED. The checklist correctly anchors the project policy to S2's expectation that participants build during the competition period, without overstating it as a prohibition on third-party libraries.
- **Overall:** the posture is right. It neither creates restrictions the sources do not establish nor relies on silence. The remaining improvement is to actually check where S1 says the rules are published (M-02).

---

## Small-AI compliance review

Row by row against the audit package list:

| Requirement | Rows | Assessment |
|---|---|---|
| Targeted / use-case-driven AI | 2 | Captured; enforced at Stages 3, 4, 7 and 10 |
| Constrained-environment value | 3 | Captured; enforced at Stages 1, 4, 8 and 9 |
| Realistic device access | 33 | Captured. The roadmap's Stage 4 "honest device class" and the Stage 9 physical-device limitation statement are adequate. |
| Offline core | 32, 53 | Captured. Stage 9's hard-reload protocol is strong evidence design. |
| Small / sideloadable model | 34 | Captured as measured bytes. Optional strengthening: state the transfer path that makes the model sideloadable, for example a single downloadable model file. This is a suggestion, not a finding. |
| Local language | 35 | Captured. The adequacy of Spanish depends on S6's wording (M-03). |
| Human final call | 36 | Captured; the Stage 4 schema and Stage 9 authority tests are strong |
| Uncertainty / fail-safe | 37 | Captured; enforced at Stages 4, 7, 8 and 9 with OOD challenge-set design |
| No autonomous action | 38 | Captured |
| No hallucinated agronomy | 39 | Captured; aligned with the roadmap's canonical exclusions |
| Data source / licence / size / coverage | 41, 42 | Captured |
| AI-value explanation | 29, 30 | Captured |
| Working-prototype proof | 28, 31 | Captured |
| Responsible AI / privacy | 46 | Captured; the Stage 4 privacy rules are specific |

This is the strongest part of the artifact. No Small-AI requirement that the checklist records lacks a mapping. Whether the list is complete against S6 cannot be verified by this audit (M-03).

---

## Rights / licensing / branding review

- **Participant ownership (row 44):** correct.
- **Organizer licence (row 45):** the rule is stated correctly. The enforcement test is incomplete (M-04).
- **Third-party IP / privacy / confidentiality (rows 43, 46):** correct and appropriately broad, covering code, images, models, datasets, music and video.
- **Dataset / model / runtime redistribution:** well handled by the roadmap's Stage 4 licence gate, including the rule against re-hosting datasets. Add the organizer-licence compatibility test (M-04).
- **Repository licence (row 54):** correctly classified. No competition rule establishing a LICENSE was found. Adding one is project policy, and it is sensible because a public repository without a licence grants judges and the organizer no re-use rights beyond the competition terms.

**Branding.** Answers to audit package question G:

1. **Is it a real compliance risk under the cited terms?** Yes. The S1 clause is confirmed. The repository is an independently produced entry material, and its name and description contain the organizer acronym and the competition title. This is a literal breach as things stand, not a hypothetical future one.
2. **Severity:** BLOCKING for Stage 0 closure and for submission.
   - It is not an eligibility rule, and the probability of enforcement is uncertain.
   - But the severity definition "materially violate a confirmed competition rule" is met, the organizer is the final judge, and the repair is nearly free.
   - It does not block parallel de-risking work that the roadmap already permits.
3. **Narrowest defensible repair:**
   - Rename the repository to a product-only name.
   - Neutralise the description.
   - Use no logos.
   - Remove acronyms from public materials.
   - Use competition names only as plain-text factual identification where required, labelled as project policy.
   - Optionally, seek organizer clarification on factual references.

   Removing only "WBG" is not defensible, because the clause covers titles (B-01, M-01).
4. **Can Stage 0 close before the repair?**
   - Recommended: no. Execute the rename before closure. It takes minutes, and every later stage embeds the URL.
   - Minimum acceptable alternative if the owner decides otherwise: closure on a recorded owner decision, with the rename made a hard Stage 6 gate before any artifact or channel uses the URL. This audit does not recommend the alternative.

---

## Downstream enforcement review

- Every CONFIRMED row in §3 has an enforcing stage and an evidence item. Spot-checks against `ROADMAP.md` confirm that the named stages contain matching controls:
  - Stage 4: licence gate, privacy rules, schema, budgets.
  - Stage 8: Spanish UI and authority controls.
  - Stage 9: offline protocol, authority tests, claims table.
  - Stage 10: README contents, licence, disclosure, receipts.
- **Gaps:**
  - Branding is mapped to Stage 0 only, and the Stage 10 red-team list has no branding item (M-01).
  - The organizer-licence compatibility test is absent from the Stage 4 licence-gate criteria (M-04).
  - There is no enforcement for post-deadline repository integrity or judging-period demo availability (m-05).
- **Requirement existing only as prose:** the §8 claim that branding is "rechecked Stage 6 and Stage 10" is not carried into row 47 or the roadmap stage text (M-01).

---

## Stage-closure assessment

The Stage 0 gate in `ROADMAP.md` lines 220–225 requires four things:

| Gate condition | Status |
|---|---|
| Every listed compliance item has a source and status | **Met**, subject to the status-vocabulary cleanup (m-04) |
| Every confirmed requirement is mapped to an enforcing stage and evidence | **Substantially met**; gaps in M-01 and M-04 |
| Unresolved rule silence has an explicit owner disposition | **Pending.** §5 dispositions exist; the owner's acceptance is listed but not yet recorded (§9 item 4). |
| Deadline and submission surfaces reconfirmed | **Partially met.** Deadline yes; Google Form surface no (M-02). |

The audit also finds that one confirmed rule is currently breached (B-01).

**Conclusion:** Stage 0 cannot close as written. It can close once:

1. B-01 is executed by the owner;
2. the M-01 to M-04 edits are made by the builder;
3. the owner records the four §9 decisions, plus the M-02 platform look-up.

---

## Required repairs before closure

### P0 — must be done before Stage 0 closes

1. **B-01 (owner):**
   - Rename the repository to a product-only name with no organizer or partner name, acronym or competition title.
   - Neutralise the repository description.
   - Record the new canonical URL in the checklist.
2. **M-02 (owner, then builder):**
   - Inspect the participant submission page and rules on the Hack-Nation platform.
   - Record the fields, video caps, editability, the Google Form URL and fields, and any originality, AI-assistance, team or technical rule text. Otherwise record "searched; not displayed".
3. **§9 owner decisions recorded:**
   - participant access;
   - Discord notification;
   - acceptance of the §5 dispositions as amended by m-02 and m-07.

### P1 — builder edits before closure

4. **M-01:**
   - Restate the branding clause scope in row 47.
   - Re-map enforcement to Stages 0, 8 and 10, with a sweep evidence item.
   - Adopt the plain-text factual-identification policy, labelled PROJECT POLICY.
   - Schedule removal of the "WBG" acronym from public project documents.
5. **M-03:** Add pinpoint references for every S5/S6 row, and state the S6 basis for Spanish (row 35) and for row 52.
6. **M-04:** Add the organizer-licence compatibility test to row 45 and to the Stage 4 licence-gate criteria, with a Stage 10 re-test.

### P2 — fold into the same edit pass, or defer with a record

7. **m-01:** Add the earliest-deadline-controls rule and "9:00 AM ET = 13:00 UTC".
8. **m-02:** Remove "accepted" from §5.2.
9. **m-03:** Reframe the referral-code row and extend the row 4A owner check.
10. **m-04:** Normalise statuses; use OWNER ACTION REQUIRED for row 47.
11. **m-05:** Add post-deadline integrity, demo-uptime and finalist-availability policies.
12. **m-06:** Store receipts privately; publish redacted statements only.
13. **m-07:** Reword row 50; add review disclosure to §5.3.
14. **m-08:** Update the roadmap status and next action within the authorized PR scope.

This audit does not mark any finding resolved. Reconciliation belongs to the builder. Final authority rests with the owner.
