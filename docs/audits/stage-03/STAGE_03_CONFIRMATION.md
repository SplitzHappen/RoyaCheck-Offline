# Stage 3 Narrow Confirmation — RoyaCheck Offline

**Auditor:** Claude (independent narrow confirmation, Claude Code)
**Package followed:** `docs/audits/stage-03/STAGE_03_CONFIRMATION_PACKAGE.md`, read at the confirmed head
**PR:** `SplitzHappen/RoyaCheck-Offline#11` (draft, open)
**Confirmed head:** `chatgpt/stage-03-product-route-lock` at `8f0b72cdb69792bc5b4cec9f698fd2917ed573ff`. This matches the expected head and the GitHub PR head.
**Base:** `main` at `4c44047195857be44b00015b20d2856acf4e3a21`. This matches.
**Original audited head:** `32d966413aa2eb8dfdd84fceac5b0f359f8dc7d4`
**Repair diff inspected:** `32d9664..8f0b72c`, six commits, five files:
- `STAGE_03_PRODUCT_ROUTE_LOCK.md`
- `ROADMAP.md`
- `STAGE_03_AUDIT.md` (preserved copy)
- `STAGE_03_RECONCILIATION.md`
- `STAGE_03_CONFIRMATION_PACKAGE.md`

**Date:** 2026-10-03
**Output path:** `docs/audits/stage-03/STAGE_03_CONFIRMATION.md` on branch `claude/lucid-curie-dr3x4d`. The package names no output path, so this follows the original audit's convention. No audited file was modified.

**Scope.** This confirmation checks only M1–M3 and m1–m7, whether the original audit was preserved verbatim, and direct regressions. It is not a second Stage 3 audit and makes no Stage 4 choice.

**Source-access limitation, unchanged from the original audit.** This environment's network policy still blocks direct retrieval of the NCDC, UBOS and GSMA PDFs. I can confirm that the new page and figure locators are *present, specific and consistent with independent material*. I cannot confirm their exact page accuracy. Where independent corroboration exists, I note it below.

---

## Verdict

**PASS WITH MINOR REPAIRS**

- Repairs confirmed: **10 of 10** (M1, M2, M3, m1–m7)
- New blocking findings: **0**
- New major findings: **0**
- New minor findings: **1** (N1, record traceability only; see Regression check)

The single minor repair is a one-line reconciliation-record entry. It can be made in the same commit that reconciles this confirmation, and needs no further Claude review.

---

## Audit preservation check

**Confirmed verbatim.** The git blob for `docs/audits/stage-03/STAGE_03_AUDIT.md` at `8f0b72c` is `70d1488b064bf1dc326d93d9a4491b81ba6d997f`. That is byte-identical to the blob in the original audit commit `4ef246e` on `claude/lucid-curie-dr3x4d`. Nothing was rewritten during reconciliation.

---

## Repair confirmation matrix

### M1 — qualifying extension handoff / device-operator-reviewer co-presence

- **Status:** Confirmed
- **Evidence:** Stage 3 D3-07 (l.176–182); §6 step 10 (l.326); §8 carry-forward (l.359); D3-14 `visible rust` wording (l.273); §5 value statement (l.305).
- **Reason:**
  - **Channel unchanged.** D3-07 is still a user-initiated, in-person, on-device handoff.
  - **Encounter now bounded.** The handoff is limited to a "qualifying extension encounter when the household smartphone is physically present".
  - **Assumption labelled.** Co-presence is explicitly a "project assumption, not a case fact".
  - **Operators drawn from the case.** The operator is the daughter when present, or the officer at Noor's request with the screen visible to Noor. Neither choice creates weekday device access, and the record says so explicitly.
  - **Honest about delay.** `Review first` "may still wait until the next qualifying encounter".
  - **Value correctly framed.** The claim is arriving prepared and prioritized, "not accelerating extension-service availability".
  - **Consistent throughout.** The workflow, the Stage 4 carry-forward, D3-14 ("next available qualifying review opportunity") and the value statement all use the same condition.
