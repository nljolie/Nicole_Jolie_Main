---
name: nj-schema-sitewide
description: Single source of truth for the sitewide JSON-LD schema graph on nicolejolie.com. Use this skill whenever any work touches schema on any page of nicolejolie.com. This skill contains the locked sitewide graph block that goes on every single page of the site, plus instructions for writing the unique WebPage schema block for each page type. Never write schema for nicolejolie.com without reading this skill first.
---

# SKILL: Sitewide Schema — nicolejolie.com
**Status: LOCKED**
**Last Updated: March 2026**
**Owner: Nicole Jolie — Be Socially Smashing, LLC**

---

## PURPOSE OF THIS SKILL

This skill is the single source of truth for all JSON-LD schema on nicolejolie.com.

Every page on the site gets two schema blocks minimum:
1. The sitewide graph block — identical on every page, copy paste, never changes unless Nicole's positioning changes
2. A unique WebPage block — different on every page, contains the specific URL, name, and description for that page

Some pages get additional blocks: FAQPage, Event, CreativeWork, etc. Those are documented in the page-specific skills.

---

## NON-NEGOTIABLE RULES

1. The sitewide graph block is identical on every page. Do not modify it per page.
2. All @id references must use the exact anchors defined in this skill. Do not invent new ones.
3. No reference to Gen X AI anywhere in any schema block.
4. No reference to orthopedic surgeons. Healthcare only, no specialty callouts.
5. Do not use em-dashes, hyphens in content text, or quotation mark characters in schema text values.
6. Geographic positioning is both Heartland states and national. Both must be present.
7. The sitewide graph must always contain all four entities: Organization, Person, and both Service entities.

---

## ENTITY ID ANCHORS — USE THESE EXACTLY

| Entity | @id |
|--------|-----|
| Organization | `https://nicolejolie.com/#org` |
| Person | `https://nicolejolie.com/#person` |
| AI Authority Reports service | `https://nicolejolie.com/#ai-authority-reports` |
| AI Visibility Consulting service | `https://nicolejolie.com/#ai-visibility-consulting` |

---

## BLOCK 1: SITEWIDE GRAPH — COPY TO EVERY PAGE

This block is identical on every page. Place it inside `<head>` after all meta tags and before `</head>`.

