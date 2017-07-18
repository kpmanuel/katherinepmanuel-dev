/* global angular */
angular.module('SkillsService', [])

.factory('SkillsService', ['$http', function($http) {
  return {
    getSkills : function() {
      return $http.get('common/js/skills.json');
    }
  }
}]);