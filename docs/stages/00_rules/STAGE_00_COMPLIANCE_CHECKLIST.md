# Stage 0 — Rules, Submission Requirements, and Compliance Control

**Stage:** 0  
**Status:** Reopened — Annex B case-alignment audit pending  
**Purpose:** Establish one authoritative compliance checklist for the Small AI for Development Hackathon 2026 before later stages create technical or submission artifacts.

This document is a compliance control, not a product specification. It records what the available official/public competition materials establish, what the authenticated participant submission surface establishes, what remains unresolved, and how later stages must enforce each requirement. The controlling Agriculture case interpretation is centralized in `ANNEX_B_CASE_CONTRACT.md`; generic Agriculture research may contextualize the case but may not redefine it.

---

## 1. Source authority

| ID | Source | Authority / pinpoint |
|---|---|---|
| **S1** | Official Global AI & Digital Summit / Small AI Hackathon Challenge page: https://www.worldbank.org/en/events/2026/10/19/global-ai-and-digital-summit-2026 | Primary public organizer source for eligibility, competition structure, sector choice, submission conditions, rights, branding restrictions, English-language requirement, judging framing, and competition window. |
| **S2** | Official Small AI for Development Hackathon FAQ PDF: https://thedocs.worldbank.org/en/doc/a2d80d7a647019e16e7265a3563ce416-0320012026/original/Small-AI-for-Development-Hackathon-FAQs.pdf | Primary public organizer FAQ for sector scope, eligibility, team size, ownership, competition dates, and expectation that participants build/demonstrate during the competition period. |
| **S3** | Official Hack-Nation 7th Global AI Hackathon Luma event page: https://luma.com/z3za7zow | Primary event-host source for the 4 October 2026, 9:00 AM ET project-submission deadline and general event schedule. |
| **S4** | Hack-Nation Global AI Hackathon page: https://hack-nation.ai/hackathon | Official event-host surface for event identity, dates, format, and participation context. |
| **S5** | Official 3 October Hack-Nation kickoff materials | Pinpoints used here: “Rules 1/2”; “Rules 2/2 — submission checklist”; team/submission mechanics; judging-criteria slide. Supports platform + Google Form submission, public GitHub, live demo, Demo/Tech/Team video obligations, team mechanics, Discord challenge declaration, and general judging criteria. |
| **S6** | Official Small AI for Development Challenge Brief supplied to participants | Pinpoint anchors used here: the device/offline/model/local-language rule block; human-in-the-loop/uncertainty guardrail block; data-source and dataset-disclosure block; Agriculture annex challenge/dataset block; 2–5 minute challenge-video instruction. |
| **S7** | Authenticated Hack-Nation “Team & Submission” participant page captured 3 October 2026 | Page/field pinpoints: admission = accepted and deadline/grace information (p.1); two-submission notice, project/challenge fields and edit window (p.2); GitHub, live URL, team photo, team-introduction field (p.3); product-demo and technical-walkthrough fields (p.4). |

### Source-use rule

- A **confirmed requirement** must be supported by S1–S7.
- Participant-platform details not shown on an inspected official surface remain **unresolved** rather than inferred.
- Sponsor/tool availability is **not** proof of unrestricted tool permission.
- Secondary web summaries are not authoritative where S1–S7 cover the point.
- Where official surfaces conflict, the **earliest deadline / stricter submission condition controls** unless an official clarification says otherwise.

---

## 2. Status vocabulary

- **CONFIRMED** — directly supported by an official/public or authenticated official participant source.
- **CONFIRMED — PARTICIPANT MATERIAL** — supported by official participant material that is not publicly indexed.
- **UNRESOLVED PLATFORM DETAIL** — expected participant-platform detail not shown on the inspected official surfaces.
- **PROJECT POLICY** — conservative project control adopted to avoid relying on silence as permission.
- **OWNER ACTION REQUIRED** — a confirmed issue that needs owner action before Stage 0 can close.
- **NOT APPLICABLE** — does not apply to the solo entry as scoped.

---

# 3. Authoritative compliance matrix