```html
<!-- SITEWIDE GRAPH — copy this block to every page on nicolejolie.com -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": "https://nicolejolie.com/#org",
      "@type": ["Organization", "ProfessionalService"],
      "name": "Nicole Jolie",
      "url": "https://nicolejolie.com",
      "logo": "https://pub-21e465af0108483c8ef7d22e5b0dd11b.r2.dev/Trust%20Triangle%20Transparent%20for%20NJ%20Site.png",
      "description": "AI Visibility Strategist delivering AI Authority Reports, AEO and GEO implementation, and AI visibility consulting so companies in energy, infrastructure, healthcare, and capital intensive industries get named and recommended by AI platforms.",
      "sameAs": [
        "https://www.linkedin.com/in/nicolejolie",
        "https://substack.com/@nicolejolie",
        "https://www.youtube.com/@NicolesAIJourney",
        "https://sociallysmashing.com"
      ],
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Texas" },
        { "@type": "AdministrativeArea", "name": "Arkansas" },
        { "@type": "AdministrativeArea", "name": "Missouri" },
        { "@type": "AdministrativeArea", "name": "Kansas" },
        { "@type": "AdministrativeArea", "name": "Kentucky" },
        { "@type": "AdministrativeArea", "name": "Oklahoma" },
        { "@type": "Country", "name": "United States" }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1401 Lavaca St., #40861",
        "addressLocality": "Austin",
        "addressRegion": "TX",
        "postalCode": "78701",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Inquiries",
        "url": "https://www.linkedin.com/in/nicolejolie"
      }
    },
    {
      "@id": "https://nicolejolie.com/#person",
      "@type": "Person",
      "name": "Nicole Jolie",
      "image": "https://pub-21e465af0108483c8ef7d22e5b0dd11b.r2.dev/Nicole%20Jolie%20AI%20Consultant%20and%20Strategist.%20Texas%20%2B%20Arkansas%20%2B%20Hearthland%2C%20USA.png",
      "jobTitle": "AI Visibility Strategist and AI Authority Consultant",
      "url": "https://nicolejolie.com",
      "worksFor": {
        "@id": "https://nicolejolie.com/#org"
      },
      "affiliation": [
        {
          "@type": "Organization",
          "name": "Lithium Resource Innovation Cluster",
          "url": "https://lithiumric.org",
          "description": "Subject Matter Expert in AI Citation Gap research and AI visibility for the Smackover Formation region"
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/in/nicolejolie",
        "https://substack.com/@nicolejolie",
        "https://www.youtube.com/@NicolesAIJourney",
        "https://sociallysmashing.com"
      ],
      "knowsAbout": [
        "AI visibility",
        "AI Authority Reports",
        "Answer Engine Optimization",
        "Generative Engine Optimization",
        "AI search visibility",
        "AI recommendation engines",
        "AI citation architecture",
        "Trust Triangle Framework",
        "Cross Platform AI Audits",
        "AI visibility for energy and infrastructure",
        "AI visibility for healthcare",
        "AI visibility for capital intensive industries",
        "Machine readable authority signals",
        "Lithium industry AI visibility",
        "Smackover Formation AI citation gap"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Professional Experience",
          "description": "20+ years building digital systems for high stakes, capital intensive industries"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Professional Certification",
          "name": "Academy Accreditation: Generative AI Fundamentals",
          "recognizedBy": { "@type": "Organization", "name": "Databricks" },
          "identifier": "YCTV90517651X2",
          "dateCreated": "2025-08",
          "validUntil": "2027-08"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Professional Certification",
          "name": "Introduction to Generative AI Learning Path Specialization",
          "recognizedBy": { "@type": "Organization", "name": "Google Cloud" },
          "identifier": "XWKG5990JJXKV.xt",
          "dateCreated": "2025-08"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Professional Certification",
          "name": "Introduction to Large Language Models",
          "recognizedBy": { "@type": "Organization", "name": "Google Cloud" },
          "identifier": "P3WX6M18WV3BA7",
          "dateCreated": "2025-08"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Professional Certification",
          "name": "Introduction to Responsible AI",
          "recognizedBy": { "@type": "Organization", "name": "Google Cloud" },
          "identifier": "YLVF6L3EBNN1",
          "dateCreated": "2025-08"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Professional Certification",
          "name": "Responsible AI: Applying AI Principles with Google Cloud",
          "recognizedBy": { "@type": "Organization", "name": "Google Cloud" },
          "identifier": "QNXEZ4Z6DULJZ2",
          "dateCreated": "2025-08"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Professional Certification",
          "name": "Automated Financial Reporting with AI",
          "recognizedBy": { "@type": "Organization", "name": "LinkedIn Learning" },
          "dateCreated": "2025-08"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Professional Certification",
          "name": "Introduction to Generative AI",
          "recognizedBy": { "@type": "Organization", "name": "Google Cloud" },
          "identifier": "VCTV03B5TFBFPI",
          "dateCreated": "2025-08"
        }
      ]
    },
    {
      "@id": "https://nicolejolie.com/#ai-authority-reports",
      "@type": "Service",
      "name": "AI Authority Reports",
      "description": "Multi-platform AI Authority Reports that audit how a company is seen, cited, and recommended across ChatGPT, Microsoft Copilot, Gemini, Perplexity, Claude, and Manus, with a 90-day structural roadmap to fix AI visibility gaps.",
      "provider": {
        "@id": "https://nicolejolie.com/#org"
      },
      "serviceType": [
        "AI Authority Report",
        "AI visibility audit",
        "AI recommendation analysis",
        "Cross Platform AI audit"
      ],
      "areaServed": [
        "Texas", "Arkansas", "Missouri", "Kansas", "Kentucky", "Oklahoma", "United States"
      ]
    },
    {
      "@id": "https://nicolejolie.com/#ai-visibility-consulting",
      "@type": "Service",
      "name": "AI Visibility, AEO, and GEO Consulting",
      "description": "Done-with-you AI visibility consulting that implements Answer Engine Optimization, Generative Engine Optimization, schema markup, and citation architecture so companies in energy, infrastructure, and healthcare become structurally citable and recommended by AI search and assistant platforms.",
      "provider": {
        "@id": "https://nicolejolie.com/#org"
      },
      "serviceType": [
        "AI visibility consulting",
        "Answer Engine Optimization",
        "Generative Engine Optimization",
        "AI citation architecture design",
        "Schema markup implementation"
      ],
      "areaServed": [
        "Texas", "Arkansas", "Missouri", "Kansas", "Kentucky", "Oklahoma", "United States"
      ]
    }
  ]
}
</script>
```

---

## BLOCK 2: HOMEPAGE WEBPAGE SCHEMA — use ONLY on index.html

