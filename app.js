/* global angular */
angular.module('app', [
  //third party
  'ui.router',
  'slick',
  'ngTouch',
  'angular-google-analytics',
  
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

/**
 * Google Analytics
 * @note  https://github.com/revolunet/angular-google-analytics
 */
.config(['AnalyticsProvider', function (AnalyticsProvider) {  
   AnalyticsProvider
    .setAccount(window.env.var('googleAnalyticsCode'))
    // Track all routes (default is true).
    .trackPages(false)
    // Track all URL query params (default is false).
    .trackUrlParams(true)
    // Ignore first page view (default is false).
    // Helpful when using hashes and whenever your bounce rate looks obscenely low.
    .ignoreFirstPageLoad(true)
    // Change the default page event name.
    // Helpful when using ui-router, which fires $stateChangeSuccess instead of $routeChangeSuccess.
    .setPageEvent('$stateChangeSuccess')
    // Set the domain name
    .setDomainName('www.katherinepmanuel.com')
  ;
}])

//Debug purposes only
.run(['$stateParams', 'Analytics', '$rootScope', function($stateParams, Analytics, $rootScope) {
  window.appDebug = {};
  window.appDebug.$stateParams = $stateParams;
  window.appDebug.Analytics = Analytics;
  window.appDebug.$rootScope = $rootScope;
}])

//Root scope initialization
.run(['$rootScope', 'Analytics', '$timeout', function($rootScope, Analytics, $timeout) {
  $rootScope.Analytics = Analytics;
  $rootScope.pageTitle = "Web/UI/UX Designer - Katherine P. Manuel";
  
  //report page view to google analytics
  $rootScope.reportPageView = function(pageTitle) {
    //check if pageTitle parameter has a value; if yes, then set pageTitle to that value
    if(pageTitle !== undefined) {
      $rootScope.pageTitle = pageTitle;
    }    
    
    //set a delay before reporting to google analytics to avoid race conditions
    $timeout(function() {
      //report to google analytics.  sample code is: Analytics.trackPage(path URL, page title)
      //console.log('tracking: window.location.hash: ', window.location.hash);
      //console.log('tracking: $rootScope.pageTitle: ', $rootScope.pageTitle);
      Analytics.trackPage(
        window.location.hash,
        $rootScope.pageTitle   
      );
    }, 2000);    
  };
}])
;