- **Repair needed:** None.
- **Non-blocking observation:** D3-01's decision question (l.108) still says "next available review opportunity", without "qualifying". This is compatible, since a qualifying encounter is the available one, so it is not a contradiction. Harmonizing it is optional.

### M2 — Lugisu / Lumasaaba evidence, variety and orthography precision

- **Status:** Confirmed
- **Evidence:** Stage 3 §3 source verification note (l.72–74); D3-12 (l.241–253); §8 carry-forward; Reconciliation §2 row M2.
- **Reason:**
  - **Language unchanged.** Lugisu stays the owner-approved language, now explicitly scoped to the "Bugisu / Mount Elgon anchor context".
  - **No longer treated as interchangeable.** D3-12 states that NCDC recognizes regional "Lugisu/Lumasaaba variation rather than treating those labels or forms as interchangeable".
  - **The record does not claim NCDC proves the Bududa variety.** It states explicitly that the document "does not by itself establish the appropriate Bududa variety" (D3-12), and that the appendix "does not itself establish which variety should be used for Bududa" (l.73).
  - **Validator requirement matches the confirmation request exactly.** Final critical strings need a "human reader familiar with the Bududa / south-Bugisu target variety and the orthographic convention actually used".
  - **Return-to-owner trigger present.** Any change of the public label or orthography to Lumasaaba returns to José Antonio.
  - **NCDC locators specific; content consistent.** The NCDC content represented is: the preface (PDF p. 6) tying Lugisu to the Bagisu of Bugisu / Mount Elgon, and the dialect appendix (PDF pp. 83–92) comparing Ludadili, Luhalasi, Lufumbo and Lumasaaba forms. Independent dialect inventories (OLAC/Ethnologue-derived) list Ludadiri, Luwalasi, Lufumbo and Lumasaaba as names or varieties of the same language. The r/l and w/h spelling differences fit an orthography-specific spelling, but the exact pages could not be checked (see limitation).
- **Repair needed:** None.

### M3 — organizer value statement

- **Status:** Confirmed
- **Evidence:** Stage 3 §5 (l.301–311); Reconciliation §2 row M3.
- **Reason:**
  - **Instantiated and owner-approved.** The sentence follows the organizer's slots: user (Noor), action (bring a prioritized, human-confirmed observation), when (the next qualifying encounter with the smartphone present, consistent with M1), otherwise (without structured, uncertainty-labelled visual triage), and evidence.
  - **The claim stays proximal and prototype-level.** The record explicitly disclaims faster extension service, better treatment, improved yield, increased income and real-world farm impact.
  - **The prospective evidence clause is honestly labelled.** It is a "claim structure and ceiling" and must be "replaced or supplemented with the actual measured evidence" before final submission.
- **Repair needed:** None.
- **Non-blocking observation for Stage 10 (no Stage 3 action):**
  - **Missing literal "by".** The organizer template reads "will [action] **by** [when]". The instantiated sentence carries the "[when]" as "to the next qualifying extension encounter" and omits the literal "by". Contract §12 calls for the "exact organizer problem-statement structure" in the video.
  - **When to fix.** The evidence clause must be rewritten before submission anyway, so the literal slot wording can be restored then, with the owner's approval. Restoring it does not change the claim's meaning or ceiling.

### m1 — reviewer-role labelling / cooperative-handoff wording

- **Status:** Confirmed
- **Evidence:** Stage 3 D3-06 (l.164); ROADMAP l.393 and l.855 (diff); grep of `ROADMAP.md` at `8f0b72c`.
- **Reason:**
  - **Labelled as an assumption.** D3-06 says the case names the extension role but "does not state that the officer reviews RoyaCheck records". Using the officer as reviewer is "an explicit project assumption grounded in the case-supported role".
  - **Cooperative wording removed.** Both ROADMAP "extension/cooperative" handoff phrases now read "extension", and no "cooperative" handoff wording remains anywhere in ROADMAP.
