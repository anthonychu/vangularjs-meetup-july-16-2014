(function (module) {

  module.directive('pollAnswer', function ($rootScope) {
    return {
      restrict: 'A',
      requires: '^poll',
      transclude: true,
      scope: {
        answerId: '=answer'
      },
      template: '<div><input type="checkbox"><span ng-transclude></span></div>',
      link: function ($scope, $element, $attrs, ctrl) {
        $element.on('click', function () {
          ctrl.pickAnswer($scope.answerId);
          $rootScope.$emit('pickedAnswer', $scope.answerId);
        });
      }
    }
  });

})(angular.module('pollAnswer', ['ng', 'pollCtrl']));