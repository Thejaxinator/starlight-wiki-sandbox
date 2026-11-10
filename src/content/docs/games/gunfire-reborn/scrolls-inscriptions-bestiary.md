---
title: Scrolls, Gemini Inscriptions, Bestiary & Damage Math
description: Season 8 Occult Scrolls, Craftsman Gemini rules, 2025–2026 Enemies & Bosses, and the 6-stage Gunfire Reborn damage formula.
---

> **Interactive Calculators & Filters:** Launch the standalone **[Multi-Design Interactive Codex](/starlight-wiki-sandbox/codex.html)** for live weapon presets, Lucky Shot tier splits, and Bestiary filters.

## 6-Stage Multiplicative Damage Formula

Per the verified [Damage](https://gunfirereborn.fandom.com/wiki/Damage) and [Damage Modifiers](https://gunfirereborn.fandom.com/wiki/Damage_Modifiers) mechanics:

```text
Final Hit = Base_DMG * (1 + 0.15 * Weapon_Level)
          * (1 + Weapon_DMG% + Skill_DMG% + Elemental_DMG%)
          * CritX_Multiplier
          * Lucky_Shot_Tier_Multiplier
          * Element_vs_Defense_Multiplier
          * Π(1 + Total_DMG_Bonus_i) * (1 + Enemy_DMG_Taken%)
```

- **Lucky Shot Tiers ([Lucky Shot](https://gunfirereborn.fandom.com/wiki/Lucky_Shot)):** `1–100%` rolls **2x** (Orange); `101–200%` guarantees **2x** with remainder rolling **3x** (Purple); `201–300%+` guarantees **3x** with remainder rolling **4x+** (Red).
- **Element vs. Defense ([Elemental Effects](https://gunfirereborn.fandom.com/wiki/Elemental_Effects)):** Fire deals **150%** vs Red HP (`75%` vs Shield/Armor); Lightning deals **150%** vs Blue Shield; Corrosion deals **150%** vs Yellow Armor; Normal deals `75%` vs Yellow Armor.

## Gemini Inscriptions (`✦`) & Craftsman Rules

Natural Gemini drops start at **Weapon Level +5** ([Craftsman](https://gunfirereborn.fandom.com/wiki/Craftsman)). With *Legendary Craftsman*, Etching is **100% guaranteed to roll a Gemini** if the weapon has **4 inscriptions** OR is **Level +5 or higher**.

| Gemini | Category | Formula / Scaling | Build Synergy |
| :--- | :--- | :--- | :--- |
| **✦ CritX Share** | Crit Scaling | `Combined CritX = CritX1 + CritX2 - 2.0x (-50% Stability)` | Shares permanent CritX (base + permanent inscriptions like +1.2x CritX or Hawkeye Sight) across both guns. Pair Strike Wing (5.0x) or Lightning Ksana (4.5x) with a fast SMG/Rifle. |
| **✦ Element Share** | Fusion Engine | `Applies max(Elem1, Elem2) defense bonus & rolls BOTH status chances` | Every shot rolls both weapons' Elemental Effect Chances independently—pair Fire + Corrosion for instant +200% Combustion AoE, or Lightning + Corrosion for 9-stack Miasma True DMG. |
| **✦ Spores** | Pellet + RoF | `At 30 Spores: ((DMG1*Proj1 + DMG2*Proj2) / (Proj1 + Proj2)) * 20` | Each hit plants (on-hit Projectiles + offhand Projectiles) Spores. Pair a high-pellet Shotgun (Argus 13x / Wild Hunt 12x) with a 15–24 RoF Injector/SMG. |
| **✦ Magazine Share** | Sustained DPS | `Mag = Mag1 + Mag2; stacks up to Shared Mag at +0.75% Weapon DMG/stack` | Grants 10 stacks/s firing + 5 stacks/hit (10s duration). Pair Big Hippo or Star Devourer with 1-shot Launchers to remove reloads and gain +100%+ Weapon DMG. |
| **✦ One-Shot Magazine** | Burst Reload | `Mag fixed at 1; Reload stacks +50% Total Weapon DMG up to +150%` | Higher-DMG gun gets -50% Reload Time; lower-DMG gun gets +70% Lucky Shot Chance. Multiplicative +150% Total DMG on Scorching Rounds, Argus, or Hell. |
| **✦ Weapon Skill Share** | Alt-Fire / Staves | `Cap = (Cap1 + Cap2)/2; +6% Final Weapon DMG per 5% energy spent (max +150%)` | Added Sept 2024: averages Weapon Skill energy caps and grants up to +150% Final Weapon DMG for 15s—core on Starfly, Phoenix Roar, Crane Chant, and Tempest. |
| **✦ Multi-Explosion** | Launcher AoE | `Bonus Explosions = floor(AoE_offhand / AoE_current_scaled)` | Shrinks current weapon's AoE as magazine empties (min 0.8m) to multiply explosion hits per shot based on offhand explosion radius. |

## Occult Scrolls Reference (Season 8 *Myriad Souls* & Meta Staples)

| Scroll | Rarity | Base Effect | Reincarnation Enhanced Effect |
| :--- | :--- | :--- | :--- |
| **Wondrous Chest** *(S8 New)* | Legendary | Discard to destroy and choose 2 of 6 random Occult Scrolls (buffed Jul 30, 2026). | Discard to destroy and choose 2 of 10 random Occult Scrolls. |
| **Lucky Find** *(S8 New)* | Legendary | Undiscardable: Raises Rare/Legendary scroll odds at Peddlers; Peddler prices +25%. | Significantly raises Rare/Legendary scroll odds at Peddlers (+25% price remains). |
| **Exquisite Chest** *(S8 New)* | Rare | Added Jul 30, 2026: Discard to destroy and choose 1 of 4 random Occult Scrolls. | Discard to destroy and choose 1 of 8 random Occult Scrolls. |
| **Element Expert** *(S8 New)* | Rare | Inflicting an Elemental Effect grants +3% Elemental DMG for 5s (max 15 stacks per element). | Same +3%/stack (max 15/element); each max-stacked element multiplies total bonus by +33%. |
| **Shadow Step** *(S8 New)* | Rare | +50% Move Speed when moving toward your fastest teammate. | +60% Move Speed toward fastest ally + +2% per meter of distance (up to +100%). |
| **Spark Touch** *(S8 New)* | Rare | Undiscardable: Non-Goblet chests transform into Mystic Chests (destroys after 3). | Transforms 3 chests into Mystic Chests with +1 free refresh each. |
| **Reforge** *(S8 New)* | Rare | Undiscardable: Reset Occult Scroll Chest reward options 1 time. | Reset Occult Scroll Chest reward options 2 times. |
| **Sandplate** *(S8 New)* | Normal | Gain 2 stacks of Lightless Shield after switching stages (each negates 1 hit). | Gain 4 stacks of Lightless Shield after switching stages. |
| **Fortune's Favor** *(S8 New)* | Normal | Undiscardable: Grants 1 Golden Goblet refresh per Act (stores up to 2). | Grants 2 Golden Goblet refreshes per Act (stores up to 4). |
| **Quickstep** *(S8 New)* | Normal | Gain 1 temporary Dash charge every 2s without taking DMG (max 1). | Gain 1 temporary Dash charge every 2s without taking DMG (max 2). |
| **Mystic Token** *(S8 New)* | Normal | Undiscardable: Next Boss scroll drop is guaranteed Enhanced, then destroys. | Every Boss scroll drop is guaranteed Enhanced (never self-destructs!). |
| **Rally Aura** *(S8 New)* | Normal | Every 6s grants allies in 15m +20% Move Speed & +20% DMG Resistance for 6s. | Pulses every 3s (+25% stronger when reapplied on active allies). |
| **Reversal** *(S8 New)* | Normal | While Dashing, -80% Final DMG taken and attackers are imprisoned for 2s. | While Dashing, -90% Final DMG taken, imprison for 2s, and attackers take +30% DMG. |
| **Spirit Feline** | Legendary | -100% DMG Resistance, but no single hit can exceed 14% of your Total Max HP + Shield/Armor. | Each hit taken cannot exceed 11% of Total Max HP + Shield/Armor. |
| **Hawkeye Sight** | Legendary | +2.0x CritX & 2x zoom, but -50% Weapon DMG on non-Crit hits. | +2.0x CritX for all weapons & 2x zoom (no non-Crit penalty!). |
| **Merciless Combo** | Legendary | +15% Weapon DMG for 2s per weapon hit (stacks up to 50x = +750%). | +15% Weapon DMG for 3s per hit (up to +750%). |
| **Advanced Depot** | Legendary | Fires directly from reserve ammo before magazine (keep Demonlore at 99 stacks!); 50% chance for 2x ammo cost. | Fires directly from reserves with NO double-ammo penalty. |
| **Lightless Shield** | Legendary | Gain 3 stacks every 30s (max 3); each stack completely negates 1 incoming hit. | Gain 4 stacks every 30s (max 4). |
| **Spirit Bible** | Legendary | +120% Skill DMG. | +120% Skill DMG plus +3% Skill DMG per Occult Scroll owned. |
| **Elemental Magazine** | Legendary | +50% multiplicative Total DMG on hits that inflict an Elemental Effect. | +50% Total DMG on hits that inflict an Elemental Effect, Crit Hit, OR Lucky Shot. |
| **Merciless Strike** | Legendary | +50% Lucky Shot Chance on Crits; -50% LSC on non-Crits. | +50% LSC on Crits (no penalty) and +0.5x CritX on Lucky Shots. |
| **Reasonable Luck** | Legendary | +80% Lucky Shot Chance, but caps total LSC at 150%. | +80% Lucky Shot Chance with NO cap! |
| **Penetration Bullet** | Legendary | Critical Hits deal 50% DMG directly to Red HP, bypassing Shield/Armor. | Critical Hits deal 100% DMG directly to Red HP (deletes Armored monsters). |
| **Evil-Banishing Talisman** | Legendary | Immunity to all negative effects of Cursed Scrolls. | Immunity to Cursed Scrolls AND allows discarding Cursed Scrolls. |
| **Scroll Enhancer** | Legendary | Recycling a scroll enhances a random held scroll (chance to self-destruct scales down per unenhanced scroll). | Up to -100% self-destruct reduction with 10 unenhanced scrolls. |
| **Enhancement Lover** | Legendary | Unlimited Craftsman weapon upgrades (+130 Copper cumulative cost from 4th upgrade). | Unlimited upgrades (+100 Copper cumulative cost from 4th upgrade). |
| **Deadly Curse** | Legendary | +75% Weapon & Skill DMG; -75% Max HP. | +75% Weapon & Skill DMG; no Max HP cut (drains 2% HP/s above 25% HP). |
| **Paranormality** | Rare | Max HP fixed at 1; Max Shield/Armor is doubled. | Max Shield/Armor is doubled WITHOUT fixing Max HP to 1. |
| **Flesh and Bones** | Rare | Converts all Shield/Armor into HP and regenerates 4% Max HP/s. | Regenerates 4% Max HP/s (+4% regen rate per 1% missing HP). |
| **Deft Hands** | Rare | Killing an enemy or breaking an object makes shots cost 0 ammo for 2s. | Shots cost 0 ammo for 4s after any kill or breakable. |
| **Coin Shot** | Rare | Spend 2 Copper on hit for +30% Lucky Shot Chance (refunded on Lucky Shot). | +60% multiplicative Total Weapon DMG; Crit/Lucky/Status hits cost 0 Copper. |
| **Giant Slayer** | Rare | 10% chance on hit to deal 15% current enemy HP as True DMG (cap 2,000). | 10% chance to deal 15% enemy Max HP as True DMG (cap 5,000 x squad size). |
| **Lifesaver** | Rare | Lethal hit locks HP at 1 for 5s; a kill heals 50% HP & Shield/Armor (single use). | Reusable cheat-death every 120s. |
| **Glazed Sight** | Rare | +1.5x CritX (drops to +0.5x after 50 HP hits). | Up to +1.5x CritX scaling with current HP% — never permanently degrades. |
| **Divine Energy** | Rare | +5/10/15/20% Skill DMG per Normal/Rare/Exclusive/Gemini inscription on held gun. | +10/20/30/40% Skill DMG per inscription across BOTH equipped weapons. |
| **Flame / Lightning / Corrosion Shard** | Rare | +25% matching element DMG (+50% while self-afflicted) & immunity to that status's debuff. | Permanent +75% matching element DMG & status debuff immunity. |
| **Abundant Vitality** | Normal | +75% multiplicative Total Weapon DMG while Shield/Armor recharges + next shot when full. | Same +75% Total Weapon DMG AND Shield recharge cannot be interrupted. |
| **Brutal Gloves** | Normal | +35% Weapon/Skill DMG on non-Crit hits. | +50% Weapon & Skill DMG on ALL hits (including Crits!). |
| **Double Exhilaration** | Normal | Doubles Secondary Skill capacity. | Doubles capacity AND 50% chance to consume 0 charges. |
| **Evil-Devouring Sword** | Normal | +20% Weapon & Skill DMG per Cursed Scroll owned. | +40% Weapon & Skill DMG + +20% Lucky Shot Chance per Cursed Scroll owned. |
| **Foundry Blessing** | Normal | Foundry executes normal enemies or deals 8%/4% Max HP True DMG to Elites/Bosses (5s CD). | Stores up to 3 True DMG / Execute charges. |
| **Broken Gun** | Cursed | 15% chance on hit to deal only 1 True DMG. | Cursed Scrolls cannot be Enhanced (negate via Evil-Banishing Talisman or Curse Away). |
| **Cateye Sight** | Cursed | -1.0x Weapon CritX. | Cursed Scroll — reduce penalty or clear via Curse Away / Pain for Gain. |
| **Elemental Curse** | Cursed | Exponentially reduces weapon Elemental Effect Chance. | Cursed Scroll — bypassed by guaranteed status skills like Smoke Grenade. |
| **Arms Trafficker** | Cursed | Craftsman weapon upgrades cost a flat 1,000 Copper. | Cursed Scroll — pair with Premium Membership or Evil-Banishing Talisman. |
| **Struggle for Independence** | Cursed | Co-op: -15% Final DMG when no teammate is within 15m. | Cursed Scroll — stay within 15m of squadmates. |

## Bosses & 2025–2026 Realm Bestiary (*Twilight Grove*, *Silent Crypt*, *Crystal Vale*)

| Enemy / Boss | Realm | Tier | Bars | Counter | Mechanics & Unlocks |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **[Lu Wu](https://gunfirereborn.fandom.com/wiki/Lu_Wu)** | Longling Tomb | Boss | Health + Shield | Lightning -> Fire | 80k HP / 8k Shield (Normal). Leaps to pillars to recharge Shield while summoning Beetles/Bombers (gains heavy DR on R9). *(Unlocks: Unlocks Golem (5 kills), Illusion (1), Phantom Skin (3 Elite+))* |
| **[Golem](https://gunfirereborn.fandom.com/wiki/Golem)** | Longling Tomb | Boss | Health | Fire | 80k HP stationary construct; aim at glowing chest core between Arm Slams, sweeping Lasers, and homing Rocks. *(Unlocks: Foundry Blessing & Energy Storage (1), Icy Spear (2), It Takes Two (3 Elite+))* |
| **[Ichthyosaurus Offspring](https://gunfirereborn.fandom.com/wiki/Ichthyosaurus_Offspring)** | Anxi Desert & Beiting | Boss | Health + Armor | Corrosion -> Fire | 131.3k HP + 131.3k Armor. Burrows to summon adds, sweeps Fire beam, and fires jumpable tail shockwaves. *(Unlocks: Unlocks Wind God (5), Justice (1), Lightless Shield (2 Elite+), Merciless Strike (3 Elite+))* |
| **[Wind God (Aeolus)](https://gunfirereborn.fandom.com/wiki/Wind_God)** | Anxi Desert & Beiting | Boss | Health | Fire | 245.2k HP aerial boss; lure his invulnerable Sandstorm phase into Reverse Vortex traps on the arena floor to break immunity. *(Unlocks: Reasonable Exclusive (1 Elite+), Scroll Enhancer (2 Elite+))* |
| **[Yoruhime-Maru](https://gunfirereborn.fandom.com/wiki/Yoruhime-Maru)** | Duo Fjord | Boss | Health | Fire | 320k HP dreadnought warship. Invulnerable Water Shields at 75/50/25% HP require killing Launcher Octopuses and dropping shells. *(Unlocks: Unlocks Abyssal Serpent (3) & Hyperborean Jokul (1); Airbag (3 Elite+))* |
| **[Abyssal Serpent](https://gunfirereborn.fandom.com/wiki/Abyssal_Serpent)** | Duo Fjord | Boss | Health | Fire (Aim Weak Spots!) | 640k shared HP across 4 serpents taking -95% body DMG—must hit eyes or glowing golden scales. *(Unlocks: Break the Ice (2 Elite+), Sucker Punch (3))* |
| **[Pole Monarch](https://gunfirereborn.fandom.com/wiki/Pole_Monarch)** | Hyperborean Jokul | Boss | Health + Shield | Lightning / Fire | 1.44M HP + 1.04M Phase 2 Shield. Break Aura Jars at 75%/40% HP; at 5% HP enters 10s infinite-ammo DPS check before enraged Phase 3. *(Unlocks: Unlocks Gluttony in Chaos Realm (3 kills))* |
| **[Gluttony](https://gunfirereborn.fandom.com/wiki/Gluttony)** | Chaos Realm | Boss | Health + Shield | Fire | 1.8M HP (19.2M in Spiritual Assault). Hide behind rock pillars at 40% HP to block his 5%-healing Devour suction blast. *(Unlocks: Exclusive Avatars & Achievements)* |
| **[Season 9 Mystery Boss](https://steamcommunity.com/app/1217060/announcements/)** | Lunar Melody / S9 Map | Boss | TBA (Dec 2026) | TBA | Confirmed in Tavern Chat #024 (Nov 6, 2026) to launch free alongside a brand-new map and Season 9 gameplay. *(Unlocks: Free Season 9 Boss launching alongside Lunar Melody (Dec 2026))* |
| **[Elite Bird Knight](https://store.steampowered.com/news/posts/?feed=steam_community_announcements&appids=1217060&appgroupname=Gunfire+Reborn&enddate=1784631176)** | Crystal Vale (S8) | Elite | Health + Armor | Corrosion / Fire | Season 8 Act 4 Elite: Yellow-Brow Gunner mounted on a snowland bird; slaying the rider sends the bird into a frenzy. *(Unlocks: Crystal Vale Vault & Challenge drops)* |
| **[Yellow-Brow Gunner](https://store.steampowered.com/news/posts/?feed=steam_community_announcements&appids=1217060&appgroupname=Gunfire+Reborn&enddate=1784631176)** | Crystal Vale (S8) | Normal | Health | Fire | Season 8 Act 4 heavy bombardier firing wide-area explosive shells. *(Unlocks: Season 8 Myriad Souls drops)* |
| **[Bird Knight](https://store.steampowered.com/news/posts/?feed=steam_community_announcements&appids=1217060&appgroupname=Gunfire+Reborn&enddate=1784631176)** | Crystal Vale (S8) | Normal | Health | Fire | Season 8 dual-unit aerial bombardment pair; surviving partner fights on when one falls. *(Unlocks: None)* |
| **[Sun-Eclipse Ship](https://store.steampowered.com/news/posts/?feed=steam_community_announcements&appids=1217060&appgroupname=Gunfire+Reborn&enddate=1784631176)** | Crystal Vale (S8) | Normal | Health + Shield | Lightning | Season 8 airborne warship deploying and enhancing monsters mid-fight while raining aerial fire. *(Unlocks: None)* |
| **[Silverhook Ape](https://store.steampowered.com/news/posts/?feed=steam_community_announcements&appids=1217060&appgroupname=Gunfire+Reborn&enddate=1784631176)** | Crystal Vale (S8) | Normal | Health | Fire | Season 8 agile snowland macaque using evasive acrobatics and martial strikes. *(Unlocks: None)* |
| **[Elite Shadowfire Swordguard](https://steamdb.info/patchnotes/21791900/)** | Silent Crypt (S7) | Elite | Health + Armor | Corrosion | Season 7 Act 1 Elite: Flame-corrupted greatshield and greatsword juggernaut. *(Unlocks: Silent Crypt Vault rewards)* |
| **[Shadowfire Swordguard](https://steamdb.info/patchnotes/21791900/)** | Silent Crypt (S7) | Normal | Health + Armor | Corrosion | Season 7 Act 1 armored guard smashing cover with a greatshield before lethal sword cleaves. *(Unlocks: Purgator rifle (5 Critical Hit kills))* |
| **[Pikeman](https://steamdb.info/patchnotes/21791900/)** | Silent Crypt (S7) | Normal | Health + Armor | Corrosion | Season 7 Act 1 terracotta warrior executing rapid, deceptive polearm combos. *(Unlocks: Cloud Edge melee weapon (5 kills within 5m))* |
| **[Saltpeter Bat](https://steamdb.info/patchnotes/21791900/)** | Silent Crypt (S7) | Normal | Health | Fire | Season 7 Act 1 mechanical dungeon bat diving into suicide saltpeter explosions. *(Unlocks: None)* |
| **[Elite Crab Vanguard](https://steamdb.info/patchnotes/20506329/)** | Twilight Grove (S6) | Elite | Health + Armor | Corrosion | Season 6 Act 3 Elite: Fire-bloodline twin-hammer bruiser mixing heavy slams and rapid combos. *(Unlocks: Twilight Grove Vault drops)* |
| **[Hermit Crab](https://steamdb.info/patchnotes/20506329/)** | Twilight Grove (S6) | Normal | Health + Armor | Corrosion | Season 6 Act 3 conch-sheltered crab; also ambushes players who smash stage Conch Shells. *(Unlocks: None)* |
| **[Void Monk](https://steamdb.info/patchnotes/20506329/)** | Twilight Grove (S6) | Normal | Health | Fire | Season 6 Act 3 caster transforming plants into obstructing thorn walls. *(Unlocks: None)* |
| **[Wavefin](https://steamdb.info/patchnotes/20506329/)** | Twilight Grove (S6) | Normal | Health | Fire | Season 6 Act 3 aquatic striker executing sudden underwater ambushes. *(Unlocks: None)* |
| **[Crab Vanguard](https://steamdb.info/patchnotes/20506329/)** | Twilight Grove (S6) | Normal | Health + Armor | Corrosion | Season 6 Act 3 twin-hammer Abyssal Serpent frontline shock trooper. *(Unlocks: None)* |
| **[Shellazer](https://steamdb.info/patchnotes/20506329/)** | Twilight Grove (S6) | Normal | Health + Armor | Corrosion | Season 6 Act 3 deep-sea giant turtle firing continuous shell-mounted laser beams. *(Unlocks: None)* |
| **[Venomous Catfish](https://steamdb.info/patchnotes/20506329/)** | Twilight Grove (S6) | Normal | Health + Shield | Lightning | Season 6 Act 3 ninja with a Corrosion Jellyfish Shield that erupts Toxic Smog when shattered. *(Unlocks: None)* |
| **[Baboerben](https://steamdb.info/patchnotes/20506329/)** | Twilight Grove (S6) | Normal | Health + Shield | Lightning | Season 6 Act 3 Fire-arrow marksman and sworn brother of Catfish Man. *(Unlocks: None)* |
*Baseline text adapted from [Gunfire Reborn Wiki](https://gunfirereborn.fandom.com/wiki/Occult_Scrolls) under CC BY-SA and updated through [Season 8 Steam Patch Notes](https://steamdb.info/patchnotes/24467874/).*
