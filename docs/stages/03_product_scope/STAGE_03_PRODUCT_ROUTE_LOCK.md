# Stage 3 — Product Scope and Route Lock

**Stage:** 3  
**Status:** In progress — recommendations awaiting owner approval  
**Sector:** Agriculture  
**Route:** RoyaCheck Offline  
**Controlling case:** `docs/stages/00_rules/ANNEX_B_CASE_CONTRACT.md`  
**Stage 3 authority:** José Antonio remains the sole owner of consequential product decisions.

---

## 1. Purpose

Stage 3 converts the independently verified Annex B / Noor foundation into one precise product route before technical specification.

This record separates:

- **Official case facts** — supplied by the participant brief and controlling case contract.
- **External evidence** — real-world context used only as an implementation anchor, never as Noor's fictional location.
- **Project assumptions** — choices required to make a complete prototype workflow.
- **Recommendations** — builder proposals that remain unapproved until the owner explicitly accepts them.

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

## 3. External evidence anchor — recommendation

### Recommended anchor

**Bududa / Bugisu, Mount Elgon, Uganda**, used strictly as a **real-world implementation evidence anchor**, not as Noor's location.

Why this anchor is coherent:

1. Uganda's Ministry of Agriculture states that Arabica coffee is grown in highland areas on the slopes of Mount Elgon.
2. World Bank agriculture reporting has used coffee farmers in Bududa district on the Mount Elgon ranges as a concrete smallholder example.
3. Uganda's National Curriculum Development Centre published a standardized **Lugisu Orthography (2024)** and describes Lugisu as spoken by the Bagisu, native to Bugisu on the slopes of Mount Elgon.
4. Uganda's 2024 census materials include Lumasaba among the local languages used for census translation.
5. GSMA's 2025 mobile-connectivity evidence reports only **20% rural smartphone ownership in Uganda** in its 2024 consumer survey, reinforcing the decision not to assume farmer-owned continuous smartphone access.
6. Separate GSMA Uganda reporting in 2025 states that population-level 4G coverage is high while mobile-internet use still has a large usage gap, with device affordability, energy reliability, and digital skills among the barriers. This supports an assisted, cached/offline workflow rather than a connectivity-only design.

### Sources

- Uganda Ministry of Agriculture, Animal Industry and Fisheries, *Coffee Manual* (2026): https://www.agriculture.go.ug/wp-content/uploads/2026/01/coffee_manual.pdf
- World Bank, *Making Farming More Productive and Profitable for Ugandan Farmers* (2018): https://www.worldbank.org/en/country/uganda/publication/making-farming-more-productive-and-profitable-for-ugandan-farmers
- Uganda National Curriculum Development Centre, *Lugisu Orthography 2024*: https://ncdc.go.ug/wp-content/uploads/2025/06/Lugisu-Orthography-2024.6.2.25.Web-File-1.pdf
- Uganda Bureau of Statistics, *National Population and Housing Census 2024 — Final Report, Volume I*: https://statistics.ubos.org/nphc/reports/National-Population-and-Housing-Census-2024-Final-Report-Volume-1-Main.pdf
- GSMA, *The State of Mobile Internet Connectivity 2025 — Trends in Mobile Internet Connectivity*: https://www.gsma.com/somic/wp-content/uploads/2025/09/The-State-of-Mobile-Internet-Connectivity-2025-Trends-in-Mobile-Internet-Connectivity.pdf
- GSMA, *Driving Digital Transformation of the Economy in Uganda* release (2025): https://www.gsma.com/newsroom/press-release/gsma-unveils-latest-report-showing-digital-policy-reforms-could-add-ugx-14-6-trillion-to-ugandas-gdp-connecting-4-million-more-citizens-by-2030/
- Uganda Constitution, Article 6 (English and Swahili official-language status): https://ulii.org/akn/ug/act/statute/1995/constitution/eng%402023-12-31/provision/chp_Two__sec_6

### Evidence-bound implication for Stage 4

Stage 4 should choose and record at least one exact common-data figure as an engineering constraint. The strongest current candidate is **20% rural smartphone ownership in Uganda (GSMA Consumer Survey 2024, reported in SOMIC 2025)**, binding the product to an assisted/shared-smartphone workflow rather than assuming a farmer-owned smartphone.

