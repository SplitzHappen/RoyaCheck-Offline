# Annex B Agriculture Case Contract

**Authority:** Official Small AI for Development Challenge Brief supplied to participants, especially pp. 5–11 and Annex B, pp. 16–17.  
**Status:** Controlling problem specification for the Agriculture entry; foundation **Closed — owner approved (PR #9)**. Stage 3 decisions explicitly identified in this contract remain unresolved until Stage 3.  
**Purpose:** Keep every later product, technical, evidence, UX, and pitch decision traceable to Noor’s stated case rather than to a generic agriculture problem.

This file paraphrases the controlling case and project implications. It does not reproduce the participant brief.

---

## 1. Who the entry is for

The Agriculture case is centered on **Noor, a 38-year-old smallholder farmer**.

Relevant case constraints include:

- a two-hectare farm;
- coffee on the upper slope, with maize and beans elsewhere;
- long-standing membership in a coffee cooperative;
- extension access only about **twice a year at best**;
- Noor’s **own phone**, which she uses for calls, messages, and mobile money;
- Noor’s 16-year-old daughter boards at school in the district town;
- a separate smartphone belongs to her daughter; Noor only really uses it when her daughter is home **on weekends** to set it up and show her how, creating an assisted-use / screen-literacy constraint;
- no household Wi-Fi;
- purchased 3G data bundles when connectivity is needed;
- Noor spends much of the day on the slope while the phone is normally at the house;
- Noor speaks a local language at home and a national language when needed.

**Case invariant:** do not design as if Noor owns and carries a high-end, always-connected smartphone throughout the workday.

The prototype may use the household smartphone because it is a device already available to Noor’s household, but the workflow must remain honest about intermittent/shared smartphone access.

---

## 2. The Agriculture problem has multiple branches

Annex B gives Noor two headline information problems:

1. **Crop uncertainty:** coffee yields have fallen and Noor does not know why; timely localized advice is difficult to obtain.
2. **Market-price uncertainty:** at harvest a middleman names a price and Noor lacks an independent reference.

It also names system-level constraints:

- extension staff shortages;
- manual data collection;
- delayed alerts;
- in some settings, absence of a working farmer registry;
- absent phones or weak trust in the advisory system can also block scale.

The challenge does **not** require one prototype to solve every branch.

It asks for a Small AI solution that helps Noor **make, communicate, or act on one better agricultural decision**.

---

## 3. Selected problem slice

RoyaCheck deliberately selects the **crop-observation → documentation → human-review** branch.

The exact judge-facing agricultural decision is **not yet owner-locked**. Stage 3 must lock a real agricultural next-step prioritization decision in which the visual proposal materially affects what Noor prioritizes for human review rather than merely deciding whether to save a record.

A candidate direction to evaluate in Stage 3 is:

> **Does this suspicious coffee leaf show enough visible evidence consistent with rust that Noor should prioritize it for human review, or should she record that no visible rust was observed while keeping review available if concern remains?**

The AI contribution remains a bounded visual proposal:

- visible evidence consistent with coffee leaf rust;
- no visible rust observed on an otherwise eligible coffee-leaf image;
- not sure.

The prototype then requires an explicit human disposition before a formal observation exists. Stage 3 must also lock the label-to-action routing. At minimum, `not sure` cannot become a conclusion, `no visible rust` can never mean “healthy” / “all clear” / “no disease,” human review remains available, and no label can autonomously trigger treatment or contact.

---

## 4. What the selected route does not claim to solve

RoyaCheck does **not** claim to determine the overall cause of Noor’s seasonal yield decline.

A visible-rust proposal establishes only what the model suggests is visible in one eligible image. It does not establish that rust caused farm-level yield loss.

The entry also does not solve:

- Noor’s market-price reference problem;
- the full agronomic-advisory problem;
- treatment selection;
- pesticide or fungicide selection/dose;
- farmer-registry creation;
- extension-system staffing;
- trust in advisory institutions;
- universal outreach or institutional deployment.

These are explicit case boundaries, not omissions to hide.

### Canonical prohibited claims

Later stages, the README, demo, and videos must reference this single claim ceiling rather than create competing lists. Unless direct evidence is added at the appropriate later gate, the project must not claim or imply:

- rust explains or diagnoses the cause of Noor’s yield decline;
- a farm-level or general crop diagnosis;
- “healthy,” “all clear,” or “no disease” from a `no visible rust` proposal;
- correct treatment, pesticide/fungicide choice, dose, or spray timing;
- improved yield, income, or market price;
- that RoyaCheck gets Noor a better price;
- replacement of extension workers;
- automatic extension/cooperative notification or real-time expert advice;
- farmer-registry creation or a solved registry constraint;
- field validation, “works on real farms,” or Noor-specific/geography-specific robustness without direct evidence;
- Noor’s nationality, real location, or local/national language as fact;
- BRACOL as proof of field accuracy;
- universal device support, feature-phone support, or “fully offline” without the initial asset-cache caveat;
- scale to large populations without registry, device, trust, extension-capacity, and institutional prerequisites.

---

## 5. Why the AI component is case-relevant

The brief gives computer vision as a concrete Agriculture example of Small AI: learned visual pattern recognition compressed to operate on a basic smartphone offline.

RoyaCheck uses AI only for the comparable perception task:

> **interpreting the leaf image well enough to make a bounded proposal or abstain.**

The following remain deterministic or human-controlled:

- human confirmation/correction/review request;
- observation-record state;
- summary generation;
- later sharing/export.

A spreadsheet or form can store an observation. It cannot itself perform the learned visual-pattern comparison.

---

## 6. Device, connectivity, and store-and-forward contract

The core loop must not depend on a live connection.

After required application/model assets are available locally, the intended minimum loop is:

1. open the app on an available household/assisted smartphone;
2. capture or select a coffee-leaf image;
3. run local visual inference;
4. show the bounded proposal or `not sure`;
5. obtain explicit human disposition;
6. store the structured observation locally;
7. make the saved record available to the **Stage-3-locked, user-initiated human handoff** when the user chooses to share or show it.

Before Stage 3 closes it must lock:

- reviewer role and whether that role is a case fact or project assumption;
- handoff channel;
- whether the leaf image travels with the record;
- explicit consent for image inclusion if an image travels;
- what the reviewer sees.

No autonomous sending, automatic notification, or implied institutional integration is permitted.

The design must **not** assume:

- Wi-Fi at Noor’s home;
- persistent mobile data;
- the smartphone is with Noor on the slope all day;
- a live extension officer;
- a cloud model for the core decision.

---

## 7. Language and inclusion contract

The official rules require at least one interaction in a **named local language**, by voice or text.

The brief does not name Noor’s fictional local or national languages.

Therefore:

- the project must not invent a language as a fact about Noor;
- Stage 3 must choose either **(A)** one real local/home language in the selected evidence-anchor context, with explicit reasoning, or **(B)** a national/vehicular language while explicitly acknowledging the weaker case fit;
- the chosen language must be labeled as an **implementation/localization choice**, not as Noor’s fictional nationality or location;
- Stage 3 must pre-commit the answer to how the tool would fare in a less-supported language;
- Stage 8 must visibly demonstrate at least one interaction in the named language.

Voice is not required. The project excludes speech recognition, generative voice advisory, and voice-agent workflows from the MVP unless later re-scoped, but this does **not** preclude simple prerecorded or human-voiced accessibility prompts if Stage 3 later justifies them. A fixed, human-reviewed text localization remains acceptable if it satisfies the official rule and product needs.

---

## 8. Data-grounding contract

The official brief organizes data in two layers and states that strong entries use both:

### Sector layer

For RoyaCheck, **BRACOL** is explicitly listed as directly relevant to Noor’s coffee crop.

That supports task relevance only.

It does **not** prove:

- field robustness;
- Noor-specific performance;
- transfer across cultivars/geographies/devices;
- causal relevance to Noor’s yield decline.

### Common layer

The project must also use at least one relevant common-data source to ground a real implementation constraint such as:

- device/smartphone access;
- connectivity;
- inclusion;
- language.

Because Noor is fictional, any real country evidence must be labeled as a **context/evidence anchor**, not as Noor’s location.

Stage 3 must first select **one coherent real-world implementation evidence anchor** and label it explicitly as an anchor rather than Noor’s fictional location. Where possible, the same anchor should support device/connectivity evidence, localization reasoning, and coffee/agriculture context.

Before Stage 4 closes, the project must name the source, year, country/context, and at least one common-data figure used for this grounding. At least one common-data figure must bind a real design parameter (for example, first-load/model/bundle size or language support) rather than remain a background citation.

---

## 9. Farmer-registry and institutional precondition

Annex B explicitly warns that in some settings a missing farmer registry can be more binding than a missing algorithm.

RoyaCheck’s local one-user observation loop does not require a registry to function.

However, the project must state that:

- scaling outreach, alerts, or organized follow-up could require a functioning registry or equivalent institutional reach mechanism;
- the prototype does not solve that infrastructure gap;
- a technically successful model does not establish system-level deployability.

This distinction must remain visible in the README, limitations, video, and scalability discussion.

---

## 10. The case-level value statement

The organizer’s required problem-statement template is:

> **Because of this tool, [user] will [action] by [when] that they would otherwise [not do / do late / do worse]; we know because [evidence].**

Stage 3 must instantiate this template only after the agricultural next-step decision and assisted/weekend workflow are owner-locked. The **“we know because”** clause must cite real evidence; the fictional scenario by itself is not empirical proof of the development claim.

Until Stage 3, no final judge-facing value statement is locked.

The final statement must remain inside the canonical prohibited-claims ceiling in §4.

---

## 11. Judging contract

The official challenge brief gives the following judging structure:

| Criterion | Weight / gate | Official question to answer |
|---|---:|---|
| The built solution (Small AI fidelity) | 25% | **Does the tool work end to end within the constraints of the sector?** |
| Development relevance and impact | 20% | **Is this a real problem from the sector briefs, and does the outcome matter to the person it is built for?** |
| Data grounding | 15% | **Does the tool help address an identified gap in the data, is the data modeling sound?** |
| Evidence it works | 15% | **Does the solution fit the challenges identified in the sector, does it add other constraints?** |
| Clarity, design and inclusivity / Value proposition for AI | 15% | **What the tool does with AI (machine learning, computer vision, language, generative), and would a simpler tool (SMS, a spreadsheet, a search) do the same job?** |
| Scalability, replicability and what happens next | 10% | **Could another setting reuse this innovation?** |
| Responsible AI, data and safety | Pass/fail | **Are the limits respected, and the account of privacy, consent, bias, and human oversight credible?** |

The responsible-AI gate can invalidate an otherwise strong entry.

---

## 12. Deliverable contract

The official 2–5 minute challenge video is shortlist-gating: **entries without it will not make it to the shortlist**.

It must cover:

- the exact organizer problem-statement structure: **“Because of this tool, [user] will [action] by [when] that they would otherwise [not do / do late / do worse]; we know because [evidence].”**;
- the AI capability and why a simpler tool cannot do the same job;
- guardrails;
- end-to-end demo;
- where the tool sits in the user’s day and what happens next;
- technical stack where relevant;
- the entrant’s view of localizing AI development.

Stage 10 must reconcile this requirement with the separate Hack-Nation platform video fields already captured in Stage 0.

---

## 13. Case-alignment gate for all later stages

Before any later stage closes, check:

1. Is Noor still the primary challenge user?
2. Does the feature help make, communicate, or act on **one better agricultural decision**?
3. Is the product still solving only the selected crop-observation branch?
4. Are the price problem and registry/system constraints acknowledged rather than silently erased?
5. Does the device workflow preserve the daughter’s boarding-school / weekend-assisted smartphone facts and avoid implying on-slope smartphone possession?
6. Has Stage 3 explicitly locked operator, timing, place, observation-to-capture delay, whether/how the leaf comes to the phone, and the role of Noor’s own phone?
7. Does the core feature work offline after required assets are locally available?
8. Is the named language choice a real local/home language in the anchor context, or is any national/vehicular-language compromise explicitly disclosed?
9. Is the less-supported-language answer pre-committed?
10. Does the AI do something a simple form/search cannot?
11. Does uncertainty route to a human rather than a forced answer, with `no visible rust` never meaning “healthy”?
12. Has Stage 3 locked reviewer role, handoff channel, image travel, consent, and reviewer-visible payload without autonomous sending?
13. Are sector and common data both used with limitations disclosed, under one coherent evidence anchor?
14. Does at least one common-data figure bind an actual Stage 4 design parameter?
15. Are claims limited to what the prototype actually measures and to the canonical prohibited-claims list?
16. Is scalability conditioned on real registry/device/trust/extension/institutional prerequisites?

If a later design fails this gate, the design changes—not the case definition.
