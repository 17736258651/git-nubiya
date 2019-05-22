$(function() {
    $(".banner-list ul li").click(function() {
        $(this).addClass("banner-list-active").siblings().removeClass("banner-list-active");
        var index = $(this).index();
        $(".tab-pane div").eq(index).css("display", "block").parents(".s-pay-con").siblings().find(".tab-pane div").css("display", "none")
    })
    $(".banner-list ul li").mouseenter(function() {
    	$(this).find("a").css({"color":"#e8380d"}).parents("li").siblings().find("a").css({"color":"#999"})
    })
})