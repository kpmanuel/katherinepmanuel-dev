/* global angular */
angular.module('app.home', [
  //services
  'ProjectsService',
  'SkillsService',
  'EducationService'
])

.controller('HomeCtrl', ['$scope', 'ProjectsService', 'SkillsService', 'EducationService',
                         function($scope, ProjectsService, SkillsService, EducationService) {
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
}]);