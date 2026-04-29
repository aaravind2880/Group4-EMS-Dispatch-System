# Brainstorming Session Record
**Part B — Ideation & Product Backlog**
**Project:** NNSWLHD AI-Supported EMS Dispatch System
**Session Date:** 07 April 2026 (Week 8)
**Recorded by:** L. Hincks (Team Manager)
**Tool:** Microsoft Loop whiteboard + Microsoft Teams

---

## Session Details

| Field | Detail |
|---|---|
| Date | 07 April 2026 |
| Time | 6:00 PM – 7:30 PM AEDT |
| Format | Microsoft Teams (all members remote) |
| Facilitator | Lachlan Hincks |
| Participants | N. Mazay, A. Khemani, A. Aravind, J. O'Brien, L. Hincks |
| Method | Silent brainstorm (individual idea generation per HMW cluster, then group share + shortlist) |

---

## Method

1. Each HMW cluster was displayed on the Loop whiteboard one at a time.
2. All members independently added sticky notes (silent phase — 5 minutes per cluster).
3. Ideas were read aloud by the facilitator and briefly discussed.
4. Team voted (thumbs up/down) to shortlist ideas worth developing.
5. Shortlisted ideas were grouped by theme and mapped to potential backlog items.

---

## Raw Ideas by HMW Cluster

### Cluster 1 — Nurse Dispatcher (12 raw ideas generated)

| # | Raw Idea | Shortlisted? |
|---|---|---|
| 1 | AI confidence score colour-coded by risk tier (red/amber/green) | ✅ Yes |
| 2 | Single-screen triage layout — no tab switching during live call | ✅ Yes |
| 3 | Auto-populate symptom fields from voice-to-text transcription | ❌ No — technical feasibility risk |
| 4 | Mandatory override rationale dropdown (structured, not free text) | ✅ Yes |
| 5 | IMS+ auto-log triggered on dispatch action (no manual entry) | ✅ Yes |
| 6 | Guided questioning script with on-screen timer | ✅ Yes |
| 7 | Dispatcher performance leaderboard to gamify accuracy | ❌ No — inappropriate in clinical context |
| 8 | AI recommendation hidden until dispatcher enters symptoms (blind mode) | ❌ No — adds cognitive load |
| 9 | Audio alert when AI classifies Priority 1 AMI | ❌ No — noise in dispatch environment |
| 10 | Shift handover summary auto-generated from IMS+ logs | ❌ No — out of scope |
| 11 | Quick-reference guide to AI confidence score ranges on screen | ✅ Yes |
| 12 | Training simulation mode using historical AMI call data | ❌ No — deferred to post go-live |

**Shortlisted: 6 → mapped to BL-03, BL-04, BL-05, BL-11**

---

### Cluster 2 — Paramedic / Driver (10 raw ideas generated)

| # | Raw Idea | Shortlisted? |
|---|---|---|
| 1 | In-vehicle terminal dispatch card with symptom summary + AI class | ✅ Yes |
| 2 | Post-callout outcome form with AI accuracy rating field | ✅ Yes |
| 3 | En-route update push notification from dispatch to terminal | ✅ Yes |
| 4 | Pre-arrival equipment checklist based on AI classification | ❌ No — clinical governance complexity |
| 5 | GPS route optimiser integrated with dispatch notification | ❌ No — existing CAD system handles routing |
| 6 | Two-way voice channel via terminal to dispatch (upgrade) | ❌ No — infrastructure out of scope |
| 7 | Patient vitals input from scene sent back to dispatch | ❌ No — deferred to post go-live |
| 8 | Hospital readiness status visible on in-vehicle terminal | ✅ Yes |
| 9 | AI accuracy trend chart for paramedic team (monthly) | ❌ No — out of scope for sprint delivery |
| 10 | Crew availability status update from terminal | ✅ Yes |

**Shortlisted: 5 → mapped to BL-08, BL-09, BL-14**

---

### Cluster 3 — Dispatch Centre Manager (14 raw ideas generated)

