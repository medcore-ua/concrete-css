# Installation Guide

## NPM Installation (Recommended)

```bash
npm install concrete-css
```

## Yarn

```bash
yarn add concrete-css
```

## CDN (Quick Start)

For prototyping or simple projects:

```html
<link rel="stylesheet" href="https://unpkg.com/concrete-css/dist/concrete.min.css">
```

## Using with Sass

### Basic Setup

```scss
// your-styles.scss
@use 'concrete-css' as *;

// Your custom styles here
```

### With Customization

```scss
// your-styles.scss
@use 'concrete-css' with (
  $color-primary-500: #ff0000,
  $font-family-mono: 'JetBrains Mono',
  $spacing-unit: 0.5rem
);
```

### Importing Only What You Need

```scss
// Import just the base
@use 'concrete-css/scss/base/reset';
@use 'concrete-css/scss/base/typography';

// Import specific utilities
@use 'concrete-css/scss/utilities/core';
```

## Build Tools

### Webpack

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
```

### Vite

```javascript
// vite.config.js
export default {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "concrete-css" as *;`
      }
    }
  }
};
```

### Next.js

```javascript
// next.config.js
module.exports = {
  sassOptions: {
    includePaths: ['./node_modules']
  }
};
```

## PostCSS Setup (Production)

For tree-shaking unused CSS:

```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss')({
      content: [
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.tsx'
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
};
```

## Framework Integration

### React

```jsx
// App.jsx
import 'concrete-css/dist/concrete.css';

function Button({ children }) {
  return (
    <button className="px-4 py-2 bg-black text-white border-4 uppercase">
      {children}
    </button>
  );
}
```

### Vue

```vue
<!-- App.vue -->
<style src="concrete-css/dist/concrete.css"></style>

<template>
  <button class="px-4 py-2 bg-black text-white border-4 uppercase">
    Click me
  </button>
</template>
```

### PHP

```php
<!-- header.php -->
<link rel="stylesheet" href="/assets/css/concrete.css">
```

## Verifying Installation

Create a test file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="path/to/concrete.css">
</head>
<body class="bg-gray-100">
  <div class="max-w-3xl mx-auto p-8">
    <h1 class="text-4xl font-black uppercase mb-4">Concrete CSS</h1>
    <p class="text-base mb-4">If this is styled, it's working!</p>
    <button class="px-6 py-3 bg-black text-white border-4 uppercase">
      Test Button
    </button>
  </div>
</body>
</html>
```

## Next Steps

- Read the [Core Utilities](./utilities.md) documentation
- Explore [Customization](./customization.md) options
- Check out [Examples](../examples)
