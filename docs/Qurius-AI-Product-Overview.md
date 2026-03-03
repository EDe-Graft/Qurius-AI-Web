Qurius AI – Product & Technical Overview
=======================================

1. Executive Summary
--------------------

Qurius AI is an AI‑powered website assistant designed for SaaS companies. It connects to your documentation, help center, and product pages to provide instant, accurate answers to user questions, deflect repetitive support tickets, and guide new users through your product—directly inside your SaaS app or marketing site.

The platform combines:

- **Embedded AI assistant interface**: A chat‑style assistant that can be embedded into SaaS dashboards and marketing sites.
- **Admin dashboard**: For FAQ and content management, branding/theme control, analytics, and live testing.
- **Backend services**: For crawling, indexing, semantic search, AI response generation, and lead management.
- **Billing & multi‑tenancy**:
  - Stripe‑based subscriptions (Free, Starter, Growth, Pro)
  - Self‑serve upgrades/downgrades and cancellation via Stripe Customer Portal
  - Multi‑tenant data isolation in Supabase with `ON DELETE CASCADE` across company‑scoped tables
- **Operational tooling**: Message usage tracking, limit notifications, crawl monitoring, and observability.

Primary goals for SaaS teams:

- **Answer ~80–85% of common questions automatically**
- **Reduce** support tickets, live chat volume, and onboarding friction
- **Increase product adoption** through contextual in‑product guidance
- Provide **clear analytics** on assistant performance, usage, and gaps

2. Product Positioning & Target Audience
----------------------------------------

### 2.1 Target Customers

**Primary:**

- B2B and B2C SaaS companies with customer‑facing web apps or dashboards

**Secondary:**

- SaaS‑like platforms (marketplaces, tools, membership platforms) with recurring customer interactions

**Primary roles:**

- Heads of Customer Support / Customer Experience
- Product Managers / Growth teams
- Founders and early‑stage SaaS builders

### 2.2 Core Value Proposition

**AI Website Assistant for SaaS**

- Answer up to 80–85% of routine questions automatically
- Reduce support load and free human agents for high‑value cases
- Provide in‑product guidance during trials and onboarding (feature tours, FAQs, pricing questions, “how do I…?”)

**Analytics & Insights**

- Understand what users ask, in which contexts
- Identify missing or confusing docs
- Measure deflected tickets and user engagement with the assistant

### 2.3 Key Outcomes

- **Lower** support ticket volume and live chat time
- **Faster** user onboarding and self‑serve support
- **Better adoption** through contextual, always‑available help
- **Measurable impact** via analytics on questions, answers, ratings, and usage

3. High-Level Features
----------------------

### 3.1 AI Assistant Interface

Embeddable AI assistant for:

- SaaS app dashboards
- Marketing websites (home, pricing, docs, onboarding flows)

Key capabilities:

- Conversational Q&A about:
  - Product features, pricing, billing
  - Onboarding and setup
  - Troubleshooting and “how do I…?” flows
- Contextual responses based on company‑specific content:
  - FAQs
  - Docs and help center pages
  - Crawled website content (Growth/Pro)
- **Multi‑language support** (Growth & Pro):
  - Assistant can answer in multiple languages
  - Pro adds advanced multi‑language analytics and templates
- **Live testing**:
  - Admins can open a **Live Test** modal in the dashboard to talk to their assistant with the current configuration (available on all tiers).
- **Responsive + brandable UI**:
  - Floating bubble / panel on desktop & mobile
  - Light/dark theme aware
  - Colors follow per‑company theme

### 3.2 FAQ & Knowledge Management

Admins can:

- Import FAQs in bulk
- Add or edit Q&A pairs manually
- Approve, reject, or edit AI‑generated FAQs from crawled content (Growth/Pro, via content processor)

Under the hood:

- **Vector embeddings** (via Jina) for semantic search over FAQs and content chunks
- **AI fallback** via OpenRouter when no strong FAQ match exists
- **Confidence scoring** to decide between:
  - Deterministic FAQ answer
  - Generative AI fallback

