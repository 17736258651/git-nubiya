$(function() {
    $(".main-content-left ul li").click(function() {
        var i = $(this).index() + 1;
        var src = "images/images2/1_0" + i + ".jpg"
        $(".main-pic img").attr("src", src)
        $(this).addClass("main-left-list-active").siblings().removeClass("main-left-list-active")
    })
    $(".main-content-left ul li").click(function() {
        var i = $(this).index() + 1;
        var src = "images/images2/2_0" + i + ".jpg"
        $(".main-pic1 img").attr("src", src)
        $(this).addClass("main-left-list-active").siblings().removeClass("main-left-list-active")
    })
    $(".main-content-left ul li").click(function() {
        var i = $(this).index() + 1;
        var src = "images/images2/3_0" + i + ".jpg"
        $(".main-pic2 img").attr("src", src)
        $(this).addClass("main-left-list-active").siblings().removeClass("main-left-list-active")
    })
    $(".main-content-left ul li").click(function() {
        var i = $(this).index() + 1;
        var src = "images/images2/4_0" + i + ".jpg"
        $(".main-pic3 img").attr("src", src)
        $(this).addClass("main-left-list-active").siblings().removeClass("main-left-list-active")
    })
    $(".main-content-left ul li").click(function() {
        var i = $(this).index() + 1;
        var src = "images/images2/5_0" + i + ".jpg"
        $(".main-pic4 img").attr("src", src)
        $(this).addClass("main-left-list-active").siblings().removeClass("main-left-list-active")
    })
    $("#spxq").click(function() {
        $(".xq").css({ "display": "block" });
        $(".cs").css({ "display": "none" });
    })
    $("#ggcs").click(function() {
        $(".xq").css({ "display": "none" });
        $(".cs").css({ "display": "block" });
    })
    $(".sjys li").click(function() {
        $(this).addClass("ys-border").siblings().removeClass("ys-border")
    })
    $(".banben li").click(function() {
        $(this).addClass("bb-border").siblings().removeClass("bb-border")
    })
    $(".huabei li").click(function() {
        $(this).addClass("hb-border").siblings().removeClass("hb-border")
    })
    $(".fx").mouseenter(function() {
        $(".main-ul").css({ "display": "block" })
    }).mouseleave(function() {
        $(".main-ul").css({ "display": "none" })
    })
    $(".ys li").click(function() {
        var index = $(this).index();
        $(".main-content-left").eq(index).css("display", "block").siblings(".main-content-left").css("display", "none")
    })
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 200) {
            $(".top-div").stop().slideDown(300)
        } else {
            $(".top-div").css({"display":"none"})
        };
  })
})