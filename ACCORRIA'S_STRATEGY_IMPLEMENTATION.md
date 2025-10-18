# Chuck's Strategy & Implementation Plan

## What Chuck Said to Do (The Essence)

**Pick one dealer as a guinea pig and run end-to-end:**
- Lead intake → IQR (initial quality response) → appointment → show → close → matchback

**Build a simple website for that dealer** (they don't have one), instrument it with metrics, and prove lift (Set/Show/Close rates).

**Own Facebook Marketplace presence** (and other classifieds) because used dealers live there; automate posting + lead filtering to cut junk traffic.

**Ship dashboards the dealer can understand** (SmartPath vibes): fast tiles, consultant table, trend lines.

**Collect proof (case study) and then sell it.**
*(Biozine's angle was "start selling now," but Chuck's nuance was "earn your proof first, then scale.")*

## Pilot Project: Unlimited Auto (Alpha-01)

### Goals (What We Will Prove)
- Faster time-to-first-response and higher Set / Show / Close
- Clear source ROI across Website, Facebook Marketplace, Craigslist, etc.
- A repeatable playbook (site + marketplace + metrics) we can sell

### Scope (What's In)
- **Website** (modern, fast, SEO/Local ready) with VDPs, lead forms, chat, built-in scheduler, click-to-call/text
- **Unified lead funnel**: track every inquiry to its source; IQR scoring; human-in-the-loop replies; appointment engine
- **Facebook Business Page + Marketplace ops** with cross-posting, message routing, and spam filtering
- **Dashboards** that mirror SmartPath concepts (tiles + tables + trends)
- **Light matchback** to closes (CSV import now; deeper integrations later)

## Workstreams (At a Glance)

| Workstream | What We'll Do | Success Metric |
|------------|---------------|----------------|
| **Website** | Launch fast dealer site + inventory/VDPs + scheduler | Site live; leads flowing |
| **Tracking** | UTMs, shortlinks, call tracking, Pixels/CAPI | 100% lead source attribution |
| **Messaging** | AI IQR + agent approve + templates | <1 min median first reply |
| **Appointments** | Calendar, confirmations, no-show nudges | Set/Show ↑ |
| **Marketplaces** | FB Business Page + Marketplace feed + cross-post | Daily fresh listings |
| **Dashboards** | Tiles + consultant table + trends | Dealer checks daily |
| **Matchback** | VIN/date/price CSV import to mark "Sold" | Closed-loop KPIs |

## Deliverables (What Unlimited Auto Gets)

### UnlimitedAuto.com (or chosen domain)
- **Pages**: Home, Inventory (search/sort/filter), VDPs per vehicle, Sell/Trade form, Financing info, About/Hours/Map, Contact
- **Schema**: Vehicle on VDPs, LocalBusiness on Home, OpenGraph/Twitter cards
- **Performance**: image CDN & WebP, lazy-load, skeletons; Lighthouse-friendly
- **Lead capture**: short forms (SMS-first), chat widget, embedded scheduler
- **Compliance**: consent text (TCPA), privacy page, opt-out link

### Facebook Business Page + Marketplace Program
- Page create/claim, roles, branding, hours, location, Page verification
- Meta Pixel + CAPI, WhatsApp/FB Messenger connect, Saved Replies
- Listing template (title, price, 10–12 photos, condition, UTM'd shortlink back to VDP)
- Cross-post cadence (freshness rotation, price updates), inbox routing, spam filters

### Unified Funnel & Messaging Console (Accorria)
- Unique email alias / phone tracking per channel and per VDP
- IQR bot drafts replies; dealer taps Approve/Send; AI escalation notes
- Scheduler with availability windows, buffer times, and reminders ("On my way?")
- **Dashboards (SmartPath-style, fast)**:
  - Lead Performance: Eligible Leads, Engaged Leads, Time-to-First-Response
  - Appointment Conversion: Set Rate, Show Rate, Show-Close Rate (with definitions)
  - Consultant Table: presentations, write-ups, trade-ins, first-pencil, close rate, time-in-tool
  - Source ROI: leads, sets, shows, closes by channel (Website, FBM, CL, etc.)
  - Scorecards: IQR components (personalization, name, price/availability, trade, value statement)

### Matchback (Lightweight Now)
- Nightly CSV upload (Sold VINs, date, price) → marks leads as "Closed-Won"
- Later: DMS/CRM connectors when dealer is ready

## KPI Definitions (So We're Speaking Toyota's Language)

- **Eligible Unique Leads (EUL)** = unique people with valid contact across channels
- **Set Rate** = Appointments Set ÷ EUL
- **Show Rate** = Appointments Shown ÷ Appointments Set
- **Show-Close Rate** = Deals Closed from Shown ÷ Appointments Shown
- **Time-to-First-Response (TTFR)** = first human/approved reply latency
- **IQR Score (0–100)** = Subject line ✓, Intro ✓, Name ✓, Availability ✓, Pricing ✓, Trade ✓, Value statement ✓, Direct CTA + Scheduler ✓, Signature ✓

## Implementation Blueprint (Step-by-Step)

### A. Foundations
- Secure domain, DNS, SSL, CDN
- Create Facebook Business Page; verify; add admins; connect WhatsApp/Messenger
- Add Meta Pixel + CAPI and Google Analytics; create UTM scheme

### B. Website & Inventory
- Site shell + theme; brand colors; hero copy; "Why Buy Here"; hours/map
- Inventory: initial CSV import (photos, trim, VIN, miles, price, notes)
- VDPs auto-generated with schema, gallery, specs, CTA (Call, Text, Schedule, Directions)

### C. Tracking & Routing
- Call tracking numbers per channel (Website, FBM, CL) and per inventory group
- Channel-specific email aliases (e.g., rav4-fbm@unlimitedauto.com)
- Shortlinks per VDP/channel (e.g., ua.to/v/123-fbm) for airtight attribution

### D. Messaging & IQR
- Load AI templates (availability, price, trade-invite, finance, directions)
- Human-in-the-loop approve; escalation tags ("negotiation", "credit", "trade-only")
- Scheduler embedded: operating hours, buffers, Google/Apple calendar invites

### E. Marketplaces
- Listing template pack; photo checklist (exterior 6, interior 4, odometer, VIN plate)
- Cross-post workflow: create once → distribute → refresh → price-mark
- Inbox rules: spam keywords, "ghost" cool-downs, verification prompts

### F. Dashboards
- Tiles: pre-computed (Redis/materialized views) → snappy loads
- Trend charts: p75 under 1.5s via lazy queries
- Consultant table: sortable, exportable CSV

### G. Matchback & Proof
- Daily "Sold" CSV → auto-close loop
- Before/After card on the dealer's home screen (Set/Show/Close, TTFR deltas)
- One-page case study draft once 10+ deals flow through

## Content & Ops We'll Pre-Load (So Unlimited Can Go Live Fast)

### Website Copy (Starter Snippets)
- **Hero**: "Local cars. Straight answers. Fast appointments."
- **CTA buttons**: Text us, See availability, Schedule drive
- **Why Buy Here**: Transparent pricing • Quick financing • Same-day appointments • No games

### IQR Templates (Short & Effective)
- *"Great news—[Vehicle] is available. We can hold a 2:30 or 4:15 today. What works for you? Here's the link to pick a time: [scheduler]."*
- *"Have a trade? Send a quick photo of the odometer + VIN. I'll get you a range before you drive over."*

### Marketplace Listing Template
- **Title format**: Year Make Model Trim
- **First line**: Price + 3 selling points
- **Body**: condition + highlights + link back to VDP shortlink
- **Footer**: Hours, address, "message to schedule," consent note

## Risks & Guardrails (So the Pilot Sticks)

- **TCPA/consent**: explicit opt-in lines on forms; auto-honor STOP keywords
- **Spam load**: filters + "cool-down" timers for repeat time-wasters
- **Policy drift on FB/CL**: keep a manual post path if APIs shift
- **Performance**: compress images, pre-compute tiles, lazy-load charts

## What Success Looks Like (Non-Negotiables)

- Website live with inventory and working scheduler
- 100% of inbound leads tagged with source + VDP
- Median TTFR under 2 minutes (with human approve)
- Set/Show/Close tiles visible on the dealer home screen and trending up
- First Closed-Won matchbacks flowing and reflected in the dashboard
- A one-page case study we can show the next dealer

## Immediate Next Actions (So We Move Today)

1. **Confirm domain choice and hosting preference** for Unlimited Auto
2. **Get logo/brand colors, store address/hours**, and a starter CSV of 3–5 vehicles (photos too)
3. **Create/claim Facebook Business Page** and add us as Page Admins
4. **Spin up the site shell, inventory import**, and the unified funnel (aliases, tracking numbers, scheduler, Pixel/CAPI)
5. **Begin cross-posting first three vehicles** with UTM shortlinks and bring the dashboards online

## Strategic Assessment

### Why Chuck's Strategy is Genius
- ✅ **Proof-driven** - Real metrics beat theoretical features
- ✅ **End-to-end validation** - Complete funnel from lead to close
- ✅ **Dealer-centric** - Focus on what actually moves the needle
- ✅ **Scalable foundation** - One proven playbook → multiple dealers

### Key Implementation Insights
- ✅ **"Human-in-the-loop"** - Addresses dealer comfort with AI while maintaining speed
- ✅ **Source attribution** - 100% tracking is crucial for proving ROI
- ✅ **SmartPath-style dashboards** - Speaking Toyota's language builds credibility
- ✅ **Matchback validation** - Closing the loop proves the system works

### Technical Recommendations

#### Phase 1: Foundation (Today)
- Set up Unlimited Auto website with inventory/VDPs
- Create Facebook Business Page and connect tracking
- Build basic lead capture with source attribution
- Implement IQR templates with human approval workflow

#### Phase 2: Automation (This Week)
- Cross-posting automation for Facebook Marketplace
- Scheduler integration with calendar sync
- Dashboard tiles with real-time KPI tracking
- Spam filtering and lead quality scoring

#### Phase 3: Proof (Next 2 Weeks)
- Matchback system for closed deals
- Performance optimization and monitoring
- Case study documentation
- Sales materials for next dealer

---

*This document captures Chuck's strategic guidance and the detailed implementation plan for the Unlimited Auto pilot project. The goal is to earn proof of concept before scaling to additional dealers.*