### 3.3 Website Crawling & Content Processing

Content ingestion options:

- Growth & Pro: Crawl a company’s public website (docs, help center, marketing site) and extract content
- Pro: Unlimited crawling; Growth: limited crawling (up to a configured page limit, conceptually “up to 6 pages” as described in marketing copy)

Output of processing:

- Chunked text blocks stored per company (`company_content_chunks`)
- Candidate FAQs from crawled content (AI‑generated)

Reachability checks before crawling:

- Performs an HTTP request to verify that the target site is reachable
- Returns structured error reasons:
  - `http_status` with the failing status code
  - `network_error` for DNS/timeouts/network errors

### 3.4 Theming & Branding

Per‑company theme configuration:

- `primaryColor`
- `backgroundColor`
- `textColor`

Entry points:

- **Onboarding – Customization step**
- **Admin dashboard – Widget Settings page**

Theme is stored on the `companies` record and used by:

- Front‑end assistant UI (embedded assistant)
- Admin demo/live‑test experiences

### 3.5 Analytics & Admin Dashboard

Admin dashboard includes:

- **Company dashboard** (for company admins):
  - Key stats: views, interactions, messages, sessions
  - Assistant performance cards:
    - Average rating
    - Content match rate vs. AI fallback rate
  - For Growth/Pro:
    - Lead analytics (lead counts, conversion rate, etc.)
  - **Last active** timestamp automatically updated when the admin dashboard is loaded.

- **Super admin dashboard** (Qurius internal):
  - List of all companies, plans, activity
  - Aggregated usage and revenue reports

Analytics focus:

- Conversations: total, per day, per company
- FAQ vs. AI fallback ratios
- Ratings and feedback
- Lead conversions (Growth/Pro)

### 3.6 Pricing & Plans (Feature Overview)

Four main plans:

- **Free** – 500 messages/month
- **Starter** – 10,000 messages/month
- **Growth** – 50,000 messages/month (Most popular)
- **Pro** – Unlimited messages/month

All plans include:

- Embedded assistant interface
- Admin dashboard
- Basic customization (colors, theme)
- FAQ management (manual + import)
- Live AI testing from the admin dashboard

Additional capabilities expand with each tier (see Section 8).

4. Onboarding & User Journey
----------------------------

### 4.1 High-Level Onboarding Flow

**Step 1 – Company Info**

Collect:

- Company name
- Website URL
- Email (admin/contact)
- Industry (**required**)
- Location (**required**, with Google Places autocomplete)
- Short description

Client‑side validation:

- Email format
- Website URL normalization (ensures `https://` and valid URL)
- Required fields: name, email, website, industry, location

Backend preflight validation: `POST /api/companies/validate-onboarding`

- Validates and normalizes all core fields (via `validateAndNormalizeCompanyInput`)
- Ensures:
  - Website is a valid, public URL (no `localhost` or private IP)
  - Email is unique in the `companies` table (checks both `admin_email` and `contact_email`)
- Returns:
  - Normalized company data (to reuse for subsequent steps), or
  - Structured validation errors

**Step 2 – Customization**

- Configure initial theme:
  - Primary color (native color picker)
  - Quick presets (Blue, Green, Purple, Orange, Red, Teal)
- Live preview:
  - Mini chat UI preview showing avatar, bubbles, and input area
- Theme is stored in onboarding state (`themeData`) and later persisted to the `companies` table when the company is created.

**Step 3 – Payment & Plan Selection**

- Choose plan: Free, Starter, Growth, or Pro.

For **Free**:

- Frontend directly calls `CompanyService.createCompany` (free signup endpoint)
- Backend:
  - Uses `validateAndNormalizeCompanyInput`
  - Persists company with:
    - Normalized fields (name, email, website, industry, location, description)
    - Theme (JSONB in Supabase)
    - `plan = 'free'`
  - Sends:
    - Welcome email (via Resend)
    - Supabase password setup email

For **Paid** (Starter, Growth, Pro):

