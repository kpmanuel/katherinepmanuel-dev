/* global angular */
angular.module('app.safe2drive', [
])

/* E = element */
.directive('appSafe2drive', function() {
  return {
    restrict: 'E',
    templateUrl: 'common/js/directives/safe2drive/safe2drive.html',
    controller: 'Safe2DriveCtrl'
  }
})

.controller('Safe2DriveCtrl', ['$scope', function($scope) {

}]);