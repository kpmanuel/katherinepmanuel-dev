/* global angular */
angular.module('app.home', [
  //third party
  'slick',
  'bootstrapLightbox',
  'videosharing-embed',
  
  //services
  'ProjectsService'
])

.controller('HomeCtrl', ['$scope', '$rootScope', '$location', '$window', 'ProjectsService', 'Lightbox',
                         function($scope, $rootScope, $location, $window, ProjectsService, Lightbox) {
  $window.scrollTo(0, 0);
                           
  //get page
  $rootScope.page = $location.path();
  
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