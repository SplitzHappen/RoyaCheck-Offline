# Stage 3 — Product Scope and Route Lock

**Stage:** 3  
**Status:** Closed — owner approved (PR #11); owner-directed simplification amended 2026-10-03  
**Sector:** Agriculture  
**Route:** RoyaCheck Offline  
**Controlling case:** `docs/stages/00_rules/ANNEX_B_CASE_CONTRACT.md`  
**Stage 3 authority:** José Antonio remains the sole owner of consequential product decisions.

---

## Controlling owner-directed simplification amendment — 2026-10-03

This amendment is the controlling interpretation wherever it conflicts with the earlier Stage 3 wording below. It narrows implementation assumptions; it does **not** reopen Stages 0–2, change the selected RoyaCheck concept, weaken human authority, change the three-way routing, introduce messaging/institutional integration, or alter the explicit non-solutions.

### A. Development value

RoyaCheck helps determine which suspicious coffee-leaf observations should be surfaced first for qualified human review and which can remain lower-priority records while concern can still be escalated.

The development value is **better allocation of scarce human-review attention**. It is not faster extension access, diagnosis, treatment, yield improvement, or creation of extension capacity.

### B. Device-access invariant — supersedes rigid D3-02 choreography

RoyaCheck is designed for **intermittent, shared or assisted smartphone access**. It does not assume that Noor owns, carries, or can independently use a smartphone continuously. Noor remains the agricultural decision-maker. A household member such as her daughter may assist with camera/navigation when assistance is needed.

The daughter-at-home-on-weekends scenario remains a case-faithful **demo instantiation**, not a mandatory technical operating protocol.

### C. Capture contract — supersedes rigid D3-03 physical choreography

Capture or select a **current image of an eligible coffee leaf** when the household smartphone and any needed assistance are available.

The product does not require:

- re-identification of the originally noticed plant;
- a particular weekend/on-slope session;
- an attached-leaf workflow;
- a backing card/sheet;
- leaf preservation or transport.

The product makes no recommendation to detach a leaf. Exact framing, leaf side/orientation, and any optional experimental capture aid are evidence-conditioned technical/data choices and must not exceed the acquisition evidence.

### D. Capture timing — supersedes rigid D3-04 delay

Capture occurs when a suitable household smartphone and any needed assistance are available. Intermittent access may create delay, but delay itself is not a product requirement.

The model evaluates only the image captured at that time. It makes no claim about the appearance of an earlier observation.

### E. Human review and handoff

D3-05 through D3-10 remain controlling in substance. The in-person/on-device handoff remains user initiated and requires the household smartphone to be physically present at the qualifying review opportunity.

Noor's daughter is not required to be the operator at that encounter. The device may be operated by Noor if able, by a household assistant, or by the reviewer at Noor's request with the screen visible to Noor.

The value is **prepared/prioritized evidence when a qualifying review opportunity occurs**, not acceleration of that opportunity.

### F. Evidence anchor

D3-11 remains unchanged: Bududa / Bugisu / Mount Elgon, Uganda is an **implementation evidence anchor**, not Noor's fictional location.

### G. Lugisu localization — supersedes build-blocking interpretation of D3-12

Lugisu remains the current named prototype localization direction for the Bugisu/Mount Elgon evidence anchor.

A qualified human validator familiar with the relevant Bududa/south-Bugisu variety and orthographic convention is required **before claiming validated/localized usability in Lugisu**.

Human validation is **not a blocker for the technical MVP**. If no qualified validator is already available by the localization cutoff:

- do not spend the competition clock sourcing one solely to satisfy a self-created dependency;
- any Lugisu fixed-string interaction may remain only as an explicitly **unvalidated prototype localization draft**;
- English remains available;
- the submission must explicitly state that localized usability was **not validated**.

Do not imply Noor speaks Lugisu. Do not silently rename Lugisu/Lumasaaba. Any actual named-language change returns to José Antonio.

D3-13's architectural principle remains: **visual inference is independent of UI language, but safe localized usability is not**. No live generative translation is required.

### H. D3-14 wording cleanup

The three action routes remain unchanged.

For `no visible rust → Record and monitor`, any recapture is described as occurring at **a later session when the household smartphone and any needed assistance are available**, not specifically a later weekend-assisted session.

The AI controls prioritization of scarce human attention, not treatment urgency.

### I. Integrated workflow — controlling version

1. Noor has a coffee-leaf concern.
2. RoyaCheck does not assume the smartphone is continuously with her.
3. When the household smartphone and any needed assistance are available, a current eligible coffee-leaf image is captured or selected.
4. Browser-local AI proposes `visible rust`, `no visible rust`, or `not sure`.
5. The proposal maps to the existing action route.
6. Noor explicitly confirms/corrects or requests review.
7. Only the human disposition becomes formal.
8. The structured observation is stored locally.
9. At a qualifying human-review opportunity when the device is present, Noor initiates the review card.
10. Nothing is automatically sent or treated.

The daughter/weekend scenario remains available as a demo example of intermittent assisted use rather than the only valid operating path.

### J. Scope unchanged

D3-15 remains controlling. RoyaCheck does not solve the cause of falling yields, market-price reference/bargaining, farmer-registry creation, extension staffing/capacity, or agronomic treatment selection.

Historical Stage 3 audit files remain historical evidence and are not rewritten.

---

## 1. Purpose

Stage 3 converts the independently verified Annex B / Noor foundation into one precise product route before technical specification.

This record separates:

- **Official case facts** — supplied by the participant brief and controlling case contract.
- **External evidence** — real-world context used only as an implementation anchor, never as Noor's fictional location.
- **Project assumptions** — choices required to make a complete prototype workflow.
- **Owner-accepted decisions** — Stage 3 product-scope choices explicitly approved by José Antonio; they remain subject to the Stage 3 audit/closure gate.

No model, definitive dataset, runtime, threshold, architecture, training, held-out/test access, production implementation, finished UI, deployment, video, or submission decision is made here.

---

## 2. Official case facts that constrain Stage 3

The controlling case establishes that:

- Noor is a 38-year-old smallholder farmer with a two-hectare farm;
- coffee is grown on the upper slope, with maize and beans elsewhere;
- she has belonged to a coffee cooperative for 11 years;
- coffee yields have fallen, but the cause is unknown;
- extension reaches the village only about twice a year at best;
- Noor has her own phone for calls, messages, and mobile money;
- her 16-year-old daughter boards at school in the district town;
- the smartphone belongs to the daughter;
- Noor mainly uses that smartphone on weekends when her daughter is home to set it up and help her;
- there is no household Wi-Fi and mobile data is purchased in 3G bundles;
- Noor is normally on the slope while the phone is at the house;
- Noor speaks a local language at home and a national language when needed;
- the human remains the final authority;
- the product must expose uncertainty/fail-safe behavior;
- the challenge asks for one better agricultural decision, not a general agricultural assistant.

The project may not infer Noor's country, nationality, exact language, reviewer relationship, or institutional integration from the fictional case.

---

## 3. External evidence anchor — owner accepted

### Accepted anchor

**Bududa / Bugisu, Mount Elgon, Uganda**, used strictly as a **real-world implementation evidence anchor**, not as Noor's location.

Why this anchor is coherent:

1. Uganda's Ministry of Agriculture states that Arabica coffee is grown in highland areas on the slopes of Mount Elgon.
2. World Bank agriculture reporting has used coffee farmers in Bududa district on the Mount Elgon ranges as a concrete smallholder example.
3. Uganda's National Curriculum Development Centre published a standardized **Lugisu Orthography (2024)** and describes Lugisu as spoken by the Bagisu, native to Bugisu on the slopes of Mount Elgon.
4. Uganda's 2024 census materials include Lumasaba among the local languages used for census translation.
5. GSMA's 2025 mobile-connectivity evidence reports only **20% rural smartphone ownership in Uganda** in its 2024 consumer survey, reinforcing the decision not to assume farmer-owned continuous smartphone access.
6. Separate GSMA Uganda reporting in 2025 states that population-level 4G coverage is high while mobile-internet use still has a large usage gap, with device affordability, energy reliability, and digital skills among the barriers. This supports an assisted, cached/offline workflow rather than a connectivity-only design.

### Stage 3 source verification note

The anchor facts were rechecked against current primary/authoritative sources before recording owner acceptance and again during audit reconciliation:

- the 2026 Uganda Coffee Manual places Arabica production in highland areas on the slopes of Mount Elgon;
- the World Bank documents coffee farming in Bududa district on the Mount Elgon ranges;
- NCDC's *Lugisu Orthography 2024* states in its preface (PDF p. 6) that Lugisu is spoken by the Bagisu of Bugisu on the slopes of Mount Elgon and that this is the first standardized Lugisu orthography introduced to the Bagisu community;
- the same NCDC document explicitly treats dialectal variation in its appendix (PDF pp. 83–92), comparing Ludadili, Luhalasi, Lufumbo and Lumasaaba forms. It does **not** itself establish which variety should be used for Bududa;
- Uganda's 2024 census report states on PDF p. 5 that the household questionnaire was translated into 20 local languages, including **Lumasaba**;
- GSMA's *State of Mobile Internet Connectivity 2025 — Trends in Mobile Internet Connectivity*, Figure 15 on PDF p. 31, reports 2024 smartphone ownership of **33% urban / 20% rural** in Uganda (GSMA Consumer Survey 2024);
- GSMA's Uganda digital-transformation reporting describes high 4G population coverage alongside a large mobile-internet usage gap and barriers including smartphone affordability and digital skills; any additional barrier used later must be cited directly.

These facts support the **anchor choice and design rationale only**. They do not establish Noor's nationality, location, language, device ownership, or actual network conditions.

The older IICA 2019 Americas source in Stage 1 is retained only as **general coffee-leaf-rust context**. It is not evidence for the Uganda/Bugisu implementation anchor.

### Sources

- Uganda Ministry of Agriculture, Animal Industry and Fisheries, *Coffee Manual* (2026): https://www.agriculture.go.ug/wp-content/uploads/2026/01/coffee_manual.pdf
- World Bank, *Making Farming More Productive and Profitable for Ugandan Farmers* (2018): https://www.worldbank.org/en/country/uganda/publication/making-farming-more-productive-and-profitable-for-ugandan-farmers
- Uganda National Curriculum Development Centre, *Lugisu Orthography 2024*: https://ncdc.go.ug/wp-content/uploads/2025/06/Lugisu-Orthography-2024.6.2.25.Web-File-1.pdf
- Uganda Bureau of Statistics, *National Population and Housing Census 2024 — Final Report, Volume I*: https://statistics.ubos.org/nphc/reports/National-Population-and-Housing-Census-2024-Final-Report-Volume-1-Main.pdf
- GSMA, *The State of Mobile Internet Connectivity 2025 — Trends in Mobile Internet Connectivity*: https://www.gsma.com/somic/wp-content/uploads/2025/09/The-State-of-Mobile-Internet-Connectivity-2025-Trends-in-Mobile-Internet-Connectivity.pdf
- GSMA, *Driving Digital Transformation of the Economy in Uganda* release (2025): https://www.gsma.com/newsroom/press-release/gsma-unveils-latest-report-showing-digital-policy-reforms-could-add-ugx-14-6-trillion-to-ugandas-gdp-connect-4-million-more-citizens-by-2030/
- Uganda Constitution, Article 6 (English and Swahili official-language status): https://ulii.org/akn/ug/act/statute/1995/constitution/eng%402023-12-31/provision/chp_Two__sec_6

### Evidence-bound implication for Stage 4

Stage 4 should choose and record at least one exact common-data figure as an engineering constraint. The strongest current candidate is **20% rural smartphone ownership in Uganda (GSMA Consumer Survey 2024, reported in SOMIC 2025)**, binding the product to an assisted/shared-smartphone workflow rather than assuming a farmer-owned smartphone.

A second useful figure is the gap between Uganda's reported 4G population coverage and actual unique mobile-internet use; this can support the offline/cache and low-digital-skills design rationale. The exact engineering budget remains Stage 4 work.

---

## 4. Owner-accepted Stage 3 decisions

José Antonio explicitly approved D3-01 through D3-15 on 2026-10-03. These are now the controlling Stage 3 product-scope decisions, subject to the audit/closure gate below.

### D3-01 — One better agricultural decision

**Recommendation**

> **Should Noor prioritize this suspicious coffee-leaf observation for human review at the next available review opportunity, or keep it as a lower-priority record to monitor while review remains available if concern persists?**

This is a triage decision for scarce human attention, not a disease-severity, treatment, or yield decision.

**Why:** The visual AI changes the priority assigned to a real next step. A form alone can record an observation; it cannot make the learned visual proposal that changes triage priority. The **strongest simple baseline** is a printed or laminated coffee-rust symptom guide used by Noor and her daughter. RoyaCheck's claimed AI contribution is a consistent image-anchored second opinion that can abstain rather than force a conclusion and can attach that bounded proposal to a structured record. Whether this produces measurable advantage over the symptom-guide baseline is a later evaluation question, not a Stage 3 claim.

**Owner status:** Accepted by José Antonio on 2026-10-03.

### D3-02 — Assisted/weekend user day

**Recommendation**

Noor remains the primary farmer/decision-maker. On a weekend when her daughter is home, **the daughter assists with the smartphone and camera/navigation while Noor identifies the plant/leaf of concern and makes the human disposition**.

**Why:** This preserves the case's screen-literacy and device-ownership facts without turning the daughter into the agricultural authority.

**Owner status:** Accepted by José Antonio on 2026-10-03.

### D3-03 — Physical capture workflow

**Recommendation**

Use **weekend assisted capture on the slope without detaching the leaf**. Noor returns to the coffee plant/area of concern and her daughter accompanies her with the smartphone to photograph a currently suspicious leaf **on the plant**. Where practical, use an ordinary plain backing card or sheet behind the leaf to reduce background clutter without turning the workflow into a laboratory setup.

Do not require Noor to detach, transport, or preserve a leaf.

**Why:** This avoids inventing a leaf-storage protocol or agronomic detachment instruction while reducing the acquisition mismatch risk identified in the challenge brief. It also preserves an honest evidence boundary: the prototype must not claim ordinary-field robustness merely because a controlled/backed capture works.

**Failure rule:** exact leaf-side/orientation guidance remains for Stage 4 after data properties are verified. If later evidence cannot support this on-plant assisted capture credibly, reopen the workflow rather than silently changing it.

**Owner status:** Accepted by José Antonio on 2026-10-03.

### D3-04 — Observation-to-capture delay

**Recommendation**

Lock the workflow as **capture at the next available weekend assisted session**, potentially several days after the initial concern. The model evaluates the **current leaf photographed at capture time**, not a claim about the appearance of the originally noticed leaf days earlier.

**Why:** This is case-faithful and avoids pretending the app can observe the crop when the smartphone is unavailable.

**Owner status:** Accepted by José Antonio on 2026-10-03.

### D3-05 — Role of Noor's own phone

**Recommendation**

Noor's own phone has **no required role in the RoyaCheck core loop**. She may continue using it for ordinary calls/messages/mobile money as stated in the case, but the prototype does not transfer records to it or depend on it.

**Why:** This avoids a brittle cross-device workflow and preserves the distinction between Noor's phone and her daughter's smartphone.

**Owner status:** Accepted by José Antonio on 2026-10-03.

### D3-06 — Human reviewer

**Recommendation**

The prototype reviewer is an **extension officer**. The case names an extension officer/extension service as the relevant expert-support role, but it does **not** state that the officer reviews RoyaCheck records; using that officer as the RoyaCheck reviewer is therefore an explicit **project assumption grounded in the case-supported role**.

The cooperative remains context, not an assumed reviewer.

**Why:** Choosing a cooperative technician would add an unsupported institutional fact. A later deployment could use other qualified reviewers, but the prototype story should not invent one.

**Owner status:** Accepted by José Antonio on 2026-10-03.

### D3-07 — Handoff channel

**Recommendation**

Primary MVP handoff: **user-initiated, in-person on-device review card at the next qualifying extension encounter when the household smartphone is physically present**.

This co-presence condition is an explicit **project assumption**, not a case fact. Noor's daughter may operate the smartphone when present; alternatively, the extension officer may operate the device at Noor's request with the screen visible to Noor. The project does not assume weekday smartphone availability. Given the case's extension cadence and device access, a **Review first** observation may still wait until the next qualifying encounter.

No automatic messaging, WhatsApp integration, cloud submission, registry lookup, or institutional API.

**Why:** This remains fully usable offline and does not assume the extension officer has a reachable messaging endpoint. The claimed value is arriving at the qualifying encounter with a structured, human-confirmed and prioritized observation—not accelerating extension-service availability.

**Owner status:** Accepted by José Antonio on 2026-10-03.

### D3-08 — Whether the image travels

**Recommendation**

**No image export/transmission in the MVP.** The image remains local.

At an in-person review, Noor may choose to reveal the image **on the device**; the file is not sent to the reviewer.

**Why:** This materially reduces privacy, connectivity, and integration risk while preserving the review value of the image.

**Owner status:** Accepted by José Antonio on 2026-10-03.

### D3-09 — Consent rule

**Recommendation**

The review card defaults to text/structured fields without displaying the image.

Retaining the image with the saved observation is an explicit **opt-in at save time**, consistent with the later technical default of not persisting raw images automatically. Both image-retention consent and later image-display consent belong to **Noor**, with her daughter's assistance where needed; the daughter does not consent on Noor's behalf.

If Noor does not opt in to retain the image, the later review card is text-only. If an image is retained, showing it to the reviewer requires a separate, explicit **“show photo to reviewer”** confirmation by Noor.

Deleting the observation must delete the retained image if one exists. Shared-device visibility mechanics remain for Stage 4.

**Owner status:** Accepted by José Antonio on 2026-10-03.

### D3-10 — Reviewer-visible payload

**Recommendation**

The reviewer sees only:

- crop: coffee;
- capture date;
- AI proposal, explicitly labeled as an AI proposal;
- uncertainty / `not sure` state where applicable;
- human disposition;
- action route (`Review first` / `Retake or request review` / `Record and monitor`);
- optional short farmer note;
- optional on-device image, only after explicit consent.

Do **not** include geolocation, inferred diagnosis, treatment recommendation, yield claim, price claim, or personal profile data.

**Owner status:** Accepted by José Antonio on 2026-10-03.

### D3-11 — Evidence anchor

**Recommendation**

Adopt **Bududa / Bugisu, Mount Elgon, Uganda** as the single real-world implementation evidence anchor.

It must always be labeled as an anchor and never presented as Noor's location.

**Owner status:** Accepted by José Antonio on 2026-10-03.

### D3-12 — Prototype local-language interaction

**Recommendation**

Use **Lugisu** as the named local-language interaction for the Bugisu / Mount Elgon anchor context, implemented as a **small fixed-string text language pack for the critical workflow**, with English available as a secondary judge-facing/support language.

The localization record must explicitly acknowledge that the NCDC 2024 orthography recognizes regional Lugisu/Lumasaaba variation rather than treating those labels or forms as interchangeable. NCDC's preface ties Lugisu to the Bagisu of Bugisu / Mount Elgon, while its dialect appendix compares Ludadili, Luhalasi, Lufumbo and Lumasaaba forms; the document does not by itself establish the appropriate Bududa variety.

Final critical workflow strings must therefore be independently validated by a **human reader familiar with the Bududa / south-Bugisu target variety and the orthographic convention actually used**. Stage 3 locks Lugisu as the current public language choice, not the translations. If that human validation shows that the public label or orthography should instead be presented as **Lumasaaba** for the chosen anchor, the naming change must return to José Antonio for explicit approval before finalization.

**Why:** The NCDC source directly supports Lugisu as a real local language of the Bugisu / Mount Elgon context and provides a standardized writing reference while also documenting dialectal variation. This is materially stronger than choosing a generic national language merely because it is easier, but it does not remove the need for target-variety human validation.

**Owner status:** Accepted by José Antonio on 2026-10-03.

### D3-13 — Less-supported-language answer

**Recommendation**

Pre-commit this answer:

> **The visual inference does not depend on the interface language, but safe use does. RoyaCheck uses a small fixed, human-validated language pack rather than live machine translation. For a less-supported language, the model could still process the image, but the deployment should not claim localized usability until the critical strings are translated and human-validated. The icon-led workflow can reduce—not eliminate—that language barrier.**

No generative translation or voice system is required.

**Owner status:** Accepted by José Antonio on 2026-10-03.

### D3-14 — Final label-to-action routing

**Owner-accepted routing**

RoyaCheck uses **action-based routing rather than numerical priority or severity labels**:

- **`visible rust` → Review first.** RoyaCheck **proposes that the image shows visible evidence consistent with coffee leaf rust**. The result is not a confirmed diagnosis. The observation should be prioritized for human review at the next available qualifying review opportunity.
- **`not sure` → Retake or request review.** If the uncertainty is attributable to a correctable image-quality problem, the user should first retake the image where possible. If an acceptable image remains uncertain, appears out of distribution, or contains an unsupported condition, RoyaCheck makes no rust conclusion and the observation should be routed to human review.
- **`no visible rust` → Record and monitor.** RoyaCheck did not identify visible evidence consistent with rust in the submitted image. This must never be presented as “healthy,” “all clear,” or “no disease.” **Monitor** means Noor's ordinary continued observation of the plant, with the option to recapture at a later weekend-assisted session; it does not imply an app reminder, automated surveillance, or scheduling feature. Human review remains clearly available if Noor remains concerned or the condition persists.

The three routes therefore lead to materially different next actions without treating the AI output as agronomic severity, treatment urgency, diagnosis, or expected-loss estimation.

The routing controls **scarce human-review attention**, not farm treatment. Only the human disposition becomes the formal observation.

**Owner status:** Accepted by José Antonio on 2026-10-03.

### D3-15 — Explicitly unsolved branches

**Recommendation**

Lock as explicit non-solutions:

- cause of Noor's falling yields;
- market-price reference/bargaining;
- farmer-registry creation;
- extension staffing/capacity;
- agronomic treatment selection.

These should remain visible in judge-facing limitations rather than disappearing from the story.

**Owner status:** Accepted by José Antonio on 2026-10-03.

---

## 5. Owner-approved organizer value statement

The organizer's required Stage 3 value-statement structure is now instantiated as:

> **Because of this tool, Noor will bring a prioritized, human-confirmed coffee-leaf observation to the next qualifying extension encounter when the household smartphone is available that she would otherwise bring without the same structured, uncertainty-labelled visual triage; we know because the prototype will report pre-registered evidence on visual routing/abstention, human-authority correctness, offline completion, and review-card generation.**

This is a **prototype-level development-value claim**. It does not claim faster extension service, better treatment, improved yield, increased income, or real-world farm impact.

Before final submission, the **“we know because”** clause must be replaced or supplemented with the actual measured evidence produced by the authorized later evaluation stages. Until those measurements exist, this sentence is an owner-approved claim **structure and ceiling**, not evidence that the outcomes have already been demonstrated.

**Owner status:** Accepted by José Antonio on 2026-10-03 as part of the Stage 3 audit reconciliation.

---

## 6. Strongest integrated workflow

1. During the week, Noor notices a coffee plant/leaf that concerns her.
2. The app is not assumed to be present.
3. At the next weekend assisted session, Noor returns to the plant/area with her daughter.
4. The daughter assists with the smartphone; Noor identifies the leaf and remains the farmer decision-maker.
5. A current on-plant image is captured.
6. RoyaCheck produces one bounded proposal: `visible rust`, `no visible rust`, or `not sure`.
7. The interface maps that proposal to the owner-approved action route—review first, retake/request review, or record/monitor—not to treatment.
8. Noor explicitly confirms/corrects or requests review; only the human disposition becomes formal.
9. The observation is stored locally.
10. At the next **qualifying extension encounter when the household smartphone is physically present**, Noor initiates an on-device review card; the device is operated by Noor's daughter when present or by the extension officer at Noor's request with the screen visible to Noor.
11. The reviewer sees the bounded record; the local image is shown only if Noor explicitly chooses to reveal it.
12. Nothing is automatically sent and no institution is implied to be integrated.

---

## 7. Why this route is recommended

This route is narrow enough for a solo hackathon build but still answers the development problem rather than merely demonstrating image classification.

It makes the AI's role specific:

> **learned visual evidence changes how scarce human-review attention is prioritized.**

It also keeps the claims honest:

- the AI does not diagnose Noor's whole farm;
- it does not explain falling yields;
- it does not prescribe treatment;
- it does not create extension capacity;
- it does not solve the price branch;
- it does not claim that Uganda is Noor's country;
- it does not require continuous connectivity or farmer smartphone ownership.

---

## 8. Residual risks to carry into Stage 4

Because the owner has accepted this package, the following unresolved technical/evidence questions are explicitly carried forward to Stage 4:

- whether available evidence can support the recommended on-plant field-photo workflow;
- exact image acquisition guidance without overstating field robustness, including evaluation of both with-backing-card and without-backing-card conditions where the product permits both;
- an ergonomically feasible leaf-side/orientation rule for assisted capture of an attached leaf, after data properties are verified;
- explicit depiction of the qualifying extension-handoff co-presence condition rather than assumed weekday smartphone availability;
- the minimum Lugisu string set and an independent human validation route for the targeted Bududa / south-Bugisu variety and orthographic convention;
- shared-device privacy and local deletion mechanics;
- exact data/model/runtime choices;
- offline-cache behavior and bundle-size budget;
- abstention/OOD rules;
- evaluation metrics and acceptance thresholds;
- license/provenance constraints.

None of those are decided by Stage 3.

---

## 9. Stage 3 audit and closure gate

José Antonio explicitly approved D3-01 through D3-15 on 2026-10-03, including the revised action-based D3-14 routing and the narrow ROADMAP terminology correction.

The substantive owner-decision gate is complete. Claude's independent Stage 3 audit returned **PASS WITH MAJOR REPAIRS**; the authorized repairs were reconciled, and Claude's narrow confirmation verified all 10 requested repairs with no new blocker or major finding. Its sole new minor finding, N1, was a record-traceability issue and is recorded in the reconciliation with explicit owner acknowledgement. Claude stated that no further Stage 3 audit is required before closure.

José Antonio explicitly authorized Stage 3 closure and the guarded merge sequence for PR #11 on 2026-10-03.

**Stage 3 status: Closed — owner approved (PR #11).**

Stage 4 remains unauthorized until PR #11 is successfully merged and a separate Stage 4 owner-control authorization is granted.
