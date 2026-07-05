# Servogo: what it does and what it doesn't

A reference for marketing copy. Only features in this document are actually shipped. If something isn't listed here, don't claim it.

No em dashes anywhere in user-visible copy.

---

## What Servogo is

A multi-tenant field service management platform for owner-run and small-to-medium service businesses that visit clients on a recurring or one-off basis: window cleaners, gardeners, pest control, pool service, cleaners, HVAC, locksmiths, and similar trades.

Web app for desktop and mobile browsers, with a streamlined tech view that technicians open from their phone browser in the field. There is no separate installable app.

---

## What it does

### Scheduling
- Recurring service plans (weekly, monthly, specific-day frequencies) that auto-generate jobs
- One-off jobs created and assigned to a tech and date
- Drag-drop reordering of stops on the day view, with live recalculation of arrival and departure times
- One-click route optimisation using straight-line distance, with optional home-start and home-return
- Configurable breaks and pauses between stops
- Cancel or reschedule jobs from the day view

### Route and day view
- Interactive map with stops, route lines, and pin highlighting
- Weather panel for the route's day (current conditions and hourly breakdown via OpenWeather)
- Drive time and distance estimates between stops (straight-line, not traffic-aware)
- Configurable day start time

### Visits and job history
- Mark jobs complete from the day view (web or mobile-web)
- Optional completion notes per visit
- Immutable visit records build a per-client service history
- Searchable, filterable job history with CSV export

### Invoicing
- Auto-generate draft invoices from completed visits (per visit, rolling per client, or monthly batch)
- Manual invoices with custom line items
- Branded PDF invoices (your logo and primary colour)
- Email delivery to clients
- Stripe payment links embedded in invoices, with auto-mark-paid when the customer pays online
- Manual payment recording (cash, bank transfer, etc.)
- Status tracking: draft, due, partially paid, paid, overdue, cancelled
- Invoice numbering with prefix and annual reset options
- Tax rate, VAT-inclusive or exclusive pricing, payment terms, late fee policy
- Voiding produces a credit note

### Quotes
- Draft, send, accept, decline workflow
- Line items with description, quantity, unit price
- Client accepts via email link
- One-click conversion of accepted quotes into scheduled jobs

### Client management
- Client directory with search and filters
- Bulk CSV import with auto field mapping
- Squeegee CSV export compatibility (recognises Squeegee column names out of the box)
- Archive (preserves history) or delete clients
- Per-client message log

### Automated notifications
- Notification templates with placeholders for visit reminders, route updates, invoice sent, payment received
- These are automated, outbound transactional emails. They ship in v1.

### Two-way client messaging (NOT in v1)
The staff-to-client conversation feature (threaded messages, quick replies, bulk
send, read/unread tracking) is built but gated off for v1, because it depends on
the customer self-service portal for client replies and read receipts, and that
portal is not launched. The in-app Messages tab is hidden. Do not claim two-way
messaging, threads, or read tracking until the portal ships.

### Personnel and roles
Two access levels (binary `is_admin_user`, not four roles):
- **Admin**: full access to the whole business, including personnel, invoicing, payroll, settings, and billing. The signup owner is an admin who can't be removed.
- **Standard**: field-focused. Own day on Day View, own clients and job history, mark own visits complete. No dashboard, schedule, quotes, invoices, payroll, personnel, or settings.

Other personnel features:
- Email invitations with 7-day expiry, resendable
- Per-tech home address override (for routing)
- Per-tech pay rules: commission percent, flat per visit, or hourly

### Payroll
- Tech earnings calculated from completed visits and assigned pay rule
- Period selection: this month, last month, this quarter, year-to-date, or a custom date range
- Figures calculated live (no saved/locked pay run; export CSV at the point you pay)
- Visible to admins only (standard team members have no access)

### Dashboard
- Outstanding invoices, overdue jobs, upcoming work
- Weekly and monthly cashflow chart (collected vs. billed)
- Recent activity feed
- Date range selector with delta vs. prior period

### Settings and branding
- Currency, country, locale, timezone
- Logo and primary colour for client-facing PDFs and emails
- Invoice numbering, generation mode, tax, terms, late fees
- Notification template editing
- Home address (depot or start location)

