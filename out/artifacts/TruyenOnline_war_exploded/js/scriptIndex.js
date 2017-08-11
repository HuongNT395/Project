$(document).ready(function(){
    $("#pull").click(function(){
        $("nav ul").slideToggle();
    });
});

$(document).ready(function(){
    $("a#tt").click(function(){
        $("p.gt1").slideToggle();
    });
});

$(window).load(function () {
    $("p.gt1").slideUp("slow");
});

$(document).ready(function(){
    $(window).load(function () {
        $("p.gt1").slideUp("slow");
    });
});