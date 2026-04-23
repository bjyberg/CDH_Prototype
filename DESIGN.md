# Design System: The Precision Archive
**Source:** Stitch project "Climate Data Hub" (`projects/15906071269110410090`)  
**Theme:** The Architectural Lens — editorial authority meets precision instrument

---

## Color Palette

### Key Brand Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#003336` | Primary actions, nav brand, active links |
| `primary_container` | `#004b50` | CTA gradients, hover states |
| `secondary` | `#436465` | Secondary actions, muted UI |
| `secondary_container` | `#c3e6e7` | Secondary buttons, soft backgrounds |
| `tertiary` | `#003608` | Positive data trends |
| `tertiary_container` | `#004f11` | Positive callout backgrounds |

### Surface Hierarchy (use instead of borders)
| Token | Hex | Level |
|-------|-----|-------|
| `surface` / `background` | `#f8f9fa` | Level 0 — page background |
| `surface_container_low` | `#f3f4f5` | Level 1 — content cards / grouping blocks |
| `surface_container` | `#edeeef` | Level 1.5 — mid containers |
| `surface_container_high` | `#e7e8e9` | Level 2 — input fills |
| `surface_container_highest` | `#e1e3e4` | Level 2 — nav drawers, sidebars |
| `surface_container_lowest` | `#ffffff` | Level 2 — inner nested data / white cards |
| `surface_dim` | `#d9dadb` | Subtle dimming overlay |

### Text Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `on_background` | `#191c1d` | Primary body text (never pure black) |
| `on_surface` | `#191c1d` | Surface-placed text |
| `on_surface_variant` | `#404849` | Secondary/muted text |
| `on_primary` | `#ffffff` | Text on primary buttons |
| `on_secondary_container` | `#476869` | Text on secondary buttons |
| `on_tertiary_container` | `#72c26e` | Text on tertiary/positive callouts |

### Outline & Borders
| Token | Hex | Usage |
|-------|-----|-------|
| `outline` | `#707979` | Visible borders (use sparingly) |
| `outline_variant` | `#bfc8c9` | Ghost borders at 15% opacity only |

### Semantic / State Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `error` | `#ba1a1a` | Error states |
| `error_container` | `#ffdad6` | Critical warning callout backgrounds |
| `on_error` | `#ffffff` | Text on error |
| `on_error_container` | `#93000a` | Text on error containers |

### Inverse (Dark surface overlays)
| Token | Hex |
|-------|-----|
| `inverse_surface` | `#2e3132` |
| `inverse_on_surface` | `#f0f1f2` |
| `inverse_primary` | `#96d1d6` |

---

## Typography

| Role | Font | Notes |
|------|------|-------|
| Display / Headline | **Manrope** | Geometric, authoritative — use for `h1`–`h3`, data findings |
| Body / UI | **Inter** | High x-height, legible at small sizes — use for `p`, labels, tables |

### Rules
- Section overlines: `Inter` uppercase, `label-md` size, `primary` (`#003336`) color
- Never use pure black — always `on_background` (`#191c1d`)
- Let display-scale typography (`display-lg`) replace hero images

---

## Spacing & Shape

| Property | Value |
|----------|-------|
| Spacing scale | `3` (~0.75rem base unit) |
| Section gaps | `16` units (5.5rem) between major sections |
| Border radius | `ROUND_FOUR` — `0.375rem` (6px); never pill/full for primary actions |
| Max roundness | `sm`–`md` range only |

---

## Elevation & Depth

**Primary rule: no shadow for separation — use background color tier shifts instead.**

| Situation | Solution |
|-----------|----------|
| Two similar containers | Shift one to next surface tier (e.g., `surface` → `surface_container_low`) |
| Floating element (modal, dropdown) | `0px 12px 32px rgba(25, 28, 29, 0.06)` — diffused, `on_surface`-tinted shadow |
| Container needing subtle edge | Ghost border: `outline_variant` (#bfc8c9) at **15% opacity** |
| Navigation overlay / modal backdrop | Glassmorphism: `surface` at 80% opacity + `backdrop-filter: blur(20px)` |

---

## Component Rules

### Buttons
| Type | Background | Text | Radius |
|------|-----------|------|--------|
| Primary | `#003336` (or gradient `#003336` → `#004b50` at 135°) | `#ffffff` | `0.375rem` |
| Secondary | `#c3e6e7` | `#476869` | `0.375rem` |

### Inputs
- Fill: `surface_container_high` (`#e7e8e9`) OR transparent with bottom-only ghost border
- Focus: bottom border transitions to `primary` (`#003336`), 2px weight — no glow effects

### Cards / Lists
- **No divider lines** — use spacing (`3`–`4` units) to separate rows
- Alternating rows: `surface` / `surface_container_low` for dense data tables
- Cards: `surface_container_low` on `surface` background — no borders

### Data Callouts
| Type | Background token | Hex |
|------|-----------------|-----|
| Positive trend | `tertiary_container` | `#004f11` |
| Critical warning | `error_container` | `#ffdad6` |

### CTA Gradient (The Data Pulse)
```css
background: linear-gradient(135deg, #003336, #004b50);
```

---

## Key Do's and Don'ts

| Do | Don't |
|----|-------|
| Use tonal surface shifts for depth | Use 1px solid borders to separate sections |
| Use intentional asymmetry — break the grid with data visualizations | Use full/pill border radius on primary buttons |
| Large section gaps (5.5rem) to signal context change | Use shadows to separate similar-background elements |
| Manrope for all display/headline text | Use pure black (`#000000`) for text |
| Ghost borders at 15% opacity when a boundary is truly needed | Use "glow" effects on focus states |