| # | Requirement / issue | Source | Status | Interpretation | Enforcing stage | Evidence required |
|---:|---|---|---|---|---|---|
| 1 | Build for one sector: Health, Agriculture, or Tourism | S1, S2, S6 | CONFIRMED | Entry uses exactly one selected sector. Current route is Agriculture. | 3, 6, 10 | Product scope and final submission sector agree. |
| 2 | Small AI must be targeted and use-case driven | S1, S6 | CONFIRMED | AI solves one bounded problem, not a broad general-assistant problem. | 3, 4, 7, 10 | Scope, architecture, demo, README. |
| 3 | Demonstrate value under constrained conditions | S1, S6 | CONFIRMED | Explain and prove fit with realistic connectivity/device/infrastructure constraints. | 1, 4, 8, 9 | Problem evidence, architecture, offline proof, limitations. |
| 3A | Agriculture entry must respond to the official Annex B Noor scenario | S6 | CONFIRMED — PARTICIPANT MATERIAL | Annex B is the controlling problem specification. The project must remain traceable to Noor’s stated crop/market problems, extension constraints, device context, and preconditions. | 1–10 | Annex B case contract + stage case-alignment checks. |
| 3B | Agriculture solution must help Noor make, communicate, or act on **one better agricultural decision** | S6 | CONFIRMED — PARTICIPANT MATERIAL | RoyaCheck selects the crop-observation/documentation/extension-handoff branch. It does not need to solve every Annex B problem. | 1, 2, 3, 8, 10 | Explicit supported decision + end-to-end demo. |
| 3C | Noor’s crop uncertainty and price-reference problem are separate case branches | S6 | CONFIRMED — PARTICIPANT MATERIAL | Selected entry addresses one bounded crop-observation branch. Market-price reference is acknowledged but out of scope for the MVP. | 1, 2, 3, 10 | Scope/exclusions + video narrative. |
| 3D | Farmer-registry, phone access, and trust are explicit scalability preconditions | S6 | CONFIRMED — PARTICIPANT MATERIAL | The local one-user loop may work without a registry, but scaled outreach/follow-up cannot be claimed without the relevant institutional infrastructure. | 1, 3, 9, 10 | Limitations/scalability statement. |
| 4 | Individual/solo entry is allowed | S1, S2, S5, S7 | CONFIRMED | A team of one is permitted. | 0, 10 | Participant page/team state. |
| 4A | Entrant must be accepted and have access to the competition submission flow | S1, S7 | CONFIRMED | Owner confirmed current Team & Submission access; S7 shows admission status **accepted**. | 0, 10 | Authenticated platform state. |
| 5 | Team size is 1–4 and members must be represented on the platform | S2, S5, S7 | CONFIRMED | Solo route uses one member; no undeclared team member is added. | 0, 10 | Team state. |
| 6 | Participant age eligibility is 18–35 | S1, S2 | CONFIRMED | Satisfied privately; do not publish personal eligibility documents. | 0 | Owner/platform eligibility. |
| 7 | Participant must be from a World Bank member country | S1, S2 | CONFIRMED | Satisfied privately. | 0 | Owner/platform eligibility. |
| 8 | Active World Bank Group staff, consultants, and interns are ineligible | S1 | CONFIRMED | Entrant must not fall into an excluded category. | 0 | Owner attestation/platform eligibility. |
| 9 | Judge-facing competition submission must be in English | S1 | CONFIRMED | Submission text/videos in English; product also includes required local-language interaction. | 8, 10 | Submission fields, README, videos. |
| 10 | Competition window is 3–4 October 2026 | S1–S4 | CONFIRMED | Definitive competition implementation/submission occurs in this window. | 0, 6, 10 | Repository/submission evidence. |
| 11 | Project deadline is **4 Oct 2026, 9:00 AM ET / 9:00 AM EDT / 13:00 UTC** | S3, S5, S7 | CONFIRMED | 9:00 AM is the controlling deadline. S7 shows GMT−4. If official surfaces conflict, the earliest controls. | 0, 10 | Submission receipt before 9:00 AM deadline. |
| 12 | Platform keeps uploads/edits/submission open for a 15-minute grace period | S7 | CONFIRMED — PARTICIPANT MATERIAL | S7 shows activity remains open until 09:15 in the displayed GMT−4 zone. **Project policy: do not rely on this grace as the deadline.** | 10 | Submit before 9:00 AM; grace is recovery-only. |
| 13 | Late/incomplete/improperly submitted entries are not eligible | S1, S5 | CONFIRMED | Completion is a hard requirement; protected buffer cannot be consumed by feature work. | 10 | Both submission receipts. |
| 14 | Entry must be formally submitted and confirmed received through the designated portal | S1 | CONFIRMED | A repo/video alone is not an entry. | 10 | Platform confirmation. |
| 15 | Hack-Nation participant submission on app.hack-nation.ai is required | S5, S7 | CONFIRMED — PARTICIPANT MATERIAL | Primary platform submission surface. | 10 | Successful platform submission. |
| 16 | A Google Form backup submission is also required | S5, S7 | CONFIRMED — PARTICIPANT MATERIAL | S7 explicitly says **two submissions are required** and shows a Google Form link. Target URL/fields are not visible in the captured PDF and remain unresolved. | 0, 10 | Capture Google Form target/fields when opened; submit and retain private receipt. |
| 17 | Referral code `WBGSmallAIGADS` is part of the organizer registration route | S1 | CONFIRMED | Treat as registration evidence; enter again only if a submission field explicitly asks for it. | 0, 10 | Accepted participant status; field use only if requested. |
| 18 | Public GitHub repository is required | S5, S7 | CONFIRMED — PARTICIPANT MATERIAL | S7 has a GitHub repository field. Repository must be publicly accessible. | 10 | Logged-out public URL test. |
| 19 | Live project URL is required | S5, S7 | CONFIRMED — PARTICIPANT MATERIAL | S7 has a Live project URL field. | 7, 8, 10 | Clean-session live URL test. |
| 20 | Team photo is required to submit | S7 | CONFIRMED — PARTICIPANT MATERIAL | JPG/PNG/WebP, maximum 10 MB. | 10 | Valid uploaded team photo. |
| 21 | Team introduction video is required | S5, S7 | CONFIRMED — PARTICIPANT MATERIAL | Separate required upload; MP4 or MOV; maximum 60 seconds; maximum 1 GB. | 10 | Uploaded video. |
| 22 | Product demo video is required | S5, S7 | CONFIRMED — PARTICIPANT MATERIAL | Separate required upload; MP4 or MOV; maximum 60 seconds; maximum 1 GB. | 10 | Uploaded video. |
| 23 | Technical walkthrough video is required | S5, S7 | CONFIRMED — PARTICIPANT MATERIAL | Separate required upload; MP4 or MOV; maximum 60 seconds; maximum 1 GB. | 10 | Uploaded video. |
| 24 | Small AI challenge requires a **2–5 minute video** | S6 | CONFIRMED — PARTICIPANT MATERIAL | The video must cover: the organizer’s one-sentence user/action/time/evidence problem statement; AI capability and why a simpler tool is insufficient; guardrails; end-to-end demo; where the tool sits in the user’s day/what happens next; technical stack where relevant; and the entrant’s view of localizing AI development. S7 exposes only the three 60-second platform sections, so the destination remains unresolved. | 10 | Separate compliant 2–5 minute cut + content checklist unless an official field/rule maps it elsewhere. |
| 25 | Whether the 2–5 minute video can satisfy any Hack-Nation video field | S6, S7 | UNRESOLVED PLATFORM DETAIL | The visible platform fields have 60-second limits, so a 2–5 minute file cannot fit those fields as displayed. Keep it separate until the challenge-specific destination is identified. | 6, 10 | Challenge/rules/Google Form field inspection. |
| 26 | Project details are editable before the deadline | S7 | CONFIRMED — PARTICIPANT MATERIAL | S7 says project details can be edited until the deadline and shows a Save draft action; S7 also says uploads/edits/submissions remain open through the 15-minute grace. | 10 | Platform behavior. Do not rely on post-9:00 grace for normal work. |
| 27 | Challenge selection should be declared in Discord | S5 | CONFIRMED — PARTICIPANT MATERIAL | Owner confirmed Agriculture / Challenge 4 was already declared. | 0 | **Complete — owner confirmation.** |
| 28 | Solo participant must be represented correctly in Team & Submission | S5, S7 | CONFIRMED — PARTICIPANT MATERIAL | S7 shows one member on the active team. | 0, 10 | Team state. |
| 29 | Working prototype is expected | S2, S6 | CONFIRMED | Documentation alone is insufficient. | 7, 8, 10 | Live working loop. |
| 30 | Entry must explain what AI capability is used | S6 | CONFIRMED — PARTICIPANT MATERIAL | Core learned capability: computer vision / pattern recognition. | 4, 7, 10 | README/technical walkthrough/submission. |
| 31 | Entry must explain why AI adds value beyond simpler tools | S1, S6 | CONFIRMED | AI must perform a distinct visual-inference task a form/spreadsheet/search alone cannot. | 1, 3, 10 | Problem/value explanation. |
| 32 | Proof the AI works on the selected sector is required | S6 | CONFIRMED — PARTICIPANT MATERIAL | Show measured classification/abstention behavior, not only architecture. | 7, 9, 10 | Evaluation + demo evidence. |
| 33 | Core feature must work offline | S6 | CONFIRMED — PARTICIPANT MATERIAL | Core rust proposal must not depend on a live network. | 4, 7, 8, 9 | Hard-reload offline test + network evidence. |
| 34 | Solution should run on a device the intended user can realistically access | S1, S6 | CONFIRMED | Noor’s case includes shared/intermittent smartphone access rather than an always-carried smartphone. The prototype may target the household smartphone but must not imply continuous possession or connectivity. | 1, 3, 4, 8, 9 | User-day/device path + device/browser evidence + limitation. |
| 35 | Model files must be small enough to side-load / transfer over weak connectivity | S6 | CONFIRMED — PARTICIPANT MATERIAL | Report actual model/runtime/cached-bundle bytes rather than using “small” rhetorically. | 4, 7, 9 | Size measurement + transfer path. |
| 36 | At least one local-language interaction is required | S6 | CONFIRMED — PARTICIPANT MATERIAL | S6 permits voice or text and requires the language to be named. Noor’s fictional local/national languages are not named, so the implementation must choose one real prototype localization language and label it as an implementation choice rather than a fact about Noor’s location. | 3, 8, 10 | Named-language UI interaction + localization rationale + less-supported-language limitation. |
| 37 | Human makes the final call | S6 | CONFIRMED — PARTICIPANT MATERIAL | AI proposal cannot silently become the formal observation. | 4, 8, 9 | Separate AI/human fields + tests. |
| 38 | Tool must flag uncertainty / fail safely | S6 | CONFIRMED — PARTICIPANT MATERIAL | `not sure` and human-review routing are first-class requirements. | 4, 7, 8, 9 | Abstention + challenge tests. |
| 39 | Tool must not autonomously act on the user’s behalf | S6 | CONFIRMED — PARTICIPANT MATERIAL | No autonomous spraying, selling, contacting, or formal diagnosis. | 3, 8, 9 | UX/action audit. |
| 40 | Avoid hallucinated agronomy | S6 | CONFIRMED — PARTICIPANT MATERIAL | No generative treatment/advisory content in the rust decision loop. | 3, 8, 10 | Exclusions + demo inspection. |
| 41 | Cite problem/gap data | S6 | CONFIRMED — PARTICIPANT MATERIAL | S6 asks for contextual data with source, year, and country/context. Because Noor is fictional, real-world evidence must be labeled as an evidence anchor rather than Noor’s location. | 1, 3, 9, 10 | Annex B case source + real-world context source/year/country + limitations. |
| 42 | Name every learning/evaluation dataset, source, license, size, and coverage limits | S6 | CONFIRMED — PARTICIPANT MATERIAL | Dataset limitations are evidence, not optional caveats. | 4, 7, 9, 10 | Dataset record/evidence table. |
| 43 | Provided datasets are suggestions rather than a closed mandatory list | S6 | CONFIRMED — PARTICIPANT MATERIAL | Other public data may be used if terms are checked. | 4, 7 | Dataset decision + license verdict. |
| 43A | Strong entries draw on both common and sector data layers | S6 | CONFIRMED — PARTICIPANT MATERIAL | Sector data supports what the tool operates on; common data grounds language/connectivity/device/inclusion or other case constraints. | 1, 3, 4, 9, 10 | Named common-source evidence + named sector dataset(s). |
| 43B | BRACOL is explicitly listed as directly relevant to Noor’s coffee crop | S6 | CONFIRMED — PARTICIPANT MATERIAL | BRACOL supports task relevance only; it does not prove field robustness, causal relevance to falling yields, or Noor-specific performance. | 4, 7, 9, 10 | Dataset-role/coverage statement + field-domain limitation. |
| 44 | Third-party rights must be held for submitted materials | S1 | CONFIRMED | Code, images, models, datasets, music/video assets, fonts and footage must not knowingly infringe rights. | 4, 7, 10 | Rights/attribution records. |
| 45 | Participants retain ownership of their submissions | S1, S2 | CONFIRMED | Entrant keeps ownership subject to competition terms. | 0 | No further action. |
| 46 | Submission grants the organizer a broad non-exclusive, royalty-free license for competition/education/promotion/knowledge sharing | S1 | CONFIRMED | Third-party content appearing in the repo, live demo, videos or submission must be licensed compatibly with the organizer’s stated downstream uses, with required attribution. Otherwise exclude or replace it. | 4, 7, 10 | Organizer-license compatibility verdict + Stage 10 asset inventory recheck. |
| 47 | Privacy/confidentiality/third-party rights must be respected | S1 | CONFIRMED | Do not expose personal/confidential data or unlicensed material. | 4, 8, 9, 10 | Privacy/data audit. |
| 48 | Organizer/partner naming and branding restriction | S1 | CONFIRMED | S1 covers organizer/partner **names, titles, acronyms, logos and other branding** on independently produced entry materials without written consent. Project policy: no organizer/partner logos or visual branding; no unnecessary acronyms; competition names only as minimum plain-text factual identification where genuinely required, without implying endorsement. The repository is now product-only and the neutral description has been verified on live GitHub metadata. | 0, 8, 10 | Canonical repo `SplitzHappen/RoyaCheck-Offline` + neutral description + Stage 8/10 naming/branding sweep across all public repository documents, README, UI, live-demo metadata, videos, thumbnails and submission-facing materials. |
| 49 | Exact participant-platform originality rule | S1 | UNRESOLVED PLATFORM DETAIL | Authenticated Team & Submission page (S7) was inspected and does not display the originality rule text. Do not infer permission. | 0, 6, 10 | Recheck official rules/FAQ/challenge surfaces if exposed; conservative project policy applies. |
| 50 | Exact AI coding-assistant / AI-assisted-development rule | S1, S5 | UNRESOLVED PLATFORM DETAIL | S7 does not display this rule. Sponsor/tool presence is not permission. | 0, 6, 10 | Conservative disclosure; stop/modify if contrary official text appears. |
| 51 | Exact outside non-team review/audit rule | S1 | UNRESOLVED PLATFORM DETAIL | Rule text not located; treated as unresolved. | 0, 6, 10 | Independent AI review disclosed with other AI/tooling assistance; recheck official participant rules if surfaced. |
| 52 | Exact rule for pre-existing project-specific implementation/boilerplate | S1, S2 | UNRESOLVED PLATFORM DETAIL | S7 does not display this rule. S2 expects participants to build/demonstrate during the competition period. | 0, 6, 10 | Definitive project-specific code/UI/trained artifacts/deployment created during competition window; external dependencies licensed/disclosed. |
| 53 | Pretrained compact encoder use | S6 | PROJECT POLICY | Allowed only if the selected component’s license supports intended use/redistribution and no later platform rule forbids it. S6 establishes small/on-device model constraints; it does not by itself establish unrestricted pretrained-model permission. | 4, 7 | Model license verdict + disclosure. |
| 54 | Cloud/API use | S6 | CONFIRMED | Core feature must work offline; no auxiliary online service may be necessary for rust/no-rust/not-sure inference. | 4, 7, 8, 9 | Architecture + offline proof. |
| 55 | Explicit repository LICENSE | S1, S5 | PROJECT POLICY | Public repo is required; an explicit repository license was not found as a standalone competition rule. Add a compatible LICENSE before final submission. | 7, 10 | LICENSE + dependency compatibility. |
| 56 | Judging includes technical merit/depth | S1, S5 | CONFIRMED | Technical credibility matters without undermining Small AI fit or completion. | 7, 9, 10 | Working evidence + technical explanation. |
| 57 | Judging includes development relevance, design, and inclusivity | S1 | CONFIRMED | Development problem fit and inclusion are first-order criteria. | 1, 3, 10 | Problem/value narrative + localization. |
| 58 | Generic Hack-Nation judging includes communication and innovation/creativity | S5 | CONFIRMED — PARTICIPANT MATERIAL | Video/documentation quality and differentiated story matter. | 9, 10 | README/video/pitch quality. |
| 59 | Challenge-brief judging weights | S6 | CONFIRMED — PARTICIPANT MATERIAL | Built solution / Small AI fidelity **25%**; development relevance and impact **20%**; data grounding **15%**; evidence it works **15%**; the brief’s combined clarity/design/inclusivity / AI-value row **15%**; scalability/replicability/what happens next **10%**; responsible AI/data/safety is **pass/fail**. | 1–10 | Judge-alignment matrix and final evidence map. |
| 60 | Only official submission channels count | S1 | CONFIRMED | Email/social/direct outreach is not a valid entry submission. | 10 | Platform + Google Form receipts. |
| 61 | Submission receipt evidence is retained privately | S1 | PROJECT POLICY | Because confirmed receipt matters and screenshots may expose account data, keep raw receipts private; publish only a redacted statement if useful. | 10 | Private receipt evidence. |
| 62 | Freeze the judged repository state after the deadline unless official rules explicitly permit changes | S1 | PROJECT POLICY | Avoid ambiguity about what was judged. Tag/reference the submitted commit where possible. | 10 | Submitted commit SHA/tag + no default-branch pushes during judging absent permission. |
| 63 | Keep the live demo available through the judging period | S3 | PROJECT POLICY | Avoid a submission that becomes unavailable after the deadline. | 10 | Live URL monitoring/check. |
| 64 | Owner remains available for any officially announced finalist step | S3 | PROJECT POLICY | Follow official finalist instructions if selected. | 10 | Owner confirmation if applicable. |

