// David J. Devine Author Website - Main JavaScript
// Vanilla JS for navigation, scroll effects, and animations

// Navigation scroll effect
const nav = document.querySelector('nav');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  lastScrollY = window.scrollY;
  
  if (lastScrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  
  // Update active nav link
  updateActiveNavLink();
  
  // Trigger reveal animations
  revealOnScroll();
});

// Update active nav link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    
    if (lastScrollY >= sectionTop && lastScrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}

// Reveal elements on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const elementTop = reveal.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add('visible');
    }
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Parallax effect on hero background
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    heroBg.style.transform = `translateY(${scrollY * 0.35}px)`;
  }, { passive: true });
}

// Book card hover effect
const bookCards = document.querySelectorAll('.book-card');
bookCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});

// Initialize reveal animations on page load
window.addEventListener('load', () => {
  revealOnScroll();
  updateActiveNavLink();
});

// Mobile menu toggle (if needed)
const navToggle = document.querySelector('.nav-toggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  });
}

// Fade in hero content on page load
window.addEventListener('load', () => {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '1';
  }
});
