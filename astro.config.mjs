import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');

export default defineConfig({
  site: owner ? `https://${owner.toLowerCase()}.github.io` : undefined,
  base: repo ? `/${repo}` : undefined,
  integrations: [
    starlight({
      title: 'Personal Game Wiki Sandbox',
      description: 'Multi-game ad-free reference powered by Astro Starlight.',
      head: [
        {
          tag: 'meta',
          attrs: { name: 'robots', content: 'noindex, nofollow' },
        },
      ],
      customCss: ['./src/styles/wiki.css'],
      sidebar: [
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
          collapsed: true,
          autogenerate: { directory: 'games/sample-game' },
        },
      ],
    }),
  ],
});
