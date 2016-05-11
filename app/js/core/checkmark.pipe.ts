/*'use strict';

angular.module('phonecat.core').filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
*/

import { Pipe } from '@angular/core';
@Pipe({ name: 'checkmark' })
export class CheckmarkPipe {
	transform(input: string): string {
		return input ? '\u2713' : '\u2718';
	}
}
