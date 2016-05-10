/*'use strict';

angular.module('phonecat.phoneDetail').controller('PhoneDetailCtrl',
  ['$routeParams', 'Phone', function($routeParams, Phone) {
    var ctrl = this;
    ctrl.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      ctrl.mainImageUrl = phone.images[0];
    });

    ctrl.setImage = function(imageUrl) {
      ctrl.mainImageUrl = imageUrl;
    };
  }]);
  */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function PhoneDetailCtrl($routeParams, Phone) {
        var vm = this;
        vm.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
            vm.mainImageUrl = phone.images[0];
        });
        vm.setImage = function (imageUrl) {
            vm.mainImageUrl = imageUrl;
        };
    }
    return {
        setters:[],
        execute: function() {
            PhoneDetailCtrl.$inject = ['$routeParams', 'Phone'];
            exports_1("default",PhoneDetailCtrl);
        }
    }
});
//# sourceMappingURL=phone_detail.controller.js.map