---
name: nj-footer
description: Single source of truth for the footer on nicolejolie.com. Use this skill whenever any work touches the footer of nicolejolie.com — including reading, editing, rebuilding, dropping into any HTML page, updating legal links, changing colors, or modifying any footer CSS. Never recreate or modify the footer without reading this skill first. This skill contains the locked HTML, CSS, all 11 legal page links, contact info, Trust Triangle image URL, brand colors, placement instructions, and the orange floating bar with Work With Nicole button.
---

# SKILL: Footer — nicolejolie.com
**Status: LOCKED**
**Last Updated: March 2026**
**Owner: Nicole Jolie — Be Socially Smashing, LLC**

---

## PURPOSE OF THIS SKILL

This skill is the single source of truth for the footer on nicolejolie.com.

The footer has two parts that must always be deployed together:
1. The main footer section
2. The orange floating bar with the Work With Nicole button and scroll script

Both parts must appear on every page. Never deploy one without the other.

---

## NON-NEGOTIABLE RULES

1. Do not remove any of the 11 legal page links. All 11 must be present at all times.
2. Do not add Nicole's email address anywhere. All contact goes to LinkedIn only.
3. Do not load the footer via a JS file. It must be printed directly in the HTML.
4. Do not change the LinkedIn href without explicit instruction from Nicole.
5. Do not change the Trust Triangle image without explicit instruction from Nicole.
6. Do not change brand colors without explicit instruction from Nicole.
7. Do not use em-dashes, hyphens in content text, or quotation marks in footer copy.
8. All legal page links use root paths like `/privacy-policy.html`. Never use `../` relative paths.
9. The orange floating bar and scroll script must always be included after the footer.
10. The Work With Nicole button in the floating bar always links to `/work_with_nicole.html`.

---

## BRAND COLORS

| Role | Value |
|------|-------|
| Footer background | `#000421` |
| Heading color | `#ede0c7` |
| Body text | `#f9f7f2` |
| Floating bar background | `#ff6b36` |
| Floating bar text | `#ede0c7` |
| Button background | `#923f26` |
| Button hover | `#7a3320` |
| Copyright text | `rgba(255,255,255,0.5)` |
| Border | `rgba(255,255,255,0.1)` |

---

## COMPLETE LOCKED FOOTER HTML

Paste this block as the last element inside `<body>` on every page, replacing any existing footer.

