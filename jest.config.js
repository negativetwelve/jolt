module.exports = {
  // TODO(mark): This is currently being ignored:
  // https://github.com/facebook/jest/issues/3718
  projects: [
    '<rootDir>/projects/*',
  ],
  setupFiles: [
    'jest-addons/setup',
  ],
  testEnvironment: 'node',
};