A second useful figure is the gap between Uganda's reported 4G population coverage and actual unique mobile-internet use; this can support the offline/cache and low-digital-skills design rationale. The exact engineering budget remains Stage 4 work.

---

## 4. Recommended owner decisions

Every item below is **PROPOSED**, not accepted.

### D3-01 — One better agricultural decision

**Recommendation**

> **Should Noor prioritize this suspicious coffee-leaf observation for human review at the next available review opportunity, or keep it as a lower-priority record to monitor while review remains available if concern persists?**

This is a triage decision for scarce human attention, not a disease-severity, treatment, or yield decision.

**Why:** The visual AI changes the priority assigned to a real next step. A form alone can record an observation; it cannot make the learned visual proposal that changes triage priority.

**Owner status:** Proposed.

### D3-02 — Assisted/weekend user day

**Recommendation**

Noor remains the primary farmer/decision-maker. On a weekend when her daughter is home, **the daughter assists with the smartphone and camera/navigation while Noor identifies the plant/leaf of concern and makes the human disposition**.

**Why:** This preserves the case's screen-literacy and device-ownership facts without turning the daughter into the agricultural authority.

**Owner status:** Proposed.

### D3-03 — Physical capture workflow

**Recommendation**

Use **weekend field capture on the slope**. Noor returns to the coffee plant/area of concern and her daughter accompanies her with the smartphone to photograph a currently suspicious leaf **on the plant**.

Do not require Noor to detach or preserve a leaf.

**Why:** This avoids inventing a leaf-storage protocol and avoids making an agronomic instruction about detachment. It also makes the domain-transfer requirement honest: the prototype must cope with, or explicitly fail on, ordinary field-photo conditions rather than silently assuming a white-background laboratory image.

**Failure rule:** if later evidence cannot support field-photo behavior credibly, reduce or change the claim rather than silently changing the user workflow.

**Owner status:** Proposed.

### D3-04 — Observation-to-capture delay

**Recommendation**

Lock the workflow as **capture at the next available weekend assisted session**, potentially several days after the initial concern. The model evaluates the **current leaf photographed at capture time**, not a claim about the appearance of the originally noticed leaf days earlier.

**Why:** This is case-faithful and avoids pretending the app can observe the crop when the smartphone is unavailable.

**Owner status:** Proposed.

### D3-05 — Role of Noor's own phone

**Recommendation**

Noor's own phone has **no required role in the RoyaCheck core loop**. She may continue using it for ordinary calls/messages/mobile money as stated in the case, but the prototype does not transfer records to it or depend on it.

**Why:** This avoids a brittle cross-device workflow and preserves the distinction between Noor's phone and her daughter's smartphone.

**Owner status:** Proposed.

### D3-06 — Human reviewer

**Recommendation**

The reviewer is an **extension officer**, because this is the human-review role actually named by the case.

The cooperative remains context, not an assumed reviewer.

**Why:** Choosing a cooperative technician would add an unsupported institutional fact. A later deployment could use other qualified reviewers, but the prototype story should not invent one.

**Owner status:** Proposed.

### D3-07 — Handoff channel

**Recommendation**

Primary MVP handoff: **user-initiated, in-person on-device review card at the next available extension encounter**.

No automatic messaging, WhatsApp integration, cloud submission, registry lookup, or institutional API.

**Why:** This remains fully usable offline and does not assume the extension officer has a reachable messaging endpoint.

**Owner status:** Proposed.

### D3-08 — Whether the image travels

**Recommendation**

**No image export/transmission in the MVP.** The image remains local.

At an in-person review, Noor may choose to reveal the image **on the device**; the file is not sent to the reviewer.

**Why:** This materially reduces privacy, connectivity, and integration risk while preserving the review value of the image.

**Owner status:** Proposed.

### D3-09 — Consent rule

**Recommendation**

The review card defaults to text/structured fields without displaying the image. Showing the locally retained image to a reviewer requires a separate, explicit **“show photo to reviewer”** confirmation by Noor/the assisted user.

Deleting the observation must delete the retained image if one exists.

**Owner status:** Proposed.

### D3-10 — Reviewer-visible payload

**Recommendation**

The reviewer sees only:

- crop: coffee;
- capture date;
- AI proposal, explicitly labeled as an AI proposal;
- uncertainty / `not sure` state where applicable;
- human disposition;
- review-priority route;
- optional short farmer note;
- optional on-device image, only after explicit consent.

