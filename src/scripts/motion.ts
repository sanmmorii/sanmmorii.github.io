/**
 * Motion system portofolio.
 * Satu file, tanpa dependensi. Dikendalikan lewat atribut data-*:
 *
 *  data-reveal="up|down|left|right|scale|blur|clip|arch"  -> muncul saat di-scroll
 *  data-reveal-delay="200"                                -> jeda (ms)
 *  data-stagger="100"                                     -> anak-anak data-reveal muncul berurutan
 *  data-split-line                                        -> teks naik dari balik mask
 *  data-chars                                             -> huruf per huruf
 *  data-line[="center"]                                   -> garis "digambar" (scaleX)
 *  data-parallax="0.12"                                   -> parallax vertikal saat scroll
 *  data-tilt                                              -> kartu miring 3D mengikuti kursor
 *  data-magnetic                                          -> tombol tertarik ke kursor
 *  data-depth="18"                                        -> bergeser mengikuti kursor (hero)
 */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const $$ = <T extends HTMLElement = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel));

/* ------------------------------------------------------------------ */
/* Persiapan markup: pecah teks                                        */
/* ------------------------------------------------------------------ */
function prepareText() {
  // Baris yang naik dari balik mask
  $$('[data-split-line]').forEach((el) => {
    if (el.dataset.splitDone) return;
    el.dataset.splitDone = '1';
    el.innerHTML = `<span class="split-line"><span>${el.innerHTML}</span></span>`;
  });

  // Huruf per huruf (kata tetap utuh agar tidak patah di tengah)
  $$('[data-chars]').forEach((el) => {
    if (el.dataset.splitDone) return;
    el.dataset.splitDone = '1';
    const text = (el.textContent || '').trim();
    el.setAttribute('aria-label', text);
    el.classList.add('char-split');
    let i = 0;
    el.innerHTML = text
      .split(/\s+/)
      .map((word) => {
        const chars = Array.from(word)
          .map((c) => `<span class="char" aria-hidden="true" style="--char-i:${i++}">${c}</span>`)
          .join('');
        i++; // jeda kecil antar kata
        return `<span style="display:inline-block;white-space:nowrap" aria-hidden="true">${chars}</span>`;
      })
      .join(' ');
  });
}

/* ------------------------------------------------------------------ */
/* Scroll reveal                                                       */
/* ------------------------------------------------------------------ */
function initReveal() {
  const targets = $$(
    '[data-reveal], [data-split-line], [data-chars], [data-line]'
  );

  // Stagger otomatis untuk anak-anak sebuah container
  $$('[data-stagger]').forEach((parent) => {
    const step = parseInt(parent.dataset.stagger || '100', 10);
    const base = parseInt(parent.dataset.revealDelay || '0', 10);
    $$(':scope > [data-reveal]', parent).forEach((child, i) => {
      if (child.dataset.revealDelay === undefined) {
        child.style.setProperty('--reveal-delay', `${base + i * step}ms`);
      }
    });
  });

  targets.forEach((el) => {
    if (el.dataset.revealDelay !== undefined) {
      el.style.setProperty('--reveal-delay', `${el.dataset.revealDelay}ms`);
    }
  });

  if (reduceMotion || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible', 'reveal-done'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        el.classList.add('is-visible');
        io.unobserve(el);

        // Lepas transisi reveal setelah selesai supaya hover/tilt tidak ikut lambat
        if (el.hasAttribute('data-reveal')) {
          const delay = parseInt(getComputedStyle(el).getPropertyValue('--reveal-delay') || '0', 10) || 0;
          window.setTimeout(() => el.classList.add('reveal-done'), delay + 1300);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  targets.forEach((el) => io.observe(el));
}

/* ------------------------------------------------------------------ */
/* Scroll: progress bar, navbar, parallax, timeline                   */
/* ------------------------------------------------------------------ */
function initScroll() {
  const bar = document.getElementById('scroll-progress');
  const nav = document.querySelector<HTMLElement>('.nav-shell');
  const parallaxEls = reduceMotion ? [] : $$('[data-parallax]');
  const tlTrack = document.getElementById('timeline-desktop-track');
  const tlFill = document.getElementById('timeline-fill-h');
  const tlTrackV = document.getElementById('timeline-mobile-track');
  const tlFillV = document.getElementById('timeline-fill-v');

  let ticking = false;

  const update = () => {
    ticking = false;
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;

    if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
    nav?.classList.toggle('is-scrolled', y > 12);

    const vh = window.innerHeight;
    parallaxEls.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax || '0.1');
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const offset = (r.top + r.height / 2 - vh / 2) * speed * -1;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    });

    // Garis timeline terisi sesuai posisi scroll
    const fillTrack = (track: HTMLElement | null, fill: HTMLElement | null, vertical: boolean) => {
      if (!track || !fill || track.offsetParent === null) return;
      const r = track.getBoundingClientRect();
      const p = Math.min(Math.max((vh * 0.65 - r.top) / Math.max(r.height, 1), 0), 1);
      fill.style.transform = vertical ? `scaleY(${p})` : `scaleX(${p})`;
    };
    fillTrack(tlTrack, tlFill, false);
    fillTrack(tlTrackV, tlFillV, true);
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
}

