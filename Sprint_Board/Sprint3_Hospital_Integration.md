# Sprint 3 Backlog — Hospital Integration (×12 NNSWLHD Facilities)
**Sprint:** 3 of 3  
**Weeks:** 6–7 (project weeks)  
**Sprint Goal:** Establish and validate API connectivity across all 12 NNSWLHD regional hospitals, deliver the hospital pre-notification module with ED acknowledgement receipt, implement en-route dispatcher update push notifications, and deploy the automated false negative rate alert.  
**RUP Phase:** Transition — Refinement and Finalisation  
**Facilitator:** Lachlan Hincks  

---

## Sprint Planning Notes
Sprint 3 is the most geographically distributed integration challenge. Rural site connectivity (Urbenville and Bonalbo) explicitly risk-provisioned in Business Case ($4,750 contingency). LH prepared site-specific testing plan ahead of sprint commencement to avoid delays. ED nurse representatives at Casino and Grafton hospitals contacted for pre-notification payload input.

---

## Sprint Backlog

| ID | User Story | Description | Assignee | Points | Status |
|----|-----------|-------------|----------|--------|--------|
| BL-12 | US-07 | Establish API connections to all 12 NNSWLHD hospital systems and run integration tests | Aditya Aravind | 13 | ✅ Done |
| BL-13 | US-08 | Build real-time hospital pre-notification module with ED acknowledgement receipt | Aarav Khemani | 8 | ✅ Done |
| BL-14 | US-11 | Implement en-route dispatcher update push notification to in-vehicle terminal | Aditya Aravind | 5 | ✅ Done |
| BL-15 | US-13 | Build automated false negative rate alert with IMS+ logging and email notification | Aarav Khemani | 3 | ✅ Done |

**Total Sprint Points:** 29

---

## Daily Check-ins (Summary)

| Day | Update |
|-----|--------|
| Day 1 | Sprint 3 planning complete. API connection framework established for metro sites |
| Day 2 | 8 of 12 hospital API connections established and passing initial tests |
| Day 4 | **ISS-05 raised:** Urbenville and Bonalbo API timeouts — integration test failures at rural sites |
| Day 5 | ISS-05 resolution underway — timeout thresholds and retry logic under revision |
| Day 6 | ISS-05 resolved — all 12 sites passing ✅. Contingency draw-down ($4,750) approved by Project Board |
| Day 7 | Pre-notification module (BL-13) built. ISS-06 raised — paramedic contact field missing from payload |
| Day 8 | ISS-06 resolved — field added to payload. En-route update notification (BL-14) complete |
| Day 9 | False negative alert (BL-15) built and tested — 5% threshold trigger confirmed |
| Day 10 | End-to-end scenario test across 3 representative sites — average 6.2 min call-to-notification ✅ |

---

## Sprint Review Outcomes
- API connectivity established and tested at **all 12 NNSWLHD facilities** ✅
- Rural site connectivity (Urbenville, Bonalbo) resolved within sprint ✅
- Hospital pre-notification module validated — ED acknowledgement confirmed at all 12 sites ✅
- En-route update push notification within 60-second delivery target ✅
- False negative alert threshold trigger confirmed at 5% rolling 7-day rate ✅
- End-to-end test average: **6.2 minutes** (call receipt → hospital pre-notification) ✅

---

## Sprint Retrospective

**What went well:**
- Site-specific testing plan prepared in advance — prevented further delays at rural sites
- Contingency draw-down process was smooth — PRINCE2 change control worked well

**What to improve:**
- ED stakeholder engagement should start earlier — hospital input on pre-notification was valuable but came late in the sprint

**Action for UAT:**
- Include at least one ED nurse representative in UAT scenarios to validate hospital-facing interface

---

## Issues Log

| ID | Description | Severity | Owner | Status |
|----|-------------|----------|-------|--------|
| ISS-05 | Rural site API timeouts at Urbenville and Bonalbo — integration test failures on first pass | **High** | Aditya Aravind | ✅ Resolved — timeout thresholds and retry logic updated; contingency $4,750 drawn with Project Board approval |
| ISS-06 | Hospital pre-notification payload missing paramedic contact field required by ED clinical leads | Low | Aarav Khemani | ✅ Resolved — field added to payload; WF-04 final iteration confirmed by ED leads |

---

## Contingency Draw-down Record
**ISS-05 — Rural Site Integration:**
- Draw-down amount: **$4,750.00**
- Approval: Project Board — 11/04/2026
- Basis: Additional IS Developer time for site-specific integration troubleshooting (as provisioned in Table 1.3 of Project Plan)
- Remaining contingency: $16,232.40

---

## DT Activities This Sprint

| Stage | Activity | Output |
|-------|----------|--------|
| Empathise | ED nurse representatives at Casino and Grafton consulted on pre-notification payload requirements | Revised payload specification |
| Define | Hospital pre-notification minimum data set confirmed with ED clinical leads | Final payload data set |
| Ideate | ED acknowledgement receipt mechanism designed — eliminates need for dispatcher phone confirmation | Receipt UI concept |
| Prototype | WF-04 (Iteration 1) presented at sprint review with hospital integration team | WF-04 wireframe |
| Test | Full end-to-end dispatch-to-hospital workflow tested across 3 representative NNSWLHD sites | 6.2 min average confirmed |
| Implement | All 12 hospital API integrations deployed and validated | Go-live ready |

---

## All-Issues Resolved — UAT Clearance
All 6 issues across Sprints 1–3 resolved. System cleared for UAT commencement.

| ID | Sprint | Severity | Status |
|----|--------|----------|--------|
| ISS-01 | Sprint 1 | Medium | ✅ Resolved |
| ISS-02 | Sprint 1 | Low | ✅ Resolved |
| ISS-03 | Sprint 2 | Medium | ✅ Resolved |
| ISS-04 | Sprint 2 | Low | ✅ Resolved |
| ISS-05 | Sprint 3 | High | ✅ Resolved |
| ISS-06 | Sprint 3 | Low | ✅ Resolved |
