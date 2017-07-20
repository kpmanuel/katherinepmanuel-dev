/* global angular */
angular.module('app.header', [
  //third party
  'hl.sticky'
])

.directive('appHeader', function() {
  return {
    restrict: 'E',
    templateUrl: 'common/js/directives/header/header.html',
    controller: 'HeaderCtrl'
  }
})

.controller('HeaderCtrl', ['$scope', function($scope) {
  //$rootScope.page is defined in the individual page controllers
}]);