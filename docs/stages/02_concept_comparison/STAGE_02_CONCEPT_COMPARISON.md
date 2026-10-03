# Stage 2 — Annex B Agriculture Concept Comparison and Elimination Record

**Stage:** 2  
**Status:** Reopened — in review  
**Sector:** Agriculture  
**Selected route:** RoyaCheck Offline  
**Controlling problem specification:** Annex B / Noor Agriculture case

This document compares only concepts that respond directly to Noor’s stated Agriculture case. It is not a generic Agriculture portfolio and it does not reopen Health, Tourism, or the selected route without a genuine blocking reason.

See also: `docs/stages/00_rules/ANNEX_B_CASE_CONTRACT.md`.

---

## 1. Decision frame

The official case gives Noor several possible intervention points:

- identify a crop problem;
- access localized advice;
- document a field observation;
- time a farming activity;
- improve quality/value addition;
- connect evidence to a market, pricing, or extension-service next step.

It also identifies non-algorithmic constraints such as:

- scarce extension capacity;
- manual data collection;
- delayed alerts;
- weak or absent farmer registries;
- phone access;
- trust in the advisory system.

The comparison therefore asks:

> Which narrow intervention gives Noor one better agricultural decision, uses AI for something a simpler tool cannot do as well, fits her device/connectivity constraints, can be measured honestly, and can be built reliably in the competition window?

---

## 2. Comparison criteria

All concepts are compared against the official judging logic and project constraints:

- direct fit to Noor’s Annex B problem;
- distinct AI value versus a simpler digital tool;
- Small AI / offline-device fit;
- usefulness to Noor’s actual workflow;
- measurable evidence within the hackathon;
- sound data grounding;
- shared/intermittent-smartphone realism;
- inclusion/localization;
- human-authority / safety tractability;
- solo-build and demo reliability;
- scalability with explicit preconditions.

Qualitative labels are used:

- **Strong**
- **Moderate**
- **Weak**
- **Blocking dependency**

These are design judgments for this entry, not universal rankings of development interventions.

---

## 3. Case-specific concept set

### A. Coffee-leaf observation + extension handoff — RoyaCheck Offline

**Case branch:** crop uncertainty + field-observation documentation + extension-service next step.

**Noor action:** during the daughter-smartphone assisted workflow that Stage 3 must lock, capture/select a suspicious coffee-leaf image; receive a bounded offline proposal; explicitly confirm/correct/request review; retain a structured record for a later, user-initiated human handoff.

**AI task:** visual pattern recognition with abstention.

**Simple baseline:** symptom guide + observation form + later human review.

**Disposition:** **SELECTED**

Why it remains strong:

- directly matches an allowed Annex B challenge path;
- computer vision is explicitly recognized in the Agriculture brief as a Small AI pattern;
- BRACOL is explicitly relevant to Noor’s coffee crop;
- the AI contribution is perceptual rather than decorative;
- the core can work offline;
- the end-to-end loop is demonstrable;
- the safety boundary can exclude treatment advice;
- the output can be measured honestly.

**Audit condition:** the route remains selected only if Stage 3 turns the visual proposal into a real agricultural next-step prioritization decision and locks the weekend-assisted capture/handoff story. Documentation alone is not enough.

---

### B. Independent crop-price reference

**Case branch:** Noor lacks an independent reference when a middleman names a price.

**Possible tool:** local price lookup / reference using a market-price dataset such as WFP food prices or another suitable source.

**AI task candidate:** forecasting, anomaly detection, natural-language explanation, or price comparison.

**Strongest simple baseline:** current price table, SMS lookup, cached reference, spreadsheet, or search.

**Disposition:** **NOT SELECTED**

Reason:

The market-information problem is highly relevant, but much of the core user value may be delivered by a simpler reference service. Adding AI risks becoming decorative unless there is a narrow, demonstrable inference task that materially improves Noor’s decision.

The project therefore excludes market-price prediction/reference from the MVP rather than forcing AI into this branch.

---

### C. Grounded localized agricultural advisory retrieval

**Case branch:** Noor lacks timely localized advice.

**Possible tool:** retrieve approved agricultural guidance from a bounded authoritative corpus.

**AI task:** semantic/vernacular query matching or grounded retrieval.

**Strongest simple baseline:** indexed FAQ, BM25/full-text search, glossary/synonym expansion.

**Disposition:** **DOWNGRADED**

Reason:

The route is case-relevant but depends on:

- an authoritative, reusable, current corpus;
- localization quality;
- a real advantage over a strong lexical baseline;
- governance of content freshness and applicability.

Those dependencies are heavier than the selected visual task within the competition clock.