---

# 4. Submission-mechanics matrix

| Artifact / action | Required? | Known format / length | Destination | Can overlap? | Stage 0 status |
|---|---|---|---|---|---|
| Challenge selection | Yes | Agriculture | Platform / Discord instruction | N/A | **Complete:** owner confirmed Agriculture / Challenge 4 declared in Discord. |
| Accepted participant/submission access | Yes | Active Team & Submission area | app.hack-nation.ai | N/A | **Complete:** owner confirmed access; S7 shows admission accepted. |
| Project name | Yes | Text field | Hack-Nation platform | N/A | Required field visible in S7. |
| Challenge | Yes | Challenge selector | Hack-Nation platform | N/A | Required field visible in S7. |
| Public GitHub repository | Yes | Repository URL | Hack-Nation platform + backup submission | N/A | **Complete:** canonical repository is `https://github.com/SplitzHappen/RoyaCheck-Offline`; neutral description verified. |
| Live project URL | Yes | URL | Hack-Nation platform + backup submission | N/A | Not built yet. |
| Team photo | Yes | JPG / PNG / WebP, max 10 MB | Hack-Nation platform | N/A | Required; not yet produced. |
| Team introduction | Yes | MP4/MOV, max **60 sec**, max **1 GB** | Hack-Nation platform | Separate required field | Format resolved from S7. |
| Product demo | Yes | MP4/MOV, max **60 sec**, max **1 GB** | Hack-Nation platform | Separate required field | Format resolved from S7. |
| Technical walkthrough | Yes | MP4/MOV, max **60 sec**, max **1 GB** | Hack-Nation platform | Separate required field | Format resolved from S7. |
| Small AI challenge video | Yes | **2–5 minutes** | Challenge-specific destination not visible on captured Team & Submission page | Cannot fit the visible 60-sec fields as displayed | Keep separate cut; identify destination from challenge/rules/Google Form. |
| Hack-Nation platform submission | Yes | Editable before deadline; page shows 15-min technical grace | app.hack-nation.ai | No | Active and accepted. **Project policy: submit by 9:00 AM, do not rely on grace.** |
| Google Form backup | Yes | Link visibly present; target URL/fields not captured in the PDF | Official Google Form | No | Link exists; target/fields still require capture when opened. |
| Submission receipt evidence | Project-required | Private screenshot/confirmation | Private evidence | N/A | Capture after both submissions. |

