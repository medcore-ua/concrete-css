# Concrete CSS Framework - Repository Structure

This document explains the complete repository structure and how everything fits together.

## Directory Tree

```
concrete-framework/
│
├── README.md                      # Main documentation
├── CHANGELOG.md                   # Version history
├── CONTRIBUTING.md                # Contribution guidelines
├── LICENSE                        # MIT License
├── package.json                   # NPM configuration
├── .gitignore                     # Git ignore rules
│
├── scss/                          # Source Sass files (the heart of the framework)
│   ├── abstracts/                # Functions, mixins, variables, tokens
│   │   ├── _functions.scss       # Helper functions (px-to-rem, strip-unit, etc.)
│   │   ├── _variables.scss       # Global Sass variables (flags, config)
│   │   ├── _tokens.scss          # Design tokens (colors, spacing, etc.)
│   │   └── _mixins.scss          # Utility generator mixins
│   │
│   ├── base/                     # Foundation styles
│   │   ├── _reset.scss           # CSS reset/normalize
│   │   └── _typography.scss      # Base typography rules
│   │
│   ├── utilities/                # Utility class generators
│   │   ├── _api.scss             # Master configuration map
│   │   └── _core.scss            # Main generator loop
│   │
│   └── main.scss                 # Entry point (imports everything)
│
├── themes/                        # Example theme files
│   └── clinic-theme.scss         # Clinic manager theme extraction
│
├── dist/                          # Compiled CSS (generated, don't edit)
│   ├── concrete.css              # Full build
│   └── concrete.min.css          # Minified build
│
├── docs/                          # Documentation
│   ├── installation.md           # How to install and set up
│   ├── utilities.md              # Complete utility reference
│   ├── customization.md          # How to customize the framework
│   └── migration.md              # Migration guide from existing projects
│
└── examples/                      # Working examples
    ├── complete-page.html        # Full page example
    ├── components/               # Component examples
    └── migration/                # Before/after migration examples

```

## File Descriptions

### Root Files

- **README.md**: Main entry point, quick start, feature overview
- **package.json**: NPM package configuration, scripts, dependencies
- **CHANGELOG.md**: Version history following Keep a Changelog format
- **CONTRIBUTING.md**: Guidelines for contributors
- **LICENSE**: MIT License
- **.gitignore**: Files to exclude from Git

### SCSS Directory (`/scss`)

The source code of the framework. This is where all utilities are defined and generated.

#### Abstracts (`/scss/abstracts`)

**Purpose**: Shared Sass tools that don't output CSS directly

- `_functions.scss`: Helper functions
  - `px-to-rem()`: Convert pixels to rem
  - `strip-unit()`: Remove units from values
  - `generate-negatives()`: Create negative value maps
  - String manipulation helpers

- `_variables.scss`: Global configuration
  - Feature flags (`$enable-responsive`, `$enable-hover-states`)
  - Framework behavior settings
  - State modifiers list

- `_tokens.scss`: Design tokens (THE SOURCE OF TRUTH)
  - Color palette
  - Spacing scale
  - Typography values
  - Border values
  - Shadows
  - Breakpoints
  - All values organized in Sass maps

- `_mixins.scss`: Code generation engines
  - `generate-utilities()`: Main utility generator
  - `responsive-utilities()`: Responsive wrapper
  - `state-utilities()`: Hover/focus states
  - `generate-directional()`: Margin/padding directions

#### Base (`/scss/base`)

**Purpose**: Foundation styles that apply globally

- `_reset.scss`: Modern CSS reset
  - Box-sizing
  - Remove default margins/padding
  - Sensible defaults

- `_typography.scss`: Base typography
  - Body font settings
  - Heading defaults
  - Code elements
  - Minimal styling (utilities override this)

#### Utilities (`/scss/utilities`)

**Purpose**: The utility class generators

- `_api.scss`: Master configuration
  - Defines every utility to generate
  - Maps CSS properties to class prefixes
  - Specifies which values to use
  - Controls responsive/state generation

- `_core.scss`: The main loop
  - Imports the API
  - Generates base utilities
  - Generates spacing (margin/padding)
  - Generates responsive variants
  - Generates state modifiers

#### Main Entry (`/scss/main.scss`)

The file you import. It orchestrates everything:
1. Imports abstracts (functions, variables, tokens, mixins)
2. Imports base (reset, typography)
3. Imports utilities (core generator)

