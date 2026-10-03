# Stage 1 — Agriculture Problem-Space Research

**Stage:** 1  
**Status:** In review  
**Sector:** Agriculture  
**Product direction:** RoyaCheck Offline  
**Purpose:** Establish the development problem, user/workflow context, operating constraints, AI-versus-non-AI rationale, and honest prototype-level claim ceiling before later technical stages.

This document is a problem-evidence record. It does **not** choose the final model, dataset, runtime, threshold, or deployment architecture, and it does not claim that the prototype improves farm-level outcomes.

---

## 1. Problem statement

A coffee farmer or field intermediary may observe a suspicious leaf but still face a practical gap between:

1. seeing a visible symptom;
2. deciding whether it appears consistent with coffee leaf rust;
3. recognizing when the image is ambiguous or out of scope;
4. recording the observation consistently; and
5. escalating uncertain cases to a responsible human or extension workflow.

The project therefore focuses on a narrow task:

> **Support a bounded coffee-leaf observation workflow in which a compact local visual model proposes “visible rust,” “no visible rust,” or “not sure,” while a human retains final authority over the formal observation and extension-ready record.**

This is **not** a general crop-diagnosis system, a treatment recommender, or an autonomous farm-management tool.

---

## 2. Why this problem matters

### 2.1 Coffee is development-relevant

**FACT.** A 2026 World Bank feature reports that more than **50,000 families in the Dominican Republic depend on coffee growing for their livelihoods**, and describes high-altitude coffee as an important source of rural employment.  
Source: World Bank, 2026, *Coffee that creates jobs: forest conservation opens opportunities for women in the Dominican Republic*  
https://www.worldbank.org/en/news/feature/2026/04/30/el-caf-que-genera-empleos-la-conservaci-n-del-bosque-abre-oportunidades-a-mujeres-cafetaleras-de-rep-blica-dominicana

**FACT.** IICA reported a regional coffee-rust early-warning initiative spanning ten Latin American and Caribbean countries, including the Dominican Republic, and noted that about **5 million people** in the PROMECAFE region directly depended on coffee production.  
Source: IICA, 2019, *Ten countries in the Americas to be equipped with an integrated early warning system to tackle coffee leaf rust*  
https://iica.int/en/press/news/diez-paises-de-america-contaran-con-sistema-integrado-de-alerta-temprana-para-2/

These figures establish the development relevance of coffee and coffee-rust management. They do **not** establish that image-based AI is the binding constraint or that this prototype will improve livelihoods.

### 2.2 Coffee leaf rust is operationally material

**FACT.** A 2022 World Bank report on Northern Central America describes coffee rust (“roya”) as an endemic agronomic factor limiting coffee production, with severe effects in the worst-hit areas, and emphasizes the need for resistant material, crop-management know-how, financing, and technical assistance. The same report describes geographically dispersed coffee producers in remote highlands and the importance of agricultural extension and information systems.  
Source: World Bank, 2022, *Agrifood Systems in Northern Central America: Agrologistics for Modern Family Farms*  
https://documents1.worldbank.org/curated/en/099210110132219107/pdf/P178022019de1d00b0b4b20b1cb1e4c88b1.pdf

**FACT.** Coffee leaf rust is caused by *Hemileia vastatrix* and produces visible leaf symptoms, but field conditions, disease stage, cultivar, lighting, camera quality, background, and look-alike stressors can affect image interpretation. A visual aid therefore needs uncertainty and abstention rather than presenting every image as a confident diagnosis.  
Supporting source: FAO AGRIS record for Gamarra Gamarra et al. (2022), *Phylogenetic relationship of coffee leaf rust in the central jungle of Peru*  
https://agris.fao.org/search/en/providers/122436/records/6a96d2348a202ccda1b64898

---

## 3. Target users and roles

Stage 1 does not assume one universal coffee-sector user.

### Primary capture/operator role

A **farmer or field intermediary** may:

- select or capture a coffee-leaf image;
- receive a bounded AI proposal;
- review the result;
- explicitly confirm, correct, or request review.

### Responsible human role

A **responsible human reviewer** retains formal authority over the observation record.

