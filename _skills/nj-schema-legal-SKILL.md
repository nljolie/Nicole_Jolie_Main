---
name: nj-schema-legal
description: Single source of truth for the head section, schema, header, and footer on all legal pages of nicolejolie.com. Use this skill whenever any work touches any of the 11 legal pages. This skill contains the exact head section template, the correct schema blocks for legal pages, instructions for removing header.js and footer.js, and the complete list of all 11 legal pages with their unique values. Never rewrite a legal page without reading this skill first along with nj-header, nj-footer, and nj-schema-sitewide.
---

# SKILL: Legal Pages — nicolejolie.com
**Status: LOCKED**
**Last Updated: March 2026**
**Owner: Nicole Jolie — Be Socially Smashing, LLC**

---

## PURPOSE OF THIS SKILL

This skill governs all 11 legal pages on nicolejolie.com. It works together with three other skills:

- `nj-header-SKILL.md` — provides the locked inline header HTML
- `nj-footer-SKILL.md` — provides the locked inline footer HTML
- `nj-schema-sitewide-SKILL.md` — provides the locked sitewide graph block

Read all four skills before touching any legal page.

---

## THE 11 LEGAL PAGES

| File | Page Name |
|------|-----------|
| `affiliate-disclaimer.html` | Affiliate Disclaimer |
| `anti-class-action.html` | Anti Class Action Waiver |
| `dmca-policy.html` | DMCA Policy |
| `earnings-disclaimer.html` | Earnings Disclaimer |
| `gdpr-ccpa.html` | GDPR and CCPA Policy |
| `legal-disclaimer.html` | Legal Disclaimer |
| `opt-in-agreement.html` | Opt In Agreement |
| `privacy-policy.html` | Privacy Policy |
| `refund-chargeback-policy.html` | Refund and Chargeback Policy |
| `terms-of-service.html` | Terms of Service |
| `testimonial-disclaimer.html` | Testimonial Disclaimer |

---

## NON-NEGOTIABLE RULES FOR ALL LEGAL PAGES

1. Remove `<div id="global-header"></div>` and replace with inline header from nj-header skill
2. Remove `<div id="global-footer"></div>` and replace with inline footer from nj-footer skill
3. Remove `<script src="header.js"></script>` entirely
4. Remove `<script src="footer.js"></script>` entirely
5. Add favicon tag pointing to `/favicon.png` not S3
6. Add Google Tag script at the very top of head
7. Add sitewide graph block from nj-schema-sitewide skill
8. Add unique WebPage block for each page using values from this skill
9. Add canonical tag pointing to the page itself
10. Set robots to `index, follow` on every legal page
11. Do not change any of the legal text body content
12. Do not change the registered agent address inside the legal text
13. All legal link hrefs use root paths like `/privacy-policy.html` not `../privacy-policy.html`

---

## COMPLETE HEAD SECTION TEMPLATE FOR LEGAL PAGES

Replace everything from `<!DOCTYPE html>` through the closing `</style>` tag with this template. Fill in the bracketed values from the page inventory table below.

```html
<!DOCTYPE html>
<html lang="en">
<head>

  <!-- Google Tag -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-DN6ZNJJWP1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-DN6ZNJJWP1');
  </script>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[PAGE_TITLE]</title>
  <link rel="icon" type="image/png" href="/favicon.png">
  <meta name="description" content="[PAGE_DESCRIPTION]">
  <meta name="author" content="Nicole Jolie">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="[PAGE_URL]">

  <!-- SITEWIDE GRAPH — paste Block 1 from nj-schema-sitewide skill here -->

  <!-- WEBPAGE SCHEMA -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "[PAGE_URL]#page",
    "url": "[PAGE_URL]",
    "name": "[PAGE_TITLE]",
    "description": "[PAGE_DESCRIPTION]",
    "inLanguage": "en-US",
    "isPartOf": {
      "@id": "https://nicolejolie.com/#org"
    },
    "about": [PAGE_ABOUT],
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://nicolejolie.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "[PAGE_SHORT_NAME]",
          "item": "[PAGE_URL]"
        }
      ]
    }
  }
  </script>

  <link rel="stylesheet" href="/styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

</head>
```

