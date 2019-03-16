$(document).ready(function() {
   
    $(".box").first().addClass("active");
    //hide all other boxes
    $(".box").hide();
    $(".active").show();
    
    $("#arrow-right").on("click", function() {
        //check if last object
        $(".active").first().addClass("oldActive").removeClass("active");
        if($(".oldActive").is(":last-child")) {
            $(".box").first().addClass("active");
        }
        else {
            $(".oldActive").next().addClass("active");
        }        
        $(".box").hide();
        $(".active").show();
        $(".oldActive").removeClass("oldActive");
    });
    
    $("#arrow-left").on("click", function() {
        //check if last object
        $(".active").first().addClass("oldActive").removeClass("active");
        if($(".oldActive").is(":first-child")) {
            $(".box").last().addClass("active");
        }
        else {
            $(".oldActive").prev().addClass("active");
        }        
        $(".box").hide();
        $(".active").show();
        $(".oldActive").removeClass("oldActive");
    });
    
});