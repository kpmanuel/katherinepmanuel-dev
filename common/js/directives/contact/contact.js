/* global angular */
angular.module('app.contact', [])

/* E = element */
.directive('appContact', function() {
  return {
    restrict: 'E',
    templateUrl: 'common/js/directives/contact/contact.html',
    controller: 'ContactCtrl'
  }
})

.controller('ContactCtrl', ['$scope', function($scope) {

}]);