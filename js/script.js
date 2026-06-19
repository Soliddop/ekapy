const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const btt = document.getElementById('btt');
const onScroll = () => {
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y > 40);
  if (btt) btt.classList.toggle('btt--visible', y > 400);
};
onScroll();
addEventListener('scroll', onScroll, { passive: true });
if (btt) btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
if (burger) {
  const setMenuOpen = open => {
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού');
  };

  burger.addEventListener('click', () => {
    setMenuOpen(!menu.classList.contains('open'));
  });
  menu.addEventListener('click', e => {
    if (e.target.closest('a')) setMenuOpen(false);
  });
  addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      setMenuOpen(false);
      burger.focus();
    }
  });
}

document.querySelectorAll('.acc__q').forEach((q, i) => {
  const acc = q.parentElement;
  const a = acc.querySelector('.acc__a');
  if (a) {
    if (!a.id) a.id = `acc-panel-${i}`;
    q.setAttribute('aria-controls', a.id);
    a.setAttribute('aria-hidden', 'true');
  }
  q.addEventListener('click', () => {
    const open = acc.classList.toggle('open');
    q.setAttribute('aria-expanded', open);
    if (a) {
      a.style.maxHeight = open ? a.scrollHeight + 'px' : 0;
      a.setAttribute('aria-hidden', String(!open));
    }
  });
});

(() => {
  const ports = [...document.querySelectorAll('.hp')];
  const quotes = [...document.querySelectorAll('.hq')];
  if (!ports.length) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let i = 0, timer;
  const set = n => {
    i = (n + ports.length) % ports.length;
    ports.forEach((p, k) => p.classList.toggle('active', k === i));
    quotes.forEach((q, k) => q.classList.toggle('active', k === i));
  };
  set(0);
  if (reduce) {
    ports.forEach(p => p.addEventListener('click', () => set(+p.dataset.i)));
  } else {
    const loop = () => { timer = setTimeout(() => { set(i + 1); loop(); }, 5000); };
    loop();
    ports.forEach(p => p.addEventListener('click', () => { clearTimeout(timer); set(+p.dataset.i); loop(); }));
  }
})();

(() => {
  const stage = document.getElementById('deckStack');
  const dotsEl = document.getElementById('deckDots');
  if (!stage) return;
  const cards = [...stage.querySelectorAll('.deck-card')];
  const n = cards.length;
  let front = 0;

  const dots = cards.map((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'deck-dot';
    btn.setAttribute('aria-label', `Κάρτα ${i + 1}`);
    btn.addEventListener('click', () => { front = i; update(); });
    dotsEl.appendChild(btn);
    return btn;
  });

  const update = () => {
    cards.forEach((c, i) => {
      const off = (i - front + n) % n;
      c.dataset.pos = off < 3 ? String(off) : 'out';
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === front));
  };
  update();

  stage.addEventListener('click', e => {
    const card = e.target.closest('.deck-card');
    if (!card || card.dataset.pos === '0') return;
    front = +card.dataset.i;
    update();
  });
})();

(() => {
  const steps = [...document.querySelectorAll('.ss-step')];
  const imgs = [...document.querySelectorAll('#ssMedia img')];
  if (!steps.length) return;
  const DUR = 4600;
  const kenBurns = typeof gsap !== 'undefined' && !matchMedia('(prefers-reduced-motion: reduce)').matches;
  let i = 0, timer;
  const set = n => {
    i = (n + steps.length) % steps.length;
    steps.forEach((s, k) => s.classList.toggle('active', k === i));
    imgs.forEach((im, k) => im.classList.toggle('active', k === i));
    if (kenBurns && imgs[i]) gsap.fromTo(imgs[i], { scale: 1.12 }, { scale: 1, duration: DUR / 1000, ease: 'none' });
  };
  set(0);
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    steps.forEach(s => s.addEventListener('click', () => set(+s.dataset.i)));
  } else {
    const loop = () => { timer = setTimeout(() => { set(i + 1); loop(); }, DUR); };
    loop();
    steps.forEach(s => s.addEventListener('click', () => { clearTimeout(timer); set(+s.dataset.i); loop(); }));
  }
})();

