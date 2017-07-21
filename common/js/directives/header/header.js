/* global angular */
angular.module('app.header', [
  //third party
  'hl.sticky'
])

/* E = element */
.directive('appHeader', function() {
  return {
    restrict: 'E',
    templateUrl: 'common/js/directives/header/header.html',
    controller: 'HeaderCtrl'
  }
})

.controller('HeaderCtrl', ['$scope', function($scope) {

}]);