---

# 5. Owner dispositions under remaining rule silence

## 5.1 AI-assisted development

- José Antonio remains the sole human team member and accountable entrant.
- AI systems may be used as development/review tools under entrant control under the current conservative policy.
- AI/tooling assistance, including independent AI review, will be disclosed conservatively.
- Sponsor/tool availability is not cited as proof of unlimited permission.
- If a later official rule restricts the workflow, stop and conform.

## 5.2 Originality / implementation

- Do not rely on silence as permission for prebuilt project-specific implementation.
- Definitive project-specific code, trained/fitted artifacts, UI, and deployment are **created during the competition window**.
- Third-party libraries, pretrained components, and public datasets may be used only under compatible terms and with disclosure/attribution.
- Repository history and evidence must support the definitive implementation without inventing unsupported process-history claims.

## 5.3 Outside review

- Independent AI review may be used as quality assurance under entrant control under the current conservative policy.
- Independent AI review is included in the AI/tooling disclosure.
- No undeclared human contributor becomes a team member or author.
- If participant-platform rules later restrict outside review, stop/modify immediately.

## 5.4 Submission timing/editability

- S7 confirms project details can be edited before the deadline and shows a 15-minute technical grace period.
- The project still treats **9:00 AM ET / 13:00 UTC** as the deadline.
- The grace period is recovery-only, not scheduled work time.
- Submit a complete, honestly limited package before the protected buffer ends.

