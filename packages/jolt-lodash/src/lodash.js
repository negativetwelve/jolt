// Libraries
import _ from 'lodash';
import pluralize from 'pluralize';


_.mixin({
  // External functions injected into lodash.
  pluralize,
  singularize: pluralize.singular,

  /**
   * Returns the number of elements that satisfy `func`.
   */
  count: (array, func) => _.filter(array, func).length,

  /**
   * Counts the number of `character` that appears in `string`.
   */
  countCharacters: (string, character) => {
    return _.count(string, char => char === character);
  },

  /**
   * Returns true if the object is anything except undefined or null.
   */
  exists: (object) => typeof object !== 'undefined' && object !== null,

  /**
   * Returns the first N elements in an array.
   */
  firstN: (array, n) => array.slice(0, n),

  /**
   * Based off isFinite (built-in), this checks if the input can be coerced
   * to a number.
   */
  isNumeric: (value) => {
    // Edge cases that isFinite doesn't check.
    if (_.includes([Infinity, -Infinity], value)) {
      return true;
    } else if (_.includes(['', true, false, null, undefined], value)) {
      return false;
    } else {
      return isFinite(value);
    }
  },

  /**
   * Returns the last N elements in an array.
   */
  lastN: (array, n) => {
    if (array && array.length <= n) {
      return array;
    } else {
      return array.slice(array.length - n, array.length);
    }
  },

  /**
   * Provides a safe access to the String#toLowerCase function.
   */
  toLowerCase: (string) => _.exists(string) ? string.toLowerCase() : '',
});


export default _;
