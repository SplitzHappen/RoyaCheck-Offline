# Stage 1 — Annex B Agriculture Problem Research

**Stage:** 1  
**Status:** Reopened — in review  
**Sector:** Agriculture  
**Product direction:** RoyaCheck Offline  
**Controlling source:** Official Small AI for Development Challenge Brief, Annex B (Agriculture), read with the common rules/data sections.

Stage 1 now treats the official Noor case as the primary problem specification. External Agriculture evidence may contextualize the case, but it may not redefine the user, the problem, or the competition’s required constraints.

See also: `docs/stages/00_rules/ANNEX_B_CASE_CONTRACT.md`.

---

## 1. What the official case actually says

Noor is a fictional smallholder farmer whose constraints are intended to represent real development conditions.

The relevant Agriculture case facts are:

- Noor is 38 and farms two hectares;
- coffee is grown on the upper slope, with maize and beans elsewhere;
- she has belonged to a coffee cooperative for eleven years;
- coffee yields have fallen this season and she does not know why;
- the nearest extension officer reaches the sub-county only **twice a year at best**;
- at harvest, Noor lacks an independent price reference when a middleman names a price;
- extension services face staff shortages, manual data collection, and delayed alerts;
- in some settings, missing farmer registries, phones, or trust can be more binding than the absence of an algorithm;
- Noor’s **own phone** is the one she uses for calls, messages, and mobile money;
- her 16-year-old daughter boards at school in the district town;
- the smartphone belongs to her daughter, and Noor only really uses it when her daughter is home **on weekends** to set it up and show her how; this creates an assisted-use / screen-literacy constraint;
- there is no household Wi-Fi and mobile data is purchased as needed;
- Noor is generally on the slope during the day while the phone is at the house;
- she speaks a local language at home and a national language when necessary.

The hackathon challenge is not “solve agriculture.”

It is:

> help Noor make, communicate, or act on **one better agricultural decision** under these constraints.

---

## 2. The case contains more than one problem

The Agriculture annex gives at least two headline problem branches.

### Crop-information branch

Noor does not know what is affecting her coffee crop and timely localized advice is difficult to obtain.

### Market-information branch

Noor lacks an independent reference for the price offered at harvest.

The annex also identifies system-level constraints such as extension staffing, manual data collection, delayed alerts, registries, phone access, and trust.

**PROJECT DECISION:** RoyaCheck intentionally addresses only a bounded part of the **crop-information branch**.

The price-reference branch is real and relevant, but it is outside the MVP.

---

## 3. Selected problem slice

RoyaCheck does **not** attempt to explain why Noor’s yields fell.

Instead, it supports one narrower observation problem:

> When Noor has access to her daughter’s smartphone during an assisted session, can a compact offline visual model help distinguish **visible rust / no visible rust / not sure** strongly enough to inform which suspicious-leaf observations she should prioritize for human review?

The exact agricultural next-step wording is **not yet owner-locked**. Stage 3 must finalize a decision in which the visual proposal materially affects prioritization rather than merely deciding whether to save a record.

Candidate direction for Stage 3 evaluation:

> **Does this suspicious coffee leaf show enough visible evidence consistent with rust that Noor should prioritize it for human review, or should she record that no visible rust was observed while keeping review available if concern remains?**

The final label-to-action routing also remains a Stage 3 owner decision. Safety constraints already fixed are: `not sure` gives no conclusion; `no visible rust` never means healthy/all-clear/no-disease; review remains available; and no route autonomously triggers treatment or contact.

---

## 4. Why coffee rust is a legitimate but bounded target

The official Agriculture dataset table lists **BRACOL**, an Arabica coffee-leaf disease and pest image dataset, as directly relevant to Noor’s crop.

That is strong task-level alignment.

It does **not** establish that:

- rust caused Noor’s seasonal yield decline;
- every suspicious coffee leaf is rust;
- a BRACOL-trained model will generalize to Noor’s field conditions;
- image classification is sufficient for agronomic diagnosis;
- the prototype improves yield or treatment.

Regional agricultural evidence also establishes that coffee leaf rust is a material coffee-production problem, but that evidence remains contextual rather than proof about Noor’s fictional farm.

Supporting source: IICA, 2019, regional coffee-rust early-warning work  
https://iica.int/en/press/news/diez-paises-de-america-contaran-con-sistema-integrado-de-alerta-temprana-para-2/

---

## 5. User and authority roles

### Primary challenge user

**Noor / smallholder coffee farmer.**

The public story begins with Noor’s uncertainty and her observation.

### Assisted-use role

A cooperative worker, family member, or field intermediary may help where device access or digital confidence makes assisted use more realistic.

This is an implementation variant, not a replacement for Noor as the primary case user.

### Human review endpoint

