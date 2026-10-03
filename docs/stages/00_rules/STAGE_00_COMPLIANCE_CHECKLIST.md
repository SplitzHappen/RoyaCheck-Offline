# Stage 0 — Rules, Submission Requirements, and Compliance Control

**Stage:** 0  
**Status:** In review  
**Purpose:** Establish one authoritative compliance checklist for the Small AI for Development Hackathon 2026 before later stages create technical or submission artifacts.

This document is a compliance control, not a product specification. It records what the available official/public competition materials establish, what remains unresolved at the participant-platform level, and how later stages must enforce each requirement.

---

## 1. Source authority

The following sources govern this checklist.

| ID | Source | Authority / use |
|---|---|---|
| **S1** | Official Global AI & Digital Summit / Small AI Hackathon Challenge page: https://www.worldbank.org/en/events/2026/10/19/global-ai-and-digital-summit-2026 | Primary public organizer source for eligibility, competition structure, sector choice, submission conditions, rights, branding restrictions, English-language requirement, judging framing, and competition window. |
| **S2** | Official Small AI for Development Hackathon FAQ PDF: https://thedocs.worldbank.org/en/doc/a2d80d7a647019e16e7265a3563ce416-0320012026/original/Small-AI-for-Development-Hackathon-FAQs.pdf | Primary public organizer FAQ for sector scope, eligibility, team size, ownership, competition dates, and expectation that participants build/demonstrate during the competition period. |
| **S3** | Official Hack-Nation 7th Global AI Hackathon Luma event page: https://luma.com/z3za7zow | Primary event-host surface for the **9:00 AM ET, 4 October 2026** project-submission deadline and general event schedule. |
| **S4** | Hack-Nation Global AI Hackathon page: https://hack-nation.ai/hackathon | Official Hack-Nation event surface for event identity, dates, format, and general participation context. |
| **S5** | Official Hack-Nation participant kickoff materials shown during the 3 October competition kickoff | Participant-source authority for submission mechanics not exposed on the public pages: app submission + Google Form backup; Demo Video; Tech Video; Team Video; public GitHub repository; live demo; team/submission mechanics; challenge notification; general judging criteria. |
| **S6** | Official Small AI for Development Challenge Brief supplied to participants | Participant-source authority for Small AI constraints, sector-specific obligations, human-in-the-loop requirements, uncertainty/fail-safe behavior, local-language interaction, data disclosure requirements, AI-value explanation, working-prototype expectations, and the WBG 2–5 minute video requirement. |

### Source-use rule

- A **confirmed requirement** must be supported by S1–S6.
- Participant-platform details that are not visible in accessible official materials remain **unresolved** rather than inferred.
- Sponsor/tool availability is **not** treated as proof of unrestricted tool permission.
- Secondary web summaries are not authoritative for compliance when S1–S6 cover the point.

---

## 2. Status vocabulary

- **CONFIRMED** — directly supported by an official/public or official participant source.
- **CONFIRMED — PARTICIPANT MATERIAL** — supported by official participant kickoff/brief material that is not publicly indexed.
- **UNRESOLVED PLATFORM DETAIL** — organizer states that a rule/detail exists on the participant platform, but the exact text was not located in the accessible sources.
- **PROJECT POLICY** — a conservative implementation rule adopted to avoid relying on silence as permission.
- **OWNER ACTION REQUIRED** — a confirmed or unresolved issue requiring an explicit owner decision before Stage 0 closes.
- **NOT APPLICABLE** — does not apply to the solo entry as currently scoped.

---

# 3. Authoritative compliance matrix

