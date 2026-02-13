# Core Utilities Reference

## Layout

### Display

```html
<div class="block">Block element</div>
<div class="inline-block">Inline block</div>
<div class="flex">Flex container</div>
<div class="grid">Grid container</div>
<div class="hidden">Hidden element</div>
```

**Classes**: `block`, `inline-block`, `inline`, `flex`, `inline-flex`, `grid`, `inline-grid`, `table`, `hidden`

### Flexbox

#### Direction
```html
<div class="flex flex-row">Horizontal</div>
<div class="flex flex-col">Vertical</div>
```

**Classes**: `flex-row`, `flex-row-reverse`, `flex-col`, `flex-col-reverse`

#### Justify Content
```html
<div class="flex justify-center">Centered</div>
<div class="flex justify-between">Spaced</div>
```

**Classes**: `justify-start`, `justify-end`, `justify-center`, `justify-between`, `justify-around`, `justify-evenly`

#### Align Items
```html
<div class="flex items-center">Vertically centered</div>
```

**Classes**: `items-start`, `items-end`, `items-center`, `items-baseline`, `items-stretch`

### Grid

```html
<div class="grid grid-cols-3 gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

**Classes**: `grid-cols-1` through `grid-cols-12`, `grid-cols-none`

## Spacing

### Margin

```html
<div class="m-4">All sides</div>
<div class="mt-2">Top only</div>
<div class="mx-auto">Horizontal auto</div>
```

**Prefixes**: `m`, `mt`, `mr`, `mb`, `ml`, `mx`, `my`  
**Values**: `0`, `1` (4px), `2` (8px), `3` (12px), `4` (16px), `6` (24px), `8` (32px), `10`, `12`, `16`, `20`, `24`, `32`, `auto`

### Padding

```html
<div class="p-4">All sides</div>
<div class="px-6">Horizontal</div>
<div class="py-2">Vertical</div>
```

**Prefixes**: `p`, `pt`, `pr`, `pb`, `pl`, `px`, `py`  
**Values**: Same as margin (except no `auto`)

### Negative Margin

```html
<div class="-mt-4">Negative top margin</div>
<div class="-ml-2">Negative left margin</div>
```

## Colors

### Background

```html
<div class="bg-black">Black background</div>
<div class="bg-white">White background</div>
<div class="bg-gray-500">Gray background</div>
```

**Values**: `white`, `black`, `gray-50` through `gray-900`, `primary-50` through `primary-900`, `success`, `warning`, `error`, `info`, `transparent`, `current`

### Text Color

```html
<p class="text-white">White text</p>
<p class="text-gray-700">Gray text</p>
```

**Values**: Same as background colors

## Borders

### Border Width

```html
<div class="border-0">No border</div>
<div class="border-1">1px border</div>
<div class="border-4">4px border</div>
```

**Values**: `0`, `1`, `2`, `4`, `8`

### Border Style

```html
<div class="border-solid">Solid border</div>
<div class="border-dashed">Dashed border</div>
```

**Values**: `solid`, `dashed`, `dotted`, `none`

### Border Radius

```html
<div class="rounded-none">Sharp corners</div>
<div class="rounded-base">Small radius</div>
<div class="rounded-full">Fully rounded</div>
```

**Values**: `none`, `sm`, `base`, `md`, `lg`, `xl`, `2xl`, `full`

## Typography

### Font Family

```html
<p class="font-mono">Monospace text</p>
<p class="font-sans">Sans-serif text</p>
```

**Values**: `mono`, `sans`, `serif`

### Font Size

```html
<p class="text-xs">Extra small</p>
<p class="text-base">Base size</p>
<p class="text-4xl">Large heading</p>
```

**Values**: `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`

### Font Weight

```html
<p class="font-normal">Normal weight</p>
<p class="font-bold">Bold text</p>
<p class="font-black">Black weight</p>
```

**Values**: `normal`, `medium`, `bold`, `black`

### Text Alignment

```html
<p class="text-left">Left aligned</p>
<p class="text-center">Centered</p>
<p class="text-right">Right aligned</p>
```

**Values**: `left`, `center`, `right`, `justify`

### Text Transform

```html
<p class="uppercase">UPPERCASE TEXT</p>
<p class="lowercase">lowercase text</p>
<p class="capitalize">Capitalized Text</p>
```

**Values**: `uppercase`, `lowercase`, `capitalize`, `normal-case`

### Text Decoration

```html
<a class="underline">Underlined link</a>
<s class="line-through">Strikethrough</s>
<a class="no-underline">No decoration</a>
```

## Sizing

### Width

```html
<div class="w-full">Full width</div>
<div class="w-1/2">Half width</div>
<div class="w-64">256px width</div>
```

**Values**: Spacing scale + `full`, `screen`, `min`, `max`, `fit`

### Height

```html
<div class="h-full">Full height</div>
<div class="h-screen">Viewport height</div>
```

**Values**: Spacing scale + `full`, `screen`, `min`, `max`, `fit`

### Max Width

```html
<div class="max-w-3xl">Max width container</div>
```

**Values**: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `full`, `screen`

## Effects

### Opacity

```html
<div class="opacity-0">Invisible</div>
<div class="opacity-50">50% opacity</div>
<div class="opacity-100">Fully opaque</div>
```

**Values**: `0`, `25`, `50`, `75`, `100`

### Shadow

```html
<div class="shadow-sm">Small shadow</div>
<div class="shadow-base">Base shadow</div>
<div class="shadow-lg">Large shadow</div>
```

**Values**: `none`, `sm`, `base`, `lg`

## Position

### Position Type

```html
<div class="relative">Relative positioning</div>
<div class="absolute">Absolute positioning</div>
<div class="fixed">Fixed positioning</div>
<div class="sticky">Sticky positioning</div>
```

### Z-Index

```html
<div class="z-0">Base layer</div>
<div class="z-50">High layer</div>
```

**Values**: `0`, `10`, `20`, `30`, `40`, `50`, `auto`

## Responsive Design

All utilities support responsive variants:

```html
<div class="block md:flex lg:grid">
  Responsive layout
</div>

<div class="text-base md:text-xl lg:text-3xl">
  Responsive text size
</div>

<div class="p-4 md:p-8 lg:p-12">
  Responsive padding
</div>
```

**Breakpoints**:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## State Modifiers

### Hover

```html
<button class="bg-black hover:bg-gray-800">
  Hover effect
</button>

<a class="text-black hover:underline">
  Hover underline
</a>
```

### Focus

```html
<input class="border-2 focus:border-primary-500">

<button class="opacity-100 focus:opacity-75">
  Focus button
</button>
```

## Combining Utilities

```html
<button class="
  px-6 py-3
  bg-black text-white
  border-4 border-black
  uppercase font-bold
  hover:bg-gray-800
  focus:opacity-75
  md:px-8 md:py-4
">
  Complete button
</button>
```

## Best Practices

1. **Start with layout**: `flex`, `grid`, spacing
2. **Add colors**: `bg-*`, `text-*`, `border-*`
3. **Style typography**: `font-*`, `text-*`, `uppercase`
4. **Add states**: `hover:*`, `focus:*`
5. **Make responsive**: `md:*`, `lg:*`
