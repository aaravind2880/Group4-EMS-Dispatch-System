# Sprint 1 Backlog — AI Triage Module
**Sprint:** 1 of 3  
**Weeks:** 4–5 (Weeks of 17 Mar – 28 Mar 2026, mapped to project weeks)  
**Sprint Goal:** Deliver a functional AI triage module achieving ≥85% AMI detection sensitivity, integrated with the dispatcher triage interface and IMS+ override logging.  
**RUP Phase:** Construction — Artefact Development  
**Facilitator:** Lachlan Hincks  

---

## Sprint Planning Notes
Sprint planning session held at start of Week 4. Backlog items confirmed, story points agreed via Planning Poker. DT Empathise–Define cycle confirmed for this sprint to validate UI wireframes against real dispatcher workflow.

---

## Sprint Backlog

| ID | User Story | Description | Assignee | Points | Status |
|----|-----------|-------------|----------|--------|--------|
| BL-01 | US-03 | Procure and pre-process retrospective AMI clinical dataset under NSW Health data governance approval | Aditya Aravind | 5 | ✅ Done |
| BL-02 | US-03 | Develop and train AI AMI classification model to ≥85% sensitivity threshold | Aditya Aravind | 8 | ✅ Done |
| BL-03 | US-04 | Design and implement branching symptom questioning script with adaptive logic | Aarav Khemani | 5 | ✅ Done |
| BL-04 | US-01 | Build AI triage recommendation panel — classification, confidence score and symptom summary display | Aditya Aravind | 8 | ✅ Done |
| BL-05 | US-02 | Implement override logging module with structured dropdown and IMS+ auto-log integration | Aarav Khemani | 5 | ✅ Done |
| BL-06 | US-12 | Sprint 1 security review — data encryption, privacy checklist, access controls | Lachlan Hincks | 3 | ✅ Done |

**Total Sprint Points:** 34

---

## Daily Check-ins (Summary)

| Day | Update |
|-----|--------|
| Day 1 | Sprint planning complete. Dataset procurement request submitted to NNSWLHD IS Dept |
| Day 3 | Dataset received and pre-processing underway (AA). Symptom script branching logic drafted (AK) |
| Day 5 | AI model training commenced. Initial sensitivity at 79% — retraining required |
| Day 7 | AI model retrained — sensitivity improved to 84.5%. Additional retraining cycle initiated |
| Day 9 | AI model achieved 87.3% sensitivity ✅. Clinical specialist validation scheduled |
| Day 10 | Sprint review completed. All BL items Done. One issue raised (ISS-01) |

---

## Sprint Review Outcomes
- AI model achieved **87.3% AMI sensitivity** — exceeds 85% threshold ✅
- Clinical specialist confirmed model meets NSQHS Standard 1 clinical governance ✅
- **ISS-01 raised:** AI panel placement causes excessive eye movement — to be addressed in Sprint 2
- Override logging confirmed auto-logging to IMS+ ✅
- AES-256 encryption confirmed; Privacy Impact Assessment initiated ✅

---

## Sprint Retrospective

**What went well:**
- AI model training completed ahead of schedule
- Clinical dataset processing was efficient once approved

**What to improve:**
- Dispatcher wireframe review came too late (end of sprint, not mid-sprint)

**Action for Sprint 2:**
- Dispatcher EMS User Representative to attend **mid-sprint** wireframe review, not just sprint review

---

## Issues Log

| ID | Description | Severity | Owner | Status |
|----|-------------|----------|-------|--------|
| ISS-01 | AI panel placement caused excessive eye movement in dispatcher simulation | Medium | Aditya Aravind | ✅ Resolved in Sprint 2 — panel relocated to top-centre |
| ISS-02 | Retrospective dataset had 3% missing values in symptom onset time field | Low | Aditya Aravind | ✅ Resolved — imputed using clinical median, validated by clinical specialist |

---

## DT Activities This Sprint

| Stage | Activity | Output |
|-------|----------|--------|
| Empathise | Dispatcher empathy map validated against initial triage UI wireframes | Revised empathy insights |
| Define | Triage interface POV refined from dispatcher feedback | Updated POV statement |
| Ideate | Override reason dropdown brainstormed — rationalised to 5 structured options | Final dropdown list |
| Prototype | WF-01 (Iteration 1) and WF-02 presented at sprint review | Wireframes v1 |
| Test | Dispatcher walked through WF-01 in simulated call scenario | ISS-01 identified |
