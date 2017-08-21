// Presets
import presetES2015 from 'babel-preset-es2015';
import presetES2016 from 'babel-preset-es2016';
import presetES2017 from 'babel-preset-es2017';

// Plugins
import pluginTransformBuiltinExtend from 'babel-plugin-transform-builtin-extend';
import pluginTransformExportExtensions from 'babel-plugin-transform-export-extensions';
import pluginTransformObjectRestSpread from 'babel-plugin-transform-object-rest-spread';


// eslint-disable-next-line
export default function (context, options = {}) {
  return {
    presets: [
      presetES2015,
      presetES2016,
      presetES2017,
    ],
    plugins: [
      pluginTransformObjectRestSpread,
      pluginTransformExportExtensions,
      [pluginTransformBuiltinExtend, {
        globals: ['Array', 'Error'],
      }]
    ],
  };
}