document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
    <header class="site-header">
        <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
            <div class="logo">
                <a href="index.html" style="color: var(--text-light); text-decoration: none;">NICOLE JOLIE</a>
            </div>
            <nav>
                <ul class="nav-links">
                    <li><a href="/publications/index.html">Publications</a></li>
                    <li><a href="/#faq-section">FAQ</a></li>
                    <li><a href="/#about-nicole">About</a></li>
   <li>
    <a href="https://nicolejolie.com/work_with_nicole.html" style="text-decoration: none;">
        <button class="btn-primary" style="padding: 8px 16px; font-size: 12px; cursor: pointer;">
            Work With Nicole
        </button>
    </a>
</li>
            </nav>
        </div>
    </header>
    `;
    const headerContainer = document.getElementById('global-header');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }
});
