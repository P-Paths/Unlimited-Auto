# Accorria Platform Architecture Strategy

## Project Overview

Building a two-product model for automotive dealer solutions:

1. **Prestigious Paths (PP)** - Custom dealer websites (public-facing storefronts)
2. **Accorria** - AI-powered backend SaaS (messaging, dashboards, automation, analytics)

## Business Model & Revenue Strategy

### Prestigious Paths (The Website)
- **What it is**: Custom Next.js dealer website with inventory, VDPs, forms, scheduler, SEO, branding
- **What the dealer owns**:
  - Their domain (e.g., UnlimitedAuto.com)
  - Their brand, content, and public-facing pages
  - A one-time build fee or low monthly hosting/maintenance fee

**Revenue Model:**
- One-time setup: $2,500–$5,000
- Monthly maintenance: $199–$499/mo (hosting, updates, support)

### Accorria SaaS Platform
- **What it is**: The AI brain that powers lead management, messaging, dashboards, matchback, and source attribution
- **What the dealer licenses**:
  - API access to Accorria's intelligence layer
  - Dashboard (Set/Show/Close tiles, consultant tables, IQR scoring)
  - Unified inbox (Facebook, SMS, email routing)
  - AI-powered IQR responses (OpenAI + Gemini + Vision APIs)
  - Marketplace automation (cross-posting, spam filtering)
  - Matchback and attribution engine

**Revenue Model:**
- Monthly SaaS license: $499–$999/mo per dealer
- Usage-based add-ons: +$0.10/SMS, +$50/month per extra user seat

## Technical Architecture

### High-Level Flow
```
┌─────────────────────────────────────────────────┐
│  Prestigious Paths Website (Next.js)            │
│  - Public inventory pages, VDPs, forms          │
│  - Embeds Accorria widgets via API/iframes      │
│  - Sends lead data to Accorria API              │
└─────────────────────────────────────────────────┘
                      ↓ (API calls)
┌─────────────────────────────────────────────────┐
│  Accorria SaaS Platform (API + Dashboard)       │
│  - Lead ingestion, routing, AI responses        │
│  - Dashboard (analytics, tiles, tables)         │
│  - Marketplace automation, matchback            │
└─────────────────────────────────────────────────┘
```

### Recommended Tech Stack

#### Frontend (Both Products)
- **Next.js 14** with App Router (for SEO, performance, server actions)
- **TypeScript** (strict mode)
- **Tailwind CSS** (for rapid, mobile-first styling)
- **Shadcn/ui** or **Headless UI** (for consistent components)
- **Framer Motion** (for smooth animations)

#### Backend Integration
- **Server Actions** (Next.js) for form handling and API calls
- **API Routes** (Next.js) for webhook handling and data processing
- **Zod** for validation
- **React Hook Form** for form management

#### Database & Data
- **Prisma** for schema management
- **PostgreSQL** (Cloud SQL or Supabase for development)
- **Redis** for caching KPI data, session management

#### External Services Integration
- **Accorria APIs** (existing system)
- **Stripe** (for payments if needed)
- **SendGrid** (for email notifications)
- **Google Analytics** + **Meta Pixel** (for tracking)
- **OpenAI** + **Gemini** (for AI responses)
- **Google Vision API** (for VIN/plate/sticker OCR)

#### Deployment & Infrastructure
- **Vercel** (for Next.js deployment - fast, easy)
- **Cloud Storage** (for images, CDN)
- **Docker** (for containerization if needed)

## Project Structure (Turborepo Monorepo)

```
/accorria-platform
  /apps
    /unlimited-auto-site    ← Next.js website for Unlimited Auto
    /accorria-dashboard     ← Accorria dealer dashboard (analytics, inbox)
  /packages
    /accorria-sdk          ← API client for dealer websites
    /shared-ui             ← Shared Tailwind components
    /ai-services           ← OpenAI, Gemini, Vision wrappers
  /services
    /api                   ← FastAPI or Next.js API routes (lead ingestion, IQR)
```

## Core Entities (Prisma Schema)