Depending on local institutional context, that person could be:

- an extension worker;
- cooperative technician;
- trained field intermediary;
- plant-health professional;
- another explicitly authorized role.

### Escalation role

Where the image is ambiguous, poor quality, outside the target crop/condition, or otherwise uncertain, the correct workflow is escalation or review—not forced classification.

**PROJECT DESIGN.** The prototype records who confirmed the final observation through `confirmed_by_role`.

**LIMITATION.** Stage 1 does not establish that direct farmer use is superior to intermediary-assisted use, or vice versa. Deployment should depend on actual local capability, institutional coverage, trust, literacy, device access, and escalation pathways.

---

## 4. Current-workflow abstraction

Actual plant-health workflows vary by country, institution, cooperative, and farm. The following is therefore a **workflow abstraction**, not a claim that every producer follows the same process.

A plausible current sequence is:

1. a farmer or field actor notices a suspicious leaf;
2. the person visually inspects it or compares it with prior knowledge/reference material;
3. the observation may be communicated to a technician, cooperative, extension worker, or other knowledgeable person;
4. a decision is made about whether the observation merits further attention;
5. the observation may or may not be recorded consistently;
6. more authoritative follow-up may be required before any management action.

RoyaCheck addresses only the **observation-and-record handoff** portion of this workflow.

It does not replace formal confirmation, extension judgment, laboratory diagnosis, or agronomic treatment planning.

---

## 5. Constraints relevant to the workflow

### 5.1 Connectivity and digital access

**FACT.** FAO guidance on digital agricultural extension identifies barriers including infrastructure/reception gaps, device cost, weak institutional capacity, governance constraints, digital-skills limitations, and unequal access to digital advisory services.  
Sources:
- FAO, 2023, *Strengthening digital agricultural extension and advisory services in smallholder farming*  
  https://www.fao.org/family-farming/detail/en/c/1756401/
- FAO, 2023, *Guide on digital agricultural extension and advisory services — Use of smartphone applications by smallholder farmers*  
  https://www.fao.org/science-technology-and-innovation/resources/publications/guide-on-digital-agricultural-extension-and-advisory-services-use-of-smartphone-applications-by-smallholder-farmers/en

**INFERENCE.** Offline operation is valuable because it reduces dependence on immediate connectivity at the point of image assessment. This does **not** imply that the Dominican Republic, or coffee-growing regions generally, are uniformly offline.

### 5.2 Geographic and service-delivery friction

**FACT.** The 2022 World Bank Northern Central America report describes coffee production by geographically dispersed small-scale producers in remote highlands and explicitly calls for stronger agricultural extension, information systems, and technical assistance reaching family farmers.

**INFERENCE.** A local-first observation aid can be useful in workflows where a field actor has a device but immediate expert review or network access is not guaranteed.

### 5.3 Institutional capacity

**FACT.** FAO treats extension and advisory services as an important mechanism for connecting farmers with knowledge, technologies, markets, and services, and promotes digital tools as complements to—rather than substitutes for—human advisory capacity.  
Source: FAO, *Extension and advisory services*  
https://www.fao.org/research-extension-systems/extension-and-advisory-services/

**PROJECT DESIGN.** RoyaCheck keeps the human disposition as the formal decision rather than treating the model output as final.

---

## 6. Strongest non-AI alternatives

The project should be judged against real simpler alternatives.

| Alternative | What it does well | Limitation for this task |
|---|---|---|
| Laminated symptom guide / reference sheet | Cheap, offline, easy to distribute | User still performs all visual interpretation manually |
| Deterministic checklist / decision tree | Structured, auditable, no model risk | Difficult to encode visual texture/pattern variation from an image |
| Structured digital form | Improves record consistency | Does not itself interpret the image |
| Web search / online image reference | Broad information access | Connectivity-dependent and unstructured |
| Messaging/photo review by expert | Human judgment and context | Depends on expert availability and often connectivity |
| Direct extension/plant-clinic review | Strong human baseline | May not be immediately available at the point of observation |

These alternatives remain valid parts of a real system. The AI should not replace them where they are sufficient.

---

## 7. Why compact computer vision adds distinct value

