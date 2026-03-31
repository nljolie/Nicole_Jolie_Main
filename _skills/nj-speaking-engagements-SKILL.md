---
name: nj-speaking-engagements
description: Single source of truth for the Subject Matter Expert Speaking Engagements section on nicolejolie.com index.html. Use this skill whenever any work touches the speaking engagements logo section — including reading, editing, rebuilding, adding new logos, changing links, or updating organization names. Never recreate or modify this section without reading this skill first. This skill contains the locked HTML, all logo R2 URLs, all destination links, alt tag standards, image size standards, and placement instructions.
---

# SKILL: Subject Matter Expert Speaking Engagements — nicolejolie.com
**Status: LOCKED**
**Last Updated: March 2026**
**Owner: Nicole Jolie — Be Socially Smashing, LLC**

---

## PURPOSE OF THIS SKILL

This skill governs the Subject Matter Expert Speaking Engagements section on index.html. This section displays organization logos that Nicole has spoken for or been affiliated with as a subject matter expert. Each logo links to its own organization website to create backlinks and authority signals.

---

## NON-NEGOTIABLE RULES

1. Every logo must link to its own organization URL. Do not use a single link for multiple logos.
2. Every logo must have a descriptive alt tag naming Nicole Jolie, the organization, and the context.
3. Do not expose email addresses anywhere in this section.
4. Do not use em-dashes, hyphens in content text, or quotation marks in copy.
5. The section background is always white `#ffffff` regardless of surrounding section colors.
6. All images are hosted on Cloudflare R2. Do not use S3 URLs for logos in this section.
7. When adding a new logo, update this skill first, then carry the change to the page.

---

## IMAGE SPECIFICATIONS

| Property | Value |
|----------|-------|
| Format | PNG with transparent background preferred. White background acceptable if transparency not available. |
| Display size | 180px wide maximum, height auto |
| Source file size | 400x200 pixels at 2x resolution (800x400 source) |
| Loading | Always use `loading="lazy"` |
| Hosting | Cloudflare R2 public bucket |

**Filename convention for R2 uploads:**
`organization-name-nicole-jolie-speaker.png` or `organization-name-nicole-jolie-subject-matter-expert.png`

Example: `lric-lithium-resource-innovation-cluster-nicole-jolie-subject-matter-expert.png`

The filename becomes part of the public URL and is read by search engines. Always use descriptive filenames with no spaces. Use hyphens between words.

---

## ALT TAG STANDARDS

Alt tags must include:
- Nicole Jolie's name
- The full organization name
- The context (speaker, subject matter expert, annual conference, etc.)
- Geographic context when relevant

Examples:
- `Nicole Jolie Subject Matter Expert Lithium Resource Innovation Cluster LRIC`
- `Nicole Jolie speaker at Startup Junkie Northwest Arkansas`
- `Nicole Jolie speaker at Women in Tech NWA Annual Conference Springdale Arkansas`

---

## CURRENT ORGANIZATIONS — LOCKED

| Organization | R2 Image URL | Destination Link | Alt Tag |
|---|---|---|---|
| Lithium Resource Innovation Cluster | `https://pub-21e465af0108483c8ef7d22e5b0dd11b.r2.dev/lric-lithium-resource-innovation-cluster-nicole-jolie-subject-matter-expert.png` | `https://lithiumric.org/` | Nicole Jolie Subject Matter Expert Lithium Resource Innovation Cluster LRIC |
| Startup Junkie | `https://pub-21e465af0108483c8ef7d22e5b0dd11b.r2.dev/startup-junkie-nicole-jolie-speaker.png` | `https://startupjunkie.org/programs/` | Nicole Jolie speaker at Startup Junkie Northwest Arkansas |
| ARISE Arkansas | `https://pub-21e465af0108483c8ef7d22e5b0dd11b.r2.dev/arise-arkansas-nicole-jolie-speaker.png` | `https://arisearkansas.org/` | Nicole Jolie speaker at ARISE Arkansas |
| Women in Tech NWA | `https://pub-21e465af0108483c8ef7d22e5b0dd11b.r2.dev/women-in-tech-nwa-nicole-jolie-speaker.png` | `https://womenintechnwa.org/annual-conference` | Nicole Jolie speaker at Women in Tech NWA Annual Conference Springdale Arkansas |
| One Million Cups | PENDING — upload to R2 when available | PENDING | Nicole Jolie speaker at One Million Cups Northwest Arkansas |

---

## PLACEMENT ON INDEX.HTML

Place this section directly above the video testimonials section.

Find this comment in index.html:
```
<!-- TESTIMONIALS: VIDEO -->
```

Paste the full section HTML immediately before that line.

---

## SOP — ADDING A NEW SPEAKING ENGAGEMENT LOGO

