// Modules
import config from 'eslint-config-jolt';


describe('eslint-config-jolt', () => {
  it('should return an object with plugins', () => {
    expect(config).toHaveProperty('plugins');
  });

  it('should return an object with rules', () => {
    expect(config).toHaveProperty('rules');
  });
});
