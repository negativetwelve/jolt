// Modules
import getPreset from 'babel-preset-jolt';


/* eslint-disable no-undef */
describe('babel-preset-jolt', () => {
  set('preset', () => getPreset());

  it('should not error', () => {
    expect(getPreset).not.toThrow();
  });

  it('should not contain presets', () => {
    expect(preset).not.toHaveProperty('presets');
  });

  it('should be a valid object with plugins', () => {
    expect(preset).toHaveProperty('plugins');
  });
});
