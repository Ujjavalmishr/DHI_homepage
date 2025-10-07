document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarContainer = document.querySelector('.navbar-container');
    const slides = document.querySelectorAll('.slider-slide');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentSlide = 0;

   mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        navbarContainer.classList.toggle('menu-expanded');

            const showSlide = (index) => {
                slides.forEach((slide, i) => {
                    slide.classList.remove('active');
                    if (i === index) {
                        slide.classList.add('active');
                    }
                });
            };

            rightArrow.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            });

            leftArrow.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(currentSlide);
            });

            if (slides.length > 0) {
                 showSlide(currentSlide);
            }
            
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const navbarContainer = document.querySelector('.navbar-container');

            if (mobileMenuBtn && mobileMenu) {
                mobileMenuBtn.addEventListener('click', () => {
                    mobileMenu.classList.toggle('open');
                    if (navbarContainer) {
                        navbarContainer.classList.toggle('menu-expanded');
                    }
                });
            }
        });
    });






