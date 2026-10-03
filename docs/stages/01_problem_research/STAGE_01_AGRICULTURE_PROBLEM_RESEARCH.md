# Stage 1 — Annex B Agriculture Problem Research

**Stage:** 1  
**Status:** Reopened — Annex B case-alignment audit pending  
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
- the nearest extension officer reaches the sub-county only rarely;
- at harvest, Noor lacks an independent price reference when a middleman names a price;
- extension services face staff shortages, manual data collection, and delayed alerts;
- in some settings, missing farmer registries, phones, or trust can be more binding than the absence of an algorithm;
- Noor has one phone she uses for calls, messages, and mobile money;
- the household smartphone belongs to her daughter and Noor uses it with help when her daughter is home;
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

> When Noor has access to the household smartphone and captures or selects a suspicious coffee-leaf image, can a compact offline visual model help her structure the observation as **visible rust / no visible rust / not sure**, so that the observation can be explicitly confirmed, corrected, or flagged for human review?

The supported agricultural decision is therefore:

> **Should this suspicious leaf observation be documented and prepared for human extension/cooperative review rather than treated as a confident answer from the model or left only to memory?**

This is the unit of value that later stages must implement and demonstrate.

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

Possible responsible reviewers include:

- extension officer;
- cooperative technician;
- trained plant-health intermediary;
- another explicitly authorized human role.

The project does not claim that such reviewers are always immediately available.

---

## 6. Device and connectivity reality

The brief does **not** describe Noor as carrying a personal smartphone in the field all day.

That matters.

The prototype must therefore avoid a hidden assumption that:

> Noor sees a leaf → instantly opens an always-connected smartphone on the slope.

The credible minimum path is:

1. Noor has access to the household smartphone at some point;
2. she captures or selects the suspicious leaf image during that phone session;
3. the app’s core proposal works without a live connection;
4. the human disposition and structured record are stored locally;
5. sharing or extension/cooperative review can occur later.

The system should be compatible with shared/intermittent smartphone access rather than requiring permanent personal possession.

---

## 7. Real-world evidence anchor for the device constraint

The official brief asks teams to use common data to ground constraints and to cite source, year, and country/context.

Because Noor is fictional, a real-country statistic must be treated as a **context anchor**, not as Noor’s location.

A relevant current source is the **GSMA Mobile Gender Gap Report 2025**, which includes Kenya among its surveyed lower- and middle-income countries. It reports that mobile ownership can be very high while mobile-internet and smartphone gender gaps remain meaningful, illustrating why “has access to a phone” should not be treated as equivalent to “has dependable smartphone internet access.”

Source: GSMA, *The Mobile Gender Gap Report 2025*  
https://www.gsma.com/gender-gap-2025/

**LIMITATION:** Kenya is used only as a concrete evidence context for mobile-access/inclusion constraints. Noor is not asserted to be Kenyan.

Stage 4 must retain the exact source/year/context in the evidence plan.

---

## 8. Local-language requirement

The brief requires at least one interaction in a **named local language**, by voice or text.

Noor’s fictional local/national languages are not named.

Therefore:

- the product must not invent a language as a fact about Noor;
- Stage 3 must select one real prototype-localization language;
- the final submission must clearly label that language as an implementation choice;
- the UI must demonstrate at least one interaction in it;
- the final narrative must explain limitations for less-supported languages.

A static, human-reviewed text localization is sufficient unless later product decisions justify something more complex.

---

## 9. Current-workflow abstraction

A case-faithful current workflow is:

1. Noor notices something unusual in the coffee crop.
2. She relies on her own visual judgment, memory, available reference information, or help from others.
3. Extension support may not be available when the observation occurs.
4. The observation may remain informal until someone with more expertise can review it.
5. Manual data collection and delayed alerts can make the broader system slower.
6. A later extension/cooperative interaction may need a clearer record of what Noor saw.

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

Current plan:

> GSMA Mobile Gender Gap evidence for device/connectivity/inclusion context.

Additional common data should be added only if they materially strengthen the implemented claim.

The project does not need to use every dataset listed in Annex B.

---

## 15. Development-value chain

The defensible logic is:

**Noor observes a suspicious coffee leaf**  
→ **immediate expert support may not be available**  
→ **the household smartphone may be available only intermittently and connectivity may be weak**  
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
- smartphone access is treated as shared/intermittent;
- offline behavior is justified by the actual user/device workflow;
- extension scarcity is part of the problem but human authority remains;
- registry/phone/trust dependencies are acknowledged for scale;
- common and sector data roles are explicit;
- claims remain proximal and measurable.

**Stage 1 status: REOPENED — ready for independent case-alignment audit.**
