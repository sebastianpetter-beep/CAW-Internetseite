(() => {
  'use strict';

  const slides = Array.from(document.querySelectorAll('.hero-slide'));
  const dots = Array.from(document.querySelectorAll('.dot'));
  let current = Math.max(0, slides.findIndex(s => s.classList.contains('active')));
  let timer = null;

  function showSlide(index, restart = true) {
    if (!slides.length) return;
    current = ((index % slides.length) + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === current;
      slide.classList.toggle('active', active);
      slide.setAttribute('aria-hidden', active ? 'false' : 'true');
    });
    dots.forEach((dot, i) => {
      const active = i === current;
      dot.classList.toggle('active', active);
      dot.setAttribute('aria-current', active ? 'true' : 'false');
    });
    if (restart) restartTimer();
  }

  function restartTimer() {
    if (timer) window.clearInterval(timer);
    if (slides.length > 1) timer = window.setInterval(() => showSlide(current + 1, false), 7000);
  }

  document.querySelector('.next')?.addEventListener('click', () => showSlide(current + 1));
  document.querySelector('.prev')?.addEventListener('click', () => showSlide(current - 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => showSlide(Number(dot.dataset.go ?? i))));

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const closeNav = () => {
    if (!nav || !toggle) return;
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  };

  if (toggle && nav) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = !nav.classList.contains('open');
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
    document.addEventListener('click', e => {
      if (nav.classList.contains('open') && !nav.contains(e.target) && e.target !== toggle) closeNav();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900 && !document.body.classList.contains('force-mobile')) closeNav();
    });
  }

  const viewButtons = Array.from(document.querySelectorAll('[data-view]'));
  const saved = localStorage.getItem('caw-view');

  function applyView(mode) {
    document.body.classList.remove('force-mobile', 'force-desktop');
    if (mode === 'mobile') document.body.classList.add('force-mobile');
    if (mode === 'desktop') document.body.classList.add('force-desktop');
    viewButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.view === mode));
    localStorage.setItem('caw-view', mode);
    closeNav();
  }

  viewButtons.forEach(btn => btn.addEventListener('click', () => applyView(btn.dataset.view)));

  if (saved === 'mobile' || saved === 'desktop') {
    applyView(saved);
  } else {
    const automatic = window.matchMedia('(max-width: 900px)').matches ? 'mobile' : 'desktop';
    document.body.classList.toggle('force-mobile', automatic === 'mobile');
    viewButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.view === automatic));
  }

  showSlide(current, false);
  restartTimer();
})();
