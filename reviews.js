document.addEventListener("DOMContentLoaded", function() {
    const reviewsHTML = `
    <section id="reviews" class="bg-ivory" style="padding: 80px 0; text-align: center;">
        <div class="container">
            <h2 class="text-rust">What Clients Say</h2>
            <div style="overflow-x: auto; white-space: nowrap; padding-bottom: 20px; margin-top: 40px; display: flex; gap: 20px;">
                
                <div style="display: inline-block; width: 300px; white-space: normal; vertical-align: top; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border: 1px solid #ddd;">
                    <div style="color: var(--accent-ochre); margin-bottom: 10px;"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p style="font-size: 14px; font-style: italic; margin-bottom: 15px; color: var(--text-dark);">"Nicole is absolutely amazing at delivering ideas and step-by-step processes... Without her help I would never have been able to get these done."</p>
                    <strong style="color: var(--primary-rust);">April Waverly</strong>
                </div>

                <div style="display: inline-block; width: 300px; white-space: normal; vertical-align: top; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border: 1px solid #ddd;">
                    <div style="color: var(--accent-ochre); margin-bottom: 10px;"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p style="font-size: 14px; font-style: italic; margin-bottom: 15px; color: var(--text-dark);">"Everything was finished early than promised. I’d refer Nicole to anyone needing help."</p>
                    <strong style="color: var(--primary-rust);">Bill Williams</strong>
                </div>

                <div style="display: inline-block; width: 300px; white-space: normal; vertical-align: top; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border: 1px solid #ddd;">
                    <div style="color: var(--accent-ochre); margin-bottom: 10px;"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p style="font-size: 14px; font-style: italic; margin-bottom: 15px; color: var(--text-dark);">"She was so up front and clear on what her mission was. Great Lady. 12 out of 10!"</p>
                    <strong style="color: var(--primary-rust);">Tracy Shudo</strong>
                </div>

                <div style="display: inline-block; width: 300px; white-space: normal; vertical-align: top; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border: 1px solid #ddd;">
                    <div style="color: var(--accent-ochre); margin-bottom: 10px;"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p style="font-size: 14px; font-style: italic; margin-bottom: 15px; color: var(--text-dark);">"Her ability to understand the problem and then create a unique solution is fantastic."</p>
                    <strong style="color: var(--primary-rust);">Jonathan Drake</strong>
                </div>

                 <div style="display: inline-block; width: 300px; white-space: normal; vertical-align: top; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border: 1px solid #ddd;">
                    <div style="color: var(--accent-ochre); margin-bottom: 10px;"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p style="font-size: 14px; font-style: italic; margin-bottom: 15px; color: var(--text-dark);">"We could not be happier with the service... Her dedication to a breakthrough for us was super appreciated."</p>
                    <strong style="color: var(--primary-rust);">Anne Murphy</strong>
                </div>
                
                 <div style="display: inline-block; width: 300px; white-space: normal; vertical-align: top; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border: 1px solid #ddd;">
                    <div style="color: var(--accent-ochre); margin-bottom: 10px;"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p style="font-size: 14px; font-style: italic; margin-bottom: 15px; color: var(--text-dark);">"Nicole has a deep understanding of how to use AI automation... practical, results-focused way."</p>
                    <strong style="color: var(--primary-rust);">Curt Kempf</strong>
                </div>

            </div>
        </div>
    </section>
    `;

    const reviewsContainer = document.getElementById('global-reviews');
    if (reviewsContainer) {
        reviewsContainer.innerHTML = reviewsHTML;
    }
});
