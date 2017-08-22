# babel-preset-jolt

[![npm](https://img.shields.io/npm/v/babel-preset-jolt.svg)](https://www.npmjs.com/package/babel-preset-jolt)
[![npm](https://img.shields.io/npm/dt/babel-preset-jolt.svg)](https://www.npmjs.com/package/babel-preset-jolt)
[![npm](https://img.shields.io/npm/l/babel-preset-jolt.svg)](https://github.com/negativetwelve/jolt/blob/master/LICENSE)

Adds default presets:

* babel-preset-es2015
* babel-preset-es2016
* babel-preset-es2017

Add default plugins:

* babel-plugin-transform-builtin-extend
* babel-plugin-transform-class-properties
* babel-plugin-transform-decorators-legacy
* babel-plugin-transform-export-extensions
* babel-plugin-transform-object-rest-spread

## Getting Started

Install `babel-preset-jolt` using `yarn`:

```shell
yarn add --dev babel-preset-jolt
```

## Usage

In your `.babelrc` or `package.json`, add `jolt` as a preset:


```json
"babel": {
  "presets": [
    "jolt"
  ]
}
```
