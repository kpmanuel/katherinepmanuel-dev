/* global angular */
angular.module('UISkillsService', [])

.factory('UISkillsService', ['$http', function($http) {
  return {
    getSkills : function() {
      return $http.get('common/data/ui-skills.json');
    }
  }
}]);