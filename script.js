// script.js
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    const navLinks = document.querySelectorAll('.nav-links a');

    ctaButton.addEventListener('click', () => {
        alert('Thanks for your interest! We\'ll be in touch soon.');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});