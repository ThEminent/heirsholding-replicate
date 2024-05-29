$("#hero-video video.slide").on("ended", function(){
    slide();
})

var cv = 1
function slide(){
    tinv = setTimeout(function(){
        slide();
    },3000);
    
    nos = $(".slide").length;

    cv++;
    if(cv>nos)
    cv=1;

    // $(".slide:not(.slide[n="+cv+"])").fadeOut();
    // $(".slide[n="+cv+"]").fadeIn();

    $(".slide:not(.slide[n="+cv+"])").css("opacity", "0");
    $(".slide[n="+cv+"]").css("opacity", "1");

    if($(".slide[n="+cv+"]").prop("tagName")=="VIDEO")
    {
        $(".slide[n="+cv+"]").prop('currentTime', 0);
        $(".slide[n="+cv+"]").trigger('play');
        clearTimeout(tinv)
    }
}

