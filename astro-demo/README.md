# Astro Demo Prototype

This folder contains a minimal Astro prototype for a redesigned DylanRae.ca.

The live GitHub Pages site currently serves static files from `master` at `/`, so the built demo output is committed separately under `/demo` for safe review at `https://dylanrae.ca/demo/` once merged.

Local commands:

```bash
cd astro-demo
npm install
npm run dev
npm run build
```

## GitHub Pages note

This repository currently uses classic GitHub Pages from `master` at `/`, not a GitHub Actions Astro deployment.

That is intentional for this prototype: Astro is used to generate static files into `/demo`, and GitHub Pages publishes those already-built files.

The root `.nojekyll` file is required because otherwise GitHub Pages tries to process the entire repository with Jekyll and fails on Astro source files such as `src/pages/index.astro`.
