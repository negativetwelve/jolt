module.exports = (prefix, dependencies) => {
  return dependencies.filter(Boolean).map((dependency) => {
    if (!Array.isArray(dependency)) {
      dependency = [dependency];
    }

    const module = dependency[0];

    if (typeof module === 'string') {
      const required = require(`${prefix}-${module}`);

      // Set the new module as the first item in the dependency array.
      dependency[0] = required.__esModule ? required.default : required;
    }

    return dependency;
  });
};
