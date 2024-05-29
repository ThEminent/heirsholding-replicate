var cto;
$("header .dropdown").hover(function(){
    clearTimeout(cto);
    n = $(this).find(".dropdown-menu").attr("n");
    $(".dropdown-menu:not(.dropdown-menu[n="+n+"])").fadeOut();
    $(this).find(".dropdown-menu").fadeIn();
}, function(){
    cto = setTimeout(function(){
        $(".dropdown-menu").fadeOut();
    },500);
});

$(document).on("scroll resize", function(){
    if($(document).width()>1100)
    {
        if($(document).scrollTop()>0){
            $("header").css({"background":"#fffd", "color":"#222"});
            $("header img.l1").attr("src", "assets/images/logo-red.png");
        }
        else{
            $("header").css({"background":"#fff0", "color":"#fff"});
            $("header img.l1").attr("src", "assets/images/logo.png");
        }
    }
    else{
        $("header").css({"background":"#fff", "color":"#222"});
        $("header img.l1").attr("src", "assets/images/logo-red.png");
    }
});

$(".menu-btn").click(function(){
    $(this).toggleClass("fa-times fa-bars");
    $("#sidebar").slideToggle();
})

$(".switch-btn").click(function(){
    $(this).css("justify-content","end");
    $(this).css("background", "#09c");
    $(this).find(".loader").css("display", "block");
});

$(".exit-switch-btn, .hmodalbg, .shmodalbg").click(function(){
    $(".hmodal, .shmodal").fadeOut();
});

$("#night-mode-btn").click(function(){
    $(".hmodal").fadeIn(100, function(){
        $(this).css("display", "flex");
    })
});


$(".search-btn").click(function(){
    $(".shmodal").fadeIn(100, function(){
        $(this).css("display", "flex");
    })
});