| # | Requirement / issue | Source | Status | Interpretation | Enforcing stage | Evidence required |
|---:|---|---|---|---|---|---|
| 1 | Build for one sector: Health, Agriculture, or Tourism | S1, S2, S6 | CONFIRMED | Entry uses exactly one selected sector. Current route is Agriculture. | 3, 6, 10 | Public product scope and final submission sector selection agree. |
| 2 | Small AI must be targeted and use-case driven | S1, S6 | CONFIRMED | AI should solve one bounded problem, not become a broad general assistant. | 3, 4, 7, 10 | Product scope, architecture, demo, README. |
| 3 | Demonstrate value under constrained conditions | S1, S6 | CONFIRMED | The entry must show why the intervention fits real connectivity/device/infrastructure constraints. | 1, 4, 8, 9 | Problem evidence, architecture, offline proof, limitations. |
| 4 | Individual/solo entry is allowed | S1, S2, S5 | CONFIRMED | A team of one is permitted. | 0, 10 | Platform team/submission entry shows the entrant only. |
| 5 | Team size is at most four; each team member must be registered | S1, S2, S5 | CONFIRMED | Not a constraint for the solo route beyond ensuring no undeclared team member is added. | 0, 10 | Platform team state. |
| 6 | Participant age eligibility is 18–35 | S1, S2 | CONFIRMED | Entrant must satisfy privately; personal eligibility evidence need not be reproduced in the public repository. | 0 | Owner attestation / platform eligibility. |
| 7 | Participant must be from a World Bank member country | S1, S2 | CONFIRMED | Entrant must satisfy privately. | 0 | Owner/platform eligibility. |
| 8 | Active World Bank Group staff, consultants, and interns are ineligible | S1 | CONFIRMED | Entrant must not fall in an excluded category. | 0 | Owner attestation / platform eligibility. |
| 9 | Competition materials/submission must be in English | S1 | CONFIRMED | Judge-facing submission text and required videos must be in English. Product UI may also include the required local-language interaction. | 8, 10 | Submission fields, README, videos. |
| 10 | Competition window is 3–4 October 2026 | S1, S2, S3, S4 | CONFIRMED | Definitive competition implementation/submission occurs in this window. | 0, 6, 10 | Repository history and submission receipt. |
| 11 | Project submission deadline is **4 October 2026, 9:00 AM ET** | S3, S5 | CONFIRMED | This is the controlling project-submission deadline unless the participant platform itself shows a contradictory later instruction. | 0, 10 | Deadline recorded in roadmap; submission receipt before deadline. |
| 12 | Late/incomplete/improperly submitted entries are not eligible | S1, S5 | CONFIRMED | Submission completion is a hard requirement; no feature work may consume the protected buffer. | 10 | Platform + backup confirmation/receipt. |
| 13 | Entry must be submitted through the designated competition portal and confirmed received | S1 | CONFIRMED | A local repo or video alone is not an entry. | 10 | Platform confirmation/receipt. |
| 14 | Hack-Nation participant submission is required on **app.hack-nation.ai** | S5 | CONFIRMED — PARTICIPANT MATERIAL | Primary Hack-Nation submission surface. | 10 | Successful platform submission. |
| 15 | A Google Form backup of the submission is also required | S5 | CONFIRMED — PARTICIPANT MATERIAL | Submission must be duplicated in the backup form. Exact form URL/fields remain to be captured. | 10 | Form confirmation/receipt. |
| 16 | Referral code **WBGSmallAIGADS** is required by the organizer entry route | S1 | CONFIRMED | Use where the designated competition submission asks for it. | 10 | Submission field / screenshot if applicable. |
| 17 | Public GitHub repository is required | S5 | CONFIRMED — PARTICIPANT MATERIAL | Repository must be publicly accessible to judges. | 10 | Public URL tested in logged-out/incognito session. |
| 18 | Live demo is required | S5 | CONFIRMED — PARTICIPANT MATERIAL | A publicly reachable product demo must exist. Named hosts in kickoff material are examples; exclusivity was not established. | 7, 8, 10 | Public URL tested from clean session. |
| 19 | Demo Video is required | S5 | CONFIRMED — PARTICIPANT MATERIAL | Separate Hack-Nation submission item unless platform proves it can be combined with another field. | 10 | Video link/upload. |
| 20 | Tech Video is required | S5 | CONFIRMED — PARTICIPANT MATERIAL | Separate Hack-Nation submission item. | 10 | Video link/upload. |
| 21 | Team Video is required | S5 | CONFIRMED — PARTICIPANT MATERIAL | For a solo entry, this becomes a concise entrant introduction. | 10 | Video link/upload. |
| 22 | WBG challenge requires a **2–5 minute video** | S6 | CONFIRMED — PARTICIPANT MATERIAL | Do not assume this is identical to the Hack-Nation Demo Video until the submission fields/limits prove it. | 10 | Required WBG video placed in the correct field. |
| 23 | Exact Demo/Tech/Team video duration caps and upload fields | S5 | UNRESOLVED PLATFORM DETAIL | Current accessible official sources do not expose the exact limits. | 10 | Read participant submission form before recording final cuts. |
| 24 | Whether one video can satisfy multiple required fields | S5, S6 | UNRESOLVED PLATFORM DETAIL | Default policy: prepare logically separate deliverables until the platform proves overlap is allowed. | 10 | Field inspection / platform instructions. |
| 25 | Whether a submitted entry can be edited after first submission | S1, S5 | UNRESOLVED PLATFORM DETAIL | Do not rely on editability. Submit a complete valid package before the protected buffer; update only if platform explicitly permits it. | 10 | Platform behavior/instructions. |
| 26 | Challenge selection should be communicated in Discord | S5 | CONFIRMED — PARTICIPANT MATERIAL | Kickoff instructions asked participants to identify their selected challenge in Discord. Current completion status must be confirmed by the owner. | 0 | Owner confirmation / Discord action if still pending. |
| 27 | Solo participant must be represented correctly in “team & submission” | S5 | CONFIRMED — PARTICIPANT MATERIAL | Team state should show one entrant and no undeclared collaborator. | 0, 10 | Platform team state. |
| 28 | Working prototype is expected | S2, S6 | CONFIRMED | Documentation alone is insufficient. | 7, 8, 10 | Live working user-value loop. |
| 29 | Entry must explain what AI capability is used | S6 | CONFIRMED — PARTICIPANT MATERIAL | State that the core learned capability is computer vision/pattern recognition. | 4, 7, 10 | README/tech video/submission. |
| 30 | Entry must explain why AI adds value beyond simpler digital tools | S1, S6 | CONFIRMED | AI must perform a distinct task that a form/spreadsheet/search alone cannot. | 1, 3, 10 | Problem/value explanation. |
| 31 | Proof that the AI works on the chosen sector is required | S6 | CONFIRMED — PARTICIPANT MATERIAL | Show measured image classification/abstention behavior, not only architecture diagrams. | 7, 9, 10 | Evaluation + demo evidence. |
| 32 | Core feature must work offline | S5, S6 | CONFIRMED — PARTICIPANT MATERIAL | Core rust proposal must not depend on a live network. | 4, 7, 8, 9 | Hard-reload offline test and network evidence. |
| 33 | Solution should run on a device the intended user can realistically access | S1, S6 | CONFIRMED | Device assumptions must be stated and tested honestly. | 1, 4, 9 | Device/browser evidence + limitation. |
| 34 | Model files must be small enough to side-load / transfer over weak connectivity | S6 | CONFIRMED — PARTICIPANT MATERIAL | Report actual model/runtime/cached-bundle size rather than using “small” rhetorically. | 4, 7, 9 | Byte/MB measurement. |
| 35 | At least one local-language interaction is required | S6 | CONFIRMED — PARTICIPANT MATERIAL | Current product policy: Spanish text interaction at minimum. | 8, 10 | Visible Spanish UI interaction in demo. |
| 36 | Human makes the final call | S6 | CONFIRMED — PARTICIPANT MATERIAL | AI proposal cannot silently become the formal observation. | 4, 8, 9 | Separate AI/human fields + authority tests. |
| 37 | Tool must flag uncertainty / fail safely | S6 | CONFIRMED — PARTICIPANT MATERIAL | `not sure` and human-review routing are first-class requirements. | 4, 7, 8, 9 | Abstention rule + challenge tests. |
| 38 | Tool must not autonomously act on the user’s behalf | S6 | CONFIRMED — PARTICIPANT MATERIAL | No autonomous spraying, selling, contacting, or formal diagnosis. | 3, 8, 9 | UX/action audit. |
| 39 | Avoid hallucinated agronomy | S6 | CONFIRMED — PARTICIPANT MATERIAL | No generative treatment/advisory content in the rust decision loop. | 3, 8, 10 | Product exclusions + demo inspection. |
| 40 | Cite problem/gap data | S6 | CONFIRMED — PARTICIPANT MATERIAL | Public factual development claims need source, year/context, and limitations where material. | 1, 9, 10 | Source citations/evidence table. |
| 41 | Name every learning/evaluation dataset, source, license, size, and coverage limits | S6 | CONFIRMED — PARTICIPANT MATERIAL | Dataset limitations are part of the evidence, not optional caveats. | 4, 7, 9, 10 | Dataset record/evidence table. |
| 42 | Provided datasets are suggestions, not necessarily a closed mandatory list | S6 | CONFIRMED — PARTICIPANT MATERIAL | Better external/public data may be used if terms are checked. | 4, 7 | Dataset decision + license verdict. |
| 43 | Third-party rights must be held for submitted materials | S1 | CONFIRMED | Code, images, models, datasets, music/video assets, and other materials must not knowingly infringe third-party rights. | 4, 7, 10 | License/attribution records. |
| 44 | Participants retain ownership of their submissions | S1, S2 | CONFIRMED | Entrant keeps ownership subject to competition terms. | 0 | No further action. |
| 45 | Submission grants the organizer a broad non-exclusive, royalty-free license for competition/education/promotion/knowledge sharing | S1 | CONFIRMED | Do not submit assets for which this downstream use would violate third-party terms. | 4, 7, 10 | License compatibility check. |
| 46 | Privacy/confidentiality/third-party rights must be respected | S1 | CONFIRMED | Do not expose personal/confidential data or unlicensed images. | 4, 8, 9, 10 | Privacy/data audit. |
| 47 | Organizer/partner names, acronyms, logos, or branding may not be used on independently produced materials without written consent | S1 | CONFIRMED | **Immediate compliance risk:** the current repository name contains the organizer acronym. No organizer logo/branding should be used. Repository/title naming should be repaired or explicitly cleared before Stage 0 closes. | 0 | Owner decision + repository/material naming review. |
| 48 | Exact participant-platform originality rule | S1 | UNRESOLVED PLATFORM DETAIL | S1 states that entries must comply with originality requirements published on Hack-Nation, but accessible official materials do not expose the detailed rule text. | 0, 6, 10 | Owner disposition; recheck if platform text appears. |
| 49 | Exact AI coding-assistant / AI-assisted-development rule | S1, S5 | UNRESOLVED PLATFORM DETAIL | Tool sponsors/resources exist, but that does not itself prove unrestricted use. | 0, 6, 10 | Conservative disclosure of AI-assisted development; stop/modify if contradictory rule appears. |
| 50 | Exact outside non-team review/audit rule | S1 | UNRESOLVED PLATFORM DETAIL | No accessible official text located that forbids AI-assisted review. Sole entrant remains accountable; no undeclared human team member is added. | 0, 6, 10 | Conservative disclosure; recheck if platform text appears. |
| 51 | Exact rule for pre-existing project-specific implementation/boilerplate | S1, S2 | UNRESOLVED PLATFORM DETAIL | S2 says participants are expected to build/demonstrate during the competition period. Project policy is therefore to keep definitive project-specific implementation in the competition build and use external/open-source dependencies only under license and attribution. | 0, 6, 10 | Repository history, disclosure, dependency licenses. |
| 52 | Pretrained model use | S6 | PROJECT POLICY / PLATFORM DETAIL UNRESOLVED | Pretrained compact encoders may be used only if their license permits the intended use/redistribution and no later platform rule forbids them. | 4, 7 | Model license verdict + disclosure. |
| 53 | Cloud/API use | S6 | CONFIRMED CORE CONSTRAINT + PROJECT POLICY | The core feature must work offline; auxiliary online services cannot be necessary for the rust/no-rust/not-sure inference. | 4, 7, 8, 9 | Architecture + offline proof. |
| 54 | Repository must carry an explicit open-source license | S1, S5 | UNRESOLVED / PROJECT POLICY | A public repo is required; an explicit repo license was not found as a specific competition rule. Project policy is to add a compatible explicit LICENSE before final submission. | 7, 10 | LICENSE file + dependency compatibility. |
| 55 | Judging includes technical merit/depth | S1, S5 | CONFIRMED | Technical credibility matters, but not at the expense of Small AI fit or completion. | 7, 9, 10 | Working evidence and technical explanation. |
| 56 | Judging includes development relevance, design, and inclusivity | S1 | CONFIRMED | Development problem fit and inclusion are first-order judging dimensions. | 1, 3, 10 | Problem/value narrative and localization. |
| 57 | Generic Hack-Nation judging also emphasizes communication and innovation/creativity | S5 | CONFIRMED — PARTICIPANT MATERIAL | Video/documentation quality and a clear differentiated story matter. | 9, 10 | README/video/pitch quality. |
| 58 | Exact scoring weights | S1, S5 | UNRESOLVED PLATFORM DETAIL | Do not invent numeric weights. | 10 | None unless platform publishes them. |
| 59 | Only official submission channels count | S1 | CONFIRMED | Email/social-media/direct outreach is not a valid entry submission. | 10 | Platform/form receipts. |
| 60 | Submission receipt evidence should be retained | S1 | PROJECT POLICY FROM CONFIRMED RULE | Because only entries confirmed received are eligible, save confirmation screenshots/receipts for both required submission surfaces. | 10 | Receipt evidence. |

