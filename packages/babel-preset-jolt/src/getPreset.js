// Modules
const resolveDependencies = require('./resolveDependencies');


const getEnv = ({target, uglify}) => {
  switch (target) {
    case 'node':
      return [['env', {targets: {node: 4}, useBuiltIns: true}]];
    case 'web':
      return [['env', {targets: {browsers: ['last 2 versions', 'safari >= 7'], uglify}}]];
    default:
      return [];
  }
};

const getPresets = ({react, reactNative}) => {
  return [
    react && 'react',
    reactNative && 'react-native',
  ];
};

const getPlugins = ({target}) => {
  switch (target) {
    case 'node':
      return ['runtime'];
    default:
      return [];
  }
};

// These are the plugins that are shared with all targets.
// NOTE(mark): Decorators MUST come before class properties.
const sharedPlugins = [
  'decorators-legacy',

  ['builtin-extend', {globals: ['Array', 'Error']}],
  'class-properties',
  'export-extensions',
  'object-rest-spread',
];

const getCustomPlugins = ({useStaticImport}) => {
  return [
    useStaticImport && require('./transforms/static-import'),
  ];
};

module.exports = (context, options = {}) => { // eslint-disable-line
  const {
    target,
    react = false,
    reactNative = false,
    uglify = false,
    useStaticImport = false,
  } = options;

  return {
    // Remove comments and compact the code.
    comments: false,
    compact: true,

    presets: [
      ...resolveDependencies('babel-preset', getEnv({target, uglify})),
      ...resolveDependencies('babel-preset', getPresets({react, reactNative})),
    ].filter(Boolean),
    plugins: [
      // Built-in babel plugin transforms.
      ...resolveDependencies('babel-plugin-transform', sharedPlugins),
      ...resolveDependencies('babel-plugin-transform', getPlugins({target})),

      // Custom babel plugin transforms.
      ...getCustomPlugins({useStaticImport}),
    ].filter(Boolean),
  };
};