- Frontend:
  - Stores the pending company data (including theme) in `sessionStorage`
  - Calls `POST /api/payments/create-checkout-session` with:
    - `companyId` (if upgrading an existing Free company)
    - `companyName`, `customerEmail`, `planId`
    - `theme`, `location`, `industry`, `website`, `description`
  - Redirects to Stripe Checkout using the returned `url`.

- Stripe checkout session metadata includes:
  - `company_id` (for upgrades from Free)
  - `company_name`
  - `plan_id`
  - `customer_email`
  - `location`, `industry`, `website`, `description`
  - `theme` as a JSON string

**Step 4 – Completion**

After either:

- Free signup completes, or
- Stripe webhook finishes processing the paid signup,

the user sees a completion step with:

- Confirmation of plan and setup
- Link to the admin dashboard
- High‑level integration instructions (script snippet, where to paste it)

### 4.2 Stripe Payment & Company Creation

**Free plan flow**

- Frontend: calls `/api/companies` (free signup)
- Backend:
  - Validates via `validateAndNormalizeCompanyInput`
  - Creates Supabase Auth user and company
  - Links `company_id` in user metadata
  - Sends welcome + Supabase password setup emails

**Paid plan flow (new signup – no existing company)**:

1. Frontend → `/api/payments/create-checkout-session`
2. User completes Stripe Checkout.
3. Stripe sends `checkout.session.completed` webhook:
   - Backend:
     - Extracts metadata
     - Runs `validateAndNormalizeCompanyInput`
     - Creates Auth user (Supabase)
     - Creates new company:
       - Stores theme
       - Stores Stripe customer & subscription IDs
       - Sets `plan = planId`, `subscription_status = 'active'`, `subscription_end_date` (initially ~30 days from now)
     - Updates Auth user with `company_id`
     - Sends:
       - Welcome email (Resend)
       - Admin notification email with plan and company details

**Paid plan flow (upgrade from Free)**:

- `create-checkout-session` receives an existing `companyId` and includes it in Stripe session metadata as `company_id`.
- On `checkout.session.completed`:
  - Backend:
    - Detects `existingCompanyId`
    - Updates that company instead of creating a new one:
      - `plan = planId` (Starter, Growth, or Pro)
      - `stripe_customer_id = session.customer`
      - `stripe_subscription_id = session.subscription`
      - `subscription_status = 'active'`
      - Approximate `subscription_end_date` (later corrected by `customer.subscription.updated`)
    - Does **not** send a second welcome email or create a second Auth user.

5. Architecture & Technical Design
----------------------------------

### 5.1 High-Level Architecture

**Frontend** – React 18 + TypeScript + Vite

- Public pages:
  - Landing, Demo, Docs, About, Contact, Onboarding
- Admin pages:
  - Company dashboard
  - Analytics
  - FAQ management
  - Widget/assistant theme settings
  - Live Test
- Contexts:
  - `AuthContext` – authentication, session, user roles
  - `LanguageContext` – i18n and language switching
  - `CompanyDataContext` – loads demo company data for public demo/landing

**Backend** – Node.js + Express

- REST endpoints under `/api/*` grouped into:
  - Company management (`/api/companies/*`)
  - FAQ management (`/api/faqs/*`)
  - Crawler & automation (`/api/crawler/*`, `/api/automation/*`)
  - Payments & Stripe webhooks (`/api/payments/*`)
  - Notifications and leads
  - Auth helpers (super admin, resend setup email)

**Database** – Supabase (PostgreSQL)

- Key tables:
  - `companies` – core company profile, theme, plan, Stripe fields, `last_active`
  - `faqs` – FAQ entries linked to `company_id`
  - `company_content_chunks` – crawled content chunks for semantic search and FAQ generation
  - `messages` – conversation logs
  - `notifications`, `leads`, `crawl_sessions`, `widget_analytics`, etc.
- Foreign key strategy:
  - `ON DELETE CASCADE` from dependent tables to `companies.id` to avoid orphans and simplify company deletion.

**Vector & AI layer**

- `pgvector` extension for semantic search over FAQs and chunks
- Jina embeddings for vectorization
- AI fallback via OpenRouter (GPT‑like models) for generative responses

