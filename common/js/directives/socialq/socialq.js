/* global angular */
angular.module('app.socialq', [
])

/* E = element */
.directive('appSocialq', function() {
  return {
    restrict: 'E',
    templateUrl: 'common/js/directives/socialq/socialq.html',
    controller: 'SocialQCtrl'
  }
})

.controller('SocialQCtrl', ['$scope', function($scope) {

}]);