---

## PAGE INVENTORY — FILL IN THESE VALUES PER PAGE

### affiliate-disclaimer.html
- PAGE_URL: `https://nicolejolie.com/affiliate-disclaimer.html`
- PAGE_TITLE: `Affiliate Disclaimer | Nicole Jolie`
- PAGE_DESCRIPTION: `Affiliate relationship disclosure for nicolejolie.com in compliance with FTC guidelines covering affiliate relationships with AI tools, educational platforms, and business technology.`
- PAGE_SHORT_NAME: `Affiliate Disclaimer`
- PAGE_ABOUT: `"affiliate disclaimer", "FTC disclosure", "affiliate relationships"`

### anti-class-action.html
- PAGE_URL: `https://nicolejolie.com/anti-class-action.html`
- PAGE_TITLE: `Anti Class Action Waiver | Nicole Jolie`
- PAGE_DESCRIPTION: `Anti class action waiver for nicolejolie.com requiring individual arbitration for all disputes with Be Socially Smashing, LLC.`
- PAGE_SHORT_NAME: `Anti Class Action Waiver`
- PAGE_ABOUT: `"anti class action waiver", "arbitration agreement", "dispute resolution"`

### dmca-policy.html
- PAGE_URL: `https://nicolejolie.com/dmca-policy.html`
- PAGE_TITLE: `DMCA Policy | Nicole Jolie`
- PAGE_DESCRIPTION: `DMCA copyright policy for nicolejolie.com including procedures for reporting copyright infringement to Be Socially Smashing, LLC.`
- PAGE_SHORT_NAME: `DMCA Policy`
- PAGE_ABOUT: `"DMCA policy", "copyright policy", "copyright infringement"`

### earnings-disclaimer.html
- PAGE_URL: `https://nicolejolie.com/earnings-disclaimer.html`
- PAGE_TITLE: `Earnings Disclaimer | Nicole Jolie`
- PAGE_DESCRIPTION: `Earnings disclaimer for nicolejolie.com. Results from AI visibility consulting are not guaranteed and vary by organization and implementation.`
- PAGE_SHORT_NAME: `Earnings Disclaimer`
- PAGE_ABOUT: `"earnings disclaimer", "results disclaimer", "income disclaimer"`

### gdpr-ccpa.html
- PAGE_URL: `https://nicolejolie.com/gdpr-ccpa.html`
- PAGE_TITLE: `GDPR and CCPA Privacy Policy | Nicole Jolie`
- PAGE_DESCRIPTION: `GDPR and CCPA compliance policy for nicolejolie.com covering rights of EU and California residents regarding personal data collection and use.`
- PAGE_SHORT_NAME: `GDPR and CCPA Policy`
- PAGE_ABOUT: `"GDPR", "CCPA", "data privacy rights", "personal data"`

### legal-disclaimer.html
- PAGE_URL: `https://nicolejolie.com/legal-disclaimer.html`
- PAGE_TITLE: `Legal Disclaimer | Nicole Jolie`
- PAGE_DESCRIPTION: `Legal disclaimer for nicolejolie.com and all content, consulting services, and recommendations provided by Be Socially Smashing, LLC.`
- PAGE_SHORT_NAME: `Legal Disclaimer`
- PAGE_ABOUT: `"legal disclaimer", "liability disclaimer"`

### opt-in-agreement.html
- PAGE_URL: `https://nicolejolie.com/opt-in-agreement.html`
- PAGE_TITLE: `Opt In Agreement | Nicole Jolie`
- PAGE_DESCRIPTION: `Opt in agreement for email communications from nicolejolie.com and Be Socially Smashing, LLC covering consent, frequency, and unsubscribe rights.`
- PAGE_SHORT_NAME: `Opt In Agreement`
- PAGE_ABOUT: `"opt in agreement", "email consent", "email communications"`

