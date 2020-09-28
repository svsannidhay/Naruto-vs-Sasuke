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
});