module.exports = (prefix, dependencies) => {
  return dependencies.filter(Boolean).map((dependency) => {
    if (!Array.isArray(dependency)) {
      dependency = [dependency];
    }

    if (typeof dependency[0] === 'string') {
      dependency[0] = require(`${prefix}-${dependency[0]}`);
      dependency[0] = (
        dependency[0].__esModule ? dependency[0].default : dependency[0]
      );
    }

    return dependency;
  });
};