/* Penanda menu aktif sesuai section yang sedang dilihat */
function initScrollSpy() {
  if (location.pathname !== '/' || !('IntersectionObserver' in window)) return;
  const links = $$<HTMLAnchorElement>('.nav-link');
  const map = new Map<string, HTMLAnchorElement[]>();
  links.forEach((a) => {
    const id = (a.getAttribute('href') || '').split('#')[1];
    if (!id) return;
    map.set(id, [...(map.get(id) || []), a]);
  });

  const sections = Array.from(map.keys())
    .map((id) => document.getElementById(id))
    .filter(Boolean) as HTMLElement[];

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a) => a.classList.remove('is-active'));
        map.get(e.target.id)?.forEach((a) => a.classList.add('is-active'));
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  sections.forEach((s) => io.observe(s));
}

/* ------------------------------------------------------------------ */
/* Interaksi pointer                                                   */
/* ------------------------------------------------------------------ */
function initTilt() {
  if (reduceMotion || !finePointer) return;
  $$('[data-tilt]').forEach((card) => {
    const max = parseFloat(card.dataset.tilt || '6') || 6;
    const glare = document.createElement('span');
    glare.className = 'tilt-glare';
    glare.setAttribute('aria-hidden', 'true');
    card.appendChild(glare);

    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.classList.add('is-tilting');
      card.style.transform = `perspective(900px) rotateX(${((0.5 - py) * max).toFixed(2)}deg) rotateY(${((px - 0.5) * max * 1.3).toFixed(2)}deg) translateY(-6px)`;
      card.style.setProperty('--mx', `${px * 100}%`);
      card.style.setProperty('--my', `${py * 100}%`);
    });
    card.addEventListener('pointerleave', () => {
      card.classList.remove('is-tilting');
      card.style.transform = '';
    });
  });
}

function initMagnetic() {
  if (reduceMotion || !finePointer) return;
  $$('[data-magnetic]').forEach((el) => {
    const strength = parseFloat(el.dataset.magnetic || '0.3') || 0.3;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${(dx * strength).toFixed(1)}px, ${(dy * strength).toFixed(1)}px)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
    });
  });
}

function initHeroPointer() {
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (!hero || reduceMotion || !finePointer) return;
  const depthEls = $$('[data-depth]', hero);

  hero.addEventListener('pointermove', (e) => {
    const r = hero.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    hero.style.setProperty('--gx', `${(nx + 0.5) * 100}%`);
    hero.style.setProperty('--gy', `${(ny + 0.5) * 100}%`);
    depthEls.forEach((el) => {
      const d = parseFloat(el.dataset.depth || '10');
      el.style.transform = `translate3d(${(nx * d).toFixed(1)}px, ${(ny * d).toFixed(1)}px, 0)`;
    });
  });
  hero.addEventListener('pointerleave', () => {
    depthEls.forEach((el) => (el.style.transform = ''));
  });
}

/* ------------------------------------------------------------------ */
/* Menu mobile                                                         */
/* ------------------------------------------------------------------ */
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-toggle');
  const panel = document.getElementById('mobile-nav');
  const openIcon = document.getElementById('menu-icon-open');
  const closeIcon = document.getElementById('menu-icon-close');
  if (!btn || !panel) return;

  const set = (open: boolean) => {
    btn.setAttribute('aria-expanded', String(open));
    panel.classList.toggle('is-open', open);
    openIcon?.classList.toggle('hidden', open);
    closeIcon?.classList.toggle('hidden', !open);
  };
  btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
  $$('.mobile-nav-link').forEach((a) => a.addEventListener('click', () => set(false)));
}

/* ------------------------------------------------------------------ */
/* Helper publik untuk filter (timeline, proyek, galeri)               */
/* ------------------------------------------------------------------ */
(window as any).replayFilterAnim = (els: HTMLElement[]) => {
  if (reduceMotion) return;
  els.forEach((el, i) => {
    el.classList.remove('anim-filter-in');
    void el.offsetWidth; // paksa reflow agar animasi bisa diulang
    el.style.setProperty('--reveal-delay', `${Math.min(i, 10) * 55}ms`);
    el.classList.add('anim-filter-in');
  });
};

/* ------------------------------------------------------------------ */
function init() {
  prepareText();
  initReveal();
  initScroll();
  initScrollSpy();
  initTilt();
  initMagnetic();
  initHeroPointer();
  initMobileMenu();
  document.documentElement.classList.add('motion-ready');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
