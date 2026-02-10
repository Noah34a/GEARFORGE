/* =========================================================
   formation.js — Gearforge 
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* =========================================================
     1) DATA 
     ========================================================= */
  const FORMATIONS = {
    "fusion-eagle": {
      name: "Fusion Eagle",
      summary:
        "TEXTE",
      keySkills: [
  {
    title: "Modéliser des objets 3D complexes",
    moduleNum: "01",
    video: "../animation/anime_formation_1.mp4",
  },
  {
    title: "Simuler des scénarios thermiques/dynamiques",
    moduleNum: "02",
    video: "../animation/anime_formation_2.mp4",
  },
  {
    title: "Créer et modifier un schéma électronique",
    moduleNum: "03",
    video: "../animation/anime_formation_3.mp4",
  },
  {
    title: "Router un PCB complexe",
    moduleNum: "04",
    video: "../animation/anime_formation_4.mp4",
  }
],

      modules: [
        {
          num: "01",
          image: "",
          listTitle: "Module 1 : Prise en main Fusion 360 (1 jour) — 400€ (HT)",
          objective: "Maîtriser les outils basiques et avancés pour la conception mécanique.",
          sections: [
            {
              title: "Contenu",
              bullets: [
                "Présentation de l’interface et des espaces de travail (Design, Manufacture, Simulation)",
                "Création de croquis 2D : contraintes, dimensions, outils de base",
                "Modélisation 3D basique : extrusion, révolution, opérations booléennes",
                "Assemblages : création et gestion des assemblages, contraintes d’assemblage",
                "Création de pièces complexes : loft, sweep, patterns",
                "Introduction à la simulation (analyse statique simple)",
                "Génération de documents pour la fabrication",
              ],
            },
            {
              title: "Compétences",
              bullets: [
                "Concevoir des assemblages",
                "Modéliser des objets 3D complexes",
                "Simuler un modèle 3D statique contraint",
                "Naviguer dans l’interface",
                "Interagir aisément dans un environnement 3D",
                "Créer et modifier des croquis 2D et des modèles 3D basiques",
                "Utiliser les opérations booléennes",
                "Générer des documents de fabrication Fusion 360 et Eagle",
              ],
            },
          ],
        },
        {
          num: "02",
          image: "",
          listTitle: "Module 2 : Prise en main Eagle (1 jour) — 400€ (HT)",
          objective: "Comprendre et réaliser un schéma électronique + PCB simple avec Eagle.",
          sections: [
            {
              title: "Contenu",
              bullets: [
                "Interface Eagle",
                "Création d’un schéma",
                "Librairies / composants",
                "Création PCB",
                "Routage simple",
                "Export fabrication",
              ],
            },
            { title: "Compétences", bullets: ["Créer un schéma", "Gérer des composants", "Créer un PCB", "Réaliser un routage simple"] },
          ],
        },
        {
          num: "03",
          image: "",
          listTitle: "Module 3 : Conception mécanique avancée (4 jours) — 1600€ (HT)",
          objective: "Aller plus loin sur la modélisation, assemblage, contraintes et simulation.",
          sections: [
            { title: "Contenu", bullets: ["Paramétrage avancé", "Surfaces", "Topologie", "Assemblages complexes", "Simulation avancée", "Préparation fabrication"] },
            { title: "Compétences", bullets: ["Optimiser un modèle", "Simuler contraintes", "Préparer fabrication", "Structurer un projet"] },
          ],
        },
        {
          num: "04",
          image: "",
          listTitle: "Module 4 : Conception électronique avancée (4 jours) — 1600€ (HT)",
          objective: "Concevoir une électronique robuste : schéma, routage, règles, DRC, production.",
          sections: [
            { title: "Contenu", bullets: ["Schémas multi-feuilles", "Règles de design", "Routage avancé", "DRC/ERC", "Préparation production", "Bonnes pratiques"] },
            { title: "Compétences", bullets: ["Routage propre", "Validation DRC", "Préparer fabrication", "Concevoir un PCB complexe"] },
          ],
        },
      ],
    },

   "iot-domotique": {
  name: "IoT / Domotique",
  summary: "Systèmes embarqués, communication, sécurité, déploiement et tests en conditions réelles.",
  keySkills: [
    { title: "Gérer un protocole de communication", moduleNum: "01", video: "", poster: "" },
    { title: "Développer un firmware fonctionnel", moduleNum: "02", video: "", poster: "" },
    { title: "Déployer et tester en conditions réelles", moduleNum: "03", video: "", poster: "" },
    { title: "Sécuriser un système IoT", moduleNum: "04", video: "", poster: "" },
  ],
  modules: [
    {
      num: "01",
      image: "",
      listTitle: "Module 1 : Protocoles & communication (1 jour) — 400€ (HT)",
      objective: "Comprendre et choisir un protocole adapté (MQTT, HTTP, BLE…) et l’intégrer proprement.",
      sections: [
        { title: "Contenu", bullets: ["MQTT / HTTP / BLE", "Broker & architecture", "QoS / latence", "Bonnes pratiques", "Tests de communication"] },
        { title: "Compétences", bullets: ["Choisir un protocole", "Mettre en place une archi IoT", "Tester fiabilité/latence", "Documenter une intégration"] },
      ],
    },
    {
      num: "02",
      image: "",
      listTitle: "Module 2 : Firmware & embarqué (1 jour) — 400€ (HT)",
      objective: "Développer un firmware stable, maintenable et prêt pour la prod.",
      sections: [
        { title: "Contenu", bullets: ["Drivers & capteurs", "Gestion énergie", "Logs", "Erreurs & robustesse", "Organisation du code"] },
        { title: "Compétences", bullets: ["Coder un firmware propre", "Gérer capteurs/actionneurs", "Optimiser conso", "Déboguer efficacement"] },
      ],
    },
    {
      num: "03",
      image: "",
      listTitle: "Module 3 : Déploiement & tests terrain (4 jours) — 1600€ (HT)",
      objective: "Déployer, monitorer et valider le système en conditions réelles.",
      sections: [
        { title: "Contenu", bullets: ["Stratégie de déploiement", "Monitoring", "Tests terrain", "Analyse incidents", "Améliorations itératives"] },
        { title: "Compétences", bullets: ["Déployer un système", "Mettre du monitoring", "Analyser incidents", "Stabiliser une solution"] },
      ],
    },
    {
      num: "04",
      image: "",
      listTitle: "Module 4 : Sécurité IoT (4 jours) — 1600€ (HT)",
      objective: "Sécuriser communication, accès, secrets et durcir l’ensemble du système.",
      sections: [
        { title: "Contenu", bullets: ["TLS", "Gestion secrets", "Auth / rôles", "Hardening", "Bonnes pratiques sécurité"] },
        { title: "Compétences", bullets: ["Sécuriser un échange", "Gérer des secrets", "Mettre une auth", "Appliquer du hardening"] },
      ],
    },
  ],
},

    "prototypage": {
  name: "Prototypage",
  summary:
    "De l’idée au produit industrialisable : méthodologies de conception, prototypage, validation, optimisation et innovation.",

  keySkills: [
    { title: "Choisir une méthodologie de conception adaptée", moduleNum: "01", video: "", poster: "" },
    { title: "Optimiser et valider un prototype", moduleNum: "01", video: "", poster: "" },
    { title: "Industrialiser un produit et optimiser les coûts", moduleNum: "02", video: "", poster: "" },
    { title: "Protéger et financer une innovation", moduleNum: "02", video: "", poster: "" },
  ],

  modules: [
    {
      num: "01",
      image: "",
      listTitle:
        "Module 1 : Fondamentaux du prototypage et conception (2 jours) — Essentiel — 1000€ (HT)",
      objective:
        "Comprendre les bases du prototypage, les outils de conception et les méthodes d’optimisation.",

      sections: [
        {
          title: "Jour 1 — Introduction au prototypage et méthodologies",
          bullets: [
            "Introduction au prototypage : enjeux et objectifs",
            "Méthodologies de conception : Design Thinking, Lean Startup",
            "Outils de conception rapide",
            "Analyse de prototypes réussis et échecs courants",
            "Introduction aux matériaux et procédés de fabrication",
          ],
        },
        {
          title: "Compétences acquises",
          bullets: [
            "Choisir une méthodologie de conception adaptée à un projet",
            "Créer un système témoin",
            "Identifier les matériaux et procédés adaptés à un prototype",
          ],
        },
        {
          title: "Jour 2 — Optimisation et validation du prototype",
          bullets: [
            "Techniques d’optimisation de conception (contraintes, simulation)",
            "Prototypage rapide : impression 3D, découpe laser, usinage CNC",
            "Tests et validation : méthodes de mesure et d’évaluation",
            "Gestion des itérations et amélioration continue",
            "Optimisation d’un prototype existant (cas pratique)",
          ],
        },
        {
          title: "Compétences acquises",
          bullets: [
            "Utiliser des outils de simulation pour valider un prototype",
            "Choisir et appliquer des techniques de prototypage rapide",
            "Planifier et exécuter des tests d’amélioration",
          ],
        },
      ],
    },

    {
      num: "02",
      image: "",
      listTitle:
        "Module 2 : Réalisation, optimisation et industrialisation (3 jours) — Confirmé — 1500€ (HT)",
      objective:
        "Passer du prototype à la production en intégrant les contraintes industrielles et économiques.",

      sections: [
        {
          title: "Jour 3 — Préparation à la production",
          bullets: [
            "Transition prototype → production : enjeux et défis",
            "Analyse des coûts et optimisation économique",
            "Choix des fournisseurs et gestion de la chaîne logistique",
            "Normes et réglementations (sécurité, environnement)",
            "Analyse d’un produit industrialisé (étude de cas)",
          ],
        },
        {
          title: "Compétences acquises",
          bullets: [
            "Évaluer les coûts et optimiser la rentabilité d’un produit",
            "Sélectionner des fournisseurs",
            "Comprendre et appliquer les normes en vigueur",
          ],
        },
        {
          title: "Jour 4 — Industrialisation et optimisation des processus",
          bullets: [
            "Méthodes d’industrialisation : Lean Manufacturing, Six Sigma",
            "Automatisation de la production",
            "Gestion de la qualité et contrôle des processus",
            "Optimisation des flux de production",
            "Amélioration d’un processus industriel (cas pratique)",
          ],
        },
        {
          title: "Compétences acquises",
          bullets: [
            "Appliquer des méthodes d’industrialisation",
            "Automatiser une production",
            "Mettre en place des outils de contrôle qualité",
          ],
        },
        {
          title: "Jour 5 — Innovation et veille technologique",
          bullets: [
            "Stratégies d’innovation et créativité",
            "Veille technologique et benchmarking",
            "Propriété intellectuelle et protection des innovations",
            "Financement et levée de fonds",
            "Analyse d’une innovation disruptive",
          ],
        },
        {
          title: "Compétences acquises",
          bullets: [
            "Développer une stratégie d’innovation produit",
            "Réaliser une veille technologique efficace",
            "Protéger et financer une innovation",
          ],
        },
      ],
    },
  ],
},


    "robotique-mecatronique": {
  name: "Robotique & Mécatronique",
  summary:
    "Conception de systèmes robotisés, cinématique, perception, ROS et intelligence artificielle.",
  keySkills: [
    { title: "Concevoir un système robotisé", moduleNum: "01", video: "", poster: "" },
    { title: "Appliquer les normes de sécurité", moduleNum: "02", video: "", poster: "" },
    { title: "Développer une robotique autonome", moduleNum: "03", video: "", poster: "" },
    { title: "Intégrer ROS et l’IA", moduleNum: "03", video: "", poster: "" },
  ],
  modules: [
    {
      num: "01",
      image: "",
      listTitle:
        "Module 1 : Fondamentaux des systèmes robotisés (2 jours) — Essentiel — 1100€ HT",
      objective:
        "Comprendre l’architecture des systèmes robotisés et leurs composants.",
      sections: [
        {
          title: "Contenu",
          bullets: [
            "Typologie des robots (industriels, mobiles, cobots)",
            "Capteurs : position, force, vision, LIDAR",
            "Actionneurs : moteurs, vérins",
            "Cartes de contrôle (Arduino, ESP32, STM32, PLC)",
            "Cinématique des robots mobiles",
            "Planification de trajectoire",
            "Outils de simulation (Gazebo, CoppeliaSim)",
          ],
        },
        {
          title: "Compétences",
          bullets: [
            "Identifier les types de robots",
            "Sélectionner capteurs et actionneurs",
            "Analyser la cinématique",
            "Lire et interpréter des schémas",
          ],
        },
      ],
    },
    {
      num: "02",
      image: "",
      listTitle:
        "Module 2 : Conception avancée et sécurité (3 jours) — Confirmé — 1650€ HT",
      objective:
        "Concevoir des systèmes robotisés avancés conformes aux normes de sécurité.",
      sections: [
        {
          title: "Contenu",
          bullets: [
            "Normes ISO 10218 / ISO-TS 15066",
            "Sécurité robotique",
            "Bras polyarticulés et cobots",
            "Cinématique directe et inverse",
            "Outils mathématiques (Python, MATLAB)",
            "Robots holonomes et roues mécanum",
          ],
        },
        {
          title: "Compétences",
          bullets: [
            "Appliquer les normes de sécurité",
            "Concevoir des bras robotisés",
            "Programmer des trajectoires",
            "Gérer les singularités cinématiques",
          ],
        },
      ],
    },
    {
      num: "03",
      image: "",
      listTitle:
        "Module 3 : Robotique autonome et intelligente (5 jours) — Expert — 2750€ HT",
      objective:
        "Développer des robots autonomes intégrant perception, ROS et IA.",
      sections: [
        {
          title: "Contenu",
          bullets: [
            "SLAM, LIDAR et fusion de capteurs",
            "Odométrie et navigation autonome",
            "Computer vision (OpenCV, YOLO)",
            "ROS, ROS 2 et Micro-ROS",
            "Simulation Gazebo / RViz",
            "IA et apprentissage par renforcement",
          ],
        },
        {
          title: "Compétences",
          bullets: [
            "Implémenter le SLAM",
            "Développer avec ROS",
            "Intégrer la vision et l’IA",
            "Concevoir des robots autonomes",
          ],
        },
      ],
    },
  ],
},
  }

  /* =========================================================
     2) Helpers DOM
     ========================================================= */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* =========================================================
     3) Selecteurs 
     ========================================================= */
  const searchInput = $("#q");
  const cards = $$(".formation-card");

  const detailSection = $("#formation-detail");
  const detailTitle = $("#f-detail-name");
  const detailSummary = $("#f-detail-summary");
  const closeBtn = $("#f-detail-close");

  const modsRows = $("#mods-rows");     
  const skillsGrid = $("#skills-grid"); 

  /* =========================================================
     4) Utils
     ========================================================= */
  const pad2 = (n) => String(n).padStart(2, "0");

  function showDetail() {
    if (!detailSection) return;
    detailSection.hidden = false;
    detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function hideDetail() {
    if (!detailSection) return;

    detailSection.hidden = true;
    cards.forEach((c) => c.classList.remove("is-selected"));

    if (modsRows) modsRows.innerHTML = "";
    if (skillsGrid) skillsGrid.innerHTML = "";
  }

  function buildModuleDocHTML(m) {
    const obj = m.objective
      ? `<p class="mod-doc__objective"><strong>Objectif :</strong> ${m.objective}</p>`
      : "";

    const sections = (m.sections || [])
      .map((s) => {
        const isSkills = (s.title || "").toLowerCase().includes("compét");
        const ulClass = `mod-doc__ul ${isSkills ? "is-skills" : ""}`;
        const bullets = (s.bullets || []).map((b) => `<li>${b}</li>`).join("");
        return `
          <h3 class="mod-doc__h3">${s.title || "Section"}</h3>
          <ul class="${ulClass}">${bullets}</ul>
        `;
      })
      .join("");

    return `<div class="mod-doc">${obj}${sections}</div>`;
  }

  function openModuleByNum(moduleNum) {
    if (!modsRows) return;

    const targets = $$(".mod-acc", modsRows);
    const found = targets.find((d) => ($(".mod-acc__num", d)?.textContent || "").trim() === moduleNum);
    if (!found) return;

    found.open = true;
    found.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* =========================================================
     5) Render modules 
     ========================================================= */
  function renderModules(modules) {
    if (!modsRows) return;
    modsRows.innerHTML = "";

    (modules || []).forEach((m) => {
      const num = pad2(m.num);

      // Ligne
      const row = document.createElement("div");
      row.className = "f-mod-row";

      // Image gauche (bouton)
      const imgBtn = document.createElement("button");
      imgBtn.type = "button";
      imgBtn.className = "mod-img";
      imgBtn.setAttribute("aria-label", `Ouvrir le module ${num}`);
      imgBtn.innerHTML = m.image
        ? `<img src="${m.image}" alt="Aperçu module ${num}" loading="lazy">`
        : "";

      // Accordéon droite
      const details = document.createElement("details");
      details.className = "mod-acc";

      const summary = document.createElement("summary");
      summary.innerHTML = `
        <div class="mod-acc__left">
          <div class="mod-acc__num">${num}</div>
          <p class="mod-acc__title">${m.listTitle || `Module ${num}`}</p>
        </div>
        <div class="mod-acc__right">
          <div class="mod-acc__chev" aria-hidden="true">›</div>
        </div>
      `;

      const body = document.createElement("div");
      body.className = "mod-acc__body";
      body.innerHTML = buildModuleDocHTML(m);

      details.appendChild(summary);
      details.appendChild(body);

      // Sync open => agrandit l'image de la ligne
      const syncOpenState = () => {
        row.classList.toggle("is-open", details.open);
      };

      details.addEventListener("toggle", syncOpenState);

      // Clic sur image => toggle open/close
      imgBtn.addEventListener("click", () => {
        details.open = !details.open;
        syncOpenState();
        details.scrollIntoView({ behavior: "smooth", block: "start" });
      });

      row.appendChild(imgBtn);
      row.appendChild(details);
      modsRows.appendChild(row);

      syncOpenState();
    });
  }

  /* =========================================================
     6) Render compétences
     ========================================================= */
 function renderKeySkills(keySkills) {
  if (!skillsGrid) return;
  skillsGrid.innerHTML = "";

  const items = (keySkills || []).slice(0, 4);
  if (!items.length) return;

  items.forEach((s) => {
    const mod = s.moduleNum ? pad2(s.moduleNum) : "01";
    const videoSrc = (s.video || "").trim();
    const posterSrc = (s.poster || "").trim();
    const hasVideo = !!videoSrc;

    const tile = document.createElement("article");
    tile.className = "skill-tile";
    tile.tabIndex = 0;

    tile.innerHTML = `
      <div class="skill-tile__media">
        ${
          hasVideo
            ? `<video
                 muted
                 playsinline
                 preload="metadata"
                 ${posterSrc ? `poster="${posterSrc}"` : ""}
               >
                 <source src="${videoSrc}" type="video/mp4">
               </video>`
            : `<div class="skill-tile__placeholder">Animation à venir</div>`
        }
      </div>
      <h4 class="skill-tile__title">${s.title || "Compétence"}</h4>
    `;

    //  Hover vidéo : play/pause en boucle + reset
    const video = tile.querySelector("video");
    if (video) {
      video.loop = true;

      const play = () => {
        video.currentTime = 0;
        const p = video.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      };

      const stop = () => {
        video.pause();
        video.currentTime = 0;
      };

      tile.addEventListener("mouseenter", play);
      tile.addEventListener("mouseleave", stop);

      // si la vidéo ne charge pas => fallback "Animation à venir"
      video.addEventListener("error", () => {
        tile.querySelector(".skill-tile__media").innerHTML =
          `<div class="skill-tile__placeholder">Animation à venir</div>`;
      });
    }

    // Clic => ouvre le module correspondant
    const go = () => openModuleByNum(mod);
    tile.addEventListener("click", go);
    tile.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        go();
      }
    });

    skillsGrid.appendChild(tile);
  });
}


  /* =========================================================
     7) Select formation
     ========================================================= */
  function selectFormation(key) {
    const data = FORMATIONS[key];
    if (!data) return;

    cards.forEach((c) => c.classList.toggle("is-selected", c.dataset.formation === key));

    if (detailTitle) detailTitle.textContent = data.name || "Formation";
    if (detailSummary) detailSummary.textContent = data.summary || "";

    renderModules(data.modules);
    renderKeySkills(data.keySkills);

    showDetail();
  }

  /* =========================================================
     8) Events
     ========================================================= */
  cards.forEach((card) => {
    const key = card.dataset.formation;

    card.addEventListener("click", () => selectFormation(key));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectFormation(key);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", hideDetail);

  // Recherche : filtre cards 
  if (searchInput) {
    const form = searchInput.closest("form");
    if (form) form.addEventListener("submit", (e) => e.preventDefault());

    searchInput.addEventListener("input", () => {
      const q = searchInput.value.trim().toLowerCase();

      cards.forEach((card) => {
        const key = card.dataset.formation;
        const data = FORMATIONS[key];
        const hay = `${data?.name || ""} ${data?.summary || ""}`.toLowerCase();
        card.style.display = hay.includes(q) ? "" : "none";
      });
    });
  }
});