**Email**

- Transactional emails (welcome, admin notifications, usage limits, FAQ generation complete, support alerts) via **Resend**
- Supabase Auth for password reset and setup emails, wired to a custom HTML template that matches Qurius AI branding

### 5.2 Important Backend Utilities

- `validateAndNormalizeCompanyInput(input)`:
  - Ensures:
    - Non‑empty, well‑formed `name`, `email`, `website`, `industry`, `location`
  - Normalizes:
    - Website URL (adds protocol, validates URL, blocks localhost/private IPs)
  - Throws `ValidationError` with a combined human‑readable message if invalid.

- `checkAuthUserExists(email)`:
  - Calls Supabase REST API on `companies` table:
    - `or=(admin_email.eq.email,contact_email.eq.email)`
  - Returns `true` if any company already uses the email, used to prevent duplicate signups.

- `createCompany(companyData, userId)`:
  - Inserts a company into Supabase with theme, plan, and subscription fields.
  - Links the company to an Auth user via a foreign key or metadata.
  - Returns `{ companyId, companyName, email, plan, widgetKey? }`.

6. Data Model (Simplified)
--------------------------

### 6.1 Companies

Key conceptual fields:

- `id`: UUID
- `name`: string
- `website`: normalized URL
- `domain`: derived from website
- `industry`: string
- `location`: string
- `description`: string
- `theme`: JSONB
  - `primaryColor`
  - `backgroundColor`
  - `textColor`
- `plan`: `'free' | 'starter' | 'growth' | 'pro'`
- `logo_url`: string (optional)
- `status`: `'active' | 'suspended' | ...`
- `widget_key_hash`: hashed widget key for secure embed validation

Stripe and subscription fields:

- `stripe_customer_id`
- `stripe_subscription_id`
- `subscription_status`
- `subscription_end_date`

Activity:

- `created_at`
- `last_active` (updated whenever a company admin loads the dashboard)

### 6.2 FAQs

- `id`: UUID
- `company_id`: FK → `companies.id` (ON DELETE CASCADE)
- `question`: string
- `answer`: string
- `source`: e.g. `manual`, `generated`

### 6.3 Content Chunks

- `id`: UUID
- `company_id`: FK → `companies.id`
- `url`: source page
- `content`: text chunk

Used for:

- Generating candidate FAQs from crawled content
- Direct semantic search backing assistant responses

7. Integration & Embedding
--------------------------

### 7.1 Website Assistant Script

Typical production integration:

```html
<script
  src="https://qurius.app/iframe-embed.js"
  data-company="Your SaaS Product Name"
  data-id="your-company-id"
  data-key="your-public-api-key"
  data-plan="pro"
  data-theme="light"
></script>
```

The script:

- Detects environment (localhost vs production)
- Creates a floating iframe container for the assistant
- Loads `wix-widget-iframe-modular.html` (assistant UI) from the Qurius frontend
- Handles:
  - Responsive layout (full‑screen on mobile, docked panel on desktop)
  - Minimize/expand state via `postMessage`
  - Click overlay for minimized state (only the button area remains clickable)

### 7.2 Demo & Static Pages

**Demo page**

- Shows the assistant embedded into a mock SaaS dashboard
- Uses `quriusData` from `CompanyDataContext` as the company configuration

**Docs page**

- Explains:
  - Assistant integration steps
  - Theme customization
  - High‑level API surface (planned public REST API; actual integrations currently via internal REST + frontend services)

8. Plans, Limits, & Billing
---------------------------

### 8.1 Pricing Plans & Features

**Free Plan – $0**

- 500 messages/month
- Basic customization
- Email support
- Standard FAQ templates

**Starter Plan – $29/month**

- 10,000 messages/month
- Advanced customization
- Live AI testing (through the admin dashboard)
- Core analytics dashboard
- Custom FAQ import

**Growth Plan – $59/month** (Most popular)

- 50,000 messages/month
- Advanced analytics
- Multi‑language support
- Lead generation & lead management tools
- Limited crawling (e.g. up to ~6 pages) for automatic FAQ/content ingestion

