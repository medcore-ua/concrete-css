# Concrete CSS

Concrete is a lightweight, atomic CSS framework inspired by brutalist design principles. It provides low-level utility classes that let you build completely custom designs without fighting the framework.

## Key Features

- **Utility-First**: Compose complex components from simple, single-purpose utilities
- **Token-Driven**: All values derived from a centralized design token system
- **Brutalist by Default**: Strong borders, monospace fonts, high contrast
- **Framework-Agnostic**: Works with React, PHP, vanilla HTML, or any tech stack

## Quick Start

```bash
npm install @medcore-ua/concrete-css
```

```scss
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
