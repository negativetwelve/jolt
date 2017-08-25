// Modules
const resolveDependencies = require('./resolveDependencies');


module.exports = (context, options = {}) => { // eslint-disable-line
  const {target, import: {static: useStaticImport = false} = {}} = options;

  // These are the plugins that are shared with all targets.
  const plugins = [
    // NOTE(mark): Decorators MUST come before class properties.
    'decorators-legacy',

    ['builtin-extend', {globals: ['Array', 'Error']}],
    'class-properties',
    'export-extensions',
    'object-rest-spread',
  ];

  return {
    // Remove comments and compact the code.
    comments: false,
    compact: true,

    presets: resolveDependencies('babel-preset', [
      target === 'node' && ['env', {targets: {node: 4}}],
      target === 'react-native' && 'react-native',
    ]),
    plugins: [
      // Built-in babel plugin transforms.
      ...resolveDependencies('babel-plugin-transform', [
        target === 'node' && 'runtime',
        ...plugins,
      ]),

      // Custom babel plugin transforms.
      ...[
        useStaticImport && require('./transforms/static-import'),
      ].filter(Boolean),
    ],
  };
};
