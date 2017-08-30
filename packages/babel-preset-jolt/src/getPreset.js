// Modules
const resolveDependencies = require('./resolveDependencies');


const getPresets = ({target, uglify}) => {
  switch (target) {
    case 'node':
      return [['env', {targets: {node: 4}}]];
    case 'react-native':
      return ['react-native'];
    case 'web':
      return [
        ['env', {
          targets: {
            browsers: ['last 2 versions', 'safari >= 7'],
            uglify,
          },
        }],

        // NOTE(mark): This is included for now because it's compatible with
        // react + webpack which is the usecase for 'web' right now.
        'react-native',
      ];
    default:
      return [];
  }
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
  ].filter(Boolean);
};

module.exports = (context, options = {}) => { // eslint-disable-line
  const {
    target,
    uglify = false,
    import: {
      static: useStaticImport = false,
    } = {},
  } = options;

  return {
    // Remove comments and compact the code.
    comments: false,
    compact: true,

    presets: resolveDependencies('babel-preset', getPresets({target, uglify})),
    plugins: [
      // Built-in babel plugin transforms.
      ...resolveDependencies('babel-plugin-transform', sharedPlugins),
      ...resolveDependencies('babel-plugin-transform', getPlugins({target})),

      // Custom babel plugin transforms.
      ...getCustomPlugins({useStaticImport}),
    ],
  };
};
