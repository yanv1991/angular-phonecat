/*'use strict';

angular.module('phonecat.core').filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
*/

export default function checkmarkFilter() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
}