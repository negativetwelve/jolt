// Modules
import _ from '../lodash';


/* eslint-disable no-undef */
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

  describe('.isNumeric', () => {
    const integers = [Infinity, -Infinity, 0, 0.1, 1, 1.1, 100000000000000000];
    const stringIntegers = ['0', '0.1', '1', '1.1', '100000000000000000'];
    const strings = ['a', 'hello', 'test'];
    const nonNumericValues = ['', null, true, false, [], undefined];

    forEach({value: integers}, () => {
      it('should return true for integers', () => {
        expect(_.isNumeric(value)).toEqual(true);
      });
    });

    forEach({value: stringIntegers}, () => {
      it('should return true for strings it can coerce', () => {
        expect(_.isNumeric(value)).toEqual(true);
      });
    });

    forEach({value: strings}, () => {
      it('should return false for actual strings of characters', () => {
        expect(_.isNumeric(value)).toEqual(false);
      });
    });

    forEach({value: nonNumericValues}, () => {
      it('should return false for non-numeric values', () => {
        expect(_.isNumeric(value)).toEqual(false);
      });
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