```html
    <!-- FOOTER -->
    <footer class="site-footer" style="background-color: #000421; color: white; padding: 60px 0 30px; font-family: 'Inter', sans-serif;">
        <div class="container" style="max-width: 1100px; margin: 0 auto; padding: 0 20px;">
            <div class="footer-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; text-align: left;">
                <div class="footer-col">
                    <h3 style="color: #ede0c7; font-size: 18px; margin-bottom: 15px; text-transform: uppercase;">What We Do</h3>
                    <p style="color: #f9f7f2; opacity: 0.8; font-size: 14px; line-height: 1.6;">Cross Platform AI Authority Reports for capital intensive industries. Diagnosing whether AI systems trust your organization enough to recommend it.</p>
                    <img src="https://nicolejoliewebsite.s3.us-east-2.amazonaws.com/TT+200x200+Dark+Background.png" alt="Trust Triangle Framework showing Authority, Recommendability, and Citation" style="margin-top: 20px; max-width: 200px; width: 100%; height: auto;">
                </div>
                <div class="footer-col">
                    <h3 style="color: #ede0c7; font-size: 18px; margin-bottom: 15px; text-transform: uppercase;">Contact</h3>
                    <p style="color: #f9f7f2; font-size: 14px; margin-bottom: 5px;"><a href="https://www.linkedin.com/in/nicolejolie/" target="_blank" rel="noopener noreferrer" style="color: #f9f7f2; text-decoration: underline;">Get In Touch Here</a></p>
                    <p style="color: #f9f7f2; font-size: 14px;">1401 Lavaca St., #40861, Austin, TX 78701</p>
                </div>
                <div class="footer-col">
                    <h3 style="color: #ede0c7; font-size: 18px; margin-bottom: 15px; text-transform: uppercase;">Legal</h3>
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        <li style="margin-bottom: 8px;"><a href="/privacy-policy.html" style="color: white; text-decoration: none; font-size: 14px; opacity: 0.8;">Privacy Policy</a></li>
                        <li style="margin-bottom: 8px;"><a href="/gdpr-ccpa.html" style="color: white; text-decoration: none; font-size: 14px; opacity: 0.8;">GDPR and CCPA</a></li>
                        <li style="margin-bottom: 8px;"><a href="/legal-disclaimer.html" style="color: white; text-decoration: none; font-size: 14px; opacity: 0.8;">Legal Disclaimer</a></li>
                        <li style="margin-bottom: 8px;"><a href="/testimonial-disclaimer.html" style="color: white; text-decoration: none; font-size: 14px; opacity: 0.8;">Testimonial Disclaimer</a></li>
                        <li style="margin-bottom: 8px;"><a href="/opt-in-agreement.html" style="color: white; text-decoration: none; font-size: 14px; opacity: 0.8;">Opt In Agreement</a></li>
                        <li style="margin-bottom: 8px;"><a href="/anti-class-action.html" style="color: white; text-decoration: none; font-size: 14px; opacity: 0.8;">Anti Class Action</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3 style="font-size: 18px; margin-bottom: 15px;">&nbsp;</h3>
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        <li style="margin-bottom: 8px;"><a href="/terms-of-service.html" style="color: white; text-decoration: none; font-size: 14px; opacity: 0.8;">Terms of Service</a></li>
                        <li style="margin-bottom: 8px;"><a href="/refund-chargeback-policy.html" style="color: white; text-decoration: none; font-size: 14px; opacity: 0.8;">Refund Policy</a></li>
                        <li style="margin-bottom: 8px;"><a href="/earnings-disclaimer.html" style="color: white; text-decoration: none; font-size: 14px; opacity: 0.8;">Earnings Disclaimer</a></li>
                        <li style="margin-bottom: 8px;"><a href="/affiliate-disclaimer.html" style="color: white; text-decoration: none; font-size: 14px; opacity: 0.8;">Affiliate Disclaimer</a></li>
                        <li style="margin-bottom: 8px;"><a href="/dmca-policy.html" style="color: white; text-decoration: none; font-size: 14px; opacity: 0.8;">DMCA Policy</a></li>
                    </ul>
                </div>
            </div>
            <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; text-align: left; font-size: 12px; color: rgba(255,255,255,0.5); margin-top: 40px;">
                <p>&copy; 2026 Be Socially Smashing, LLC. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    <!-- FLOATING BAR — always include with footer, never remove -->
    <div id="floating-bar" class="fixed bottom-0 left-0 w-full border-t border-gray-300 p-6 shadow-2xl flex items-center justify-between md:justify-center gap-8 z-50 transform translate-y-full" style="background-color: #ff6b36;">
        <div class="hidden md:block font-bold text-lg" style="color: #ede0c7;">
            Is AI recommending you or your competitor?
        </div>
        <a href="https://nicolejolie.com/work_with_nicole.html" class="bg-[var(--primary-rust)] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#7a3320] shadow-xl hover:scale-105 transition-transform">
            Work With Nicole
        </a>
    </div>

    <!-- FLOATING BAR SCROLL SCRIPT — always include with footer -->
    <script>
        window.addEventListener('scroll', () => {
            const bar = document.getElementById('floating-bar');
            if (window.scrollY > 700) {
                bar.classList.remove('translate-y-full');
            } else {
                bar.classList.add('translate-y-full');
            }
        });
    </script>
```

---

## PLACEMENT INSTRUCTIONS

1. Remove any existing footer HTML from the page
2. Remove any existing floating bar HTML from the page
3. Remove any existing scroll script for the floating bar
4. Remove any reference to `footer.js`
5. Paste the complete locked footer HTML above as the last elements inside `</body>`

---

## ALL 11 LEGAL PAGE URLS — QUICK REFERENCE

| Page | URL |
|------|-----|
| Privacy Policy | `/privacy-policy.html` |
| GDPR and CCPA | `/gdpr-ccpa.html` |
| Legal Disclaimer | `/legal-disclaimer.html` |
| Testimonial Disclaimer | `/testimonial-disclaimer.html` |
| Opt In Agreement | `/opt-in-agreement.html` |
| Anti Class Action | `/anti-class-action.html` |
| Terms of Service | `/terms-of-service.html` |
| Refund Policy | `/refund-chargeback-policy.html` |
| Earnings Disclaimer | `/earnings-disclaimer.html` |
| Affiliate Disclaimer | `/affiliate-disclaimer.html` |
| DMCA Policy | `/dmca-policy.html` |

---

## NOTE FOR CLAUDE CODE

When applying this footer to all pages:
1. Read this skill file
2. For every HTML file in the repo find the existing footer and floating bar
3. Replace both with the locked HTML above exactly as written
4. Do not change any other content on the page
5. Use root paths for all legal links. Never use `../`
6. Commit with message: Update all pages with locked footer and floating bar
7. Push to main

---

*Change the footer here first. Then carry it to every page.*
