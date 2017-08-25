// Presets
const presetEnv = require('babel-preset-env').default;
const presetReactNative = require('babel-preset-react-native').default;

// Plugins
const transformBuiltinExtend = require('babel-plugin-transform-builtin-extend').default;
const transformClassProperties = require('babel-plugin-transform-class-properties').default;
const transformDecoratorsLegacy = require('babel-plugin-transform-decorators-legacy').default;
const transformExportExtensions = require('babel-plugin-transform-export-extensions').default;
const transformObjectRestSpread = require('babel-plugin-transform-object-rest-spread').default;
const transformRuntime = require('babel-plugin-transform-runtime').default;


module.exports = (context, options = {}) => { // eslint-disable-line
  const {target} = options;

  // These are the plugins that are shared with all targets.
  const plugins = [
    [transformBuiltinExtend, {globals: ['Array', 'Error']}],

    // NOTE(mark): Decorators MUST come before class properties.
    transformDecoratorsLegacy,
    transformClassProperties,
    transformExportExtensions,
    transformObjectRestSpread,
  ];

  return {
    presets: [
      target === 'node' && [presetEnv, {targets: {node: 4}}],
      target === 'react-native' && presetReactNative,
    ].filter(Boolean),
    plugins: [
      target === 'node' && transformRuntime,
      ...plugins,
    ].filter(Boolean),

    // Remove comments and compact the code.
    comments: false,
    compact: true,
  };
};
