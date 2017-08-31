// Modules
import getPreset from '../getPreset';


/* eslint-disable no-undef */
describe('babel-preset-jolt', () => {
  set('target', () => undefined);
  set('react', () => false);
  set('reactNative', () => false);
  set('uglify', () => false);
  set('useStaticImport', () => false);
  set('options', () => ({target, react, reactNative, uglify, useStaticImport}));
  set('preset', () => getPreset(null, options));

  describe('target', () => {
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
  });

  describe('options', () => {
    context('with react enabled', () => {
      set('react', () => true);

      it('should not error', () => {
        expect(getPreset).not.toThrow();
      });
    });

    context('with reactNative enabled', () => {
      set('reactNative', () => true);

      it('should not error', () => {
        expect(getPreset).not.toThrow();
      });
    });

    context('with useStaticImport enabled', () => {
      set('useStaticImport', () => true);

      it('should not error', () => {
        expect(getPreset).not.toThrow();
      });
    });
  });
});
