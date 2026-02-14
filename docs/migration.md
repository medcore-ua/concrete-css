# Migration Guide

## Decoupling from Existing Projects

This guide helps you extract Concrete utilities from your existing project without breaking anything.

## Strategy Overview

1. **Audit Phase**: Identify which classes are utilities vs. components
2. **Extraction Phase**: Move utilities to Concrete framework
3. **Replacement Phase**: Update project to use Concrete
4. **Cleanup Phase**: Remove duplicated code

## Step 1: Audit Your CSS

### Identify Utility Classes

Run this script to find all utility-like classes:

```bash
# Find classes that look like utilities
grep -r "class=\"[^\"]*\b(m|p|text|bg|flex|grid|border)-" src/
```

### Categorize Classes

Create a spreadsheet:

| Class Name | Type | Used In | Migrate? |
|------------|------|---------|----------|
| `.border-4` | Utility | Global | ✅ Yes |
| `.hero-title` | Component | hero.php | ❌ No |
| `.text-center` | Utility | Multiple | ✅ Yes |

**Utilities to migrate**: Single-purpose, reusable classes  
**Components to keep**: Multi-property, context-specific classes

## Step 2: Extract Theme Values

### From Your Current CSS

```css
/* OLD: utility.css */
:root {
  --color-bg: #f5f5f5;
  --color-accent: #000000;
  --page-gutter: 1rem;
}
```

### To Concrete Theme File

```scss
// themes/clinic-theme.scss
@use 'concrete-css' with (
  $color-bg: #f5f5f5,
  $color-bg-alt: #ffffff,
  $color-accent: #000000,
  
  $spacing: (
    'gutter': 1rem,  // Custom value
    // ... other values
  )
);
```

## Step 3: Create Mapping Document

Map your old classes to new Concrete classes:

| Old Class | New Concrete Class | Notes |
|-----------|-------------------|-------|
| `.container` | `.max-w-5xl mx-auto px-4` | Multi-class |
| `.btn` | `.px-4 py-2 border-4 uppercase` | Base button |
| `.btn--primary` | `+ bg-black text-white` | Variant |
| `.top-strip` | Custom component | Keep as-is |

## Step 4: Parallel Implementation

Don't replace everything at once. Run both systems in parallel:

```html
<!-- OLD (still works) -->
<link rel="stylesheet" href="assets/css/utility.css">

<!-- NEW (added alongside) -->
<link rel="stylesheet" href="assets/css/concrete.css">
```

### Add Namespace to Old Styles (Optional)

```scss
// utility.css - namespace your old utilities
.legacy {
  .container { /* ... */ }
  .btn { /* ... */ }
}
```

```html
<!-- OLD -->
<div class="legacy">
  <div class="container">...</div>
</div>

<!-- NEW -->
<div class="max-w-5xl mx-auto px-4">...</div>
```

## Step 5: Incremental Migration

### Page-by-Page Approach

```php
// header.php - Feature flag
<?php $use_concrete = true; ?>

<?php if ($use_concrete): ?>
  <link rel="stylesheet" href="/css/concrete.css">
<?php else: ?>
  <link rel="stylesheet" href="/css/utility.css">
<?php endif; ?>
```

### Component-by-Component

```html
<!-- OLD button -->
<button class="btn btn--primary">Click</button>

<!-- NEW button (migrate incrementally) -->
<button class="px-6 py-3 bg-black text-white border-4 uppercase font-bold hover:bg-gray-800">
  Click
</button>
```

## Step 6: Handle Custom Components

### Keep Component Classes

Not everything should be utilities:

```scss
// components/hero.scss
.hero {
  // Use Concrete utilities via @apply (if using PostCSS)
  // OR compose in HTML
}
```

```html
<!-- Option 1: Pure utilities -->
<section class="border-b-4 bg-gray-100 py-8">
  <div class="max-w-5xl mx-auto px-4">
    <h1 class="text-4xl uppercase font-black">Title</h1>
  </div>
</section>

<!-- Option 2: Component class + utilities -->
<section class="hero">
  <div class="container">
    <h1 class="hero__title text-4xl">Title</h1>
  </div>
</section>
```

### Wrapper Components (Recommended)

For frequently used patterns:

```php
// components/button.php
function render_button($text, $variant = 'primary') {
  $classes = 'px-6 py-3 border-4 uppercase font-bold';
  
  if ($variant === 'primary') {
    $classes .= ' bg-black text-white hover:bg-gray-800';
  } else {
    $classes .= ' bg-white text-black hover:bg-gray-100';
  }
  
  return "<button class=\"$classes\">$text</button>";
}
```

