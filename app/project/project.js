/* global angular */
angular.module('app.project', [
  //third party
  'ui.router',
  'bootstrapLightbox',
  'videosharing-embed',
  
  //services
  'ProjectsService'
])

.controller('ProjectCtrl', ['$scope', '$rootScope', '$location', '$state', '$stateParams', '$window', 'ProjectsService', 'Lightbox',
                            function($scope, $rootScope, $location, $state, $stateParams, $window, ProjectsService, Lightbox) {  
  //scroll to top by default
  $window.scrollTo(0, 0);
                              
  //debug purposes only
  $window.appDebug.ProjectCtrl = $scope;
  
  $scope.projectId = $stateParams.id;
  $scope.projects = [];
                              
  //set variables to determine which project info directive to display (user "code" value in projecs.json)
  $scope.safe2drive = false;
  $scope.daida = false;
  $scope.socialq = false;
  $scope.clip = false;
  $scope.minnetrista = false;
  $scope.fineryears = false;
  $scope.algpi = false;
  $scope.kentuckykingdom = false;
  
  //get page
  $rootScope.page = $location.path();
  //console.log($rootScope.page);
                              
  //get state
  $rootScope.state = $state.current;
  //console.log($rootScope.state.name);
  
  //get projects  
  ProjectsService.getProjects().then(function(results) {
    $scope.projects = results.data;    
    
    //To split 'role' string...
    //go through projects array
    for (var key in $scope.projects) {      
      //check if current array element id is the same as the id parameter in the URL
      if($scope.projects[key].id === $stateParams.id) {
         //set reference to the current array element
         $scope.currentProject = $scope.projects[key];
      }      
    }
    
    //call function to update and report page title to google analytics
    $rootScope.reportPageView($scope.currentProject.name + " - Web/UI/UX Designer - Katherine P. Manuel");
    
    //check if current project id does not exist
    if($scope.currentProject === undefined) {
      //go back to homepage
      $state.go('home');
    }
    
    //assign 'role' string to roles variable and separate string on common. split() returns an array.
    $scope.roles = $scope.currentProject.role.split(",");
    
    //go through roles array
    for (var key2 in $scope.roles) {
      //replace variable value with trimmed value. trim() trims white space in the beginning and end of the string.
      $scope.roles[key2] = $scope.roles[key2].trim();
    }    
    
    //To determine which project info directive to display, use "codee" value from projects.json... 
    //console.log($scope.currentProject.code);
    switch($scope.currentProject.code) {
      case "safe2drive":
        $scope.safe2drive = true;
        break;
      case "daida":
        $scope.daida = true;
        break;
       case "socialq":
        $scope.socialq = true;
        break;
       case "clip":
        $scope.clip = true;
        break;
       case "minnetrista":
        $scope.minnetrista = true;
        break;
       case "fineryears":
        $scope.fineryears = true;
        break;
       case "algpi":
        $scope.algpi = true;
        break;
       case "kentuckykingdom":
        $scope.kentuckykingdom = true;
        break;
    }      
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