# Smallwright site

The landing page for Smallwright, an Android app that builds Android apps on the phone. Static Astro 7 with Tailwind 4.

```bash
pnpm install
pnpm dev
pnpm build      # writes dist/
pnpm preview
```

The product name and links are in `src/site.ts`. The site is served by Cloudflare Workers static assets (`wrangler.jsonc`). Cloudflare Workers Builds deploys every push to `main` (build `pnpm run build`, deploy `pnpm exec wrangler deploy`). To deploy by hand, run `pnpm run deploy` with `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in the environment.
