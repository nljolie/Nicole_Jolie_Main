document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
    <header style="background-color: #000421 !important; padding: 20px 0;">
        <div style="display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 0 20px;">
            <a href="/index.html" style="color: white; text-decoration: none; font-weight: bold; font-family: sans-serif;">NICOLE JOLIE</a>
            <nav>
                <ul style="list-style: none; display: flex; gap: 20px; align-items: center; margin: 0; padding: 0;">
                    <li><a href="/publications/index.html" style="color: white; text-decoration: none; font-family: sans-serif;">Publications</a></li>
                    <li><a href="/index.html#faq-section" style="color: white; text-decoration: none; font-family: sans-serif;">FAQ</a></li>
                    <li><a href="/index.html#about-nicole" style="color: white; text-decoration: none; font-family: sans-serif;">About</a></li>
                    <li>
                        <a href="/work_with_nicole.html" style="text-decoration: none;">
                            <button style="background: #923f26; color: white; border: none; padding: 8px 16px; cursor: pointer; border-radius: 50px; font-weight: bold;">Work With Nicole</button>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>`;
    const container = document.getElementById('global-header');
    if (container) { container.innerHTML = headerHTML; }
});
