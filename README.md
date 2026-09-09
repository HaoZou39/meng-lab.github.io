# Meng Lab website (Phase 1)

A static academic laboratory website for **Meng Lab**.

This is an early development version hosted on a personal GitHub account. It is **not** the final institutional repository or domain. The production lab account and URL may change later.

Provisional development URL:

https://haozou39.github.io/meng-lab.github.io/

## Local setup

This project uses [Astro](https://astro.build/) 5.13, TypeScript, Tailwind CSS 4, and Markdown content collections. There is no backend, database, or CMS.

The stack is pinned to Astro 5.13 and Vite 6 so it builds on Node 20 (including 20.11). Newer Astro majors require Node 22+.

Requirements:

- Node.js 20.3 or later (this project is developed against Node 20 and Astro 5)
- npm

Install dependencies:

```bash
npm install
```

## Local development

Start the development server:

```bash
npm run dev
```

Then open the URL printed in the terminal (typically `http://localhost:4321/meng-lab.github.io/`).

The `base` path is required because this is a **project** GitHub Pages site, not a user-root `username.github.io` site.

## Production build

```bash
npm run build
```

Preview the built site:

```bash
npm run preview
```

## GitHub Pages deployment

The site is built and deployed by GitHub Actions using the official Astro action and GitHub Pages deployment action. The workflow lives at `.github/workflows/deploy.yml`.

It runs:

- on every push to `main`
- when started manually from the Actions tab (`workflow_dispatch`)

### One-time GitHub Settings step

In the GitHub repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

After that, pushing to `main` (or running the workflow manually) publishes the site to:

https://haozou39.github.io/meng-lab.github.io/

### Repository configuration notes

This repository is a project Pages site. Astro is configured as:

- `site`: `https://haozou39.github.io`
- `base`: `/meng-lab.github.io`

If the final lab repository or custom domain changes, update `astro.config.mjs` (`site` and `base`) and the canonical URL notes in this README.

## Editing content

Scientific wording and lab identity live in `src/data/lab.ts` so copy can be revised without rewriting layout components.

Markdown collections:

- `src/content/news/` — news items
- `src/content/publications/` — publications
- `src/content/people/` — people

Phase 1 is intentionally content-light. Do not invent news, people, affiliations, or recruitment details.
