[![npm version](https://badge.fury.io/js/%40ibsardar%2Ftiny.svg)](https://badge.fury.io/js/%40ibsardar%2Ftiny)
![npm](https://img.shields.io/npm/dm/@ibsardar/tiny)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@ibsardar/tiny)
![GitHub repo size](https://img.shields.io/github/repo-size/ibsardar/tiny)


# @ibsardar/tiny
My tiniest npm module

## Install
```sh
npm install @ibsardar/tiny
```

## Usage
```js
const tiny = require("@ibsardar/tiny");

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
```
