$(document).ready(function(){
    
    /* ==========================================================================
       Hero Slick Slider Initialization
       ========================================================================== */
    $('.hero-main-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="ph ph-caret-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ph ph-caret-right"></i></button>'
    });

    /* ==========================================================================
       Tab Switching Logic (Business & Why Us)
       ========================================================================== */
    // Business Tabs
    $('.tab-btn').on('click', function() {
        const tabId = $(this).data('tab');
        
        $('.tab-btn').removeClass('active');
        $(this).addClass('active');
        
        $('.tab-pane').removeClass('active');
        $(`#${tabId}`).addClass('active');
    });

    // Why Us Tabs
    $('.why-tab-btn').on('click', function() {
        const tabId = $(this).data('tab');
        
        $('.why-tab-btn').removeClass('active');
        $(this).addClass('active');
        
        // In the full site, this might swap images or text detail. 
        // For now, we ensure the active state is visually represented as per reference.
    });

    /* ==========================================================================
       Floating Elements Interaction (WhatsApp & Scroll Top Layering)
       ========================================================================== */
    const scrollTopBtn = document.getElementById('scroll-top');
    const whatsappBtn = document.querySelector('.floating-whatsapp');

    function adjustFloatingButtons() {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
            // Move WhatsApp up slightly if Scroll Top is visible to prevent overlap
            whatsappBtn.style.bottom = '7.5rem';
        } else {
            scrollTopBtn.classList.remove('visible');
            whatsappBtn.style.bottom = '2rem';
        }
    }

    window.addEventListener('scroll', adjustFloatingButtons);
    adjustFloatingButtons(); // Initial check

    
    /* ==========================================================================
       Header Scroll Effect & Mobile Nav
       ========================================================================== */
    const header = document.getElementById('header');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const toggleIcon = mobileToggle.querySelector('i');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            toggleIcon.classList.remove('ph-list');
            toggleIcon.classList.add('ph-x');
        } else {
            toggleIcon.classList.remove('ph-x');
            toggleIcon.classList.add('ph-list');
        }
    });

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                navMenu.classList.remove('active');
                toggleIcon.classList.remove('ph-x');
                toggleIcon.classList.add('ph-list');
            }
        });
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    /* ==========================================================================
       Intersection Observer for Animations (Fade/Slide In)
       ========================================================================== */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const animateOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add an animation class based on the element
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Apply animation to specific sections
    const animateElements = document.querySelectorAll('.individual-card, .tab-pane, .why-tab-btn, .step, .testimonial-card, .contact-form-wrapper');
    
    animateElements.forEach(el => {
        el.style.opacity = '0'; // Start hidden
        animateOnScroll.observe(el);
    });

    /* ==========================================================================
       Contact Form Submission Handler (Mock)
       ========================================================================== */
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            // Visual feedback
            btn.textContent = 'Sending...';
            btn.style.opacity = '0.8';
            
            // Mock API call delay
            setTimeout(() => {
                btn.textContent = 'Message Sent Successfully!';
                btn.style.backgroundColor = 'var(--secondary)';
                contactForm.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.backgroundColor = '';
                    btn.style.opacity = '1';
                }, 3000);
            }, 1500);
        });
    }
});
