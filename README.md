![image](logo.svg)

# Iconic - Premium CSS Icon Library

[![GitHub Release](https://img.shields.io/github/v/release/junaidprodeveloper/Iconic?label=latest)](https://github.com/junaidprodeveloper/Iconic/releases)
[![Version](https://img.shields.io/badge/version-2.0.0-blue)](https://github.com/junaidprodeveloper/Iconic/releases/tag/v2.0.0)
[![Total Icons](https://img.shields.io/badge/icons-19%2C052-success)](https://github.com/junaidprodeveloper/Iconic)
[![Feature Requests](https://img.shields.io/github/issues/junaidprodeveloper/Iconic/feature-request?label=feature%20requests)](https://github.com/junaidprodeveloper/Iconic/issues?q=is%3Aopen+label%3Afeature-request)
[![Bugs](https://img.shields.io/github/issues/junaidprodeveloper/Iconic/bug?label=bugs)](https://github.com/junaidprodeveloper/Iconic/issues?q=is%3Aopen+label%3Abug)
[![jsDelivr CDN](https://img.shields.io/badge/CDN-jsDelivr-blue)](https://cdn.jsdelivr.net/gh/junaidprodeveloper/Iconic@2.0.0/iconic.min.css)
[![License](https://img.shields.io/github/license/junaidprodeveloper/Iconic)](https://github.com/junaidprodeveloper/Iconic/blob/main/LICENSE)
[![](https://data.jsdelivr.com/v1/package/gh/junaidprodeveloper/Iconic/badge)](https://www.jsdelivr.com/package/gh/junaidprodeveloper/Iconic)

> **Iconic** is a clean, consistent, dependency-free icon library for developers who want a large, well-organized icon set without the overhead of JavaScript frameworks, build steps, or bloated bundles.

---

## Request an Icon

Can't find the icon you need?

Please **open a GitHub Issue** with the icon name or a reference image/link. I'll add it **within 24 hours** or within the time mentioned in my reply.

Your suggestions help make **Iconic** better for everyone. Thank you! 🚀

---

## Hero

Iconic is built to feel simple at the point of use and powerful at scale.

- `17,000+` icons.
- One predictable prefix: `ic-`.
- No JavaScript required.
- Works in plain HTML, React, Vue, and more.
- Fast CDN delivery or full self-hosting support.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/junaidprodeveloper/Iconic@2.0.0/iconic.min.css">
<i-ic class="ic ic-home"></i-ic>
```

---

## Why Iconic

Iconic is designed for teams that want a stable icon system that feels lightweight but still complete.

- You do not need a component library just to render icons.
- You do not need a build step to start using it.
- You do not need to learn a different API per framework.
- You get a single naming system across the entire library.
- You can use the same icons in static sites, SPAs, and server-rendered apps.

If your project needs a scalable icon system with low integration overhead, Iconic is built for that.

---

## Features

### Large icon set

Iconic includes more than `17,000 icons` across UI, navigation, communication, commerce, media, weather, files, devices, brands, and more.

### Consistent visual language

Every icon is designed on a consistent `24×24` base grid with uniform stroke width and optical sizing, so mixed icons do not look mismatched.

### Zero runtime overhead

Icons render through CSS classes with no JavaScript runtime, no hydration cost, and no framework dependency.

### Framework agnostic

Iconic works in:
- Plain HTML.
- React.
- Vue.
- Svelte.
- Angular.
- Server-rendered templates.

### Self-hostable and CDN-ready

Use the hosted CDN for speed, or self-host for full control over caching and deployment.

### Accessible by default

Iconic includes guidance for decorative and meaningful icons so your UI stays accessible.

### Retina-ready and scalable

The icon system is vector-based, so it stays crisp at any size.

---

## Preview

Below is a small sample of the set. The full, searchable gallery lives at **[Iconic Gallery](https://junaidprodeveloper.github.io/Iconic/)**.

| Icon | Class | Icon | Class | Icon | Class |
|------|-------|------|-------|------|-------|
| Home | `ic-home` | Search | `ic-search` | Settings | `ic-settings` |
| User | `ic-user` | Heart | `ic-heart` | Star | `ic-star` |
| Bell | `ic-bell` | Mail | `ic-mail` | Calendar | `ic-calendar` |
| Folder | `ic-folder` | Trash | `ic-trash` | Download | `ic-download` |
| Google | `ic-google` | GitHub | `ic-github` | Twitter | `ic-twitter` |

> Tip: the gallery site supports live search across all icons and lets you copy the exact class name quickly.

---

## Installation

### Option 1 — CDN (fastest)

Add the stylesheet to the `<head>` of your HTML file. No build step, no download required.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/junaidprodeveloper/Iconic@2.0.0/iconic.min.css">
```

### Option 2 — Self-hosted

Download the repository and link the CSS file locally.

```html
<link rel="stylesheet" href="https://junaidprodeveloper.github.io/Iconic/iconic.min.css">
```

Self-hosting is recommended for production apps that want full control over caching and do not want a third-party CDN dependency.

---

## Basic Usage

Every icon uses two classes:

- `ic` — base class.
- `ic-{icon-name}` — specific icon class.

```html
<i-ic class="ic ic-home"></i-ic>
<i-ic class="ic ic-search"></i-ic>
<i-ic class="ic ic-settings"></i-ic>
<i-ic class="ic ic-google"></i-ic>
```

That is the entire API. No wrapper components, no props, and no configuration for the default case.

---

## Class Naming Convention

Iconic follows one predictable pattern.

- `ic` — base class, required on every icon element.
- `ic-{name}` — the specific icon, such as `ic-arrow-left` or `ic-shopping-cart`.
- `ic-{size}` — optional size modifier.
- `ic-{color}` — optional color utility class, if you use the utility stylesheet.

Icon names are lowercase, words are separated by a single hyphen, and names describe the object or action they represent. That means you can usually guess an icon’s class name on the first try.

Brand icons use recognizable short names such as `ic-google`, `ic-github`, `ic-figma`, and `ic-discord`.

---

## Sizes

Iconic ships with six preset sizes. By default, icons inherit `font-size` from their parent element, so they scale naturally with surrounding text. Explicit size classes are available when you need a fixed size.

| Class | Pixel size | Typical use |
|-------|------------|-------------|
| `ic-xs` | 12px | Dense inline text, small badges |
| `ic-sm` | 16px | Inline with body text, form fields |
| `ic-md` | 20px | Default UI size, buttons, nav items |
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

You can also set a fully custom size with plain CSS.

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

Icons inherit `color` from their parent by default, so they follow your existing text or theme color without extra work.

```html
<p style="color: #2563eb;">
  <i-ic class="ic ic-info"></i-ic> This inherits the blue color above.
</p>
```

If you are using the optional utility stylesheet, a small set of semantic color helpers is also included.

| Class | Meaning |
|-------|---------|
| `ic-color-muted` | Low-emphasis, secondary icons |
| `ic-color-accent` | Brand or accent-colored icons |
| `ic-color-success` | Positive or confirmation states |
| `ic-color-warning` | Caution states |
| `ic-color-danger` | Destructive or error states |

```html
<i-ic class="ic ic-check ic-color-success"></i-ic>
<i-ic class="ic ic-alert-triangle ic-color-warning"></i-ic>
<i-ic class="ic ic-trash ic-color-danger"></i-ic>
```

---

## Icon Categories

The icon set is organized into broad categories so you can find the right symbol faster.

- **Navigation & arrows** — chevrons, arrows, directional and layout controls.
- **UI & interface** — buttons, toggles, menus, layout, sliders.
- **Communication** — mail, chat, phone, notifications.
- **Files & folders** — documents, file types, archives, cloud storage.
- **Media & devices** — audio, video, playback, cameras, screens, devices.
- **Commerce & finance** — shopping, payments, currency, invoices.
- **People & account** — users, profiles, teams, authentication.
- **Time & calendar** — clocks, dates, scheduling, reminders.
- **Weather & nature** — climate, seasons, environment, astronomy.
- **Maps & location** — pins, routes, transport, geography.
- **Charts & data** — graphs, analytics, dashboards, metrics.
- **Editing & text** — formatting, writing tools, markup.
- **Security & privacy** — locks, shields, verification, permissions.
- **Social & brand** — popular platforms and services.
- **Miscellaneous & objects** — everyday objects and general-purpose icons.

> Category counts are approximate and will drift slightly as icons are added; `icons.json` is always the source of truth.

---

## Searching for an Icon

There are three easy ways to find the right icon:

1. **Gallery site** — search across names and tags, then copy the class name instantly.
2. **`icons.json`** — useful if you want to script your own picker or build a custom search tool.
3. **Repo search** — search the `/svg` folder directly by filename; each SVG file matches the class suffix.

---

## Accessibility

Icons are visual elements, so they need explicit accessibility handling.

### Decorative icons

If the icon sits next to visible text that already explains the meaning, hide it from assistive technology.

```html
<button>
  <i-ic class="ic ic-trash" aria-hidden="true"></i-ic>
  Delete item
</button>
```

### Meaningful icons

If the icon is the only content, provide an accessible label.

```html
<button aria-label="Delete item">
  <i-ic class="ic ic-trash" aria-hidden="true"></i-ic>
</button>
```

Never rely on an icon alone to convey status or meaning without a text alternative somewhere.

---

## Framework Usage

### React

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

Iconic supports all evergreen browsers on desktop and mobile, plus the last two major versions of each. The icon set is delivered as an icon font and/or SVG sprite, and both approaches are supported in modern browsers.

---

## File Formats

Iconic ships in two distributable formats.

- **Icon font (`iconic.woff2` + `iconic.min.css`)** — smallest total download and simplest integration.
- **SVG sprite (`iconic-sprite.svg`)** — useful when you want inline SVG flexibility, such as per-path coloring or animation.

```html
<svg class="ic ic-lg" aria-hidden="true">
  <use href="/assets/iconic-sprite.svg#ic-home"></use>
</svg>
```

Both formats are generated from the same master SVG source files, so they stay in sync automatically.

---

## Performance Notes

- The full stylesheet is a single cacheable file.
- For performance-sensitive builds, use the subsetting script to generate a minimal CSS/font file containing only the icons you actually use.
- Icons are vector-based and render crisply at any resolution, including high-DPI and Retina displays.
- No extra `@2x` assets are needed.

---

## Versioning

This project follows [Semantic Versioning](https://semver.org/).

- **Patch** (`2.0.x`) — bug fixes and individual icon corrections.
- **Minor** (`2.x.0`) — new icons added, fully backward compatible.
- **Major** (`x.0.0`) — breaking changes such as renamed classes, changed base grid, or removed icons.

Version 2.0 introduces the breaking change from `icon-` to `ic-`, for example `icon-home` becomes `ic-home`.

---

## Roadmap

- [ ] Expand the set beyond `17,000` icons with community-requested additions.
- [ ] Add a filled/solid icon variant.
- [ ] Add a duotone variant.
- [ ] Release an official Figma library.
- [ ] Release an optional React component package.
- [ ] Add RTL-aware directional icon variants.
- [ ] Add animated icons for loading, success, and error states.

---

## Contributing

Contributions are welcome, especially new icon requests and corrections to existing icons.

1. Fork the repository and create a new branch.
2. Add new icons in `/svg` as a single-color, 24×24 viewBox SVG following the existing stroke-width and corner-radius conventions.
3. Add the icon metadata to `/data/icons.json`.
4. Run `npm run build` to regenerate the font and CSS.
5. Open a pull request with a short description and a preview screenshot.

---

## License

Iconic is released under the [MIT License](./LICENSE). It is free for personal and commercial use, and attribution is appreciated but not required.

---

## Credits

Built and maintained by the Iconic contributors. If you use Iconic in your project, a link back or a star on the repository is appreciated. ⭐

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
    .hero {
      padding: 2rem;
      border: 1px solid #e5e7eb;
      border-radius: 1rem;
      background: #fff;
      box-shadow: 0 10px 30px rgba(0,0,0,.04);
      margin-bottom: 2rem;
    }
    .hero h1 {
      margin: 0 0 .5rem;
      font-size: 2rem;
    }
    .hero p {
      margin: 0;
      color: #4b5563;
    }
    .icon-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 1rem;
      margin-top: 1.5rem;
    }
    .icon-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      border: 1px solid #e5e7eb;
      border-radius: 0.75rem;
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
  <div class="hero">
    <h1>Iconic v2.0</h1>
    <p>17,000+ icons with the new <code>ic-</code> prefix</p>
  </div>

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

---

## GitHub Pages Layout

If you want the site to feel more like Bootstrap’s docs, use this structure:

- `index.html` — homepage and docs landing page.
- `README.md` — repository-facing documentation.
- `assets/` — logo, screenshots, CSS, gallery assets.
- `data/` — icon metadata and search index.
- `docs/` — optional long-form docs pages.

A Bootstrap-style layout usually works best with:
- A clear hero section.
- A compact sidebar or anchor-based table of contents.
- Section-based documentation with examples.
- Repeated code snippets and tables.
- Strong visual hierarchy with callout blocks.

---

## License Summary

Iconic is MIT licensed, which makes it suitable for personal, commercial, and open-source use.
