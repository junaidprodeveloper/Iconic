![image](logo.svg)
# Iconic

**A clean, consistent, dependency-free icon library — 1,400+ icons, multiple sizes, one simple class prefix.**

Iconic is a lightweight icon system built for developers who want a large, well-organized icon set without the overhead of a JavaScript framework, a build step, or a bloated bundle. Every icon shares the same visual language — consistent stroke width, consistent grid, consistent optical sizing — so your UI never looks like it was assembled from five different icon packs.

---

## Table of Contents

- [Features](##Features)
- [Preview](##Preview)
- [Installation](#installation)
  - [Option 1 — CDN (fastest)](#option-1--cdn-fastest)
  - [Option 2 — Self-hosted](#option-3--self-hosted)
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

---

## Features

- **1,400+ icons** covering UI, navigation, communication, commerce, media, weather, files, devices, and more.
- **Single class prefix (`icon`)** — no naming inconsistency, no guessing.
- **Multiple sizes** out of the box, from small inline glyphs to large hero icons.
- **Consistent 24×24 base grid** with uniform stroke width across the entire set, so mixed icons never look mismatched.
- **No JavaScript required.** Icons render with pure CSS classes — no icon components, no runtime, no hydration.
- **Framework agnostic.** Works in plain HTML, React, Vue, Svelte, Angular, or any templating system.
- **Tree-shakeable / self-hostable.** Use the full stylesheet, or generate a subset containing only the icons you use.
- **Accessible by default**, with guidance for decorative vs. meaningful icon usage.
- **Retina-ready**, vector-based (SVG), scales cleanly at any size without blurring.

---

## Preview

Below is a small sample of the set. The full, searchable gallery lives at **[iconic.example.com](https://iconic.example.com)** (replace with your actual hosted gallery URL).

| Icon | Class | Icon | Class | Icon | Class |
|---|---|---|---|---|---|
| Home | `icon-home` | Search | `icon-search` | Settings | `icon-settings` |
| User | `icon-user` | Heart | `icon-heart` | Star | `icon-star` |
| Bell | `icon-bell` | Mail | `icon-mail` | Calendar | `icon-calendar` |
| Folder | `icon-folder` | Trash | `icon-trash` | Download | `icon-download` |

> Tip: the gallery site supports live search across all 1,400 icons and lets you copy the exact class name with one click.

---

## Installation

### Option 1 — CDN (fastest)

Add the stylesheet to the `<head>` of your HTML file. No build step, no download required.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/junaidprodeveloper/Iconic@1.0.0.1/iconic.css">
```

That's it — every `icon-*` class is now available anywhere in your document.


Then import the stylesheet in your project's entry file (bundler-dependent):

```js
import "https://cdn.jsdelivr.net/gh/junaidprodeveloper/Iconic-webpage@1.0.0.1/iconic.css";
```

Or reference it directly from `node_modules` in your HTML:


### Option 3 — Self-hosted



```html
<link rel="stylesheet" href="https://junaidprodeveloper.github.io/Iconic/iconic.css">
```

Self-hosting is recommended for production apps that want full control over caching and don't want a third-party CDN dependency.

---

## Basic Usage

Every icon is applied with two classes: the base class `icon` and a modifier class for the specific icon, in the form `icon-{icon-name}`.

```html
<icon-ic class="icon-home"></icon-ic>
    <icon-ic class="icon-search"></icon-ic>
<icon-ic class="icon-settings"></icon-ic>
```

That's the entire API. No wrapper components, no props, no configuration required for the default case.

---

## Class Naming Convention

All classes follow a single, predictable pattern:

```
icon            → base class, required on every icon element
icon-{name}     → the specific icon (e.g. icon-arrow-left, icon-shopping-cart)
icon-{size}     → optional size modifier (see Sizes below)
icon-{color}    → optional color/utility modifier, if using the utility stylesheet
```

Icon names are always lowercase, words separated by a single hyphen, and named after the object or action they represent rather than an abstract code — for example `icon-trash`, `icon-arrow-up-right`, `icon-credit-card`, `ioncic-zip`. This means you can usually guess an icon's class name correctly on the first try.

---

## Sizes

Iconic ships with six preset sizes. By default, icons inherit `font-size` from their parent element (so they scale naturally with surrounding text), but explicit size classes are available when you need a fixed size regardless of context.

| Class | Pixel size | Typical use |
|---|---|---|
| `icon-xs` | 12px | Dense inline text, small badges |
| `icon-sm` | 16px | Inline with body text, form fields |
| `icon-md` | 20px | Default UI size — buttons, nav items |
| `icon-lg` | 24px | Section headers, list leading icons |
| `icon-xl` | 32px | Feature callouts, empty states |
| `icon-2xl` | 48px | Hero sections, marketing pages |

```html
<icon-ic class="icon icon-bell icon-xs"></icon-ic>
<icon-ic class="icon icon-bell icon-sm"></icon-ic>
<icon-ic class="icon icon-bell icon-md"></icon-ic>
<icon-ic class="icon icon-bell icon-lg"></icon-ic>
<icon-ic class="icon icon-bell icon-xl"></icon-ic>
<icon-ic class="icon icon-bell icon-2xl"></icon-ic>
```

You can also set a fully custom size at any time using plain CSS, since every icon is font-size driven:

```css
.my-custom-icon {
  font-size: 40px;
}
```

```html
<icon-ic class="icon icon-bell my-custom-icon"></icon-ic>
```

---

## Colors

Icons inherit `color` from their parent by default, so they follow your existing text/theme color without any extra work:

```html
<p style="color: #2563eb;">
  <icon-ic class="icon icon-info"></icon-ic> This inherits the blue color above.
</p>
```

If you're using the optional utility stylesheet, a small set of semantic color helpers is also included:

| Class | Meaning |
|---|---|
| `icon-color-muted` | Low-emphasis, secondary icons |
| `icon-color-accent` | Brand/accent-colored icons |
| `icon-color-success` | Positive/confirmation states |
| `icon-color-warning` | Caution states |
| `icon-color-danger` | Destructive/error states |

```html
<icon-ic class="icon icon-check icon-color-success"></icon-ic>
<icon-ic class="icon icon-alert-triangle icon-color-warning"></icon-ic>
<icon-ic class="icon icon-trash icon-color-danger"></icon-ic>
```

---

## Icon Categories

The 1,400+ icons are organized into the following categories. The full, filterable index is generated automatically from `icons.json` in this repository (see [`/data/icons.json`](./data/icons.json)) and is also browsable on the gallery site.

- **Navigation & arrows** — chevrons, arrows, directional and layout controls (~120 icons)
- **UI & interface** — buttons, toggles, menus, layout, sliders (~160 icons)
- **Communication** — mail, chat, phone, notifications (~90 icons)
- **Files & folders** — documents, file types, archives, cloud storage (~140 icons)
- **Media & devices** — audio, video, playback, cameras, screens, devices (~130 icons)
- **Commerce & finance** — shopping, payments, currency, invoices (~110 icons)
- **People & account** — users, profiles, teams, authentication (~90 icons)
- **Time & calendar** — clocks, dates, scheduling, reminders (~60 icons)
- **Weather & nature** — climate, seasons, environment, astronomy (~70 icons)
- **Maps & location** — pins, routes, transport, geography (~80 icons)
- **Charts & data** — graphs, analytics, dashboards, metrics (~70 icons)
- **Editing & text** — formatting, writing tools, markup (~90 icons)
- **Security & privacy** — locks, shields, verification, permissions (~60 icons)
- **Social & brand** — generic social/sharing glyphs (non-trademarked) (~50 icons)
- **Miscellaneous & objects** — everyday objects and general-purpose icons (~140 icons)

> Category counts are approximate and will drift slightly as icons are added; `icons.json` is always the source of truth.

---

## Searching for an Icon

Three ways to find the right icon:

1. **Gallery site** — [iconic.example.com](https://iconic.example.com) has a live search across all icon names and tags, with one-click copy of the class name.
2. **`icons.json`** — every icon's name, category, and search tags are listed in [`/data/icons.json`](./data/icons.json); useful for scripting or building your own picker.
3. **Repo search** — search this repository's `/svg` folder directly by filename; each SVG file is named identically to its class suffix (e.g. `arrow-left.svg` → `icon-arrow-left`).

---

## Accessibility

Icons are visual elements and need explicit handling to be accessible:

**Decorative icons** (icon sits next to visible text that already conveys the meaning) — hide from assistive technology:

```html
<button>
  <icon-ic class="icon icon-trash" aria-hidden="true"></icon-ic>
  Delete item
</button>
```

**Meaningful icons** (icon is the only content, e.g. an icon-only button) — provide an accessible label:

```html
<button aria-label="Delete item">
  <icon-ic class="icon icon-trash" aria-hidden="true"></icon-ic>
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
      <icon-ic className="icon icon-trash" aria-hidden="true" />
    </button>
  );
}
```

### Vue

```vue
<template>
  <button aria-label="Delete item">
    <icon-ic class="icon icon-trash" aria-hidden="true"></icon-ic>
  </button>
</template>
```

### Plain HTML

```html
<button aria-label="Delete item">
  <icon-ic class="icon icon-trash" aria-hidden="true"></icon-ic>
</button>
```

---

## Browser Support

Iconic supports all evergreen browsers (Chrome, Firefox, Safari, Edge) on desktop and mobile, plus the last two major versions of each. The icon set is delivered as an icon font and/or SVG sprite (see [File Formats](#file-formats)); both approaches are supported in browsers released in the last ~6 years.

---

## File Formats

Iconic ships in two distributable formats — use whichever fits your project:

- **Icon font (`iconic.woff2` + `iconic.min.css`)** — smallest total download, simplest integration, used in all examples above via the `icon icon-{name}` class pattern.
- **SVG sprite (`iconic-sprite.svg`)** — for projects that prefer inline SVG for styling flexibility (per-path coloring, animation, etc.):

```html
<svg class="icon icon-lg" aria-hidden="true">
  <use href="/assets/iconic-sprite.svg#icon-home"></use>
</svg>
```

Both formats are generated from the same master SVG source files in `/svg`, so they stay in sync automatically via the build script.

---

## Performance Notes

- The full stylesheet (all 1,400 icons) is a single small, cacheable file — typically well under 100KB gzipped for the font-based build.
- For performance-sensitive builds, use the subsetting script (`npm run subset -- --icons=home,search,settings`) to generate a minimal CSS/font file containing only the icons your project actually uses.
- Icons are vector-based and render crisply at any resolution, including high-DPI/Retina displays, with no additional `@2x` assets needed.

---

## Versioning

This project follows [Semantic Versioning](https://semver.org/):

- **Patch** (`1.4.x`) — bug fixes, individual icon corrections.
- **Minor** (`1.x.0`) — new icons added, fully backward compatible.
- **Major** (`x.0.0`) — breaking changes (renamed classes, changed base grid, removed icons).

See [`CHANGELOG.md`](./CHANGELOG.md) for a full history of releases.

---

## Roadmap

- [ ] Expand set past 1,400 icons with community-requested additions
- [ ] Filled/solid icon variant alongside the current outline style
- [ ] Duotone variant
- [ ] Official Figma library
- [ ] Official React component package (optional wrapper, framework-agnostic core stays as-is)
- [ ] RTL-aware directional icon variants

---

## Contributing

Contributions are welcome, especially new icon requests and corrections to existing icons.

1. Fork the repository and create a new branch.
2. New icons go in `/svg` as a single-color, 24×24 viewBox SVG following the existing stroke-width and corner-radius conventions (see [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the full icon design spec).
3. Add the icon's metadata (name, category, tags) to `/data/icons.json`.
4. Run `npm run build` to regenerate the font and CSS from source.
5. Open a pull request with a short description and a preview screenshot of the new icon(s).

Please read [`CONTRIBUTING.md`](./CONTRIBUTING.md) and [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md) before submitting a pull request.

---

## License

Iconic is released under the [MIT License](./LICENSE). Free for personal and commercial use, with attribution appreciated but not required.

---

## Credits

Built and maintained by the Iconic contributors. If you use Iconic in your project, a link back or a star on this repository is always appreciated. ⭐