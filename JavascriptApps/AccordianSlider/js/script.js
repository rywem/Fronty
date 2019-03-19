//accordian
//click on question, double click, or hover
var action = "click";
var speed = 500;

$(document).ready(function() {
    //question handler
   $('li.q').on(action, function(){
       //get next element       
       $(this).next()
            .slideToggle(speed) 
            .siblings('li.a') //hide all other answers
            .slideUp();
       //Get image in question 
       var img = $(this).children('img');
       //Remove the 'rotate' class for all images except the active
       $('img').not(img).removeClass('rotate');
       //toggle rotate class
       img.toggleClass('rotate');
   });
});