/* global angular */
angular.module('app.quote', [])

/* E = element */
.directive('appQuote', function() {
  return {
    restrict: 'E',
    templateUrl: 'common/js/directives/quote/quote.html',
    controller: 'QuoteCtrl'
  }
})

.controller('QuoteCtrl', ['$scope', function($scope) {

}]);