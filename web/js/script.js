/**
 * MyWeb - JavaScript
 * Add interactivity and dynamic features to the webpage
 */

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll behavior for anchor links
    setupSmoothScroll();
    
    // Add animation triggers for elements on scroll
    setupScrollAnimations();
});

/**
 * Smooth scroll for anchor links
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Trigger animations when elements come into view
 */
function setupScrollAnimations() {
    const sections = document.querySelectorAll('section');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        sections.forEach(section => {
            observer.observe(section);
        });
    }
}

/**
 * Add custom event listeners or other interactive features here
 */
console.log('MyWeb script loaded successfully!');
