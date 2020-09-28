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
});