```prisma
model Tenant { id, name, slug, createdAt, updatedAt }
model User { id, tenantId, role, email, phone, name, createdAt }
model ApiKey { id, tenantId, key, scopes, createdAt, lastUsedAt }
model Vehicle { id, tenantId, vin, year, make, model, trim, price, miles, photos[], status, createdAt, updatedAt }
model Lead { id, tenantId, vehicleId?, contactId, source, utmSource?, utmCampaign?, consentAt, iqrScore?, status, createdAt, updatedAt }
model Contact { id, tenantId, name?, email?, phone?, createdAt, updatedAt }
model Message { id, tenantId, leadId, direction, channel, body, metaJson, createdAt }
model Appointment { id, tenantId, leadId, startsAt, endsAt, status, location, createdAt, updatedAt }
model Deal { id, tenantId, leadId, vehicleId?, price?, status, closedAt? }
model Event { id, tenantId, type, entity, entityId, payloadJson, createdAt }
model Attribution { id, tenantId, leadId, channel, campaign?, vdpUrl?, callTrackingNumber?, shortlink? }
model UsageRecord { id, tenantId, kind, quantity, createdAt }
```

## KPIs (Toyota SmartPath Style)

- **Eligible Unique Leads (EUL)**
- **Set Rate** = Appointments Set / EUL
- **Show Rate** = Appointments Shown / Appointments Set
- **Show-Close Rate** = Deals Closed from Shown / Appointments Shown
- **Close Rate** = Deals Closed / EUL
- **Time-to-First-Response (TTFR)**
- **IQR Score (0–100)** with checklist breakdown

## API Integration Flow

### Step 1: Lead Capture (Website → Accorria API)
```javascript
// /apps/unlimited-auto-site/app/api/leads/route.ts
import { AccorriaClient } from '@accorria/sdk';

export async function POST(req: Request) {
  const { name, phone, email, vehicle_id, source } = await req.json();
  
  const accorria = new AccorriaClient(process.env.ACCORRIA_API_KEY);
  
  await accorria.leads.create({
    dealer_id: 'unlimited-auto',
    contact: { name, phone, email },
    vehicle_id,
    source: 'website',
    utm: req.headers.get('referer')
  });
  
  return Response.json({ success: true });
}
```

### Step 2: Embed Accorria Widgets (Iframe or SDK)
```jsx
// Option A: Iframe Embed (Fast, secure)
export function AccorriaChat({ dealerId }: { dealerId: string }) {
  return (
    <iframe
      src={`https://dashboard.accorria.com/embed/chat?dealer=${dealerId}`}
      className="w-full h-[600px] border-0"
    />
  );
}

// Option B: React SDK (More flexible)
import { useAccorriaMetrics } from '@accorria/sdk/react';

export function LeadDashboard() {
  const { setRate, showRate, ttfr } = useAccorriaMetrics('unlimited-auto');
  
  return (
    <div className="grid grid-cols-3 gap-4">
      <MetricCard title="Set Rate" value={setRate} />
      <MetricCard title="Show Rate" value={showRate} />
      <MetricCard title="TTFR" value={`${ttfr}s`} />
    </div>
  );
}
```

## Licensing & Billing Model

### How the Dealer Pays
**Prestigious Paths (Website):**
- One-time build: $3,500
- Monthly hosting/support: $299/mo

**Accorria SaaS:**
- Monthly license: $699/mo
- Includes: 500 leads/mo, 1,000 SMS, 3 user seats
- Overage: $0.10/lead, $0.02/SMS, $50/extra seat

### API Key = License Enforcement
```javascript
// Accorria API validates every request
if (!validApiKey(req.headers['x-accorria-key'])) {
  return res.status(403).json({ error: 'Invalid or expired license' });
}