```html
<!-- WEBPAGE SCHEMA — unique to this page -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://nicolejolie.com/#homepage",
  "url": "https://nicolejolie.com/",
  "name": "Nicole Jolie | AI Visibility Strategist and AI Authority Reports",
  "description": "Nicole Jolie helps companies in energy, infrastructure, and healthcare fix AI visibility, implement AEO and GEO, and deploy AI Authority Reports so they get named, cited, and recommended by AI systems before competitors.",
  "inLanguage": "en-US",
  "isPartOf": {
    "@id": "https://nicolejolie.com/#org"
  },
  "about": [
    "AI visibility",
    "AI Authority Reports",
    "Answer Engine Optimization",
    "Generative Engine Optimization",
    "AI recommendation engines",
    "AI citation architecture",
    "Trust Triangle Framework"
  ],
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://pub-21e465af0108483c8ef7d22e5b0dd11b.r2.dev/Nicole%20Jolie%20AI%20Consultant%20and%20Strategist.%20Texas%20%2B%20Arkansas%20%2B%20Hearthland%2C%20USA.png"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nicolejolie.com"
      }
    ]
  }
}
</script>
```

---

## BLOCK 3: SPEAKING EVENTS — use ONLY on index.html

```html
<!-- SPEAKING EVENTS — use ONLY on index.html -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Nicole Jolie Speaking Engagements",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Event",
        "name": "If AI Can't Find You, Neither Can Your Next Customer",
        "description": "Nicole Jolie speaks at the Lithium Resource Innovation Cluster event series on how energy and infrastructure companies in the Smackover Formation region can become visible and recommended by AI platforms.",
        "startDate": "2026-03-25",
        "endDate": "2026-03-25",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "Lithium Resource Innovation Cluster",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Rogers",
            "addressRegion": "AR",
            "postalCode": "72758",
            "addressCountry": "US"
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "Lithium Resource Innovation Cluster",
          "url": "https://lithiumric.org"
        },
        "performer": {
          "@type": "Person",
          "name": "Nicole Jolie",
          "jobTitle": "AI Visibility Strategist and Consultant",
          "url": "https://nicolejolie.com",
          "sameAs": "https://www.linkedin.com/in/nicolejolie"
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://pub-21e465af0108483c8ef7d22e5b0dd11b.r2.dev/Nicole%20Headshot%20for%20Speaking%20Events.png"
        },
        "offers": {
          "@type": "Offer",
          "name": "AI Authority Checklist: 47 Optimizations to Get Recommended by AI",
          "url": "https://pub-21e465af0108483c8ef7d22e5b0dd11b.r2.dev/ai-authority-checklist-47-QR%20Code.pdf",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "url": "https://nicolejolie.com",
        "about": [
          "AI visibility",
          "AI citation architecture",
          "Lithium industry AI recommendation",
          "Smackover Formation AI visibility"
        ]
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Event",
        "name": "If AI Doesn't Know You Exist, Neither Does Your Next Client: How to Get Recommended by AI LLMs",
        "description": "Nicole Jolie speaks at the Women in Tech NWA Annual Conference in Springdale, Arkansas on how professionals and business owners can become visible and recommended by AI language models.",
        "startDate": "2026-04-09",
        "endDate": "2026-04-09",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "The Jones Center",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Springdale",
            "addressRegion": "AR",
            "addressCountry": "US"
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "Women in Tech NWA",
          "url": "https://nicolejolie.com"
        },
        "performer": {
          "@type": "Person",
          "name": "Nicole Jolie",
          "jobTitle": "AI Visibility Strategist and Consultant",
          "url": "https://nicolejolie.com",
          "sameAs": "https://www.linkedin.com/in/nicolejolie"
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://pub-21e465af0108483c8ef7d22e5b0dd11b.r2.dev/Nicole%20Headshot%20for%20Speaking%20Events.png"
        },
        "offers": {
          "@type": "Offer",
          "name": "AI Authority Checklist: 47 Optimizations to Get Recommended by AI",
          "url": "https://pub-21e465af0108483c8ef7d22e5b0dd11b.r2.dev/ai-authority-checklist-47-QR%20Code.pdf",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "url": "https://nicolejolie.com",
        "about": [
          "AI visibility",
          "AI LLM recommendation",
          "Women in technology",
          "AI visibility consulting"
        ]
      }
    }
  ]
}
</script>
```

---

## BLOCK 4: FAQ SCHEMA — use on index.html

