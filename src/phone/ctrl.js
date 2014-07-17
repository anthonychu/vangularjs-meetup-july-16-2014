'use strict';

angular.module('phoneCtrl', ['ng', 'phoneService'])

.config(function ($routeProvider) {
    $routeProvider.when('/phones', {
        templateUrl: 'src/phone/phone-list.html',
        controller: 'PhoneListCtrl',
        controllerAs: 'listVm'
    });

    $routeProvider.when('/phones/:phoneId', {
        templateUrl: 'src/phone/phone-detail.html',
        controller: 'PhoneDetailCtrl',
        controllerAs: 'detailVm'
    });
})

.controller('PhoneListCtrl', function (Phone) {
    this.phones = Phone.query();
    this.orderProp = 'age';
})

.controller('PhoneDetailCtrl', function ($routeParams, Phone) {
    var self = this;

    this.phone = Phone.get({
        phoneId: $routeParams.phoneId
    }, function (phone) {
        self.mainImageUrl = phone.images[0];
    });

    this.setImage = function (imageUrl) {
        self.mainImageUrl = imageUrl;
    }
});
