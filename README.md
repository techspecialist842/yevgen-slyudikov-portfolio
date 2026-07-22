# Yevgen Slyudikov — Portfolio

Professional portfolio for **Yevgen Slyudikov**, Senior Web Developer.

## Features

- Immersive Three.js / React Three Fiber hero with floating 3D geometry and mouse parallax
- Scroll and hover animations with Framer Motion
- Sections: About, Skills, Experience, Languages
- Responsive layout for desktop and mobile

## Tech stack

- React + TypeScript + Vite
- Three.js, `@react-three/fiber`, `@react-three/drei`
- Framer Motion

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Live sites

- GitHub Pages: https://techspecialist842.github.io/yevgen-slyudikov-portfolio/
- Vercel: deploy from this repo (uses `base: '/'` automatically)

## Deploy notes

`vite.config.ts` sets `base` to `/yevgen-slyudikov-portfolio/` only in GitHub Actions. Local and Vercel builds use `/`, so asset paths resolve correctly on both hosts.
