/* global angular */
angular.module('ProjectsService', [])

.factory('ProjectsService', ['$http', function($http) {
  return {
    getProjects : function() {
      return $http.get('common/data/projects.json');
    }
  }
}]);