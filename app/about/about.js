/* global angular */
angular.module('app.about', [  
  //services
  'UISkillsService',
  'UXSkillsService',
  'EducationService'
])

.controller('AboutCtrl', ['$scope', '$rootScope', '$location', '$window', 'UISkillsService', 'UXSkillsService', 'EducationService', 'Lightbox',
                          function($scope, $rootScope, $location, $window, UISkillsService, UXSkillsService, EducationService, Lightbox) {
  $window.scrollTo(0, 0);

  //get page
  $rootScope.page = $location.path();
  
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
}]);