//'use strict';

/* App Module */

/*var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecat.core',
  'phonecat.phoneList',
  'phonecat.phoneDetail'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        template: '<phone-list></phone-list>'
      }).
      when('/phones/:phoneId', {
        template: '<phone-detail></phone-detail>'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
*/

//import upgradeAdapter from './core/upgrade_adapter';

import { HTTP_PROVIDERS } from '@angular/http';

import { provide } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Phones } from './core/phones.service';
import AppComponent from './app.component';


/*angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
   core.name,
   phoneList.name,
   phoneDetail.name,
]).config(configure);

configure.$inject = ['$routeProvider'];
function configure($routeProvider) {
  $routeProvider.
      when('/phones', {
      template: '<pc-phone-list></pc-phone-list>'
    }).
    when('/phones/:phoneId', {
      template: '<pc-phone-detail></pc-phone-detail>'
    }).
    otherwise({
      redirectTo: '/phones'
    });
}

upgradeAdapter.addProvider(HTTP_PROVIDERS);
upgradeAdapter.upgradeNg1Provider('$routeParams');*/
//upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  Phones
]);

