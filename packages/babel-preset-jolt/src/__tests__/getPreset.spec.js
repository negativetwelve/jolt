// Modules
import getPreset from '../getPreset';


/* eslint-disable no-undef */
describe('babel-preset-jolt', () => {
  set('target', () => undefined);
  set('useStaticImports', () => false);
  set('uglify', () => false);
  set('options', () => ({target, uglify, import: {static: useStaticImports}}));
  set('preset', () => getPreset(null, options));

  context('with no target', () => {
    set('target', () => undefined);

    it('should not error', () => {
      expect(getPreset).not.toThrow();
    });

    it('should contain 0 presets', () => {
      expect(preset.presets).toHaveLength(0);
    });

    it('should contain plugins', () => {
      expect(preset.plugins).not.toHaveLength(0);
    });
  });

  context('with node target', () => {
    set('target', () => 'node');

    it('should not error', () => {
      expect(getPreset).not.toThrow();
    });

    it('should contain presets', () => {
      expect(preset.presets).not.toHaveLength(0);
    });

    it('should contain plugins', () => {
      expect(preset.plugins).not.toHaveLength(0);
    });
  });

  context('with react-native target', () => {
    set('target', () => 'react-native');

    it('should not error', () => {
      expect(getPreset).not.toThrow();
    });

    it('should contain presets', () => {
      expect(preset.presets).not.toHaveLength(0);
    });

    it('should contain plugins', () => {
      expect(preset.plugins).not.toHaveLength(0);
    });
  });

  context('with web target', () => {
    set('target', () => 'web');

    it('should not error', () => {
      expect(getPreset).not.toThrow();
    });

    it('should contain presets', () => {
      expect(preset.presets).not.toHaveLength(0);
    });

    it('should contain plugins', () => {
      expect(preset.plugins).not.toHaveLength(0);
    });

    context('with uglify option set to true', () => {
      set('uglify', () => true);

      it('should include uglify in the targets', () => {
        expect(preset.presets[0][1].targets.uglify).toEqual(uglify);
      });
    });
  });

  context('with static imports enabled', () => {
    set('useStaticImports', () => true);

    it('should not error', () => {
      expect(getPreset).not.toThrow();
    });
  });
});
