document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
  <footer class="site-footer" style="background-color: #000421; color: white; padding: 60px 0 30px; font-family: 'Inter', sans-serif;">
        <div class="container" style="max-width: 1100px; margin: 0 auto; padding: 0 20px;">
            <div class="footer-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; text-align: left;">
                <div class="footer-col">
                    <h3 style="color: #ede0c7; font-size: 18px; margin-bottom: 15px; text-transform: uppercase;">Be Socially Smashing, LLC</h3>
                    <p style="color: #f9f7f2; opacity: 0.8; font-size: 14px; line-height: 1.6;">Cross Platform AI Authority Reports for capital intensive industries. Diagnosing whether AI systems trust your organization enough to recommend it.</p>
                    <img src="https://nicolejoliewebsite.s3.us-east-2.amazonaws.com/TT+200x200+Dark+Background.png" alt="Trust Triangle Framework" style="margin-top: 20px; max-width: 200px; width: 100%; height: auto;">
                </div>
                <div class="footer-col">
                    <h3 style="color: #ede0c7; font-size: 18px; margin-bottom: 15px; text-transform: uppercase;">Contact</h3>
                    <p style="color: #f9f7f2; font-size: 14px; margin-bottom: 5px;">nicole@nicolejolie.com</p>
                    <p style="color: #f9f7f2; font-size: 14px;">Austin, TX 78701</p>
                </div>
                <div class="footer-col">
                    <h3 style="color: #ede0c7; font-size: 18px; margin-bottom: 15px; text-transform: uppercase;">Legal</h3>
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        <li style="margin-bottom: 8px;"><a href="privacy-policy.html" style="color: white; text-decoration: none; font-size: 14px; opacity: 0.8;">Privacy Policy</a></li>
                        <li style="margin-bottom: 8px;"><a href="gdpr-ccpa.html" style="color: white; text-decoration: none; font-size: 14px; opacity: 0.8;">GDPR and CCPA</a></li>
                        <li style="margin-bottom: 8px;"><a href="legal-disclaimer.html" style="color: white; text-decoration: none; font-size: 14px; opacity: 0.8;">Legal Disclaimer</a></li>
                        <li style="margin-bottom: 8px;"><a href="testimonial-disclaimer.html" style="color: white; text-decoration: none; font-size: 14px; opacity: 0.8;">Testimonial Disclaimer</a></li>
                        <li style="margin-bottom: 8px;"><a href="opt-in-agreement.html" style="color: white; text-decoration: none; font-size: 14px; opacity: 0.8;">Opt In Agreement</a></li>
                        <li style="margin-bottom: 8px;"><a href="anti-class-action.html" style="color: white; text-decoration: none; font-size: 14px; opacity: 0.8;">Anti Class Action</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3 style="font-size: 18px; margin-bottom: 15px;">&nbsp;</h3>
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        <li style="margin-bottom: 8px;"><a href="terms-of-service.html" style="color: white; text-decoration: none; font-size: 14px; opacity: 0.8;">Terms of Service</a></li>
                        <li style="margin-bottom: 8px;"><a href="refund-chargeback-policy.html" style="color: white; text-decoration: none; font-size: 14px; opacity: 0.8;">Refund Policy</a></li>
                        <li style="margin-bottom: 8px;"><a href="earnings-disclaimer.html" style="color: white; text-decoration: none; font-size: 14px; opacity: 0.8;">Earnings Disclaimer</a></li>
                        <li style="margin-bottom: 8px;"><a href="affiliate-disclaimer.html" style="color: white; text-decoration: none; font-size: 14px; opacity: 0.8;">Affiliate Disclaimer</a></li>
                        <li style="margin-bottom: 8px;"><a href="dmca-policy.html" style="color: white; text-decoration: none; font-size: 14px; opacity: 0.8;">DMCA Policy</a></li>
                    </ul>
                </div>
            </div>
            <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; text-align: left; font-size: 12px; color: rgba(255,255,255,0.5); margin-top: 40px;">
                <p>&copy; 2026 Be Socially Smashing, LLC. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    `;

    const footerContainer = document.getElementById('global-footer');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
});
