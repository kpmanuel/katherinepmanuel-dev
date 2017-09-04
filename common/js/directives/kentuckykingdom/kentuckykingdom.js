/* global angular */
angular.module('app.kentuckykingdom', [
])

/* E = element */
.directive('appKentuckykingdom', function() {
  return {
    restrict: 'E',
    templateUrl: 'common/js/directives/kentuckykingdom/kentuckykingdom.html',
    controller: 'kentuckyKingdomCtrl'
  }
})

.controller('kentuckyKingdomCtrl', ['$scope', function($scope) {

}]);