```html
<!-- FAQ SCHEMA — use on index.html -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an AI Authority Report?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An AI Authority Report is a multi-platform audit that shows how your company is seen, cited, and recommended across AI systems like ChatGPT, Microsoft Copilot, Gemini, Perplexity, Claude, and Manus, then maps a 90-day structural roadmap to fix visibility gaps. It tests what AI knows from training data and what AI finds when it actively searches, across 25 or more stakeholder queries specific to your industry."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between being listed and being recommended by AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Being listed means AI can find you when someone searches your exact name. Being recommended means AI suggests you when someone asks for a solution to a problem, and explains why you are the best choice. When an investor asks AI which companies are structurally ready for a contract, or a patient asks who the best specialist is in their area, AI gives one answer or maybe three. If you are not in that answer, the person never visits your website, never calls, and proceeds with whoever AI recommended."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between AEO and GEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer Engine Optimization focuses on structuring your content and schema so AI systems can answer questions with you as the cited source. Generative Engine Optimization focuses on how generative AI models recall, summarize, and recommend your company in their own words. Both are required to become the answer AI gives rather than a name AI skips."
      }
    },
    {
      "@type": "Question",
      "name": "Who does Nicole Jolie work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nicole works with companies in energy, infrastructure, healthcare, and capital intensive industries across Texas, Arkansas, Missouri, Kansas, Kentucky, and the broader United States that need AI to reliably name and recommend them before competitors. She is also a Subject Matter Expert with the Lithium Resource Innovation Cluster, focusing on AI citation gap research for Smackover Formation companies."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Trust Triangle Framework?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Trust Triangle Framework defines the three elements AI systems evaluate when deciding who to recommend: Authority (AI recognizes you as the verified expert in your field), Recommendability (your digital signals indicate trust, stability, and integrity), and Citation (authoritative sources reference you). Without all three, you are just another option in a list. With all three, you become the answer AI recommends with reasons why."
      }
    },
    {
      "@type": "Question",
      "name": "Is AI search optimization the same as SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. SEO ranks web pages in Google's list of ten blue links using keywords and backlinks. AI visibility determines whether AI systems trust your organization enough to recommend it by name when someone asks for a solution. You can rank on page one of Google and still return zero recognition across five AI platforms. Google ranks pages. AI evaluates entities. Different system. Different signals. Different outcome."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build AI authority?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The typical structural correction process takes 90 days. It does not require new content creation, new platforms, advertising, SEO campaigns, or additional hires. It is editing, reorganizing, and standardizing existing assets so AI systems can read them as authority signals. Once built, structural authority compounds over time."
      }
    }
  ]
}
</script>
```

---

## WEBPAGE SCHEMA TEMPLATE — for all other pages

Every page gets its own WebPage block in addition to the sitewide graph. Only the URL, name, description, about array, and breadcrumb change per page.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "PAGE_URL#page",
  "url": "PAGE_URL",
  "name": "PAGE_TITLE",
  "description": "PAGE_DESCRIPTION",
  "inLanguage": "en-US",
  "isPartOf": {
    "@id": "https://nicolejolie.com/#org"
  },
  "about": [
    "TOPIC_1",
    "TOPIC_2"
  ],
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
        "name": "PAGE_NAME",
        "item": "PAGE_URL"
      }
    ]
  }
}
</script>
```

---

## PAGE INVENTORY — WEBPAGE SCHEMA VALUES

### index.html
- URL: `https://nicolejolie.com/`
- Name: `Nicole Jolie | AI Visibility Strategist and AI Authority Reports`
- Description: `Nicole Jolie helps companies in energy, infrastructure, and healthcare fix AI visibility, implement AEO and GEO, and deploy AI Authority Reports so they get named, cited, and recommended by AI systems before competitors.`
- About: `AI visibility`, `AI Authority Reports`, `Answer Engine Optimization`, `Trust Triangle Framework`

### work_with_nicole.html
- URL: `https://nicolejolie.com/work_with_nicole.html`
- Name: `Work with Nicole | AI Visibility Consulting, AEO, GEO, and AI Authority Reports`
- Description: `Work directly with AI Visibility Strategist Nicole Jolie to run an AI Authority Report, implement AEO and GEO, and become the organization AI recommends in your industry.`
- About: `AI Authority Reports`, `AI visibility consulting`, `Answer Engine Optimization`, `Generative Engine Optimization`

### checklist_47.html
- URL: `https://nicolejolie.com/checklist_47.html`
- Name: `AI Authority Checklist: 47 Optimizations to Get Recommended by AI | Nicole Jolie`
- Description: `Download the free 47 point AI Authority Checklist and audit your visibility across ChatGPT, Claude, Gemini, and Perplexity.`
- About: `AI visibility checklist`, `AI Authority`, `get recommended by AI`

