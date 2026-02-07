document.addEventListener('DOMContentLoaded', () => {
    
    // Elements
    const searchInput = document.getElementById('course-search');
    const courseCards = document.querySelectorAll('.course-card');
    const homeLink = document.getElementById('home-link');
    const contactLink = document.getElementById('contact-link');
    const footer = document.getElementById('contact-footer');

    // --- 1. Demo Buttons (Telegram Links) ---
    // This ensures they open in a new tab without interference
    const demoButtons = document.querySelectorAll('.demo-button');
    demoButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // We DO NOT call e.preventDefault() here 
            // This allows the href to work naturally
            const url = button.getAttribute('href');
            if (url && url !== "#") {
                window.open(url, '_blank');
            }
        });
    });

    // --- 2. Buy Now Buttons (Instagram) ---
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); 
            window.open('https://www.instagram.com/course_sphere_', '_blank');
        });
    });

    // --- 3. Smooth Scroll: Home ---
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- 4. Smooth Scroll: Contact (Footer) ---
    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        footer.scrollIntoView({ behavior: 'smooth' });
    });

    // --- 5. Real-time Search Filter ---
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase().trim();

        courseCards.forEach(card => {
            const title = card.querySelector('.course-title').textContent.toLowerCase();
            
            if (title.includes(term)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });

        const categories = document.querySelectorAll('.category-section');
        categories.forEach(cat => {
            const allCardsInCat = cat.querySelectorAll('.course-card');
            let hasVisible = false;
            allCardsInCat.forEach(c => {
                if (c.style.display !== "none") hasVisible = true;
            });
            cat.style.display = hasVisible ? "block" : "none";
        });
    });
});