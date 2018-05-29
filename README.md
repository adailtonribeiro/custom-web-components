# custom-web-components

[![npm version](https://img.shields.io/npm/v/@adailtonribeiro/custom-web-components.svg?style=flat-square)](https://www.npmjs.org/package/@adailtonribeiro/custom-web-components)
[![npm downloads](https://img.shields.io/npm/dm/@adailtonribeiro/custom-web-components.svg?style=flat-square)](http://npm-stat.com/charts.html?package=@adailtonribeiro/custom-web-components)

### Basic usage 

**ar-modal** example:

```html
<ar-modal modal-title="My First Modal">
  <div slot="item-body">
    My modal body
  </div>
  <div slot="item-footer">
    <h3>My modal footer</h3>
  </div>
</ar-modal>
```

**ar-progress-bar** example:

```html
<ar-progress-bar value="10"></ar-progress-bar>
```

### Installation

Put the script tag below in the head of your index.html
```html
<script src="https://unpkg.com/@adailtonribeiro/custom-web-components@0.0.4/dist/ar-cwc.js"></script>
```