---

### D. Voice/local-language advisory

**Case branch:** localized advice under literacy or screen-literacy constraints.

**Possible tool:** a bounded voice/local-language advisory interaction using approved content.

**AI task candidate:** speech recognition, speech synthesis, vernacular intent matching, or grounded retrieval.

**Strongest simple baseline:** prerecorded human-voiced prompts, IVR/menu prompts, translated fixed guidance, or text with assisted use.

**Disposition:** **DOWNGRADED**

Reason:

Annex B explicitly identifies voice-based local-language advisory as promising where literacy or screen literacy is a constraint, so it must be evaluated rather than excluded by fiat. However, as the primary hackathon route it adds heavier dependencies:

- a real local-language choice and usable speech resources;
- authoritative agronomic content and applicability governance;
- reliable speech behavior under the selected device/runtime;
- a defensible advantage over prerecorded or fixed human-reviewed prompts.

RoyaCheck therefore remains the selected visual route. The MVP excludes speech recognition, generative voice advisory, and voice-agent workflows unless later re-scoped; simple prerecorded or human-voiced accessibility prompts remain available as a non-AI accessibility option if Stage 3 justifies them.

---

### E. Weather/crop-timing assistant

**Case branch:** timing a farming activity is explicitly allowed by the challenge.

**Possible tool:** combine recent weather/agro-climate data with a bounded action table.

**AI task candidate:** pattern detection or grounded language generation.

**Strongest simple baseline:** deterministic rule table/template.

**Disposition:** **DOWNGRADED**

Reason:

The route can fit the case, but a deterministic rules engine may perform most of the useful work. That weakens the argument that learned AI is necessary.

---

### F. Visual produce-quality grading

**Case branch:** improve quality/value addition before sale.

**Possible tool:** classify visible quality/defect attributes in produce.

**AI task:** computer vision.

**Strongest simple baseline:** grading chart / trained human grading.

**Disposition:** **DOWNGRADED**

Reason:

The visual-AI task is legitimate, but development value depends on:

- a stable grading standard;
- buyer recognition of that grade;
- evidence that the information changes Noor’s sale decision or bargaining position;
- suitable calibrated image data.

Those dependencies are less directly supported by the supplied case than the coffee-leaf observation path.

---

### G. Farmer registry / enrollment / reach infrastructure

**Case branch:** Annex B explicitly notes that a missing farmer registry may be the binding constraint.

**Possible tool:** digital enrollment/registry workflow.

**AI task candidate:** document extraction, matching, or assisted data entry.

**Strongest simple baseline:** ordinary digital registration form/database.

**Disposition:** **PRECONDITION, NOT THE SELECTED AI PRODUCT**

Reason:

The case itself warns that the missing infrastructure may matter more than the algorithm. A registry can be development-critical without being a good reason to force AI into the workflow.

RoyaCheck therefore treats registry/reach infrastructure as a scaling precondition, not as a feature it claims to solve.

---

## 4. Comparative matrix

| Dimension | RoyaCheck | Price reference | Advisory retrieval | Voice/local-language advisory | Weather/timing | Quality grading | Registry/enrollment |
|---|---|---|---|---|---|---|---|
| Direct Annex B fit | **Strong** | Strong | Strong | Strong | Strong | Moderate–Strong | Strong as precondition |
| Distinct AI value | **Strong** | Weak–Moderate | Moderate–Strong | Moderate–Strong | Weak–Moderate | Strong | Weak–Moderate |
| Offline / Small AI fit | **Strong** | Strong | Moderate–Strong | Moderate | Strong | Strong | Strong |
| Noor workflow realism | **Moderate–Strong pending Stage 3 weekend-assisted lock** | Strong | Moderate | **Strong in principle** under screen-literacy constraints | Moderate | Moderate | Moderate |
| Measurable in hackathon | **Strong** | Strong | Strong | Moderate | Moderate | Moderate | Strong |
| Data grounding | **Moderate–Strong** | Moderate–Strong | Moderate | Moderate | Moderate–Strong | Weak–Moderate | Moderate |
| Human/safety tractability | **Strong** with no treatment advice | Strong | Moderate | Moderate | Moderate | Strong | Strong |
| Solo-build reliability | **Strong** | Strong | Moderate | Weak–Moderate | Strong | Moderate | Strong |
| AI-vs-simple-tool case | **Strong if Stage 3 routing differs materially by proposal** | Weak | Moderate | Moderate | Weak–Moderate | Strong | Weak |
| Critical dependency | field/domain transfer + weekend-assisted workflow + handoff | fresh local reference | authoritative corpus | local speech/language resources + authoritative content | validated action rules | standards + buyer incentives | institutional adoption/registry governance |

