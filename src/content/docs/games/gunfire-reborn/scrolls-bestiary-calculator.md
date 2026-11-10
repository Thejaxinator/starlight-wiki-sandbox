---
title: Scrolls, Gemini, Bestiary & Damage Math
description: Season 8 Occult Scrolls, Gemini Inscriptions, 2025–2026 Realm Bestiary, and the 6-stage damage formula.
---

> **Interactive Calculator & Filters:** Launch the **[Standalone Multi-Design Codex](/starlight-wiki-sandbox/codex/)** for interactive 77-weapon presets, CritX Share math, and Realm Bestiary filters.

## 6-Stage Multiplicative Damage Formula

```text
Final Hit = Base_DMG * (1 + 0.15 * Weapon_Level)
          * (1 + Weapon_DMG% + Skill_DMG% + Elemental_DMG%)
          * Active_CritX * Lucky_Shot_Tier * Element_vs_Defense
          * Π(1 + Total_DMG_Bonus_i) * (1 + Enemy_DMG_Taken%)
```

- **Lucky Shot Tiers:** `1–100%` = **2x** (Orange); `101–200%` = **2x** guaranteed + remainder for **3x** (Purple); `201–300%+` = **3x** guaranteed + remainder for **4x+** (Red).
- **Guaranteed Gemini Etching:** With *Legendary Craftsman*, Etching is **100% guaranteed to add a `✦` Gemini** if the weapon has **4 inscriptions** OR is **Level +5 or higher**.

## All 7 Gemini Inscriptions (`✦`)

| Gemini | Formula | Build Synergy |
| :--- | :--- | :--- |
| **✦ CritX Share** | `CritX1 + CritX2 - 2.0x (-50% Stability)` | Pair Strike Wing (5.0x) or Lightning Ksana (4.5x) with a high-RoF SMG or Rifle. |
| **✦ Element Share** | `max(Elem1, Elem2) bonus & rolls BOTH status chances` | Pair Fire + Corrosion for +200% Combustion AoE, or Lightning + Corrosion for 9-stack Miasma True DMG. |
| **✦ Spores** | `((DMG1*Proj1 + DMG2*Proj2) / (Proj1 + Proj2)) * 20` | Pair Argus (13x) or Wild Hunt (12x) with a 15–24 RoF Injector or SMG. |
| **✦ Magazine Share** | `Mag1 + Mag2; +0.75% Weapon DMG/stack` | Pair Big Hippo or Star Devourer with 1-shot Launchers to remove reloads. |
| **✦ One-Shot Magazine** | `Mag fixed at 1; Reload stacks up to +150% Total DMG` | Top burst multiplier for Scorching Rounds, Argus, and Hell. |
| **✦ Weapon Skill Share** | `Cap = (Cap1 + Cap2)/2; up to +150% Final Weapon DMG` | Core synergy for Starfly, Phoenix Roar, Crane Chant, and Tempest. |
| **✦ Multi-Explosion** | `floor(AoE_offhand / AoE_current_scaled)` | Multiplies explosion hits per shot as magazine empties. |

## Season 8 *Myriad Souls* New Occult Scrolls

| Scroll | Rarity | Base Effect | Enhanced Effect |
| :--- | :--- | :--- | :--- |
| **Wondrous Chest** | Legendary | Discard to choose 2 of 6 random Scrolls. | Choose 2 of 10 random Scrolls. |
| **Lucky Find** | Legendary | Raises Rare/Legendary odds at Peddlers (+25% price). | Significantly raises Rare/Legendary odds. |
| **Exquisite Chest** | Rare | Discard to choose 1 of 4 random Scrolls. | Choose 1 of 8 random Scrolls. |
| **Element Expert** | Rare | +3% Elemental DMG/stack for 5s (max 15/element). | Each max-stacked element multiplies bonus by +33%. |
| **Shadow Step** | Rare | +50% Move Speed toward fastest teammate. | +60% Move Speed + distance scaling up to +100%. |
| **Spark Touch** | Rare | Next 3 chests become Mystic Chests. | +1 free refresh per Mystic Chest. |
| **Reforge** | Rare | Reset Scroll Chest options 1 time. | Reset Scroll Chest options 2 times. |
| **Sandplate** | Normal | +2 Lightless Shield stacks per stage. | +4 Lightless Shield stacks per stage. |
| **Fortune's Favor** | Normal | +1 Golden Goblet refresh per Act (max 2). | +2 refreshes per Act (max 4). |
| **Quickstep** | Normal | +1 temporary Dash every 2s unhit (max 1). | Max 2 temporary Dash charges. |
| **Mystic Token** | Normal | Next Boss scroll drop is Enhanced, then destroys. | Every Boss scroll drop is Enhanced permanently. |
| **Rally Aura** | Normal | Allies in 15m gain +20% MS & +20% DR every 6s. | Pulses every 3s (+25% stronger on active allies). |
| **Reversal** | Normal | -80% Final DMG while Dashing; imprisons attackers 2s. | -90% Final DMG, 2s imprison & +30% DMG taken. |

*Adapted from [Occult Scrolls](https://gunfirereborn.fandom.com/wiki/Occult_Scrolls) & [Gunfire Reborn Wiki](https://gunfirereborn.fandom.com/wiki/Gunfire_Reborn) under CC BY-SA and updated via [Steam Announcements](https://steamcommunity.com/app/1217060/announcements/).*
