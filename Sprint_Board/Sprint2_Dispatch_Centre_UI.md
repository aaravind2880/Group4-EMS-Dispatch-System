# Sprint 2 Backlog — Dispatch Centre UI
**Sprint:** 2 of 3  
**Weeks:** 5–6 (project weeks)  
**Sprint Goal:** Deliver the complete Dispatch Centre UI including refined triage interface, in-vehicle paramedic terminal dispatch notification, post-callout feedback form, and Dispatch Centre Manager KPI dashboard.  
**RUP Phase:** Construction — continued  
**Facilitator:** Lachlan Hincks  

---

## Sprint Planning Notes
Sprint 2 planning held at close of Sprint 1 review. ISS-01 resolution (AI panel relocation) carried as first priority item into Sprint 2 UI build. Mid-sprint wireframe review scheduled for Day 5 with dispatcher EMS User Representative — lesson applied from Sprint 1 retrospective.

---

## Sprint Backlog

| ID | User Story | Description | Assignee | Points | Status |
|----|-----------|-------------|----------|--------|--------|
| BL-07 | US-05 | Build single-action dispatch button with AI classification payload attached to notification | Aditya Aravind | 8 | ✅ Done |
| BL-08 | US-06 | Develop in-vehicle terminal dispatch notification view with minimum data set display | Aarav Khemani | 5 | ✅ Done |
| BL-09 | US-09 | Build post-callout outcome form on in-vehicle terminal with AI accuracy rating fields | Aarav Khemani | 5 | ✅ Done |
| BL-10 | US-10 | Develop Dispatch Centre Manager real-time KPI dashboard | Aditya Aravind | 5 | ✅ Done |
| BL-11 | US-14 | Build in-screen AI confidence score reference guide accessible during live call | Aarav Khemani | 3 | ✅ Done |

**Total Sprint Points:** 26

---

## Daily Check-ins (Summary)

| Day | Update |
|-----|--------|
| Day 1 | Sprint 2 planning complete. WF-01 Iteration 2 design commenced with ISS-01 fix |
| Day 3 | Dispatch button (BL-07) logic drafted. In-vehicle terminal layout started (BL-08) |
| Day 5 | **Mid-sprint wireframe review with dispatcher** — feedback captured, layout adjustments made ✅ |
| Day 7 | KPI dashboard (BL-10) first build complete. Post-callout form (BL-09) built |
| Day 8 | ISS-03 identified — in-vehicle notification exceeded 30s in 2/10 tests |
| Day 9 | ISS-03 resolved — network timeout reconfigured. All BL items Done |
| Day 10 | Sprint review completed. All items accepted. ISS-04 raised (KPI label clarity) |

---

## Sprint Review Outcomes
- WF-01 Iteration 2 accepted — ISS-01 resolved ✅
- In-vehicle terminal minimum data set approved by paramedic EMS User Representative ✅
- Post-callout feedback form routes to IS team for model retraining ✅
- KPI dashboard validated — refresh rate and metric set confirmed by Dispatch Centre Manager ✅
- Confidence guide approved by clinical specialist ✅
- **ISS-03 raised and resolved:** notification delivery exceeded 30s target in 2 tests — timeout adjusted ✅
- **ISS-04 raised:** KPI metric labels unclear — revised with plain-language descriptions ✅

---

## Sprint Retrospective

**What went well:**
- Mid-sprint wireframe review significantly improved UI quality before sprint review
- All BL items delivered within sprint — no spillover

**What to improve:**
- In-vehicle terminal network connectivity assumptions need real-world testing at rural NNSWLHD sites

**Action for Sprint 3:**
- IS Developers to conduct connectivity testing at **Urbenville and Bonalbo** sites during integration sprint

---

## Issues Log

| ID | Description | Severity | Owner | Status |
|----|-------------|----------|-------|--------|
| ISS-03 | In-vehicle terminal dispatch notification exceeded 30s delivery target in 2/10 tests | Medium | Aarav Khemani | ✅ Resolved — timeout configuration adjusted |
| ISS-04 | KPI dashboard metric labels unclear for non-technical manager | Low | Aditya Aravind | ✅ Resolved — labels revised with plain-language descriptions and trend indicators |

---

## DT Activities This Sprint

| Stage | Activity | Output |
|-------|----------|--------|
| Empathise | Paramedic EMS User Representative interviewed on in-vehicle terminal usability | Revised minimum data set requirements |
| Define | Minimum data set for dispatch notification defined and agreed | Final data set specification |
| Ideate | Mid-sprint wireframe review with dispatcher — layout feedback incorporated | WF-01 Iteration 2 design |
| Prototype | WF-01 (It.2), WF-03 (It.1), WF-05 (It.1) presented at sprint review | Three wireframes updated |
| Test | Dispatcher + paramedic walked through full dispatch workflow simulation | ISS-03 and ISS-04 surfaced |
