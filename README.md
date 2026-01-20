# Gearforge — Site vitrine

Site vitrine de Gearforge, présentant l’activité et les services (Consulting, Prototypage, Formation), une section partenaires (marquee) et des statistiques animées.

## ✨ Fonctionnalités
- Navigation principale avec état actif automatique (classe `.is-active` + `aria-current`)
- Section “Nos services” avec cartes et effets hover
- Section “Ils nous ont fait confiance” : logos en défilement infini (animation CSS + duplication JS)
- Section statistiques : compteurs animés au scroll (IntersectionObserver)
- Design responsive (desktop / tablette / mobile)
- Respect de `prefers-reduced-motion` (accessibilité)

## 🧱 Stack
- HTML5
- CSS3
- JavaScript (Vanilla)

## 📂 Structure du projet
- `index.html` : page d’accueil
- `style.css` : styles (variables, layout, responsive)
- `script.js` : interactions (nav active, counters, trust loop)

## ▶️ Lancer le projet
1. Cloner le repo :
   ```bash
   git clone <URL_DU_REPO>
