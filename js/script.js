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
      
      // Lưu tạm thời (session) rằng đã xác thực
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

  // ==================== KIỂM TRA ĐIỀU KIỆN ====================
  const cameFromDetailPage = document.referrer.includes('hie-jinja.html') || 
                             document.referrer.includes('kyu-yasuda.html') || 
                             document.referrer.includes('takeshita.html');

  const hasSessionAccess = sessionStorage.getItem('homeAccessGranted') === 'true';

  // Nếu quay lại từ trang chi tiết hoặc đã xác thực trong session hiện tại → bỏ qua
  if (cameFromDetailPage || hasSessionAccess) {
    overlay.style.display = 'none';
  } 
  // Ngược lại (mở mới, reload, mở lại trình duyệt) → yêu cầu password
  else {
    overlay.style.display = 'flex';
    setTimeout(() => {
      input.focus();
    }, 400);
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

// Khởi chạy
document.addEventListener('DOMContentLoaded', initPasswordProtection);

console.log("Tokyo Travel Guide loaded successfully ✨");