- **Repair needed:** None.

### m2 — image-retention and display consent

- **Status:** Confirmed
- **Evidence:** Stage 3 D3-09 (l.198–210).
- **Reason:**
  - **Retention is opt-in.** It is an explicit "opt-in at save time", consistent with the ROADMAP Stage 4 non-persistence default.
  - **Both consents are Noor's.** Retention and display consent both belong to Noor; "the daughter does not consent on Noor's behalf", and assistance is not substitution.
  - **Text-only fallback.** Review is text-only if no image is retained.
  - **Display needs a separate step.** Showing the photo needs its own explicit confirmation by Noor.
  - **Deletion still cascades**, and shared-device mechanics are correctly left to Stage 4.
- **Repair needed:** None.

### m3 — safer `visible rust` wording and `monitor` definition

- **Status:** Confirmed
- **Evidence:** Stage 3 D3-14 (l.273, l.275).
- **Reason:**
  - **Proposal, not detection.** `visible rust` now reads "RoyaCheck proposes that the image shows visible evidence consistent with coffee leaf rust", and "has detected" is gone.
  - **"Monitor" defined.** It means "Noor's ordinary continued observation of the plant, with the option to recapture at a later weekend-assisted session". The record explicitly excludes app reminders, automated surveillance and scheduling.
- **Repair needed:** None.

### m4 — strongest simple baseline

- **Status:** Confirmed
- **Evidence:** Stage 3 D3-01 "Why" (l.112).
- **Reason:**
  - **Baseline named.** A printed or laminated coffee-rust symptom guide is named as the strongest simple baseline.
  - **AI contribution bounded.** It is a consistent, image-anchored second opinion that can abstain and attach a bounded proposal to a structured record.
  - **No superiority claimed.** Any measurable advantage is "a later evaluation question, not a Stage 3 claim".
- **Repair needed:** None.

### m5 — GSMA Uganda URL

- **Status:** Confirmed
- **Evidence:** Stage 3 §3 Sources (l.89).
- **Reason:** The URL now uses the canonical `…ugandas-gdp-connect-4-million-more-citizens-by-2030/` form. That matches the URL returned by web search for the release. Live resolution could not be tested here.
- **Repair needed:** None.

### m6 — IICA as general context

- **Status:** Confirmed
- **Evidence:** Stage 3 §3 (l.80).
- **Reason:** IICA 2019 is "retained only as general coffee-leaf-rust context. It is not evidence for the Uganda/Bugisu implementation anchor." Stage 1 does not need reopening.
- **Repair needed:** None.

### m7 — exact evidence locators

- **Status:** Confirmed (locators present and specific; page accuracy not directly verifiable here)
- **Evidence:** Stage 3 §3 source verification note (l.72–75).
- **Reason:** All three required locators are present:
  - **GSMA SOMIC 2025**, *Trends*, Figure 15, PDF p. 31: 33% urban / 20% rural Uganda smartphone ownership (GSMA Consumer Survey 2024).
  - **UBOS NPHC 2024 Final Report Vol. I**, PDF p. 5: the 20 translation languages including Lumasaba. Search excerpts corroborate that this list includes Lumasaba.
  - **NCDC**: PDF p. 6 and pp. 83–92.

  The 20% figure itself remains uncorroborated by any source reachable here. However, the record now gives a checkable locator, and the reconciliation correctly requires Stage 4 to "bind only a verified figure and keep the exact citation". That satisfies m7, whose requirement was a page or table locator plus a fallback rule.
- **Repair needed:** None.

---

## Regression check

**No new blocking or major contradiction. One new minor traceability finding.**

### N1 (Minor, record traceability) — unlisted edit to owner-approved D3-10