The narrow AI contribution is **visual perception**.

A compact local model can potentially:

- compare a new leaf image against learned visual patterns;
- produce a bounded first-pass proposal;
- identify low-confidence cases;
- abstain rather than force a class;
- operate without a live cloud inference call.

The AI does **not** need to generate agronomic advice, explain treatment chemistry, predict yield, or decide what action a farmer must take.

The surrounding workflow is intentionally simpler:

- human confirmation/correction;
- structured local record;
- deterministic extension summary;
- explicit review/escalation.

**PROJECT DESIGN PRINCIPLE:** AI owns the visual pattern-recognition step; humans own the formal disposition; deterministic software owns the record/summary logic.

---

## 8. Development-value chain

The project’s defensible development logic is:

**coffee livelihoods and crop-health management matter**  
→ **visible symptom recognition is one operational step in plant-health workflows**  
→ **field workflows can face connectivity, device, literacy, service-availability, and institutional constraints**  
→ **a compact offline visual proposal may support the observation step without waiting for a cloud service**  
→ **human confirmation and escalation preserve authority and safety**  
→ **the prototype can test whether that bounded loop works technically and responsibly**

The final arrow is the only one this hackathon prototype can directly demonstrate.

---

## 9. What the prototype can measure

Stage 1 intentionally uses **proximal prototype metrics**, not livelihood outcomes.

A later technical stage can measure whether the system can:

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

## 10. Facts, inferences, project design, and claim ceiling

### FACT

Supported directly by cited evidence:

- coffee supports rural livelihoods, including in the Dominican Republic;
- coffee leaf rust is a material coffee-production problem in Latin America;
- coffee producers can be geographically dispersed and remote;
- technical assistance and extension remain relevant to family-farm systems;
- digital agricultural extension can face connectivity, cost, digital-skills, and institutional barriers.

### INFERENCE

Reasonable but not directly proven by the cited evidence:

- a local image proposal could reduce dependence on immediate connectivity for the observation step;
- intermediary-assisted operation may be safer or easier in some settings;
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
- time savings in real field deployment;
- reduced disease prevalence;
- robustness on Dominican farms;
- expert-equivalent diagnosis;
- replacement of extension officers;
- general coffee-disease diagnosis.

These claims require evidence beyond a hackathon prototype.

---

## 11. Key risks that later stages must preserve

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

Later evaluation must therefore include abstention and out-of-domain controls.

### Automation bias

A confident wrong proposal may be accepted too readily.

Control: the formal human disposition must remain separate from the AI proposal.

### Scope creep

A rust-observation aid can easily drift into generic plant diagnosis or treatment advice.

Control: maintain the narrow rust/no-rust/not-sure observation contract and explicit exclusions.

### Institutional mismatch

A technically functional tool may still fail if the intended review/escalation role does not exist or cannot absorb the workflow.

Control: do not claim deployment readiness without context-specific validation.

---

## 12. Stage 1 falsifiers

The problem framing should be reconsidered if later evidence shows that:

- the selected user already has a simpler, equally accessible tool that performs the same bounded image-assessment task adequately;
- the target workflow has no plausible responsible human review/escalation path;
- field-representative, legally usable data cannot support a credible evaluation;
- the learned visual component cannot add measurable value beyond the strongest non-AI baseline;
- safe abstention/OOD behavior cannot be demonstrated;
- browser-local execution cannot meet the later technical budget.

These are legitimate kill/reduction conditions, not failures to be hidden.

---

## 13. Stage 1 conclusion

The problem is sufficiently grounded to continue:

> Coffee leaf rust is materially relevant to coffee-producing communities; coffee and advisory workflows can operate under real service-delivery and digital constraints; and the image-interpretation step is a plausible place where compact computer vision can add distinct value.

The defensible intervention remains narrow:

> **offline-capable visual observation support + explicit human disposition + structured local record + deterministic escalation-ready summary.**

The development case does **not** depend on claiming that AI improves yield, income, treatment, or extension performance. Those outcomes remain outside the prototype’s evidence ceiling.

**Stage 1 status: READY FOR OWNER REVIEW.**