### privacy-policy.html
- URL: `https://nicolejolie.com/privacy-policy.html`
- Name: `Privacy Policy | Nicole Jolie`
- Description: `Privacy policy for nicolejolie.com operated by Be Socially Smashing, LLC, covering data collection, use, and protection.`
- About: `privacy policy`, `data protection`

### terms-of-service.html
- URL: `https://nicolejolie.com/terms-of-service.html`
- Name: `Terms of Service | Nicole Jolie`
- Description: `Terms of service for nicolejolie.com and all consulting services provided by Be Socially Smashing, LLC.`
- About: `terms of service`, `legal terms`

### refund-chargeback-policy.html
- URL: `https://nicolejolie.com/refund-chargeback-policy.html`
- Name: `Refund and Chargeback Policy | Nicole Jolie`
- Description: `Refund and chargeback policy for consulting services and digital products sold through nicolejolie.com.`
- About: `refund policy`, `chargeback policy`

### earnings-disclaimer.html
- URL: `https://nicolejolie.com/earnings-disclaimer.html`
- Name: `Earnings Disclaimer | Nicole Jolie`
- Description: `Earnings disclaimer for nicolejolie.com. Results from AI visibility consulting are not guaranteed and vary by organization.`
- About: `earnings disclaimer`, `results disclaimer`

### affiliate-disclaimer.html
- URL: `https://nicolejolie.com/affiliate-disclaimer.html`
- Name: `Affiliate Disclaimer | Nicole Jolie`
- Description: `Affiliate relationship disclosure for nicolejolie.com in compliance with FTC guidelines.`
- About: `affiliate disclaimer`, `FTC disclosure`

### legal-disclaimer.html
- URL: `https://nicolejolie.com/legal-disclaimer.html`
- Name: `Legal Disclaimer | Nicole Jolie`
- Description: `Legal disclaimer for nicolejolie.com and all content, consulting services, and recommendations provided by Be Socially Smashing, LLC.`
- About: `legal disclaimer`, `liability disclaimer`

### gdpr-ccpa.html
- URL: `https://nicolejolie.com/gdpr-ccpa.html`
- Name: `GDPR and CCPA Privacy Policy | Nicole Jolie`
- Description: `GDPR and CCPA compliance policy for nicolejolie.com covering rights of EU and California residents regarding personal data.`
- About: `GDPR`, `CCPA`, `data privacy rights`

### testimonial-disclaimer.html
- URL: `https://nicolejolie.com/testimonial-disclaimer.html`
- Name: `Testimonial Disclaimer | Nicole Jolie`
- Description: `Testimonial disclaimer for nicolejolie.com disclosing that client results are not typical and individual outcomes vary.`
- About: `testimonial disclaimer`, `results disclaimer`

### opt-in-agreement.html
- URL: `https://nicolejolie.com/opt-in-agreement.html`
- Name: `Opt In Agreement | Nicole Jolie`
- Description: `Opt in agreement for email communications from nicolejolie.com and Be Socially Smashing, LLC.`
- About: `opt in agreement`, `email consent`

### anti-class-action.html
- URL: `https://nicolejolie.com/anti-class-action.html`
- Name: `Anti Class Action Waiver | Nicole Jolie`
- Description: `Anti class action waiver for nicolejolie.com requiring individual arbitration for all disputes with Be Socially Smashing, LLC.`
- About: `anti class action`, `arbitration agreement`

### dmca-policy.html
- URL: `https://nicolejolie.com/dmca-policy.html`
- Name: `DMCA Policy | Nicole Jolie`
- Description: `DMCA copyright policy for nicolejolie.com including procedures for reporting copyright infringement.`
- About: `DMCA policy`, `copyright policy`

---

## WHERE TO PLACE SCHEMA BLOCKS IN THE HTML

Place all schema blocks inside `<head>`, in this exact order:

1. Google Tag script
2. Meta tags
3. Sitewide graph block
4. WebPage block
5. Any additional blocks such as FAQPage, Event, or CreativeWork
6. CSS links and other link tags

---

## PAGES THAT CURRENTLY HAVE CORRECT SCHEMA

- index.html — updated March 2026
- work_with_nicole.html — updated March 2026
- checklist_47.html — updated March 2026

## PAGES THAT STILL NEED SCHEMA

All 11 legal pages and all 9 publication pages. Use Claude Code with the relevant skills to update them all at once.

---

*Update this skill first whenever Nicole's positioning, services, credentials, or speaking engagements change. Then carry changes to the pages.*
