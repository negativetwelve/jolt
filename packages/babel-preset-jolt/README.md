# babel-preset-jolt

[![npm](https://img.shields.io/npm/v/babel-preset-jolt.svg)](https://www.npmjs.com/package/babel-preset-jolt)
[![npm](https://img.shields.io/npm/dt/babel-preset-jolt.svg)](https://www.npmjs.com/package/babel-preset-jolt)
[![npm](https://img.shields.io/npm/l/babel-preset-jolt.svg)](https://github.com/negativetwelve/jolt/blob/master/LICENSE)

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

### `target`

By default, this will not target any environment. By passing the `target` option, you can specify if this is a `node`, `react-native`, or `web` package. This will enable the `babel-preset-env`, `babel-preset-react-native`, and both respectively.

```json
"babel": {
  "presets": [
    ["jolt", {"target": "node"}]
  ]
}
```

### `import: {static}`

Another option is to convert dynamic `import()` statements into static `require()` statements. This should be used when you do not want dynamic imports in one target (say, `web`), to affect another target (say, `react-native`).

```json
"babel": {
  "presets": [
    ["jolt", {"reactNative": true, "useStaticImport": true,}]
  ]
}
```
