# Stage 1 — Agriculture Problem-Space Research

**Stage:** 1  
**Stage status:** Closed — owner approved (PR #6)  
**Document revision:** Corrective framing repair in review  
**Sector:** Agriculture  
**Product direction:** RoyaCheck Offline  
**Purpose:** Establish the user, workflow, operating constraints, development relevance, AI-versus-non-AI rationale, and honest prototype-level claim ceiling for the selected Agriculture route.

This document is a problem-evidence record. It does **not** choose the final model, dataset, runtime, threshold, or deployment architecture, and it does not claim that the prototype improves farm-level outcomes.

---

## 1. Official challenge anchor

The project is anchored to the **Agriculture user and workflow described in the official Small AI for Development Challenge Brief**, not to a particular country.

The Agriculture scenario centers on a **smallholder coffee farmer** who:

- grows coffee;
- faces an unexplained crop problem;
- has limited access to extension support;
- needs help making, communicating, or acting on one better agricultural decision.

The challenge explicitly includes:

- identifying a crop problem;
- documenting a field observation;
- connecting evidence to an extension-service next step.

That is the core framing for RoyaCheck Offline.

> **Primary user:** a smallholder coffee farmer or another field actor helping that farmer capture the observation.  
> **Human authority / escalation endpoint:** an extension officer, cooperative technician, or other responsible human reviewer.  
> **Unit of analysis:** the user + field-observation workflow + binding constraint.

Geography is secondary. A future deployment would need local validation, but the hackathon problem is not defined as a Dominican Republic problem or as a country-specific intervention.

---

## 2. Bounded problem statement

A smallholder coffee farmer notices a suspicious leaf but may face a practical gap between:

1. seeing a visible symptom;
2. deciding whether it appears consistent with coffee leaf rust;
3. recognizing when the image is ambiguous, poor quality, or out of scope;
4. documenting the observation consistently; and
5. communicating or escalating the evidence to a responsible human when needed.

The project therefore focuses on a narrow task:

> **Support a bounded coffee-leaf observation workflow in which a compact local visual model proposes “visible rust,” “no visible rust,” or “not sure,” while a human retains final authority over the formal observation and any extension/cooperative next step.**

This is **not** a general crop-diagnosis system, a treatment recommender, or an autonomous farm-management tool.

---

## 3. Why this problem matters

### 3.1 Coffee leaf rust is a real production problem

**FACT.** Coffee leaf rust is a material coffee-production problem in Latin America and the Caribbean. IICA has supported regional coffee-rust early-warning work across multiple coffee-producing countries, reflecting the need for observation, monitoring, and response capacity.  
Source: IICA, 2019, *Ten countries in the Americas to be equipped with an integrated early warning system to tackle coffee leaf rust*  
https://iica.int/en/press/news/diez-paises-de-america-contaran-con-sistema-integrado-de-alerta-temprana-para-2/

**FACT.** A 2022 World Bank report on Northern Central America describes coffee rust (“roya”) as an endemic agronomic factor limiting coffee production, and emphasizes technical assistance, extension, information systems, and crop-management capacity.  
Source: World Bank, 2022, *Agrifood Systems in Northern Central America: Agrologistics for Modern Family Farms*  
https://documents1.worldbank.org/curated/en/099210110132219107/pdf/P178022019de1d00b0b4b20b1cb1e4c88b1.pdf

These sources establish the relevance of coffee rust and field-support systems. They do **not** establish that image-based AI is automatically the correct intervention.

### 3.2 The visual observation step is bounded and testable

**FACT.** Coffee leaf rust is caused by *Hemileia vastatrix* and produces visible leaf symptoms.  
Supporting source: FAO AGRIS record for Gamarra Gamarra et al. (2022), *Phylogenetic relationship of coffee leaf rust in the central jungle of Peru*  
https://agris.fao.org/search/en/providers/122436/records/6a96d2348a202ccda1b64898

**INFERENCE.** Because the target task involves interpreting visible image patterns, computer vision is a plausible AI contribution. That does not remove the need for uncertainty, human review, and eventual field validation.

---

## 4. Target users and authority roles

### Primary user

The primary story starts with the **smallholder coffee farmer** described in the Agriculture challenge.

The farmer may:

- capture or select a coffee-leaf image;
- receive a bounded AI proposal;
- review the result;
- confirm, correct, or request review;
- retain the observation locally;
- prepare it for later communication to an extension/cooperative actor.

### Assisted-use variant

A field intermediary or cooperative worker may help capture or structure the observation where:

- the farmer does not have the appropriate device;
- digital literacy is a constraint;
- the workflow is institutionally mediated.

This is an **assisted-use variant**, not a replacement for the official farmer-centered problem frame.

### Human authority / escalation role

A responsible human reviewer may include:

- an extension officer;
- cooperative technician;
- trained plant-health intermediary;
- other explicitly authorized person.

Where the image is ambiguous, poor quality, non-coffee, or otherwise uncertain, the correct behavior is **review/escalation**, not forced classification.

**PROJECT DESIGN.** The formal observation records who confirmed it through `confirmed_by_role`.

---

## 5. Current-workflow abstraction

Actual plant-health workflows vary across institutions and farming systems. The following is a **workflow abstraction**, not a claim that every farmer follows the same process.

A plausible sequence is:

1. the farmer notices a suspicious coffee leaf;
2. the farmer or helper inspects it visually or compares it with prior knowledge/reference material;
3. the observation is either acted on informally, ignored, or communicated to a technician/cooperative/extension actor;
4. a responsible person decides whether the case warrants further attention;
5. the observation may or may not be recorded consistently;
6. more authoritative follow-up may be required before management action.

RoyaCheck addresses only the **observation → documentation → human-review handoff**.

It does not replace formal confirmation, extension judgment, laboratory diagnosis, or agronomic treatment planning.

---

## 6. Binding constraints

The hackathon framing is constraint-based, not country-based.

### 6.1 Limited or intermittent extension access

The official Agriculture scenario describes a farmer who does not have frequent extension access.

**PROJECT RELEVANCE.** RoyaCheck therefore aims to help the farmer create a structured observation **between extension interactions**, without pretending to replace the extension officer.

### 6.2 Connectivity and digital access

**FACT.** FAO guidance on digital agricultural extension identifies barriers including infrastructure/reception gaps, device cost, institutional capacity, governance constraints, digital-skills limitations, and unequal access to digital advisory services.  
Sources:
- FAO, 2023, *Strengthening digital agricultural extension and advisory services in smallholder farming*  
  https://www.fao.org/family-farming/detail/en/c/1756401/
- FAO, 2023, *Guide on digital agricultural extension and advisory services — Use of smartphone applications by smallholder farmers*  
  https://www.fao.org/science-technology-and-innovation/resources/publications/guide-on-digital-agricultural-extension-and-advisory-services-use-of-smartphone-applications-by-smallholder-farmers/en

**INFERENCE.** Offline operation is useful because it reduces dependence on immediate connectivity at the point of observation.

This does **not** imply that all coffee farmers, all rural areas, or any particular country are uniformly offline.

### 6.3 Device realism

The challenge expects use of a device the intended user can realistically access.

**PROJECT DESIGN.** The intended architecture is therefore constrained toward a compact browser-local implementation rather than a high-end-device or always-online cloud workflow.

The exact device/browser target is fixed later under the Stage 4 technical pre-registration.

### 6.4 Human and institutional capacity

**FACT.** FAO treats extension and advisory services as mechanisms connecting farmers with knowledge, technologies, markets, and services, and positions digital tools as complements to human advisory capacity.  
Source: FAO, *Extension and advisory services*  
https://www.fao.org/research-extension-systems/extension-and-advisory-services/

**PROJECT DESIGN.** The AI output remains a proposal. Human disposition remains the formal observation.

---

## 7. Strongest non-AI alternatives

The project should be compared against realistic simpler alternatives.

| Alternative | What it does well | Limitation for this task |
|---|---|---|
| Laminated symptom guide / reference sheet | Cheap, offline, easy to distribute | Farmer still performs all visual interpretation manually |
| Deterministic checklist / decision tree | Structured, auditable, no model risk | Hard to encode visual pattern variation from an image |
| Structured digital form | Improves record consistency | Does not interpret the image |
| Web search / online image reference | Broad information access | Connectivity-dependent and unstructured |
| Messaging/photo review by expert | Human judgment and context | Depends on expert availability and often connectivity |
| Direct extension/cooperative review | Strong human baseline | May not be immediately available when the observation occurs |

These alternatives remain valid components of a real workflow. AI should not replace them where they are sufficient.

---

## 8. Why compact computer vision adds distinct value

The narrow AI contribution is **visual perception**.

A compact local model can potentially:

- compare a new leaf image against learned visual patterns;
- produce a bounded first-pass proposal;
- identify low-confidence cases;
- abstain rather than force a class;
- operate without a live cloud inference call.

The AI does **not** need to:

- generate agronomic advice;
- recommend a pesticide or fungicide;
- specify a dose;
- predict yield;
- decide what action the farmer must take;
- contact an extension service autonomously.

The surrounding workflow is intentionally simpler:

- human confirmation/correction;
- structured local record;
- deterministic summary;
- explicit review/escalation.

**PROJECT DESIGN PRINCIPLE:** AI owns the visual pattern-recognition step; the human owns the formal disposition; deterministic software owns record and summary logic.

---

## 9. Development-value chain

The defensible development logic is:

**smallholder farmer encounters a suspicious coffee-leaf observation**  
→ **visual interpretation is required before the observation can be structured confidently**  
→ **extension access and connectivity may not be immediate**  
→ **a compact offline visual proposal can support the farmer at the point of observation**  
→ **explicit uncertainty prevents forced answers**  
→ **human confirmation/escalation preserves authority**  
→ **the observation can be stored and later communicated to an extension/cooperative actor**

The prototype can directly demonstrate only the bounded technical/workflow portion of this chain.

---

## 10. What the prototype can measure

Stage 1 intentionally uses **proximal prototype metrics**, not livelihood outcomes.

Later technical stages can measure whether the system can:

- produce a bounded AI proposal or abstain on a defined evaluation set;
- preserve explicit human confirmation;
- prevent an AI-only proposal from becoming a formal record;
- save a structured observation locally;
- generate a deterministic summary from the human disposition;
- complete the core workflow with the network disconnected;
- report latency and model/runtime size on the declared target browser/device;
- report coverage, abstention, and confident-miss behavior under the pre-registered evaluation design.

These are credible hackathon-scale measurements.

---

## 11. Facts, inferences, project design, and claim ceiling

### FACT

Supported directly by cited or official challenge evidence:

- the Agriculture challenge is framed around a smallholder coffee farmer;
- the challenge includes identifying a crop problem, documenting a field observation, and connecting evidence to an extension-service next step;
- coffee leaf rust is a material coffee-production problem;
- extension and technical-assistance systems remain relevant to agricultural workflows;
- digital agricultural extension can face connectivity, cost, skills, and institutional constraints.

### INFERENCE

Reasonable but not directly proven by the cited evidence:

- a local image proposal could reduce dependence on immediate connectivity for the observation step;
- assisted use may be safer or easier in some settings;
- structured local records may improve consistency relative to informal handoff.

### PROJECT DESIGN

Choices made for RoyaCheck:

- three AI proposal states: visible rust / no visible rust / not sure;
- explicit human confirmation/correction/review;
- no automatic conversion of AI proposal into formal observation;
- local structured record;
- deterministic extension-ready summary;
- no geolocation;
- no raw-image persistence by default;
- no treatment recommendation.

### NOT ESTABLISHED / PROHIBITED CLAIMS

The project does **not** currently establish:

- increased yield;
- increased farmer income;
- reduced pesticide or fungicide use;
- correct treatment selection;
- improved extension-system performance at scale;
- farmer adoption;
- real-world time savings;
- reduced disease prevalence;
- robustness in any specific country or farm system;
- expert-equivalent diagnosis;
- replacement of extension officers;
- general coffee-disease diagnosis.

These claims require evidence beyond a hackathon prototype.

---

## 12. Geography policy

RoyaCheck is **not a country-specific prototype**.

Geographic examples may support the relevance of coffee, rust, or extension constraints, but they do not define the user or problem.

A future deployment would require local validation of:

- user workflow;
- extension/cooperative role;
- language;
- device access;
- connectivity;
- coffee variety and disease presentation;
- image-domain performance;
- escalation pathways.

No current evidence should be presented as field validation for a country not directly evaluated.

---

## 13. Key risks that later stages must preserve

### Domain shift

A model evaluated on curated or geographically narrow images may fail on different:

- cultivars;
- cameras;
- lighting;
- backgrounds;
- disease stages;
- farms;
- regions;
- other diseases or stresses.

Later evaluation must include abstention and out-of-domain controls.

### Automation bias

A confident wrong proposal may be accepted too readily.

Control: the formal human disposition remains separate from the AI proposal.

### Scope creep

A rust-observation aid can drift into generic diagnosis or treatment advice.

Control: maintain the narrow visible-rust / no-visible-rust / not-sure observation contract and canonical exclusions.

### Institutional mismatch

A technically functional tool may still fail if no viable review/escalation pathway exists in the target deployment context.

Control: do not claim deployment readiness without context-specific validation.

---

## 14. Stage 1 falsifiers

The problem framing should be reconsidered if later evidence shows that:

- the intended user already has a simpler, equally accessible tool that performs the same bounded image-assessment task adequately;
- there is no plausible human review/escalation path;
- legally usable, sufficiently relevant data cannot support credible evaluation;
- the learned visual component cannot add measurable value beyond the strongest non-AI baseline;
- safe abstention/OOD behavior cannot be demonstrated;
- browser-local execution cannot meet the later technical budget.

These are legitimate kill/reduction conditions, not failures to hide.

---

## 15. Stage 1 conclusion

The problem is sufficiently grounded to continue:

> A smallholder coffee farmer may need to identify and document a suspicious leaf observation before expert review is immediately available. Coffee leaf rust provides a bounded visual task for which compact computer vision can plausibly add value, while uncertainty and human escalation remain explicit.

The defensible intervention remains narrow:

> **offline-capable coffee-leaf visual proposal + explicit human disposition + structured local record + deterministic extension/cooperative handoff.**

The development case is grounded in the **farmer workflow and operating constraint**, not in a country label.

The prototype does **not** claim yield, income, treatment, adoption, or extension-system impact.

**Document revision status: READY FOR OWNER REVIEW.**
