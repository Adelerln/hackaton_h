# Hook - Frontend

Page frontend principale pour le produit B2B "Hook" - Connect with the people who matter.

## 🚀 Installation

```bash
npm install
```

## 🏃 Développement

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## 🏗️ Build

```bash
npm run build
```

## 📁 Structure du projet

```
src/
├── components/
│   ├── Header.jsx          # En-tête avec logo et tagline
│   ├── SearchForm.jsx      # Formulaire de recherche principal
│   ├── ResultsList.jsx     # Liste des résultats
│   └── ResultCard.jsx      # Carte de contact individuelle
├── config/
│   └── brandConfig.js      # Configuration de la marque (couleurs, logo, etc.)
├── App.jsx                 # Composant principal
├── main.jsx                # Point d'entrée React
└── index.css               # Styles globaux Tailwind
```

## 🎨 Identité de marque

La configuration de la marque est centralisée dans `src/config/brandConfig.js`. Pour remplacer le logo placeholder, modifiez la propriété `logoUrl` dans ce fichier.

## 🔌 API Mock

L'application utilise une fonction mock pour simuler l'API backend. La fonction `searchContacts` dans `App.jsx` retourne des données de test. Pour intégrer l'API réelle, remplacez cette fonction par un appel HTTP vers votre endpoint.

Endpoint simulé : `POST /api/searchContacts`
- Input: `companyUrl`, `offerDescription`
- Output: Liste de contacts avec scores de confiance

## ✨ Fonctionnalités

- **États de l'interface** : Empty, Loading, Error, Results
- **Animations subtiles** : Fade-in, translations, pulsations
- **Design premium** : Fond très sombre, typographie fine, effets de lueur ambre
- **Responsive** : Layout adaptatif avec Tailwind CSS

## 🛠️ Technologies

- React 18
- Tailwind CSS 3
- Vite 5
