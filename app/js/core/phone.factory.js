/*'use strict';

angular.module('phonecat.core')
  .factory('Phone', ['$resource',
    function($resource) {
      return $resource('phones/:phoneId.json', {}, {
        query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
      });
    }]);
*/
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function Phone($resource) {
        return $resource('phones/:phoneId.json', {}, {
            query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
        });
    }
    return {
        setters:[],
        execute: function() {
            Phone.$inject = ['$resource'];
            exports_1("default",Phone);
        }
    }
});
//# sourceMappingURL=phone.factory.js.map