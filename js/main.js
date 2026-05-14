/* main.js — behavior only. Nav/footer/SVG defs are embedded directly in each HTML page. */

// Highlight the active nav cup based on which page we're on
const currentPage = document.body.dataset.page;
document.querySelectorAll('[data-nav]').forEach(el => {
  if (el.dataset.nav === currentPage) el.classList.add('active');
});

// ---- Mobile hamburger toggle ----
const hamburger = document.querySelector('.hamburger');
const mobileNav  = document.querySelector('.mobile-nav');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.style.display = 'flex';
  requestAnimationFrame(() => mobileNav.classList.add('open'));
});

document.querySelector('.mobile-nav-close')?.addEventListener('click', closeMobileNav);

document.querySelector('.mobile-nav')?.addEventListener('click', e => {
  if (e.target.tagName === 'A') closeMobileNav();
});

function closeMobileNav() {
  hamburger?.classList.remove('open');
  mobileNav?.classList.remove('open');
  setTimeout(() => { if (mobileNav) mobileNav.style.display = ''; }, 300);
}

// ---- Toast ----
window.showToast = function(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
};

// ---- Newsletter form (footer) ----
document.addEventListener('submit', e => {
  if (e.target.id === 'newsletter-form') {
    e.preventDefault();
    showToast("You're on the list! ✦");
    e.target.reset();
  }
});

// ---- Populate social links from settings.json ----
fetch('/data/settings.json')
  .then(r => r.json())
  .then(s => {
    const links = {
      'foot-instagram': s.socials?.instagram,
      'foot-tiktok':    s.socials?.tiktok,
      'foot-twitter':   s.socials?.twitter,
      'foot-facebook':  s.socials?.facebook,
    };
    Object.entries(links).forEach(([id, href]) => {
      const el = document.getElementById(id);
      if (el && href) el.href = href;
    });
  })
  .catch(() => {});
