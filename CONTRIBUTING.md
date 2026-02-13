# Contributing to Concrete CSS

Thank you for considering contributing to Concrete! This document outlines the process and guidelines.

## Code of Conduct

Be respectful, professional, and constructive. We're building tools to help people.

## How to Contribute

### Reporting Bugs

1. Check existing [GitHub Issues](https://github.com/yourusername/concrete-css/issues)
2. Create a new issue with:
   - Clear title
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser/environment details
   - Code samples (if applicable)

### Suggesting Features

1. Open an issue with `[Feature Request]` in the title
2. Describe the use case
3. Explain why it belongs in core (not a custom extension)
4. Provide examples

### Pull Requests

#### Setup

```bash
git clone https://github.com/yourusername/concrete-css.git
cd concrete-css
npm install
npm run build
```

#### Development Workflow

```bash
# Watch for changes
npm run dev

# Test your changes
npm run test

# Lint
npm run lint

# Build
npm run build
```

#### PR Guidelines

1. **One feature per PR** - Keep changes focused
2. **Test thoroughly** - Include examples
3. **Update docs** - Document new utilities
4. **Follow conventions** - Match existing code style
5. **Commit messages** - Use clear, descriptive messages

```bash
# Good commit messages
git commit -m "Add border-radius utilities"
git commit -m "Fix responsive breakpoint bug"
git commit -m "Update customization docs"

# Bad commit messages
git commit -m "fix stuff"
git commit -m "updates"
```

## Project Structure

```
concrete-framework/
├── scss/                  # Source Sass files
│   ├── abstracts/        # Functions, mixins, tokens
│   ├── base/             # Reset, typography
│   └── utilities/        # Utility generators
├── dist/                 # Compiled CSS (don't edit)
├── docs/                 # Documentation
└── examples/             # Usage examples
```

## Adding New Utilities

### 1. Add to Tokens (if needed)

```scss
// scss/abstracts/_tokens.scss
$my-new-scale: (
  'sm': 1rem,
  'md': 2rem,
  'lg': 3rem
) !default;
```

### 2. Add to API

```scss
// scss/utilities/_api.scss
$utilities: map.merge($utilities, (
  'my-property': (
    'prefix': 'my',
    'values': $my-new-scale,
    'responsive': true,
    'states': false
  )
));
```

### 3. Document It

```markdown
<!-- docs/utilities.md -->
### My New Utility

\`\`\`html
<div class="my-sm">Small value</div>
<div class="my-lg">Large value</div>
\`\`\`

**Values**: `sm`, `md`, `lg`
```

### 4. Add Example

```html
<!-- examples/my-utility.html -->
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="../dist/concrete.css">
</head>
<body>
  <div class="my-sm">Example</div>
</body>
</html>
```

### 5. Test

```bash
npm run build
# Open examples/my-utility.html in browser
# Test responsive variants
# Test in multiple browsers
```

## Coding Standards

### Sass Style

```scss
// ✅ Good
$spacing: (
  '0': 0,
  '1': 0.25rem,
  '2': 0.5rem
) !default;

.my-class {
  padding: $spacing-4;
}

// ❌ Bad
$spacing: (0: 0, 1: 0.25rem);  // No quotes, no default
.my-class{padding:1rem;}       // No spacing
```

### Naming Conventions

- **Variables**: `$color-primary-500`, `$spacing-unit`
- **Maps**: `$colors`, `$spacing`, `$breakpoints`
- **Mixins**: `generate-utilities()`, `responsive-utilities()`
- **Classes**: `bg-black`, `text-center`, `md:flex`

### Comments

```scss
// =============================================================================
// SECTION TITLE
// Description of what this section does
// =============================================================================

/// Function description
/// @param {Type} $param - Parameter description
/// @return {Type} - Return value description
@function my-function($param) {
  // Implementation
}
```

## Testing Checklist

Before submitting a PR:

- [ ] Code builds without errors
- [ ] Changes work in Chrome, Firefox, Safari
- [ ] Responsive variants work
- [ ] State modifiers work (hover, focus)
- [ ] No breaking changes to existing utilities
- [ ] Documentation updated
- [ ] Examples added
- [ ] Commit messages are clear

## Release Process

(For maintainers)

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Build: `npm run build && npm run build:min`
4. Test: `npm run test`
5. Commit: `git commit -m "Release v1.x.x"`
6. Tag: `git tag v1.x.x`
7. Push: `git push && git push --tags`
8. Publish: `npm publish`

## Getting Help

- 📖 Read the [Documentation](./docs)
- 💬 Join our [Discord](https://discord.gg/concrete-css)
- 🐛 Open an [Issue](https://github.com/yourusername/concrete-css/issues)
- 📧 Email: maintainers@concrete-css.dev

## Recognition

Contributors will be added to:
- `README.md` contributors section
- `package.json` contributors field
- Release notes

Thank you for helping make Concrete better! 🎉
