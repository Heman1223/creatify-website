document.addEventListener('DOMContentLoaded', function() {

    // Promo Banner
    const promoBanner = document.getElementById('promo-banner');
    const closePromoBtn = document.getElementById('close-promo');

    if (promoBanner && closePromoBtn) {
        closePromoBtn.addEventListener('click', () => {
            promoBanner.classList.add('hidden');
        });
    }

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');

    if (hamburger && mainNav) {
        hamburger.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            // Basic hamburger to 'X' toggle
            if (mainNav.classList.contains('active')) {
                hamburger.innerHTML = '&times;'; // Close icon
            } else {
                hamburger.innerHTML = '&#9776;'; // Hamburger icon
            }
        });
    }
    
    // Active navigation link highlighter
    const currentLocation = location.href;
    const navLinks = document.querySelectorAll('.main-nav a');
    const homeLink = document.querySelector('.main-nav a[href="index.html"]');
    
    let onHomePage = location.pathname === '/' || location.pathname.endsWith('index.html');

    navLinks.forEach(link => {
        // Clear existing active class
        link.classList.remove('active');

        // Check for exact match or if it's the home page
        if (link.href === currentLocation || (link === homeLink && onHomePage)) {
            link.classList.add('active');
        }
    });

    // AI Keyword Generator for Blog Page
    const generateKeywordBtn = document.getElementById('generate-keyword-btn');
    const keywordDisplay = document.getElementById('keyword-display');

    if (generateKeywordBtn && keywordDisplay) {
        const keywords = [
            "Design tools", 
            "Free templates", 
            "Creative poster", 
            "Online editing", 
            "Photo design",
            "Graphic design tips",
            "Social media graphics",
            "Brand identity"
        ];

        generateKeywordBtn.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * keywords.length);
            keywordDisplay.textContent = keywords[randomIndex];
        });
    }

    // "For You" Carousel on Home Page
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        const track = carouselContainer.querySelector('.carousel-track');
        const prevBtn = carouselContainer.querySelector('.carousel-btn.prev');
        const nextBtn = carouselContainer.querySelector('.carousel-btn.next');

        const updateButtons = () => {
            if (!track || !prevBtn || !nextBtn) return;
            const scrollLeft = track.scrollLeft;
            const scrollWidth = track.scrollWidth;
            const clientWidth = track.clientWidth;
            
            prevBtn.classList.toggle('hidden', scrollLeft <= 0);
            nextBtn.classList.toggle('hidden', scrollLeft + clientWidth >= scrollWidth - 1); // -1 for precision
        };

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                track.scrollLeft -= track.clientWidth * 0.8; // Scroll by 80% of visible width
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                track.scrollLeft += track.clientWidth * 0.8;
            });
        }

        if (track) {
            track.addEventListener('scroll', updateButtons);
        }
        
        window.addEventListener('resize', updateButtons); // Also update on resize
        updateButtons(); // Initial check
    }
});
