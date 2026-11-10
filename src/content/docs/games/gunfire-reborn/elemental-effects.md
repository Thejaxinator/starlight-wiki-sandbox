---
title: Elemental & Fusion Effects
description: Reference for Burning, Shock, Decay, and the three elemental fusion reactions.
sidebar:
  order: 5
---

Inflicting elemental damage has a per-hit chance to apply a 5-second status effect. Applying a **second** distinct status while another is already active triggers a **Fusion Effect** without consuming the underlying statuses.

## Base Elemental Effects

| Element | Status | Vs. Red HP | Vs. Yellow Armor | Vs. Blue Shield | Status Effect (5s) |
| :--- | :--- | ---: | ---: | ---: | :--- |
| **Fire** | **Burning** | +50% | -25% | -25% | Deals 20% of triggering hit's DMG per second. |
| **Corrosion** | **Decay** | -25% | +50% | -25% | Slows target Movement Speed by -50%. |
| **Lightning** | **Shock** | -25% | -25% | +50% | Target takes +10% damage from all hits. |

## Elemental Fusion Reactions

| Combination | Fusion | Effect & Scaling |
| :--- | :--- | :--- |
| **Burning + Decay** | **Combustion** | Instant explosion dealing **+200% hit DMG** to the primary target and **100% hit DMG** in a 5m AoE (0.12s per-enemy cooldown) with stagger. Counts as Fire/Corrosion (+50% vs HP/Armor, -25% vs Shield). |
| **Burning + Shock** | **Manipulation** | Confuses normal enemies for 5s so they attack nearby enemies (or stop attacking if alone). **Elites and Bosses are immune.** |
| **Shock + Decay** | **Miasma** | Deals **True DMG** every second for 5s based on max HP (`9%` normal / `0.75%` elite / `0.3%` boss in solo; divided by player count in co-op). Stacks up to 9 times and deals **2x damage** against Shields and Armor. |

## High-Impact Synergies

- **Element Share (`✦ Gemini`):** Shares elemental type and applies the higher status chance when combining two elemental weapons—the fastest way to self-trigger Combustion or Miasma on every shot.
- **Painkiller (Spiritual Blessing):** Inflicting *any* single elemental status on an enemy immediately applies all three (Burning + Shock + Decay), triggering Combustion, Manipulation, and Miasma simultaneously.

*Adapted and cleaned from [Gunfire Reborn Wiki — Elemental Effects](https://gunfirereborn.fandom.com/wiki/Elemental_Effects) under CC BY-SA.*