| # | Raw Idea | Shortlisted? |
|---|---|---|
| 1 | Real-time KPI dashboard (accuracy, non-transport %, call volume) | ✅ Yes |
| 2 | Automated false negative rate alert with email notification | ✅ Yes |
| 3 | PRINCE2 stage gate progress summary view | ✅ Yes |
| 4 | AI model retraining governance log (quarterly cycle) | ✅ Yes |
| 5 | Shift-aligned training scheduler for dispatcher onboarding | ✅ Yes |
| 6 | NSQHS Standard 1 compliance checklist embedded in UAT | ✅ Yes |
| 7 | Monthly efficiency savings reconciliation report (auto-generated) | ✅ Yes |
| 8 | Budget variance tracker vs. business case CAPEX/OPEX | ❌ No — PRINCE2 PM role, not system feature |
| 9 | Staff wellbeing survey triggered after high-volume shifts | ❌ No — HR scope, out of project boundary |
| 10 | Dispatcher error rate breakdown by shift and individual | ❌ No — inappropriate individual performance surveillance |
| 11 | AI override rate trending chart for manager review | ❌ No — captured in KPI dashboard (idea 1) |
| 12 | Automatic escalation to Project Board if KPI misses 3 days running | ❌ No — process, not system feature |
| 13 | Cross-service joint review session (dispatch + ambulance manager) | ❌ No — process recommendation, not backlog item |
| 14 | Post go-live AI performance review at 30-day mark | ❌ No — out of 9-week project scope |

**Shortlisted: 7 → mapped to BL-10, BL-15**

---

### Cluster 4 — AMI Patient / Caller (12 raw ideas generated)

| # | Raw Idea | Shortlisted? |
|---|---|---|
| 1 | AI-guided symptom questioning script with branching logic | ✅ Yes |
| 2 | Hospital pre-notification module with ED acknowledgement receipt | ✅ Yes |
| 3 | Post-discharge patient feedback mechanism (online form) | ✅ Yes |
| 4 | Public awareness campaign integration with Australian Heart Foundation | ✅ Yes |
| 5 | Dispatcher patient-centred communication training module | ✅ Yes |
| 6 | Automated SMS confirmation to caller once ambulance dispatched | ❌ No — deferred to Won't Have (BL-16) |
| 7 | Live ETA tracker accessible by caller via SMS link | ❌ No — security and infrastructure risk |
| 8 | Caller follow-up call from dispatch post-incident | ❌ No — clinical governance out of scope |
| 9 | Multilingual dispatcher prompt for CALD communities | ❌ No — deferred to post go-live |
| 10 | Bystander CPR guidance via IVR while awaiting ambulance | ❌ No — clinical risk, requires separate governance |
| 11 | GP notification when patient bypasses GP pathway | ❌ No — privacy concerns, out of scope |
| 12 | Patient satisfaction score collected at hospital discharge | ❌ No — hospital scope, not EMS dispatch system |

**Shortlisted: 5 → mapped to BL-03, BL-12, BL-13**

---

## Summary

| Cluster | Raw Ideas | Shortlisted | Backlog Items |
|---|---|---|---|
| Nurse Dispatcher | 12 | 6 | BL-03, BL-04, BL-05, BL-11 |
| Paramedic / Driver | 10 | 5 | BL-08, BL-09, BL-14 |
| Dispatch Centre Manager | 14 | 7 | BL-10, BL-15 |
| AMI Patient / Caller | 12 | 5 | BL-03, BL-12, BL-13 |
| **Total** | **48** | **23** | **16 backlog items** |

---

## Next Steps (agreed at session close)

- L. Hincks to transfer shortlisted ideas to product backlog in Loop (due 09 Apr)
- N. Mazay to review backlog priorities against project constraints (due 10 Apr)
- A. Aravind + A. Khemani to draft user stories from backlog items (due 10 Apr)
- J. O'Brien to commit brainstorm record to GitHub and update meeting notes (due 10 Apr)

---
