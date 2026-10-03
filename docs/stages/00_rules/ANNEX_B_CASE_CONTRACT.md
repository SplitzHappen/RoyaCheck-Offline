# Annex B Agriculture Case Contract

**Authority:** Official Small AI for Development Challenge Brief supplied to participants, especially pp. 5–11 and Annex B, pp. 16–17.  
**Status:** Controlling problem specification for the Agriculture entry.  
**Purpose:** Keep every later product, technical, evidence, UX, and pitch decision traceable to Noor’s stated case rather than to a generic agriculture problem.

This file paraphrases the controlling case and project implications. It does not reproduce the participant brief.

---

## 1. Who the entry is for

The Agriculture case is centered on **Noor, a 38-year-old smallholder farmer**.

Relevant case constraints include:

- a two-hectare farm;
- coffee on the upper slope, with maize and beans elsewhere;
- long-standing membership in a coffee cooperative;
- infrequent extension access;
- one household phone used by Noor for calls, messages, and mobile money;
- a separate household smartphone belonging to her daughter, which Noor uses with help when her daughter is home;
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

The supported decision is:

> **When Noor has access to the household smartphone and captures or selects an image of a suspicious coffee leaf, should that observation be documented and flagged for human extension/cooperative review rather than treated as a confident answer from the model?**

The AI contribution is a bounded visual proposal:

- visible evidence consistent with coffee leaf rust;
- no visible rust observed on an otherwise eligible coffee-leaf image;
- not sure.

The prototype then requires an explicit human disposition before a formal observation exists.

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
7. prepare it for later human review/sharing when connectivity is available.

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
- Stage 3 must choose one real prototype localization language and label it explicitly as an **implementation/localization choice**, not as Noor’s fictional nationality or location;
- Stage 8 must visibly demonstrate at least one interaction in that named language;
- the final explanation must discuss how the approach would fare in a less-supported language.

Voice is not required. A fixed, human-reviewed text localization is acceptable if it satisfies the official rule and product needs.

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

Before Stage 4 closes, the project must name the source, year, and country/context used for this grounding, as requested by the brief.

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

The provisional judge-facing value statement is:

> **Because of this tool, Noor can document and flag a suspicious coffee-leaf observation for human review during the offline phone session in which she captures it, rather than requiring a live connection or waiting for the next rare extension interaction; the Agriculture case identifies infrequent extension access, manual data collection, delayed alerts, and lack of timely localized crop advice as constraints.**

This wording remains provisional until the implemented workflow and evidence are available.

Do not replace it with claims that RoyaCheck:

- explains Noor’s falling yields;
- diagnoses the farm;
- recommends treatment;
- improves yield or income.

---

## 11. Judging contract

The official challenge brief gives the following judging structure:

| Criterion | Weight / gate | Project implication |
|---|---:|---|
| Built solution / Small AI fidelity | 25% | Complete the Noor loop end to end under sector constraints. |
| Development relevance and impact | 20% | Tie the outcome directly to the Annex B problem and Noor. |
| Data grounding | 15% | Use sound data, cite sources, and disclose what the data do not cover. |
| Evidence it works | 15% | Provide measured evidence under the relevant constraints. |
| Clarity, design and inclusivity / value proposition for AI | 15% | Show usable design and why learned AI adds value beyond a simpler tool. |
| Scalability, replicability and what happens next | 10% | Explain what transfers and what prerequisites remain. |
| Responsible AI, data and safety | Pass/fail | Human oversight, privacy, bias/coverage limits, and fail-safe uncertainty must be credible. |

The responsible-AI gate can invalidate an otherwise strong entry.

---

## 12. Deliverable contract

The official 2–5 minute challenge video must cover:

- a one-sentence problem statement in the organizer’s user/action/time/evidence structure;
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
5. Does the device workflow respect intermittent/shared smartphone access?
6. Does the core feature work offline?
7. Is the named local-language interaction concrete and honestly framed?
8. Does the AI do something a simple form/search cannot?
9. Does uncertainty route to a human rather than a forced answer?
10. Are sector and common data both used with limitations disclosed?
11. Are claims limited to what the prototype actually measures?
12. Is scalability conditioned on real institutional prerequisites?

If a later design fails this gate, the design changes—not the case definition.