## 5.5 Video mapping

- Team introduction, product demo, and technical walkthrough are three separate platform fields, each capped at 60 seconds.
- The separate 2–5 minute challenge video does not fit those visible fields as displayed.
- Keep a separate 2–5 minute cut until its official destination is identified.

## 5.6 Repository license and third-party content

- Add an explicit compatible repository LICENSE before final submission.
- For every third-party asset that appears in the repo, live demo or video, verify compatibility not only with our use but also with the organizer’s stated downstream uses.
- Exclude/replace any asset whose terms do not permit that submission context.

## 5.7 Branding

- Use a product-only repository name and neutral product description.
- Do not use organizer/partner logos or visual branding.
- Avoid organizer/partner acronyms.
- Use competition/organization names only as minimum factual identification where necessary for a citation or submission context; do not imply endorsement or official status.
- Re-run a naming/branding sweep in Stages 8 and 10.

---

# 6. Branding/name remediation

The product-only target is:

- repository: **`SplitzHappen/RoyaCheck-Offline`**
- description: **“Offline-first, browser-local coffee-leaf observation prototype with human review.”**

The owner explicitly authorized this rename and description change.

**Current execution status:** completed and independently verified.

- canonical repository: `https://github.com/SplitzHappen/RoyaCheck-Offline`
- verified description: `Offline-first, browser-local coffee-leaf observation prototype with human review.`