1. Cut the logo to 800x400 pixels source size (displays at 400x200 at 1x, 200x100 on page)
2. Save as PNG. Use transparent background if possible. White background is acceptable.
3. Name the file: `organization-name-nicole-jolie-speaker.png` using hyphens, no spaces
4. Upload to Cloudflare R2 public bucket `nicolejolie-downloads-assets` or equivalent
5. Copy the public R2 URL
6. Update the organization table in this skill with the R2 URL, destination link, and alt tag
7. Add the new logo block to the locked HTML below
8. Carry the change to index.html
9. Commit and push to main
10. Update the schema affiliation block in nj-schema-sitewide skill if the organization is a formal affiliation

---

## COMPLETE LOCKED SECTION HTML

```html
<!-- SUBJECT MATTER EXPERT SPEAKING ENGAGEMENTS -->
<!-- Place this section ABOVE the video testimonials section -->
<!-- Look for: TESTIMONIALS: VIDEO comment and paste before it -->
<section style="background-color: #ffffff; padding: 64px 24px; border-top: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
    <div style="max-width: 1100px; margin: 0 auto; text-align: center;">

        <h2 style="font-family: 'Cormorant Garamond', serif; font-size: clamp(28px, 4vw, 42px); font-weight: 700; color: #923f26; margin-bottom: 12px;">
            Subject Matter Expert Speaking Engagements
        </h2>
        <p style="font-size: 18px; color: #555; margin-bottom: 48px; max-width: 600px; margin-left: auto; margin-right: auto;">
            Recognized authority on AI visibility, AEO, and GEO for energy, infrastructure, and capital intensive industries.
        </p>

        <!-- LOGO GRID — each logo links to its own organization -->
        <div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 40px; max-width: 1000px; margin: 0 auto;">

            <a href="https://lithiumric.org/" target="_blank" rel="noopener noreferrer" style="display: inline-block; flex: 0 1 180px;">
                <img
                    src="https://pub-21e465af0108483c8ef7d22e5b0dd11b.r2.dev/lric-lithium-resource-innovation-cluster-nicole-jolie-subject-matter-expert.png"
                    alt="Nicole Jolie Subject Matter Expert Lithium Resource Innovation Cluster LRIC"
                    style="width: 100%; max-width: 180px; height: auto; display: block; margin: 0 auto;"
                    loading="lazy"
                />
            </a>

            <a href="https://startupjunkie.org/programs/" target="_blank" rel="noopener noreferrer" style="display: inline-block; flex: 0 1 180px;">
                <img
                    src="https://pub-21e465af0108483c8ef7d22e5b0dd11b.r2.dev/startup-junkie-nicole-jolie-speaker.png"
                    alt="Nicole Jolie speaker at Startup Junkie Northwest Arkansas"
                    style="width: 100%; max-width: 180px; height: auto; display: block; margin: 0 auto;"
                    loading="lazy"
                />
            </a>

            <a href="https://arisearkansas.org/" target="_blank" rel="noopener noreferrer" style="display: inline-block; flex: 0 1 180px;">
                <img
                    src="https://pub-21e465af0108483c8ef7d22e5b0dd11b.r2.dev/arise-arkansas-nicole-jolie-speaker.png"
                    alt="Nicole Jolie speaker at ARISE Arkansas"
                    style="width: 100%; max-width: 180px; height: auto; display: block; margin: 0 auto;"
                    loading="lazy"
                />
            </a>

            <a href="https://womenintechnwa.org/annual-conference" target="_blank" rel="noopener noreferrer" style="display: inline-block; flex: 0 1 180px;">
                <img
                    src="https://pub-21e465af0108483c8ef7d22e5b0dd11b.r2.dev/women-in-tech-nwa-nicole-jolie-speaker.png"
                    alt="Nicole Jolie speaker at Women in Tech NWA Annual Conference Springdale Arkansas"
                    style="width: 100%; max-width: 180px; height: auto; display: block; margin: 0 auto;"
                    loading="lazy"
                />
            </a>

            <!-- ONE MILLION CUPS — add R2 URL and link when available -->
            <!--
            <a href="https://www.1millioncups.com/s/account/0014W00002AqQdGQAV/bentonville-ar" target="_blank" rel="noopener noreferrer" style="display: inline-block; flex: 0 1 180px;">
                <img
                    src="https://pub-21e465af0108483c8ef7d22e5b0dd11b.r2.dev/1-million-cups-nwa-nicole-jolie-speaker.png"
                    alt="Nicole Jolie speaker at One Million Cups Northwest Arkansas"
                    style="width: 100%; max-width: 180px; height: auto; display: block; margin: 0 auto;"
                    loading="lazy"
                />
            </a>
            -->

        </div>

    </div>
</section>
```

---

*Update this skill first whenever a new speaking engagement or affiliation is added. Then carry the change to index.html.*
