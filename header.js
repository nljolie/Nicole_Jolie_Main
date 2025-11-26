document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
    <header class="site-header">
        <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
            <div class="logo">
                <a href="index.html" style="color: var(--text-light); text-decoration: none;">NICOLE JOLIE</a>
            </div>
            <nav>
                <ul class="nav-links">
                    <li><a href="index.html#about">About</a></li>
                    <li><a href="index.html#genx-ai">Join GenX AI</a></li>
                    <li><a href="index.html#faq">FAQ</a></li>
                    <li><button class="btn-primary" onclick="openModal()" style="padding: 8px 16px; font-size: 12px;">Get The Guide</button></li>
                </ul>
            </nav>
        </div>
    </header>
    `;

    const headerContainer = document.getElementById('global-header');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }
});
