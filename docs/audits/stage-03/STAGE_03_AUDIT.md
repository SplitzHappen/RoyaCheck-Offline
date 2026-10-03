# Stage 3 Audit — RoyaCheck Offline

**Auditor:** Claude (independent audit, Claude Code)
**Audit package:** `docs/audits/stage-03/STAGE_03_AUDIT_PACKAGE.md`, read at the audited head
**PR:** `SplitzHappen/RoyaCheck-Offline#11`, "Stage 3: product scope and route lock" (draft, open)
**Audited head:** `chatgpt/stage-03-product-route-lock` at `32d966413aa2eb8dfdd84fceac5b0f359f8dc7d4`. This matches the expected head and the GitHub PR head.
**Base:** `main` at `4c44047195857be44b00015b20d2856acf4e3a21`. This matches.
**Audit date:** 2026-10-03
**Output path:** `docs/audits/stage-03/STAGE_03_AUDIT.md` on branch `claude/lucid-curie-dr3x4d`, branched from the audited head. The package names no output path, so this report follows the earlier `docs/audits/<stage>/STAGE_XX_AUDIT.md` convention. No audited file was modified.

**Scope and method notes**

- **Diff audited.** The PR changes three files: `STAGE_03_PRODUCT_ROUTE_LOCK.md` (new), `STAGE_03_AUDIT_PACKAGE.md` (new), and two narrow edits to `ROADMAP.md`. I read all seven required documents in full. I also read the ROADMAP Stage 3 and Stage 4 sections, the earlier Claude case-alignment audit, and the Stage 2 comparison.
- **Brief not re-read.** The official challenge brief is not in the repository. Case facts are checked against `ANNEX_B_CASE_CONTRACT.md`. That contract was itself independently verified against the brief (`POST_RECONCILIATION_AUDIT.md`, and the PR #10 confirmation recorded in ROADMAP).
- **External-source limitation, material to the evidence findings.** This audit environment's network policy blocked direct retrieval of every cited primary source: agriculture.go.ug, worldbank.org, ncdc.go.ug, statistics.ubos.org and gsma.com. I verified the anchor propositions through web-search excerpts of those sources and of secondary reporting. Every proposition below is labelled **Verified (excerpt)**, **Verified (secondary)** or **Not independently verified**. No claim in this report depends on a source I could not see at least in excerpt.

---

## Verdict

**PASS WITH MAJOR REPAIRS**

- Blocking findings: **0**
- Major findings: **3**
- Minor findings: **7**

---

## Executive assessment

**Overall.** The Stage 3 package is a serious, mostly well-disciplined product lock. The fifteen owner decisions answer every item on the ROADMAP Stage 3 lock list and every Stage-3-assigned item in Contract §§3, 6, 7 and 8. The route keeps Noor as decision-maker and the daughter as assistant, and respects the weekend-only smartphone facts. It does not invent a weekday device, a messaging endpoint or an institutional integration. It keeps the Contract §4 claim ceiling intact. Above all, it prematurely locks no Stage 4 technical choice; the leaf-side, dataset, threshold and runtime boundaries are handled carefully.

**D3-01 is a real decision.** It is a genuine "one better agricultural decision", not classification plus record-keeping. The decision is which observation receives scarce human-review attention when review is rare. The three routes (Review first / Retake or request review / Record and monitor) produce materially different next actions, as the earlier audit's W1 watch item required. They do not encode severity, treatment urgency or farm health. The weakest link is not the routing but the unaddressed simplest baseline (minor m4). Coffee leaf rust is visually distinctive, so a printed symptom card is the strongest competitor. The record should say what the learned model adds over it, and leave the proof to measurement.

**Three material gaps, none of which requires reversing an owner decision.**

1. **The handoff's physical feasibility is unstated (Major M1).** D3-07 needs three things in the same place at the same time: the daughter's smartphone, someone able to operate it, and the extension officer. The officer comes about twice a year at best. The case places the smartphone with a daughter who boards in the district town, and Stage 3 itself rightly refuses to assume weekday access. The record never says how the "Review first" action is realized, or what the realistic delay is.
2. **The language-evidence chain treats Lugisu and Lumasaaba as interchangeable without saying so (Major M2).** Real-world evidence shows a live naming, dialect and orthography distinction within the Masaaba/Gisu language. Bududa sits in south Bugisu, and the census evidence cited for the anchor says "Lumasaba". The choice may well be defensible, but the chain has a gap that must be closed before strings are validated.
3. **The organizer's value statement was not instantiated (Major M3).** Contract §10 assigns this sentence to Stage 3, once the decision, workflow and handoff are locked. They now are. The sentence is the judge-facing test of D3-01, and its "[when]" and "we know because" clauses are exactly where M1 and the evidence ceiling bite.

**Evidence anchor.** Bududa / Bugisu / Mount Elgon is a coherent single anchor:

- Arabica on the Mount Elgon slopes: verified (excerpt).
- Documented coffee smallholders in Bududa on the Mount Elgon ranges: verified (excerpt).
- A Bagisu home language with a 2024 NCDC orthography: verified in existence and title. Scope was not verified; see M2.
- Census translation into Lumasaba: verified (excerpt).
- A large coverage-versus-usage gap in Uganda: verified (secondary): 96% 4G population coverage against roughly 22% mobile-internet use, with affordability and digital-skills barriers.

The 20% rural / 33% urban smartphone-ownership figure could not be independently verified here. Stage 4 intends to bind a design parameter to it, so it needs page-level confirmation (m7). The anchor is consistently and honestly separated from Noor throughout.

**Capture workflow.** On-plant capture with a backing card is safe and case-faithful. It avoids an invented detachment or storage protocol and keeps the leaf available for an immediate retake. It does create a **material Stage 4 feasibility dependency**, which D3-03's failure rule correctly anticipates. The development data's acquisition setting may not match backed on-plant captures. The card is "where practical", so both with-card and without-card conditions will occur. The leaf-side decision interacts with on-plant ergonomics. None of this needs a Stage 3 change, but Stage 4 must treat it as a gating item.

**Recommended disposition.** All three majors can be repaired in the Stage 3 record by clarifying text and labelling assumptions; none needs a new product concept. M2 may return a narrow language-labelling choice to the owner if verification shows a dialect or orthography mismatch. M1 and M3 may return a short sentence to the owner for approval because they shape the judge-facing story. After reconciliation, a narrow confirmation is enough; a full re-audit is not needed.

**Timing note (non-finding).** The ROADMAP records the submission deadline as 4 October 2026, 13:00 UTC, and this audit is dated 3 October 2026. All repairs below are text-level and were kept as narrow as possible so they can be reconciled in one pass.

---

## Owner-decision verification matrix

### D3-01 — One better agricultural decision (human-review attention triage)

- **Status:** Confirmed with minor caveat
- **Evidence:** Stage 3 l.101–111; Contract §3 (Stage 3 must lock "a real agricultural next-step prioritization decision in which the visual proposal materially affects what Noor prioritizes"); ROADMAP Stage 3 label semantics ("differ meaningfully in priority and/or urgency"); earlier audit M1 and W1.
- **Assessment:**
  - **A real decision.** The decision is whether this observation is prioritized for scarce review or kept as a lower-priority monitored record. It is proximal, demonstrable, and changes a real next action, not just whether a record is saved.
  - **Correctly bounded.** It does not become severity, treatment, yield or loss estimation (l.107: "not a disease-severity, treatment, or yield decision").
  - **The "Why" is too narrow.** It compares the AI only with "a form alone". The strongest simple baseline recorded in Stage 1 §10 is a printed symptom guide. Rust is visually distinctive, so that baseline is a credible competitor and the record should acknowledge it (m4).
  - **The judge-facing template is missing (M3).**
- **Required repair:** m4; M3.

### D3-02 — Assisted/weekend user day

- **Status:** Confirmed
- **Evidence:** Stage 3 l.113–121; Contract §1 (daughter boards; weekend-assisted use; screen-literacy constraint).
- **Assessment:**
  - Noor identifies the leaf and makes the disposition; the daughter operates the camera and navigation. This preserves human authority without making the daughter the agronomic authority.
  - No weekday smartphone access is invented. In practice, Noor's disposition will be mediated by the daughter reading and explaining the screen. That is consistent with the case, and it is precisely why the Lugisu strings matter for Noor rather than for the daughter.
- **Required repair:** None.

### D3-03 — On-slope, on-plant capture with optional backing card

- **Status:** Confirmed with minor caveat (material Stage 4 dependency recorded below)
- **Evidence:** Stage 3 l.123–135 and §7 l.317–321; Contract §8 (acquisition-setting warning); ROADMAP Stage 4 OOD design ("define and justify the required coffee-leaf capture side/orientation after the development-data acquisition characteristics are verified").
- **Assessment:**
  - **Consistent with the case.** Noor and her daughter walk to the plant together at the weekend, so no one is "carrying the smartphone on the slope" during Noor's working week. The Contract §4 prohibition targets depicting Noor with the smartphone while working or always having it. An accompanied weekend visit is not that.
  - **Avoids invented protocols.** It needs no detachment, transport or preservation, so no leaf-storage protocol is invented.
  - **The current leaf can be retaken in the same session**, which is what makes the `not sure → Retake` route workable.
  - **No agronomic instruction is invented.** I considered whether a card moved between infected and uninfected leaves creates a spore-handling concern. The incremental risk over Noor's ordinary daily contact with her plants is negligible, and no card-handling guidance should be invented. Not a finding.
  - **The failure rule is the right control.** It reopens the workflow if evidence cannot support it.
  - **Material Stage 4 dependency (not a Stage 3 defect):**
    1. The development data's acquisition setting (detached or attached leaf, background, lighting, leaf side) must be verified against backed on-plant captures.
    2. Because the card is "where practical", the evaluation and challenge set must cover both the with-card and without-card conditions.
    3. Any leaf-side rule must be ergonomically feasible for an assisted operator photographing an attached leaf.
    4. Claims must be scoped to the capture condition actually evaluated.
  - **Already partly captured.** The §7 bullet "whether available evidence can support the recommended on-plant field-photo workflow" covers this in substance; points 2 and 3 should be named explicitly when Stage 4 opens. No Stage 3 text change is required.
- **Required repair:** None at Stage 3. Carry the dependency into Stage 4.

### D3-04 — Observation-to-capture delay

- **Status:** Confirmed
- **Evidence:** Stage 3 l.137–145.
- **Assessment:**
  - **Honest about timing.** It states that the model evaluates the leaf photographed at capture, not the leaf as originally noticed.
  - **Two minor implications for Stage 4:**
    - The reviewer payload carries capture date, not first-noticed date. The optional farmer note can carry first-noticed timing.
    - "Record and monitor" should be read as continued ordinary observation by Noor, with the option to recapture at a later weekend session (m3).
- **Required repair:** None.

### D3-05 — Noor's own phone has no required role

- **Status:** Confirmed
- **Evidence:** Stage 3 l.147–155; Contract §1.
- **Assessment:**
  - It preserves the distinction between the two phones and avoids a fragile cross-device workflow.
  - It does not claim the own phone is "basic", which was the earlier N1 issue.
- **Required repair:** None.

### D3-06 — Extension officer as reviewer

- **Status:** Confirmed with minor caveat
- **Evidence:** Stage 3 l.157–167; Stage 1 §5 ("the only reviewer role explicitly named by the case"); ROADMAP lock list ("explicitly labeling any role not stated in Annex B as a project assumption"); the earlier Claude audit records the brief as saying extension "reached her village twice last year" (p. 6) and "twice a year at best" (p. 16).
- **Assessment:**
  - **The right choice.** Choosing the extension officer adds no unsupported institution.
  - **One overstatement.** l.161 says this is "the human-review role actually named by the case". The case names the **extension officer as the extension actor** and gives the visit cadence. It does not state that the officer reviews farmer-held device records. The officer's *role* is a case fact; their *function as RoyaCheck reviewer* is a project assumption, and the lock list requires that distinction to be labelled.
  - **ROADMAP drift.** ROADMAP still describes the handoff output as "extension/cooperative" (l.393, l.855). That reads against D3-06's "cooperative remains context, not an assumed reviewer".
- **Required repair:** m1.

### D3-07 — User-initiated, in-person, on-device review card

- **Status:** Confirmed with caveat — Major M1
- **Evidence:** Stage 3 l.169–179, §5 steps 10–12; Contract §1 and §6; Stage 1 §9 step 5.
- **Assessment:**
  - **The channel is sound.** It is offline-safe, needs no messaging endpoint, and implies no integration.
  - **Its feasibility depends on unstated co-presence** of the daughter's smartphone, an operator, and an extension officer who visits about twice a year (M1).
- **Required repair:** M1.

### D3-08 — No image export/transmission

- **Status:** Confirmed with minor caveat
- **Evidence:** Stage 3 l.181–191; ROADMAP Stage 4 privacy ("raw uploaded/captured images are not persisted by default", l.476); earlier audit M3 gap 2.
- **Assessment:**
  - **No export is correct.** It removes transmission, cloud and integration risk.
  - **But "the image remains local" implies retention.** The image would sit on the daughter's device until a review that may be months away. That conflicts with the Stage 4 default of no persistence, and the retention decision itself is not locked. The earlier audit asked that retention until handoff require consent; D3-09 addresses display consent, not retention consent.
- **Required repair:** m2.

### D3-09 — Explicit consent to show photo; deletion deletes image

- **Status:** Confirmed with minor caveat
- **Evidence:** Stage 3 l.193–201.
- **Assessment:**
  - **The display consent is meaningful, not cosmetic.** The card defaults to no image, and showing the photo requires a separate, explicit action at the moment of review. Deletion is coherent: it is cascading, and "if one exists" admits optional retention.
  - **Two precision gaps:**
    - "Noor/the assisted user" could be read as letting the daughter, who operates and owns the device, give consent on Noor's behalf. Consent should be Noor's, since it is her farm observation, with the daughter's help to operate.
    - Consent to *retain* the image is not addressed (see D3-08).
- **Required repair:** m2.

### D3-10 — Reviewer-visible payload

- **Status:** Confirmed
- **Evidence:** Stage 3 l.203–220; ROADMAP Stage 4 record schema.
- **Assessment:**
  - **Minimal and authority-preserving.** It includes the AI proposal, labelled as such, plus the human disposition and route. It excludes the score, geolocation, diagnosis, treatment, price and profile.
  - **Correct exclusion of `ai_score`.** The Stage 4 schema has an `ai_score` field, and D3-10 correctly keeps it off the reviewer card. Stage 4 must keep that boundary.
- **Required repair:** None.

### D3-11 — Bududa / Bugisu, Mount Elgon, Uganda as evidence anchor only

- **Status:** Confirmed with minor caveat
- **Evidence:** Stage 3 §3 l.43–97 and l.222–230; source verification below.
- **Assessment:**
  - **Coherent and honestly separated.** Coffee context, smallholder context and the connectivity gap are supported. The "not Noor's location" labelling appears in §2, §3, D3-11 and §6.
  - **Fragile in one place.** The language leg of the anchor depends on M2.
  - **Citation defects:** one URL appears inconsistent (m5), and the earlier audit's Stage 3 action to "adopt or drop IICA to match the chosen anchor" was not carried out (m6).
- **Required repair:** m5, m6, m7; M2 for the language leg.

### D3-12 — Lugisu fixed-string text pack, human-verified

- **Status:** Confirmed with caveat — Major M2
- **Evidence:** Stage 3 l.232–242, l.60–62, l.71–73.
- **Assessment:**
  - **The strategy is sound.** A fixed-string pack with independent human verification before submission is the right risk posture. It does not pretend machine output is validated, and Stage 3 correctly locks the language, not the strings.
  - **The language-evidence chain needs reconciliation (M2).** The record treats the census "Lumasaba" evidence as supporting "Lugisu" and never states their relationship. Two orthography traditions and regional dialects exist. The anchor is in south Bugisu.
- **Required repair:** M2.

### D3-13 — Less-supported-language answer

- **Status:** Confirmed
- **Evidence:** Stage 3 l.244–254; Contract §7.
- **Assessment:**
  - **Honest and technically coherent.** The visual inference really is language-independent, while safe use is not. Making no localized-usability claim until strings are validated is the right ceiling.
  - **"Reduce—not eliminate"** is an appropriately modest claim for the icon-led workflow.
- **Required repair:** None.

### D3-14 — Action-based label routing

- **Status:** Confirmed with minor caveat
- **Evidence:** Stage 3 l.256–270; ROADMAP Stage 3 label semantics; Contract §3–4.
- **Assessment:**
  - **Materially different, safe routes.** The three routes lead to different next actions.
  - **`not sure` separates fixable from unfixable uncertainty.** A correctable image-quality problem leads to a retake. An acceptable image that is still uncertain, out of distribution, or showing an unsupported condition leads to review, with no rust conclusion.
  - **`no visible rust` is never reassurance.** It is explicitly never "healthy", "all clear" or "no disease", and review stays available.
  - **Only the human disposition becomes formal**, and the routing governs review attention, not treatment.
  - **Two wording-precision issues:**
    - "RoyaCheck has **detected** visible evidence" is stronger than the AI-proposal framing used everywhere else.
    - "monitor" is undefined. It should not imply app-driven scheduling, reminders or tracking, which the MVP excludes.
  - **Safety rests on a later control.** Because a false `no visible rust` lowers review priority on a leaf Noor flagged, the route is safe only alongside Stage 4's pre-registered maximum confident-miss rate. ROADMAP Stage 4 already requires that rate. This is a dependency, not a finding.
- **Required repair:** m3.

### D3-15 — Explicitly unsolved branches

- **Status:** Confirmed
- **Evidence:** Stage 3 l.272–284; Contract §4; ROADMAP exclusions.
- **Assessment:**
  - **Consistent with the claim ceiling.** Yield cause, price, registry, extension capacity and treatment are all listed. §6 adds non-claims about Noor's country and smartphone ownership, consistent with Contract §4.
  - **Not listed, but handled elsewhere.** Field validation and Noor's location and language are not in D3-15 itself. They are covered by Contract §4, which is the single authoritative ceiling, and D3-15 does not need to duplicate them.
- **Required repair:** None.

---

## Blocking findings

None.

---

## Major findings

### M1 — In-person handoff depends on unstated device, operator and reviewer co-presence

- **Issue.**
  - **What D3-07 requires.** D3-07 locks an "in-person on-device review card at the next available extension encounter". That encounter needs three things together: (a) the daughter's smartphone, which holds the record and any retained image; (b) someone able to operate it, given the case's screen-literacy constraint; and (c) the extension officer.
  - **What the case says.** The officer reaches Noor's village or sub-county about twice a year at best. The smartphone belongs to a daughter who boards in the district town, and Noor uses it mainly at weekends with her help. Stage 3 itself correctly refuses to infer weekday smartphone access.
  - **What the record says.** Neither D3-07 nor workflow steps 10–11 say who operates the device at the encounter, or what happens if the visit falls on a weekday while the phone is away.
- **Why it matters.**
  - **The decision may not be actionable.** The "Review first" route is D3-01's actionable next step, and the official video must show "what happens next" in the user's day. If the handoff cannot plausibly happen under the case facts, the decision is decorative.
  - **The value statement depends on it.** The "[when]" clause of the organizer template (M3) cannot be filled in honestly without this.
- **Consequence if unrepaired.** Judges or the Stage 8 demo may show a review that silently assumes the phone is at home on a weekday. That contradicts the case the project has worked hard to respect, and it risks the Contract §4 smartphone-availability prohibition by implication.
- **Narrowest repair (D3-07 stays):**
  1. Add a clearly labelled **project assumption** to D3-07: the handoff happens only at an extension encounter when the household smartphone is physically present. For example, the visit falls when the daughter is home, or the household arranges for the phone to be there. At the encounter, the smartphone is operated by the daughter, or by the officer at Noor's request with the screen visible to Noor.
  2. State honestly that, given the case cadence, review of a "Review first" observation may wait up to the next qualifying encounter. The value is in arriving prepared and prioritized, not in speed.
  3. Add to §7 that Stage 4/8 must depict this co-presence condition rather than assume weekday device availability.
- **Owner touchpoint.** The wording of the assumption is the owner's call. It clarifies D3-07 rather than changing it.

### M2 — Lugisu / Lumasaaba naming, dialect and orthography chain is unreconciled for the Bududa anchor

- **Issue.**
  - **How the record uses the evidence.** It supports the Lugisu choice partly with census evidence that names **Lumasaba** (l.62, l.73). It requires strings to be verified "against the standardized orthography" (l.238), as if exactly one exists.
  - **What the excerpted evidence shows:**
    - A **Standard Lumasaaba Orthography** exists. It was first produced in 1994 and revised in 2013 by the Lumasaaba Language Board, and is based on the central Lugisu dialect.
    - A separate **Lugisu** orthography effort followed, reportedly because the standard materials were hard for northern Bagisu readers.
    - The language has regional varieties: northern, Ludadiri (Sironko, Bulambuli); central/southern, Lubuuya (Mbale, Manafwa, **Bududa**).
    - NCDC's recent local-language work appears to list Lugisu and Lumasaaba separately.
    - The 2024 census translated into "Lumasaba", and secondary sources describe Lumasaba as the main language of Bududa District.
  - **What I could not check.** I could not retrieve the NCDC *Lugisu Orthography 2024* PDF itself, so I cannot confirm whether its scope covers the southern/Bududa variety.
- **Why it matters.**
  - **The fact the choice rests on.** Contract §7 and the package ask whether the language is a defensible local/home language *for the anchor*. The Stage 3 rationale (l.240) rests on the NCDC document connecting Lugisu to Bugisu/Mount Elgon.
  - **The risk.** If the 2024 Lugisu orthography is oriented to northern varieties while the anchor sits in south Bugisu, strings validated against it may not suit the anchor's own speakers. The record would also be using "Lumasaba" evidence to support a differently named and differently standardized choice without saying so.
  - **Sensitivity.** The Lugisu/Lumasaaba naming is socially sensitive locally, which raises the cost of getting it wrong in a public submission.
- **Consequence if unrepaired.** A judge or reviewer familiar with the region could reasonably challenge the localization. The local-language requirement is a hard rule, and localization is part of the inclusivity criterion.
- **Narrowest repair (does not reverse D3-11; may refine D3-12):**
  1. Verify the scope of NCDC *Lugisu Orthography 2024* from the PDF: which varieties and districts it covers, and how it relates to the Standard Lumasaaba Orthography. Cite the page.
  2. Add one short paragraph to Stage 3 §3 stating the relationship between Lugisu and Lumasaaba: one language, the Gisu/Masaaba language of the Bagisu, with regional varieties and two orthography traditions. Say which name, variety and orthography the language pack targets.
  3. Require the independent human validator to be a reader of the targeted variety and orthography.
  4. If verification shows the Lugisu orthography does **not** serve the Bududa/south-Bugisu variety, return a narrow choice to the owner. Either keep Lugisu and describe the anchor's language leg at the Bugisu / Mount Elgon level, which D3-11's own wording already allows. Or label the pack Lumasaaba and target the standard orthography.
- **No translation or string choice is made by this audit.**

### M3 — Organizer value statement not instantiated although Stage 3 preconditions are now met

- **Issue.**
  - **The contract assigns it to Stage 3.** Contract §10: "Stage 3 must instantiate this template only after the agricultural next-step decision, assisted/weekend workflow, and handoff are owner-locked … Until Stage 3, no final judge-facing value statement is locked."
  - **The preconditions are met.** D3-01, D3-02/03/04 and D3-07 lock all three.
  - **The sentence is missing.** The Stage 3 record contains no instantiated "Because of this tool, [user] will [action] by [when] that they would otherwise [not do / do late / do worse]; we know because [evidence]." It also has no plan for what real evidence the final clause will cite. The ROADMAP lock list ("the exact judge-facing one-better-agricultural-decision statement") is satisfied only by D3-01's question form.
- **Why it matters.**
  - **It is the official claim.** The sentence is the organizer's required problem statement and the opening of the shortlist-gating video. It is where D3-01 becomes an actual development claim.
  - **It tests the weakest links.** The "[when]" clause depends on M1. The "we know because" clause must cite real evidence, not the fictional case (Contract §10), and must stay within the Contract §4 ceiling. No outcome evidence (yield, timeliness of real treatment) exists or will exist.
  - **Deferring it hides the gap.** Leaving it out of Stage 3 defers the hardest honesty test to the video stage, where time pressure is greatest.
- **Consequence if unrepaired.** Stage 3 would close without a contract-required output. The judge-facing claim could later drift beyond the ceiling under time pressure; "do late" would then imply faster treatment, which is a claim the project cannot support.
- **Narrowest repair:** Add an owner-approved instantiation to Stage 3. It should:
  - name Noor as the user;
  - make the action proximal: bring a prioritized, human-confirmed observation to the next qualifying review encounter;
  - make "[when]" consistent with M1;
  - make "[otherwise]" a modest comparison, such as without a structured, uncertainty-labelled record or a basis for which concern to raise first;
  - make "we know because" cite only real evidence. Suitable sources are the extension-cadence and assisted-device constraints, framed as case constraints and not as empirical proof; the Uganda common-data figures; published coffee-leaf-rust burden evidence for the anchor region; and the prototype's own pre-registered measurements from Stage 7, named as forthcoming.

  If the owner prefers to defer the instantiation, Contract §10 must be amended explicitly to name the later stage. That amendment is a consequential change requiring the owner's approval.

---

## Minor findings

### m1 — Reviewer-role labelling and residual "cooperative" handoff wording

- **Issue.** D3-06 calls the extension officer "the human-review role actually named by the case" (l.161). The case names the role and its cadence, not a record-review function. Separately, ROADMAP still says "deterministic extension/cooperative handoff-ready summary" (l.393) and "extension/cooperative handoff summary" (l.855).
- **Why it matters.** The ROADMAP lock list requires non-case functions to be labelled as assumptions. The "cooperative" wording contradicts D3-06's "cooperative remains context, not an assumed reviewer".
- **Repair:**
  - Reword l.161 to something like: "the extension officer is the only reviewer-capable role named by the case; using that officer as the RoyaCheck reviewer is a project assumption."
  - Change ROADMAP l.393 and l.855 to "extension handoff". This is a ROADMAP-only change; Stage 1 l.316 is closed, and contradicts nothing.

### m2 — Image retention (as distinct from display) consent on a shared device is not locked

- **Issue.**
  - **Conflict with the Stage 4 default.** D3-08 ("the image remains local") and D3-09 ("the locally retained image") imply the image persists until a review that may be months away. ROADMAP Stage 4 sets "raw uploaded/captured images are not persisted by default". Stage 3 does not say whether retention is opt-in.
  - **Whose consent.** "Noor/the assisted user" could let the device owner and operator consent on Noor's behalf.
- **Why it matters.** Responsible AI is a pass/fail criterion. The earlier audit's M3 gap 2 asked for consent to retain an image until handoff. The record is on the daughter's own device, which raises shared-device visibility.
- **Repair:** Add one sentence to D3-09 covering four points:
  - retaining the image with the observation is an explicit opt-in at save time, consistent with the Stage 4 default;
  - both retention and display consent are Noor's, given with her daughter's help;
  - if no image is retained, the review card is text-only;
  - the existing cascading delete applies.

  Shared-device visibility mechanics remain Stage 4 work.

### m3 — D3-14 wording precision ("detected"; "monitor")

- **Issue.** l.262 says "RoyaCheck has **detected** visible evidence". Elsewhere the output is consistently an AI *proposal*, and ROADMAP label semantics use "visible evidence consistent with … is present". "Record and monitor" does not define "monitor".
- **Why it matters.** Stage 8 UI and video copy will be drawn from this text. "Detected" sounds more definitive than an abstaining proposal. An undefined "monitor" invites reminder or tracking features that are out of scope.
- **Repair:**
  - Change "has detected" to "proposes that the image shows".
  - Define "monitor" as Noor's continued ordinary observation, with the option to recapture at a later weekend session, and no app-initiated reminders or scheduling implied.

### m4 — D3-01's AI-value rationale omits the strongest simple baseline

- **Issue.** The "Why" (l.109) compares the AI only with "a form alone". Stage 1 §10 lists a printed or laminated symptom guide as a baseline. Coffee leaf rust's orange, powdery lesions are visually distinctive, so that guide is the strongest competitor for this specific triage.
- **Why it matters.** The judging question explicitly asks whether a simpler tool would do the same job. A rationale that beats only the weakest baseline invites the obvious counter-question.
- **Repair:** Add one or two sentences to D3-01:
  - the symptom guide is the strongest simple baseline;
  - the claimed AI contribution is a consistent, abstaining visual second opinion under screen-literacy and assisted-use constraints;
  - any superiority over the guide is a measurement question for later stages and not a Stage 3 claim, consistent with Stage 1 §10.

### m5 — GSMA Uganda press-release URL appears inconsistent

- **Issue.** Stage 3 l.86 cites `…ugandas-gdp-connecting-4-million-more-citizens-by-2030/`. The audit package and the URL surfaced by search use `…ugandas-gdp-connect-4-million-more-citizens-by-2030/`.
- **Why it matters.** The link may be broken, which weakens the data-grounding audit trail. I could not test it directly because of the egress block.
- **Repair:** Use the canonical URL and check that it resolves.

### m6 — IICA (Americas) rust source not adopted or dropped for the chosen anchor

- **Issue.** The earlier post-reconciliation audit (M5 residual) asked Stage 3 to "adopt or drop IICA to match the chosen anchor". Stage 1 §4 still cites IICA 2019 (regional coffee-rust early warning in the Americas), and Stage 3 is silent on it.
- **Why it matters.** It leaves a second, geographically inconsistent context citation beside the single Uganda anchor that Contract §8 asks for.
- **Repair:** Add one line to Stage 3 §3 saying IICA is retained only as general coffee-leaf-rust context and is not anchor evidence. Optionally note that Uganda / Mount Elgon coffee-leaf-rust evidence will be cited at Stage 4 if needed. Stage 1 does not need reopening.

### m7 — Figures intended to bind a Stage 4 parameter lack page/table-level citations

- **Issue.** §3 states that the anchor facts "were rechecked", but gives no page or table references.
- **What I could verify:**
  - Coverage/usage gap: verified (secondary). GSMA's Uganda report, as reported, gives 96% 4G population coverage and about 22% mobile-internet use.
  - 33% urban / 20% rural smartphone ownership: **not independently verified** in this audit.
- **Why it matters.** Stage 4 intends to bind a design parameter to the 20% figure. A binding figure needs an exact, checkable citation.
- **Repair:** Add the page or table locator for the 20%/33% figure in GSMA SOMIC 2025, and for the census translation list. If the 20% figure cannot be located, Stage 4 should bind to a verified figure instead.

---

## Cross-decision coherence review

**End-to-end walk.** The fifteen decisions form one realistic Noor workflow, with the single gap identified in M1:

1. **Weekday.** Noor notices a suspicious leaf while working; the app is not present (D3-04; Contract §1).
2. **Next weekend.** Noor and her daughter go to the plant. The daughter operates the device, and Noor points out the leaf and decides (D3-02, D3-03). The current leaf is evaluated (D3-04).
3. **Proposal.** The bounded proposal maps to one of three action routes. `not sure` with a fixable image problem leads to a retake while the leaf is still accessible on the plant, which is a quiet coherence benefit of on-plant capture (D3-03 × D3-14).
4. **Record.** Noor confirms, corrects or requests review, and the human disposition becomes the record (D3-14). The record and any retained image stay on the device (D3-08; m2).
5. **Handoff.** At an extension encounter, Noor initiates the card. The reviewer sees the minimal payload and the photo only if Noor consents (D3-07, D3-09, D3-10). **Gap: device and operator co-presence (M1).**
6. **No autonomous action** at any point. Noor's own phone is never needed (D3-05).

**Internal consistency checks:**

- **Routing × payload:** consistent. The route is visible to the reviewer, and the score is not.
- **Routing × claim ceiling:** consistent. No route implies severity, urgency of treatment, loss or farm health.
- **Anchor × language:** coherent at the Bugisu level, unresolved at the Bududa/variety level (M2).
- **Language × user:** consistent. The daughter mediates, so the Lugisu strings serve Noor's comprehension of the proposal and of the consent step, which is where localization matters most.
- **Retention × Stage 4 default:** inconsistent until m2 is applied.
- **Decision × value statement:** incomplete until M3.

---

## Evidence-anchor and language review

| Proposition | Result | Basis |
|---|---|---|
| Arabica coffee is grown in highland areas on the slopes of Mount Elgon (MAAIF Coffee Manual 2026) | **Verified (excerpt / consistent secondary)** | Search excerpts of MAAIF/UCDA material: "Arabica Coffee is grown in highland areas"; Mount Elgon / Bugisu Arabica grades. The 2026 manual PDF itself was not retrievable. |
| Bududa district on the Mount Elgon ranges has documented coffee farmers (World Bank 2018) | **Verified (excerpt)** | The World Bank page features a coffee farmer in Bududa district and "coffee farmers in Bududa district on the Mount Elgon ranges". |
| Lugisu is spoken by the Bagisu of Bugisu on the slopes of Mount Elgon; standardized 2024 orthography (NCDC) | **Partially verified** | Bagisu on the western slopes of Mount Elgon speaking Lugisu/Masaba: verified (secondary). NCDC Lugisu orthography resource exists: verified (search). **Scope relative to the Standard Lumasaaba Orthography and to the southern/Bududa variety: not verified (M2).** |
| 2024 census questionnaire translated into Lumasaba among 20 local languages (UBOS) | **Verified (excerpt)** | The excerpted list of 20 languages includes Lumasaba. |
| GSMA Consumer Survey 2024: Uganda smartphone ownership 33% urban / 20% rural (SOMIC 2025) | **Not independently verified** | Not surfaced by search excerpts; needs a page citation (m7). |
| High 4G coverage with a large usage gap; affordability, energy and skills barriers (GSMA Uganda 2025) | **Verified (secondary)** | Reported: 96% 4G population coverage, ~22% active mobile-internet use; barriers include smartphone prices and digital illiteracy. The energy barrier was not separately confirmed. |

**Separation from Noor.** Honest and consistent. Every use is labelled as an anchor; §3 explicitly says the facts "do not establish Noor's nationality, location, language, device ownership, or actual network conditions". No text infers that Noor is Ugandan, Bagisu, or a Lugisu speaker.

**Language choice.**

- **Defensible type of language.** Lugisu/Lumasaaba is a genuine home language of the anchor population, not a national or vehicular language, so option (A) of Contract §7 is the right category. Luganda, English or Swahili would be the weaker option (B).
- **Variety and orthography still open.** The open question is which variety and orthography, not whether the language is local (M2).
- **Fixed-string strategy is sound.** A small fixed pack with independent human verification is sufficient for the "named local language interaction" requirement, provided it is visibly demonstrated (Stage 8) and the validation is real. Stage 3 correctly locks no strings and does not treat machine translation as validated.

---

## AI-value / simpler-baseline review

**What the learned component adds.** It performs the one task a form, checklist or search cannot: it interprets the leaf image and proposes `visible rust`, `no visible rust` or `not sure`, with abstention. That proposal changes which next action the record carries. The AI value is therefore causal to the decision, not decorative.

**Honest ceiling:**

- **Strongest baseline.** The strongest simple competitor is a printed symptom guide used by Noor and her daughter. Rust is a visually salient condition, so the AI's marginal value lies in four things:
  1. a consistent, image-anchored second opinion when no expert is available for months;
  2. explicit abstention instead of overconfident self-diagnosis;
  3. a structured record of what the image showed, which the reviewer can inspect;
  4. operation under screen-literacy and assisted-use constraints.
- **Not yet measured.** Whether it outperforms the guide is unmeasured, and Stage 3 does not claim it does. The record should say so explicitly (m4).
- **Main risk.** A false `no visible rust` deprioritizes a real rust observation. The route stays safe because it never reassures and keeps review available. Ultimately, though, the AI's value depends on Stage 4's confident-miss ceiling and coverage floor, both of which ROADMAP already requires to be pre-registered. If those cannot be met, Stage 2's hard reduction triggers apply ("visual component adds no defensible value beyond the strongest simple baseline").

**Conclusion:** the route demonstrates a real learned-AI contribution in kind. Its size is a measurement question, correctly left to Stages 4 and 7.

---

## Safety / claims review

- **Human authority.** Preserved. Noor is final decision-maker. Only the human disposition becomes formal. The AI proposal is labelled as such to the reviewer. No route triggers treatment, contact or sending.
- **Uncertainty.** `not sure` is a real route, and it splits fixable image-quality uncertainty from acceptable-but-uncertain, out-of-distribution or unsupported-condition uncertainty. Unfixable uncertainty goes to review with no rust conclusion. This is a well-designed fail-safe.
- **Review routing.** Routing allocates attention, not urgency. `no visible rust` keeps review available and is never "healthy", "all clear" or "no disease". The language risk is limited to "detected" (m3).
- **Consent and privacy.** No export, explicit display consent, cascading deletion and a minimal payload are a strong base. The retention-consent gap and the whose-consent wording (m2) should be closed before Stage 4 inherits them. The payload excludes geolocation and profile data.
- **Claim ceiling.**
  - Consistent with Contract §4.
  - D3-15 and §6 restate the non-solutions without creating a competing list. The ROADMAP edit points the gate to the "Contract §4 claim ceiling", which resolves the earlier m5 dual-list problem.
  - No text claims yield, income, price, treatment, diagnosis, field validation or Noor's nationality, location or language.
  - The one latent claim risk is the uninstantiated value statement (M3).
- **Out of scope for the MVP:** prerecorded or voice prompts are not adopted, which is acceptable. No voice is needed.

---

## Stage-boundary review

I found **no Stage 4-or-later decision locked prematurely.** Specifically:

- **Model, architecture, training method, runtime:** not chosen. "Compact browser-local vision" is the pre-existing canonical contract from the closed foundation, not a Stage 3 lock.
- **Definitive dataset:** not chosen. BRACOL is mentioned only as the case-relevant candidate in earlier closed documents; Stage 3 adds nothing.
- **Threshold, abstention and OOD rules:** not chosen; carried to §7.
- **Leaf-side and orientation rule:** expressly deferred (D3-03 failure rule). The backing card is a product-workflow choice, not a technical acquisition specification, and it is softened by "where practical". That is legitimate Stage 3 scope.
- **Held-out and test procedure, evaluation metrics, acceptance thresholds:** not chosen.
- **UI:** D3-09's "show photo to reviewer" confirmation and D3-14's route names are product-level semantics, not UI design. Their visual design and exact wording are left open. Legitimate.
- **Implementation, deployment, video, submission:** not chosen.
- **Common-data binding:** §3 names the 20% figure only as the "strongest current candidate" and leaves the binding to Stage 4. Legitimate.

The ROADMAP diff makes only the gate-terminology correction and the status and next-action updates. Both are accurate.

---

## Stage-control decision

1. **Can the owner-accepted D3-01 through D3-15 decisions stand?**
   **Yes.** None needs reversal.
   - D3-07 and D3-12 stand subject to the clarifications in M1 and M2.
   - M2 may return a narrow labelling choice to the owner if verification shows a variety or orthography mismatch. The choice is "Lugisu with a Bugisu-level language rationale" versus "Lumasaaba-labelled pack for Bududa". It is not a change of product route.

2. **Can Stage 3 close after reconciliation of this audit?**
   **Yes, once M1–M3 are reconciled in the Stage 3 record.** M3 is a contract-required Stage 3 output. M1 and M3 involve judge-facing wording that the owner should approve. The minor findings should be applied in the same pass; none independently blocks closure.

3. **Can PR #11 proceed toward owner review/merge after required repairs?**
   **Yes.** The repairs are text-level edits to `STAGE_03_PRODUCT_ROUTE_LOCK.md` plus two ROADMAP wording fixes (m1), followed by owner approval of the M1/M3 wording and, if triggered, the M2 choice.

4. **Is another independent Stage 3 audit required after repair, or would a narrow confirmation suffice?**
   **A narrow confirmation is enough**, limited to the repair diff against M1–M3 and m1–m7. A full Stage 3 re-audit is not warranted unless reconciliation changes a D3 decision's substance beyond the repairs described here. The next full independent audit should remain the Tier A Stage 4 pre-registration audit.

5. **Does anything discovered here require reopening Stages 0–2?**
   **No.**
   - The IICA residual (m6) is handled by a Stage 3 note.
   - The ROADMAP "cooperative" wording (m1) is a ROADMAP-only fix that does not alter any closed stage decision.
   - No case fact, rule interpretation or concept-selection rationale in Stages 0–2 is contradicted.

---

## Dependencies carried to Stage 4 (identified, not decided)

- **Capture domain.** Verify the development data's acquisition setting against backed, on-plant, assisted capture. Cover both with-card and without-card conditions. Choose a leaf-side rule that an assisted operator can actually carry out on an attached leaf. Scope claims to the evaluated capture condition (D3-03).
- **Confident-miss ceiling.** Pre-register it as the control that makes `no visible rust → Record and monitor` safe (D3-14).
- **Payload boundary.** Keep `ai_score` out of the reviewer-visible payload (D3-10).
- **Shared-device mechanics.** Define visibility and deletion mechanics on the daughter's device, consistent with m2.
- **Binding figure.** Bind a verified common-data figure with an exact citation (m7).
- **Language validation route.** A validator of the targeted variety and orthography (M2).

---

## Sources consulted for anchor verification (search excerpts; direct retrieval blocked)

- World Bank, *Making Farming More Productive and Profitable for Ugandan Farmers* — https://www.worldbank.org/en/country/uganda/publication/making-farming-more-productive-and-profitable-for-ugandan-farmers
- UBOS, *NPHC 2024 Final Report Vol. I* (mirror surfaced by search) — https://uctvuganda.org/wp-content/uploads/2025/01/National-Population-and-Housing-Census-2024-Final-Report-Volume-1-Main.pdf
- GSMA Uganda press release (canonical URL as surfaced) — https://www.gsma.com/newsroom/press-release/gsma-unveils-latest-report-showing-digital-policy-reforms-could-add-ugx-14-6-trillion-to-ugandas-gdp-connect-4-million-more-citizens-by-2030/
- Business Times Uganda, reporting the GSMA Uganda report — https://businesstimesug.com/ugandas-digital-leap-fast-connections-slow-adoption-gsma-report/
- Daily Monitor, "Itsu Iya Masaaba: A Tale of two languages" — https://www.monitor.co.ug/uganda/oped/commentary/itsu-iya-masaaba-a-tale-of-two-languages-4505046
- NCDC, terminology-development training (Lugisu and Lumasaaba) — https://ncdc.go.ug/2026/09/04/ncdc-strengthens-indigenous-language-education-through-terminology-development-training/
- Wikipedia, *Masaba language* / *Bugisu sub-region* / *Bududa District* (secondary, used only for dialect geography) — https://en.wikipedia.org/wiki/Masaba_language
- UCDA, *Coffee Farming* — https://ugandacoffee.go.ug/coffee-farming
