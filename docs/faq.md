# Frequently Asked Questions (FAQ)

## General Questions

### What is Concrete CSS?

Concrete is a utility-first CSS framework inspired by brutalist design principles. It provides low-level utility classes that let you build custom designs without fighting the framework.

### How is Concrete different from Tailwind CSS?

**Similarities:**
- Both are utility-first frameworks
- Similar class naming conventions (`.bg-black`, `.flex`, `.px-4`)
- Both use design tokens
- Both are highly customizable

**Differences:**
- Concrete has a brutalist aesthetic by default (thick borders, hard shadows)
- Concrete is smaller (~50KB vs ~80KB base)
- Concrete uses Sass instead of PostCSS
- Concrete has explicit border widths (`.border-4` not just `.border`)

### Is Concrete production-ready?

Yes! Concrete is a complete, tested framework ready for production use. It includes:
- ✅ Complete utility system
- ✅ Responsive breakpoints
- ✅ State modifiers (hover, focus)
- ✅ Tree-shakeable with PurgeCSS
- ✅ Cross-browser compatible

### What's the file size?

- **Full build**: ~50KB uncompressed
- **Minified**: ~30KB
- **With PurgeCSS**: ~5-10KB (only used classes)

---

## Installation & Setup

### Do I need Node.js to use Concrete?

**No** - if you use the pre-built CSS:
```html
<link rel="stylesheet" href="dist/concrete.min.css">
```

**Yes** - if you want to customize via Sass:
```bash
npm install @medcore-ua/concrete-css
```

### Can I use Concrete with CDN?

Yes, for prototyping:
```html
<link rel="stylesheet" href="https://unpkg.com/@medcore-ua/concrete-css/dist/concrete.min.css">
```

**Note**: For production, we recommend installing via npm for better performance and customization.

### What are the browser requirements?

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Modern mobile browsers

**Note**: No IE11 support. Concrete uses modern CSS features.

### Can I use Concrete without Sass?

Yes! Use the pre-built CSS file:
```html
<link rel="stylesheet" href="node_modules/concrete-css/dist/concrete.css">
```

But you won't be able to customize tokens without Sass.

---

## Customization

### How do I change colors?

Edit the Sass configuration:
```scss
@use 'concrete-css' with (
  $color-primary-500: #your-color
);
```

Then rebuild: `npm run build`

### How do I add custom utilities?

Two ways:

**Option 1: Extend the API**
```scss
// custom.scss
@use 'concrete-css/scss/abstracts/mixins' as *;

$my-utilities: (
  'cursor': (
    'prefix': 'cursor',
    'values': ('pointer': pointer, 'default': default)
  )
);

@include generate-utilities($my-utilities);
```

**Option 2: Write custom CSS**
```css
.my-custom-class {
  /* your styles */
}
```

### Can I change the spacing scale?

Yes:
```scss
@use 'concrete-css' with (
  $spacing-unit: 0.5rem,  // 8px instead of 4px
  
  $spacing: (
    '0': 0,
    '1': 0.5rem,
    '2': 1rem,
    // ...
  )
);
```

### How do I disable responsive utilities?

```scss
@use 'concrete-css' with (
  $enable-responsive: false
);
```

This reduces file size significantly.

### Can I use CSS custom properties instead of Sass variables?

Experimental support:
```scss
@use 'concrete-css' with (
  $use-css-variables: true
);
```

This generates:
```css
:root {
  --color-primary: #0ea5e9;
}
.bg-primary {
  background-color: var(--color-primary);
}
```

---

## Usage & Development

### How do I build for production?

```bash
# 1. Build framework
npm run build

# 2. Remove unused CSS (PurgeCSS)
npm install -D @fullhuman/postcss-purgecss

# 3. Configure PostCSS (see docs/installation.md)

# 4. Final CSS will be ~5-10KB
```

### Can I use Concrete with React?

Yes! See `docs/installation.md` for setup.

```jsx
import 'concrete-css/dist/concrete.css';

function Button() {
  return (
    <button className="px-6 py-3 bg-black text-white border-4 uppercase">
      Click me
    </button>
  );
}
```

### Can I use Concrete with Vue?

Yes:
```vue
<template>
  <button class="px-6 py-3 bg-black text-white border-4 uppercase">
    Click me
  </button>
</template>

<style src="concrete-css/dist/concrete.css"></style>
```

### How do I use Concrete with PHP?

See `docs/migration.md` for examples. Basic usage:

```php
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/css/concrete.css">
</head>
<body>
  <div class="max-w-5xl mx-auto p-8">
    <!-- Your content -->
  </div>
</body>
</html>
```

### Should I use utility classes or components?

**Use utilities for:**
- ✅ One-off designs
- ✅ Rapid prototyping
- ✅ Simple layouts
- ✅ Maximum flexibility

**Use components for:**
- ✅ Repeated patterns (buttons, cards)
- ✅ Complex compositions
- ✅ Team consistency
- ✅ Semantic meaning

**Best practice**: Start with utilities, extract to components when you repeat the same class combinations 3+ times.

---

## Migration

### Can I use Concrete alongside my existing CSS?

Yes! This is recommended during migration:

```html
<!-- Old CSS (still works) -->
<link rel="stylesheet" href="/css/old-styles.css">

<!-- New Concrete (added alongside) -->
<link rel="stylesheet" href="/css/concrete.css">
```