### Tech view (mobile-web)
Techs use the Servogo web app on their phone (no separate install):
- Today's route, with the next stop highlighted
- Address, notes, service details for each stop
- One-tap handoff to the device's maps app for navigation
- Mark complete with optional completion note
- Techs see only their own assignments (no other techs' routes, no client list, no pricing or invoicing)
- Internet connection required

### Integrations (live)
- **Stripe**: payment links on invoices, subscription billing for the platform itself
- **OpenWeather**: forecast on day view
- **Postcodes.io**: UK postcode geocoding
- **Email**: Resend (transactional email via Django mail backend)

### Data export
- CSV export for clients, service plans, job history, invoices, payroll
- Branded PDF for invoices and quotes

---

## What it does NOT do

Do not claim any of these in marketing copy.

### Not built
- **Offline tech app** (no service worker, no offline cache; internet required for the tech view)
- **Photo capture on visits** (completion notes only, no image upload field on jobs or visits)
- **Per-tech working days** (no per-day availability gating on scheduling or routing)
- **Multi-organisation membership for one user** (each user belongs to exactly one organisation; no org-switching)
- **Native mobile app** (techs use the responsive web app on their phone)
- **Locked / mark-paid pay runs** (payroll is calculated live each time; no saved pay run, no period lock, no retroactive-edit protection)
- **Tech access to payroll** (payroll is admin only; standard team members cannot view their own earnings in-app)
- **SMS messaging** (email only for now)
- **Live GPS tracking** of technicians
- **Traffic-aware routing** (route optimisation uses straight-line distance, not real road or traffic data)
- **Multi-tech shared routes** (each route belongs to one tech)
- **Customer self-service portal** with login, booking, or payment history (no client account area)
- **Recurring invoices independent of jobs** (invoices come from completed visits, not on their own schedule)
- **Accounting software sync** (no QuickBooks, Xero, FreeAgent integration; data exports as CSV)
- **Zapier, Make, Slack, or other third-party automation integrations**
- **Public API for customers** (the API exists but is internal; no documented endpoints or webhooks for customers)
- **Webhooks**
- **Geofencing or time-tracking** based on tech location
- **Custom dashboards or drill-down analytics** beyond the built-in overview
- **Job approval workflows** (jobs are created directly, no pending state)
- **White-label or reseller licensing**
- **In-app payment processing for cash or card-present transactions** (online card payments work via Stripe payment links only)

### Ambiguous, do not claim
- **Two-way email reply parsing** from clients into the message thread: confirm before claiming

---

## Positioning notes

- "Built for owner-run and small-to-medium service businesses." Don't position against enterprise FSM (ServiceTitan, etc.).
- "Squeegee-compatible CSV import" is a real differentiator for UK window cleaners migrating off Squeegee.
- Stripe payment links on invoices are real and worth highlighting; "get paid faster" claims are fair.
- Route optimisation works but is straight-line. Don't imply turn-by-turn or traffic-aware unless that ships.
- Mobile-friendly web plus a dedicated tech app: lead with the tech app for field-team copy, the web app for office copy.

---

## Competitor facts (verified July 2026)

Comparative claims must match these. Re-verify against each provider's public
materials before repeating them, and update the "last reviewed" date in
`ComparisonTable.astro` when you do.

- **Squeegee (squeeg.ee)**: HAS drag-drop reordering (Round Planner / Work Planner). HAS integrated weather forecast on the schedule. Does NOT advertise payroll or per-tech wage calculation. Does NOT advertise live arrival-time recalculation while dragging. Pricing from £15.83/mo + VAT, so do NOT claim Servogo is cheaper at entry.
- **Jobber**: Prices in USD only, no GBP (Core plan $49/mo, roughly £39+ before card fees). HAS two-way Xero/QuickBooks sync, CRM, marketing tools, review requests. Does NOT advertise a weather panel or live arrival-time recalculation.
- Phrase unverified competitor gaps as "not advertised", never as a flat "No".

---

## Source of truth

If you're writing copy and unsure whether a feature is real, check `frontend/src/features/docsContent.jsx` in the main repo. Anything documented there is shipped. Anything not documented there should be treated as not shipped.