- **Issue.** The repair diff changes D3-10's payload bullet from "review-priority route" to "action route (`Review first` / `Retake or request review` / `Record and monitor`)" (l.223). This edit is not among the findings listed in `STAGE_03_RECONCILIATION.md`. The owner authorized "one bounded reconciliation of M1–M3 and m1–m7".
- **Assessment.** The edit is **substantively neutral and an improvement**. It aligns D3-10's terminology with D3-14's action-based routing and with the original audit's request to avoid priority or severity framing. The reviewer still sees exactly the same information. It is not a silent change of meaning, but it is an unrecorded change to an owner-approved decision. The owner-control model (Stage 3 §9 step 3) depends on every such change being traceable.
- **Repair.** Add one line to `STAGE_03_RECONCILIATION.md` recording that D3-10's payload bullet was renamed from "review-priority route" to "action route (…)" for consistency with D3-14, with no change to payload content. Note the owner's acknowledgement in the same commit that reconciles this confirmation. No further Claude review is needed.

### Other regression checks (none found)

- **Owner-approved decisions D3-01 to D3-15.** Apart from N1, every substantive change maps to an authorized M1–M3 / m1–m7 repair. No decision was reversed or widened:
  - D3-07 still has no messaging or integration.
  - D3-08 still has no export.
  - D3-12 still names Lugisu.
  - D3-14's three routes are unchanged in substance.
  - The section renumbering (§5 → §6 through §8 → §9) breaks no internal cross-reference. The only "§7" references are in the preserved historical audit and point to the pre-repair numbering, which is acceptable for a frozen record.
- **Stage 4 boundary.** No premature technical choice. The new carry-forward items (with-card and without-card evaluation, an ergonomically feasible leaf-side rule, co-presence depiction, a target-variety validator) are dependencies, not decisions. D3-09's "consistent with the later technical default" points to the existing ROADMAP Stage 4 rule and makes no new one. No model, dataset, runtime, threshold, architecture, leaf-side rule, UI, deployment, video or submission choice was made.
- **Claim ceiling.** Contract §4 still holds:
  - The value statement explicitly disclaims faster extension service, treatment, yield, income and farm impact.
  - The `visible rust` wording is weaker than before.
  - `no visible rust` still never means healthy.
- **Minor internal tension, not a finding.** §3 "Why this anchor is coherent" item 6 (l.64) still lists "energy reliability" among GSMA's Uganda barriers. The repaired verification note conservatively drops it ("any additional barrier used later must be cited directly"). Secondary reporting of the GSMA Uganda report does cite "unreliable energy supply", so item 6 is factually supported, and the two passages do not conflict in substance. Optional harmonization only.

---

## Stage-control answer

1. **Can the owner-approved D3-01 through D3-15 decisions now stand without further Stage 3 repair?**
   **Yes.** All ten audit findings are confirmed repaired, and no decision needs further substantive change. N1 is a one-line traceability entry in the reconciliation record, not a repair to any D3 decision.

2. **Can Stage 3 proceed to owner closure/merge review?**
   **Yes, once N1's one-line reconciliation entry is added.** That can be done in the same commit that reconciles this confirmation. José Antonio's explicit closure and merge authorization remains the controlling gate.

3. **Is another Claude audit required before Stage 3 closes?**
   **No.** N1 is purely a record-keeping change that the owner can verify directly. The next independent Claude audit should be the Tier A Stage 4 pre-registration audit, as planned.

4. **Does any finding require reopening Stages 0–2?**
   **No.** The IICA classification (m6) is handled within Stage 3. The ROADMAP wording fix (m1) changes no closed-stage decision. Nothing in the repair contradicts a Stage 0–2 case fact, rule interpretation or concept-selection rationale.

---

## Carried forward (informational; not Stage 3 repairs)

- **Stage 10.** Restore the literal "by [when]" slot when the evidence clause is replaced with measured results (owner approval required for the wording).
- **Stage 4.** Verify the GSMA Figure 15 / PDF p. 31 figure before binding any design parameter to it. Check the NCDC page locators when the language-validation route is set up.
- **Optional.** Harmonize D3-01's "next available review opportunity" with "qualifying", and harmonize §3 item 6's energy-barrier wording with the verification note.