See `docs/migration.md` for detailed strategies.

### How long does migration take?

Depends on project size:
- **Small site** (5-10 pages): 1-2 days
- **Medium site** (20-50 pages): 1-2 weeks
- **Large site** (100+ pages): 4-8 weeks

**Tip**: Migrate page-by-page, not all at once.

### Will migration break my existing site?

No, if you follow the parallel implementation strategy:
1. Keep old CSS
2. Add Concrete CSS
3. Migrate one page at a time
4. Test thoroughly
5. Remove old CSS only when everything works

### Do I need to rewrite all my HTML?

No! You can:
1. Keep component classes (`.hero`, `.card`)
2. Use utilities inside components
3. Gradually replace inline styles
4. Mix approaches as needed

---

## Performance

### Why is my CSS file so large?

The full framework includes 2,000+ utility classes. Solutions:

1. **Use PurgeCSS** (recommended):
   ```bash
   # Removes unused classes
   # Final size: ~5-10KB
   ```

2. **Disable unused features**:
   ```scss
   @use 'concrete-css' with (
     $enable-responsive: false,
     $enable-hover-states: false
   );
   ```

3. **Import only what you need**:
   ```scss
   @use 'concrete-css/scss/base/reset';
   @use 'concrete-css/scss/utilities/core';
   ```

### How do I optimize for production?

```bash
# 1. Build minified
npm run build:min

# 2. Use PurgeCSS
# (see docs/installation.md)

# 3. Enable gzip on server
# (reduces size by 70-80%)

# 4. Use CDN for caching
```

### Does Concrete support tree-shaking?

Yes! Use PurgeCSS to remove unused classes. Configuration:

```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.html', './src/**/*.js'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
}
```

---

## Troubleshooting

### Classes aren't working

**Check:**
1. ✅ CSS file is loaded: View page source, check `<link>` tag
2. ✅ Class name is correct: `.bg-black` not `.bg-Black`
3. ✅ No typos: `.flex` not `.felx`
4. ✅ Responsive prefix: `.md:flex` requires screen width ≥768px
5. ✅ Build was run: `npm run build` after changes

### Responsive classes don't work

**Check:**
1. ✅ Viewport meta tag exists:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```
2. ✅ Screen size is correct: `.md:flex` only works ≥768px
3. ✅ Colon is escaped in CSS: `.md\:flex` (automatic in build)

### Hover states don't work

**Check:**
1. ✅ Hover states are enabled:
   ```scss
   @use 'concrete-css' with (
     $enable-hover-states: true  // default
   );
   ```
2. ✅ Correct syntax: `.hover:bg-black` not `.bg-black:hover`
3. ✅ Device supports hover (not touch-only)

### Build fails with Sass error

**Common issues:**

**Error: "Can't find module 'sass'"**
```bash
npm install sass --save-dev
```

**Error: "Undefined variable"**
- Check you're using `@use` not `@import`
- Variables must be in same module

**Error: "Invalid CSS"**
- Check Sass syntax
- Run `npm run lint`

### PurgeCSS removes classes I need

Add them to safelist:
```javascript
// postcss.config.js
{
  safelist: ['hover:bg-black', 'md:flex', 'my-custom-class']
}
```

---

## Contributing

### How can I contribute?

See `CONTRIBUTING.md` for detailed guidelines. Quick start:

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

### I found a bug. What should I do?

1. Check existing [GitHub Issues](https://github.com/medcore-ua/concrete-css/issues)
2. Create new issue with:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser/environment details
   - Code sample

### Can I request a new utility?

Yes! Open an issue with:
- Use case explanation
- Why it belongs in core (not custom)
- Example syntax
- Alternative solutions you considered

### How do I run tests?

```bash
npm install
npm run test
```

Currently minimal tests - contributions welcome!

---

## Licensing

### What license does Concrete use?

CSSM Unlimited License v2.0 (CSSM-ULv2). See the [LICENSE](../LICENSE) file.

### Can I use Concrete in commercial projects?

Yes! The license allows commercial use. See LICENSE file for details.

### Can I modify Concrete?

Yes! You can modify, adapt, and create derivative works. See LICENSE for terms.

### Do I need to give credit?

Check the LICENSE file for attribution requirements.

---

## Community

### Where can I get help?

- 📖 Read [Documentation](../docs)
- 🐛 Open [GitHub Issue](https://github.com/medcore-ua/concrete-css/issues)
- 📧 Email: hi@medcore.pp.ua

### How do I stay updated?

- ⭐ Star the [GitHub repo](https://github.com/medcore-ua/concrete-css)
- 👁️ Watch for releases
- 📘 Follow on [Facebook](https://facebook.com/medcore.ua)

### Can I hire someone to help with Concrete?

While the framework is open-source, you can:
- Post on job boards for CSS developers
- Look for freelancers familiar with utility-first CSS
- Contact framework contributors (check GitHub)

---

## Still have questions?

- Check the [Documentation](../docs)
- Search [GitHub Issues](https://github.com/medcore-ua/concrete-css/issues)
- Open a new issue
- Join the community discussion

**Can't find your question? [Submit it here](https://github.com/medcore-ua/concrete-css/issues/new) and we'll add it to the FAQ!**
