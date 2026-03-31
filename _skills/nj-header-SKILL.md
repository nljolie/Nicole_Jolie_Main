---
name: nj-header
description: Single source of truth for the header and navigation on nicolejolie.com. Use this skill whenever any work touches the header or nav of nicolejolie.com — including reading, editing, rebuilding, dropping into any HTML page, updating nav links, changing the CTA button, or modifying any header CSS. Never recreate or modify the header without reading this skill first. This skill contains the locked inline HTML, all nav links, brand colors, and placement instructions. The header must never be loaded via header.js or any external JS file. This header is identical on every single page of the site including index.html, legal pages, and publication pages.
---

# SKILL: Header — nicolejolie.com
**Status: LOCKED**
**Last Updated: March 2026**
**Owner: Nicole Jolie — Be Socially Smashing, LLC**

---

## PURPOSE OF THIS SKILL

This header is identical on every page of the site. There is no separate header for index.html, legal pages, or publication pages. Every single page uses this exact same header.

The header must always:
- Be printed as inline HTML directly on the page. No header.js. No external JS file.
- Be identical across every page on the site.
- Use the confirmed brand colors listed below.
- Be fully responsive on phones, tablets, laptops, and desktops.

---

## NON-NEGOTIABLE RULES

1. Do not load the header via header.js or any JS file. It must be printed directly in the HTML.
2. Do not change nav link URLs without updating this skill first.
3. Do not change brand colors without updating this skill first.
4. Do not remove the Work With Nicole CTA button.
5. Do not use em-dashes, hyphens in content text, or quotation marks in header copy.
6. The logo text always links to `/index.html` on every page.
7. This header replaces every existing nav on every page including the index.html glass-nav.
8. Remove any reference to header.js when applying this skill.

---

## BRAND COLORS

| Role | Value |
|------|-------|
| Header background | `#000421` |
| Logo and nav text | `#ffffff` |
| CTA button background | `#923f26` |
| CTA button text | `#ffffff` |
| CTA button hover | `#7a3320` |

---

## NAV LINKS — LOCKED

| Label | URL | Type |
|-------|-----|------|
| AI Biz Affects | `/#how-ai-affects-you` | Regular link |
| Free AI List | `/checklist_47.html` | Regular link |
| Publications | `/publications/index.html` | Regular link |
| Work With Nicole | `/work_with_nicole.html` | CTA button, rust background |

---

## COMPLETE LOCKED HEADER HTML

Place this as the very first element inside `<body>` on every page. Remove any existing nav or header element before pasting this.

```html
<!-- HEADER — inline HTML for AI/LLM crawlability — do not replace with header.js reference -->
<header style="background-color: #000421; padding: 20px 0; position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;">
  <div style="display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 0 20px;">

    <!-- LOGO -->
    <a href="/index.html" style="color: white; text-decoration: none; font-weight: 900; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 18px; letter-spacing: 1px; text-transform: uppercase;">
      Nicole Jolie
    </a>

    <!-- NAV -->
    <nav>
      <ul style="list-style: none; display: flex; gap: 24px; align-items: center; margin: 0; padding: 0;">
        <li>
          <a href="/#how-ai-affects-you" style="color: white; text-decoration: none; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 14px; font-weight: 600;">
            AI Biz Affects
          </a>
        </li>
        <li>
          <a href="/checklist_47.html" style="color: white; text-decoration: none; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 14px; font-weight: 600;">
            Free AI List
          </a>
        </li>
        <li>
          <a href="/publications/index.html" style="color: white; text-decoration: none; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 14px; font-weight: 600;">
            Publications
          </a>
        </li>
        <li>
          <a href="/work_with_nicole.html" style="display: inline-block; background-color: #923f26; color: white; border: none; padding: 10px 20px; cursor: pointer; border-radius: 50px; font-weight: 700; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 14px; text-decoration: none;">
            Work With Nicole
          </a>
        </li>
      </ul>
    </nav>

  </div>
</header>

<!-- SPACER — pushes page content below fixed header -->
<div style="height: 72px;"></div>
```

---

## MOBILE NOTE

On screens below 768px the nav items may wrap or overflow. A mobile hamburger menu is not yet built. When added, update this skill first before touching any page.

---

## PAGES THAT NEED THIS HEADER

Every HTML file in the repo gets this header. This includes:

**Root pages:**
- index.html
- work_with_nicole.html
- checklist_47.html
- affiliate-disclaimer.html
- anti-class-action.html
- dmca-policy.html
- earnings-disclaimer.html
- gdpr-ccpa.html
- legal-disclaimer.html
- opt-in-agreement.html
- privacy-policy.html
- refund-chargeback-policy.html
- terms-of-service.html
- testimonial-disclaimer.html
- confirmation-authority.html

**Publications folder:**
- publications/index.html
- publications/agentic-common-sense-audit.html
- publications/agentic-recommendability-protocol.html
- publications/fulfillment-governance-audit.html
- publications/manus-ai-technical-audit.html
- publications/manus-technical-strategy.html
- publications/meta-manus-agentic-reality.html
- publications/silent-exclusion-manus-meta.html
- publications/singapore-manus-agentic-trust.html
- publications/sovereign-execution-layer.html

---

## NOTE FOR CLAUDE CODE

When applying this header to all pages:
1. Read this skill file
2. For every HTML file in the repo:
   a. Remove the existing nav or header element entirely
   b. Remove any reference to header.js
   c. Place the locked header HTML as the first element inside `<body>`
3. Do not change any other content on the page
4. Commit with message: Update all pages with locked sitewide header
5. Push to main

---

*Change the header here first. Then carry it to every page.*
