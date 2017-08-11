/* global angular */
angular.module('app.project', [
  //third party
  'bootstrapLightbox',
  
  //services
  'ProjectsService'
])

.controller('ProjectCtrl', ['$scope', 'ProjectsService', 'Lightbox', function($scope, ProjectsService, Lightbox) {
  //get projects
  $scope.projects = [];
  ProjectsService.getProjects().then(function(results) {
    $scope.projects = results.data;
  });
}]);