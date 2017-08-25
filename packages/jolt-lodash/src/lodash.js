// Libraries
import _ from 'lodash';


_.mixin({
  /**
   * Returns true if the object is anything except undefined or null.
   */
  exists: object => typeof object !== 'undefined' && object !== null,
});


export default _;