The **extension officer** is the only reviewer role explicitly named by the case. Possible implementation reviewers could also include a cooperative technician, trained plant-health intermediary, or another explicitly authorized human role, but those roles are **project assumptions unless separately evidenced**.

Stage 3 must lock the reviewer role and label any non-case role honestly. The project does not claim that any reviewer is always immediately available.

---

## 6. Device and connectivity reality

The brief does **not** describe Noor as carrying a personal smartphone in the field all day.

That matters.

The prototype must therefore avoid a hidden assumption that:

> Noor sees a leaf → instantly opens an always-connected smartphone on the slope.

The case establishes a harder workflow constraint than simple sharing: Noor mainly uses **her daughter’s smartphone on weekends, with her daughter’s help**, while Noor’s own calls/messages/mobile-money phone is normally at the house during the day.

Therefore an observation on the slope may precede image capture by hours or days. Stage 3 must explicitly lock:

1. who operates the daughter’s smartphone;
2. when the assisted phone session occurs;
3. where the leaf is when photographed;
4. whether/how a leaf is detached or brought to the phone;
5. the observation-to-capture delay;
6. what role, if any, Noor’s own phone plays;
7. how the later human handoff works.

No current document may depict Noor pulling “her smartphone” out on the slope when she notices a leaf. The system must remain compatible with weekend-assisted, shared/intermittent access rather than permanent personal smartphone possession.

---

## 7. Real-world implementation evidence anchor — selection deferred to Stage 3

The official brief asks teams to use common data to ground constraints and to cite source, year, and country/context.

Because Noor is fictional, any real-country evidence must be treated as a **context/evidence anchor**, never as Noor’s location.

The current research includes candidate common-data evidence such as the **GSMA Mobile Gender Gap Report 2025**, but **no final country/context anchor is locked in Stage 1**. Stage 3 must select one coherent real-world implementation evidence anchor and apply it consistently where possible to:

- device/connectivity evidence;
- localization/language reasoning;
- coffee/agriculture context.

Stage 4 must then carry the exact source/year/context into the evidence plan and make at least one common-data figure bind an actual design parameter rather than remain a general citation.

---

## 8. Local-language requirement

The brief requires at least one interaction in a **named local language**, by voice or text.

Noor’s fictional local/national languages are not named.

Therefore:

- the product must not invent a language as a fact about Noor;
- Stage 3 must select either **(A)** a real local/home language in the chosen evidence-anchor context with explicit reasoning, or **(B)** a national/vehicular language while acknowledging the weaker case fit;
- the final submission must clearly label that language as an implementation choice;
- Stage 3 must pre-commit the answer to how the tool would fare in a less-supported language;
- the UI must demonstrate at least one interaction in the named language.

A static, human-reviewed text localization is sufficient unless later product decisions justify something more complex. Simple prerecorded or human-voiced accessibility prompts remain an option; speech recognition, generative voice advisory, and voice-agent workflows are outside the current MVP unless explicitly re-scoped later.

---

## 9. Current-workflow abstraction

A case-faithful current workflow is:

1. Noor notices something unusual in the coffee crop while she is often on the slope and the phones are at the house.
2. She relies on her own visual judgment, memory, available reference information, or help from others.
3. Her daughter boards in the district town, so the daughter’s smartphone and setup help are mainly available on weekends.
4. The observation may therefore wait before any assisted smartphone capture/selection step; the exact delay and physical leaf workflow remain unresolved for Stage 3.
5. Extension support is available only about twice a year at best, so it may not be available when the observation occurs.
6. The observation may remain informal until someone with more expertise can review it.
7. Manual data collection and delayed alerts can make the broader system slower.
8. A later human interaction may need a clearer record of what Noor saw; the reviewer/channel/payload/consent path is not yet locked.

RoyaCheck addresses only the **visual-observation and record-preparation step**.

It does not replace extension diagnosis, treatment planning, farm management, or market-price information.

---

## 10. Strongest non-AI baselines

The selected route must be compared with simpler tools.

| Baseline | Strength | Remaining gap for the selected task |
|---|---|---|
| Printed/laminated symptom guide | Cheap, offline, simple | Noor performs all visual comparison herself |
| Deterministic checklist | Auditable, safe | Does not directly interpret image appearance |
| Structured observation form | Good record quality | Does not perform learned visual recognition |
| Search/reference images | Broad information | Often connectivity-dependent; still leaves image interpretation to user |
| Later human photo review | Strong authority | Depends on human availability and potentially connectivity |
| Direct extension visit | Strong human support | Annex B explicitly describes infrequent access |

A later evaluation must not claim superiority to these human/simple baselines unless measured.

---

## 11. Why Small AI adds distinct value here

The AI does one learned task:

> **visual pattern recognition on the coffee-leaf image.**

