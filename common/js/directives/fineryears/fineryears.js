/* global angular */
angular.module('app.fineryears', [
])

/* E = element */
.directive('appFineryears', function() {
  return {
    restrict: 'E',
    templateUrl: 'common/js/directives/fineryears/fineryears.html',
    controller: 'FinerYearsCtrl'
  }
})

.controller('FinerYearsCtrl', ['$scope', function($scope) {

}]);