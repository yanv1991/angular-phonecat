System.register(['./phone_list.controller'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var phone_list_controller_1;
    return {
        setters:[
            function (phone_list_controller_1_1) {
                phone_list_controller_1 = phone_list_controller_1_1;
            }],
        execute: function() {
            exports_1("default",angular.module('phonecat.list', ['phonecat.core'])
                .controller('PhoneListCtrl', phone_list_controller_1.default));
        }
    }
});
//# sourceMappingURL=phone_list.module.js.map