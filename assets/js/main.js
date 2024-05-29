$("#hero-video video.slide").on("ended", function(){
    slide();
})


var ddelay = 3;//Delay in seconds
var cv = 0;
slide();

function slide(){
    tinv = setTimeout(function(){
        slide();
    },ddelay*1000);
    
    nos = $(".slide").length;

    cv++;
    if(cv>nos)
    cv=1;

    $(".slide:not(.slide[n="+cv+"])").css("opacity", "0");
    $(".slide[n="+cv+"]").css("opacity", "1");

    if($(".slide[n="+cv+"]").prop("tagName")=="VIDEO")
    {
        $(".slide[n="+cv+"]").prop('currentTime', 0);
        $(".slide[n="+cv+"]").trigger('play');
        clearTimeout(tinv)
    }
}

