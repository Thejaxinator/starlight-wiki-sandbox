# Repository Drop-In Fix Pack (`Thejaxinator/starlight-wiki-sandbox`)

## What Was Broken & How This Pack Fixes It

1. **Unreachable `public/` Pages (`404 Page Not Found`)**:
   - On the deployed homepage ([Personal Game Wiki Sandbox](https://thejaxinator.github.io/starlight-wiki-sandbox/)), **Browse Destiny Codex** resolved to `/starlight-wiki-sandbox/public/destiny-2-fallen.html` and **Browse Multi-Design Gunfire Codex 2** resolved to `/starlight-wiki-sandbox/public/gunfire-codex.html` (while **Launch Multi-Design Gunfire Codex** pointed to `/starlight-wiki-sandbox/codex.html`).
   - Per [Astro Configuration & Static Routing](https://docs.astro.build/en/reference/configuration-reference/), files inside `public/` are copied directly to the build root **without** `public/` in the URL path (`/starlight-wiki-sandbox/destiny-2-fallen.html` and `/starlight-wiki-sandbox/gunfire-codex.html`).
   - Additionally, per [Astro Starlight Sidebar Navigation](https://starlight.astro.build/guides/sidebar/), standalone HTML files in `public/` added to `astro.config.mjs` must use `link:` rather than `slug:` (`slug:` validates against `src/content/docs/` and causes `astro build` to fail in GitHub Actions).
   - **Fix included**: `src/content/docs/index.mdx` and `astro.config.mjs` strip `/public/` from every codex URL and use schema-valid Starlight `link` entries so `npm run build` / `Deploy to GitHub Pages` succeeds cleanly.

2. **AI-Generated Images Removed from `public/destiny-2-fallen.html`**:
   - Rebuilt `public/destiny-2-fallen.html` on the `.destiny` UI specification ([Destiny UI CSS (`eververse.trade`)](https://eververse.trade/) / [itssimple/destiny-ui-css](https://github.com/itssimple/destiny-ui-css)) with **zero AI-generated images**.
   - Every visual is either an official Bungie Grimoire card, in-game render, or weapon inspection screenshot hosted on [Destinypedia — Fallen](https://www.destinypedia.com/Fallen) and [Light.gg](https://www.light.gg/), or a clean geometric Destiny FUI vector schematic when no standalone image URL exists.

## Apply in Your Local Clone

Extract this archive at the root of your `starlight-wiki-sandbox` repository (preserving your existing `public/gunfire-codex.html` and `src/content/docs/games/`), run `npm run build` locally to confirm 0 errors, then commit and push to `main`.