---

# 4. Submission-mechanics matrix

| Artifact / action | Required? | Known format / length | Destination | Can overlap? | Current Stage 0 status |
|---|---|---|---|---|---|
| Challenge selection | Yes | Agriculture | Hack-Nation platform / Discord notification per kickoff | N/A | **Owner confirmation needed** that Discord notification is complete. |
| Public GitHub repository | Yes | Public URL | Hack-Nation submission + backup form | N/A | Repository exists; **branding/name compliance requires review**. |
| Live demo | Yes | Public URL; kickoff named Vercel/Replit/Lovable as examples | Hack-Nation submission + backup form | N/A | Not built yet. |
| Demo Video | Yes | Exact cap not exposed | Hack-Nation submission + backup form | Unknown | Required; final cap/field must be inspected before recording. |
| Tech Video | Yes | Exact cap not exposed | Hack-Nation submission + backup form | Unknown | Required; final cap/field must be inspected before recording. |
| Team Video | Yes | Exact cap not exposed | Hack-Nation submission + backup form | Unknown | Required; solo entrant intro. |
| WBG challenge video | Yes | **2–5 minutes** | Correct participant submission field still to be confirmed | Possibly Demo Video, but **do not assume** | Produce a separate compliant cut unless platform explicitly permits overlap. |
| Hack-Nation platform submission | Yes | English | app.hack-nation.ai | No | Must be completed and confirmed received before 9:00 AM ET. |
| Google Form backup | Yes | Exact fields/link not captured in accessible sources | Official Hack-Nation Google Form | No | Must be completed and confirmed received. |
| Submission receipt evidence | Project-required | Screenshot/confirmation | Repository/private evidence package | N/A | Capture after both submissions. |

