/* global angular */
angular.module('EducationService', [])

.factory('EducationService', ['$http', function($http) {
  return {
    getEducation : function() {
      return $http.get('common/data/education.json');
    }
  }
}]);