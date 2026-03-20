/*formation.js — Gearforge*/

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* DATA */
  const FORMATIONS = {
  "fusion-eagle": {
    name: "Formation Fusion 360 & Eagle : Maîtrisez la Conception de Produits de A à Z",

    summary:
      "Devenez expert en CAO mécanique et électronique pour transformer vos idées en produits manufacturables.",

    description:
      "Cette formation complète vous offre une immersion totale dans l’écosystème Autodesk pour couvrir l’intégralité du cycle de développement d’un produit. Vous apprendrez à naviguer entre la modélisation 3D avancée sur Fusion 360 et la conception de circuits imprimés (PCB) sur Eagle. Que vous soyez débutant ou utilisateur confirmé, ce cursus vous donne les clés pour concevoir des systèmes complexes, simuler leur comportement et préparer leur fabrication industrielle.",
    
    download: "https://rqk.sh/fu8FPP",
      keySkills: [
  {
    title: "Modéliser des objets 3D complexes",
    moduleNum: "01",
    thumbnail: "../assets/anime_formation_1_mignature.png",
    video: "../animation/anime_formation_1.mp4",
  },
  {
    title: "Simuler des scénarios thermiques/dynamiques",
    moduleNum: "02",
    thumbnail: "../assets/anime_formation_2_mignature.png",
    video: "../animation/anime_formation_2.mp4",
  },
  {
    title: "Créer et modifier un schéma électronique",
    moduleNum: "03",
    thumbnail: "../assets/anime_formation_3_mignature.png",
    video: "../animation/anime_formation_3.mp4",
  },
  {
    title: "Router un PCB complexe",
    moduleNum: "04",
    thumbnail: "../assets/anime_formation_4_mignature.png",
    video: "../animation/anime_formation_4.mp4",
  }
],

      modules: [
        {
          num: "01",
          image: "../assets/01fusion.webp",
          /*level: "Essentiel",*/
          listTitle: "Conception Mécanique avec Fusion 360",
          objective: "Passez de l'esquisse 2D à la création de systèmes mécaniques complets et réalistes.",
          sections: [
            {
              title: "Contenu",
              bullets: [
                "Modélisation 3D Complexe : Maîtrise des fonctions d'extrusion, de révolution, de lissage (loft) et de balayage (sweep).",
                "Assemblages & Articulations : Création et gestion d'assemblages complexes avec gestion des contraintes de mouvement.",
                "Simulation de Pointe : Analyse de résistance statique, thermique et dynamique des fluides pour valider vos concepts avant production.",
                "Fabrication Assistée (FAO) : Génération de parcours d'outils pour l'usinage CNC et création de rendus photo-réalistes.",
              ],
            },
            /*{
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
            },*/
          ],
        },
        {
          num: "02",
          image: "../assets/02fusion.webp",
          /*level: "Essentiel",*/
          listTitle: "Conception Électronique avec Autodesk Eagle",
          objective: "Concevez des cartes électroniques professionnelles, du schéma de principe au routage multicouche.",
          sections: [
            {
              title: "Contenu",
              bullets: [
                "Schématique & Librairies : Création de schémas électroniques clairs et gestion personnalisée de vos bibliothèques de composants.",
                "Routage PCB Avancé : Maîtrise du routage manuel et automatique, gestion des plans de masse, des vias et des circuits haute fréquence.",
                "Intégration Méca-Élec : Synchronisation parfaite entre votre PCB et son boîtier 3D pour vérifier les interférences et optimiser le design.",
                "Standard Industriel : Génération des fichiers de fabrication (Gerber, BOM, STEP) et application des règles de Design for Manufacturing (DFM).t",
              ],
            },
            /*{ title: "Compétences", bullets: ["Naviguer dans l’interface ", "Créer et modifier un schéma électronique", "Utiliser des composants et librairies préconçus ", "Router un PCB simple ", "Générer des documents de fabrication", "Créer et modifier une librairie et un composant sur mesure ", "Router un PCB avec des règles de conception avancées"] 
            },*/
          ],
        },
        /*{
          num: "03",
          image: "",
          level: "Confirmé",
          listTitle: "Module 3 : Conception mécanique avancée (4 jours) — 1600€ (HT)",
          objective: " Explorer des fonctionnalités avancées de Fusion 360 jusqu’à la conclusion d’un projet.",
          sections: [
            { title: "Contenu", bullets: ["Création d’un assemblage complexe ", "Utilisation d’objets à géométrie complexe : surfacing", "Analyse faisabilité produit", "Anticipation des besoins de fabrication", "Modélisation de système complexe sur mesure", "Simulation avancée : analyse thermique, dynamique des fluides", "Fabrication assistée par ordinateur (FAO) : génération d’outils de parcours d’outil pour l'usage CNC", "Rendering et visualisation : création de rendus réalistes et animations"] },
            { title: "Compétences", bullets: ["Concevoir un projet complet", "Modéliser un objet vide modelable", "Analyser un système complexe", "Adapter la faisabilité de fabrication", "Modéliser un système complexe sur mesure", "Simuler des scénarios thermiques/dynamiques", "Préparer la fabrication d’un système", "Créer un rendu réaliste ou animé"] },
          ],
        },*/
        /*{
          num: "04",
          image: "",
          level: "Confirmé",
          listTitle: "Module 4 : Conception électronique avancée (4 jours) — 1600€ (HT)",
          objective: "Explorer des fonctionnalités avancées de Eagle jusqu’à la conclusion d’un projet.",
          sections: [
            { title: "Contenu", bullets: ["Routage d’un PCB complexe", "Intégration du PCB dans le boîtier (import/export entre Fusion et Eagle)", "Vérification des interférences et optimisation du design", "DRC/ERC", "Génération des fichiers pour la fabrication (STEP, Gerber, BOM)", "Conception de circuits multi-couches", "Conception de circuits haute fréquence", "Simulation de circuit analogique", "Bonnes pratiques pour la fabrication industrielle : normes, tests, DFM (Design for Manufacturing)"] },
            { title: "Compétences", bullets: ["Router un PCB complexe", "Générer et intégrer un modèle 3D du PCB finit", "Gérer des contraintes de conception", "Optimiser un design de PCB", "Gérer un routage multicouche", "Créer un circuit gérant de la haute fréquence", "Simuler le signal d’un circuit ou d’un sous-circuit", "Fabriquer un PCB en suivant les bonnes pratiques industrielles"] },
          ],
        },*/
      ],
    },

   "iot-domotique": {
  name: "Formation IoT & Domotique : De l'objet connecté à la maison intelligente",
  summary: "Devenez expert dans la conception et le déploiement de solutions IoT, de l'électronique embarquée jusqu'au Cloud.",
  descriptionHTML: `
    <p>
    Cette formation complète vous permet de maîtriser l'intégralité de la chaîne de valeur de l'Internet des Objets. Vous apprendrez à choisir les architectures matérielles optimales (STM32, ESP32, Raspberry Pi) et à manipuler les protocoles de communication essentiels tels que Zigbee, LoRa et MQTT.
    </p>

    <h4 class="f-detail__points-title">Points forts et compétences clés :</h4>

    <ul class="f-detail__points">
      <li><strong>Développement Embarqué :</strong> Programmation de firmware en C/C++, gestion des capteurs/actionneurs et optimisation de la consommation énergétique.</li>
      <li><strong>Conception Sur Mesure :</strong> Création de circuits imprimés (PCB) et prototypage rapide sur plateformes open-source.</li>
      <li><strong>Sécurité & Cloud :</strong> Mise en œuvre du chiffrement, des mises à jour OTA et intégration aux plateformes Cloud (AWS IoT).</li>
      <li><strong>Technologies Futuristes  :</strong> Initiation au TinyML (IA embarquée) et aux nouveaux standards d'interopérabilité comme Matter.</li>
    </ul>
  `,
  download: " https://rqk.sh/EA5Ojy",
  keySkills: [
  {
    title: "Gérer un protocole de communication",
    moduleNum: "01",
    thumbnail: "../assets/Anime_IOT_1_mignature.png",
    video: "../animation/anime_domo_1.mp4",
  },
  {
    title: "Développer un firmware fonctionnel pour un système IoT/domotique",
    moduleNum: "02",
    thumbnail: "../assets/Anime_IOT_2_mignature.png",
    video: "../animation/anime_domo_2.mp4",
  },
  {
    title: "Déployer et tester un système IoT/domotique en conditions réelles",
    moduleNum: "03",
    thumbnail: "../assets/Anime_IOT_3_mignature.png",
    video: "../animation/anime_domo_3.mp4",
  },
  {
    title: "Sécuriser un système IoT",
    moduleNum: "04",
    thumbnail: "../assets/Anime_IOT_4_mignature.png",
    video: "../animation/anime_domo_4.mp4",
  }
],
  /*modules: [
    {
      num: "01",
      image: "",
      level: "Essentiel",
      listTitle:
        "Formation robotique & mécatronique avancée",
      objective:
        "Maîtrisez la conception de robots autonomes, la vision par ordinateur et l'intelligence artificielle.",

      sections: [
        {
          title: "Contenu",
          bullets: [
            "Navigation Autonome : Implémentation d'algorithmes de SLAM (cartographie), de LIDAR et d'odométrie pour une localisation précise.",
            "Computer Vision : Traitement d'images avec OpenCV et détection d'objets via YOLO pour le guidage visuel.",
            "Écosystème ROS : Maîtrise de ROS 2 et Micro-ROS pour orchestrer des systèmes robotiques complexes et simulés sur Gazebo.",
            "IA & Décision : Intégration de l'apprentissage par renforcement pour créer des robots capables de prendre des décisions en temps réel.",
              ],
        },
      ],
    },

    /*{
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
  ],*/
},

    "prototypage": {
  name: "Formation Prototypage & Industrialisation : Du concept à la série",
  summary: "Apprenez à transformer une idée en un produit viable, industrialisable et rentable.",
  descriptionHTML: `
    <p>
      Ce cursus est conçu pour les créateurs et ingénieurs souhaitant valider leurs innovations par des méthodes rigoureuses. Vous passerez de la conception assistée par ordinateur (CAO) sur SolidWorks ou Fusion 360 à la fabrication physique via l'impression 3D et l'usinage CNC.
    </p>

    <h4 class="f-detail__points-title">Points forts et compétences clés :</h4>

    <ul class="f-detail__points">
      <li><strong>Méthodologies Agiles :</strong> Maîtrise du Design Thinking et du Lean Startup pour accélérer vos cycles de développement.</li>
      <li><strong>Optimisation Technique :</strong> Simulation de contraintes et tests de validation pour garantir la robustesse de vos prototypes.</li>
      <li><strong>Stratégie de Production :</strong> Analyse des coûts, gestion de la supply chain et conformité aux normes réglementaires.</li>
      <li><strong>Innovation & Protection  :</strong> Veille technologique, stratégies de levée de fonds et protection de la propriété intellectuelle.</li>
    </ul>
  `,
  download: "https://rqk.sh/TC8D8r",

  keySkills: [
  {
    title: "Identification les matériaux et procédés nécessaires",
    moduleNum: "01",
    thumbnail: "../assets/Anime_proto_1_mignature.jpeg",
    video: "../animation/anime_comp_1.mp4",
  },
  {
    title: "Évaluer les coûts et optimiser la rentabilité d’un produit",
    moduleNum: "02",
    thumbnail: "../assets/Anime_proto_2_mignature.jpeg",
    video: "../animation/anime_comp_2.mp4",
  },
  {
    title: "Mettre en place des outils de contrôle qualité",
    moduleNum: "03",
    thumbnail: "../assets/Anime_proto_3_mignature.png",
    video: "../animation/anime_comp_3.mp4",
  },
  {
    title: "Protéger et financer une innovation",
    moduleNum: "04",
    thumbnail: "../assets/Anime_proto_4_mignature.png",
    video: "../animation/anime_comp_4.mp4",
  }
],

  /*modules: [
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
  ],*/
},
  "robotique-mecatronique": {
  name: "Formation robotique & mécatronique avancée",
  summary: "Maîtrisez la conception de robots autonomes, la vision par ordinateur et l'intelligence artificielle.",
  descriptionHTML: `
    <p>
      Une immersion totale dans l'univers de la robotique, couvrant aussi bien les robots industriels que les systèmes mobiles autonomes. De la mécanique des bras polyarticulés à l'intelligence des cobots, vous développerez une expertise pointue en intégration système.
    </p>

    <h4 class="f-detail__points-title">Points forts et compétences clés :</h4>

    <ul class="f-detail__points">
      <li><strong>Navigation Autonome :</strong> Implémentation d'algorithmes de SLAM (cartographie), de LIDAR et d'odométrie pour une localisation précise.</li>
      <li><strong>Computer Vision :</strong> Traitement d'images avec OpenCV et détection d'objets via YOLO pour le guidage visuel.</li>
      <li><strong>Écosystème ROS :</strong> Maîtrise de ROS 2 et Micro-ROS pour orchestrer des systèmes robotiques complexes et simulés sur Gazebo..</li>
      <li><strong>IA & Décision :</strong> Intégration de l'apprentissage par renforcement pour créer des robots capables de prendre des décisions en temps réel.</li>
    </ul>
  `,
  download: "https://rqk.sh/xHiyMO",

   keySkills: [
  {
    title: "Concevoir des bras polyarticuléss",
    moduleNum: "01",
    thumbnail: "../assets/Anime_robot_1_mignature.png",
    video: "../animation/Anime_robot_1.mp4",
  },
  {
    title: "Planification de trajectoire/odométrie",
    moduleNum: "02",
    thumbnail: "../assets/Anime_robot_2_mignature.png",
    video: "../animation/Anime_robot_2.mp4",
  },
  {
    title: "Intégrer l’IA pour la perception",
    moduleNum: "03",
    thumbnail: "../assets/Anime_robot_3_mignature.png",
    video: "../animation/Anime_robot_3.mp4",
  },
  {
    title: "Utiliser ROS (outil de simulation)",
    moduleNum: "04",
    thumbnail: "../assets/Anime_robot_4_mignature.png",
    video: "../animation/Anime_robot_4.mp4",
  }
],
 /* modules: [
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
            "Optimiser la précision de la localisation",
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
  ],*/
},
  }

  /* raccourcis DOM */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* éléments de la page qu’on réutilise ensuite */
