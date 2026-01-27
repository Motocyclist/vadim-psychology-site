/**
 * VADIM PSYCHOLOGY - MAIN JAVASCRIPT
 * Professional, accessible, lightweight
 */

(function() {
    'use strict';

    // ========================================
    // MOBILE NAVIGATION
    // ========================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('is-open');
            
            // Animate hamburger to X
            const lines = this.querySelectorAll('.nav-toggle-line');
            if (!isExpanded) {
                lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                lines[1].style.opacity = '0';
                lines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                lines[0].style.transform = 'none';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('is-open');
                
                const lines = navToggle.querySelectorAll('.nav-toggle-line');
                lines[0].style.transform = 'none';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'none';
            });
        });
    }

    // ========================================
    // LIGHTBOX FOR DIPLOMAS
    // ========================================
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = lightbox ? lightbox.querySelector('.lightbox-image') : null;
    const diplomaCards = document.querySelectorAll('.diploma-card');
    
    if (lightbox && lightboxImage && diplomaCards.length > 0) {
        const diplomaImages = Array.from(diplomaCards).map(function(card) {
            return card.getAttribute('data-diploma');
        });
        
        let currentIndex = 0;

        function openLightbox(index) {
            currentIndex = index;
            lightboxImage.src = diplomaImages[currentIndex];
            lightboxImage.alt = 'Документ ' + (currentIndex + 1);
            lightbox.hidden = false;
            document.body.style.overflow = 'hidden';
            
            // Focus management for accessibility
            lightbox.querySelector('.lightbox-close').focus();
        }

        function closeLightbox() {
            lightbox.hidden = true;
            document.body.style.overflow = '';
            
            // Return focus to the trigger element
            if (diplomaCards[currentIndex]) {
                diplomaCards[currentIndex].focus();
            }
        }

        function showNext() {
            currentIndex = (currentIndex + 1) % diplomaImages.length;
            lightboxImage.src = diplomaImages[currentIndex];
        }

        function showPrev() {
            currentIndex = (currentIndex - 1 + diplomaImages.length) % diplomaImages.length;
            lightboxImage.src = diplomaImages[currentIndex];
        }

        // Open lightbox on diploma click
        diplomaCards.forEach(function(card, index) {
            card.addEventListener('click', function() {
                openLightbox(index);
            });
            
            // Keyboard support
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(index);
                }
            });
        });

        // Close button
        const closeBtn = lightbox.querySelector('.lightbox-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeLightbox);
        }

        // Navigation buttons
        const prevBtn = lightbox.querySelector('.lightbox-prev');
        const nextBtn = lightbox.querySelector('.lightbox-next');
        
        if (prevBtn && diplomaImages.length > 1) {
            prevBtn.addEventListener('click', showPrev);
        } else if (prevBtn) {
            prevBtn.style.display = 'none';
        }
        
        if (nextBtn && diplomaImages.length > 1) {
            nextBtn.addEventListener('click', showNext);
        } else if (nextBtn) {
            nextBtn.style.display = 'none';
        }

        // Keyboard navigation
        lightbox.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight' && diplomaImages.length > 1) {
                showNext();
            } else if (e.key === 'ArrowLeft' && diplomaImages.length > 1) {
                showPrev();
            }
        });

        // Close on backdrop click
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without jumping
                history.pushState(null, '', targetId);
            }
        });
    });

    // ========================================
    // HEADER SCROLL EFFECT
    // ========================================
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateHeader() {
        if (window.scrollY > 50) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }, { passive: true });

    // ========================================
    // FORM VALIDATION ENHANCEMENT
    // ========================================
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const consentCheckbox = document.getElementById('consent');
            
            if (consentCheckbox && !consentCheckbox.checked) {
                e.preventDefault();
                alert('Пожалуйста, подтвердите согласие на обработку персональных данных');
                consentCheckbox.focus();
                return false;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('.form-submit');
            if (submitBtn) {
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Отправка...';
                submitBtn.disabled = true;
                
                // Reset after a short delay (since it's a mailto form)
                setTimeout(function() {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });
    }

    // ========================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ========================================
    if ('IntersectionObserver' in window) {
        const animatedElements = document.querySelectorAll('.service-card, .format-item, .method-item, .pricing-card');
        
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach(function(el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(el);
        });

        // Add CSS for visible state
        const style = document.createElement('style');
        style.textContent = '.is-visible { opacity: 1 !important; transform: translateY(0) !important; }';
        document.head.appendChild(style);
    }

    // ========================================
    // COOKIE CONSENT (Simple version)
    // ========================================
    const COOKIE_CONSENT_KEY = 'vadim-psychology-cookie-consent';
    
    function hasCookieConsent() {
        return localStorage.getItem(COOKIE_CONSENT_KEY) === 'true';
    }
    
    function setCookieConsent() {
        localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    }

    // Check consent on form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            setCookieConsent();
        });
    }

    // ========================================
    // CONSOLE MESSAGE
    // ========================================
    console.log('%cВадим Жеребцов — Психолог-консультант', 'color: #3D6B6B; font-size: 16px; font-weight: bold;');
    console.log('%cСайт разработан с заботой о вашей конфиденциальности', 'color: #5A6B6B; font-size: 12px;');

})();
