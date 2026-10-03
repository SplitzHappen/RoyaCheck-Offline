# Stage 2 — Agriculture Concept Comparison and Elimination Record

**Stage:** 2  
**Status:** In review  
**Sector:** Agriculture  
**Selected route:** RoyaCheck Offline  
**Purpose:** Document why the selected farmer-facing coffee-leaf observation route remains preferable to credible Agriculture alternatives under the competition’s Small AI, constrained-environment, evidence, safety, and solo-build requirements.

This document is a **decision record**, not a new concept-selection exercise. The selected route is already in force. Stage 2 records the comparison logic and residual risks that justify continuing with it.

---

## 1. Decision frame

The comparison is centered on:

> **smallholder farmer + field-observation workflow + binding constraint**

—not on country identity.

For the selected route:

- **primary user:** smallholder coffee farmer;
- **task:** identify and document a suspicious coffee-leaf observation;
- **constraint:** immediate expert review and/or connectivity may not be available;
- **AI role:** bounded visual pattern recognition with uncertainty/abstention;
- **human authority:** farmer confirmation and/or extension/cooperative review depending on the case;
- **handoff:** structured local observation that can later support human review.

Extension/cooperative professionals are therefore support and escalation roles rather than the primary challenge user.

---

## 2. Evidence versus judgment

Stage 2 distinguishes three types of statements:

### Evidence-backed dependency

A requirement or constraint supported by Stage 0/Stage 1 evidence or by the concept’s own technical needs.

Examples:

- a grounded retrieval concept requires an authoritative corpus;
- a visual-grading concept requires relevant labelled images;
- an offline concept must run without mandatory cloud inference.

### Design / feasibility judgment

A project assessment about relative fit under the competition clock.

Examples:

- one dependency is harder to satisfy than another;
- one concept has a clearer end-to-end demo;
- one concept creates more institutional integration risk.

These are judgments, not empirical facts.

### Owner-selected route

The current owner decision is:

> **RoyaCheck Offline — a narrow, offline-capable coffee-leaf rust observation aid with explicit uncertainty and human final authority.**

Stage 2 does not reopen that decision unless a later confirmed rule or technical blocker makes the route impossible.

---

## 3. Screening dimensions

All concepts are compared against the same dimensions from the roadmap:

- development importance;
- distinct AI value;
- Small AI fit;
- measurable value;
- user realism;
- solo-build feasibility;
- demo reliability;
- data feasibility;
- inclusivity/localization;
- safety/privacy tractability;
- differentiation.

Qualitative labels are used instead of artificial numeric precision:

- **Strong**
- **Moderate**
- **Weak**
- **Fatal dependency**

A concept may still be rejected despite several strong dimensions if one binding dependency makes the route unrealistic for this competition.

---

## 4. Hard rejection / downgrade triggers

A concept is rejected or materially downgraded if it:

- requires unavailable proprietary data;
- depends on multiple fragile integrations;
- relies on outcomes the prototype cannot credibly demonstrate;
- assumes continuous connectivity or high-end hardware;
- uses AI decoratively rather than for a task requiring learned inference;
- lacks a complete user-value loop;
- lacks a measurable near-term proxy;
- is too broad for a solo build;
- creates a safety/authority boundary that cannot be controlled credibly;
- cannot be evaluated without circular or self-generated evidence.

---

# 5. Compact Agriculture longlist

## A. RoyaCheck Offline — coffee-leaf rust observation aid

**User/workflow:** smallholder farmer documents a suspicious coffee leaf and may later share the observation with extension/cooperative support.

**AI increment:** visual pattern recognition over the leaf image with explicit uncertainty/abstention.

**Non-AI components:** human disposition, local structured record, deterministic summary/handoff.

**Current disposition:** **SELECTED ROUTE**

---

## B. Grounded extension-information retrieval

**User/workflow:** farmer or intermediary asks an agricultural question; the system retrieves bounded material from an authoritative corpus.

**AI increment:** semantic or vernacular retrieval / query normalization.

**Strongest baseline:** keyword/BM25/full-text search plus glossary/synonym expansion.

**Current disposition:** **DOWNGRADED**

Reason: the concept depends on a current authoritative corpus and must demonstrate material improvement over a strong lexical-search baseline. That dependency is less direct than the selected visual-perception task.

---

## C. Weather bulletin → crop-action translation

**User/workflow:** farmer receives an official weather/crop bulletin and needs a short actionable interpretation.

**AI increment:** language transformation or grounded extraction.

**Strongest baseline:** deterministic templates/rule tables.

**Current disposition:** **DOWNGRADED**

Reason: deterministic templates may perform most of the useful transformation, weakening distinct AI necessity.

---

## D. Agricultural disease/report intake

**User/workflow:** farmer or field actor provides a report that is structured for human/institutional review.

**AI increment:** extraction, language normalization, or speech/text structuring.

**Strongest baseline:** structured form / hotline / deterministic validation.

