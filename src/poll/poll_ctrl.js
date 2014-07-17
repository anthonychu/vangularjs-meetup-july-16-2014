/* global angular */


(function (module) {
    module.controller('pollCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.text = "Hello, World";

        $http.get('/api/polls/1.json').then(function (result) {
            $scope.poll = result.data;
        });

        // this seems a bit hackyyyy
        this.pickAnswer = $scope.pickAnswer = function (id) {
            alert(id);
        };
    }]);
})(angular.module('pollCtrl', ['ng']));