**Pro Plan – $99/month**

- Unlimited messages
- Unlimited web crawling
- Advanced analytics (including multi‑language analytics)
- White‑label options
- Custom integrations
- Lead generation and advanced lead analytics
- Live AI testing

### 8.2 Message Limits & Notifications

Per company, the system tracks:

- Messages used within the current billing period
- Plan‑based message limit
- Whether the current usage is within allowed limits

When limits are approached or reached:

- Backend can surface usage data via:
  - Message usage endpoints
  - Analytics dashboard (for admins)
- A `MessageLimitReachedEmailTemplate` is used to notify admins:
  - Describes current plan and limit
  - Suggests upgrades (Starter, Growth, Pro) with their benefits

### 8.3 Billing & Self‑Serve Management

- **Upgrades from Free**:
  - Handled via the in‑app upgrade flow (pricing cards and checkout)
  - Uses Stripe Checkout and `checkout.session.completed` webhook

- **Upgrades/downgrades/cancellations for paid tiers**:
  - Handled via Stripe Customer Portal:
    - The **Manage Billing** quick action in the admin dashboard opens the Stripe portal.
    - Users can upgrade/downgrade between Starter/Growth/Pro or cancel subscriptions.
  - Stripe webhooks (`customer.subscription.updated` / `deleted`) update:
    - `subscription_status`
    - `subscription_end_date`
    - `plan` (mapped from Stripe price IDs via `PRICING_PLANS`)

9. Security, Privacy, & Operations
----------------------------------

### 9.1 Authentication & Authorization

**AuthProvider (client)**:

- Manages current user session
- Exposes convenience methods like `signIn`, `signOut`

**ProtectedRoute**:

- Wraps admin routes to enforce authentication

**User roles**:

- `super_admin`:
  - Can view all companies and global analytics
  - Access to super admin dashboards and automation controls
- `company_admin`:
  - Restricted to their own company
  - Access to company dashboard, FAQs, leads (Growth/Pro), content processing (Growth/Pro)

### 9.2 Data Isolation

- Multi‑tenant design with `company_id` on all relevant tables
- All foreign keys from child tables to `companies.id` are configured with `ON DELETE CASCADE`:
  - `faqs`
  - `company_content_chunks`
  - `messages`
  - `notifications`
  - `leads`
  - `crawl_sessions`
  - `widget_analytics`

When a company is deleted:

- All related data is automatically removed
- Prevents foreign key violations and orphaned records

### 9.3 Email & Password Handling

- **Welcome emails**:
  - Sent via Resend using branded, dark‑themed HTML templates
  - Include plan name and onboarding steps

- **Password setup & reset**:
  - Managed by Supabase Auth
  - Uses a custom Supabase HTML template (`supabaseEmailTemplate.html`) styled to match Qurius branding
  - A dedicated endpoint (`/api/auth/resend-setup-email`) supports resending setup emails when users can’t find the original.

10. Glossary & Concepts
------------------------

- **AI Assistant / Website Assistant**: The embedded, chat‑like interface that answers user questions inside your SaaS dashboard or site.
- **FAQ**: Structured Q&A pairs used for fast, deterministic answers to common questions.
- **Semantic Search**: Vector‑based search that matches user questions to content based on meaning rather than exact wording.
- **AI Fallback**: When no FAQ or content chunk matches confidently, the system calls a large language model to generate an answer.
- **Theme**: Per‑company visual styling (colors) applied to the assistant UI and related experiences.
- **Company**: A tenant in the multi‑tenant system; typically a single SaaS product or brand.
- **Plan**: Pricing tier (`free`, `starter`, `growth`, `pro`) that controls limits and feature access.
- **Live Test**: An internal admin tool that lets company admins converse with their assistant configuration directly from the dashboard.
- **Content Processor / Crawler**: The subsystem that fetches website content, chunks it, and generates candidate FAQs for review (Growth/Pro).
- **Lead**: A captured contact or opportunity generated from assistant conversations, with analytics and management tools (Growth/Pro).