---

# 5. Current owner dispositions under remaining rule silence

The following policies apply unless a contradictory official participant rule appears.

## 5.1 AI-assisted development

- The entrant remains the sole human team member and accountable author.
- AI systems may be used as development/review tools under entrant control.
- AI/tooling assistance will be disclosed conservatively in the final repository/submission.
- Sponsor/tool availability is not cited as proof of unlimited permission.
- If a later official rule restricts this workflow, stop and conform to the rule.

## 5.2 Originality / implementation

- Do not rely on an unverified interpretation that silence permits prebuilt project-specific implementation.
- Definitive competition code, trained/fitted submission artifacts, UI, and deployment are created/accepted within the competition build process.
- External libraries, pretrained components, and public datasets may be used only with compatible licenses and attribution.
- Repository history and technical evidence should make the definitive implementation path auditable without inventing unsupported chronology.

## 5.3 Outside review

- Independent AI review may be used as quality assurance under entrant control.
- No undeclared human contributor becomes a team member or author.
- If participant-platform rules later restrict outside review, stop/modify immediately.

## 5.4 Submission editability

- Assume the final submission is **not editable** unless the platform explicitly says otherwise.
- Submit a complete, honestly limited package before the protected buffer where feasible.
- Any later update is allowed only if the platform explicitly permits it.

