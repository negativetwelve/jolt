const template = require('babel-template');
const buildImport = template('require(ARGS)');
const TYPE_IMPORT = 'Import';

module.exports = {
  inherits: require('babel-plugin-syntax-dynamic-import'),

  visitor: {
    CallExpression(path) {
      if (path.node.callee.type !== TYPE_IMPORT) {
        return;
      }

      path.replaceWith(buildImport({ARGS: path.node.arguments}));
    },
  },
};
