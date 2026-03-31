---
name: nj-schema-publications
description: Single source of truth for the head section, schema, header, and footer on all publication pages of nicolejolie.com. Use this skill whenever any work touches any page inside the /publications/ folder. This skill contains the exact head section template, the correct ScholarlyArticle schema blocks, citation meta tags, instructions for adding the inline header and footer, and the complete list of all publication pages with their unique values. Never rewrite a publication page without reading this skill first along with nj-header, nj-footer, and nj-schema-sitewide.
---

# SKILL: Publication Pages — nicolejolie.com/publications/
**Status: LOCKED**
**Last Updated: March 2026**
**Owner: Nicole Jolie — Be Socially Smashing, LLC**

---

## PURPOSE OF THIS SKILL

This skill governs all publication pages inside the `/publications/` folder on nicolejolie.com. It works together with three other skills:

- `nj-header-SKILL.md` — provides the locked inline header HTML
- `nj-footer-SKILL.md` — provides the locked inline footer HTML
- `nj-schema-sitewide-SKILL.md` — provides the locked sitewide graph block

Read all four skills before touching any publication page.

---

## PUBLICATION PAGES

| File | Location |
|------|----------|
| `agentic-common-sense-audit.html` | `/publications/` |
| `agentic-recommendability-protocol.html` | `/publications/` |
| `fulfillment-governance-audit.html` | `/publications/` |
| `manus-ai-technical-audit.html` | `/publications/` |
| `manus-technical-strategy.html` | `/publications/` |
| `meta-manus-agentic-reality.html` | `/publications/` |
| `silent-exclusion-manus-meta.html` | `/publications/` |
| `singapore-manus-agentic-trust.html` | `/publications/` |
| `sovereign-execution-layer.html` | `/publications/` |
| `index.html` | `/publications/` |

---

## NON-NEGOTIABLE RULES FOR ALL PUBLICATION PAGES

1. All legal page links use root paths starting with `/` like `/privacy-policy.html`. Never use `../` relative paths.
2. Add Google Tag script at the very top of head
3. Add favicon tag pointing to `/favicon.png`
4. Add canonical tag pointing to the full URL of the page
5. Set robots to `index, follow`
6. Add sitewide graph block from nj-schema-sitewide skill
7. Add unique WebPage block for each page
8. Add ScholarlyArticle block with correct @id linking to the person entity
9. Keep all citation meta tags. They are required for Google Scholar indexing.
10. jobTitle in all schema must say "AI Visibility Strategist" not "AI Search Strategist"
11. Do not change any article body content
12. Do not add a header.js or footer.js reference. Header and footer must be inline HTML.
13. The inline header goes as the first element inside `<body>`
14. The inline footer goes as the last element inside `<body>` before `</body>`
15. Remove any existing hardcoded footer HTML and replace with the nj-footer skill inline footer
16. Do not expose any email address in the footer

---

