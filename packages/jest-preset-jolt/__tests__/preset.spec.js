/* eslint-disable no-undef */
describe('jest-preset-jolt', () => {
  action('getPreset', () => require('../jest-preset.json'));
  set('preset', () => getPreset());

  it('should not error', () => {
    expect(getPreset).not.toThrow();
  });

  it('should be a valid JS object', () => {
    expect(preset).toHaveProperty('testEnvironment', 'node');
  });
});
