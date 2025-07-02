// Wait until the entire HTML document is loaded before running the scripts.
document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Hamburger Menu Logic ---
    const hamburger = document.getElementById('hamburger-button');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });


    // --- 2. Scrolling Navbar Effect ---
    const header = document.querySelector('.main-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    // --- 3. Typed.js Hero Title Effect ---
    const typedOptions = {
        strings: ["Hi, I'm Mevinu Methdam", "I'm a Developer with a passion for Quality.","I'm an aspiring QA Automation Engineer.", "Welcome to my Portfolio."],
        typeSpeed: 80,
        backSpeed: 25,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        smartBackspace: true
    };

    const typed = new Typed('#typing-effect', typedOptions);


    // --- 4. Scroll-in Fade Animation ---
    const sections = document.querySelectorAll('.content-section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    
    // --- 5. Ripple Effect on Click --- (ADDED THIS NEW SECTION)
    // Find all the elements you want to have the ripple effect
    const rippleElements = document.querySelectorAll('.nav-link, .hero-button, .project-links a');

    rippleElements.forEach(element => {
        element.addEventListener('click', function (e) {
            // Get the position of the click relative to the element
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;

            // Create the ripple span element
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            // Append the ripple to the clicked element
            this.appendChild(ripple);

            // Remove the ripple span after the animation ends to keep the DOM clean
            setTimeout(() => {
                ripple.remove();
            }, 600); // This duration must match the CSS animation duration (0.6s)
        });
    });

});