## COMPLETE HEAD SECTION TEMPLATE FOR PUBLICATION PAGES

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

  <!-- Citation meta tags for Google Scholar indexing -->
  <meta name="citation_title" content="[CITATION_TITLE]">
  <meta name="citation_author" content="Nicole Jolie">
  <meta name="citation_publication_date" content="[CITATION_DATE]">
  <meta name="citation_language" content="en">
  <meta name="citation_online_date" content="[CITATION_DATE]">
  <meta name="citation_fulltext_html_url" content="[PAGE_URL]">
  <meta name="citation_publisher" content="Trust Triangle Publications">

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
          "name": "Publications",
          "item": "https://nicolejolie.com/publications/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "[ARTICLE_SHORT_TITLE]",
          "item": "[PAGE_URL]"
        }
      ]
    }
  }
  </script>

  <!-- SCHOLARLY ARTICLE SCHEMA -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "@id": "[PAGE_URL]#article",
    "headline": "[CITATION_TITLE]",
    "name": "[CITATION_TITLE]",
    "description": "[PAGE_DESCRIPTION]",
    "url": "[PAGE_URL]",
    "datePublished": "[DATE_PUBLISHED]",
    "dateModified": "[DATE_PUBLISHED]",
    "inLanguage": "en-US",
    "author": {
      "@id": "https://nicolejolie.com/#person"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Trust Triangle Publications",
      "url": "https://nicolejolie.com/publications/",
      "parentOrganization": {
        "@id": "https://nicolejolie.com/#org"
      }
    },
    "isPartOf": {
      "@type": "Periodical",
      "name": "Trust Triangle Publications",
      "url": "https://nicolejolie.com/publications/"
    },
    "about": [ARTICLE_TOPICS],
    "keywords": "[ARTICLE_KEYWORDS]"
  }
  </script>

  <style>
    body {
      font-family: 'Georgia', serif;
      line-height: 1.6;
      color: #070707;
      background: #f8f9fa;
      margin: 0;
      padding: 0;
    }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    .blog-header {
      background: linear-gradient(135deg, #0E1428 0%, #1a2447 100%);
      color: white;
      padding: 8rem 0 3rem;
      text-align: center;
    }
    .blog-header h1 { font-size: 3rem; margin-bottom: 1rem; color: #F0A202; }
    .blog-header p { font-size: 1.3rem; max-width: 700px; margin: 0 auto; }
    .blog-card {
      background: white;
      border-radius: 15px;
      padding: 3rem;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      margin: -50px auto 50px;
      max-width: 900px;
      position: relative;
      z-index: 10;
    }
    .author-line {
      font-size: 1.2rem;
      font-weight: bold;
      color: #0E1428;
      border-bottom: 2px solid #F0A202;
      display: inline-block;
      margin-bottom: 2rem;
    }
    .abstract {
      background: #fdf6e3;
      padding: 2rem;
      border-left: 5px solid #F0A202;
      font-style: italic;
      font-size: 1.2rem;
      margin-bottom: 3rem;
    }
    p { font-size: 1.25rem; margin-bottom: 1.5rem; text-align: justify; }
    h2 { color: #0E1428; margin-top: 2.5rem; font-size: 2rem; }
    h3 { color: #0E1428; margin-top: 2rem; font-size: 1.6rem; }
    .data-point { font-weight: bold; color: #923f26; }
    .ref-section { margin-top: 50px; padding-top: 30px; border-top: 2px solid #0E1428; }
    .ref-section h3 { font-size: 1.4rem; margin-bottom: 1rem; }
    .ref-section ul { list-style: none; padding: 0; }
    .ref-section li { margin-bottom: 1rem; font-size: 1.1rem; }
    .ref-section a { color: #0E1428; text-decoration: underline; }
    .ref-section a:hover { color: #923f26; }
  </style>

</head>
```

---

## PAGE INVENTORY

### agentic-common-sense-audit.html
- PAGE_URL: `https://nicolejolie.com/publications/agentic-common-sense-audit.html`
- PAGE_TITLE: `Agentic Common Sense: A Technical Audit of 147 Trillion Token Action Data | Nicole Jolie`
- PAGE_DESCRIPTION: `Technical analysis of how Manus AI's massive action corpus enables AI agents to validate business claims and detect fulfillment inconsistencies.`
- CITATION_TITLE: `Agentic Common Sense: A Technical Audit of 147 Trillion Token Action Data`
- CITATION_DATE: `2026/01/02`
- DATE_PUBLISHED: `2026-01-02`
- ARTICLE_SHORT_TITLE: `Agentic Common Sense`
- ARTICLE_TOPICS: `"AI agents", "action data", "agentic validation", "business fulfillment", "Manus AI"`
- ARTICLE_KEYWORDS: `AI agents, action corpus, agentic common sense, Manus AI, business validation, fulfillment verification`

### agentic-recommendability-protocol.html
- PAGE_URL: `https://nicolejolie.com/publications/agentic-recommendability-protocol.html`
- PAGE_TITLE: `The Agentic Recommendability Protocol: Navigating Meta's Post-Search Ecosystem | Nicole Jolie`
- PAGE_DESCRIPTION: `Analysis of the transition from search visibility to agentic recommendability following the Meta and Manus AI acquisition.`
- CITATION_TITLE: `The Agentic Recommendability Protocol: Navigating Meta's Post-Search Ecosystem`
- CITATION_DATE: `2025/12/16`
- DATE_PUBLISHED: `2025-12-16`
- ARTICLE_SHORT_TITLE: `Agentic Recommendability Protocol`
- ARTICLE_TOPICS: `"agentic recommendability", "post-search ecosystem", "Meta AI", "Trust Triangle", "AI visibility"`
- ARTICLE_KEYWORDS: `agentic recommendability, post-search, Meta Manus acquisition, AI visibility, Trust Triangle, zero-click ecosystem`

### fulfillment-governance-audit.html
- PAGE_URL: `https://nicolejolie.com/publications/fulfillment-governance-audit.html`
- PAGE_TITLE: `Fulfillment Governance Audit | Nicole Jolie`
- PAGE_DESCRIPTION: `Technical audit framework for evaluating AI fulfillment governance and organizational readiness for agentic recommendation systems.`
- CITATION_TITLE: `Fulfillment Governance Audit`
- CITATION_DATE: `2026/01/01`
- DATE_PUBLISHED: `2026-01-01`
- ARTICLE_SHORT_TITLE: `Fulfillment Governance Audit`
- ARTICLE_TOPICS: `"fulfillment governance", "AI audit", "agentic systems", "AI visibility"`
- ARTICLE_KEYWORDS: `fulfillment governance, AI audit, agentic readiness, AI recommendation systems`

### manus-ai-technical-audit.html
- PAGE_URL: `https://nicolejolie.com/publications/manus-ai-technical-audit.html`
- PAGE_TITLE: `Manus AI Technical Audit | Nicole Jolie`
- PAGE_DESCRIPTION: `Technical audit of Manus AI architecture and its implications for business visibility in the agentic economy.`
- CITATION_TITLE: `Manus AI Technical Audit`
- CITATION_DATE: `2025/12/20`
- DATE_PUBLISHED: `2025-12-20`
- ARTICLE_SHORT_TITLE: `Manus AI Technical Audit`
- ARTICLE_TOPICS: `"Manus AI", "technical audit", "AI architecture", "agentic economy"`
- ARTICLE_KEYWORDS: `Manus AI, technical audit, AI architecture, agentic economy, AI visibility`

### manus-technical-strategy.html
- PAGE_URL: `https://nicolejolie.com/publications/manus-technical-strategy.html`
- PAGE_TITLE: `Manus Technical Strategy | Nicole Jolie`
- PAGE_DESCRIPTION: `Strategic analysis of Manus AI technical architecture and implications for AI visibility and recommendation systems.`
- CITATION_TITLE: `Manus Technical Strategy`
- CITATION_DATE: `2025/12/22`
- DATE_PUBLISHED: `2025-12-22`
- ARTICLE_SHORT_TITLE: `Manus Technical Strategy`
- ARTICLE_TOPICS: `"Manus AI", "AI strategy", "technical strategy", "AI recommendation"`
- ARTICLE_KEYWORDS: `Manus AI, technical strategy, AI recommendation, AI visibility strategy`

### meta-manus-agentic-reality.html
- PAGE_URL: `https://nicolejolie.com/publications/meta-manus-agentic-reality.html`
- PAGE_TITLE: `Meta Manus and the Agentic Reality | Nicole Jolie`
- PAGE_DESCRIPTION: `Analysis of Meta's acquisition of Manus AI and the resulting shift toward an agentic reality for business visibility.`
- CITATION_TITLE: `Meta Manus and the Agentic Reality`
- CITATION_DATE: `2026/01/05`
- DATE_PUBLISHED: `2026-01-05`
- ARTICLE_SHORT_TITLE: `Meta Manus Agentic Reality`
- ARTICLE_TOPICS: `"Meta", "Manus AI", "agentic reality", "AI acquisition", "business visibility"`
- ARTICLE_KEYWORDS: `Meta Manus, agentic reality, AI acquisition, business visibility, post-search`

### silent-exclusion-manus-meta.html
- PAGE_URL: `https://nicolejolie.com/publications/silent-exclusion-manus-meta.html`
- PAGE_TITLE: `Silent Exclusion: How Manus and Meta Filter Invisible Businesses | Nicole Jolie`
- PAGE_DESCRIPTION: `Analysis of how AI agents silently exclude businesses that lack proper structured data and authority signals from recommendations.`
- CITATION_TITLE: `Silent Exclusion: How Manus and Meta Filter Invisible Businesses`
- CITATION_DATE: `2026/01/08`
- DATE_PUBLISHED: `2026-01-08`
- ARTICLE_SHORT_TITLE: `Silent Exclusion`
- ARTICLE_TOPICS: `"silent exclusion", "AI filtering", "business invisibility", "structured data", "Manus AI"`
- ARTICLE_KEYWORDS: `silent exclusion, AI filtering, business invisibility, structured data, Manus Meta`

### singapore-manus-agentic-trust.html
- PAGE_URL: `https://nicolejolie.com/publications/singapore-manus-agentic-trust.html`
- PAGE_TITLE: `Singapore, Manus, and Agentic Trust Architecture | Nicole Jolie`
- PAGE_DESCRIPTION: `Analysis of Singapore's role in Manus AI development and the global implications for agentic trust architecture.`
- CITATION_TITLE: `Singapore, Manus, and Agentic Trust Architecture`
- CITATION_DATE: `2026/01/10`
- DATE_PUBLISHED: `2026-01-10`
- ARTICLE_SHORT_TITLE: `Singapore Manus Agentic Trust`
- ARTICLE_TOPICS: `"Singapore", "Manus AI", "agentic trust", "AI governance", "trust architecture"`
- ARTICLE_KEYWORDS: `Singapore Manus, agentic trust, AI governance, trust architecture, global AI`

### sovereign-execution-layer.html
- PAGE_URL: `https://nicolejolie.com/publications/sovereign-execution-layer.html`
- PAGE_TITLE: `The Sovereign Execution Layer | Nicole Jolie`
- PAGE_DESCRIPTION: `Analysis of the sovereign execution layer in AI systems and its implications for business authority and AI recommendation.`
- CITATION_TITLE: `The Sovereign Execution Layer`
- CITATION_DATE: `2026/01/12`
- DATE_PUBLISHED: `2026-01-12`
- ARTICLE_SHORT_TITLE: `Sovereign Execution Layer`
- ARTICLE_TOPICS: `"sovereign execution", "AI authority", "execution layer", "AI recommendation"`
- ARTICLE_KEYWORDS: `sovereign execution layer, AI authority, execution economy, AI recommendation systems`

---

## IMPORTANT NOTE ON DATES

The dates for fulfillment-governance-audit, manus-ai-technical-audit, manus-technical-strategy, meta-manus-agentic-reality, silent-exclusion-manus-meta, singapore-manus-agentic-trust, and sovereign-execution-layer are estimated from filename and context. Claude Code must open each file and read the actual published date from the article body before writing the schema. Do not use estimated dates if the actual date is available in the file.

---

## BODY STRUCTURE FOR PUBLICATION PAGES

After the closing `</head>` tag, the body follows this structure:

```html
<body>

  <!-- HEADER — inline HTML from nj-header skill — paste full block here -->
  <!-- Note: header is fixed position so it sits above the blog-header section -->

  <!-- existing blog-header, main, article content stays exactly as is -->

  <!-- FOOTER — inline HTML from nj-footer skill — paste full block here -->
  <!-- Replace the existing hardcoded site-footer with the nj-footer inline HTML -->

</body>
</html>
```

---

## WHAT CLAUDE CODE SHOULD DO WITH THESE SKILLS

When given all four skills and told to update the publication pages, Claude Code should:

1. Read all four skill files from the `_skills` folder
2. For each publication page listed above:
   a. Open the file and read the actual published date from the article body
   b. Replace the entire head section with the template from this skill filled in with correct values
   c. Add the inline header from nj-header skill as the first element inside `<body>`
   d. Remove the existing hardcoded footer
   e. Add the inline footer from nj-footer skill as the last element inside `</body>`
   f. Leave all article body content completely untouched
3. Commit all changes with message: `Update publications: inline header, footer, schema`
4. Push to main branch

---

## GOOGLE SCHOLAR INDEXING NOTE

Once schema and citation meta tags are correct on all publication pages, Google Scholar will index them automatically on its next crawl cycle which typically takes 2 to 4 weeks. After indexing, go to scholar.google.com, sign in, and search for each article title to add it to your author profile. Do not add articles manually before they are indexed.

---

*Update this skill first whenever a new publication is added. Then apply the head template to the new page.*
