/* global angular */
angular.module('app.home', [
  //third party
  'slick',
  'bootstrapLightbox',
  'videosharing-embed',
  
  //services
  'ProjectsService'
])

.controller('HomeCtrl', ['$scope', '$rootScope', '$location', '$state', '$window', 'ProjectsService', 'Lightbox',
                         function($scope, $rootScope, $location, $state, $window, ProjectsService, Lightbox) {
  //scroll to top by default
  $window.scrollTo(0, 0);
  
  //debug purposes only
  $window.appDebug.HomeCtrl = $scope;
                           
  //get page
  $rootScope.page = $location.path();
              
  //get state
  $rootScope.state = $state.current;
  //console.log($rootScope.state.name);
  
  //get projects
  $scope.projects = [];
  ProjectsService.getProjects().then(function(results) {
    $scope.projects = results.data;
  });
  
  //open lightbox
  $scope.openGalleryModal = function(index) {
    Lightbox.openModal($scope.projects[index].gallery, 0);
  };
  
  //open video lightbox
  $scope.openVideoModal = function(index) {
    Lightbox.openModal($scope.projects[index].video, 0);
  };
}]);