// Libraries
import _ from 'lodash';


_.mixin({
  /**
   * Returns true if the object is anything except undefined or null.
   */
  exists: (object) => typeof object !== 'undefined' && object !== null,

  /**
   * Returns the first N elements in an array.
   */
  firstN: (array, n) => array.slice(0, n),

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
   * Delegates to the String#toLowerCase function.
   */
  toLowerCase: (string) => string.toLowerCase(),
});


export default _;
