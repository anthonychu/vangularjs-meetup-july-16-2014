
(function (module) {

    module.directive('poll', function () {
        return {
            restrict: 'A',
            templateUrl: 'src/poll/poll.html',
            controller: 'pollCtrl',
            controllerAs: 'pollVm',
            scope: true,
            link: function (scope, element, attrs) {

            }
        };
    });

})(angular.module('pollDirective', ['ng', 'pollCtrl']));