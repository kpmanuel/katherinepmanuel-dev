/* global angular */
angular.module('app.home', [
  //third party
  'slick',
  'bootstrapLightbox',
  
  //services
  'ProjectsService',
  'SkillsService',
  'EducationService'
])

.controller('HomeCtrl', ['$scope', 'ProjectsService', 'SkillsService', 'EducationService', 'Lightbox', function($scope, ProjectsService, SkillsService, EducationService, Lightbox) {
  //get projects
  $scope.projects = [];
  ProjectsService.getProjects().then(function(results) {
    $scope.projects = results.data;
  });
  
  //get skills
  $scope.skills = [];
  SkillsService.getSkills().then(function(results) {
    $scope.skills = results.data;
  });
  
  //get education
  $scope.education = [];
  EducationService.getEducation().then(function(results) {
    $scope.education = results.data;
  });
  
  //open lightbox
  $scope.openLightboxModal = function(index) {
    Lightbox.openModal($scope.projects[index].gallery, 0);
  };
}]);