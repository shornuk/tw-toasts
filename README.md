# Tailwind Toasts Plugin

## Install

```bash
# Install via npm
npm install --save-dev
```

## Usage

```js
module.exports = {
    theme: {
    },
    variants: {
        aspectRatio: ['responsive']
    },
    plugins: [
        require("tw-toasts"),
    ]
}
```

This configuration would create the following classes:

```scss
.toast {
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  overflow: hidden;
}
```

## Example HTML

```html
<div class="toast"></div>
```
