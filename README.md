# JAXA Production - BOLD

Une application Next.js SPA moderne pour JAXA Production, convertie à partir d'un design HTML statique.

## 🚀 Fonctionnalités

- **SPA (Single Page Application)** : Navigation fluide sans rechargement de page
- **Design BOLD** : Interface audacieuse avec animations modernes
- **Responsive** : Adapté à tous les appareils
- **Animations** : Effets de parallaxe, rotations et transitions
- **Performance** : Optimisé avec Next.js et Tailwind CSS

## 🎨 Design

Couleurs principales :
- Bleu JAXA: `#0083C0`
- Menthe: `#00C9A7`
- Violet: `#845EC2`
- Nuit: `#1A1A2E`
- Corail: `#FF9671`

Polices :
- Archivo Black (titres)
- Space Grotesk (texte)

## 🛠️ Installation

1. Clonez le projet :
```bash
git clone [repository-url]
cd jaxa-next-spa
```

2. Installez les dépendances :
```bash
npm install
```

3. Copiez les assets (images, vidéos) :
```bash
npm run copy-assets
```

4. Lancez le serveur de développement :
```bash
npm run dev
# ou
npm run dev:with-assets
```

5. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du projet

```
jaxa-next-spa/
├── app/                    # Pages et layout Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   └── globals.css        # Styles globaux
├── components/            # Composants React
│   ├── Navigation.tsx     # Navigation fixe
│   ├── Hero.tsx          # Section hero
│   ├── Projects.tsx      # Grille de projets
│   ├── Expertise.tsx     # Section expertise
│   ├── CTA.tsx           # Call to action
│   ├── Contact.tsx       # Section contact
│   ├── Footer.tsx        # Pied de page
│   └── ExpertiseIcon.tsx # Icônes SVG
├── hooks/                 # Hooks personnalisés
│   └── useParallax.ts    # Hook pour effets parallaxe
├── utils/                 # Utilitaires
│   └── smoothScroll.ts   # Navigation fluide
├── public/               # Assets statiques
│   └── assets/          # Images et médias
├── scripts/              # Scripts utilitaires
│   └── copy-assets.js   # Copie des assets
└── package.json         # Dépendances et scripts
```

## 🚀 Déploiement

### Build pour production :
```bash
npm run build:with-assets
```

### Démarrage en production :
```bash
npm start
```

### Déploiement sur Vercel (recommandé) :
1. Poussez le code sur GitHub/GitLab
2. Importez le projet sur [Vercel](https://vercel.com)
3. Vercel détectera automatiquement Next.js et configurera le déploiement

## 📱 Responsive Design

L'application s'adapte à toutes les tailles d'écran :
- **Desktop** : Navigation complète, grilles à 3 colonnes
- **Tablette** : Navigation simplifiée, grilles à 2 colonnes
- **Mobile** : Navigation hamburger, disposition verticale

## 🎯 Fonctionnalités techniques

- **Navigation fluide** : Scroll smooth vers les ancres
- **Parallaxe** : Effets visuels au défilement
- **Animations CSS** : Keyframes personnalisées
- **Optimisation des images** : Prête pour Next.js Image
- **TypeScript** : Typage statique pour une meilleure maintenance

## 🔧 Configuration

### Variables d'environnement
Créez un fichier `.env.local` à la racine :
```env
# Exemple de variables (ajoutez selon vos besoins)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Personnalisation
1. **Couleurs** : Modifiez les variables CSS dans `app/globals.css`
2. **Contenu** : Mettez à jour les données dans les composants
3. **Assets** : Ajoutez vos images dans `public/assets/`

## 📄 Licence

© 2026 JAXA Production. Tous droits réservés.

---

**Note** : Cette application est une conversion d'un design HTML statique en application Next.js moderne. Les assets multimédias (images, vidéos) doivent être ajoutés dans le dossier `attached_assets` à la racine du projet ou directement dans `public/assets/`.