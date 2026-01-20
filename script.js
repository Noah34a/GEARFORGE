/* =========================
   GEARFORGE — script.js

   Fonctionnalités :
   1) Navigation : met en surbrillance la page courante (classe .is-active + aria-current)
   2) Stats : compteurs animés (0 -> data-count) quand visibles
   3) Trust : duplication des logos pour boucle infinie (marquee géré en CSS)

   Notes :
   - Respect de prefers-reduced-motion (accessibilité)
   - Code organisé par blocs (lecture facile en review)
   ========================= */

(() => {
  "use strict";

  /* =========================
     CONFIG / HELPERS
     ========================= */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const prefersReducedMotion =
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

  const getCurrentFilename = () => {
    const file = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    return file === "" ? "index.html" : file;
  };

  /* =========================
     1) NAVIGATION ACTIVE
     ========================= */
  function setActiveNav() {
    const nav = $(".radio-inputs");
    if (!nav) return;

    const links = $$("a.radio", nav);
    if (!links.length) return;

    const current = getCurrentFilename();

    // Reset : enlever is-active + aria-current
    $$(".name.is-active", nav).forEach((el) => el.classList.remove("is-active"));
    links.forEach((a) => a.removeAttribute("aria-current"));

    // Trouver le lien correspondant
    const match = links.find((a) => {
      const href = (a.getAttribute("href") || "").toLowerCase();
      return href === current || href.endsWith("/" + current);
    });

    if (!match) return;

    const name = $(".name", match);
    if (name) name.classList.add("is-active");

    // Accessibilité : indique au lecteur d’écran la page courante
    match.setAttribute("aria-current", "page");
  }

  /* =========================
     2) STATS COUNTERS
     ========================= */

  /**
   * Anime un compteur (0 -> to) avec easing.
   * @param {HTMLElement} el
   * @param {number} to
   * @param {number} duration
   */
  function animateCounter(el, to, duration = 750) {
    const start = performance.now();
    const from = 0;
    const isInt = Number.isInteger(to);

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      const value = from + (to - from) * eased;

      el.textContent = isInt ? String(Math.round(value)) : String(Math.round(value));

      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = String(to);
    };

    requestAnimationFrame(tick);
  }

  function initCounters() {
    const nodes = $$(".stat__number[data-count]");
    if (!nodes.length) return;

    // Reduced motion : on affiche direct
    if (prefersReducedMotion) {
      nodes.forEach((el) => {
        const to = Number(el.dataset.count);
        if (Number.isFinite(to)) el.textContent = String(to);
      });
      return;
    }

    const done = new WeakSet();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target;
          if (done.has(el)) return;

          const to = Number(el.dataset.count);
          if (!Number.isFinite(to)) {
            io.unobserve(el);
            return;
          }

          done.add(el);
          animateCounter(el, to);
          io.unobserve(el);
        });
      },
      { threshold: 0.35 }
    );

    nodes.forEach((el) => io.observe(el));
  }

  /* =========================
     3) TRUST — DUPLICATION (CSS MARQUEE)
     ========================= */
  function initTrustInfinite() {
    // Ton HTML utilise déjà .trust__track + animation CSS (trustScroll)
    const track = $(".trust__track");
    if (!track) return;

    // Reduced motion : on ne duplique pas, et on peut stopper l’animation côté CSS si tu veux
    if (prefersReducedMotion) return;

    // Empêche double duplication si le script est chargé 2 fois
    if (track.dataset.duplicated === "true") return;

    track.innerHTML += track.innerHTML;
    track.dataset.duplicated = "true";
  }

  /* =========================
     INIT
     ========================= */
  document.addEventListener("DOMContentLoaded", () => {
    setActiveNav();
    initCounters();
    initTrustInfinite();
  });
})();