### Themes Directory (`/themes`)

**Purpose**: Example customizations showing how to extract existing designs

- `clinic-theme.scss`: Shows how to recreate the clinic manager design
  - Custom color values
  - Custom spacing
  - Brutalist aesthetic settings
  - Additional component classes

### Documentation (`/docs`)

**Purpose**: Complete framework documentation

- `installation.md`: Setup instructions for various environments
- `utilities.md`: Complete reference of all utility classes
- `customization.md`: How to customize colors, spacing, etc.
- `migration.md`: How to migrate from existing projects (THE DECOUPLING GUIDE)

### Examples (`/examples`)

**Purpose**: Working demonstrations

- `complete-page.html`: Full page using only utility classes
- `components/`: Common patterns (buttons, cards, forms)
- `migration/`: Before/after examples

## Build Process

### Development

```bash
npm run dev
# → Watches scss/main.scss
# → Compiles to dist/concrete.css
# → Auto-recompiles on changes
```

### Production

```bash
npm run build
# → Compiles scss/main.scss to dist/concrete.css

npm run build:min
# → Compiles and minifies to dist/concrete.min.css
```

## How It Works

### 1. Configuration (Tokens)

```scss
// scss/abstracts/_tokens.scss
$colors: (
  'black': #000000,
  'white': #ffffff,
  // ...
);
```

### 2. API Definition

```scss
// scss/utilities/_api.scss
$utilities: (
  'background-color': (
    'prefix': 'bg',
    'values': $colors
  )
);
```

### 3. Generation

```scss
// scss/utilities/_core.scss
@include generate-utilities($utilities);
// Outputs: .bg-black { background-color: #000000; }
```

### 4. Responsive Variants

```scss
// Automatically generates:
.md\:bg-black { ... }  // For tablets
.lg\:bg-black { ... }  // For desktops
```

## Customization Flow

### User's Custom Theme

```scss
// your-project/styles.scss
@use 'concrete-css' with (
  $color-primary-500: #ff0000,
  $spacing-unit: 0.5rem
);
```

### What Happens

1. User's values override defaults
2. Framework regenerates with new values
3. All utilities reflect custom tokens
4. No manual class creation needed

## Git Workflow

### Development Branch

```bash
git checkout -b feature/my-utility
# Make changes
git commit -m "Add new utility"
git push origin feature/my-utility
# Open Pull Request
```

### Release

```bash
# Update version
npm version patch|minor|major

# Build
npm run build

# Commit and tag
git commit -am "Release vX.X.X"
git tag vX.X.X
git push && git push --tags

# Publish
npm publish
```

## NPM Package Structure

When published, users get:

```
node_modules/concrete-css/
├── package.json
├── README.md
├── LICENSE
├── scss/              # For Sass users
│   └── ...
└── dist/              # For direct CSS import
    ├── concrete.css
    └── concrete.min.css
```

## Import Patterns

### Full Framework

```scss
@use 'concrete-css';
```

### With Customization

```scss
@use 'concrete-css' with ($color-primary-500: #ff0000);
```

### Partial Import

```scss
@use 'concrete-css/scss/base/reset';
@use 'concrete-css/scss/utilities/core';
```

### Direct CSS (No Sass)

```html
<link rel="stylesheet" href="node_modules/concrete-css/dist/concrete.min.css">
```

## Key Design Decisions

1. **Sass Module System**: Uses modern `@use`/`@forward` instead of `@import`
2. **Token-Driven**: All values come from configuration maps
3. **Generator Pattern**: Utilities generated via loops, not handwritten
4. **Mobile-First**: Responsive system starts from smallest screen
5. **Minimal Base**: Foundation is tiny, utilities do the work
6. **No Magic**: Every value traces back to a token

## Next Steps

1. Read the [Installation Guide](docs/installation.md)
2. Explore the [Utilities Reference](docs/utilities.md)
3. Check the [Customization Guide](docs/customization.md)
4. See the [Migration Guide](docs/migration.md) for decoupling
5. Study the [Examples](examples/)

## Maintenance

- **Dependencies**: Only Sass required
- **Browser Support**: Modern browsers (no IE11)
- **File Size**: ~50KB uncompressed, ~10KB minified+gzipped
- **Performance**: Tree-shakeable with PurgeCSS
