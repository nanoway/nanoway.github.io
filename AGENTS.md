# AGENTS.md

## Aperçu du projet

Site de blog personnel **« Nanoway »** (description : « Ressources pour mes Raspberry pi. Bouts de code, etc... »), généré avec **Docusaurus 3** (mode blog uniquement, `routeBasePath: '/'`) et hébergé sur **GitHub Pages** via le dépôt `nanoway/nanoway.github.io` (dépôt utilisateur, déployé par GitHub Actions à chaque push sur `master`). Le contenu du site est rédigé en **français** (`i18n.defaultLocale: 'fr'`).

Ce n'est pas un projet logiciel classique : il n'y a aucun code applicatif, aucun test automatisé et aucune étape de build autre que la génération statique du site par Docusaurus. Tout le contenu est constitué de fichiers Markdown.

Historique : le site était auparavant un blog **Jekyll 3.4.4** (thème minima, Ruby 2.3.1), migré vers Docusaurus en septembre 2026 (les anciens posts de 2017 sont dans `blog/`, l'historique git complet contient l'ancienne version Jekyll).

## Structure du projet

```
├── docusaurus.config.ts  # Configuration Docusaurus (blog-only, navbar, footer, i18n fr)
├── blog/                 # Articles du blog (un dossier par post)
│   ├── 2017-06-18-configuration-raspberry-pi/index.md
│   └── 2017-11-11-installer-vpn-raspberry/index.md
├── src/
│   ├── pages/about.md    # Page « À propos »
│   └── css/custom.css    # Styles custom
├── static/img/           # Images statiques (favicon, logo, social card)
├── .github/workflows/deploy.yml  # Build + déploiement GitHub Pages
├── package.json / tsconfig.json
└── .gitignore            # Ignore node_modules, build, .docusaurus
```

Il n'existe pas de section docs (`docs: false` dans la config).

## Pile technique

- **Node.js 22** / **npm**
- **Docusaurus 3** (`@docusaurus/preset-classic`), configuré en TypeScript (`docusaurus.config.ts`)
- Mode **blog-only** : l'accueil du site (`/`) est la liste des articles ; pas de page d'accueil custom
- Moteur de contenu : **MDX** (le Markdown est compilé via MDX — syntaxe plus stricte que kramdown : pas de `{:target=...}`, langages de blocs de code en minuscules, espaces obligatoires après les `#` de titres)

## Commandes de build et de développement

Installation des dépendances :

```bash
npm install
```

Serveur de développement local (rechargement automatique) :

```bash
npm run start
```

Génération statique seule (sortie dans `build/`) :

```bash
npm run build
```

Servir le build localement :

```bash
npm run serve
```

## Conventions de contenu

- Les posts vivent dans `blog/AAAA-MM-JJ-slug/index.md` (un dossier par post, fichier `index.md` à l'intérieur).
- Chaque post commence par un **front matter** YAML :
  ```yaml
  ---
  title: Titre de l'article
  date: 2017-11-11
  tags: [Raspberry, VPN, OpenVPN]
  ---
  ```
- Les tags servent à la fois de catégories et d'étiquettes (le blog Jekyll historique utilisait `categories:` et `tags:`, fusionnés ici dans `tags:`).
- Les pages statiques (ex. `src/pages/about.md`) utilisent `title` en front matter.
- Le site est en français ; les variables de `docusaurus.config.ts` (`title`, `tagline`, navbar, footer) aussi.
- Les blocs de code utilisent les fenced code blocks avec un langage en minuscules (```shell).

## Tests

**Aucun test automatisé n'existe dans ce projet.** La vérification se fait en lançant `npm run build` (qui échoue sur les liens cassés via `onBrokenLinks: 'throw'`) et en contrôlant le rendu sur `http://localhost:3000`, puis en vérifiant la page publiée après déploiement.

## Déploiement

Déploiement par **GitHub Actions** (`.github/workflows/deploy.yml`) : chaque push sur `master` exécute `npm ci && npm run build` puis publie le dossier `build/` sur GitHub Pages (workflow officiel `actions/upload-pages-artifact` + `actions/deploy-pages`).

Prérequis côté dépôt GitHub (déjà fait) : Settings → Pages → Source = **GitHub Actions**.

## Considérations de sécurité

- Ne pas committer de secrets : tout fichier présent dans le dépôt est publié tel quel sur GitHub Pages.
- Le workflow a les permissions minimales (`contents: read`, `pages: write`, `id-token: write`).
