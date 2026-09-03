// CAW V19 – Slider, Navigation und Ansichtsumschaltung
(function(){
  const VIEW_KEY = 'caw-view';
  const viewport = document.querySelector('meta[name="viewport"]');

  function applyView(mode, reloadForViewport = false) {
    const wanted = mode === 'desktop' ? 'desktop' : 'mobile';
    try { localStorage.setItem(VIEW_KEY, wanted); } catch(e) {}
    document.documentElement.dataset.view = wanted;
    document.body.classList.toggle('view-mobile', wanted === 'mobile');
    document.body.classList.toggle('view-desktop', wanted === 'desktop');
    document.querySelectorAll('[data-view-mode]').forEach(btn => {
      const active = btn.dataset.viewMode === wanted;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    if (viewport) {
      const current = viewport.getAttribute('content') || '';
      const next = wanted === 'desktop' ? 'width=1280' : 'width=device-width,initial-scale=1';
      if (current !== next) {
        viewport.setAttribute('content', next);
        if (reloadForViewport && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
          window.location.reload();
        }
      }
    }
  }

  let saved = null;
  try { saved = localStorage.getItem(VIEW_KEY); } catch(e) {}
  const initial = saved || ((window.innerWidth <= 760) ? 'mobile' : 'desktop');
  applyView(initial, false);

  document.querySelectorAll('[data-view-mode]').forEach(btn => {
    btn.addEventListener('click', () => applyView(btn.dataset.viewMode, true));
  });

  const slides = [...document.querySelectorAll('.hero-slide')];
  const dots = [...document.querySelectorAll('.dot')];
  let current = 0;
  let timer;
  function showSlide(index) {
    if (!slides.length) return;
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
    restartTimer();
  }
  function restartTimer() {
    clearInterval(timer);
    if (slides.length > 1) timer = setInterval(() => showSlide(current + 1), 7000);
  }
  document.querySelector('.next')?.addEventListener('click', () => showSlide(current + 1));
  document.querySelector('.prev')?.addEventListener('click', () => showSlide(current - 1));
  dots.forEach(dot => dot.addEventListener('click', () => showSlide(Number(dot.dataset.go))));
  restartTimer();

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
    }));
  }
})();