**Current disposition:** **DOWNGRADED**

Reason: value may depend more on institutional trust, reporting incentives, official protocols, and integration into a real reporting chain than on the AI component itself.

---

## E. Visual produce-quality grading

**User/workflow:** farmer or aggregator photographs produce for a bounded quality/defect assessment.

**AI increment:** visual grading/classification.

**Strongest baseline:** human grading standard / reference chart.

**Current disposition:** **DOWNGRADED**

Reason: strong visual-AI fit, but useful development value depends on stable grading standards, buyer incentives, and suitable calibrated image data.

---

## F. Agricultural paper-record digitization

**User/workflow:** farmer/cooperative/field staff convert paper records into structured digital data.

**AI increment:** OCR/document extraction and normalization.

**Strongest baseline:** manual data entry / standard digitization workflow.

**Current disposition:** **REJECTED FOR THIS ENTRY**

Reason: technically buildable but relatively generic, less differentiated, and weaker as a Small AI constrained-environment demonstration than the selected observation loop.

---

# 6. Comparative matrix

| Dimension | RoyaCheck | Grounded extension retrieval | Weather/action translation | Disease/report intake | Visual quality grading | Paper-record digitization |
|---|---|---|---|---|---|---|
| Development importance | **Strong** | Strong | Moderate–Strong | Strong | Moderate | Moderate |
| Distinct AI value | **Strong** | Moderate–Strong | Weak–Moderate | Moderate | Strong | Moderate |
| Small AI fit | **Strong** | Strong | Strong | Moderate | Strong | Strong |
| Measurable prototype value | **Strong** | Strong | Moderate | Moderate | Moderate–Strong | Strong |
| User/workflow realism | **Strong** | Moderate | Moderate | Moderate | Moderate | Moderate–Strong |
| Solo-build feasibility | **Strong** | Moderate | Strong | Moderate | Moderate | Strong |
| Demo reliability | **Strong** | Moderate | Moderate–Strong | Moderate | Strong | Strong |
| Data feasibility | **Moderate** | Moderate | Moderate–Strong | Weak–Moderate | Weak–Moderate | Moderate–Strong |
| Inclusivity/localization | **Moderate–Strong** | Strong | Strong | Strong | Moderate | Moderate |
| Safety/privacy tractability | **Strong** if no treatment advice | Moderate–Strong | Moderate–Strong | Moderate | Strong | Moderate |
| Differentiation | **Strong** | Moderate | Weak–Moderate | Moderate | Moderate | Weak |
| Binding dependency | Field-like data + OOD/abstention | Authoritative corpus + BM25 advantage | AI necessity vs templates | Institutional legitimacy/incentives | Standards + buyer incentives + image data | Generic value/differentiation |

**Interpretation:** The matrix is a design comparison, not an empirical ranking. “Strong” means favorable relative to this hackathon’s constraints, not universally superior in real-world development.

---

# 7. Why RoyaCheck remains the selected route

## 7.1 The AI role is distinct and easy to defend

The selected route gives AI one job that is genuinely learned:

> interpret a coffee-leaf image.

A form, spreadsheet, or deterministic record system can store the observation but cannot itself perform the learned image-pattern comparison.

That gives the project a clear answer to “Why AI?”

---

## 7.2 It fits the Small AI constraint naturally

The selected problem can plausibly be addressed with a compact local visual model.

The system does not need:

- a general-purpose LLM;
- continuous cloud inference;
- a large remote retrieval stack;
- multiple live institutional integrations.

That makes the constrained-environment story part of the architecture rather than presentation language.

---

## 7.3 It has a complete farmer-facing value loop

The loop is compact and visible:

1. farmer captures/selects leaf image;
2. AI proposes visible rust / no visible rust / not sure;
3. human explicitly confirms, corrects, or requests review;
4. formal observation is stored locally;
5. deterministic summary supports later extension/cooperative handoff.

This loop can be demonstrated end to end without claiming treatment or autonomous action.

---

## 7.4 The evaluation target is concrete

Later stages can measure:

- class performance on a declared evaluation set;
- abstention/coverage;
- confident misses;
- OOD/other-disease behavior;
- local latency;
- model/runtime size;
- offline execution;
- human-authority controls;
- correct local record/summary behavior.

That evidence is closer to the system’s actual function than livelihood-level proxy claims.

---

## 7.5 Safety can be bounded cleanly

The selected route does not need to output:

- pesticide or fungicide selection;
- chemical dose;
- treatment plan;
- quarantine clearance;
- autonomous farm action.

The formal authority boundary remains:

> AI proposal ≠ formal observation.

That is easier to test than a concept whose value depends on safe generated agronomic advice.

---

## 7.6 It is feasible for a solo build

The selected route has one principal learned component and a deterministic surrounding workflow.

That is preferable to concepts requiring:

- authoritative corpus construction;
- multilingual retrieval evaluation;
- voice/speech quality under field conditions;
- institutional API integrations;
- complex action-generation logic.

