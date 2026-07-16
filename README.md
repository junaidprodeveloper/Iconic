![image](logo.svg)
## Request an Icon

Can't find the icon you need?

Please **open a GitHub Issue** with the icon name or a reference image/link. I'll add it **within 24 hours** or within the time mentioned in my reply.

Your suggestions help make **Iconic** better for everyone. Thank you! 🚀
# Iconic

**A clean, consistent, dependency-free icon library — 17,000+ icons, multiple sizes, one simple class prefix.**

Iconic is a lightweight icon system built for developers who want a large, well-organized icon set without the overhead of a JavaScript framework, a build step, or a bloated bundle. Every icon shares the same visual language — consistent stroke width, consistent grid, consistent optical sizing — so your UI never looks like it was assembled from five different icon packs.

Version 2.0 introduces the new `ic-` prefix (e.g., `ic-google`, `ic-search`), a streamlined CDN (`iconic.min.css`), and a complete refresh of the entire library with over `17,000 icons`.

---

## Table of Contents

- [Features](#features)
- [Preview](#preview)
- [Installation](#installation)
  - [Option 1 — CDN (fastest)](#option-1--cdn-fastest)
  - [Option 2 — Self-hosted](#option-2--self-hosted)
- [Basic Usage](#basic-usage)
- [Class Naming Convention](#class-naming-convention)
- [Sizes](#sizes)
- [Colors](#colors)
- [Icon Categories](#icon-categories)
- [Searching for an Icon](#searching-for-an-icon)
- [Accessibility](#accessibility)
- [Framework Usage](#framework-usage)
  - [React](#react)
  - [Vue](#vue)
  - [Plain HTML](#plain-html)
- [Browser Support](#browser-support)
- [File Formats](#file-formats)
- [Performance Notes](#performance-notes)
- [Versioning](#versioning)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)
- [Quick Start Example](#quick-start-example)

---

## Features

- **17,000+ icons** covering UI, navigation, communication, commerce, media, weather, files, devices, brands, and more.
- **Single class prefix (`ic`)** — no naming inconsistency, no guessing (e.g., `ic-home`, `ic-google`, `ic-arrow-left`).
- **Multiple sizes** out of the box, from small inline glyphs to large hero icons.
- **Consistent 24×24 base grid** with uniform stroke width across the entire set, so mixed icons never look mismatched.
- **No JavaScript required.** Icons render with pure CSS classes — no icon components, no runtime, no hydration.
- **Framework agnostic.** Works in plain HTML, React, Vue, Svelte, Angular, or any templating system.
- **Tree-shakeable / self-hostable.** Use the full stylesheet, or generate a subset containing only the icons you use.
- **Accessible by default**, with guidance for decorative vs. meaningful icon usage.
- **Retina-ready**, vector-based (SVG), scales cleanly at any size without blurring.
- **Brand icons included** — popular services and platforms (e.g., `ic-google`, `ic-github`, `ic-twitter`).

---

## Preview

Below is a small sample of the set. The full, searchable gallery lives at **[iconic.example.com](https://iconic.example.com)** (replace with your actual hosted gallery URL).

| Icon | Class | Icon | Class | Icon | Class |
|------|-------|------|-------|------|-------|
| Home | `ic-home` | Search | `ic-search` | Settings | `ic-settings` |
| User | `ic-user` | Heart | `ic-heart` | Star | `ic-star` |
| Bell | `ic-bell` | Mail | `ic-mail` | Calendar | `ic-calendar` |
| Folder | `ic-folder` | Trash | `ic-trash` | Download | `ic-download` |
| Google | `ic-google` | GitHub | `ic-github` | Twitter | `ic-twitter` |

> Tip: the gallery site supports live search across all 17,000+ icons and lets you copy the exact class name with one click.

---

## Installation

### Option 1 — CDN (fastest)

Add the stylesheet to the `<head>` of your HTML file. No build step, no download required.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/junaidprodeveloper/Iconic@2.0.0/iconic.min.css">
```

That's it — every `ic-*` class is now available anywhere in your document.

### Option 2 — Self-hosted

Download the repository and link the CSS file locally:

```html
<link rel="stylesheet" href="https://junaidprodeveloper.github.io/Iconic/iconic.min.css">
```

Self-hosting is recommended for production apps that want full control over caching and don't want a third-party CDN dependency.

---

## Basic Usage

Every icon is applied with two classes: the base class `ic` and a modifier class for the specific icon, in the form `ic-{icon-name}`.

```html
<i-ic class="ic ic-home"></i-ic>
<i-ic class="ic ic-search"></i-ic>
<i-ic class="ic ic-settings"></i-ic>
<i-ic class="ic ic-google"></i-ic>
```

That's the entire API. No wrapper components, no props, no configuration required for the default case.

---

## Class Naming Convention

All classes follow a single, predictable pattern:
ic → base class, required on every icon element
ic-{name} → the specific icon (e.g. ic-arrow-left, ic-shopping-cart, ic-google)
ic-{size} → optional size modifier (see Sizes below)
ic-{color} → optional color/utility modifier, if using the utility stylesheet

text

Icon names are always lowercase, words separated by a single hyphen, and named after the object or action they represent rather than an abstract code — for example `ic-trash`, `ic-arrow-up-right`, `ic-credit-card`, `ic-zip-file`. This means you can usually guess an icon's class name correctly on the first try.

Brand icons use recognizable short names (e.g., `ic-google`, `ic-github`, `ic-figma`, `ic-discord`).

---

## Sizes

Iconic ships with six preset sizes. By default, icons inherit `font-size` from their parent element (so they scale naturally with surrounding text), but explicit size classes are available when you need a fixed size regardless of context.

| Class | Pixel size | Typical use |
|-------|------------|-------------|
| `ic-xs` | 12px | Dense inline text, small badges |
| `ic-sm` | 16px | Inline with body text, form fields |
| `ic-md` | 20px | Default UI size — buttons, nav items |
| `ic-lg` | 24px | Section headers, list leading icons |
| `ic-xl` | 32px | Feature callouts, empty states |
| `ic-2xl` | 48px | Hero sections, marketing pages |

```html
<i-ic class="ic ic-bell ic-xs"></i-ic>
<i-ic class="ic ic-bell ic-sm"></i-ic>
<i-ic class="ic ic-bell ic-md"></i-ic>
<i-ic class="ic ic-bell ic-lg"></i-ic>
<i-ic class="ic ic-bell ic-xl"></i-ic>
<i-ic class="ic ic-bell ic-2xl"></i-ic>
```

You can also set a fully custom size at any time using plain CSS, since every icon is font-size driven:

```css
.my-custom-icon {
  font-size: 40px;
}
```

```html
<i-ic class="ic ic-bell my-custom-icon"></i-ic>
```

---

## Colors

Icons inherit `color` from their parent by default, so they follow your existing text/theme color without any extra work:

```html
<p style="color: #2563eb;">
  <i-ic class="ic ic-info"></i-ic> This inherits the blue color above.
</p>
```

If you're using the optional utility stylesheet, a small set of semantic color helpers is also included:

| Class | Meaning |
|-------|---------|
| `ic-color-muted` | Low-emphasis, secondary icons |
| `ic-color-accent` | Brand/accent-colored icons |
| `ic-color-success` | Positive/confirmation states |
| `ic-color-warning` | Caution states |
| `ic-color-danger` | Destructive/error states |

```html
<i-ic class="ic ic-check ic-color-success"></i-ic>
<i-ic class="ic ic-alert-triangle ic-color-warning"></i-ic>
<i-ic class="ic ic-trash ic-color-danger"></i-ic>
```

---

## Icon Categories

The 17,000+ icons are organized into the following categories. The full, filterable index is generated automatically from `icons.json` in this repository (see [`/data/icons.json`](./data/icons.json)) and is also browsable on the gallery site.

- **Navigation & arrows** — chevrons, arrows, directional and layout controls (~1,200 icons)
- **UI & interface** — buttons, toggles, menus, layout, sliders (~1,600 icons)
- **Communication** — mail, chat, phone, notifications (~900 icons)
- **Files & folders** — documents, file types, archives, cloud storage (~1,400 icons)
- **Media & devices** — audio, video, playback, cameras, screens, devices (~1,300 icons)
- **Commerce & finance** — shopping, payments, currency, invoices (~1,100 icons)
- **People & account** — users, profiles, teams, authentication (~900 icons)
- **Time & calendar** — clocks, dates, scheduling, reminders (~600 icons)
- **Weather & nature** — climate, seasons, environment, astronomy (~700 icons)
- **Maps & location** — pins, routes, transport, geography (~800 icons)
- **Charts & data** — graphs, analytics, dashboards, metrics (~700 icons)
- **Editing & text** — formatting, writing tools, markup (~900 icons)
- **Security & privacy** — locks, shields, verification, permissions (~600 icons)
- **Social & brand** — popular platforms and services (Google, GitHub, Twitter, etc.) (~1,500+ icons)
- **Miscellaneous & objects** — everyday objects and general-purpose icons (~1,400 icons)

> Category counts are approximate and will drift slightly as icons are added; `icons.json` is always the source of truth.

---

## Searching for an Icon

Three ways to find the right icon:

1. **Gallery site** — [ICONIC `web`](https://junaidprodeveloper.github.io/Iconic) has a live search across all icon names and tags, with one-click copy of the class name.
2. **`icons.json`** — every icon's name, category, and search tags are listed in [css-class](https://junaidprodeveloper.github.io/Iconic/iconic.css); useful for scripting or building your own picker.
3. **Repo search** — search this repository's `/svg` folder directly by filename; each SVG file is named identically to its class suffix (e.g., `arrow-left.svg` → `ic-arrow-left`).

---

## Accessibility

Icons are visual elements and need explicit handling to be accessible:

**Decorative icons** (icon sits next to visible text that already conveys the meaning) — hide from assistive technology:

```html
<button>
  <i-ic class="ic ic-trash" aria-hidden="true"></i-ic>
  Delete item
</button>
```

**Meaningful icons** (icon is the only content, e.g. an icon-only button) — provide an accessible label:

```html
<button aria-label="Delete item">
  <i-ic class="ic ic-trash" aria-hidden="true"></i-ic>
</button>
```

Never rely on an icon alone to convey status or meaning without a text alternative somewhere (visible label, `aria-label`, or `title`).

---

## Framework Usage

### React

Iconic works with plain class names, so no separate React package is required:

```jsx
function DeleteButton() {
  return (
    <button aria-label="Delete item">
      <i-ic className="ic ic-trash" aria-hidden="true" />
    </button>
  );
}
```

### Vue

```vue
<template>
  <button aria-label="Delete item">
    <i-ic class="ic ic-trash" aria-hidden="true"></i-ic>
  </button>
</template>
```

### Plain HTML

```html
<button aria-label="Delete item">
  <i-ic class="ic ic-trash" aria-hidden="true"></i-ic>
</button>
```

---

## Browser Support

Iconic supports all evergreen browsers (Chrome, Firefox, Safari, Edge) on desktop and mobile, plus the last two major versions of each. The icon set is delivered as an icon font and/or SVG sprite (see [File Formats](#file-formats)); both approaches are supported in browsers released in the last ~6 years.

---

## File Formats

Iconic ships in two distributable formats — use whichever fits your project:

- **Icon font (`iconic.woff2` + `iconic.min.css`)** — smallest total download, simplest integration, used in all examples above via the `ic ic-{name}` class pattern.
- **SVG sprite (`iconic-sprite.svg`)** — for projects that prefer inline SVG for styling flexibility (per-path coloring, animation, etc.):

```html
<svg class="ic ic-lg" aria-hidden="true">
  <use href="/assets/iconic-sprite.svg#ic-home"></use>
</svg>
```

Both formats are generated from the same master SVG source files in `/svg`, so they stay in sync automatically via the build script.

---

## Performance Notes

- The full stylesheet (all 17,000+ icons) is a single small, cacheable file — typically well under 150KB gzipped for the font-based build.
- For performance-sensitive builds, use the subsetting script (`npm run subset -- --icons=home,search,settings`) to generate a minimal CSS/font file containing only the icons your project actually uses.
- Icons are vector-based and render crisply at any resolution, including high-DPI/Retina displays, with no additional `@2x` assets needed.

---

## Versioning

This project follows [Semantic Versioning](https://semver.org/):

- **Patch** (`2.0.x`) — bug fixes, individual icon corrections.
- **Minor** (`2.x.0`) — new icons added, fully backward compatible.
- **Major** (`x.0.0`) — breaking changes (renamed classes, changed base grid, removed icons).

Version 2.0 introduces breaking changes: the `icon-` prefix is replaced with `ic-` (e.g., `icon-home` → `ic-home`). See [`CHANGELOG.md`](./CHANGELOG.md) for a full history of releases.

---

## Roadmap

- [ ] Expand set past 17,000 icons with community-requested additions
- [ ] Filled/solid icon variant alongside the current outline style
- [ ] Duotone variant
- [ ] Official Figma library
- [ ] Official React component package (optional wrapper, framework-agnostic core stays as-is)
- [ ] RTL-aware directional icon variants
- [ ] Animated icon set (loading, success, error states)

---

## Contributing

Contributions are welcome, especially new icon requests and corrections to existing icons.

1. Fork the repository and create a new branch.
2. New icons go in `/svg` as a single-color, 24×24 viewBox SVG following the existing stroke-width and corner-radius conventions (see [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the full icon design spec).
3. Add the icon's metadata (name, category, tags) to `/data/icons.json`.
4. Run `npm run build` to regenerate the font and CSS from source.
5. Open a pull request with a short description and a preview screenshot of the new icon(s).



---

## License

Iconic is released under the [MIT License](./LICENSE). Free for personal and commercial use, with attribution appreciated but not required.

---

## Credits

Built and maintained by the Iconic contributors. If you use Iconic in your project, a link back or a star on this repository is always appreciated. ⭐

---

## Quick Start Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Iconic - Quick Start</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/junaidprodeveloper/Iconic@2.0.0/iconic.min.css">
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 2rem;
      line-height: 1.6;
    }
    .icon-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 1rem;
      margin-top: 2rem;
    }
    .icon-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      border: 1px solid #e5e7eb;
      border-radius: 0.5rem;
      text-align: center;
    }
    .icon-item i-ic {
      font-size: 24px;
      margin-bottom: 0.5rem;
      color: #374151;
    }
    .icon-item code {
      font-size: 0.75rem;
      color: #6b7280;
    }
  </style>
</head>
<body>
  <h1>Iconic v2.0</h1>
  <p>17,000+ icons with the new <code>ic-</code> prefix</p>

  <div class="icon-grid">
    <div class="icon-item">
      <i-ic class="ic ic-home ic-lg"></i-ic>
      <code>ic-home</code>
    </div>
    <div class="icon-item">
      <i-ic class="ic ic-search ic-lg"></i-ic>
      <code>ic-search</code>
    </div>
    <div class="icon-item">
      <i-ic class="ic ic-user ic-lg"></i-ic>
      <code>ic-user</code>
    </div>
    <div class="icon-item">
      <i-ic class="ic ic-settings ic-lg"></i-ic>
      <code>ic-settings</code>
    </div>
    <div class="icon-item">
      <i-ic class="ic ic-google ic-lg"></i-ic>
      <code>ic-google</code>
    </div>
    <div class="icon-item">
      <i-ic class="ic ic-github ic-lg"></i-ic>
      <code>ic-github</code>
    </div>
  </div>
</body>
</html>
```

Copy this example to get started immediately with Iconic v2.0.