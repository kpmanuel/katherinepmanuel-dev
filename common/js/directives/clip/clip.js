/* global angular */
angular.module('app.clip', [
])

/* E = element */
.directive('appClip', function() {
  return {
    restrict: 'E',
    templateUrl: 'common/js/directives/clip/clip.html',
    controller: 'ClipCtrl'
  }
})

.controller('ClipCtrl', ['$scope', function($scope) {

}]);