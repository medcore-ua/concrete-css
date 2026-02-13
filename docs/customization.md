# Customization Guide

## Philosophy

Concrete is designed to be customized at the **token level**. Rather than overriding generated classes, you modify the source maps that generate them.

## Basic Customization

### Method 1: Sass Variables (Simple)

```scss
// your-theme.scss
@use 'concrete-css' with (
  // Colors
  $color-primary-500: #ff0000,
  $color-success: #00ff00,
  
  // Spacing
  $spacing-unit: 0.5rem,  // 8px instead of 4px
  
  // Typography
  $font-family-mono: 'JetBrains Mono',
  
  // Borders
  $border-thick: 6px solid #000
);
```

### Method 2: Override Token Maps (Advanced)

```scss
// your-theme.scss
@use 'sass:map';
@use 'concrete-css/scss/abstracts/tokens' as tokens with (
  $colors: map.merge(tokens.$colors, (
    'brand-red': #ff0000,
    'brand-blue': #0000ff
  )),
  
  $spacing: map.merge(tokens.$spacing, (
    '7': 1.75rem,
    '14': 3.5rem
  ))
);

@use 'concrete-css/scss/main';
```

## Customization Examples

### Example 1: Brand Colors

```scss
@use 'concrete-css' with (
  $color-primary-500: #6366f1,   // Indigo
  $color-primary-600: #4f46e5,
  
  $colors: (
    'brand': #6366f1,
    'brand-dark': #4f46e5,
    'brand-light': #a5b4fc
  )
);
```

Now you can use:

```html
<div class="bg-brand text-white">
  Branded component
</div>
```

### Example 2: Custom Spacing Scale

```scss
@use 'concrete-css' with (
  $spacing-unit: 0.5rem,  // 8px base
  
  $spacing: (
    '0': 0,
    '1': 0.5rem,   // 8px
    '2': 1rem,     // 16px
    '3': 1.5rem,   // 24px
    '4': 2rem,     // 32px
    '6': 3rem,     // 48px
    '8': 4rem      // 64px
  )
);
```

### Example 3: Custom Breakpoints

```scss
@use 'concrete-css' with (
  $breakpoints: (
    'mobile': 480px,
    'tablet': 768px,
    'desktop': 1024px,
    'wide': 1440px
  ),
  
  $breakpoint-names: ('mobile', 'tablet', 'desktop', 'wide')
);
```

Usage:

```html
<div class="block tablet:flex desktop:grid">
  Custom breakpoints
</div>
```

### Example 4: Different Font Stack

```scss
@use 'concrete-css' with (
  $font-family-mono: 'Source Code Pro',
  $font-family-sans: 'Inter',
  $font-family-serif: 'Crimson Pro'
);
```

### Example 5: Brutalist Settings

```scss
@use 'concrete-css' with (
  // Thick borders everywhere
  $border-widths: (
    '0': 0,
    '2': 2px,
    '4': 4px,
    '8': 8px,
    '12': 12px
  ),
  
  // No border radius
  $border-radius: (
    'none': 0
  ),
  
  // Hard shadows
  $shadows: (
    'none': none,
    'brutal': 8px 8px 0 rgba(0, 0, 0, 1)
  )
);
```

## Adding Custom Utilities

### Method 1: Extend the API

```scss
// custom-utilities.scss
@use 'concrete-css/scss/abstracts/tokens' as *;
@use 'concrete-css/scss/abstracts/mixins' as *;

// Add custom utilities
$custom-utilities: (
  'backdrop-filter': (
    'prefix': 'backdrop',
    'values': (
      'blur': blur(10px),
      'none': none
    ),
    'responsive': false,
    'states': false
  )
);

@include generate-utilities($custom-utilities);
```

### Method 2: Handwritten Utilities

```scss
// custom-utilities.scss

// Custom animation
@keyframes slide-in {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

.animate-slide-in {
  animation: slide-in 0.3s ease-out;
}

// Custom gradient
.bg-gradient-brutal {
  background: linear-gradient(
    45deg,
    #000 0%,
    #000 50%,
    #fff 50%,
    #fff 100%
  );
}
```

## Theme Variants

Create multiple themes:

```scss
// themes/_dark.scss
@use 'concrete-css' with (
  $color-bg: #000000,
  $color-bg-alt: #1a1a1a,
  $color-text: #ffffff
);

// themes/_light.scss
@use 'concrete-css' with (
  $color-bg: #ffffff,
  $color-bg-alt: #f5f5f5,
  $color-text: #000000
);
```

Compile separately or use CSS custom properties.

## Feature Flags

Control what gets generated:

```scss
@use 'concrete-css' with (
  $enable-responsive: true,
  $enable-hover-states: true,
  $enable-focus-states: true,
  $enable-negative-margins: false,
  $enable-important: false
);
```

## Performance Optimization

### Disable Unused Utilities

Comment out utilities you don't need in `scss/utilities/_api.scss`:

```scss
$utilities: (
  // 'display': (...),  // ← Commented out
  'flex-direction': (...),
  // ...
);
```

### Custom Build

Create a minimal build:

```scss
// minimal-build.scss
@use 'concrete-css/scss/base/reset';
@use 'concrete-css/scss/base/typography';

// Only the utilities you need
@use 'concrete-css/scss/abstracts/tokens' as *;
@use 'concrete-css/scss/abstracts/mixins' as *;

$minimal-utilities: (
  'display': (...),
  'flex-direction': (...),
  'background-color': (...)
);

@include generate-utilities($minimal-utilities);
```

## CSS Custom Properties (Experimental)

Use CSS variables for runtime theming:

```scss
@use 'concrete-css' with (
  $use-css-variables: true
);
```

This generates:

```css
:root {
  --color-primary: #0ea5e9;
  --spacing-4: 1rem;
}

.bg-primary {
  background-color: var(--color-primary);
}
```

## Component Library Integration

### shadcn/ui Style Pattern

```scss
// components/_button.scss
@mixin button-base {
  @apply px-4 py-2 border-4 uppercase font-bold;
}

.btn-primary {
  @include button-base;
  @apply bg-black text-white hover:bg-gray-800;
}

.btn-secondary {
  @include button-base;
  @apply bg-white text-black border-black hover:bg-gray-100;
}
```

## Migration from Existing Codebase

See [Migration Guide](./migration.md) for strategies to migrate from:
- Tailwind CSS
- Bootstrap
- Custom CSS
- Other utility frameworks

## Best Practices

1. **Customize at the token level**, not at the class level
2. **Use Sass maps** for complex customizations
3. **Create theme files** for different contexts
4. **Document your tokens** in a style guide
5. **Use feature flags** to keep builds lean
6. **Test thoroughly** after customization

## Resources

- [Sass Module Documentation](https://sass-lang.com/documentation/at-rules/use)
- [Design Tokens Specification](https://tr.designtokens.org/)
- [Concrete Examples](../examples)