Do **not** include geolocation, inferred diagnosis, treatment recommendation, yield claim, price claim, or personal profile data.

**Owner status:** Proposed.

### D3-11 — Evidence anchor

**Recommendation**

Adopt **Bududa / Bugisu, Mount Elgon, Uganda** as the single real-world implementation evidence anchor.

It must always be labeled as an anchor and never presented as Noor's location.

**Owner status:** Proposed.

### D3-12 — Prototype local-language interaction

**Recommendation**

Use **Lugisu** as the named local-language interaction for the anchor context, implemented as a **small fixed-string text language pack for the critical workflow**, with English available as a secondary judge-facing/support language.

The Lugisu strings must be human-verified against the standardized orthography before final submission; Stage 3 locks the language, not the translations.

**Why:** The NCDC source directly connects Lugisu to Bugisu / Mount Elgon and provides a modern standardized orthography. This is materially stronger than choosing a generic national language merely because it is easier.

**Owner status:** Proposed.

### D3-13 — Less-supported-language answer

**Recommendation**

Pre-commit this answer:

> **The visual inference does not depend on the interface language, but safe use does. RoyaCheck uses a small fixed, human-validated language pack rather than live machine translation. For a less-supported language, the model could still process the image, but the deployment should not claim localized usability until the critical strings are translated and human-validated. The icon-led workflow can reduce—not eliminate—that language barrier.**

No generative translation or voice system is required.

**Owner status:** Proposed.

### D3-14 — Final label-to-action routing

**Recommendation**

Use a three-level **review-priority** routing:

- **visible rust → Priority 1: review first at the next available human-review opportunity**;
- **not sure → Priority 2: human review needed before drawing a rust conclusion; if the cause is image quality, retake first where possible**;
- **no visible rust → Priority 3: routine record/monitor; human review remains available and prominent if Noor remains concerned**.

The priority numbers are **workflow triage only**. They are not treatment urgency, agronomic severity, or a claim about likely yield loss.

**Why:** This satisfies the independent-audit constraint that the three labels not collapse into the same practical action while keeping review available after `no visible rust`.

**Owner status:** Proposed.

### D3-15 — Explicitly unsolved branches

**Recommendation**

Lock as explicit non-solutions:

- cause of Noor's falling yields;
- market-price reference/bargaining;
- farmer-registry creation;
- extension staffing/capacity;
- agronomic treatment selection.

These should remain visible in judge-facing limitations rather than disappearing from the story.

**Owner status:** Proposed.

---

## 5. Strongest integrated workflow if the owner accepts the recommendations

1. During the week, Noor notices a coffee plant/leaf that concerns her.
2. The app is not assumed to be present.
3. At the next weekend assisted session, Noor returns to the plant/area with her daughter.
4. The daughter assists with the smartphone; Noor identifies the leaf and remains the farmer decision-maker.
5. A current on-plant image is captured.
6. RoyaCheck produces one bounded proposal: `visible rust`, `no visible rust`, or `not sure`.
7. The interface maps that proposal to a review-priority route, not to treatment.
8. Noor explicitly confirms/corrects or requests review; only the human disposition becomes formal.
9. The observation is stored locally.
10. At the next extension encounter, Noor initiates an on-device review card.
11. The reviewer sees the bounded record; the local image is shown only if Noor explicitly chooses to reveal it.
12. Nothing is automatically sent and no institution is implied to be integrated.

---

## 6. Why this route is recommended

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

## 7. Residual risks to carry into Stage 4

If the owner accepts this package, Stage 4 must still test/specify:

- whether available evidence can support the recommended on-plant field-photo workflow;
- exact image acquisition guidance without overstating field robustness;
- the minimum Lugisu string set and independent human validation route;
- shared-device privacy and local deletion mechanics;
- exact data/model/runtime choices;
- offline-cache behavior and bundle-size budget;
- abstention/OOD rules;
- evaluation metrics and acceptance thresholds;
- license/provenance constraints.

None of those are decided by Stage 3.

---

## 8. Stage 3 closure gate

Stage 3 may close only after José Antonio explicitly approves, rejects, or modifies D3-01 through D3-15.

Until then:

**Stage 3 status: In progress — recommendations awaiting owner approval.**
