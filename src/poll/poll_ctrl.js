/* global angular */


(function (module) {

    module.controller('pollCtrl', ['$http', function ($http) {
        var self = this;

        this.text = "Hello, World";

        $http.get('/api/polls/1.json').then(function (result) {
            self.poll = result.data;
        });

        this.pickAnswer = function (id) {
            alert(id);
        };
    }]);

})(angular.module('pollCtrl', ['ng']));
