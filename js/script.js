/* =========================================================
   東京案内書 — Interactions
   ========================================================= */

const CORRECT_PASSWORD = "yobimizu";

/* ---------- Password Gate ---------- */
function initPasswordGate() {
  const gate = document.getElementById('password-gate');
  const main = document.getElementById('main-content');
  if (!gate || !main) return;

  const input = document.getElementById('gate-password');
  const error = document.getElementById('gate-error');
  const submit = document.getElementById('gate-submit');

  // Auto-unlock if granted earlier this session
  if (sessionStorage.getItem('tokyoAccess') === 'granted') {
    gate.remove();
    main.classList.remove('hidden');
    document.body.style.overflow = '';
    return;
  }

  document.body.style.overflow = 'hidden';
  setTimeout(() => input?.focus(), 400);

  function verify() {
    const value = (input.value || '').trim().toLowerCase();
    if (value === CORRECT_PASSWORD) {
      sessionStorage.setItem('tokyoAccess', 'granted');
      gate.classList.add('fade-out');
      setTimeout(() => {
        gate.remove();
        main.classList.remove('hidden');
        document.body.style.overflow = '';
      }, 800);
    } else {
      error.textContent = "パスワードが違います · Wrong password";
      input.value = '';
      input.classList.remove('shake');
      // force reflow to restart animation
      void input.offsetWidth;
      input.classList.add('shake');
      input.focus();
    }
  }

  submit?.addEventListener('click', verify);
  input?.addEventListener('keypress', e => { if (e.key === 'Enter') verify(); });
  input?.addEventListener('input', () => { if (error.textContent) error.textContent = ''; });
}

/* ---------- Mobile menu ---------- */
function initMobileMenu() {
  const toggle = document.querySelector('.hamburger');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('active');
    toggle.textContent = links.classList.contains('active') ? '✕' : '☰';
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('active');
      toggle.textContent = '☰';
    });
  });
}

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
}

/* ---------- Subtle parallax for hero ---------- */
function initHeroParallax() {
  const bg = document.querySelector('.hero .hero-bg');
  if (!bg) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      bg.style.transform = `scale(1.05) translateY(${y * 0.25}px)`;
      ticking = false;
    });
    ticking = true;
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  initPasswordGate();
  initMobileMenu();
  initReveal();
  initHeroParallax();
});
