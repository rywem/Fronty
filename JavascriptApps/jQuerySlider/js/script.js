$(document).ready(function() {
    //set options
    var speed = 500;                //fade speed, in ms
    var autoswitch = true;          //auto slider option
    var autoswitch_speed = 4000;    //auto slider speed
    //Add initial active class
    $('.slide').first().addClass('active');
    
    //hide all slides
    $('.slide').hide();
    
    //show first slide
    $('.active').show();
    
    $('#next').on('click', nextSlide);
    
    $('#prev').on('click', prevSlide);
    
    //Auto slider handler
    if(autoswitch == true) {
        setInterval(nextSlide, autoswitch_speed);
    }
    
    
    //switch to the next slide
    function nextSlide() {
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active'); //if at the end of the list, restart with the first image
        } else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
    //switch to previous slide
    function prevSlide() {
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':first-child')){
            $('.slide').last().addClass('active'); //if at the end of the list, restart with the first image
        } else {
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
});