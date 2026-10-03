# Claude Independent Audit — Annex B / Noor Case Alignment

**Preservation note:** The audit body below is reproduced from the independent Claude audit delivered after review of PR #9 at the then-verified head `b893fbbe20ab4d9a74702cddab407454ac4acd25`. The findings are preserved rather than silently rewritten. Conversational progress lines preceding the report heading are omitted.

---

# Independent adversarial audit: Annex B / Noor case alignment (PR #9, `SplitzHappen/RoyaCheck-Offline`)

**Scope check:** The branch head is `b893fbbe20ab4d9a74702cddab407454ac4acd25`, which matches the expected handoff. The base is `main@97c8d71`. The PR changes exactly the seven files named in the package and nothing else. The source of truth was the original PDF: pp. 3–12 and Annex B, pp. 16–17.

**Output transport:** This report exists only in this conversation. The prompt named no review path or output branch, and this session has read-only access to that repository, so nothing was written to GitHub.

---

## 1. Verdict: **FAIL/BLOCKED** (on major findings; there are zero blockers)

The route survives. The foundation can't be re-closed as written, because six major issues would carry straight into the Stage 3 lock. All six are documentation repairs, not route changes. None of the three verdict labels fits exactly: "PASS WITH MINOR REPAIRS" would understate these issues, and nothing here meets the blocking definition.

## 2. Counts: **0 blockers / 6 majors / 8 minors**

## 3. Blocking findings

None. I tested two candidates against the BLOCKING definition and rejected both:

- **Shared smartphone access (weekend-only, with help).** This doesn't make the route impossible. It makes the user-day story wrong as currently written (see M2).
- **Weak decision framing.** The route can answer the challenge once the decision is restated (see M1).

The brief itself anticipates this route:
- The glossary's computer-vision example is "identifying a disease on a coffee leaf" (p. 12).
- Annex B lists BRACOL as "directly relevant to Noor's crop".
- "Identifying a crop… problem", "documenting a field observation" and "connecting evidence to… extension-service next step" are named challenge examples (p. 16).

## 4. Major findings

### M1. The "one better agricultural decision" is about the tool, not about farming, and the AI doesn't change it

- **Where:** Contract §3 (l.61); Stage 1 §3 (l.73); Stage 2 §5.5 (l.254) and §8 (l.332); ROADMAP l.60.
- **The issue:** The decision is "should this be documented and flagged… rather than treated as a confident model answer or left only to memory?"
  - The first alternative ("a confident model answer") only exists if a model exists. It's a straw man the tool sets up and then knocks down.
  - The second alternative ("memory") is solved by a phone camera plus a text message. No AI is needed.
  - Noor can flag any leaf she finds suspicious whatever the model says. So the visual proposal never changes the decision.