if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

(() => {
  const nums = [...document.querySelectorAll('[data-to]')];
  if (!nums.length) return;
  const fmt = (v, dec, sep) => {
    const s = dec ? v.toFixed(dec) : Math.round(v).toString();
    return sep ? s.replace(/\B(?=(\d{3})+(?!\d))/g, sep) : s;
  };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGSAP = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';
  if (reduce) { nums.forEach(el => { el.textContent = fmt(parseFloat(el.dataset.to), +el.dataset.dec || 0, el.dataset.sep || ''); }); return; }
  const run = el => {
    const to = parseFloat(el.dataset.to);
    const dec = +el.dataset.dec || 0;
    const sep = el.dataset.sep || '';
    if (hasGSAP) {
      const o = { v: 0 };
      gsap.to(o, { v: to, duration: 1.8, ease: 'power2.out', onUpdate: () => { el.textContent = fmt(o.v, dec, sep); } });
    } else {
      const start = performance.now(), dur = 1400;
      const step = now => {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = fmt(to * (1 - Math.pow(1 - p, 3)), dec, sep);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  };
  if (hasGSAP) {
    nums.forEach(el => ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: () => run(el) }));
  } else {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => { if (e.isIntersecting) { run(e.target); obs.unobserve(e.target); } });
    }, { threshold: .5 });
    nums.forEach(n => io.observe(n));
  }
})();

(() => {
  const fills = [...document.querySelectorAll('[data-val]')];
  if (!fills.length) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGSAP = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';
  if (!hasGSAP || reduce) { fills.forEach(f => { f.style.width = f.dataset.val + '%'; }); return; }
  fills.forEach(f => gsap.to(f, {
    width: f.dataset.val + '%', duration: 1.3, ease: 'power3.out',
    scrollTrigger: { trigger: f, start: 'top 92%', once: true }
  }));
})();

(() => {
  const bars = [...document.querySelectorAll('[data-h],[data-w]')];
  if (!bars.length) return;
  const dim = f => f.dataset.h != null ? ['height', f.dataset.h] : ['width', f.dataset.w];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGSAP = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';
  if (!hasGSAP || reduce) { bars.forEach(f => { const [p, v] = dim(f); f.style[p] = v + '%'; }); return; }
  bars.forEach(f => { const [p, v] = dim(f); gsap.to(f, {
    [p]: v + '%', duration: 1.2, ease: 'power3.out',
    scrollTrigger: { trigger: f, start: 'top 92%', once: true }
  }); });
})();

(() => {
  const lines = [...document.querySelectorAll('[data-draw]')];
  if (!lines.length) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGSAP = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';
  lines.forEach(l => { l.style.strokeDasharray = '1'; l.style.strokeDashoffset = (!hasGSAP || reduce) ? '0' : '1'; });
  if (!hasGSAP || reduce) return;
  lines.forEach(l => gsap.to(l, {
    strokeDashoffset: 0, duration: 1.6, ease: 'power2.out',
    scrollTrigger: { trigger: l.closest('svg') || l, start: 'top 85%', once: true }
  }));
})();

(() => {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  gsap.utils.toArray('[data-parallax]').forEach(el => {
    const img = el.querySelector('img') || el;
    gsap.set(img, { scale: 1.16 });
    gsap.fromTo(img, { yPercent: -7 }, {
      yPercent: 7, ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true }
    });
  });
})();

(() => {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  gsap.utils.toArray('[data-reveal]').forEach(el => {
    const dir = el.dataset.reveal || 'up';
    const from = { opacity: 0, duration: .7, ease: 'power2.out' };
    if (dir === 'up') from.y = 38;
    else if (dir === 'left') from.x = -44;
    else if (dir === 'right') from.x = 44;
    else if (dir === 'zoom') from.scale = .92;
    gsap.from(el, { ...from, scrollTrigger: { trigger: el, start: 'top 94%' } });
  });
  gsap.utils.toArray('[data-reveal-group]').forEach(group => {
    const items = [...group.children];
    if (!items.length) return;
    gsap.from(items, {
      opacity: 0, y: 32, duration: .65, ease: 'power2.out', stagger: .1,
      scrollTrigger: { trigger: group, start: 'top 94%' }
    });
  });
})();