### privacy-policy.html
- PAGE_URL: `https://nicolejolie.com/privacy-policy.html`
- PAGE_TITLE: `Privacy Policy | Nicole Jolie`
- PAGE_DESCRIPTION: `Privacy policy for nicolejolie.com operated by Be Socially Smashing, LLC, covering data collection, use, storage, and protection of visitor information.`
- PAGE_SHORT_NAME: `Privacy Policy`
- PAGE_ABOUT: `"privacy policy", "data collection", "data protection"`

### refund-chargeback-policy.html
- PAGE_URL: `https://nicolejolie.com/refund-chargeback-policy.html`
- PAGE_TITLE: `Refund and Chargeback Policy | Nicole Jolie`
- PAGE_DESCRIPTION: `Refund and chargeback policy for consulting services and digital products sold through nicolejolie.com by Be Socially Smashing, LLC.`
- PAGE_SHORT_NAME: `Refund and Chargeback Policy`
- PAGE_ABOUT: `"refund policy", "chargeback policy"`

### terms-of-service.html
- PAGE_URL: `https://nicolejolie.com/terms-of-service.html`
- PAGE_TITLE: `Terms of Service | Nicole Jolie`
- PAGE_DESCRIPTION: `Terms of service for nicolejolie.com and all consulting services provided by Be Socially Smashing, LLC including acceptable use, intellectual property, and dispute resolution.`
- PAGE_SHORT_NAME: `Terms of Service`
- PAGE_ABOUT: `"terms of service", "legal terms", "acceptable use"`

### testimonial-disclaimer.html
- PAGE_URL: `https://nicolejolie.com/testimonial-disclaimer.html`
- PAGE_TITLE: `Testimonial Disclaimer | Nicole Jolie`
- PAGE_DESCRIPTION: `Testimonial disclaimer for nicolejolie.com disclosing that client results shown are not typical and individual outcomes from AI visibility consulting vary.`
- PAGE_SHORT_NAME: `Testimonial Disclaimer`
- PAGE_ABOUT: `"testimonial disclaimer", "results disclaimer"`

---

## BODY STRUCTURE FOR LEGAL PAGES

After the closing `</head>` tag, the body follows this structure:

```html
<body>

  <!-- HEADER — inline HTML from nj-header skill — paste full block here -->

  <section class="bg-cream" style="padding: 100px 0; min-height: 60vh;">
    <div class="container">
      <div style="background: white; padding: 40px; border-radius: 8px; border: 1px solid #ddd; max-width: 900px; margin: 0 auto;">

        <!-- LEGAL PAGE CONTENT GOES HERE — DO NOT MODIFY -->

      </div>
    </div>
  </section>

  <!-- FOOTER — inline HTML from nj-footer skill — paste full block here -->

</body>
</html>
```

---

## WHAT CLAUDE CODE SHOULD DO WITH THESE SKILLS

When given all four skills and told to update the legal pages, Claude Code should:

1. Read all four skill files from the `_skills` folder
2. For each of the 11 legal pages listed above:
   a. Replace the entire head section with the template from this skill, filled in with the correct page values
   b. Remove `<div id="global-header"></div>` and replace with inline header from nj-header skill
   c. Remove `<script src="header.js"></script>`
   d. Remove `<div id="global-footer"></div>` and replace with inline footer from nj-footer skill
   e. Remove `<script src="footer.js"></script>`
   f. Leave all legal body text completely untouched
3. Commit all changes with message: `Update legal pages: inline header, footer, schema`
4. Push to main branch

---

*Read this skill alongside nj-header, nj-footer, and nj-schema-sitewide before touching any legal page.*