- **Why it matters:** The brief's test is explicit: "If SMS, a spreadsheet, or a Google search could do the same job, AI may not be the best tool" (pp. 6–7). That test drives the 15% AI-value criterion, and it bears on the 20% relevance criterion.
- **Second problem:** The provisional value statement (Contract §10, l.206) doesn't follow the organizer's template, "Because of this tool, [user] will [action] by [when] that they would otherwise [not do / do late / do worse]; we know because [evidence]" (p. 10). Its "we know because" clause cites the fictional case itself instead of evidence.
- **Stronger alternative (owner's choice, not mine):** Restate the decision as Noor's next agricultural step, with the visual proposal informing it. For example: "Does this suspicious coffee leaf show visible rust that warrants raising it with my cooperative/extension contact now, with a photo-backed record, or do I record it and keep watching?" Each label then routes differently: `not sure` → ask a person; `visible rust` → raise it now; `no visible rust` → record it, and review is still offered.
  - This makes the AI matter to the decision.
  - It also makes the already pre-registered confident-miss metric meaningful, because a missed rust case now has a real cost: delayed escalation.
  - The trade-off is real. Making the AI matter raises the safety stakes, and the existing evaluation framework is built to carry exactly that.

### M2. The user-day and device story drops case facts that change the workflow

- **Where:** Contract §1 (l.21–22); Stage 1 §1 (l.29–30) and §6; Stage 2 l.74 and l.210; ROADMAP l.49 and l.82.
- **Facts the brief states (p. 5) that no project file records:**
  - Her daughter **boards at school in the district town**.
  - Noor "only really uses [the smartphone] when her daughter is home **on weekends** to set it up and show her how". That is a screen-literacy constraint, not just a sharing constraint.
  - The phone that sits at the house during the day is the one she uses for calls, messages and mobile money.
- **Search result:** A search of all seven files finds no "weekend", "literacy", or "boards"/boarding.
- **Consequences:**
  - The realistic capture moment is a weekend, assisted session at or near the house, often days after Noor sees the leaf on the slope.
  - So "during the offline phone session in which she captures it" (l.206) hides the very gap between seeing and recording that the decision claims to close.
  - A text-only interface in the local language may not be usable without the daughter.
  - The blanket "voice" exclusion (ROADMAP l.82) also rules out pre-recorded, human-voiced prompts in the local language. Annex B names "voice-based advisory in local languages… particularly where literacy or screen literacy is a constraint" as the second promising line of AI work (p. 16).
  - Stage 2 never evaluates that line, and it rates RoyaCheck "Strong" on workflow realism with a condition attached.
- **Repair:**
  - Restore the facts.
  - Make the Stage 3 lock answer these questions:
    - Who operates the phone?
    - When?
    - Where is the leaf when it's photographed: on the tree, or detached and brought to the house?
    - How long after the observation?
    - What role, if any, does Noor's own phone play?
  - Either narrow "voice" to "no speech recognition, text-to-speech or generated voice", or record why text is enough given her screen literacy.

### M3. The "forward" half of store-and-forward, the reviewer, and consent are all undefined

- **Where:** Contract §6 step 7; ROADMAP l.83 (WhatsApp excluded), l.457–462 (raw images not kept by default; "any **future** export path…") and l.829 ("store-now/review-later"); Stage 1 l.116–121.
- **The issue:**
  - The MVP has storage but no committed way for a record to leave the phone.
  - A reviewer can't review a label without the image, yet images aren't kept by default.
  - "Cooperative technician" is an inference, not a case fact. The case gives only cooperative membership and an extension officer who visits "twice a year at best".
  - **Consent** appears in no project file, although the pass/fail question names "privacy, **consent**, bias, and human oversight" (p. 11).
- **Consequences:**
  - "Flagged for human review" ends as a record that nobody sees.
  - The required video segment "what happens next" (p. 10) has no honest answer.
  - The pass/fail gate is exposed.
- **Repair:** Stage 3 locks:
  - the reviewer role, labelling anything not in the case as an assumption;
  - the handoff channel, chosen by the owner: for example, showing the phone in person, a user-initiated export or share, or a text from Noor's own phone;
  - whether the metadata-stripped image travels with the record, behind an explicit consent step;
  - what the reviewer actually sees.

### M4. The judging rubric has the right weights but misstates three of the questions

- **Where:** Contract §11 (l.223–231); Stage 0 row 59; ROADMAP Stage 10 (l.975–981).
- **The weights are correct:** 25/20/15/15/15/10, plus a pass/fail gate.
- **The questions that are paraphrased away:**
  - **Evidence it works (15%):** the official question is "does the solution fit the challenges identified in the sector, **does it add other constraints?**" The repo reduces this to "measured evidence". RoyaCheck does add constraints: a smartphone, the daughter's help, a data bundle for the first load, and carrying the leaf to the house. Judges are told to look for exactly this, and Stage 9/10 must answer it directly.
  - **Data grounding:** "help address an identified gap in the data".
  - **Scalability (10%):** "Could another setting reuse this innovation?" This is about replicability (other crops, diseases, languages), not only the prerequisites.
  - **Responsible AI:** the paraphrase omits "consent" and "are the limits respected".
- **Repair:** Quote all seven questions word for word in Contract §11 and Stage 0 row 59, and map the Stage 10 alignment to the questions as well as the weights.

### M5. The common-data layer is cited but not enforced, and the context anchors don't fit together

- **Where:** Stage 1 §4 (l.93–96) and §7 (l.149–162); Contract §8 (l.171–182); ROADMAP l.112 and l.469.
- **The issue:**
  - The only common-layer item is the GSMA 2025 report, with Kenya as context. It gives no indicator and no figure. I haven't independently checked GSMA's 2025 country coverage.
  - Coffee-rust relevance is anchored to an IICA 2019 source on the Americas.
  - BRACOL is Brazilian. The brief's own Agriculture anchor is Côte d'Ivoire.
  - The brief says common data supplies "the language your tool speaks, the connectivity it has to survive, and the evidence that the problem is real" (p. 8). Here it shapes no design parameter.
- **Consequences:**
  - The claim of using "both data layers deliberately" is empty as it stands.
  - Anchors spread across three continents look cherry-picked, and the 15% data-grounding criterion suffers.
- **Repair:**
  - Stage 3 picks one context anchor and applies it consistently to the device/connectivity figure (source, year, value), the localization language, and, where possible, coffee/rust relevance.
  - Each use is labelled "anchor, not Noor's location".
  - Stage 4 requires at least one common-layer figure to set a design budget. For example, the first-load size against the cost of a 3G bundle, or the language choice against language-dataset coverage.

### M6. The local-language gate allows a national language to pass as "local"

- **Where:** Contract §7; Stage 0 row 36; Stage 1 §8; ROADMAP l.366.
- **The issue:**
  - The rule says "local language" (p. 7).
  - The brief separates Noor's home language from "the national one when she needs it" (p. 5).
  - The gate requires only "one real prototype localization language". That would accept Spanish, Portuguese, French or a national lingua franca.
  - This risk is real: the superseded policy was Spanish (see the Stage 0 diff and the older audit files).
- **Repair:** The Stage 3 gate must require one of two things:
  - a language that works as a home or local language in the chosen anchor context, with its name and the reasoning; or
  - an explicit, disclosed decision to use a national or vehicular language, accepting the weaker fit.

  It must also pre-commit the answer to "how would it fare in a less-supported language".

## 5. Minor findings

1. **Some case facts lost precision.**
   - Extension access is "twice a year at best" (p. 16) and "reached her village twice last year" (p. 6), not just "rarely" or "infrequent". That number is the best evidence for the "we know because" clause.
   - Contract l.21 calls Noor's own phone "one household phone"; the brief says it's her own.
2. **The "no visible rust" wording conflicts with itself.** Other diseases route to `not sure` (ROADMAP l.385–387), so in practice "no visible rust" means no visible lesion, while l.384 says it doesn't rule out other conditions.
   - Require the review option to stay equally prominent after "no visible rust" on a leaf Noor flagged.
   - Require Stage 4 to report low confidence, out-of-distribution input and other disease as separate routes to `not sure`.
3. **The brief's studio-versus-field warning (p. 8) isn't carried into the contract.**
   - My understanding is that BRACOL leaves were photographed on a plain background. Verify this in Stage 7A.
   - If true, a detached-leaf-at-the-house capture would match both the training data and the weekend workflow. That is an owner option, not a recommendation.
   - Also: specify the capture side (rust shows on the underside), and put maize and bean leaves in the challenge set, since they grow on Noor's own farm.
4. **Shared-device privacy is missing.** Records stored on the daughter's phone are visible to whoever uses it. Add this to the Stage 4 privacy rules.
5. **Prohibited claims are spread over four lists** (ROADMAP exclusions, Stage 9 l.946–956, Contract §4/§10, Stage 1 §17). The Stage 9 list, which governs README wording, lacks the case-specific items: yield cause, diagnosis, price, registry, Noor's location or language. Make Stage 9 refer to one combined list.
6. **Video requirements are incomplete.**
   - Record that entries without the 2–5 minute video "will not make it to the shortlist".
   - Store the problem-sentence template word for word in Contract §12.
7. **Status labels don't match the roadmap's vocabulary.** The documents use "Reopened — … audit pending" and "ready for…", while the ROADMAP (l.33–39) allows only "Reopened — in review".
8. **Older audit records still carry superseded logic.** `docs/audits/roadmap/*` and `docs/audits/stage-00/*` still contain the Spanish-language policy. Add a one-line note marking them as historical evidence.

## 6. Exact repair instructions

| File / section | Repair |
|---|---|
| `ANNEX_B_CASE_CONTRACT.md` §1 | Add: daughter boards in the district town; smartphone used "only really… on weekends", with her help (screen literacy); Noor's *own* phone is the one at the house. Add the "twice a year at best" extension cadence. (M2, m1) |
| Contract §3 | Replace the decision with an agricultural next-step decision that the visual proposal informs; drop the "confident model answer" alternative. (M1) |
| Contract §6 | Add a "forward" step: recipient role, channel, payload (image yes/no), consent. (M3) |
| Contract §7 | Add the local-versus-national criterion. (M6) |
| Contract §8 | One anchor country; a named GSMA indicator, value and year; a common-layer figure that binds a design budget. (M5) |
| Contract §10 | Rewrite in the exact template wording; "we know because" must cite evidence, not the case. (M1) |
| Contract §11 / Stage 0 row 59 | Quote all seven rubric questions word for word, including "add other constraints", "reuse", "consent". (M4) |
| Contract §12 / Stage 0 row 24 | Template word for word; shortlist-gating. (m6) |
| Stage 0 row 36 | Local-versus-national criterion. (M6) |
| Stage 1 §1, §5, §6, §7, §9 | Same facts as Contract §1; label the "cooperative technician" reviewer as an assumption; the observation-to-capture delay in the current workflow; one coherent anchor. (M2, M3, M5) |
| Stage 2 §3 and §4 | Add the voice/local-language advisory line as an evaluated concept (it may still be downgraded); restate RoyaCheck's realism rating against the weekend-only, assisted fact; update the decision in §8. (M2, M1) |
| ROADMAP l.60 | New decision. (M1) |
| ROADMAP l.82 | Narrow "voice", or record the reason for excluding it. (M2) |
| ROADMAP l.362–367 (Stage 3 gate) | Add locks: user-day story (operator, timing, leaf location, delay, own-phone role); handoff recipient, channel, payload and consent; anchor country; local-language criterion; label-to-action routing. (M1–M3, M5, M6) |
| ROADMAP l.457–462 | Replace "future export" with the Stage 3 handoff path; add consent and shared-device visibility. (M3, m4) |
| ROADMAP l.581 | Add maize and bean leaves; specify capture side. (m3) |
| ROADMAP l.946–956 | Refer to a single combined prohibited-claims list. (m5) |
| ROADMAP l.975–981 | Map to the rubric questions, not only the weights. (M4) |

## 7. Route assessment

**RoyaCheck remains a defensible 1:1 response to Annex B.**

**What already works:**
- Noor is the primary user.
- Falling yields are explicitly *not* equated with rust (Contract §4, Stage 1 §4/§17).
- The price branch, registry precondition and scaling conditions stay visible and honest.
- BRACOL is used correctly as evidence of task relevance, not field validation.
- Treatment, autonomous-action and LLM exclusions are enough for the safety gate.
- The human-authority controls are concrete: no pre-filling, a save-block, tests.

**The weakness:** The route fails at the edges of the case, not at its core: who holds the phone and when, what the AI changes, and where the record goes. Because the brief itself all but suggests this route, many entrants will submit a coffee-leaf classifier. RoyaCheck's differentiation therefore has to come from case fidelity: the weekend, assisted workflow; abstention; a real handoff. Those are exactly the parts that are currently thin.

## 8. Stage assessment

The roadmap and Stages 0–2 **can be re-closed after these repairs**. All of them are documentation edits, and none requires re-selecting the route.

**Timing:** The roadmap's own clock ended the Stages 0–6 block at **5:30 PM ET today**, and Stages 3–6 haven't started. I recommend a single reconciliation pass checked by the owner against this finding list, not another full independent audit round. Tier A review should be kept for Stage 4.

## 9. May Stage 3 begin after reconciliation?

**Yes.** Stage 3 can start once three things are done:
1. The factual paraphrases are corrected (M2 facts, m1).
2. The rubric is corrected (M4).
3. The Stage 3 gate is amended to require the M1/M2/M3/M5/M6 locks.

The choices themselves (the decision wording, the user-day story, the handoff channel, the anchor country and the language) are **owner decisions for José** to make *in* Stage 3. I have not made them.

## 10. Must never appear in the final README or video

- Any claim that RoyaCheck finds, explains or diagnoses *why Noor's yields fell*, or that rust is the cause.
- Noor snapping a photo on the slope "when she sees it", "her smartphone", or any always-carried or always-connected framing.
- Noor's nationality, location or language stated as fact. "Ondera is in [country]". The anchor country presented as hers.
- "Healthy", "all clear" or "no disease" for a `no visible rust` result. "Detects coffee diseases" in general.
- "Field-validated", "works on real farms", "BRACOL proves accuracy", or an accuracy figure without its data split and domain.
- Any treatment, fungicide, copper, dose or "what to spray" content.
- "Replaces / alerts / automatically notifies the extension officer or cooperative", "real-time expert advice".
- "Improves yield / income / price", "gets Noor a better price".
- "Works fully offline" without the caveat that assets must first load or be cached. "Runs on any phone / feature phones".
- "Scales to millions" without the registry, device, trust and institutional prerequisites.
- A cooperative technician presented as a case fact.
- Organizer logos or implied endorsement.

---

To put this on the GitHub audit bus, give me the review path and output branch and grant push access to `SplitzHappen/RoyaCheck-Offline`. I'll commit the report there and confirm the remote branch contains it.
