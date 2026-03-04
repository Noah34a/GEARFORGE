/*GEARFORGE — script.js*/

(() => {
  "use strict";

  /*CONFIG / HELPERS*/
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const prefersReducedMotion =
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

  const getCurrentFilename = () => {
    const file = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    return file === "" ? "index.html" : file;
  };

  /* NAVIGATION ACTIVE*/
  function setActiveNav() {
    const nav = $(".radio-inputs");
    if (!nav) return;

    const links = $$("a.radio", nav);
    if (!links.length) return;

    const current = getCurrentFilename();

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

  /*STATS COUNTERS*/
  function animateCounter(el, to, duration = 750) {
    const start = performance.now();
    const from = 0;
    const isInt = Number.isInteger(to);

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
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

  /*TRUST — DUPLICATION */
  function initTrustInfinite() {

    const track = $(".trust__track");
    if (!track) return;

    if (prefersReducedMotion) return;

    if (track.dataset.duplicated === "true") return;

    track.innerHTML += track.innerHTML;
    track.dataset.duplicated = "true";
  }

  /*ABOUT — HOTSPOTS (4 points + modal)*/
  function initAboutHotspots() {
    const points = $$(".about-point");
    const modal = $(".about-modal");
    if (!points.length || !modal) return;

    const overlay = $(".about-modal__overlay", modal);
    const closeBtn = $(".about-modal__close", modal);
    const titleEl = $(".about-modal__title", modal);
    const textEl = $(".about-modal__text", modal);

    const openModal = (point) => {
      titleEl.textContent = point.dataset.title || "";
      textEl.textContent = point.dataset.text || "";

      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      closeBtn?.focus();
    };

    const closeModal = () => {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
    };

    points.forEach((point) => {
      point.addEventListener("click", () => openModal(point));
    });

    closeBtn?.addEventListener("click", closeModal);
    overlay?.addEventListener("click", closeModal);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
    });
  }

  /*HEADER — BURGER MENU (MOBILE)*/
  function initBurgerMenu() {
    const burger = $("#burger-btn");
    const nav = $("#main-nav");

    if (!burger || !nav) return;

    const closeMenu = () => {
      nav.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Ouvrir le menu");
    };

    burger.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    });

    // Fermer le menu quand on clique sur un lien
    $$("a", nav).forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Fermer si clic en dehors
    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(e.target) || burger.contains(e.target)) return;
      closeMenu();
    });

    // ESC ferme aussi (cohérent)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  /*INIT*/
  document.addEventListener("DOMContentLoaded", () => {
    setActiveNav();
    initCounters();
    initTrustInfinite();
    initAboutHotspots();
    initBurgerMenu();
  });
})();
