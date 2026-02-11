// ===== Smooth Scrolling and Navigation =====
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('.section, .hero');

    function setActiveLink() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Navbar Background on Scroll
    const navbar = document.getElementById('navbar');

    function handleScroll() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        setActiveLink();
    }

    window.addEventListener('scroll', handleScroll);

    // ===== Dynamic Gallery Loading =====
    const galleryGrid = document.getElementById('galleryGrid');
    const imageExtensions = ['jpg', 'jpeg', 'png'];
    const maxImageNumber = 100; // Maximum number to check
    let galleryImages = [];

    // Function to check if image exists and load it
    async function loadGalleryImages() {
        const loadPromises = [];

        for (let i = 1; i <= maxImageNumber; i++) {
            for (const ext of imageExtensions) {
                loadPromises.push(checkImage(i, ext));
            }
        }

        const results = await Promise.all(loadPromises);
        const validImages = results.filter(img => img !== null);

        // Sort by image number
        validImages.sort((a, b) => a.number - b.number);

        // Remove duplicates (keep first extension found)
        const uniqueImages = [];
        const seenNumbers = new Set();
        validImages.forEach(img => {
            if (!seenNumbers.has(img.number)) {
                seenNumbers.add(img.number);
                uniqueImages.push(img);
            }
        });

        // Generate gallery HTML
        uniqueImages.forEach((img, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${img.path}" alt="Performance Photo ${img.number}" loading="lazy">
                <div class="gallery-overlay">
                    <div class="gallery-info">
                        <i class="gallery-icon">🎹</i>
                    </div>
                </div>
            `;
            galleryGrid.appendChild(galleryItem);
            galleryImages.push(img.path);
        });

        // Initialize lightbox after images are loaded
        initializeLightbox();
    }

    function checkImage(number, extension) {
        return new Promise((resolve) => {
            const img = new Image();
            const path = `images/${number}.${extension}`;

            img.onload = () => resolve({ number, path });
            img.onerror = () => resolve(null);

            img.src = path;
        });
    }

    // Load gallery images on page load
    loadGalleryImages();

    // ===== Gallery Lightbox =====
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');

    let currentImageIndex = 0;

    function initializeLightbox() {
        const galleryItems = document.querySelectorAll('.gallery-item');

        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => openLightbox(index));
        });
    }

    function openLightbox(index) {
        if (galleryImages.length === 0) return;
        currentImageIndex = index;
        lightboxImg.src = galleryImages[index];
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    function showPrevImage() {
        if (galleryImages.length === 0) return;
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImageIndex];
    }

    function showNextImage() {
        if (galleryImages.length === 0) return;
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImageIndex];
    }

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPrevImage);
    }

    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }

    // Close lightbox when clicking outside the image
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Keyboard navigation for lightbox
    document.addEventListener('keydown', function(e) {
        if (lightbox && lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            }
        }
    });

    // ===== Intersection Observer for Animations =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and items for animation
    const animatedElements = document.querySelectorAll(
        '.education-card, .masterclass-item, .timeline-item, .contact-item, .composer-section'
    );

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // ===== Smooth Scroll Behavior =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Timeline Animation on Scroll =====
    const timelineItems = document.querySelectorAll('.timeline-item');

    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, {
        threshold: 0.2
    });

    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;

        // Alternate slide direction
        if (index % 2 === 0) {
            item.style.transform = 'translateX(-50px)';
        } else {
            item.style.transform = 'translateX(50px)';
        }

        timelineObserver.observe(item);
    });

    // ===== Lazy Loading for Images =====
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ===== Parallax Effect for Hero Section =====
    const hero = document.querySelector('.hero');

    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroHeight = hero.offsetHeight;

            if (scrolled < heroHeight) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                hero.style.opacity = 1 - (scrolled / heroHeight);
            }
        });
    }

    // ===== Cursor Effect (Optional Enhancement) =====
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor follow
    function animateCursor() {
        const speed = 0.15;
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Cursor hover effects
    const hoverElements = document.querySelectorAll('a, button, .education-card, .masterclass-item, .timeline-content');

    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.classList.add('cursor-hover');
        });

        element.addEventListener('mouseleave', function() {
            cursor.classList.remove('cursor-hover');
        });
    });

    // ===== Contact Form Validation (if you add a form later) =====
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Add your form submission logic here
            const formData = new FormData(contactForm);

            // Example: Show success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // ===== Back to Top Button =====
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===== Performance: Debounce Scroll Events =====
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debounce to scroll handler
    window.addEventListener('scroll', debounce(handleScroll, 10));

    // ===== Accessibility: Keyboard Navigation =====
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // ===== Loading Animation =====
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // ===== Console Message =====
    console.log('%c✨ Welcome to Alice Tung\'s Portfolio ✨',
        'font-size: 20px; font-weight: bold; color: #9b87ab; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);');
    console.log('%cPianist | Teacher | Performer',
        'font-size: 14px; color: #6b5b7a; font-style: italic;');
});

// ===== Additional CSS for Interactive Elements =====
const style = document.createElement('style');
style.textContent = `
    .custom-cursor {
        width: 20px;
        height: 20px;
        border: 2px solid #9b87ab;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: width 0.3s, height 0.3s, border-color 0.3s;
        display: none;
    }

    @media (min-width: 1024px) {
        .custom-cursor {
            display: block;
        }

        body {
            cursor: none;
        }

        a, button {
            cursor: none;
        }
    }

    .custom-cursor.cursor-hover {
        width: 40px;
        height: 40px;
        border-color: #d4c5e2;
        background: rgba(212, 197, 226, 0.2);
    }

    .back-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #9b87ab, #d4c5e2);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 5px 20px rgba(155, 135, 171, 0.3);
        z-index: 999;
    }

    .back-to-top.visible {
        opacity: 1;
        visibility: visible;
    }

    .back-to-top:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(155, 135, 171, 0.4);
    }

    body.loaded {
        animation: fadeIn 0.5s ease;
    }

    @media (max-width: 768px) {
        .back-to-top {
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
            font-size: 20px;
        }
    }
`;
document.head.appendChild(style);
