// Presets
import presetES2015 from 'babel-preset-es2015';
import presetES2016 from 'babel-preset-es2016';
import presetES2017 from 'babel-preset-es2017';

// Plugins
import pluginTransformBuiltinExtend from 'babel-plugin-transform-builtin-extend';
import pluginTransformClassProperties from 'babel-plugin-transform-class-properties';
import pluginTransformDecoratorsLegacy from 'babel-plugin-transform-decorators-legacy';
import pluginTransformExportExtensions from 'babel-plugin-transform-export-extensions';
import pluginTransformObjectRestSpread from 'babel-plugin-transform-object-rest-spread';


// eslint-disable-next-line
export default (context, options = {}) => {
  return {
    presets: [
      presetES2015,
      presetES2016,
      presetES2017,
    ],
    plugins: [
      [pluginTransformBuiltinExtend, {
        globals: ['Array', 'Error'],
      }],

      // NOTE(mark): Decorators MUST come before class properties.
      pluginTransformDecoratorsLegacy,
      pluginTransformClassProperties,
      pluginTransformExportExtensions,
      pluginTransformObjectRestSpread,
    ],
  };
}
