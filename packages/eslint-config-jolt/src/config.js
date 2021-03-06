module.exports = {
  parser: 'babel-eslint',

  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },

  globals: {
    jest: false,
  },

  plugins: [
    'jest',
  ],

  rules: {
    'block-scoped-var': 'error',
    'brace-style': ['error', '1tbs'],
    'camelcase': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'curly': 'error',
    'eol-last': 'error',
    'eqeqeq': 'error',
    'jsx-quotes': ['error', 'prefer-single'],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'max-depth': ['error', 5],
    'max-statements': ['error', 30],
    'max-len': ['error', 100, 2, {
      'ignoreComments': true,
      'ignorePattern': '^import|:\\srequire(\\s*)',
    }],
    'newline-after-var': ['error', 'always'],
    'new-cap': 'off',
    'no-alert': 'off',
    'no-extend-native': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-shadow': 'off',
    'no-trailing-spaces': 'error',
    'no-use-before-define': ['error', 'nofunc'],
    'no-unused-vars': 'off',
    'no-undef': 'error',
    'no-underscore-dangle': 'off',
    'quotes': ['error', 'single', {allowTemplateLiterals: true}],
    'semi': ['error', 'always'],
    'space-unary-ops': 'error',
    'space-before-blocks': 'error',
  },
};
