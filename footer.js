document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
    <footer class="site-footer">
        <div class="container">
            <div class="footer-grid">
                
                <div class="footer-col">
                    <h3 style="color: var(--primary-rust);">NICOLE JOLIE</h3>
                    <p style="color: var(--bg-ivory); opacity: 0.8; margin-top: 10px;">AI visibility and AI agent consulting for service businesses.</p>
                </div>

                <div class="footer-col">
                    <h3 style="color: var(--primary-rust);">CONTACT</h3>
                    <p style="color: var(--bg-ivory); margin-top: 10px;">nicole@sociallysmashing.com</p>
                    <p style="color: var(--bg-ivory);">Austin, TX 78701</p>
                </div>

                <div class="footer-col">
                    <h3 style="color: var(--primary-rust);">LEGAL</h3>
                    <ul class="footer-links">
                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                        <li><a href="gdpr-ccpa.html">GDPR & CCPA</a></li>
                        <li><a href="legal-disclaimer.html">Legal Disclaimer</a></li>
                        <li><a href="testimonial-disclaimer.html">Testimonial Disclaimer</a></li>
                        <li><a href="opt-in-agreement.html">Opt-In Agreement</a></li>
                        <li><a href="anti-class-action.html">Anti Class Action</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h3>&nbsp;</h3>
                    <ul class="footer-links">
                        <li><a href="terms-of-service.html">Terms of Service</a></li>
                        <li><a href="refund-policy.html">Refund Policy</a></li>
                        <li><a href="earnings-disclaimer.html">Earnings Disclaimer</a></li>
                        <li><a href="affiliate-disclaimer.html">Affiliate Disclaimer</a></li>
                        <li><a href="dmca-policy.html">DMCA Policy</a></li>
                    </ul>
                </div>

            </div>

            <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; text-align: left; font-size: 12px; color: rgba(255,255,255,0.5);">
                <p>&copy; 2025 Nicole Jolie. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    `;

    const footerContainer = document.getElementById('global-footer');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
});
