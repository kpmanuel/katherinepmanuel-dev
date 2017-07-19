/* global angular */
angular.module('app', [
  //third party
  'ngRoute',
  'slick',
  'ngTouch',
  
  //pages
  'app.home',
  
  //directives
  'app.header',
  'app.footer'
])

.config(['$routeProvider', '$locationProvider', '$qProvider', function($routeProvider, $locationProvider, $qProvider) {
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
  
  //Bug fix
  $qProvider.errorOnUnhandledRejections(false);
}]);