if (dealer.usage.leads_this_month > dealer.plan.lead_limit) {
  return res.status(402).json({ error: 'Lead limit exceeded. Upgrade plan.' });
}
```

## Implementation Timeline

### Day 1: Foundation (8 hours)
**Morning (4 hrs):**
1. Turborepo setup: `npx create-turbo@latest` → add `/apps/unlimited-auto-site` and `/apps/accorria-dashboard`
2. Dealer website shell: Home, Inventory, VDP template, Contact form (Next.js + Tailwind)
3. Basic API routes: `/api/leads`, `/api/vehicles`, `/api/analytics`

**Afternoon (4 hrs):**
4. Accorria dashboard scaffold: Login page, sidebar nav, tiles placeholder
5. AI IQR service: OpenAI/Gemini wrapper for response drafts
6. Lead ingestion API: `POST /api/leads` → save to Supabase, trigger IQR

### Day 2: Integration & Polish (8 hours)
**Morning (4 hrs):**
7. Website → Accorria integration: Form submissions → Accorria API
8. Dashboard tiles: Set/Show/Close rates (mock data first, then real)
9. Inbox prototype: List leads, show AI draft, "Approve" button

**Afternoon (4 hrs):**
10. Facebook webhook setup: Receive FB Marketplace messages → route to Accorria inbox
11. Scheduler embed: Calendly-style booking widget on VDPs
12. Deploy: Website → Vercel, Dashboard → Cloud Run

## Key Technical Decisions

| Decision | Option A | Option B | Recommendation |
|----------|----------|----------|----------------|
| Code structure | Monorepo (Turborepo) | Separate repos | Monorepo (faster this weekend) |
| API style | REST (simple) | GraphQL (flexible) | REST (less overhead) |
| Database | Supabase (fast) | Cloud SQL (scalable) | Supabase (auth + DB in one) |
| Dashboard hosting | Same domain (proxy) | Separate subdomain | Subdomain (dashboard.accorria.com) |
| Widget embed | Iframe (secure) | React SDK (seamless) | Iframe (faster, cleaner separation) |

## Priority Order for Development

1. **Dealer website homepage + inventory grid** (public credibility)
2. **Lead capture API + Supabase schema** (data foundation)
3. **AI IQR draft service** (core value prop)
4. **Dashboard tiles (Set/Show/Close)** (proof of analytics)
5. **Inbox with "Approve reply" button** (human-in-the-loop)
6. **Facebook webhook listener** (marketplace integration)
7. **Scheduler widget embed** (appointment conversion)

## Competitive Analysis (SWOT)

### Accorria's Competitive Advantages
- **Multi-agent AI automation** vs. Toyota's template-driven approach
- **Unified cross-marketplace management** vs. fragmented used car systems
- **Trust/escrow features** vs. traditional dealer processes
- **Real-time AI responses** vs. structured but slower SmartPath workflows

### Critical Gaps to Address
- Accorria needs SmartPath-style conversion KPIs and granular analytics
- Dealer dashboard sophistication needs to match Toyota's accountability systems
- Need hybrid automation (AI + human approval) to address dealer comfort levels

## Environment Variables Needed

```env
# Accorria API
ACCORRIA_API_KEY=your_api_key_here

# AI Services
OPENAI_API_KEY=your_openai_key
GEMINI_API_KEY=your_gemini_key
VISION_KEY=your_google_vision_key

# External Services
STRIPE_KEY=your_stripe_key
SENDGRID_KEY=your_sendgrid_key
TWILIO_KEY=your_twilio_key

# Security
WEBHOOK_SECRET=your_webhook_secret

# Database
POSTGRES_URL=your_postgres_url
```

## Success Metrics

### Phase 1 Acceptance Criteria
- PP site runs locally with 3 sample vehicles + working VDPs
- Submitting a lead from VDP creates a Lead in Accorria with attribution and consent; returns 200
- IQR draft endpoint returns a short, on-brand reply with a scheduler link
- Appointments can be created via widget or API and show in a simple "My Appointments" page
- KPI tiles endpoint returns non-zero mock stats (seeded events) under 300ms (cached)
- Webhooks verified via HMAC; sample payload updates PP state successfully

### Long-term Success Metrics
- Dealer conversion rates matching or exceeding Toyota SmartPath benchmarks
- Successful licensing of Accorria to multiple dealers
- Positive dealer feedback on AI automation vs. manual processes
- Measurable ROI improvement for dealers using the integrated solution

---

*This document serves as the master architecture guide for the Accorria platform development. All technical decisions and implementation should reference this strategy.*
