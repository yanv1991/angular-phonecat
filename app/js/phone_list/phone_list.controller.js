System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function PhoneListCtrl(Phone) {
        var vm = this;
        vm.phones = Phone.query();
        vm.orderProp = 'age';
    }
    return {
        setters:[],
        execute: function() {
            /*'use strict';
            
            angular.module('phonecat.phoneList').controller('PhoneListCtrl',
              ['Phone', function (Phone) {
                this.phones = Phone.query();
                this.orderProp = 'age';
              }]);
            */
            PhoneListCtrl.$inject = ['Phone'];
            exports_1("default",PhoneListCtrl);
        }
    }
});
//# sourceMappingURL=phone_list.controller.js.map