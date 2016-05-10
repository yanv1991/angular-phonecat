//'use strict';
System.register(['./core/core.module', './phone_list/phone_list.module', './phone_detail/phone_detail.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_module_1, phone_list_module_1, phone_detail_module_1;
    function configure($routeProvider) {
        $routeProvider.
            when('/phones', {
            templateUrl: 'js/phone_list/phone_list.html',
            controller: 'PhoneListCtrl',
            controllerAs: 'vm'
        }).
            when('/phones/:phoneId', {
            templateUrl: 'js/phone_detail/phone_detail.html',
            controller: 'PhoneDetailCtrl',
            controllerAs: 'vm'
        }).
            otherwise({
            redirectTo: '/phones'
        });
    }
    return {
        setters:[
            function (core_module_1_1) {
                core_module_1 = core_module_1_1;
            },
            function (phone_list_module_1_1) {
                phone_list_module_1 = phone_list_module_1_1;
            },
            function (phone_detail_module_1_1) {
                phone_detail_module_1 = phone_detail_module_1_1;
            }],
        execute: function() {
            angular.module('phonecatApp', [
                'ngAnimate',
                'ngRoute',
                core_module_1.default.name,
                phone_list_module_1.default.name,
                phone_detail_module_1.default.name,
            ]).config(configure);
            configure.$inject = ['$routeProvider'];
        }
    }
});
//# sourceMappingURL=app.module.js.map