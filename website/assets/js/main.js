// OPC Platform — main.js

// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Counter animation
function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const duration = 1800;
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // ease out
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

// Intersection Observer for counters
const statNums = document.querySelectorAll('.stat-num');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
statNums.forEach(el => counterObserver.observe(el));

// Scroll reveal animation
const reveals = document.querySelectorAll(
  '.feature-card, .film-card, .showcase-item, .tool-item, .split-content, .split-visual'
);
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(el);
});

document.querySelectorAll('.revealed').forEach(el => {
  el.style.opacity = '1';
  el.style.transform = 'none';
});

// For dynamically revealed elements
const mutationObs = new MutationObserver(() => {
  document.querySelectorAll('.revealed').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
});
// Apply via class change
revealObserver._callback = () => {};
document.addEventListener('scroll', () => {
  document.querySelectorAll('.revealed').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
}, { passive: true });

// CTA form
const ctaForm = document.getElementById('ctaForm');
ctaForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = ctaForm.querySelector('input');
  const btn = ctaForm.querySelector('button');
  btn.textContent = '已加入候补名单 ✓';
  btn.style.background = 'linear-gradient(135deg, #059669, #10b981)';
  btn.disabled = true;
  input.disabled = true;
  input.value = '';
  input.placeholder = '感谢你的加入！';
});

// Smooth active nav highlight
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'rgba(255,255,255,1)' : '';
  });
}, { passive: true });
