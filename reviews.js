document.addEventListener("DOMContentLoaded", function() {
    const reviewsHTML = `
    <section id="reviews" class="bg-cream" style="padding: 100px 0;">
        <div class="container">
            <h2 class="section-title text-rust" style="text-align: center;">Client Testimonials</h2>
            <p style="text-align: center; margin-bottom: 20px; font-size: 20px;">Real results from real clients.</p>
            
            <div class="reviews-grid">
                
                <div class="review-card-static">
                    <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p class="review-body">"Nicole is absolutely amazing at delivering ideas and step-by-step processes to create content and videos. She can use 10 seconds of a pitch to create several month’s worth of content to be posted. Not only does she give you the material she gives you the confidence to really go for it. After a few discussions with her I finally jumped on the TikTok train to promote my book. Since joining with her steps I made 40+ videos in one week and posted them to gain traction on TikTok. Without her help I would never have been able to get these done or feel confident making them. She is incredible!!"</p>
                    <span class="review-name">April Waverly</span>
                </div>

                <div class="review-card-static">
                    <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p class="review-body">"Nicole did an outstanding job for me and my business. I’m not one that has much experience or knowledge in this area, but she made it easy and guided me through what we needed. And to top that, everything was finished early than promised. I’d refer Nicole to anyone needing help in making your business presence known and bringing in more clients."</p>
                    <span class="review-name">Bill Williams</span>
                </div>

                <div class="review-card-static">
                    <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p class="review-body">"I was in a group with Nicole. She was so up front and clear on what her mission was to help so many others. To know what tools and skills they need to have, put in place so they can reach their goals. Great Lady. 12 out of 10!"</p>
                    <span class="review-name">Tracy Shudo</span>
                </div>

                <div class="review-card-static">
                    <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p class="review-body">"The content and the character shown and implemented by Nicole is something everyone should strive for. Her ability to understand the problem and then create a unique solution is fantastic"</p>
                    <span class="review-name">Jonathan Drake</span>
                </div>

                <div class="review-card-static">
                    <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p class="review-body">"Nicole is absolutely amazing! I found her on Clubhouse and have become a huge fan and just want to soak up her guidance and value 24/7. She is so passionate about helping others and is incredibly responsive. She is also very inclusive and has this magic way of bringing out the questions that you didn't even know you had, then answer them with mind-blowing techniques!"</p>
                    <span class="review-name">Leah Day</span>
                </div>

                <div class="review-card-static">
                    <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p class="review-body">"Nicole Jolie is very experienced and very helpful when it comes to marketing advice and best practices. I listen and follow her advice as she is so good. I know the advice is accurate and very trustable. Mary Sloane."</p>
                    <span class="review-name">Mary Sloane</span>
                </div>

                <div class="review-card-static">
                    <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p class="review-body">"We highly recommend working with Nicole. We could not be happier with the service that she provided for our company. The newfound understanding of our business operations, brand visibility, and how we can use AI to advance our business will definitely lead to growth. Her dedication to a breakthrough for us was super appreciated - a benefit above and beyond our expectations. Thank you, Nicole!"</p>
                    <span class="review-name">Anne Murphy</span>
                    <span class="review-title">AI Operations Consultant</span>
                </div>

                <div class="review-card-static">
                    <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p class="review-body">"Nicole has a deep understanding of how to use AI automation to simplify business growth and was able to clearly explain complex ideas in a practical, results-focused way. I’d recommend her to any leader looking to modernize their client acquisition and marketing systems."</p>
                    <span class="review-name">Curt Kempf</span>
                    <span class="review-title">Solutions Engineer</span>
                </div>

                <div class="review-card-static">
                    <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p class="review-body">"Nicole is very professional and is an expert in creating quality product launches. I first engaged with Nicole back in 2011. She was the person that helped me think about getting online. I joined her newsletter and have since utilized portions of her template to create my own winning campaigns. In addition to marketing, Nicole is an incredible trainer, assisting triathletes with the swimming portion of the competition. I have an aspiration to compete in an Ironman and I will definitely consult with her when I am ready to pursue that goal."</p>
                    <span class="review-name">Flo Bradley</span>
                </div>

                <div class="review-card-static">
                    <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p class="review-body">"I was working out in the gym shortly after making a 3rd degree sprained ankle from playing soccer. I had just started marathon training. I was in the gym limping around when I was approached by Nicole. She reccommeded a work out routine and it was a kick in my pants. She had me start on the TRX cables (which I now own). It was a work out everytime I got on. In regards to my ankle, she was able to rehabilitate myself and actually get me ready for my marathon despite the fact that I was 6 weeks behind in my running schedule. Her training and knowledge lead me finsish the Santa Barbara Marathon in a respectable time for a first time runner. Thank you Nicole, I would reccomened Nicole and the TRX workout."</p>
                    <span class="review-name">Scott Allen</span>
                    <span class="review-title">Welding Engineer Specialist</span>
                </div>

                <div class="review-card-static">
                    <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p class="review-body">"I personally endorse Nicole, for any Internet Marketing needs. She knows how to get immediate results and demonstrates that on a daily basis in her own business, while assisting others to do the same."</p>
                    <span class="review-name">Mark Hayes</span>
                    <span class="review-title">Business Consultant</span>
                </div>

                <div class="review-card-static">
                    <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p class="review-body">"Nicole is such a pleasure to talk to and work with because of her upbeat personality. She is goal-oriented and informed about the services and programs she participates in. Combining the total body, mind and spirit in whatever she puts her skills toward, Nicole is also more than willing to extend a hand and help others achieve their dreams."</p>
                    <span class="review-name">Theresa Cahill</span>
                    <span class="review-title">Writer & Editor</span>
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