## 5.5 Video overlap

- Treat Demo Video, Tech Video, Team Video, and the 2–5 minute challenge video as separate obligations until the platform proves that one upload can satisfy more than one field.

## 5.6 Repository license

- Even though an explicit LICENSE was not located as a specific competition rule, the final public repository will carry an explicit compatible license.
- Third-party asset/model/data terms are checked independently.

---

# 6. Immediate compliance risk: organizer branding/name use

S1 states that participants may not use the organizer/partner names, titles, acronyms, logos, or other branding elements on independently produced entry materials without prior written consent.

The current public repository name contains the organizer acronym.

**Stage 0 therefore cannot be considered fully closed until the owner decides how to resolve this.**

Recommended conservative repair:

1. rename the public repository to remove organizer/partner names and acronyms;
2. avoid organizer logos and visual branding entirely;
3. keep only the minimum factual source attribution necessary to identify the competition and cite official rules;
4. do not imply endorsement, partnership, or official status.

This Stage 0 PR does **not** rename the repository because repository renaming was not included in the authorized change scope.

---

# 7. Disqualification / submission risk register

| Risk | Current status | Control |
|---|---|---|
| Missed 9:00 AM ET deadline | Controlled by roadmap but high consequence | 5:30 AM ET protected buffer; early complete submission. |
| Missing one of two submission surfaces | Open until Stage 10 | Submit to both platform and Google Form; retain receipts. |
| Missing required video field | Open | Final participant-form inspection before video recording. |
| Incorrect video duration / WBG mapping | Open | Do not assume overlap; keep 2–5 minute cut available. |
| Non-public repo | Controlled | Public repo exists; test logged-out access before submission. |
| Broken live demo | Open | Deploy early; last-known-good deploy; clean-session test. |
| Organizer branding/name violation | **OWNER ACTION REQUIRED** | Remove names/acronyms/branding from independently produced materials unless cleared. |
| Undisclosed/impermissible AI assistance | Rule detail unresolved | Conservative disclosure; recheck official platform rules if they appear. |
| Originality conflict | Rule detail unresolved | Keep definitive implementation in competition build; no unsupported permission claims. |
| Unlicensed dataset/model/runtime/assets | Open technical gate | Stage 4/7 license verdicts; stop/swap on unclear/incompatible terms. |
| Third-party privacy/confidentiality violation | Controlled by design | Public/licensed data; no personal images/data unless rights/consent established. |
| Core offline claim not actually proven | Open technical gate | Hard-reload offline protocol before claiming it. |
| Human-final-authority claim not enforced | Open technical gate | Explicit schema + no-prefill + save-block + summary tests. |
| Unsupported development/field-impact claim | Controlled by claims policy | Evidence table and prohibited-claim list. |
| Challenge/sector mismatch | Controlled | Agriculture locked; Stage 6 recheck. |
| No proof of receipt | Open | Capture confirmation for both submission surfaces. |

