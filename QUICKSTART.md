# 🚀 Quick Start Guide

## What You Have

A complete, production-ready CSS framework called **Concrete CSS** - extracted and decoupled from your clinic manager project.

## Framework Structure

```
concrete-framework/
├── 📦 Package files (package.json, LICENSE, README.md)
├── 📁 scss/ - Source Sass files (customize here)
├── 📁 docs/ - Complete documentation
├── 📁 themes/ - Example theme showing clinic extraction
├── 📁 examples/ - Working HTML examples
└── 📄 STRUCTURE.md - Detailed architecture explanation
```

## Getting Started (3 Steps)

### Step 1: Install Dependencies

```bash
cd concrete-framework
npm install
```

This installs only `sass` - the single dependency needed to build the framework.

### Step 2: Build the Framework

```bash
npm run build
```

This generates:
- `dist/concrete.css` - Full build (~50KB)
- `dist/concrete.min.css` - Minified build (~30KB)

### Step 3: Use It

#### Option A: Direct HTML

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="dist/concrete.css">
</head>
<body class="bg-gray-100">
  <div class="max-w-5xl mx-auto p-8">
    <h1 class="text-4xl font-black uppercase">Hello Concrete!</h1>
    <button class="px-6 py-3 bg-black text-white border-4 uppercase">
      Button
    </button>
  </div>
</body>
</html>
```

#### Option B: With Customization (Sass)

```scss
// your-theme.scss
@use 'concrete-css' with (
  $color-primary-500: #ff0000,
  $spacing-unit: 0.5rem
);
```

## Development Workflow

### Watch Mode (Auto-rebuild)

```bash
npm run dev
```

Watches `scss/` directory and rebuilds on changes.

### Customize Tokens

Edit `scss/abstracts/_tokens.scss`:

```scss
$colors: (
  'brand': #your-color,
  // ...
);
```

Then rebuild: `npm run build`

## Migration from Your Clinic Project

### Strategy: Parallel Implementation

Don't remove your old CSS immediately. Run both:

```html
<!-- Keep working old CSS -->
<link rel="stylesheet" href="assets/css/utility.css">

<!-- Add new Concrete CSS -->
<link rel="stylesheet" href="assets/css/concrete.css">
```

### Migrate Page by Page

```php
// header.php
<?php $use_concrete = isset($_GET['concrete']); ?>

<?php if ($use_concrete): ?>
  <link rel="stylesheet" href="/css/concrete.css">
<?php else: ?>
  <link rel="stylesheet" href="/css/utility.css">
<?php endif; ?>
```

Test with: `yoursite.com/page?concrete=1`

### Class Mapping

Your old CSS → New Concrete classes:

| Old | New |
|-----|-----|
| `.container` | `.max-w-5xl mx-auto px-4` |
| `.btn` | `.px-6 py-3 border-4 uppercase` |
| `.section` | `.border-b-4 py-8` |

See `docs/migration.md` for complete guide.

## Clinic Theme

Your existing design is preserved in `themes/clinic-theme.scss`:

```scss
@use 'concrete-css' with (
  $color-bg: #f5f5f5,
  $color-accent: #000000,
  // ... your exact colors
);
```

Build it:

```bash
sass themes/clinic-theme.scss dist/clinic.css
```

## Documentation

- **📖 README.md** - Framework overview
- **📦 STRUCTURE.md** - Repository architecture
- **🔧 docs/installation.md** - Setup instructions
- **📚 docs/utilities.md** - All utility classes
- **🎨 docs/customization.md** - How to customize
- **🔄 docs/migration.md** - Decoupling guide

## Publishing to NPM (When Ready)

```bash
# 1. Update package.json with your info
npm init --scope=@yourname

# 2. Build
npm run build

# 3. Publish
npm publish --access public
```

Then install in projects:

```bash
npm install @yourname/concrete-css
```

## Common Tasks

### Add New Color

```scss
// scss/abstracts/_tokens.scss
$colors: (
  // Add your color
  'custom-blue': #0066cc,
  // ...
);
```

Rebuild → Now available as `.bg-custom-blue`, `.text-custom-blue`

### Add New Spacing Value

```scss
// scss/abstracts/_tokens.scss
$spacing: (
  '14': 3.5rem,  // 56px
  // ...
);
```

Rebuild → Now available as `.m-14`, `.p-14`, `.gap-14`

### Add New Utility

```scss
// scss/utilities/_api.scss
$utilities: (
  // Add your utility
  'cursor': (
    'prefix': 'cursor',
    'values': (
      'pointer': pointer,
      'default': default
    )
  ),
  // ...
);
```

Rebuild → Now available as `.cursor-pointer`, `.cursor-default`

## Framework vs. Theme

**Framework** (concrete-css):
- Core utilities (flex, grid, spacing)
- Customizable via tokens
- Published to NPM
- Reusable across projects

**Theme** (clinic-theme):
- Your specific colors/spacing
- Builds on top of framework
- Project-specific
- Not published (internal use)

## Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run build`
3. ✅ Open `examples/complete-page.html` in browser
4. ✅ Read `docs/migration.md`
5. ✅ Start migrating one page
6. ✅ Customize tokens as needed
7. ✅ Publish to NPM when ready

## Need Help?

- Check `STRUCTURE.md` for architecture details
- Read `docs/migration.md` for decoupling strategies
- See `examples/` for working code
- Open an issue on GitHub

## Success Checklist

- [ ] Framework builds without errors
- [ ] Examples render correctly
- [ ] Can customize colors via tokens
- [ ] Old and new CSS can coexist
- [ ] Migration plan is clear
- [ ] Team understands utility-first approach
- [ ] Ready to publish or deploy

---

**You now have a professional, reusable CSS framework extracted from your project.** 🎉

The framework is decoupled, documented, and ready to use across multiple projects or publish to NPM.
