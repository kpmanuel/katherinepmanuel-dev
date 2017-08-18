/* global angular */
angular.module('UXSkillsService', [])

.factory('UXSkillsService', ['$http', function($http) {
  return {
    getSkills : function() {
      return $http.get('common/data/ux-skills.json');
    }
  }
}]);