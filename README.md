# Capernaum — Interactive Presentation

A cinematic, interactive presentation about *Capernaum* (2018), directed by Nadine Labaki. Built with React, TypeScript and Vite, and ready to connect to Vercel.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Vite writes the static production site to `dist/`.

## Deploy on Vercel

Import `nxtex/Capernaum` into Vercel. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`. No environment variables are needed.

After the Git repository is linked, pushes to the production branch will trigger deployments automatically.

## Media

The presentation uses remote film still URLs by default. You can replace them with local image files without changing the component:

- `public/images/home.jpg` for the opening screen
- `public/images/01.jpg` through `public/images/10.jpg` for chapter backgrounds

Local images take priority over remote stills. Keep image rights and file sizes in mind when adding media.
