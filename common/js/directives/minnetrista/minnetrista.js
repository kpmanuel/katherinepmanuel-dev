/* global angular */
angular.module('app.minnetrista', [
])

/* E = element */
.directive('appMinnetrista', function() {
  return {
    restrict: 'E',
    templateUrl: 'common/js/directives/minnetrista/minnetrista.html',
    controller: 'MinnetristaCtrl'
  }
})

.controller('MinnetristaCtrl', ['$scope', function($scope) {

}]);