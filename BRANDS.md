# PrimeStay — Brand & Design System Guidelines

A comprehensive extraction of the brand identity, design tokens, typography, color palette, component specifications, and visual design language derived from the **PrimeStay** interface.

---

## 1. Brand Identity & Overview

| Attribute | Specification |
| :--- | :--- |
| **Brand Name** | **PrimeStay** |
| **Product Category** | Smart Property Management CRM / Real Estate SaaS |
| **Core Value Proposition** | *"Transform how you manage properties, leads, and clients with an intelligent CRM designed for real estate professionals."* |
| **Target Audience** | Property managers, real estate agencies, landlords, leasing agents, and hospitality/stay operators |
| **Brand Personality** | Intelligent, Serene, Professional, Trustworthy, Modern, Airy & Innovative |
| **Logo Design** | Solid cobalt/azure blue rounded square badge with a 4-pointed white sparkle/star glyph, accompanied by the bold geometric wordmark **PrimeStay** |

---

## 2. Color Palette & Tokens

### Primary & Accent Colors

```css
:root {
  /* Brand Primary */
  --color-primary: #1D64EC;          /* Vibrant Azure / Cobalt Blue (Primary CTA, Active states) */
  --color-primary-hover: #1551C6;    /* Darker blue for hover states */
  --color-primary-light: #EBF3FE;    /* Soft ice blue tint (Badges, active pills, light backgrounds) */
  --color-primary-subtle: #F0F6FF;   /* Ultra-light background tint */

  /* Neutral & Typography */
  --color-text-primary: #0F172A;     /* Deep Slate / Midnight Navy (Headings, bold body) */
  --color-text-secondary: #475569;   /* Muted Slate (Subheadings, body descriptions, nav links) */
  --color-text-tertiary: #94A3B8;    /* Placeholder, inactive icons, subtle timestamps */
  --color-text-inverse: #FFFFFF;     /* White text on primary buttons */

  /* Surfaces & Backgrounds */
  --color-bg-canvas: #FFFFFF;        /* Pure white base surface */
  --color-bg-subtle: #F8FAFC;        /* Light grey-blue for alternate section backgrounds */
  --color-bg-card: #FFFFFF;          /* Card background */
  --color-bg-sky-gradient-start: #C5E3FF; /* Ethereal sky blue gradient start */
  --color-bg-sky-gradient-end: #FFFFFF;   /* Canvas white gradient end */

  /* Borders & Dividers */
  --color-border-subtle: #E2E8F0;    /* Card outlines, divider lines */
  --color-border-focus: #1D64EC;     /* Input focus ring */

  /* Functional & Status Colors */
  --color-success: #10B981;          /* Positive growth metrics (+12%, +61%) */
  --color-danger: #EF4444;           /* Negative trend metrics (-1.40%) */
  --color-warning-star: #F59E0B;     /* Testimonial review stars (Amber Gold) */
  --color-accent-badge: #38BDF8;     /* Sky cyan accent for badges */
}
```

### Color Swatches Reference Table

| Name | Hex / Code | Usage |
| :--- | :--- | :--- |
| **Azure Blue** | `#1D64EC` | Primary CTAs, active switch, logo mark, key data highlights |
| **Deep Slate** | `#0F172A` | Primary headings, feature titles, high-emphasis text |
| **Muted Slate** | `#475569` | Body copy, secondary descriptions, navigation links |
| **Ice Blue** | `#EBF3FE` | Badge pill backgrounds, AI assistant card backdrop |
| **Sky Tint** | `#C5E3FF` | Top hero atmosphere gradient / sky background |
| **Pure White** | `#FFFFFF` | Hero dashboard surface, pricing cards, modal backgrounds |
| **Success Green**| `#10B981` | Positive metric growth tags |
| **Gold Amber** | `#F59E0B` | 5-star rating icons |
| **Border Slate** | `#E2E8F0` | Card borders, FAQ accordions, tier container outlines |

---

## 3. Typography Hierarchy

PrimeStay utilizes a high-contrast pairing between an **Editorial Serif / Italic Serif** for display emphasis and a **Geometric Humanist Sans-Serif** for clarity, structure, and interface elements.

### Font Families
- **Display Serif**: *Instrument Serif*, *Playfair Display* (Italic), or *Cormorant Garamond*
- **Body & UI Sans**: *Inter*, *Plus Jakarta Sans*, or *Outfit*

### Type Scale & Hierarchy

| Element | Style / Weight | Size (Desktop) | Sample Text / Application |
| :--- | :--- | :--- | :--- |
| **Hero Main Heading** | Serif Italic + Bold Sans (600/700) | `48px` – `56px` (`3rem` – `3.5rem`) | *Smart Property* Management |
| **Section Headings (H2)**| Serif Italic + SemiBold Sans (600)| `36px` – `42px` (`2.25rem` – `2.625rem`) | *Choose* Your Plan / *Simplifying the* Property Management |
| **Subheadings / Lead** | Regular Sans (400/500) | `16px` – `18px` (`1rem` – `1.125rem`) | "Transform how you manage properties, leads, and clients..." |
| **Eyebrow / Section Pill**| Medium Sans (500) | `12px` – `13px` (`0.75rem` – `0.8125rem`) | `✦ Core Features`, `✦ Pricing`, `✦ Testimonials`, `✦ FAQs` |
| **Card / Feature Titles** | SemiBold Sans (600) | `18px` – `20px` (`1.125rem` – `1.25rem`) | "Professional", "Enterprise", "Welcome, Sam!" |
| **Pricing Figures** | Bold Sans (700) | `32px` – `38px` (`2rem` – `2.375rem`) | "$29 /month", "$49 /month" |
| **Body / Feature Items**| Regular / Medium Sans (400/500) | `14px` – `15px` (`0.875rem` – `0.9375rem`) | Feature lists, FAQ answers, testimonials quote |
| **Micro Labels / Captions**| Medium Sans (500) | `11px` – `12px` (`0.6875rem` – `0.75rem`) | "+12% from last month", "Save 20%" |

