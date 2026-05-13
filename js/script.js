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

// ==================== HAMBURGER MENU ====================
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
      hamburger.innerHTML = '✕';
    } else {
      hamburger.innerHTML = '☰';
    }
  });
}

// ==================== PASSWORD PROTECTION ====================
function initPasswordProtection() {
  const isHomePage = window.location.pathname.endsWith('index.html') || 
                     window.location.pathname === '/' || 
                     window.location.pathname.endsWith('/');

  if (!isHomePage) return;

  const overlay = document.getElementById('password-overlay');
  if (!overlay) return;

  const input = document.getElementById('password-input');
  const error = document.getElementById('password-error');
  const submitBtn = document.getElementById('password-submit');

  const correctPassword = "yobimizu";

  function verifyPassword() {
    if (input.value === correctPassword) {
      overlay.style.transition = 'opacity 0.6s ease';
      overlay.style.opacity = '0';
      
      sessionStorage.setItem('homeAccessGranted', 'true');
      
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 600);
    } else {
      error.textContent = "パスワードが違います。もう一度お試しください。";
      input.value = "";
      input.focus();

      input.style.animation = 'shake 0.4s';
      setTimeout(() => input.style.animation = '', 500);
    }
  }

  submitBtn.addEventListener('click', verifyPassword);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') verifyPassword();
  });

  const referrer = document.referrer || '';
  const cameFromDetail = referrer.includes('hie-jinja.html') || 
                         referrer.includes('kyu-yasuda.html') || 
                         referrer.includes('takeshita.html');

  const hasSessionAccess = sessionStorage.getItem('homeAccessGranted') === 'true';

  if (cameFromDetail && hasSessionAccess) {
    overlay.style.display = 'none';
  } else {
    sessionStorage.removeItem('homeAccessGranted');
    overlay.style.display = 'flex';
    setTimeout(() => input.focus(), 400);
  }
}

// Animation shake
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-8px); }
    40%, 80% { transform: translateX(8px); }
  }
`;
document.head.appendChild(style);

// Khởi chạy tất cả
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initPasswordProtection();
});

console.log("Tokyo Travel Guide loaded successfully ✨");