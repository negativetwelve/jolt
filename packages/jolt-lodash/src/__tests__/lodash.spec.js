// Modules
import _ from '../lodash';


describe('lodash', () => {
  describe('.exists', () => {
    it('should return false for undefined', () => {
      expect(_.exists(undefined)).toEqual(false);
    });

    it('should return false for null', () => {
      expect(_.exists(null)).toEqual(false);
    });

    it('should return true for numbers', () => {
      expect(_.exists(1)).toEqual(true);
    });

    it('should return true for strings', () => {
      expect(_.exists('hello world')).toEqual(true);
    });

    it('should return true for the empty string', () => {
      expect(_.exists('')).toEqual(true);
    });

    it('should return true for the empty object', () => {
      expect(_.exists({})).toEqual(true);
    });

    it('should return true for the empty array', () => {
      expect(_.exists([])).toEqual(true);
    });
  });
});
