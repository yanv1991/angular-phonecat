/*'use strict';

angular.module('phonecat.phoneDetail', [
  'ngAnimate',
  'ngRoute',
  'phonecat.core'
]);
*/

import PhoneDetailCtrl from './phone_detail.controller';
export default angular.module('phonecat.detail', [
    'phonecat.core',
    'ngRoute'
  ])
  .controller('PhoneDetailCtrl', PhoneDetailCtrl);
