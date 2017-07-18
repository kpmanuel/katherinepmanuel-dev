/* global angular */
angular.module('app', [
  //third party
  'ngRoute',
  
  //pages
  'app.home',
  
  //directives
  'app.header',
  'app.footer'
])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'app/home/home.html',
      controller: 'HomeCtrl'
    })
    .when('/', {
      templateUrl: 'app/home/home.html',
      controller: 'HomeCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
  
  //Remove the hash-bang (#!) from the URL (e.g. http://kpm.indystardev.com/angularjs/#!/projects)
  //Default to hash (#)
  $locationProvider.hashPrefix('');
}]);

