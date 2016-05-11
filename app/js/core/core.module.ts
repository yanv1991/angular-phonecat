//'use strict';

//angular.module('phonecat.core', ['ngResource']);

//import Phone from './phone.factory';
import { Phones } from './phones.service';
import upgradeAdapter from './upgrade_adapter';

//Register Phones as an Angular 2 provider with the addProvider
upgradeAdapter.addProvider(Phones);

export default angular.module('phonecat.core', [])
	.factory('phones', upgradeAdapter.downgradeNg2Provider(Phones));
