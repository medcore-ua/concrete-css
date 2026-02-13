# Concrete CSS Framework

**A utility-first CSS framework for brutalist and minimalist interfaces**

Concrete is a lightweight, atomic CSS framework inspired by brutalist design principles. It provides low-level utility classes that let you build completely custom designs without fighting the framework.

## Philosophy

- **Utility-First**: Compose complex components from simple, single-purpose utilities
- **Token-Driven**: All values derived from a centralized design token system
- **Brutalist by Default**: Strong borders, monospace fonts, high contrast
- **Framework-Agnostic**: Works with React, PHP, vanilla HTML, or any tech stack
- **Zero Magic Numbers**: Every value comes from the configuration

## Quick Start

```bash
npm install concrete-css
```

```scss
// your-styles.scss
@use 'concrete-css' with (
  $primary-color: #000000,
  $font-family: 'Roboto Mono'
);
```

```html
<button class="px-4 py-2 bg-black text-white border-4 border-black uppercase">
  Click Me
</button>
```

## Features

- **~50KB** base (before purge)
- **Responsive** breakpoint system
- **Customizable** via Sass variables
- **Tree-shakeable** with PurgeCSS
- **TypeScript** autocomplete support (coming soon)

## Core Concepts

### Atomic Classes
Every utility does one thing:
- `border-4` - 4px border
- `uppercase` - text-transform: uppercase
- `flex` - display: flex

### Responsive Modifiers
```html
<div class="block md:flex lg:grid">
  <!-- Responsive layout -->
</div>
```

### State Modifiers
```html
<button class="bg-black hover:bg-gray-800">
  Hover me
</button>
```

## Documentation

- [Installation Guide](./docs/installation.md)
- [Core Utilities](./docs/utilities.md)
- [Customization](./docs/customization.md)
- [Migration from Other Frameworks](./docs/migration.md)
- [Examples](./examples)

## Comparison

| Feature | Concrete | Tailwind | Bootstrap |
|---------|----------|----------|-----------|
| Approach | Utility-first | Utility-first | Component |
| File Size | ~50KB | ~80KB | ~160KB |
| Brutalist | ✅ | ❌ | ❌ |
| Customizable | ✅ | ✅ | ⚠️ |
| Learning Curve | Low | Medium | Medium |

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Modern mobile browsers

## License

MIT © 2026

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)
