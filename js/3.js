$(function() {
    $("#huaguo").mouseenter(function() {
        $(".tfoot-huaguo").css({ "display": "block" })
        $(".tfoot-huaguo1").css({ "display": "none" })
    }).mouseleave(function() {
        $(".tfoot-huaguo").css({ "display": "none" })
    })
    $("#huaguo1").mouseenter(function() {
        $(".tfoot-huaguo1").css({ "display": "block" })
        $(".tfoot-huaguo").css({ "display": "none" })
    }).mouseleave(function() {
        $(".tfoot-huaguo1").css({ "display": "none" })
    })
    $(".cloce").click(function() {
        var se = confirm("您确定不购买该商品？");
        if (se == true)  {  alert("你按下的是【确定】")  } else {$(this).parent("tbody").remove("tbody"); }
    })
        $(".table-jian").click(function(){
            var num = Number($("input").val());
            var result = num - 1;
            if(result > 0){
                result = num - 1
            }else{
                result = 0;
            }
            $(".tbody-input").val(result)
            var i =result*1599
            var y =result*200.00
            var o =result*1799
            $(".jia1").text("已优惠:￥"+y+".00")
            $(".jia").text("￥"+i)
            $(".jia").text("￥"+i)
            $(".jia2").text("￥"+o)
            $(".jia3").text("￥"+y)
            $(".jia4").text("￥"+i)


        })
        $(".table-jia").click(function(){
            var num = Number($("input").val());
            var result = num + 1;
            $(".tbody-input").val(result)
            var i = result*1599
            var y =result*200.00
            var o =result*1799
            $(".jia1").text("已优惠:￥ "+y+".00")
            $(".jia").text("￥"+i)
            $(".jia2").text("￥"+o)
            $(".jia3").text("￥"+y)
            $(".jia4").text("￥"+i)

        })
    
})