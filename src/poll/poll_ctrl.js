/* global angular */


(function (module) {
    module.controller('pollCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.text = "Hello, World";

        $http.get('/api/polls/1.json').then(function (result) {
            $scope.poll = result.data;
        });
    }]);
})(angular.module('pollCtrl', ['ng']));