A form or spreadsheet can store a record but cannot itself compare learned visual patterns across images.

The Small AI fit is strengthened by the official Agriculture example of offline computer vision on a basic smartphone.

The model is still only a proposal generator.

The surrounding system remains:

- human confirmation/correction;
- explicit uncertainty;
- deterministic record state;
- deterministic summary;
- optional later human handoff.

---

## 12. Human-final-authority and fail-safe requirements

The official rules require:

- a person makes the final call;
- uncertainty is surfaced rather than guessed through;
- the AI does not autonomously act on the user’s behalf.

For RoyaCheck:

- `visible rust`, `no visible rust`, and `not sure` are AI proposals;
- no proposal becomes a formal observation automatically;
- `not sure` must remain an explicit outcome;
- uncertain cases can be marked for human review;
- no spraying, selling, treatment, or extension-contact action occurs autonomously.

---

## 13. Farmer-registry and scale preconditions

Annex B explicitly warns that missing registries can be more binding than missing algorithms.

RoyaCheck’s local one-user loop can function without a registry.

That does **not** mean the prototype has solved scaled service delivery.

At scale, organized outreach or follow-up may require:

- farmer registry or equivalent identity/reach infrastructure;
- device access;
- trusted institutions;
- extension capacity;
- operational integration.

These are dependencies to disclose under scalability, not features to add to the MVP.

---

## 14. Data-grounding implications

A case-aligned entry should use both official data layers.

### Sector data

BRACOL is the natural first candidate because the brief explicitly identifies it as relevant to Noor’s coffee crop.

Its role must be stated precisely:

> model-development/evaluation data for a bounded leaf-appearance task, subject to license, class, acquisition-setting, and domain-shift checks.

### Common data

At least one common-data source must ground a real constraint.

**No final common-data anchor is locked in Stage 1.** Stage 3 must select one coherent evidence anchor; Stage 4 must name the source/year/context and use at least one common-data figure to bind a concrete design parameter such as first-load/model/bundle size or language support.

Additional common data should be added only if they materially strengthen an implemented claim.

The project does not need to use every dataset listed in Annex B.

---

## 15. Development-value chain

The defensible logic is:

**Noor observes a suspicious coffee leaf**  
→ **immediate expert support may not be available**  
→ **her daughter’s smartphone/setup help may not be available until a weekend assisted session, and connectivity may be weak**  
→ **the exact observation-to-capture path is owner-locked in Stage 3**  
→ **a compact offline model can provide a bounded visual proposal during the available phone session**  
→ **uncertainty can be surfaced instead of hidden**  
→ **Noor/human reviewer explicitly determines the formal observation**  
→ **the record can be retained and later communicated to extension/cooperative support**

The hackathon prototype can directly establish only the technical and workflow portion of this chain.

---

## 16. Prototype-level outcome

The near-term outcome is not yield or income.

The core measurable value unit is:

> **completion of a bounded Noor observation loop under offline conditions, with measured visual-model behavior, explicit abstention, human authority, local record creation, and handoff-ready output.**

Later stages may measure:

- classification behavior;
- abstention/coverage;
- confident rust misses;
- OOD/other-disease routing;
- offline completion;
- local latency;
- model/runtime size;
- authority-state correctness;
- record/summary correctness.

---

## 17. Explicit non-claims

The project does **not** establish:

- why Noor’s yields fell;
- farm-level rust prevalence;
- improved yield;
- improved income;
- reduced pesticide/fungicide use;
- correct treatment;
- market-price improvement;
- improved extension performance at scale;
- farmer adoption;
- real-world time savings;
- field deployment;
- expert-equivalent diagnosis;
- universal coffee-rust robustness;
- successful registry/institutional integration.

---

## 18. Stage 1 case-alignment gate

Stage 1 is aligned only if:

- Noor remains the primary user;
- the project supports one clearly stated better agricultural decision;
- the selected crop-observation branch is distinguished from the price branch;
- falling yields are not equated with rust;
- smartphone access preserves the weekend-assisted daughter-smartphone facts and Noor’s own-phone distinction;
- observation-to-capture delay and the unresolved physical capture path are explicit;
- offline behavior is justified by the actual user/device workflow;
- reviewer role, handoff channel, image travel, consent, and reviewer-visible payload are explicit Stage 3 locks rather than hidden assumptions;
- extension scarcity is part of the problem but human authority remains;
- registry/phone/trust dependencies are acknowledged for scale;
- common and sector data roles are explicit, with one coherent real-world anchor deferred to Stage 3;
- the local/home-language versus national/vehicular-language choice is deferred explicitly to Stage 3;
- claims remain proximal and measurable.

**Stage 1 status: Reopened — in review. The independent case-alignment audit is complete and its findings are reconciled in PR #9 pending owner re-closure.**
