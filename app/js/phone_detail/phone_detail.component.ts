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
import { Component, Inject } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { RouterLink } from '@angular/router-deprecated';

import { Phone, Phones } from '../core/phones.service';
import { CheckmarkPipe } from '../core/checkmark.pipe';
interface PhoneRouteParams {
  phoneId: string
}
@Component({
  selector: 'pc-phone-detail',
  templateUrl: 'js/phone_detail/phone_detail.html',
  pipes: [CheckmarkPipe],
  directives: [RouterLink]
})
class PhoneDetail {
  phone: Phone = undefined;
  mainImageUrl: string;
  constructor(params: RouteParams,
    phones: Phones) {
    phones.get(params.get('phoneId'))
      .subscribe(phone => {
        this.phone = phone;
        this.mainImageUrl = phone.images[0];
      });
  }
  setImage(url: string) {
    this.mainImageUrl = url;
  }
}
export default PhoneDetail;