Controls:

1. do not recreate a repository under the old name;
2. use the product-only URL in later materials;
3. remove unnecessary organizer/partner acronyms from independent entry-material titles/headings;
4. run a complete branding sweep again in Stages 8 and 10.

---

# 7. Disqualification / submission risk register

| Risk | Current status | Control |
|---|---|---|
| Missed 9:00 AM ET / 13:00 UTC deadline | Controlled but high consequence | Protected buffer; earliest official deadline controls; 15-min grace is recovery-only. |
| Missing one of two submission surfaces | Open until Stage 10 | Platform + Google Form; private receipts. |
| Google Form target/fields not captured | **Open Stage 0 detail** | Open the platform link and record target/fields before closure if available. |
| Missing required video field | Reduced | Three platform video fields/caps now resolved; 2–5 minute challenge-video destination still unresolved. |
| Product repo naming/branding violation | **Resolved / controlled** | Product-only repository and neutral description verified; no organizer/partner visual branding; Stage 8/10 sweeps remain mandatory. |
| Broken live demo | Open | Deploy early; last-known-good deploy; clean-session test. |
| Undisclosed/impermissible AI assistance | Rule text unresolved | Conservative disclosure; recheck official rule surface if shown. |
| Originality conflict | Rule text unresolved | Definitive implementation created during competition window; no unsupported permission claims. |
| Unlicensed/incompatible dataset/model/runtime/assets | Open technical gate | Stage 4/7 rights verdict including organizer-license compatibility. |
| Privacy/confidentiality violation | Controlled by design | Public/licensed data; no unnecessary personal data; receipts kept private. |
| Offline claim not proven | Open technical gate | Hard-reload offline protocol before claim. |
| Human-final-authority claim not enforced | Open technical gate | Explicit schema/no-prefill/save-block/summary tests. |
| Unsupported development/field-impact claim | Controlled | Evidence table + prohibited-claim list. |
| Post-deadline ambiguity | Controlled by project policy | Tag/reference submitted commit; no default-branch pushes during judging absent permission. |

