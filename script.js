const DEFAULTS = { theme: 'dark', accent: 'indigo' };
const root = document.documentElement;

function applyTweaks(t) {
  root.setAttribute('data-theme', t.theme);
  root.setAttribute('data-accent', t.accent);
  document.querySelectorAll('[data-tweak="theme"] button').forEach(b => {
    b.classList.toggle('active', b.dataset.v === t.theme);
  });
  document.querySelectorAll('.tweak-swatch').forEach(b => {
    b.classList.toggle('active', b.dataset.c === t.accent);
  });
}

let state = { ...DEFAULTS };
try {
  const stored = localStorage.getItem('studio-tweaks');
  if (stored) state = { ...state, ...JSON.parse(stored) };
} catch {}

function setTweak(patch) {
  state = { ...state, ...patch };
  localStorage.setItem('studio-tweaks', JSON.stringify(state));
  applyTweaks(state);
}

// Nav scroll border
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Animated stat counters
function animateCounters() {
  document.querySelectorAll('.stat .num').forEach(el => {
    if (el.dataset.animated) return;
    el.dataset.animated = '1';
    const text = el.textContent.trim();
    const match = text.match(/^(\d+)/);
    if (!match) return;
    const target = parseInt(match[1], 10);
    const suffix = text.slice(match[1].length);
    const start = performance.now();
    const unit = el.querySelector('.unit');
    el.innerHTML = '';
    el.appendChild(document.createTextNode('0'));
    if (unit) {
      el.appendChild(unit);
    } else if (suffix) {
      const s = document.createElement('span');
      s.className = 'unit';
      s.textContent = suffix;
      el.appendChild(s);
    }
    function tick(now) {
      const t = Math.min(1, (now - start) / 1200);
      const eased = 1 - Math.pow(1 - t, 3);
      el.firstChild.textContent = Math.round(target * eased);
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      if (e.target.classList.contains('hero-stats')) animateCounters();
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Tweaks panel
const tweaks = document.querySelector('.tweaks');

function openTweaks() {
  tweaks.classList.add('open');
  requestAnimationFrame(() => tweaks.classList.add('in'));
}
function closeTweaks() {
  tweaks.classList.remove('in');
  setTimeout(() => tweaks.classList.remove('open'), 300);
}

document.querySelector('.tweaks-close')?.addEventListener('click', closeTweaks);
document.querySelectorAll('[data-tweak="theme"] button').forEach(b => {
  b.addEventListener('click', () => setTweak({ theme: b.dataset.v }));
});
document.querySelectorAll('.tweak-swatch').forEach(b => {
  b.addEventListener('click', () => setTweak({ accent: b.dataset.c }));
});

document.addEventListener('keydown', (e) => {
  if (e.key === 't' && !e.metaKey && !e.ctrlKey && !e.altKey) {
    const tag = document.activeElement?.tagName;
    if (tag !== 'INPUT' && tag !== 'TEXTAREA') {
      tweaks.classList.contains('open') ? closeTweaks() : openTweaks();
    }
  }
  if (e.key === 'Escape' && tweaks.classList.contains('open')) closeTweaks();
});

applyTweaks(state);