(() => {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!document.querySelector('.hero')) return;

  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .from('.hero__slogan', { y: 46, opacity: 0, duration: .9 })
    .from('.hero__title', { y: 24, opacity: 0, duration: .6 }, '-=.5')
    .from('.hero__sub', { y: 20, opacity: 0, duration: .6 }, '-=.42')
    .from('.hero__cta .btn', { y: 16, opacity: 0, duration: .5, stagger: .12 }, '-=.35');

  gsap.utils.toArray('.section-title, .intro__heading').forEach(el => {
    gsap.from(el, { y: 30, opacity: 0, duration: .7, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%' } });
  });

  const groups = [
    { items: '.cards .card', trigger: '.intro' },
    { items: '.ss-step', trigger: '.slideshow', x: -28, y: 0, clear: 'opacity' },
    { items: '.cols .col', trigger: '.drasi' },
    { items: '.stat', trigger: '.dedomena' },
    { items: '.acc', trigger: '.faq' },
    { items: '.checklist li', trigger: '.ctaband' },
  ];
  groups.forEach(g => {
    const items = gsap.utils.toArray(g.items);
    if (!items.length) return;
    gsap.from(items, {
      opacity: 0, y: g.y ?? 36, x: g.x ?? 0,
      duration: .7, ease: 'power2.out', stagger: .12,
      clearProps: g.clear,
      scrollTrigger: { trigger: g.trigger, start: 'top 78%' }
    });
  });

  gsap.from('.ctaband__text > *', { opacity: 0, y: 26, duration: .6, ease: 'power2.out', stagger: .12,
    scrollTrigger: { trigger: '.ctaband', start: 'top 78%' } });
  gsap.from('.contact__info', { opacity: 0, y: 30, duration: .7, ease: 'power2.out', stagger: .15,
    scrollTrigger: { trigger: '.contact', start: 'top 80%' } });
})();

(function(){
  var GA_ID = 'G-XXXXXXXXXX';
  var KEY = 'ekapy_cookie_consent';

  function loadGA() {
    if (!/^G-[A-Z0-9]+$/.test(GA_ID) || GA_ID === 'G-XXXXXXXXXX') return;
    var s = document.createElement('script');
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    s.async = true;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  var consent = localStorage.getItem(KEY);
  if (consent === 'accepted') { loadGA(); return; }
  if (consent === 'rejected') { return; }

  var bar = document.createElement('div');
  bar.className = 'cookie-bar';
  bar.setAttribute('role', 'region');
  bar.setAttribute('aria-label', 'Συγκατάθεση cookies');
  var cssEl = document.querySelector('link[href*="styles.css"]');
  var siteRoot = cssEl ? cssEl.href.replace(/css\/styles\.css.*$/, '') : './';
  bar.innerHTML =
    '<p class="cookie-bar__text">Με τη συγκατάθεσή σας, χρησιμοποιούμε Google Analytics 4 για συγκεντρωτικά στατιστικά επισκεψιμότητας. Η απόρριψη δεν επηρεάζει τη χρήση του ιστοτόπου. <a href="' + siteRoot + 'cookies/">Περισσότερες πληροφορίες</a></p>' +
    '<div class="cookie-bar__actions">' +
    '<button class="cookie-bar__btn cookie-bar__btn--reject" id="ck-reject" type="button">Απόρριψη</button>' +
    '<button class="cookie-bar__btn cookie-bar__btn--accept" id="ck-accept" type="button">Αποδοχή στατιστικών</button>' +
    '</div>';
  document.body.appendChild(bar);
  requestAnimationFrame(function(){ bar.classList.add('cookie-bar--visible'); });

  function dismiss(val) {
    localStorage.setItem(KEY, val);
    bar.classList.remove('cookie-bar--visible');
    setTimeout(function(){ bar.remove(); }, 400);
  }
  document.getElementById('ck-accept').addEventListener('click', function(){ dismiss('accepted'); loadGA(); });
  document.getElementById('ck-reject').addEventListener('click', function(){ dismiss('rejected'); });
})();
