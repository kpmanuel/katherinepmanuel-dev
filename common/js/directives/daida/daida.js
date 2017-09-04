/* global angular */
angular.module('app.daida', [
])

/* E = element */
.directive('appDaida', function() {
  return {
    restrict: 'E',
    templateUrl: 'common/js/directives/daida/daida.html',
    controller: 'DaidaCtrl'
  }
})

.controller('DaidaCtrl', ['$scope', function($scope) {

}]);