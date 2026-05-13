# Concrete CSS Framework

[![License: CSSM Unlimited License v2.0](https://img.shields.io/badge/License-CSSM%20Unlimited%20License%20v2.0-blue.svg?logo=opensourceinitiative)](LICENSE)

Concrete is a lightweight, atomic CSS framework inspired by brutalist design principles. It provides low-level utility classes that let you build completely custom designs without fighting the framework.

## Philosophy

- **Utility-First**: Compose complex components from simple, single-purpose utilities.
- **Token-Driven**: All values derived from a centralized design token system.
- **Brutalist by Default**: Strong borders, monospace fonts, high contrast.
- **Framework-Agnostic**: Works with React, PHP, vanilla HTML, or any tech stack.
- **Zero Magic Numbers**: Every value comes from the configuration.

## Quick Start

```bash
npm install @medcore-ua/concrete-css
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

- **~50KB** base file size before any optimization or purging of unused styles.
- **Responsive** mobile-first breakpoint system that scales from small screens to large desktops.
- **Customizable** through Sass variables and configuration maps to match your design system.
- **Tree-shakeable** when used with PurgeCSS to remove all unused styles in production builds.
- **TypeScript** autocomplete support is planned for future releases.

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

## Contributing

Contributions are welcome and appreciated! Here's how you can contribute:

1. Fork the project
2. Create your feature branch `git checkout -b feature/AmazingFeature`)
3. Commit your changes `git commit -m 'Add some AmazingFeature'`)
4. Push to the branch `git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and adhere to the existing coding style.

## License

This library is licensed under the CSSM Unlimited License v2.0 (CSSM-ULv2). See the [LICENSE](LICENSE) file for details.
