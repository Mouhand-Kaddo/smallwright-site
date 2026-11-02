# Smallwright site

The landing page for Smallwright, an Android app that builds Android apps on the phone. Static Astro 7 with Tailwind 4.

```bash
pnpm install
pnpm dev
pnpm build      # writes dist/
pnpm preview
```

The product name and links are in `src/site.ts`. The site deploys to GitHub Pages at `/smallwright-site/` through `.github/workflows/deploy.yml` on every push to `main`.