**Interpretation:** This matrix is a bounded decision aid. It does not claim RoyaCheck is universally superior to the other interventions.

---

## 5. Why RoyaCheck is the case-aligned selection

### 5.1 It answers one of the exact allowed challenge paths

The selected loop combines:

- identifying a crop problem at a bounded visual level;
- documenting a field observation;
- connecting evidence to a later extension/cooperative review step.

That is directly traceable to Annex B.

### 5.2 The AI contribution is distinct

The learned component performs image pattern recognition.

A form can record the observation but cannot itself perform that learned visual comparison.

### 5.3 The data table supports the task

BRACOL is explicitly listed as relevant to Noor’s coffee crop.

This makes the crop/image route unusually well aligned to the supplied sector data.

### 5.4 The workflow can be offline

The core proposal and record creation do not need a live connection.

That matters because the brief does not give Noor Wi-Fi or continuous smartphone/network access.

### 5.5 The decision can remain safe and bounded

RoyaCheck must ultimately help Noor **prioritize a real human-review next step** using the bounded visual proposal; merely deciding whether to save a record is not sufficient AI value.

The exact decision wording and label-to-action routing remain for Stage 3. They must remain safe and bounded without:

- claiming the cause of her yield decline;
- prescribing treatment;
- autonomously contacting an extension service;
- making a market decision for her;
- treating `no visible rust` as healthy/all-clear/no-disease.

### 5.6 The evidence can be proximal

The hackathon can test:

- visual-model behavior;
- abstention;
- offline operation;
- local latency/size;
- human-authority state transitions;
- record generation.

It does not need to pretend to prove farm-level impact.

---

## 6. Important case tensions that remain

### The yield decline is not diagnosed

The selected route tests one visible coffee-leaf condition.

It does not establish why Noor’s yields fell.

### Smartphone access is weekend-assisted/shared

The demo must preserve that Noor’s daughter boards in the district town and that Noor mainly uses the daughter’s smartphone on weekends with her help. That is both a device-access and screen-literacy constraint.

The demo must not present Noor as having a personal smartphone in hand all day. Stage 3 must lock the operator, timing, leaf location/capture path, observation-to-capture delay, and role of Noor’s own phone.

### A registry may still matter for scale

Local operation can succeed while institutional reach remains constrained.

### Price information remains unsolved

The selected route intentionally leaves Noor’s market-price problem outside the MVP.

### BRACOL is relevant but not sufficient for field confidence

Its presence in the official brief is evidence of task relevance, not of field generalization.

### Human-review capacity is limited

The product can prepare a better record for later review; it does not create additional extension staff.

---

## 7. Hard rejection / reduction triggers for the selected route

The route must be reduced or stopped if later gates show that:

- legally usable image data are inadequate;
- field/domain-transfer evidence is too weak for the intended claim;
- reliable abstention/OOD behavior cannot be demonstrated;
- browser-local inference cannot meet the declared device/size/latency budget;
- the visual component adds no defensible value beyond the strongest simple baseline;
- the human-authority boundary cannot be enforced;
- an official rule prohibits a required technical input.

A technical fallback may change model/runtime details.

It does not silently authorize switching to an unrelated product concept.

---

## 8. Owner selection record

**Selected route:**

> **RoyaCheck Offline — a small, offline-capable coffee-leaf observation aid that helps Noor structure a suspicious leaf observation and prepare it for human review, with explicit uncertainty and human final authority.**

**Provisional case-level decision direction — final wording remains a Stage 3 owner decision:**

> **Does this suspicious coffee leaf show enough visible evidence consistent with rust that Noor should prioritize it for human review, or should she record that no visible rust was observed while keeping review available if concern remains?**

Stage 3 must lock the exact wording and label-to-action routing so the three AI proposals do not collapse into the same action.

**Explicitly unsolved Annex B branches:**

- full cause of seasonal yield decline;
- market-price reference/bargaining;
- registry creation;
- extension staffing;
- treatment planning.

---

## 9. Stage 2 conclusion

RoyaCheck remains the selected route **because it is the strongest fit to this specific Annex B case**, not because coffee-rust classification is generically interesting.

It combines:

> **direct Noor-case fit + distinct visual AI value + official coffee-data relevance + offline Small AI plausibility + measurable evidence + bounded human authority + solo-build reliability**

while leaving the price and infrastructure branches honestly out of scope.

**Stage 2 status: Reopened — in review. The independent case-alignment audit is complete and its findings are reconciled in PR #9 pending owner re-closure.**
