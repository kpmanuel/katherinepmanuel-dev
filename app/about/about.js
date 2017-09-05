/* global angular */
angular.module('app.about', [  
  //services
  'UISkillsService',
  'UXSkillsService',
  'EducationService'
])

.controller('AboutCtrl', ['$scope', '$rootScope', '$location', '$state', '$window', 'UISkillsService', 'UXSkillsService', 'EducationService', 'Lightbox',
                          function($scope, $rootScope, $location, $state, $window, UISkillsService, UXSkillsService, EducationService, Lightbox) {
  //scroll to top by default
  $window.scrollTo(0, 0);
                            
  //debug purposes only
  $window.appDebug.AboutCtrl = $scope;                          

  //get page
  $rootScope.page = $location.path();
                            
  //get state
  $rootScope.state = $state.current;
  //console.log($rootScope.state.name);
  
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