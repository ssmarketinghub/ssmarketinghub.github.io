document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const heroSection = document.getElementById('hero');
    const navLinks = document.querySelectorAll('.nav-links a, .footer-links a');
    const sections = document.querySelectorAll('section');
    const contactForm = document.getElementById('contact-form');
    const ctaButtons = document.querySelectorAll('.cta-button');

    // 1. Show Hero Section on Scroll
    const toggleHeroVisibility = () => {
        if (window.scrollY > 100) { // Show hero after scrolling 100px
            heroSection.classList.remove('hidden');
            heroSection.classList.add('visible');
        }
    };
    window.addEventListener('scroll', toggleHeroVisibility);

    // 2. Smooth Scrolling for Anchor Links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1); // Remove the '#' from href
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for sticky navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Smooth scrolling for CTA buttons
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Sticky Navbar Highlighting
    const highlightNavLinks = () => {
        let scrollPosition = window.scrollY + 80; // Adjust for navbar height
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    window.addEventListener('scroll', highlightNavLinks);

    // 4. Form Validation and Submission Handling
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const services = document.getElementById('services').value;
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !services || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Simulate form submission (since GitHub Pages doesn't support backend)
        const formData = {
            name,
            email,
            phone: document.getElementById('phone').value.trim(),
            website: document.getElementById('website').value.trim(),
            services,
            message
        };
        console.log('Form submitted:', formData);

        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset(); // Reset the form
    });

    // 5. Back-to-Top Button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerText = '↑ Top';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    const toggleBackToTopButton = () => {
        if (window.scrollY > 300) { // Show button after scrolling 300px
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    };
    window.addEventListener('scroll', toggleBackToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 6. Fade-In Animation for Sections
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        if (section.id !== 'hero') { // Exclude hero section (already handled)
            section.classList.add('hidden'); // Add hidden class by default
            sectionObserver.observe(section);
        }
    });
});