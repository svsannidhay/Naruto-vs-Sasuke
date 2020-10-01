$(document).ready(function(){
    /*------------------------------*/
    /*-------Sticky navigation------*/
    /*------------------------------*/
    $('.js--greatestShinobi').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    },{
        offset:'70px'
    });
    /*------------------------------*/
    /*-------Mobile navigation------*/
    /*------------------------------*/
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
    /*------------------------------*/
    /*-----Scroll on  navigation----*/
    /*------------------------------*/
    $('.js--scrollToGreatestShinobi').click(function(){
        $('html,body').animate({scrollTop: $('.js--greatestShinobi').offset().top},1000);
    });
    $('.js--scrollToSectionNations').click(function(){
        $('html,body').animate({scrollTop: $('.js--sectionNations').offset().top},1000);
    })
    
    /*------------------------------*/
    /*---Animation Greatest shinobi----*/
    /*------------------------------*/
    $('.js--wayPoint-0').waypoint(function(direction){
       if(direction == 'up'){
            $('.js--wayPoint-1').removeClass('animate__animated animate__fadeIn');
            $('.js--wayPoint-1').removeClass('animate__animated animate__pulse');
       }else{
            $('.js--wayPoint-1').addClass('animate__animated animate__fadeIn');
            $('.js--wayPoint-1').addClass('animate__animated animate__pulse');
       }
    },{
        offset:'70%'
    });
    $('.js--wayPoint-1').waypoint(function(direction){
        $('.js--wayPoint-1').addClass('animate__animated animate__fadeIn');
        $('.js--wayPoint-1').addClass('animate__animated animate__pulse');
    },{
        offset:'50%'
    });
    $('.js--wayPoint-2').waypoint(function(direction){
       if(direction == 'down'){
           $('.js--wayPoint-1').removeClass('animate__animated animate__fadeIn');
           $('.js--wayPoint-1').removeClass('animate__animated animate__pulse');
       }else{
           $('.js--wayPoint-1').addClass('animate__animated animate__fadeIn');
           $('.js--wayPoint-1').addClass('animate__animated animate__pulse');
       }
    },{
        offset:'40%'
    });
    /*------------------------------------*/
    /*--Animation F aive Great Nations----*/
    /*------------------------------------*/
    $('.js--wayPoint-2').waypoint(function(direction){
       if(direction == 'up'){
           $('.js--wayPoint-3').removeClass('animate__animated animate__fadeIn');
           $('.js--wayPoint-3').removeClass('animate__animated animate__pulse');
       }else{
            $('.js--wayPoint-3').addClass('animate__animated animate__fadeIn');
            $('.js--wayPoint-3').addClass('animate__animated animate__pulse');
       }
    },{
        offset:'40%'
    });
    $('.js--wayPoint-3').waypoint(function(direction){
        $('.js--wayPoint-3').addClass('animate__animated animate__fadeIn');
        $('.js--wayPoint-3').addClass('animate__animated animate__pulse');
    },{
        offset:'60%'
    });
});