
(function (module) {

    module.directive('poll', function () {
        return {
            restrict: 'A',
            templateUrl: '/src/poll/poll.html',
            controller: 'pollCtrl',
            scope: {},
            link: function ($scope, $element, $attrs) {

            }
        };
    });

})(angular.module('pollDirective', ['ng', 'pollCtrl']));