/* global angular */
angular.module('app.footer', [])

/* E = element */
.directive('appFooter', function() {
  return {
    restrict: 'E',
    templateUrl: '/common/js/directives/footer/footer.html',
    controller: 'FooterCtrl'
  }
})

.controller('FooterCtrl', ['$scope', function($scope) {
  $scope.copyrightYear = new Date();
}]);