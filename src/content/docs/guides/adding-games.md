---
title: Adding Games & Pages
description: How to add new games and articles to this multi-game Starlight wiki.
---

## Add a New Game Section

1. Create a folder under `src/content/docs/games/<game-slug>/` and add `.md` or `.mdx` pages inside it.
2. Add an entry to the `sidebar` array in `astro.config.mjs`:
   ```js
   {
     label: 'Your Game Name',
     autogenerate: { directory: 'games/your-game-slug' },
   }
   ```
3. Commit your changes—GitHub Actions rebuilds the site and updates full-text search automatically.