const searchInput = $("#q");
const cards = $$(".formation-card");

const detailSection = $("#formation-detail");
const detailTitle = $("#f-detail-name");
const detailSummary = $("#f-detail-summary");
const detailDescription = $("#f-detail-description");
const detailDownload = $("#f-detail-download");
const closeBtn = $("#f-detail-close");

const modsRows = $("#mods-rows");
const skillsGrid = $("#skills-grid");

/* force un numéro sur 2 chiffres pour garder un affichage propre */
const pad2 = (n) => String(n).padStart(2, "0");

function showDetail() {
  if (!detailSection) return;

  detailSection.hidden = false;
  detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function hideDetail() {
  if (!detailSection) return;

  /* reset du panneau détail quand on le ferme */
  detailSection.hidden = true;
  cards.forEach((c) => c.classList.remove("is-selected"));

  if (detailTitle) detailTitle.textContent = "";
  if (detailSummary) detailSummary.textContent = "";
  if (detailDescription) detailDescription.textContent = "";
  if (detailDownload) detailDownload.href = "#";
  if (modsRows) modsRows.innerHTML = "";
  if (skillsGrid) skillsGrid.innerHTML = "";
}

/* construit le contenu interne d’un module */
function buildModuleDocHTML(m) {
  const obj = m.objective
    ? `<p class="mod-doc__objective"><strong>Objectif :</strong> ${m.objective}</p>`
    : "";

  const sections = (m.sections || [])
    .map((s) => {
      /* petite variante de style si la section parle de compétences */
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

/* permet d’ouvrir le bon accordéon depuis une carte compétence */
function openModuleByNum(moduleNum) {
  if (!modsRows) return;

  const targets = $$(".mod-acc", modsRows);
  const found = targets.find(
    (d) => ($(".mod-acc__num", d)?.textContent || "").trim() === moduleNum
  );

  if (!found) return;

  found.open = true;
  found.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* génère la liste des modules :
   image cliquable à gauche + accordéon à droite */
function renderModules(modules) {
  if (!modsRows) return;
  modsRows.innerHTML = "";

  (modules || []).forEach((m) => {
    const num = pad2(m.num);

    const row = document.createElement("div");
    row.className = "f-mod-row";

    /* l’image sert aussi de bouton d’ouverture */
    const imgBtn = document.createElement("button");
    imgBtn.type = "button";
    imgBtn.className = "mod-img";
    imgBtn.setAttribute("aria-label", `Ouvrir le module ${num}`);

    /* niveau optionnel si on veut afficher une pastille type Essentiel / Expert */
    const levelText = (m.level || "").trim();
    const levelClass = levelText
      ? levelText
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/\s+/g, "-")
      : "";

    imgBtn.innerHTML = `
      ${levelText ? `<span class="mod-level ${levelClass}">${levelText}</span>` : ""}
      ${
        m.image
          ? `<img src="${m.image}" alt="Aperçu module ${num}" loading="lazy">`
          : ""
      }
    `;

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

    /* on garde la row synchro avec l’état open du details */
    const syncOpenState = () => {
      row.classList.toggle("is-open", details.open);
    };

    details.addEventListener("toggle", syncOpenState);

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

/* affiche les compétences mises en avant au-dessus des modules */
function renderKeySkills(keySkills) {
  if (!skillsGrid) return;
  skillsGrid.innerHTML = "";

  const items = (keySkills || []).slice(0, 4);
  if (!items.length) return;

  items.forEach((s) => {
    const mod = s.moduleNum ? pad2(s.moduleNum) : "01";
    const videoSrc = (s.video || "").trim();
    const thumbSrc = (s.thumbnail || "").trim();
    const hasVideo = !!videoSrc;
    const hasThumb = !!thumbSrc;

    const tile = document.createElement("article");
    tile.className = "skill-tile";
    tile.tabIndex = 0;

    tile.innerHTML = `
      <div class="skill-tile__media">
        ${
          hasThumb
            ? `<img class="skill-tile__thumb" src="${thumbSrc}" alt="${s.title || "Compétence"}" loading="lazy">`
            : `<div class="skill-tile__placeholder">Miniature à venir</div>`
        }

        ${
          hasVideo
            ? `<video class="skill-tile__video" muted playsinline preload="metadata">
                 <source src="${videoSrc}" type="video/mp4">
               </video>`
            : ``
        }
      </div>

      <h4 class="skill-tile__title">${s.title || "Compétence"}</h4>
    `;

    const video = tile.querySelector(".skill-tile__video");
    const media = tile.querySelector(".skill-tile__media");

    if (video) {
      video.loop = true;

      const play = () => {
        tile.classList.add("is-hovered");
        video.currentTime = 0;

        const p = video.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      };

      const stop = () => {
        tile.classList.remove("is-hovered");
        video.pause();
        video.currentTime = 0;
      };

      tile.addEventListener("mouseenter", play);
      tile.addEventListener("mouseleave", stop);

      /* même comportement au clavier */
      tile.addEventListener("focus", play);
      tile.addEventListener("blur", stop);

      /* fallback si la vidéo ne charge pas */
      video.addEventListener("error", () => {
        if (media) {
          media.innerHTML = `
            <div class="skill-tile__placeholder">Animation à venir</div>
            <span class="skill-tile__module">${mod}</span>
          `;
        }
      });
    }

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

/* remplit tout le bloc détail à partir de la formation choisie */
function selectFormation(key) {
  const data = FORMATIONS[key];
  if (!data) return;

  cards.forEach((c) =>
    c.classList.toggle("is-selected", c.dataset.formation === key)
  );

  if (detailTitle) detailTitle.textContent = data.name || "Formation";
  if (detailSummary) detailSummary.textContent = data.summary || "";

  /* certaines formations utilisent du HTML, d’autres juste du texte */
  if (detailDescription) {
    detailDescription.innerHTML = data.descriptionHTML || data.description || "";
  }

  if (detailDownload) {
    detailDownload.href = data.download || "#";
    detailDownload.setAttribute("download", "");
  }

  renderModules(data.modules);
  renderKeySkills(data.keySkills);

  showDetail();
}

/* interactions sur les cartes */
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

/* recherche simple côté front :
   on masque juste les cartes qui ne matchent pas */
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