---

# 8. Downstream enforcement map

| Requirement family | Primary enforcing stage(s) |
|---|---|
| Rules, deadline, submission surfaces, branding | Stage 0, rechecked Stage 6 and Stage 10 |
| Development relevance / AI necessity | Stages 1 and 3 |
| Product scope / human authority / exclusions | Stages 3 and 4 |
| Dataset/model/runtime licensing | Stages 4 and 7 |
| Offline/device/model-size constraints | Stages 4, 7, 8, 9 |
| Local-language interaction | Stage 8 |
| Uncertainty/OOD/fail-safe behavior | Stages 4, 7, 8, 9 |
| Working prototype / live demo | Stages 7, 8, 10 |
| Evaluation integrity | Stages 4, 7, 9 |
| Responsible AI/privacy | Stages 4, 8, 9, 10 |
| Public evidence / claims discipline | Stages 9 and 10 |
| Videos and final submission | Stage 10 |

---

# 9. Stage 0 gate assessment

## Confirmed and mapped

The following are sufficiently established to govern the build:

- one sector;
- Agriculture route is permitted;
- solo entry is allowed;
- English judge-facing submission;
- 3–4 October competition window;
- **4 October, 9:00 AM ET** submission deadline;
- designated platform submission + backup Google Form;
- public GitHub repository;
- live demo;
- Demo Video;
- Tech Video;
- Team Video;
- 2–5 minute challenge video;
- targeted Small AI;
- realistic device constraint;
- offline core;
- small/sideloadable model files;
- local-language interaction;
- human final call;
- uncertainty/fail-safe behavior;
- data attribution/limitations;
- AI-value explanation;
- working prototype;
- responsible-AI/privacy discipline;
- third-party rights/IP obligations;
- submission receipt requirement;
- organizer-branding restriction.

## Rule silence / unresolved participant-platform detail

Still unresolved in the accessible official sources:

- exact originality rule text;
- exact AI coding-assistant policy;
- exact outside non-team review rule;
- exact pre-existing boilerplate rule;
- exact Demo/Tech/Team video duration caps;
- exact mapping between the 2–5 minute challenge video and Hack-Nation fields;
- exact Google Form URL/fields;
- submission editability;
- exact scoring weights;
- whether an explicit repository LICENSE is mandatory versus project best practice.

These are **not** treated as permission. The owner dispositions in Section 5 govern unless a contradictory official rule appears.

## Owner actions required before Stage 0 closure

1. **Branding/name risk:** decide whether to rename the public repository and remove organizer/partner names/acronyms from independent entry materials.
2. **Discord challenge notification:** confirm whether Agriculture / Challenge 4 has already been declared as instructed; if not, perform the notification.
3. Confirm continued acceptance of the conservative rule-silence dispositions in Section 5 after the independent Stage 0 audit.

---

# 10. Stage 0 conclusion

The competition route remains viable under the confirmed technical and submission requirements.

The primary new compliance issue surfaced by the current verification is the organizer-branding restriction, because the current repository name contains the organizer acronym. This requires an explicit owner disposition before Stage 0 closes.

All remaining participant-platform unknowns have conservative operating policies and are mapped to later recheck points. None should be converted into an unsupported claim of permission.

**Stage 0 status: IN REVIEW — Tier A audit required before owner closure decision.**
