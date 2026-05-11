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