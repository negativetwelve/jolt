// Modules
import _ from '../lodash';


describe('lodash', () => {
  describe('.count', () => {
    it('should return 0 for the empty array', () => {
      expect(_.count([], () => true)).toEqual(0);
    });

    it('should return the number of elements that return true', () => {
      expect(_.count([1, 2, 3], (number) => number < 4)).toEqual(3);
    });
  });

  describe('.countCharacters', () => {
    it('should return the 0 for distinct characters', () => {
      expect(_.countCharacters('abc', 'd')).toEqual(0);
    });

    it('should return the number of a character', () => {
      expect(_.countCharacters('abbccc', 'c')).toEqual(3);
    });
  });

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

  describe('.firstN', () => {
    it('should return an empty array if input is an empty array', () => {
      expect(_.firstN([], 1)).toEqual([]);
    });

    it('should return an empty array if n is 0', () => {
      expect(_.firstN([1, 2, 3], 0)).toEqual([]);
    });

    it('should return the correct length of array', () => {
      expect(_.firstN([1, 2, 3], 2)).toEqual([1, 2]);
    });

    it('should return all elements if n >= length', () => {
      expect(_.firstN([1, 2, 3], 4)).toEqual([1, 2, 3]);
    });
  });

  describe('.lastN', () => {
    it('should return an empty array if input is an empty array', () => {
      expect(_.lastN([], 1)).toEqual([]);
    });

    it('should return an empty array if n is 0', () => {
      expect(_.lastN([1, 2, 3], 0)).toEqual([]);
    });

    it('should return the correct length of array', () => {
      expect(_.lastN([1, 2, 3], 2)).toEqual([2, 3]);
    });

    it('should return all elements if n >= length', () => {
      expect(_.lastN([1, 2, 3], 4)).toEqual([1, 2, 3]);
    });
  });

  describe('.toLowerCase', () => {
    it('should lowercase all letters', () => {
      expect(_.toLowerCase('HELLO')).toEqual('hello');
    });
  });
});