---

# 8. Downstream enforcement map

| Requirement family | Primary enforcing stage(s) |
|---|---|
| Rules, deadline, submission surfaces | Stage 0, rechecked Stage 6 and Stage 10 |
| Naming / branding | Stage 0, Stage 8, Stage 10 |
| Development relevance / AI necessity | Stages 1 and 3 |
| Product scope / human authority / exclusions | Stages 3 and 4 |
| Dataset/model/runtime licensing and organizer-license compatibility | Stages 4, 7 and 10 |
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

- one sector and Agriculture eligibility;
- solo entry and accepted participant access;
- English judge-facing submission;
- 3–4 October competition window;
- **4 October, 9:00 AM ET / 13:00 UTC** deadline;
- 15-minute platform grace exists but is not the project deadline;
- platform + Google Form backup;
- public GitHub + live URL;
- required team photo;
- required 60-second Team Introduction, Product Demo, and Technical Walkthrough uploads;
- separate 2–5 minute Small AI challenge video requirement;
- targeted Small AI;
- Annex B / Noor as the controlling Agriculture case;
- one better agricultural decision as the required case-level unit of value;
- crop-observation/documentation/extension-handoff as the selected problem branch, with the price branch explicitly out of scope;
- farmer-registry/phone/trust preconditions acknowledged for scale;
- realistic-device constraint;
- offline core;
- small/sideloadable model;
- local-language interaction;
- human final call;
- uncertainty/fail-safe behavior;
- data attribution/limitations;
- both common and sector data layers, with BRACOL explicitly relevant to Noor’s crop but not field-validation evidence;
- exact challenge-brief judging weights and responsible-AI pass/fail gate;
- AI-value explanation;
- working prototype;
- responsible-AI/privacy;
- third-party rights;
- organizer-license compatibility requirement;
- naming/branding restriction;
- Discord challenge declaration complete.

