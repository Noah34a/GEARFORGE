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
          level: "Essentiel",
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
          level: "Essentiel",
          listTitle: "Module 2 : Prise en main Eagle (1 jour) — 400€ (HT)",
          objective: "Maîtriser les outils basiques et avancés pour la conception électronique.  ",
          sections: [
            {
              title: "Contenu",
              bullets: [
                "Présentation de l’interface : éditeur de schémas et de PCB",
                "Création et modification d’une schématique : composants, connexions, annotations",
                "Génération d’un PCB basique : routage manuel, règles de design ",
                "Gestion des bibliothèques de composants : création et import",
                "Routage avancé : règles de design, plans de masse, vias",
                "Génération des fichiers Gerber, de la BOM et export pour la fabrication ",
              ],
            },
            { title: "Compétences", bullets: ["Naviguer dans l’interface ", "Créer et modifier un schéma électronique", "Utiliser des composants et librairies préconçus ", "Router un PCB simple ", "Générer des documents de fabrication", "Créer et modifier une librairie et un composant sur mesure ", "Router un PCB avec des règles de conception avancées"] },
          ],
        },
        {
          num: "03",
          image: "",
          level: "Confirmé",
          listTitle: "Module 3 : Conception mécanique avancée (4 jours) — 1600€ (HT)",
          objective: " Explorer des fonctionnalités avancées de Fusion 360 jusqu’à la conclusion d’un projet.",
          sections: [
            { title: "Contenu", bullets: ["Création d’un assemblage complexe ", "Utilisation d’objets à géométrie complexe : surfacing", "Analyse faisabilité produit", "Anticipation des besoins de fabrication", "Modélisation de système complexe sur mesure", "Simulation avancée : analyse thermique, dynamique des fluides", "Fabrication assistée par ordinateur (FAO) : génération d’outils de parcours d’outil pour l'usage CNC", "Rendering et visualisation : création de rendus réalistes et animations"] },
            { title: "Compétences", bullets: ["Concevoir un projet complet", "Modéliser un objet vide modelable", "Analyser un système complexe", "Adapter la faisabilité de fabrication", "Modéliser un système complexe sur mesure", "Simuler des scénarios thermiques/dynamiques", "Préparer la fabrication d’un système", "Créer un rendu réaliste ou animé"] },
          ],
        },
        {
          num: "04",
          image: "",
          level: "Confirmé",
          listTitle: "Module 4 : Conception électronique avancée (4 jours) — 1600€ (HT)",
          objective: "Explorer des fonctionnalités avancées de Eagle jusqu’à la conclusion d’un projet.",
          sections: [
            { title: "Contenu", bullets: ["Routage d’un PCB complexe", "Intégration du PCB dans le boîtier (import/export entre Fusion et Eagle)", "Vérification des interférences et optimisation du design", "DRC/ERC", "Génération des fichiers pour la fabrication (STEP, Gerber, BOM)", "Conception de circuits multi-couches", "Conception de circuits haute fréquence", "Simulation de circuit analogique", "Bonnes pratiques pour la fabrication industrielle : normes, tests, DFM (Design for Manufacturing)"] },
            { title: "Compétences", bullets: ["Router un PCB complexe", "Générer et intégrer un modèle 3D du PCB finit", "Gérer des contraintes de conception", "Optimiser un design de PCB", "Gérer un routage multicouche", "Créer un circuit gérant de la haute fréquence", "Simuler le signal d’un circuit ou d’un sous-circuit", "Fabriquer un PCB en suivant les bonnes pratiques industrielles"] },
          ],
        },
      ],
    },

   "iot-domotique": {
  name: "IoT / Domotique",
  summary: "TEXTE",
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
      level: "Essentiel",
      listTitle:
        "Module 1 :  Fondamentaux des systèmes IoT/Domotique (2 jours) – 1000€ (HT)",
      objective:
        "",

      sections: [
        {
          title: "Jour 1 —  Introduction aux systèmes IoT et architectures matérielles",
          bullets: [
            "Définition et enjeux des systèmes IoT/domotique",
            "Architectures matérielles : microcontrôleurs (STM32, ESP32, Arduino) vs microprocesseurs (Raspberry Pi)",
            "Protocoles de communication (Wi-Fi, Bluetooth, LoRa, Zigbee, MQTT)",
            "Capteurs et actionneurs : choix, interfaçage et calibration",
            "Étude de cas : analyse d’un système domotique existant (ex : système de gestion d’énergie)",
          ],
        },
        {
          title: "Compétences acquises",
          bullets: [
            "Savoir choisir une architecture matérielle adaptée à un besoin IoT/domotique",
            "Comprendre les protocoles de communication et leurs cas d’usage",
            "Analyser et critiquer un système domotique existant",
          ],
        },
        {
          title: "Jour 2 —  Développement logiciel embarqué et intégration",
          bullets: [
            "Environnements de développement (IDE, toolchains) pour systèmes embarqués",
            "Programmation bas niveau (C/C++) : gestion des entrées/sorties, interruptions, timers",
            "Développement de firmware pour capteurs et actionneurs",
            "Intégration logicielle : communication entre modules (UART, SPI, I2C)",
            "Bonnes pratiques : optimisation de la consommation énergétique et gestion des erreurs",
          ],
        },
        {
          title: "Compétences acquises",
          bullets: [
            "Développer un firmware fonctionnel pour un système IoT/domotique",
            "Intégrer et faire communiquer plusieurs modules matériels",
            "Optimiser la consommation énergétique et la robustesse du code",
          ],
        },
      ],
    },

    {
      num: "02",
      image: "",
      level: "Confirmé",
      listTitle:
        "Module 2 :  Conception et déploiement de solutions sur mesure (3 jours) – 1500€ (HT)",
      objective:
        "",

      sections: [
        {
          title: "Jour 3 —  Conception de solutions IoT/domotique personnalisées",
          bullets: [
            "Méthodologie de conception : du cahier des charges à l’architecture système",
            "Design de circuits imprimés (PCB) pour l’IoT : outils (KiCad, Altium) et contraintes",
            "Prototypage rapide : utilisation de plateformes (Arduino, ESP32, Raspberry Pi)",
            "Sécurité des systèmes IoT : bonnes pratiques (chiffrement, authentification, OTA)",
            "Étude de cas : conception d’un système de surveillance environnementale (température, humidité, qualité de l’air)",
          ],
        },
        {
          title: "Compétences acquises",
          bullets: [
            "Concevoir une architecture système complète pour une solution IoT/domotique",
            "Prototyper et tester un système embarqué sur plateforme open-source",
            "Intégrer des mesures de sécurité de base dans un système IoT",
          ],
        },
        {
          title: "Jour 4 —  Déploiement, tests et maintenance",
          bullets: [
            "Déploiement physique : contraintes d’installation et d’alimentation",
            "Tests et validation : méthodes de test (unitaires, d’intégration, en environnement réel)",
            "Maintenance et mise à jour : gestion des mises à jour logicielles (OTA)",
            "Interfaçage utilisateur : développement d’une interface simple (web, mobile, vocal)",
            "Étude de cas : déploiement d’un système domotique dans un environnement résidentiel",
          ],
        },
        {
          title: "Compétences acquises",
          bullets: [
            "Déployer et tester un système IoT/domotique en conditions réelles",
            "Développer une interface utilisateur basique pour interagir avec le système",
            "Planifier la maintenance et les mises à jour logicielles",
          ],
        },
        {
          title: "Jour 5 — Technologies avancées et tendances IoT",
          bullets: [
            "Edge Computing et TinyML pour l’IoT",
            "Protocoles Matter et Thread pour l’interopérabilité",
            "Sécurité IoT : TLS 1.3 et HSM",
            "Réseaux LPWAN : LoRaWAN vs NB-IoT",
            "Plateformes Cloud IoT (AWS IoT, The Things Network)",
            "Perspectives : tendances futures (IA embarquée, edge computing, 5G/6G)",
          ],
        },
        {
          title: "Compétences acquises",
          bullets: [
            "Intégrer des algorithmes d’IA légers sur des microcontrôleurs",
            "Déployer des protocoles IoT avancés pour l’interopérabilité",
            "Sécuriser un système IoT de bout en bout",
          ],
        },
      ],
    },
  ],
},

    "prototypage": {
  name: "Prototypage",
  summary:
    "TEXTE",

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
      level: "Essentiel",
      listTitle:
        "Module 1 : Fondamentaux du prototypage et conception (2 jours) — 1000€ (HT)",
      objective:
        "Comprendre les bases du prototypage, les outils de conception et les méthodes d’optimisation.",

      sections: [
        {
          title: "Jour 1 — Introduction au prototypage et méthodologies",
          bullets: [
            "Introduction au prototypage : enjeux et objectifs",
            "Méthodologies de conception : Design Thinking, Lean Startup",
            "Outils de conception rapide",
            "Étude de cas : analyse de prototypes réussis et échecs courants",
            "Introduction aux matériaux et procédés de fabrication",
          ],
        },
        {
          title: "Compétences acquises",
          bullets: [
            "Savoir choisir une méthodologie de conception adaptée à un projet",
            "Créer un système témoin",
            "Identifier les matériaux et procédés adaptés à un prototype",
          ],
        },
        {
          title: "Jour 2 — Optimisation et validation du prototype",
          bullets: [
            "Techniques d’optimisation de conception (analyse de contraintes, simulation)",
            "Prototypage rapide : impression 3D, découpe laser, usinage CNC",
            "Tests et validation : méthodes de mesure et d’évaluation",
            "Gestion des itérations et amélioration continue",
            "Étude de cas : optimisation d’un prototype existant",
          ],
        },
        {
          title: "Compétences acquises",
          bullets: [
            "Utiliser des outils de simulation pour valider un prototype",
            "Choisir et appliquer des techniques de prototypage rapide",
            "Planifier et exécuter des tests pour améliorer un prototype",
          ],
        },
      ],
    },

    {
      num: "02",
      image: "",
      level: "Confirmé",
      listTitle:
        "Module 2 : Réalisation, optimisation et industrialisation (3 jours) — 1500€ (HT)",
      objective:
        "Passer du prototype à la production, en intégrant les contraintes industrielles et économiques. Adaptez votre prototype en cas de besoin. ",

      sections: [
        {
          title: "Jour 3 — Préparation à la production",
          bullets: [
            "Transition du prototype à la production : enjeux et défis",
            "Analyse des coûts et optimisation économique",
            "Choix des fournisseurs et gestion de la chaîne logistique",
            "Normes et réglementations (sécurité, environnement)",
            "Étude de cas : analyse d’un produit industrialisé",
          ],
        },
        {
          title: "Compétences acquises",
          bullets: [
            "Évaluer les coûts et optimiser la rentabilité d’un produit",
            "Sélectionner des fournisseurs et gérer une chaîne logistique",
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
            "Étude de cas : amélioration d’un processus industriel",
          ],
        },
        {
          title: "Compétences acquises",
          bullets: [
            "Appliquer des méthodes d’industrialisation pour optimiser la production",
            "Automatiser une production produit",
            "Mettre en place des outils de contrôle qualité",
          ],
        },
        {
          title: "Jour 5 — Innovation et veille technologique",
          bullets: [
            "Stratégies d’innovation et créativité",
            "Veille technologique et benchmarking",
            "Propriété intellectuelle et protection des innovations",
            "Financement et levée de fonds pour les projets innovants",
            "Étude de cas : analyse d’une innovation disruptive",
          ],
        },
        {
          title: "Compétences acquises",
          bullets: [
            "Développer une stratégie d’innovation pour un produit",
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
    "TEXTE",
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
      level: "Essentiel",
      listTitle:
        "Module 1 : Fondamentaux des systèmes robotisés (2 jours) — 1100€ (HT)",
      objective:
        "",
      sections: [
        {
          title: "Jour 1 : Types de robots, capteurs, actionneurs et cartes de contrôle",
          bullets: [
            "Typologie des robots (industriels, mobiles, cobots)",
            "Capteurs : position, force, vision, LIDAR",
            "Actionneurs : moteurs, vérins",
            "Cartes de contrôle et microcontrôleurs (Arduino, ESP32, STM32, PLC)",
            "Intégration des composants",
          ],
        },
        {
          title: "Compétences",
          bullets: [
            "Identifier les types de robots et leurs applications",
            "Sélectionner les capteurs et actionneurs adaptés",
            "Comprendre le rôle des cartes de contrôle",
            "Intégrer des composants dans un système robotisé",
            "Lire et interpréter des schémas de câblage",
          ],
        },
        {
          title: "Jour 2 :  Principes de déplacement d’objets et de robots",
          bullets: [
            "Manipulation d’objets (pinces, ventouses)",
            "Cinématique des robots mobiles (roues différentielles, omnidirectionnelles)",
            "Planification de trajectoire",
            "Exemples industriels (AGV, robots de picking)",
            "Outils de simulation (CoppeliaSim, Gazebo)",
          ],
        },
        {
          title: "Compétences",
          bullets: [
            "Concevoir des systèmes de préhension",
            "Appliquer ces principes à des cas industriels",
            "Analyser les contraintes dynamiques des robots",
          ],
        },
      ],
    },
    {
      num: "02",
      image: "",
      level: "Confirmé",
      listTitle:
        "Module 2 : Conception avancée et sécurité (3 jours) — 1650€ (HT)",
      objective:
        "",
      sections: [
        {
          title: "Jour 3 : Normes, sécurité et bras polyarticulés ",
          bullets: [
            "Normes ISO 10218 / ISO-TS 15066",
            "Sécurité des robots (dispositifs d’urgence, capteurs de présence)",
            "Bras polyarticulés (6 axes, SCARA)",
            "Cobots (principes, applications)",
            "Études de cas d’intégration industrielle",
          ],
        },
        {
          title: "Compétences",
          bullets: [
            "Appliquer les normes de sécurité",
            "Concevoir des bras polyarticulés",
            "Intégrer des cobots dans un environnement industriel",
            "Évaluer les risques et mettre en place des dispositifs de sécurité",
            "Analyser des études de cas industriels",
          ],
        },
        {
          title: "Jour 4 : Cinématique directe et inverse",
          bullets: [
            "Matrices de transformation homogène",
            "Résolution de la cinématique inverse",
            "Outils mathématiques (Python, MATLAB)",
            "Programmation de trajectoires d’un robot articulé",
            "Singularités cinématiques",
          ],
        },
        {
          title: "Compétences",
          bullets: [
            "Calculer la cinématique directe et inverse",
            "Programmer des trajectoires pour bras robotisés",
            "Utiliser des outils mathématiques pour la robotique",
            "Identifier et gérer les singularités cinématiques",
            "Analyser des études de cas industriels",
          ],
        },
        {
          title: "Jour 5 : Holonome et mécanum ",
          bullets: [
            "Robots holonomes (3 roues omnidirectionnelles)",
            "Cinématique des roues mécanum",
            "Conception de robots mobiles",
            "Planification de trajectoire d’un robot mobile",
            "Applications industrielles (logistique, drones)",
          ],
        },
        {
          title: "Compétences",
          bullets: [
            "Concevoir des robots à déplacement complexe",
            "Intégrer des robots holonomique dans des environnements réels",
          ],
        },
      ],
    },
    {
      num: "03",
      image: "",
      level: "Expert",
      listTitle:
        "Module 3 : Robotique autonome et intelligente (5 jours) — 2750€ (HT)",
      objective:
        "",
      sections: [
        {
          title: "Jour 6 : Mapping, LIDAR et barycentre ",
          bullets: [
            "SLAM (Simultaneous Localization and Mapping)",
            "Fonctionnement et intégration du LIDAR",
            "Calcul du barycentre pour l’équilibre",
            "Fusion de capteurs (LIDAR + odométrie)",
            "ROS pour le SLAM",
          ],
        },
        {
          title: "Compétences",
          bullets: [
            "Implémenter le SLAM pour la cartographie",
            "Utiliser un LIDAR pour la localisation",
            "Calculer et ajuster le barycentre d’un robot",
            "Fusionner les données de plusieurs capteurs",
            "Utiliser ROS pour le SLAM",
          ],
        },
        {
          title: "Jour 7 : Odométrie",
          bullets: [
            "Principe de l’odométrie",
            "Odométrie par roues (encodeurs, vitesse)",
            "Correction des erreurs (dérive, glissement)",
            "Fusion avec IMU/GPS",
            "Applications (navigation autonome)",
          ],
        },
        {
          title: "Compétences",
          bullets: [
            "Implémenter l’odométrie pour un robot mobile",
            "Corriger les erreurs d’odométrie",
            "Fusionner l’odométrie avec d’autres capteurs",
            "Appliquer l’odométrie à la navigation autonome",
            "ptimiser la précision de la localisation",
          ],
        },
        {
          title: "Jour 8 : Computer Vision",
          bullets: [
            "Traitement d’images (OpenCV)",
            "Détection d’objets (YOLO, Haar Cascades)",
            "Reconnaissance de formes (segmentation)",
            "Vision 3D (caméras stéréo, Kinect)",
            "Applications (tri automatique, guidage visuel)",
          ],
        },
        {
          title: "Compétences",
          bullets: [
            "Traiter des images avec OpenCV",
            "Détecter et reconnaître des objets pour la robotique",
            "Utiliser la vision 3D pour le guidage des robots",
            "Intégrer la vision par ordinateur dans des applications robotiques",
            "Développer des systèmes de tri ou de guidage visuel",
          ],
        },
        {
          title: "Jour 9 : ROS, ROS 2 et Micro-ROS",
          bullets: [
            "Architecture de ROS (nœuds, topics, services)",
            "ROS 2 (améliorations vs ROS 1)",
            "Micro-ROS pour microcontrôleurs",
            "Création de packages ROS",
            "Simulation avec Gazebo/Rviz",
          ],
        },
        {
          title: "Compétences",
          bullets: [
            "Développer des applications robotiques avec ROS/ROS 2",
            "Utiliser Micro-ROS pour des systèmes embarqués",
            "Simuler des robots avec Gazebo",
            "Créer et gérer des packages ROS",
            "Intégrer ROS dans des projets robotiques réels",
          ],
        },
        {
          title: "Jour 10 : IA dans la robotique",
          bullets: [
            "Apprentissage automatique pour la robotique",
            "Apprentissage par renforcement",
            "IA pour la décision (planification, apprentissage par renforcement)",
            "Maîtrise des outils populaires",
            "Applications (robots autonomes, drones intelligents)",
          ],
        },
        {
          title: "Compétences",
          bullets: [
            "Intégrer l’IA pour la perception et la décision en robotique",
            "Utiliser des frameworks d’IA",
            "Développer des robots autonomes avec ROS et IA",
            "Appliquer l’apprentissage par renforcement pour la robotique",
            "Analyser les performances des systèmes robotiques intelligents",
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
   5) Render modules (image + accordéon + pastille niveau)
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

    // -------- Pastille niveau (optionnelle)
    const levelText = (m.level || "").trim(); // "Essentiel" | "Confirmé" | "Expert"
    const levelClass = levelText
      ? levelText
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "") // enlève accents
          .replace(/\s+/g, "-") // espaces -> tirets
      : "";

    imgBtn.innerHTML = `
      ${levelText ? `<span class="mod-level ${levelClass}">${levelText}</span>` : ""}

      ${
        m.image
          ? `<img src="${m.image}" alt="Aperçu module ${num}" loading="lazy">`
          : ""
      }
    `;

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
