'use strict';

angular.module('TestApp', [
    'ng',
    'ngRoute',
    'ngAnimate',

    'phoneCtrl',
    'phoneFilter',
    'pollCtrl',
    'pollDirective'
])
.config(function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/phones'
    });
});
