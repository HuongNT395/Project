// ẩn và hiện menu bar
$(document).ready(function(){
    $("#pull").click(function(){
        $("nav ul").slideToggle();
    });
});
$(document).ready(function(){
    $(".hide").click(function(){
        $(".sub").slideToggle();
    });
});

//Hiện xem thêm tóm tắt truyện
$(document).ready(function(){
    $("a#tt").click(function(){
        $("#introduce").css("height","auto")
        $("#tt").hide();
        $("#tg").show();
    });
});
