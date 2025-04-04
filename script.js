/**
 * Initializes the website's interactive elements and behaviors.
 * This script handles navigation, animations, and other dynamic features.
 */
document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Element Selectors ---
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section');
  const ctaButtons = document.querySelectorAll('.cta-button');
  const backToTopButton = document.querySelector('.back-to-top');
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinksContainer = document.querySelector('.nav-links');

  // --- Helper Functions ---

  /**
   * Smoothly scrolls to the target section.
   * @param {string} targetId - The ID of the target section.
   * @param {number} offset - Offset to adjust for sticky navbar.
   */
  const smoothScrollTo = (targetId, offset = 70) => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - offset,
        behavior: 'smooth',
      });
    }
  };

  /**
   * Highlights the active navigation link based on the current scroll position.
   */
  const highlightActiveNavLink = () => {
    const scrollPosition = window.scrollY + 80;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  /**
   * Toggles the visibility of the back-to-top button.
   */
  const toggleBackToTopButton = () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  };

  /**
   * Handles the fade-in animation for sections.
   * @param {IntersectionObserverEntry[]} entries - The entries from the IntersectionObserver.
   * @param {IntersectionObserver} observer - The IntersectionObserver instance.
   */
  const handleSectionIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  // --- Event Listeners and Initializations ---

  // 1. Smooth Scrolling for Anchor Links
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default jump behavior
      const targetId = link.getAttribute('href').substring(1); // Get target ID
      smoothScrollTo(targetId);

      // Close the burger menu if it's open
      if (navLinksContainer.classList.contains('active')) {
        navLinksContainer.classList.remove('active');
      }
    });
  });

  // 2. No Smooth scrolling for CTA buttons
  ctaButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      // No need to get the targetId, as the link is external
    });
  });

  // 3. Sticky Navbar Highlighting
  window.addEventListener('scroll', highlightActiveNavLink);

  // 4. Back-to-Top Button (with Smooth Scrolling)
  window.addEventListener('scroll', toggleBackToTopButton);

  backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    smoothScrollTo('top', 0);
  });

  // 5. Fade-In Animation for Sections
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const sectionObserver = new IntersectionObserver(
    handleSectionIntersection,
    observerOptions
  );

  sections.forEach((section) => {
    if (section.id !== 'hero') {
      sectionObserver.observe(section);
    }
  });

  // 6. Burger Menu Functionality
  burgerMenu.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
  });
});
