import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://thejaxinator.github.io',
  base: '/starlight-wiki-sandbox',
  integrations: [
    starlight({
      title: 'Personal Game Wiki Sandbox',
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'robots',
            content: 'noindex, nofollow',
          },
        },
      ],
      sidebar: [
        {
          label: 'Standalone Game HUD Codexes',
          items: [
            // Use `link` (never `slug`) for static HTML files inside `public/`,
            // and omit `/public` because Astro serves `public/*` from the site root.
       { label: 'Destiny: Rising M.I.N.D. Codex', link: '/destiny-rising-codex.html' },
            { label: 'Destiny 1 & 2 Fallen Codex', link: '/destiny-2-fallen.html' },
            { label: 'Gunfire Reborn HUD Codex', link: '/gunfire-codex.html' },
          ],
        },
        {
          label: 'Gunfire Reborn',
          autogenerate: { directory: 'games/gunfire-reborn' },
        },
        {
          label: 'Wiki Setup & Guides',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Sample Game',
          autogenerate: { directory: 'games/sample-game' },
        },
      ],
    }),
  ],
});
