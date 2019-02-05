# Vue GitHub Corners
[![license](https://img.shields.io/github/license/gluons/vue-gh-corners.svg?style=flat-square)](./LICENSE)
[![vue 2](https://img.shields.io/badge/vue-2-42b983.svg?style=flat-square)](https://vuejs.org)
[![npm](https://img.shields.io/npm/v/vue-gh-corners.svg?style=flat-square)](https://www.npmjs.com/package/vue-gh-corners)
[![npm](https://img.shields.io/npm/dt/vue-gh-corners.svg?style=flat-square)](https://www.npmjs.com/package/vue-gh-corners)
[![Travis](https://img.shields.io/travis/gluons/vue-gh-corners.svg?style=flat-square)](https://travis-ci.org/gluons/vue-gh-corners)
[![TSLint](https://img.shields.io/badge/TSLint-gluons-15757B.svg?style=flat-square)](https://github.com/gluons/tslint-config-gluons)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://github.com/carloscuesta/gitmoji)

:octocat: [tholman's GitHub Corners](https://github.com/tholman/github-corners) for [Vue](https://vuejs.org/).

## Installation

Via [npm](https://www.npmjs.com/):

[![npm](https://nodei.co/npm/vue-gh-corners.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/vue-gh-corners)

```sh
npm install --save vue-gh-corners
```

Via [Yarn](https://yarnpkg.com/):

```sh
yarn add vue-gh-corners
```

## Demo

Go to https://gluons.github.io/vue-gh-corners/

## Usage

```javascript
import Vue from 'vue';
import VueGitHubCorners from 'vue-gh-corners';

// Import GitHub Corners stylesheet.
import 'vue-gh-corners/dist/vue-github-corners.css';

Vue.use(VueGitHubCorners);
```

```vue
<template>
	<div id="app">
		<github-corners repo="gluons/vue-gh-corners"></github-corners>
	</div>
</template>
```

## API

### Props

#### repo
**Type:** `string`  
**Required:** `true`

GitHub repository slug (`username/repo`).

#### blank
**Type:** `boolean`  
**Default:** `true`

Enable `target="_blank"` for `<a>` link.

#### bg-color
**Type:** `string`  
**Default:** `#151513`

The corner background color.

> It's corner SVG's `fill` value.

#### color
**Type:** `string`  
**Default:** `#fff`

The corner octocat color.

> It's corner SVG's `color` value.

#### position
**Type:** `string`  
**Default:** `right`

The position of corner.

- `left`
- `right`

## Development

- `yarn dev`: Run demo webpage for dev.
- `yarn build`: Build the component.

---

**Use [Bili](https://github.com/egoist/bili) — 🥂 Delightful library bundler.**