## Step 7: Migration Checklist

### Pre-Migration

- [ ] Audit all utility classes
- [ ] Document theme values
- [ ] Create mapping document
- [ ] Set up Concrete with custom theme
- [ ] Test Concrete build

### During Migration

- [ ] Install Concrete alongside existing CSS
- [ ] Migrate one page/component at a time
- [ ] Test each migration thoroughly
- [ ] Update documentation
- [ ] Train team on new system

### Post-Migration

- [ ] Remove old utility CSS
- [ ] Clean up unused classes
- [ ] Optimize with PurgeCSS
- [ ] Update build process
- [ ] Archive old CSS for reference

## Migration Patterns

### Pattern 1: Direct Replacement

```html
<!-- Before -->
<div class="section__header">...</div>

<!-- After -->
<div class="mb-4">...</div>
```

### Pattern 2: Multi-Class Composition

```html
<!-- Before -->
<div class="container">...</div>

<!-- After -->
<div class="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">...</div>
```

### Pattern 3: Helper Functions (PHP)

```php
// helpers.php
function container_classes() {
  return 'max-w-5xl mx-auto px-4 md:px-6 lg:px-8';
}

function section_classes() {
  return 'border-b-4 py-6 md:py-8';
}
```

```html
<div class="<?= container_classes() ?>">...</div>
<section class="<?= section_classes() ?>">...</section>
```

### Pattern 4: React Components

```jsx
// components/Container.jsx
export function Container({ children, className = '' }) {
  return (
    <div className={`max-w-5xl mx-auto px-4 md:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
```

## Common Pitfalls

### ❌ Don't: Replace everything at once

```html
<!-- Risky: Everything breaks if something goes wrong -->
<link rel="stylesheet" href="assets/css/concrete.css">
```

### ✅ Do: Migrate incrementally

```html
<!-- Safe: Both systems work -->
<link rel="stylesheet" href="assets/css/utility.css">
<link rel="stylesheet" href="assets/css/concrete.css">
```

### ❌ Don't: Ignore component classes

```html
<!-- Lost semantic meaning -->
<div class="bg-white border-4 p-8">...</div>
```

### ✅ Do: Keep meaningful components

```html
<!-- Clear intent -->
<div class="doctor-card">
  <div class="p-8">...</div>
</div>
```

## Testing Strategy

### Visual Regression Testing

```bash
# Before migration
npm run screenshots -- --output baseline/

# After migration
npm run screenshots -- --output current/

# Compare
npm run compare-screenshots
```

### Manual Testing Checklist

- [ ] Desktop layout (1920x1080)
- [ ] Tablet layout (768x1024)
- [ ] Mobile layout (375x667)
- [ ] All interactive states (hover, focus, active)
- [ ] All pages render correctly
- [ ] No console errors
- [ ] Forms still work
- [ ] Navigation functions

## Rollback Plan

Always have a way back:

```bash
# Keep old CSS in version control
git branch migration-concrete
git checkout -b migration-backup

# If something breaks
git checkout main
git cherry-pick <safe-commits>
```

## Framework-Specific Migrations

### From Tailwind CSS

Most Tailwind classes work identically:

```html
<!-- Tailwind -->
<div class="flex items-center justify-between p-4 bg-black text-white">

<!-- Concrete (same) -->
<div class="flex items-center justify-between p-4 bg-black text-white">
```

Differences:
- Tailwind: `border` (1px)
- Concrete: `border-1` (explicit width)

### From Bootstrap

```html
<!-- Bootstrap -->
<div class="container">
  <div class="row">
    <div class="col-md-6">...</div>
  </div>
</div>

<!-- Concrete -->
<div class="max-w-5xl mx-auto px-4">
  <div class="grid md:grid-cols-2 gap-4">
    <div>...</div>
  </div>
</div>
```

### From Custom CSS

See full examples in [examples/migration/](../examples/migration/)

## Support

If you encounter issues:

1. Check the [FAQ](./faq.md)
2. Search [GitHub Issues](https://github.com/medcore-ua/concrete-css/issues)
3. Join our [Discord](https://discord.gg/concrete-css)
4. Read migration examples in `/examples`

## Success Stories

> "We migrated our 50-page clinic management system in 2 weeks using the page-by-page approach. Zero downtime." - Hospital IT Team

> "Created helper functions for common patterns. Made migration painless." - PHP Developer

Your success story here!
