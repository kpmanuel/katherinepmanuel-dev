/* global angular */
angular.module('app.algpi', [
])

/* E = element */
.directive('appAlgpi', function() {
  return {
    restrict: 'E',
    templateUrl: 'common/js/directives/algpi/algpi.html',
    controller: 'algpiCtrl'
  }
})

.controller('algpiCtrl', ['$scope', function($scope) {

}]);