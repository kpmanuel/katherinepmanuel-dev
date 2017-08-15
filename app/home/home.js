/* global angular */
angular.module('app.home', [
  //third party
  'slick',
  'bootstrapLightbox',
  'videosharing-embed',
  
  //services
  'ProjectsService',
  'UISkillsService',
  'UXSkillsService',
  'EducationService'
])

.controller('HomeCtrl', ['$scope', 'ProjectsService', 'UISkillsService', 'UXSkillsService', 'EducationService', 'Lightbox', function($scope, ProjectsService, UISkillsService, UXSkillsService, EducationService, Lightbox) {
  //get projects
  $scope.projects = [];
  ProjectsService.getProjects().then(function(results) {
    $scope.projects = results.data;
  });
  
  //get ui skills
  $scope.uiskills = [];
  UISkillsService.getSkills().then(function(results) {
    $scope.uiskills = results.data;
  });
  
  //get ux skills
  $scope.uxskills = [];
  UXSkillsService.getSkills().then(function(results) {
    $scope.uxskills = results.data;
  });
  
  //get education
  $scope.education = [];
  EducationService.getEducation().then(function(results) {
    $scope.education = results.data;
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