## Unresolved participant-platform detail

Still not visible on the inspected Team & Submission page:

- exact originality rule text;
- exact AI coding-assistant rule;
- exact outside-review rule;
- exact pre-existing-code/boilerplate rule;
- target URL/fields of the Google Form link;
- destination of the separate 2–5 minute challenge video;
- whether an explicit repository LICENSE is a competition rule versus project policy.

These are **not** treated as permission. Section 5 controls unless contrary official text appears.

## Owner action still required before Stage 0 closure

1. Confirm continued acceptance of the conservative Section 5 dispositions.
2. If available, capture the Google Form target and any challenge/rules/FAQ surface that displays remaining rule text. This is desirable but not blocking because Stage 6/10 rechecks already control it.

---

# 10. Stage 0 conclusion

The route remains viable and the authenticated participant page resolves the most important submission-mechanics uncertainty: accepted participant status, the active Team & Submission flow, the three required 60-second platform videos, the required team photo, required GitHub/live URLs, editability, and the 15-minute platform grace.

The repository naming/description blocker is resolved. Remaining rule silence is explicitly identified and controlled conservatively rather than treated as permission.

The focused Tier A re-audit found no unresolved major findings and no new blocking or major findings; its only blocking residual was the repository description state, which has since been corrected and independently verified. The remaining re-audit items are minor documentation consistency repairs handled in the final Stage 0 pass.

**Stage 0 status: REOPENED — Annex B case-alignment repair is pending independent adversarial audit before re-closure.**
