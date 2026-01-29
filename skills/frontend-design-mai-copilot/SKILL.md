---
name: frontend-design-mai-copilot
description: Creates frontend components for MAI Copilot following Copilot design system patterns. Use when building React components, styling with Tailwind and implementing UI features.
metadata:
  author: yu.he@microsoft.com, Baljinder.Rayit@skype.net
  version: "3.0"
---

Build frontend components that match the Microsoft Copilot design system. This skill ensures consistent styling, proper theming, and adherence to established patterns using Copilot's semantic design tokens.

## Repository Detection

**IMPORTANT:** Before implementing any component, detect which repository you are working in and read the corresponding guidance:

- **If working in `studio` codebase** (Microsoft Copilot web client): Read `references/studio.md` for codebase-specific patterns, imports, and component examples.
- **For other codebases**: Use the general guidance in this file.

---

# Design System - Introduction

This design system provides a cohesive set of visual patterns, components, and utilities for building consistent user interfaces. It is built on top of **Tailwind CSS v3.4.1**, leveraging Tailwind's utility-first methodology while extending it with custom tokens and conventions tailored to our brand.

For Tailwind fundamentals, refer to the official documentation: [Tailwind CSS v3 Documentation](https://v3.tailwindcss.com/)

## Design Philosophy

Our system follows Tailwind best practices:

- **Utility-first**: Compose interfaces using small, single-purpose utility classes
- **Consistency over creativity**: Use design tokens rather than arbitrary values
- **Semantic abstraction**: Custom utilities abstract implementation details into meaningful names

The key extension we've made is a **two-layer color architecture**:

1. **Raw palette colors** — Fixed hex values organized by hue (e.g., `stone`, `caramel`, `cocoa`)
2. **Alias colors** — Semantic, theme-aware colors via CSS variables (e.g., `foreground`, `background`, `accent`)

This separation allows theming and ensures consistent color application across the system.

## Customization Areas

We've extended Tailwind in several key areas. Each has dedicated documentation:

### Colors

A two-layer color system with raw palettes and semantic alias colors that support theming. Alias colors like `foreground`, `background`, `accent`, `muted`, and `stroke` map to raw palettes based on the active theme, enabling consistent and maintainable color usage.

**Key concept**: Always use alias colors (e.g., `text-foreground-600`, `bg-background-150`) rather than raw palette colors.

See [Colors Documentation](colors.md) for the full color reference.

### Typography

A custom typography scale with variable font support. The primary typeface is **Ginto**, a variable font that requires special handling for weight variants. Instead of standard Tailwind weight utilities like `font-bold`, use our typography classes with built-in weight suffixes.

**Key concept**: Use `text-base-medium` or `text-lg-strong` instead of combining `text-base font-bold`.

See [Typography Documentation](typography.md) for the full type scale and usage patterns.

### Elevation

A shadow system that provides depth hierarchy through multiple shadow variants: generic shadows, highlighted shadows (with a top-edge shine), and tinted shadows (with accent color). These replace traditional borders for cards and elevated surfaces.

**Key concept**: Cards and elevated surfaces use shadows, not borders.

See [Elevation Documentation](elevation.md) for shadow tokens and patterns.

### Corners

An extended border-radius scale with custom values beyond Tailwind defaults, optimized for modern rounded interfaces. The scale is designed to support **concentric corner nesting**. Stepping down one level for each nested element creates visually harmonious layered compositions.

**Key concept**: Use scale tokens (`rounded-xl`, `rounded-2xl`) not arbitrary values. Step down the scale for nested elements.

See [Corners Documentation](corners.md) for the full radius scale and nesting patterns.

## Quick Start

When building UI with this design system, follow these conventions:

| Pattern        | Use                   | Avoid                           |
| -------------- | --------------------- | ------------------------------- |
| Text color     | `text-foreground-600` | `text-gray-600` or raw palettes |
| Background     | `bg-background-150`   | `bg-stone-150`                  |
| Font weight    | `text-base-medium`    | `text-base font-bold`           |
| Card elevation | `shadow-sm`           | `border border-gray-200`        |
| Accent color   | `bg-accent-500`       | `bg-caramel-500`                |

Common utility patterns:

- **Primary text**: `text-foreground-800`
- **Secondary text**: `text-foreground-600`
- **Muted text**: `text-foreground-450`
- **Page background**: `bg-background-150`
- **Card surface**: `bg-background-100`
- **Default border** (when needed): `border-stroke-300`

## LLM Coding Agent Guidelines

When generating or modifying code in this codebase, follow these rules:

1. **Always use alias colors** — Never use raw palette colors like `stone-500` or `caramel-400`. Always use semantic aliases: `foreground`, `background`, `accent`, `muted`, `stroke`.

2. **Typography weight suffixes** — Do not use `font-bold`, `font-semibold`, or other standard Tailwind weight utilities. Instead, use our typography classes with weight suffixes: `text-sm-medium`, `text-base-strong`, etc.

3. **Shadows over borders for cards** — Elevated surfaces should use shadow utilities (`shadow-xs`, `shadow-sm`, `shadow-md`) rather than borders.

4. **System colors require dark variants** — When using system colors (`system-green`, `system-red`, etc.), always provide explicit `dark:` variants as these don't auto-adjust.

5. **Static variants for fixed brightness** — Use `-static` color variants (e.g., `accent-static-500`) when you need colors that maintain brightness across themes.

6. **Reference documentation, not just code** — Existing components may not always follow best practices. Always validate against this documentation.

> **Warning**: Be wary of code smells. Some components may have been auto-generated without awareness of these patterns. Always validate against the documented conventions rather than blindly copying existing code.

---

## Related Files

- `frontend/src/components/DesignSystemDemo.tsx` - Live implementation examples of the design system



color.md

# Design System - Colors

This guide explains how to use colors in our design system. Following these patterns ensures your UI works correctly across light and dark themes.

## Quick Start

**Use alias colors, not raw palette colors.**

```tsx
// Good - uses alias colors
<div className="bg-background-150 text-foreground-800">Content</div>

// Avoid - raw palette colors won't adapt to theme changes
<div className="bg-stone-150 text-stone-800">Content</div>
```

---

## Architecture Overview

Our color system has two layers:

1. **Raw palette colors** (`stone`, `caramel`, `midnight`, `slate`, etc.) - Fixed hex values that never change
2. **Alias colors** (`foreground`, `background`, `accent`, `muted`, `stroke`) - CSS variables that reference the raw palette colors, but automatically adjust for light/dark themes

When you use alias colors, the system handles theme switching automatically. The scale inverts in dark mode (e.g., `foreground-100` maps to a light color in light mode but a dark color in dark mode).

---

## Alias Color Categories

| Category     | Purpose                                   | Common Usage                                                    |
| ------------ | ----------------------------------------- | --------------------------------------------------------------- |
| `foreground` | Text, icons and borders with neutral tint | `text-foreground-*`, `fill-foreground-*`, `border-foreground-*` |
| `background` | Surfaces and containers                   | `bg-background-*`                                               |
| `accent`     | Interactive elements, highlights          | `bg-accent-*`, `text-accent-*`                                  |
| `muted`      | Softer accents, secondary surfaces        | `bg-muted-*`                                                    |
| `stroke`     | Borders with accent tint                  | `border-stroke-*`                                               |

---

## Color Scale Reference

All alias colors use a scale from 100 to 900. The scale represents **visual weight**, not literal lightness or darkness.

- In **light mode**, lower values (100-250) appear lighter, higher values (750-900) appear darker
- In **dark mode**, the scale inverts automatically. So `background-100` becomes dark, `foreground-800` becomes light

This means you can think of the scale as "how much presence does this color have?" Lower numbers = subtle/receding, higher numbers = prominent/forward. The theme system handles the actual color values.

| Scale Range | Visual Weight                                               |
| ----------- | ----------------------------------------------------------- |
| **100-200** | Subtle - backgrounds, surfaces, light fills                 |
| **250-450** | Medium-low - secondary backgrounds, borders, muted elements |
| **550-700** | Medium-high - secondary text, icons, medium emphasis        |
| **750-900** | Strong - primary text, headings, high emphasis              |

### Common Patterns

**Text:**

- Primary text: `text-foreground-800`
- Secondary text: `text-foreground-600`
- Muted/placeholder: `text-foreground-450`

**Backgrounds:**

- Page background: `bg-background-150` (light) / `dark:bg-background-100` (dark)
- Card/surface: One step _lighter_ than its parent (e.g., if parent is `bg-background-150`, use `bg-background-100` or `bg-white` for stronger contrast). In dark mode, cards should still be _brighter_ than their parent (e.g., if parent is `bg-background-100`, use `dark:bg-background-150` or `dark:bg-background-200` for stronger contrast).

**Borders:**

- Default border: `border-foreground-300` (light) / `dark:border-foreground-450` (dark)
- Subtle border: `border-foreground-250`
- Accent-tinted border: Use `border-stroke-*` when you want borders with a slight accent color

---

## Dark Mode Handling

### Automatic Adjustment

Alias colors automatically adjust for dark mode. In most cases, you don't need explicit `dark:` variants:

```tsx
// The alias color handles both themes automatically
<div className="bg-background-150 text-foreground-800">
  This works in both light and dark mode
</div>
```

### Fine-Tuning with dark: Prefix

Sometimes you may need to refine the scale values for optimal contrast in dark mode:

```tsx
// Adjusting for better dark mode contrast
<p className="text-foreground-550 dark:text-foreground-650">
  Secondary text with fine-tuned dark mode
</p>

<div className="border border-foreground-300 dark:border-foreground-450">
  Border with adjusted dark mode weight
</div>
```

**When to use `dark:` variants:**

- Fine-tuning contrast for readability & accessibility (WCAG contrast recommendations)
- Adjusting opacity values between themes
- When the automatic inversion doesn't provide ideal visual results

---

## System Colors (Status Indicators)

For success, error, warning, and info states, use system colors:

| Color          | Purpose                    |
| -------------- | -------------------------- |
| `system-green` | Success, positive states   |
| `system-red`   | Error, danger, destructive |

**Important:** System colors require explicit `dark:` variants:

```tsx
// Success badge
<span className="bg-system-green-200 text-system-green-550 dark:bg-system-green-750 dark:text-system-green-350">
  Success
</span>

// Error state
<span className="bg-system-red-200 text-system-red-550 dark:bg-system-red-650 dark:text-system-red-350">
  Error
</span>
```

---

## Static Variants

Each alias color has a `-static` variant (e.g., `accent-static`, `background-static`, `foreground-static`). These variants **lock the brightness/visual weight** regardless of the current theme. They don't invert when switching to dark mode.

For example, `background-static-100` will always be a _bright_ color in both light and dark mode. The actual hue adapts to the theme's palette, but the brightness stays consistent. This is useful when you need an element to maintain its visual weight across themes rather than inverting with everything else.

Think of it as: regular alias colors invert their brightness for theme switching, while `-static` variants keep their brightness locked.

**Use static variants when:**

- You need consistent brightness/visual weight across themes (rare)
- Building overlays or modals where the surface shouldn't invert
- Gradient backgrounds that should maintain their lightness relationship
- Elements that should "pop" the same way in both themes

**Warning:** When using static colors, you may still need to handle contrast manually:

```tsx
// Static color keeps brightness locked, but text may need adjustment for readability
<div className="bg-accent-static-200 text-foreground-static-800 dark:text-foreground-static-200">
  Fixed brightness background
</div>
```

---

## What to Avoid

### Raw Palette Colors

Avoid using raw palette colors directly:

```tsx
// Avoid these
<div className="bg-stone-200 text-stone-800">...</div>
<div className="bg-caramel-300 text-midnight-800">...</div>
<div className="bg-slate-150">...</div>
```

These colors don't respond to theme changes. If you use them, you must manually implement dark mode with explicit `dark:` variants for every usage.

### Hardcoded Values

Avoid hardcoded hex colors:

```tsx
// Avoid
<div className="bg-[#f8f4f1] text-[#333]">...</div>

// Prefer
<div className="bg-background-150 text-foreground-800">...</div>
```

### Using `black` and `white`

Avoid using solid `black` or `white` for text or backgrounds, prefer alias colors instead. However, `black` and `white` **with opacity** are useful for overlays, tints, and state effects.

**Important:** You'll typically need to invert these for dark mode. This inversion isn't always 1:1, so manual adjustments for contrast and visual effect may be required:

```tsx
// Solid black/white - avoid for text/backgrounds
<div className="bg-white text-black">...</div>  // Avoid

// With opacity - useful for tints and state effects (note the dark mode inversion)
<div className="bg-white/70 dark:bg-black/70">...</div>        // Surface tint
<div className="hover:bg-black/10 dark:hover:bg-white/10">...</div>  // Hover state
<div className="bg-black/50 dark:bg-black/70">...</div>        // Overlay (may need different opacity)
```

### Acceptable Exceptions

There are legitimate cases for raw colors or hardcoded values:

- **Charts and data visualization** - May need specific, consistent colors
- **Brand elements** - Logos, brand colors that must stay fixed
- **Gradients** - Complex gradients may need raw values
- **Third-party integrations** - When matching external requirements

When using exceptions, document why and consider if a static variant would work instead.

---

## Usage Examples

### Text

```tsx
// Primary text
className = "text-foreground-800";

// Secondary/supporting text
className = "text-foreground-600";

// Muted/placeholder text
className = "text-foreground-450";

// Accent-colored text (links, highlights)
className = "text-accent-550 dark:text-accent-850";
```

### Backgrounds

```tsx
// Base page/app background
className = "bg-background-150 dark:bg-background-100";

// Card/elevated surface (lighter than parent, brighter in dark mode)
className = "bg-background-100 dark:bg-background-150";
// Or for stronger contrast (note: solid white needs explicit dark mode handling):
className = "bg-white dark:bg-background-200";

// Interactive surface background
className = "bg-accent-200";

// Hover state background
className = "bg-accent-250";

// Softer/muted surface
className = "bg-muted-200";
```

### Borders

```tsx
// Standard border
className = "border border-foreground-300 dark:border-foreground-450";

// Subtle/light border
className = "border border-foreground-250";

// Accent-tinted border (when you want a colored tint)
className = "border border-stroke-300 dark:border-stroke-450";

// Accent border (focused, selected states)
className = "border border-accent-400";
```

### Icons and Fills

```tsx
// Primary icon color
className = "fill-foreground-800";

// Secondary/muted icon
className = "fill-foreground-600";

// Accent-colored icon
className = "fill-accent-550 dark:fill-accent-850";
```

### Status States

```tsx
// Success
className =
  "bg-system-green-200 text-system-green-550 dark:bg-system-green-750 dark:text-system-green-350";

// Error
className =
  "bg-system-red-200 text-system-red-550 dark:bg-system-red-650 dark:text-system-red-350";
```

---

## Quick Reference for AI Coding Agents

When generating or modifying UI code, follow these rules:

1. **Always use alias colors** - `foreground`, `background`, `accent`, `muted`, `stroke`
2. **Scale guidelines:**
   - Text: `foreground-800` for primary, `foreground-600` for secondary, `accent-550` for accent, branded, links & actions
   - Backgrounds: `background-100` to `background-200` for surfaces
   - Borders: `foreground-300` to `foreground-450` (or `stroke-*` for accent-tinted borders)
3. **Add `dark:` variants** only when fine-tuning contrast (not always required)
4. **System colors** (`system-green`, `system-red`, etc.) always need explicit `dark:` variants
5. **Never use** raw palette colors (`stone-*`, `caramel-*`, `midnight-*`) or solid `black`/`white` for text/backgrounds. Using `black`/`white` with opacity (e.g., `bg-white/70`, `hover:bg-black/10`) is fine for tints and overlays.
6. **Check existing components** in the codebase for established patterns, but be wary of code smells. Some components may have been auto-generated without awareness of these patterns. Watch for: hardcoded hex values, raw palette colors (`bg-gray-*`, `bg-slate-*`), or excessive use of solid `black`/`white`. If you see these, follow this guide instead.

---

## Related Files

- `tailwind.config.js` - Color definitions and Tailwind configuration
- `src/index.css` - CSS variable mappings for light/dark themes
- `frontend/src/components/DesignSystemDemo.tsx` - Live implementation examples



typography.md

# Design System - Typography

This guide explains how to use typography in our design system. Typography establishes hierarchy, readability, and visual rhythm. Use the scale and weight system consistently across all components.

## Quick Start

**Use typography tokens, not arbitrary values.**

```tsx
// Good - uses system typography tokens
<h1 className="text-2xl-medium">Page Title</h1>
<p className="text-base">Body text content...</p>

// Avoid - arbitrary font sizes
<h1 className="text-[28px] font-bold">Page Title</h1>
```

---

## Font Family

Our design system uses **Ginto** as the primary font, applied by default via `font-sans`. Ginto is a variable font with precise weight control.

---

## Typography Scale

| Class             | Font Size | Line Height |
| ----------------- | --------- | ----------- |
| `text-2xs`        | 10px      | 14px        |
| `text-xs`         | 12px      | 16px        |
| `text-sm`         | 14px      | 20px        |
| `text-base`       | 16px      | 26px        |
| `text-base-dense` | 16px      | 22px        |
| `text-md`         | 18px      | 26px        |
| `text-lg`         | 20px      | 26px        |
| `text-xl`         | 24px      | 32px        |
| `text-2xl`        | 28px      | 32px        |
| `text-3xl`        | 32px      | 40px        |
| `text-4xl`        | 38px      | 40px        |

---

## Weight System

Each typography size has three weight variants:

| Variant | Pattern              | Usage                      |
| ------- | -------------------- | -------------------------- |
| Regular | `text-{size}`        | Body text, descriptions    |
| Medium  | `text-{size}-medium` | Headings, labels, emphasis |
| Strong  | `text-{size}-strong` | Extra emphasis when needed |

**Examples:**

- `text-base`, `text-base-medium`, `text-base-strong`
- `text-xl`, `text-xl-medium`, `text-xl-strong`

---

## Important: Don't Use Tailwind Weight or Line Height Utilities

**Tailwind's built-in weight utilities (`font-bold`, `font-medium`, `font-semibold`, etc.) do NOT work with our typography system.**

These utilities set `font-weight` but don't update the variable font axis, so the visual weight won't change correctly. Always use the `-medium` and `-strong` suffixes instead.

```tsx
// Wrong - font-bold doesn't work with our variable font
<h1 className="text-2xl font-bold">Page Title</h1>

// Correct - use the -medium or -strong suffix
<h1 className="text-2xl-medium">Page Title</h1>
```

**Tailwind's line height utilities (`leading-tight`, `leading-relaxed`, `leading-6`, etc.) also do NOT work.**

Line heights are baked into each typography token (see the scale table above). Using `leading-*` utilities won't override these values. If you need different line heights, use the appropriate typography class. For example, `text-base-dense` provides a tighter line height than `text-base`.

```tsx
// Wrong - leading-tight won't change the line height
<p className="text-base leading-tight">Body text</p>

// Correct - use the appropriate typography token
<p className="text-base-dense">Body text with tighter line height</p>
```

---

## Usage Guidelines

| Use Case         | Recommended Classes                  |
| ---------------- | ------------------------------------ |
| Page titles      | `text-2xl-medium`, `text-3xl-medium` |
| Section headings | `text-xl-medium`, `text-lg-medium`   |
| Body text        | `text-base`, `text-sm`               |
| Labels           | `text-xs-medium`, `text-sm-medium`   |
| Captions         | `text-2xs`, `text-xs`                |

---

## Usage Examples

### Headings

```tsx
<h1 className="text-2xl-medium">Page Title</h1>
<h2 className="text-xl-medium">Section Heading</h2>
<h3 className="text-lg-medium">Subsection</h3>
```

### Body Text

```tsx
<p className="text-base">Primary body text with comfortable line height.</p>
<p className="text-sm">Secondary or supporting text.</p>
```

### Labels & Captions

```tsx
<label className="text-xs-medium">Field Label</label>
<span className="text-2xs">Caption or metadata</span>
```

### Dense Text

```tsx
// Use base-dense when you need tighter line height
<p className="text-base-dense">Compact text for space-constrained areas.</p>
```

---

## Quick Reference for AI Coding Agents

When generating or modifying UI code:

1. **Use `text-{size}`** for regular weight, **`text-{size}-medium`** for headings/labels, **`text-{size}-strong`** for extra emphasis
2. **NEVER use `font-bold`, `font-medium`, `font-semibold`** - these don't work with our variable font
3. **NEVER use `leading-*` utilities** - line heights are baked into the typography tokens
4. **Never use arbitrary font sizes** (`text-[14px]`) - stick to the scale
5. **Headings** use `-medium`, **body** uses regular, **labels** use `-medium`
6. **Weight is built into the typography utilities** - no separate weight classes needed

---

## Related Files

- `tailwind.config.js` - Font family definitions
- `tailwind/typography/tailwind.typography.plugin.ts` - Typography plugin
- `tailwind/typography/tailwind.typography.config.ts` - Scale configuration
- `docs/design/elevation.md` - Elevation system documentation
- `frontend/src/components/DesignSystemDemo.tsx` - Live implementation examples



elevation.md

# Design System - Elevation
> **Note:** These design docs are primarily written as guidance for AI coding agents. Humans are not expected to read or follow them during hackathons, though you're welcome to if you find them useful.
This guide explains how to use shadows and elevation in our design system. Elevation communicates depth, hierarchy, and focus. Shadows indicate how elements relate to each other in space and are never decorative.
## Quick Start
**Use shadow tokens, not arbitrary values.**
```tsx
// Good - uses system shadow tokens
<div className="bg-background-100 rounded-xl p-4 shadow-xs">Card</div>
// Avoid - arbitrary shadow values
<div className="bg-background-100 rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.1)]">Card</div>
```
---
## Elevation Model
Our elevation system follows these principles:
- **Fixed direction and angle** - All shadows share a consistent light source
- **Neutral shadow color** - Shadows use theme-aware neutral tones
- **No component-specific tuning** - Only the elevation level changes, not the shadow style
The Elevation Ladder defines a simple, linear model for expressing depth. Elevation increases in discrete, ordered steps. Every element in the system maps to one of these levels. No arbitrary or custom shadow offsets outside the tokens.
This guarantees consistent spatial behavior and prevents visual drift across components, themes, and platforms.
---
## Light & Dark Theme Behavior
In **light mode**, shadows communicate depth. The closer a surface is to the user, the lighter the surface and the bigger its shadow.
In **dark mode**, we communicate elevation with color changes instead of shadow intensity:
- Elevated surfaces become lighter/brighter
- Shadow direction and size remain consistent
- Think of light shining down. Elevated surfaces catch more light and appear brighter
---
## Shadow Variants
### Generic Shadows
Standard shadows for most use cases:
| Class         | Elevation | Usage                                                    |
| ------------- | --------- | -------------------------------------------------------- |
| `shadow-none` | At-rest   | Inputs, fields, elements with expectation of interaction |
| `shadow-xs`   | Subtle    | Cards, Image thumbnails, Icon wrappers                   |
| `shadow-sm`   | Light     | Buttons, Interactive elements, Panels, Toolbars          |
| `shadow-md`   | Floating  | Interactive hover states, Raised cards, Raised panels    |
| `shadow-lg`   | Elevated  | Dropdowns, Flyouts, Popovers, Notifications, Toasts      |
| `shadow-xl`   | Maximum   | Composer, Page-level modals, Raised toolbars             |
### Highlighted Shadows
These variants have a subtle shine at the top edge, simulating light reflecting from the top. Mostly used on interactive elements like buttons.
| Class                      | Elevation |
| -------------------------- | --------- |
| `shadow-with-highlight-xs` | Subtle    |
| `shadow-with-highlight-sm` | Light     |
| `shadow-with-highlight-md` | Floating  |
| `shadow-with-highlight-lg` | Elevated  |
| `shadow-with-highlight-xl` | Maximum   |
### Tinted Shadows
These variants have a subtle tint referencing the accent color. Currently only applies the tint in Light mode. Mostly used for Composer and UI within the Composer.
| Class              | Elevation |
| ------------------ | --------- |
| `shadow-tinted-xs` | Subtle    |
| `shadow-tinted-sm` | Light     |
| `shadow-tinted-md` | Floating  |
| `shadow-tinted-lg` | Elevated  |
| `shadow-tinted-xl` | Maximum   |
---
## Overriding Shadow Colors
It is **strongly encouraged** to use the shadows from the system. For scenarios where a different strength or color is required, use Tailwind's built-in shadow utilities with the `shadow-[color]/[alpha]` pattern:
```tsx
// Status-colored shadows
className = "shadow-lg shadow-system-green-550/20";
className = "shadow-lg shadow-accent-300/60";
// Light/dark adjusted shadows
className = "shadow-lg shadow-black/90"; // Dark mode
className = "shadow-lg shadow-white/3"; // Light mode glow
```
This keeps shadow direction and size consistent while allowing customization of the shadow color.
---
## Cards Don't Have Borders
**Important:** Cards in our system rely on elevation (shadow) and background contrast, not borders.
```tsx
// Correct - card with shadow, no border
<div className="bg-background-100 dark:bg-background-150 rounded-2xl p-6 shadow-xs">
  Card content
</div>
// Avoid - card with border
<div className="bg-background-100 border border-foreground-300 rounded-2xl p-6">
  Card content
</div>
```
Use `shadow-xs` for standard card elevation. For cards that need more prominence (hover states, selected states), elevate to `shadow-sm` or `shadow-md`.
---
## Usage Examples
### Cards
```tsx
// Standard card
<div className="bg-background-100 dark:bg-background-150 rounded-xl p-4 shadow-xs">
// Card with hover elevation
<div className="bg-background-100 rounded-xl p-4 shadow-xs hover:shadow-md transition-shadow">
```
### Buttons
```tsx
// Button with highlighted shadow
<button className="bg-accent-500 text-white rounded-lg px-4 py-2 shadow-with-highlight-sm">
  Primary Action
</button>
```
### Panels & Toolbars
```tsx
// Panel
<div className="bg-background-100 rounded-lg p-3 shadow-sm">
// Toolbar
<div className="bg-background-100 rounded-lg px-4 py-2 shadow-sm">
```
### Dropdowns & Popovers
```tsx
// Dropdown menu
<div className="bg-background-100 rounded-lg shadow-lg">
  <ul>...</ul>
</div>
// Popover
<div className="bg-background-100 rounded-xl p-4 shadow-lg">
```
### Modals
```tsx
// Modal
<div className="bg-background-100 dark:bg-background-150 rounded-2xl p-6 shadow-xl">
  Modal content
</div>
```
### Composer
```tsx
// Composer with tinted shadow
<div className="bg-background-100 rounded-2xl p-4 shadow-tinted-md">
  <textarea />
</div>
```
---
## Quick Reference for AI Coding Agents
When generating or modifying UI code:
1. **Cards** use `shadow-xs` - never borders
2. **Buttons/Interactive elements** use `shadow-sm` or `shadow-with-highlight-sm`
3. **Hover states** can elevate to `shadow-md`
4. **Dropdowns/Popovers/Toasts** use `shadow-lg`
5. **Modals** use `shadow-xl`
6. **Composer** uses `shadow-tinted-*` variants
7. **Never use** arbitrary shadow values - stick to the tokens
8. **Don't add borders** to cards - use shadow + background contrast instead
---
## Related Files
- `tailwind.config.js` - Shadow token definitions (boxShadow, dropShadow)
- `src/index.css` - Shadow CSS variable mappings
- `docs/design/colors.md` - Color system documentation
- `frontend/src/components/DesignSystemDemo.tsx` - Live implementation examples



corners.md

# Design System - Corners

> **Note:** These design docs are primarily written as guidance for AI coding agents. Humans are not expected to read or follow them during hackathons, though you're welcome to if you find them useful.

This guide explains how to use border-radius in our design system. Corners define shape language. They communicate softness, hierarchy, and component type. Our system extends Tailwind's default scale with additional values optimized for modern, rounded interfaces and supports **concentric corner nesting** for visually pleasing layered compositions.

## Quick Start

**Use system radius tokens, not arbitrary values.**

```tsx
// Good - uses system border-radius tokens
<div className="bg-background-100 rounded-3xl p-6 shadow-xs">Card</div>
<button className="rounded-xl px-4 py-2">Button</button>

// Avoid - arbitrary radius values break visual consistency
<div className="bg-background-100 rounded-[14px] p-6 shadow-xs">Card</div>
<button className="rounded-[9px] px-4 py-2">Button</button>
```

---

## Border Radius Scale

Our system includes Tailwind's default values plus custom extensions for larger radii:

| Class          | Value    | Pixels | Notes              |
| -------------- | -------- | ------ | ------------------ |
| `rounded-none` | 0        | 0px    | Tailwind Default   |
| `rounded-sm`   | 0.125rem | 2px    | Tailwind Default   |
| `rounded`      | 0.25rem  | 4px    | Tailwind Default   |
| `rounded-md`   | 0.375rem | 6px    | Tailwind Default   |
| `rounded-lg`   | 0.5rem   | 8px    | Tailwind Default   |
| `rounded-xl`   | 0.75rem  | 12px   | Tailwind Default   |
| `rounded-2xl`  | 1rem     | 16px   | Tailwind Default   |
| `rounded-3xl`  | 1.25rem  | 20px   | **Copilot Custom** |
| `rounded-4xl`  | 1.5rem   | 24px   | **Copilot Custom** |
| `rounded-5xl`  | 1.75rem  | 28px   | **Copilot Custom** |
| `rounded-6xl`  | 2rem     | 32px   | **Copilot Custom** |
| `rounded-7xl`  | 3rem     | 48px   | **Copilot Custom** |
| `rounded-8xl`  | 4rem     | 64px   | **Copilot Custom** |
| `rounded-full` | 9999px   | 9999px | Tailwind Default   |

---

## Concentric Corners

Concentric corners create visually harmonious nested elements by maintaining proportional rounding between parent and child. The principle: **when you add padding, step down the radius scale**.

### The Formula

```
Inner radius ≈ Outer radius - Padding
```

When the outer container has padding, the inner element should use a smaller radius to create a consistent visual "track width" between the corners.

### Visual Principle

Think of concentric corners like nested picture frames. Each inner frame maintains the same "mat width" around its edges. If the outer and inner elements use the same radius, the inner corners appear too tight relative to the outer corners.

### Step-Down Guide

For padding up to 16px (`p-4`), step down **one level** on the scale:

| Outer Radius         | → Inner Radius (with p-4 or less) |
| -------------------- | --------------------------------- |
| `rounded-8xl` (64px) | `rounded-7xl` (48px)              |
| `rounded-7xl` (48px) | `rounded-6xl` (32px)              |
| `rounded-6xl` (32px) | `rounded-5xl` (28px)              |
| `rounded-5xl` (28px) | `rounded-4xl` (24px)              |
| `rounded-4xl` (24px) | `rounded-3xl` (20px)              |
| `rounded-3xl` (20px) | `rounded-2xl` (16px)              |
| `rounded-2xl` (16px) | `rounded-xl` (12px)               |
| `rounded-xl` (12px)  | `rounded-lg` (8px)                |
| `rounded-lg` (8px)   | `rounded-md` (6px)                |

For larger padding (24px+), you may step down two levels.

### Practical Examples

**Card with inner content area:**

```tsx
// Good - concentric corners stepping down one level
<div className="bg-background-100 rounded-3xl p-4 shadow-xs">
  <div className="bg-background-200 rounded-2xl p-4">
    Inner content
  </div>
</div>

// Modal with multiple nested layers
<div className="bg-background-100 rounded-4xl p-4 shadow-xl">
  <div className="bg-background-150 rounded-3xl p-4">
    <div className="bg-background-200 rounded-2xl p-3">
      Deeply nested content
    </div>
  </div>
</div>
```

**Toolbar with buttons:**

```tsx
// Toolbar with internal button grouping
<div className="bg-background-200 rounded-xl p-2">
  <button className="rounded-lg px-3 py-1.5">Action</button>
</div>
```

---

## Component Radius Guidelines

Different component types have recommended radius values based on their size and purpose:

### Interactive Elements

| Component      | Recommended Radius           | Notes                       |
| -------------- | ---------------------------- | --------------------------- |
| Small buttons  | `rounded-lg`                 | 8px - compact interactive   |
| Medium buttons | `rounded-xl`                 | 12px - standard buttons     |
| Large buttons  | `rounded-xl`                 | 12px - maintains proportion |
| Icon buttons   | `rounded-lg` to `rounded-xl` | Based on size               |
| Pills/Tags     | `rounded-full`               | Fully rounded ends          |
| Badges         | `rounded-md`                 | 6px - small, subtle         |

### Form Elements

| Component        | Recommended Radius              | Notes                       |
| ---------------- | ------------------------------- | --------------------------- |
| Text inputs      | `rounded-xl`                    | 12px - matches button scale |
| Textareas        | `rounded-xl`                    | Consistent with inputs      |
| Select dropdowns | `rounded-xl`                    | Matches input styling       |
| Search bars      | `rounded-2xl` to `rounded-full` | Larger, more prominent      |

### Containers & Surfaces

| Component          | Recommended Radius             | Notes                     |
| ------------------ | ------------------------------ | ------------------------- |
| Cards              | `rounded-3xl`                  | 20px - standard card      |
| Large cards        | `rounded-4xl`                  | 24px - hero/feature cards |
| Modals/Dialogs     | `rounded-3xl` to `rounded-4xl` | 20-24px                   |
| Dropdowns/Popovers | `rounded-2xl` to `rounded-3xl` | 16-20px                   |
| Tooltips           | `rounded-lg`                   | 8px - small overlays      |
| Composer           | `rounded-6xl` to `rounded-7xl` | 32px - prominent          |

---

## Usage Examples

### Cards

```tsx
// Standard card
<div className="bg-background-100 dark:bg-background-150 rounded-3xl p-6 shadow-xs">
  Card content
</div>

// Card with nested content (concentric)
<div className="bg-background-100 rounded-3xl p-4 shadow-xs">
  <div className="bg-background-200 rounded-2xl p-4">
    Nested section
  </div>
</div>

// Large feature card
<div className="bg-background-100 rounded-4xl p-8 shadow-md">
  Feature content
</div>
```

### Buttons

```tsx
// Size variants use consistent radius
<button className="rounded-lg px-3 py-1.5 text-sm">Small</button>
<button className="rounded-xl px-4 py-2 text-sm">Medium</button>
<button className="rounded-xl px-5 py-2.5 text-base">Large</button>

// Icon button
<button className="w-10 h-10 rounded-xl flex items-center justify-center">
  <Icon />
</button>

// Pill button
<button className="rounded-full px-4 py-2">Pill Button</button>
```

### Modals & Dialogs

```tsx
// Standard modal
<div className="bg-background-100 rounded-3xl p-6 shadow-xl max-w-md">
  <h2 className="text-xl-medium">Modal Title</h2>
  <div className="mt-4">Modal content</div>
</div>

// Large modal with nested sections
<div className="bg-background-100 rounded-4xl p-6 shadow-xl max-w-2xl">
  <div className="bg-background-150 rounded-3xl p-4">
    Content section
  </div>
</div>
```

### Inputs & Forms

```tsx
// Text input
<input className="rounded-xl px-4 py-2 border border-foreground-300" />

// Search bar (more prominent)
<input className="rounded-2xl px-5 py-3 border border-foreground-300" />

// Input group with button
<div className="flex rounded-xl overflow-hidden border border-foreground-300">
  <input className="flex-1 px-4 py-2 rounded-none" />
  <button className="px-4 py-2 bg-accent-550 text-white rounded-none">Submit</button>
</div>
```

---

## What to Avoid

### Arbitrary Values

Avoid using arbitrary radius values that don't align with the design system:

```tsx
// Avoid - arbitrary values create visual inconsistency
<div className="rounded-[14px]">...</div>
<div className="rounded-[9px]">...</div>
<div className="rounded-[22px]">...</div>

// Prefer - use the token scale
<div className="rounded-xl">...</div>    // 12px
<div className="rounded-lg">...</div>    // 8px
<div className="rounded-3xl">...</div>   // 20px
```

### Mismatched Nested Corners

Avoid using the same radius for parent and child when padding is present:

```tsx
// Avoid - same radius with padding creates visual tension
<div className="rounded-2xl p-4">
  <div className="rounded-2xl">
    Inner corners appear too tight
  </div>
</div>

// Prefer - step down the radius for nested elements
<div className="rounded-2xl p-4">
  <div className="rounded-xl">
    Harmonious concentric corners
  </div>
</div>
```

### Inconsistent Component Radii

Avoid mixing incompatible radii within the same component group:

```tsx
// Avoid - inconsistent button radii in same context
<div className="flex gap-2">
  <button className="rounded-lg">Action A</button>
  <button className="rounded-2xl">Action B</button>
  <button className="rounded-md">Action C</button>
</div>

// Prefer - consistent radii for grouped elements
<div className="flex gap-2">
  <button className="rounded-xl">Action A</button>
  <button className="rounded-xl">Action B</button>
  <button className="rounded-xl">Action C</button>
</div>
```

### Over-Rounding Small Elements

Avoid using very large radii on small elements:

```tsx
// Avoid - excessive radius on small elements
<span className="rounded-4xl px-2 py-0.5 text-xs">Tag</span>

// Prefer - proportional radius
<span className="rounded-md px-2 py-0.5 text-xs">Tag</span>
// Or for pills:
<span className="rounded-full px-2 py-0.5 text-xs">Tag</span>
```

---

## Quick Reference for AI Coding Agents

When generating or modifying UI code:

1. **Use token classes** — Always use `rounded-{size}` classes, not arbitrary values like `rounded-[14px]`
2. **Cards use `rounded-3xl`** (20px) by default, larger feature cards use `rounded-4xl` (24px)
3. **Buttons use `rounded-xl`** (12px) for medium size, `rounded-lg` (8px) for small
4. **Inputs match buttons** — Use `rounded-xl` for consistency with button styling
5. **Modals use `rounded-3xl` to `rounded-4xl`** depending on size
6. **Concentric nesting** — Step down one radius level for each nested element with padding ≤16px:
   - `rounded-4xl` outer → `rounded-3xl` inner
   - `rounded-3xl` outer → `rounded-2xl` inner
   - `rounded-2xl` outer → `rounded-xl` inner
7. **Pills and avatars** use `rounded-full` for fully rounded ends/circles
8. **Dropdowns/popovers** use `rounded-2xl` to `rounded-3xl`
9. **Keep grouped elements consistent** — Buttons in the same toolbar should share the same radius
10. **When in doubt, use `rounded-xl`** — It's the most versatile size for interactive elements

---

## Related Files

- `tailwind.config.js` — Border radius token definitions (see `theme.extend.borderRadius`)
- `docs/design/elevation.md` — Shadow system (often paired with corners)
- `frontend/src/components/DesignSystemDemo.tsx` — Live implementation examples