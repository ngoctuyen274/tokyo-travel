// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href') === '#spots') {
      e.preventDefault();
      document.querySelector('#spots').scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Simple mobile menu (nếu cần mở rộng sau)
console.log("Tokyo Travel Guide loaded successfully ✨");

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href') === '#spots') {
      e.preventDefault();
      document.querySelector('#spots').scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Hamburger Menu for Mobile
function createMobileMenu() {
  const navContainer = document.querySelector('.nav-container');
  const navLinks = document.querySelector('.nav-links');

  // Tạo hamburger button
  const hamburger = document.createElement('button');
  hamburger.className = 'hamburger';
  hamburger.innerHTML = '☰';
  hamburger.style.cssText = `
    font-size: 1.8rem;
    background: none;
    border: none;
    cursor: pointer;
    display: none;
    color: var(--primary);
  `;

  navContainer.appendChild(hamburger);

  // Toggle menu
  hamburger.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
      hamburger.innerHTML = '☰';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '70px';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.background = 'white';
      navLinks.style.padding = '1rem';
      navLinks.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
      hamburger.innerHTML = '✕';
    }
  });

  // Show hamburger on mobile
  function checkMobile() {
    if (window.innerWidth <= 768) {
      hamburger.style.display = 'block';
    } else {
      hamburger.style.display = 'none';
      navLinks.style.display = 'flex';
    }
  }

  window.addEventListener('resize', checkMobile);
  checkMobile();
}

createMobileMenu();

console.log("Tokyo Travel Guide loaded successfully ✨");

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Đổi icon hamburger ↔ close
    if (navLinks.classList.contains('active')) {
      hamburger.innerHTML = '✕';
    } else {
      hamburger.innerHTML = '☰';
    }
  });
}