$(document).ready(function(){
   /*For sticky navigation bar*/
    $('.js--greatestShinobi').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    },{
        offset:'70px'
    });
    
    /*Scroll on navigations */
    $('.js--scrollToGreatestShinobi').click(function(){
        $('html,body').animate({scrollTop: $('.js--greatestShinobi').offset().top},1000);
    });
    $('.js--scrollToSectionNations').click(function(){
        $('html,body').animate({scrollTop: $('.js--sectionNations').offset().top},1000);
    })
    /*Mobile navigation*/
    $('.js--navIcon').click(function(){
        var nav = $('.js--mainNav'); 
        nav.slideToggle(200);
        $('.js--navIcon').addClass('hide');
        $('.js--navIconCross').addClass('show');
    });
    $('.js--navIconCross').click(function(){
        var nav = $('.js--mainNav'); 
        nav.slideToggle(200);
        $('.js--navIcon').removeClass('hide');
        $('.js--navIconCross').removeClass('show');
    });
});