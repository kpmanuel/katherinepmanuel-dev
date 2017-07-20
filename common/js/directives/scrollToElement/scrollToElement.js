/* global angular */

angular.module('app.scrollToElement', [])

.directive('scrollToElement', function() {
  return {
    restrict: 'A',
    link: function($scope, $element, $attrs) {
      var idToScroll = $attrs.scrollTo;  //attribute is initially data-scroll-to, but gets converted to scrollTo
      
      $element.on('click', function() {
        var $target;
        
        //check if ID exists
        if(idToScroll) {
          $target = angular.element(idToScroll);
        } else {
          $target = $element;
        }
        
        //scroll the body
        angular.element("html, body").animate({scrollTop: $target.offset().top - 40}, 1000);
        
        //shake section title
        var $sectionTitle = angular.element('.section-title span');
        
        $target.find($sectionTitle).addClass('animated infinite tada');
        
        function removeAnimation() {
          $target.find($sectionTitle).removeClass('animated infinite tada');
        }
        setTimeout(removeAnimation, 2000);
      });      
    }
  }
});