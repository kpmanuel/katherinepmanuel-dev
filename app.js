/* global angular */
angular.module('app', [
  //third party
  'ui.router',
  'slick',
  'ngTouch',
  
  //pages
  'app.home',
  'app.project',
  
  //directives
  'app.header',
  'app.footer',
  'app.scrollToElement'
])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$qProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $qProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'app/home/home.html',
      controller: 'HomeCtrl'
    })
    .state('project', {
      url: '/project',
      templateUrl: 'app/project/project.html',
      controller: 'ProjectCtrl'
    })
    .state('default', {
      url: '/',
      templateUrl: 'app/home/home.html',
      controller: 'HomeCtrl'
    })
  
  $urlRouterProvider
    .when('', '/')
  
  //Remove the hash-bang (#!) from the URL (e.g. http://kpm.indystardev.com/angularjs/#!/projects)
  //Default to hash (#)
  $locationProvider.hashPrefix('');
  
  //Bug fix
  $qProvider.errorOnUnhandledRejections(false);
}]);

