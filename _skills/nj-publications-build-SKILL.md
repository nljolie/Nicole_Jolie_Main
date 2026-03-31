---
name: nj-publications-build
description: Single source of truth for building new publication pages on nicolejolie.com. Use this skill whenever a new article is being added to the /publications/ folder. This skill contains the complete two-task build pattern, the locked CTA block, all rules for page construction, and the commit instruction. Never build a new publication page without reading this skill first along with nj-header, nj-footer, nj-schema-sitewide, and nj-schema-publications.
---

# SKILL: New Publication Page Build — nicolejolie.com
**Status: LOCKED**
**Last Updated: March 2026**
**Owner: Nicole Jolie — Be Socially Smashing, LLC**

---

## PURPOSE OF THIS SKILL

This skill governs the end-to-end build process for every new article page added to nicolejolie.com/publications/. It works together with four other skills:

- `nj-header-SKILL.md` — locked inline header HTML
- `nj-footer-SKILL.md` — locked inline footer HTML and floating bar
- `nj-schema-sitewide-SKILL.md` — locked sitewide graph block
- `nj-schema-publications-SKILL.md` — ScholarlyArticle schema template and head section template

Read all five skills before building any new publication page.

---

## WORKFLOW OVERVIEW

Every new publication build does exactly two tasks in one pass:

- TASK 1: Create the new article HTML page at `publications/[filename].html`
- TASK 2: Add a new card to `publications/index.html`

After both tasks are complete, commit and push to main in one step.

---

## NON-NEGOTIABLE RULES

1. Read all five skill files before writing a single line of code
2. Never use em dashes anywhere in any content
3. Never use hyphens in copy text (filenames and paths are exempt)
4. Never use quotation mark characters in any visible content
5. Never expose any email address anywhere on the page
6. Never load header or footer via JS files. Both must be inline HTML
7. Never use `../` relative paths. All legal links use root paths starting with `/`
8. Never modify article body content. Place it exactly as provided
9. The CTA block in this skill is locked. Do not modify its copy, colors, or structure
10. The new card must be placed at the TOP of the publications grid so newest articles appear first
11. jobTitle in all schema must say "AI Visibility Strategist"
12. Author is always Nicole Jolie
13. Robots is always `index, follow`
14. Do not add header.js or footer.js references anywhere

---

## TASK 1: BUILD THE ARTICLE PAGE

### File location
`publications/[filename].html`

### Step 1 — Build the head section
Use the complete head section template from `nj-schema-publications-SKILL.md`. Fill in these values from the article being built:

| Token | Value |
|-------|-------|
| PAGE_TITLE | Full title of the article plus ` \| Nicole Jolie` |
| PAGE_DESCRIPTION | The meta description provided |
| PAGE_URL | `https://nicolejolie.com/publications/[filename].html` |
| CITATION_TITLE | Article title without the site name suffix |
| CITATION_DATE | Publication date in `YYYY/MM/DD` format |
| DATE_PUBLISHED | Publication date in `YYYY-MM-DD` format |
| ARTICLE_SHORT_TITLE | Short 3 to 5 word version of the title |
| ARTICLE_TOPICS | Comma separated quoted topic strings |
| ARTICLE_KEYWORDS | Comma separated keyword string |

### Step 2 — Build the body

The body follows this exact order:

```
1. Inline header from nj-header-SKILL.md
2. blog-header section (h1 and standfirst if provided)
3. main content area containing:
   a. First paragraph of article
   b. Second paragraph of article
   c. LOCKED CTA BLOCK (see below)
   d. Remaining article content exactly as provided
4. Inline footer from nj-footer-SKILL.md
```

### LOCKED CTA BLOCK

Insert this block after the second paragraph and before the third paragraph of the article body. Do not change any copy, color value, URL, or structure. This block is locked.

```html
<div style="margin: 2.5rem 0; padding: 2rem; background: hsl(200,60%,8%); border-radius: 8px; text-align: center;">
  <p style="color: #ffffff; font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem;">
    Most businesses are invisible to AI right now.
  </p>
  <p style="color: #d1d5db; font-size: 1rem; margin-bottom: 1.5rem;">
    Find out exactly what is missing. Get the free AI Authority Checklist with 47 specific optimizations across four categories.
  </p>
  <a href="https://nicolejolie.com/checklist_47.html"
     style="display: inline-block; background: hsl(174,56%,39%); color: #ffffff; font-size: 1rem; font-weight: 700; padding: 0.85rem 2rem; border-radius: 6px; text-decoration: none;">
    Get the Free Checklist Now
  </a>
</div>
```

### Counting paragraphs correctly

A paragraph means a `<p>` tag block. Do not count `<h1>`, `<h2>`, `<div>`, or `<ul>` tags as paragraphs. Count only `<p>` tags. Insert the CTA block after the second `<p>` closing tag and before the third `<p>` opening tag.

If the article has an abstract or standfirst div before the body paragraphs, do not count that as a paragraph. Start counting from the first `<p>` tag inside the main article content area.

---

## TASK 2: ADD THE CARD TO PUBLICATIONS INDEX

### File location
`publications/index.html`

### Instructions

1. Open `publications/index.html`
2. Find the publications card grid
3. Read the HTML structure of one existing card exactly
4. Add a new card using that exact same HTML structure
5. Place the new card at the TOP of the grid
6. Do not change any other cards or any other content on the page

### Card values to populate

| Field | Value |
|-------|-------|
| Title | Full article title |
| Description | The meta description provided |
| Date | Publication date written out (example: January 15, 2026) |
| Link | `/publications/[filename].html` |

---

## COMMIT AND PUSH

After both tasks are complete, run:

```
git add .
git commit -m "Add publication [filename]"
git push origin main
```

Cloudflare Pages auto-deploys within 1 to 3 minutes after push.

---

## INPUT VALUES REQUIRED FOR EVERY NEW BUILD

When starting a new publication build, you must have these four values before writing any code:

1. **Article HTML content** — the full article body HTML including all h1, h2, p, ul tags
2. **Filename** — the slug with no extension (example: why-ai-search-changed-in-2026)
3. **Meta description** — one sentence, under 160 characters
4. **Publication date** — in YYYY-MM-DD format (example: 2026-03-28)

If any of these four values are missing, stop and ask before proceeding.

---

## CONTENT RULES FOR ALL PUBLICATION PAGES

These rules apply to all visible text on the page. They do not apply to file paths, URLs, or code.

- Sixth grade reading level
- Short sentences
- Answer first then explain
- No em dashes
- No hyphens in copy
- No quotation marks
- No emojis
- No words like actually, literally, need, should
- No dollar amounts or specific revenue claims
- No references to Gen X AI or orthopedic surgeons
- No email addresses exposed anywhere

---

## RELATED SKILLS

| Skill | Purpose |
|-------|---------|
| `nj-header-SKILL.md` | Locked inline header HTML |
| `nj-footer-SKILL.md` | Locked inline footer HTML and floating bar |
| `nj-schema-sitewide-SKILL.md` | Locked sitewide schema graph block |
| `nj-schema-publications-SKILL.md` | Head section template and ScholarlyArticle schema |

---

## DEPLOYMENT REFERENCE

| Item | Value |
|------|-------|
| Site | nicolejolie.com |
| GitHub Repo | nljolie/Nicole_Jolie_Main |
| Branch | main |
| Local folder | Nicole_Jolie_Connected |
| Hosting | Cloudflare Pages |
| Deploy time | 1 to 3 minutes after push to main |

---

*Update this skill first whenever the CTA block, build pattern, or content rules change. Then the change applies automatically to every future publication build.*
