document.addEventListener('DOMContentLoaded', function() {

    const hamburger = document.getElementById('hamburger-button');
    const navMenu = document.getElementById('nav-menu');

    if(hamburger && navMenu) {
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
    }

    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const typedOptions = {
        strings: [
            "Hi, I'm Mevinu Methdam", 
            "I'm a Full Stack Developer.",
            "I build AI-Powered Web Apps.",
            "I'm a UI/UX Enthusiast.",
            "Welcome to my Portfolio."
        ],
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        smartBackspace: true
    };
    
    if(document.getElementById('typing-effect')){
        new Typed('#typing-effect', typedOptions);
    }

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

    const rippleElements = document.querySelectorAll('.nav-link, .hero-button, .project-links a, .contact-button');

    rippleElements.forEach(element => {
        element.addEventListener('click', function (e) {
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    const certContainer = document.getElementById('certContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const cards = document.querySelectorAll('.cert-card');

    if (certContainer && cards.length > 0) {

        const updateActiveCard = () => {
            const containerCenter = certContainer.getBoundingClientRect().left + certContainer.offsetWidth / 2;
            
            let closestCard = null;
            let minDistance = Infinity;

            cards.forEach(card => {
                const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2;
                const distance = Math.abs(containerCenter - cardCenter);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestCard = card;
                }
            });

            cards.forEach(card => card.classList.remove('active'));
            if (closestCard) {
                closestCard.classList.add('active');
            }
        };

        certContainer.addEventListener('scroll', updateActiveCard);

        updateActiveCard();

        nextBtn.addEventListener('click', () => {
            const cardWidth = cards[0].offsetWidth + 20; 
            certContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            const cardWidth = cards[0].offsetWidth + 20;
            certContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        });
    }

});