// Presets
import presetEnv from 'babel-preset-env';
import presetReactNative from 'babel-preset-react-native';

// Plugins
import transformBuiltinExtend from 'babel-plugin-transform-builtin-extend';
import transformClassProperties from 'babel-plugin-transform-class-properties';
import transformDecoratorsLegacy from 'babel-plugin-transform-decorators-legacy';
import transformExportExtensions from 'babel-plugin-transform-export-extensions';
import transformObjectRestSpread from 'babel-plugin-transform-object-rest-spread';
import transformRuntime from 'babel-plugin-transform-runtime';


export default (context, options = {}) => { // eslint-disable-line
  const {target} = options;

  // These are the plugins that are shared with all targets.
  const plugins = [
    [transformBuiltinExtend, {
      globals: ['Array', 'Error'],
    }],

    // NOTE(mark): Decorators MUST come before class properties.
    transformDecoratorsLegacy,
    transformClassProperties,
    transformExportExtensions,
    transformObjectRestSpread,
  ];

  return {
    presets: [
      target === 'node' && presetEnv({targets: {node: 4}}),
      target === 'react-native' && presetReactNative,
    ].filter(Boolean),
    plugins: [
      target === 'node' && transformRuntime,
      ...plugins,
    ].filter(Boolean),
  };
}
