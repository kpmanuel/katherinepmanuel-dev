/* global angular */
angular.module('app', [
  //third party
  'ui.router',
  'slick',
  'ngTouch',
  
  //pages
  'app.home',
  'app.about',
  'app.project',
  
  //directives
  'app.header',
  'app.footer',
  'app.contact',
  'app.quote',
  'app.scrollToElement',
  'app.safe2drive',
  'app.daida',
  'app.socialq',
  'app.clip',
  'app.minnetrista',
  'app.fineryears',
  'app.algpi',
  'app.kentuckykingdom'
])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$qProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $qProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'app/home/home.html',
      controller: 'HomeCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'app/about/about.html',
      controller: 'AboutCtrl'
    })
    .state('project', {
      url: '/project/:id',
      templateUrl: 'app/project/project.html',
      controller: 'ProjectCtrl'
    })
    .state('default', {
      url: '/',
      templateUrl: 'app/home/home.html',
      controller: 'HomeCtrl'
    })
  
  $urlRouterProvider
    .when('', '/home')
  
  //Remove the hash-bang (#!) from the URL (e.g. http://kpm.indystardev.com/angularjs/#!/projects)
  //Default to hash (#)
  $locationProvider.hashPrefix('');
  
  //Bug fix
  $qProvider.errorOnUnhandledRejections(false);
}])

//Debug purposes only
.run(['$stateParams', function($stateParams) {
  window.appDebug = {};
  window.appDebug.$stateParams = $stateParams;
}])
;