---

## 4. Visual Elements, Imagery & Aesthetic Direction

### 1. Atmosphere & Hero Worldview
- **Sky & Nature Motif**: Fresh, sunny daylight blue sky filled with soft white cumulus clouds.
- **Organic Accents**: Floating monarch butterflies, lush green meadow grass, and colorful wildflowers framing the bottom of the hero scene.
- **Soft Seamless Fade**: The sky and meadow hero background softly blends downwards via a gradient mask / white ambient haze into the crisp white SaaS sections.

### 2. UI Elevation & Card Aesthetics
- **Floating Glass & Cloud Shadows**: Cards possess subtle 1px border (`#E2E8F0` or `rgba(255,255,255,0.7)`), rounded corners (`16px` – `24px`), and diffused soft drop shadows:
  ```css
  box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.08), 0 0 1px 1px rgba(15, 23, 42, 0.04);
  ```
- **Corner Radii**:
  - Buttons & Eyebrow Badges: `9999px` (Fully rounded pill)
  - Cards & Dashboard Containers: `16px` – `20px`
  - Toggle Switches & Dropdowns: `8px` – `12px`

---

## 5. UI Components & Design System Patterns

### 1. Navigation Bar
- Clean horizontal header bar.
- **Left**: Logo icon + "PrimeStay" wordmark.
- **Center**: Nav links (`Home`, `About`, `Features`, `Pricing`, `Blog`) in `--color-text-secondary` with smooth hover transitions.
- **Right**: Rounded pill button `Get Started` (`--color-text-primary` outline or light background).

### 2. Buttons
- **Primary CTA**: Solid Azure Blue (`#1D64EC`), white bold text, pill radius (`rounded-full`), smooth scale/glow on hover.
  - *Example*: `Get Started`
- **Secondary CTA**: Clean white surface with subtle outline (`#E2E8F0`), dark text (`#0F172A`).
  - *Example*: `Book A Demo`

### 3. Eyebrow Badge Pill
- Pill container with soft blue border or subtle white translucent glass, containing a sparkle/spark icon (`✦`) and category title:
  - `✦ New Trusted by 400,00+ Professionals`
  - `✦ Core Features`
  - `✦ Pricing`
  - `✦ Testimonials`
  - `✦ FAQs`

### 4. Dashboard Mockup Card
- Multi-column SaaS dashboard UI inside a floating white rounded frame:
  - **Sidebar**: Quick navigation (`Dashboard`, `Properties`, `Tenants`, `Leases`, `Payments`, `Maintenance`, `Messages`, `Reports`, `Settings`).
  - **Top Metric Cards**:
    - Total Properties (`5`, `+12% from last month`)
    - Total Tenants (`5`, `+11% from last month`)
    - Rental Income (`$10,000`, `+61% from last month`)
    - Pending Payments (`$10,000`, `-1.40% from last month`)
  - **Financial Overview Area**: Dual-line trend chart showing Revenue & Collected amounts.
  - **Occupancy Radial**: Donut chart displaying `92.7% Occupied`.
  - **AI Assistant Panel**: Dedicated floating card with AI icon and contextual actionable prompts (*"3 properties have maintenance requests older than 48 hours"*, *"5 leases expire in the next 30 days"*).

### 5. Social Proof / Logo Marquee
- Centered header: *"Trusted by customer and companies"* in muted text.
- Grayscale / monochrome partner logos in horizontal flex row:
  - **Airbnb**, **Toggl**, **Booking.com**, **Airwallex**, **Trello**, **Uber**

### 6. Pricing Component
- **Billing Switcher**: Interactive pill toggle between `Monthly` and `Yearly` with a `Save 20%` highlight badge.
- **Tier Cards**:
  - **Professional Tier ($29/month)**: Marked with `Most Popular` badge, filled primary CTA button.
  - **Enterprise Tier ($49/month)**: Outlined CTA button.
  - **Feature Checklists**: Distinctive circular checkmark icons (`✓`) followed by value items (*"Understanding Your Business Context"*, *"Insights Into Your Business Environment"*, *"Overview of Your Business Landscape"*, etc.).

### 7. Testimonial Section
- Center-aligned editorial layout:
  - Section Title: *Trusted By* Teams Worldwide
  - Large pull-quote body text.
  - Author meta: Name (`Kelly Williams`), Role (`Head of Design, Layers`).
  - Rating: 5 gold stars (`★★★★★`).
  - Carousel pagination dots and stacked customer avatar photos.

### 8. FAQ Accordion
- Clean expandable list items with light borders and a trailing `+` / `−` accordion expander button.
- Question titles in bold sans-serif text with generous touch padding.

---

## 6. Voice, Tone & Copywriting

- **Empowering & Frictionless**: Focus on effortless automation, speed, intelligence, and modern management.
- **Professional yet Accessible**: Sophisticated language suitable for enterprise and independent property managers alike.
- **AI-Enhanced Narrative**: Positions AI as an intuitive co-pilot for proactive property maintenance, tenant communication, and financial tracking.
