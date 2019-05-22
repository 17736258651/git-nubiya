$(function() {
    // 头部
    $(".list li a").mouseenter(function() {
        $(this).css("color", "#a2a2a2")
    }).mouseleave(function() {
        $(this).css("color", "#fff")
    })
    var imgw = $(".pic img").width();
    $(".piclist li").click(function() {
        $(this).addClass("bannerlist-active").siblings().removeClass("bannerlist-active")
        var index = $(this).index()
        $(".pic").stop().animate({ marginLeft:index*(-imgw)}, 500)
    })
    var num = 0;
    $(".bx-prev").click(function() {
        num = num + 1;
        if (num === 4) {
            num = 0
        }
        $(".pic").stop().animate({ marginLeft: num * (-imgw) }, 500)
    })
    $(".bx-next").click(function() {
        num = num - 1;
        if (num === -1) {
            num = 3
        }
        $(".pic").stop().animate({ marginLeft: num * (-imgw) }, 500)
    })
    $(".product").mouseenter(function() {
        $(".sj").stop().slideDown(300)
    }).mouseleave(function() {
        $(".sj").stop().slideUp(300)
    })
    $(".sjright i").click(function() {
        $("#sj-ul").stop().animate({ marginLeft: -1540 })
    })
    $(".sjleft i").click(function() {
        $("#sj-ul").stop().animate({ marginLeft: 0 })
    })
    $(".product1").mouseenter(function() {
        $(".pj").stop().slideDown(300)
    }).mouseleave(function() {
        $(".pj").stop().slideUp(300)
    })
    $(".product2").mouseenter(function() {
        $(".sy").stop().slideDown(300)
    }).mouseleave(function() {
        $(".sy").stop().slideUp(300)
    })
    $(".product3").mouseenter(function() {
        $(".nubia-UI").stop().slideDown(300)
    }).mouseleave(function() {
        $(".nubia-UI").stop().slideUp(300)
    })
    // 导航
    $(".navlist li").mouseenter(function() {
        $(this).find("a").css("color", "red")
    }).mouseleave(function() {
        $(this).find("a").css("color", "#000")
    })
    $(".navlist li").mouseenter(function() {
        $(this).addClass("banner-active").siblings().removeClass("banner-active")
    }).mouseleave(function() {
        $(this).removeClass("banner-active")
    })
    $(".navlist li").mouseenter(function() {
        var index = $(this).index();
        $(".banner-cl").eq(index).css("display", "block").parent("li").siblings().find(".banner-cl").css("display", "none")
    }).mouseleave(function() {
        $(".banner-cl").css("display", "none")
    })
    $(".top ul li").mouseenter(function() {
        $(this).addClass("top-left-active").siblings().removeClass("top-left-active")
        $(this).find("a").css({ "color": "#fff" }).parent("li").siblings().find("a").css({ "color": "#555" })
    })
    // 内容
    var w = $(".right:first img").width();
    var h = $(".right:first img").height();
    $(".right div img").mouseenter(function() {
        $(this).stop().animate({ width: 1.1 * w, marginLeft: -(1.05 * w - w) / 2 }, 800)
    }).mouseleave(function() {
        $(this).stop().animate({ width: 310, marginLeft: 0 })
    })
    $(".remenchanpin li,.jingpinshouji li,.jingpinpeijian li").mouseenter(function() {
        $(this).find(".price").css({ "display": "none" }).parent("li").siblings().find(".price").css({ "display": "block" });
        $(this).find(".btn").css({ "display": "block" }).parent("li").siblings().find(".btn").css({ "display": "none" });
    }).mouseleave(function() {
        $(".btn").css({ "display": "none" });
        $(".remenchanpin .price").css({ "display": "block" });
    })
    $(".wz").mouseenter(function() {
        $(this).stop().animate({ marginTop: -10 })
    }).mouseleave(function() {
        $(this).stop().animate({ marginTop: 0 })
    })
    $(".row li").mouseenter(function() {
        $(this).css({ "color": "#e95f46" }).siblings().css({ "color": "#898b8a" })
    }).mouseleave(function() {
        $(this).css({ "color": "#898b8a" })
    })
    $(".footer-tubiao i").eq(0).mouseenter(function() {
        $(this).css({ "color": "#e5162c" }).siblings().css({ "color": "#b9b9b9" })
    }).mouseleave(function() {
        $(this).css({ "color": "#b9b9b9" })
    })
    $(".footer-tubiao i").eq(1).mouseenter(function() {
        $(this).css({ "color": "green" }).siblings().css({ "color": "#b9b9b9" })
    }).mouseleave(function() {
        $(this).css({ "color": "#b9b9b9" })
    })
    $(".footer-tubiao i").eq(3).mouseenter(function() {
        $(this).css({ "color": "#000" }).siblings().css({ "color": "#b9b9b9" })
    }).mouseleave(function() {
        $(this).css({ "color": "#b9b9b9" })
    })
    $("#wx").mouseenter(function() {
        $(".wxewm").stop().fadeIn(500)
    }).mouseleave(function() {
        $(".wxewm").stop().fadeOut(500)
    })
    $(".footer-list ul li i").mouseenter(function() {
        $(this).css({ "color": "#e5162c" }).siblings().css({ "color": "#b9b9b9" })
    }).mouseleave(function() {
        $(this).css({ "color": "#b9b9b9" })
    })
    $(".footer-list ul li i").eq(1).mouseenter(function() {
        $(".scewm").css({ "display": "block" })
    }).mouseleave(function() {
        $(".scewm").css({ "display": "none" })
    })
    $("#fhdb").click(function() {
        $("html,body").animate({ scrollTop: "0px" }, 500)
    })
})