---

# 8. Why the alternatives are not selected

## 8.1 Grounded extension-information retrieval

This route remains credible in principle.

However, it creates two material competition-time burdens:

1. obtaining and governing a sufficiently authoritative, current, reusable corpus;
2. demonstrating that semantic/vernacular retrieval materially improves over BM25/full-text/glossary baselines.

If the strong baseline already works well, the AI increment becomes harder to defend.

**Disposition:** useful family, but weaker than RoyaCheck for this entry.

---

## 8.2 Weather/action translation

This route is technically simple and potentially useful.

Its weakness is exactly that simplicity:

- an approved action table;
- deterministic templates;
- rule-based message generation

may handle much of the workflow without requiring learned AI.

If the non-AI baseline performs the useful task, AI becomes decorative.

**Disposition:** downgraded for weak AI necessity.

---

## 8.3 Agricultural disease/report intake

Structured intake can reduce form friction, especially where reports are free-text or multilingual.

But a real surveillance/reporting workflow depends on:

- institutional reporting authority;
- user trust;
- incentives to report;
- official definitions and escalation rules;
- real integration into a reporting channel.

Those dependencies can dominate the value of the AI interface itself.

**Disposition:** downgraded because institutional dependencies are heavier and harder to validate during the competition.

---

## 8.4 Visual produce-quality grading

This route has a legitimate visual-AI task and can produce a compelling demo.

Its weaker point is the value chain:

> a grade matters only if it maps to a stable standard and affects a real buyer/market decision.

Without verified standards, incentives, and suitable labelled data, a visually impressive classifier may have weak demonstrated development value.

**Disposition:** downgraded despite strong visual-AI fit.

---

## 8.5 Agricultural paper-record digitization

This route is highly buildable and measurable.

However, it is:

- generic across sectors;
- less differentiated;
- less tightly aligned to the Agriculture challenge’s field-observation example;
- less compelling as an offline Small AI perception demonstration.

**Disposition:** rejected for this entry, not because digitization lacks value generally.

---

# 9. Residual risks of the selected route

RoyaCheck is selected with material risks still visible.

## Field-domain shift

Performance may change across:

- cultivar;
- disease stage;
- camera;
- lighting;
- background;
- geography;
- season;
- look-alike disease/stress.

The selected route therefore requires explicit OOD/abstention evaluation later.

## Data representativeness

Public coffee-leaf datasets may not represent the intended farmer’s field conditions.

Later stages must disclose:

- source;
- license;
- image conditions;
- class mapping;
- coverage limits;
- external-domain limitations.

## Human baseline uncertainty

A competent farmer, technician, or reference guide may already handle obvious cases adequately.

The project must not claim superiority over human experts unless directly measured.

## Incumbent products

Crop-diagnosis tools already exist.

Differentiation therefore depends on:

- narrow coffee-rust scope;
- browser-local/offline operation;
- explicit uncertainty;
- human authority;
- structured observation/handoff;
- transparent evidence/limitations.

## Institutional handoff

A technically valid local record does not prove that an extension/cooperative system can operationally absorb it.

The prototype demonstrates a handoff-ready record, not institutional deployment.

---

# 10. Falsifiers / reasons to reduce scope later

The selected route should be reduced, degraded, or killed if a later gate establishes that:

- legally reusable target data are inadequate;
- meaningful OOD/abstention cannot be demonstrated;
- browser-local inference cannot meet the declared technical budget;
- the visual model adds no defensible value over the strongest simple baseline;
- the authority boundary cannot be implemented reliably;
- an official competition rule prohibits a required technical input.

A technical fallback may change the model or runtime path.

It does **not** authorize silently switching to an entirely different product concept.

---

# 11. Selection record

**Owner-selected route:**

> **RoyaCheck Offline — a narrow, offline-capable coffee-leaf rust observation aid for a smallholder farmer, with explicit uncertainty and human final authority.**

The selected value loop is:

> **leaf image → bounded visual proposal → explicit human disposition → local structured observation → deterministic extension/cooperative handoff**

The selection rationale is:

- genuine perceptual AI task;
- natural Small AI/offline fit;
- strong farmer-facing demo;
- measurable proximal evidence;
- bounded safety surface;
- low integration burden;
- realistic solo-build scope.

The selected route remains subject to the residual data, domain-shift, OOD, baseline, and handoff risks listed above.

---

# 12. Stage 2 conclusion

The Agriculture alternatives considered are credible but create weaker combinations of AI necessity, evidence quality, dependency load, differentiation, or solo-build feasibility.

RoyaCheck remains the selected route because it offers the clearest combination of:

> **development relevance + distinct visual AI value + constrained-environment fit + measurable technical evidence + human authority + reliable solo-build scope**

without requiring unsupported claims about treatment, yield, income, adoption, or institutional deployment.

**Stage 2 status: READY FOR OWNER REVIEW.**
