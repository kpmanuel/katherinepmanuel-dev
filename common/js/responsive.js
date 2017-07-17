$(document).ready(function() {
    /* global $ */
    
    
    //---------- MODAL ----------
    var $pageScrollPosition = 0;
    var $modalTarget;
    
    $('.btn-open-modal').click(function() { 
        $pageScrollPosition = $(window).scrollTop();  //get vertical scrollbar position when modal is open
        
        //Determine which modal to open
        $modalTarget = '#' + $(this).data('target');
        
        //Display the modal
        $($modalTarget).addClass('modal-fade');
        
        //disable scrolling
        $('body').addClass('no-scroll'); //sets position:fixed
        
        //set new scroll position
        $('body').css({top: parseInt(-$pageScrollPosition, 10)});  //top style is required with position:fixed
        $($modalTarget).css({top: parseInt($pageScrollPosition, 10)});  //pull down the modal in place
    });
    
    //Close the modal. Use this on the X icon.
    $('.modal-close').click(function() {
        checkForVideo();
        closeModal();
    });
    
    //Close the modal. Use this on the background.
    $('.modal-bg').click(function() {
        checkForVideo();
        closeModal();
    });
    
    function checkForVideo() {
        //check if there is a video in the modal (assumes there is only one video in a modal)  
        var withVideo = $('video').length;  //if no video exists, this returns zero

        if (withVideo) {  //if there is a video
            //check if there is a video playing
            var videoIsPaused = $('video').get(0).paused;
            
            if (!videoIsPaused)
            {  //video is playing
                $('video').get(0).pause();  //pause it
                $('video').get(0).currentTime = 0;  //move current time to the beginning of the video
            }
        }
    }

    function closeModal() {
        $($modalTarget).removeClass('modal-fade');

        //enable scrolling
        $('body').removeClass('no-scroll');
        
        //set to old scroll position
        $('body').css({top: 'auto'});
        $($modalTarget).css({top: 'auto'});
        $('body').scrollTop(parseInt($pageScrollPosition, 10));  //10 indicates a decimal number
        $('html').scrollTop(parseInt($pageScrollPosition, 10));  //For Firefox
    }
    
    
    //---------- ALERT ----------
    var $alertTarget;
    var $alertTimeout;
    
    //Use for static alerts (user must close alert manually)
    $('.btn-open-alert').click(function() { 
        $pageScrollPosition = $(window).scrollTop();  //get vertical scrollbar position when alert is open
        
        //Determine which alert to open
        $alertTarget = '#' + $(this).data('target');
        
        //display alert box
        $($alertTarget).addClass('alert-fade');
        
        //set the position on the screen
        $($alertTarget).css({top: parseInt($pageScrollPosition, 10)});  //pull down the alert in place
    });
    
    //Use for temporary alert (fades after a few seconds)
    $('.btn-open-alert-temporary').click(function() { 
        $pageScrollPosition = $(window).scrollTop();  //get vertical scrollbar position when alert is open
        
        //Determine which alert to open
        $alertTarget = '#' + $(this).data('target');
        
        //display alert box
        $($alertTarget).addClass('alert-fade');
        
        //set the position on the screen
        $($alertTarget).css({top: parseInt($pageScrollPosition, 10)});  //pull down the alert in place
        
        //Automatically close the alert after 3 secs
        $alertTimeout = setTimeout(closeAlert, 3000);
    });
    
    //Close the alert. Use this on the X icon.
    $('.alert-close').click(function() {
        closeAlert();
    });
    
    //Close the alert. Use this on the background.
    function closeAlert() {
        $($alertTarget).removeClass('alert-fade');
        $($alertTarget).css({top: 'auto'});
        clearTimeout($alertTimeout);
    }
    
    
    //---------- MENU (1-ROW NAV) ----------
    var $isMenuOpen = false;
    
    $('#btn-toggle-menu').click(function() {
        $isMenuOpen = !$isMenuOpen;
    
        //Check if menu is already open
        if($isMenuOpen) {  //if true
            $('#main-nav').addClass('menu-open');
            $('.icon-menu').addClass('icon-cancel-1');
        } else {  //if false
            $('#main-nav').removeClass('menu-open');
            $('.icon-menu').removeClass('icon-cancel-1');
        }
    });
    
    
    //---------- MENU2 ----------
    var $isMenuOpen2 = false;
    
    $('#btn-toggle-menu2').click(function() {
        $isMenuOpen2 = !$isMenuOpen2;
    
        //Check if menu is already open
        if($isMenuOpen2) {  //if true
            $('#menu2').addClass('menu-open');
            $('.icon-menu').addClass('icon-cancel-1');
        } else {  //if false 
            $('#menu2').removeClass('menu-open');
            $('.icon-menu').removeClass('icon-cancel-1');
        }
    });
    
    
    //---------- ACCORDION PANELS ----------
    var $isPanelOpen = false;
    
    $('.accordion-panel-toggle-button').click(function() {
        // determine target panel
        var $thisTarget = '#' + $(this).data('target');
        
        // check if panel is already open
        $isPanelOpen = $($thisTarget).hasClass('panel-open');
        if($isPanelOpen) {  //if true, close it
            // remove class from target panel
            $($thisTarget).removeClass('panel-open');

            // switch the target's button icon
            $(this).children().removeClass('icon-up-dir');
            $(this).children().addClass('icon-down-dir');
        } else {  //if false
            // remove any and all classes that matches class name
            $('.panel-body-container').removeClass('panel-open');
            
            // switch any and all button icons
            $('.accordion-panel-toggle-button').children().removeClass('icon-up-dir');
            $('.accordion-panel-toggle-button').children().addClass('icon-down-dir');
            
            // add class to target panel only
            $($thisTarget).addClass("panel-open");
            
            // switch the target button's icon only
            $(this).children().removeClass('icon-down-dir');
            $(this).children().addClass('icon-up-dir');
            
            //animate scroll
            $('html, body').animate({ scrollTop: $(this).offset().top - 15}, 500);
        }
    });    
});