$(function() {
    $(".slider2>a").hover(s2)

    $(".slider3>a").hover(s3)

    $(".slider4>a").hover(s4)

    $(".slider1>a").hover(s1)
})


var s2 = function() {
    $(".slider2").css("background", "url(./img/index/know-pic.png)")
    $(".slider2").css("width", "592px")
    $(".slider2").css("height", "356px")
    $(".slider2").css("margin-left", "-9px")

    // 背景图的变换
    $(".slider1").css("background", "none")
    $(".slider1").css("width", "282px")
    $(".slider1").css("height", "356px")
    $(".slider1").css("background-color", "#dbf6e9")
    $(".slider1").css("border-radius", "4px")

    $(".slider3").css("background", "none")
    $(".slider3").css("width", "282px")
    $(".slider3").css("height", "356px")
    $(".slider3").css("background-color", "#dbf6e9")
    $(".slider3").css("border-radius", "4px")

    $(".slider4").css("background", "none")
    $(".slider4").css("width", "282px")
    $(".slider4").css("height", "356px")
    $(".slider4").css("background-color", "#ecf9f3")
    $(".slider4").css("border-radius", "4px")



    //其他字体的变化
    // 内容

    $(".slider1-txt").addClass("content-onclick-border")

    $(".slider3-txt").addClass("content-onclick-border3")

    $(".slider4-txt").addClass("content-onclick-border4")





    // 时间
    $(".news>p").addClass("news-onclick-txt")
    $(".data>p").addClass("data-onclick-txt")
    $(".news").addClass("news-onclick")
    $(".data").addClass("data-onclick")

    $(".news3>p").addClass("news-onclick-txt3")
    $(".data3>p").addClass("data-onclick-txt3")
    $(".news3").addClass("news-onclick3")
    $(".data3").addClass("data-onclick3")

    $(".news4>p").addClass("news-onclick-txt4")
    $(".data4>p").addClass("data-onclick-txt3")
    $(".news4").addClass("news-onclick4")
    $(".data4").addClass("data-onclick3")

    // 本身字体的变换
    // 内容
    $(".slider2-txt>p").addClass("content-change-txt")
    $(".slider2-txt").addClass("content-change-border")

    // 其余字体内容点击之后应该复原
    $(".slider3-txt>p").removeClass("content-change-txt")
    $(".slider3-txt").removeClass("content-change-border")

    $(".slider4-txt>p").removeClass("content-change-txt")
    $(".slider4-txt").removeClass("content-change-border")

    $(".slider1-txt>p").removeClass("content-change-txt")
    $(".slider1-txt").removeClass("content-change-border")


    // 时间
    $(".news2>p").addClass("news-change-txt")
    $(".data2>p").addClass("data-change-txt")
    $(".news2").addClass("news-change-border")
    $(".data2").addClass("data-change-border")

    // 其余点击的时间也要去掉
    $(".news3>p").removeClass("news-change-txt")
    $(".data3>p").removeClass("data-change-txt")
    $(".news3").removeClass("news-change-border")
    $(".data3").removeClass("data-change-border")

    $(".news>p").removeClass("news-change-txt")
    $(".data>p").removeClass("data-change-txt")
    $(".news").removeClass("news-change-border")
    $(".data").removeClass("data-change-border")

    $(".news4>p").removeClass("news-change-txt")
    $(".data4>p").removeClass("data-change-txt")
    $(".news4").removeClass("news-change-border")
    $(".data4").removeClass("data-change-border")

    //  原来的第一框的各种字体颜色回到原来
    $(".slider1-txt>p").css("color", "#444444")
    $(".slider1-txt>p").css("font-weight", "550")
    $(".news>p").css("color", "#45c387")
    $(".data>p").css("color", "#999999")
    $(".news").css("margin-top", "317px")
    $(".data").css("margin-top", "316px")

    // 当框变大时字体变色
    $(".news2>p").css("color", "#d1df69")
    $(".data2>p").css("color", "#fff")

    $(".news>p").css("color", "#45c387")
    $(".data>p").css("color", "#999999")
    $(".news3>p").css("color", "#45c387")
    $(".data3>p").css("color", "#999999")
    $(".news4>p").css("color", "#45c387")
    $(".data4>p").css("color", "#999999")
    $(".data3").css("margin-top", "199px")
}

var s3 = function() {
    $(".slider3").css("background", "url(./img/index/know-pic.png)")
    $(".slider3").css("width", "592px")
    $(".slider3").css("height", "356px")
    $(".slider3").css("margin-left", "-9px")

    // 背景图变换
    $(".slider1").css("background", "none")
    $(".slider1").css("width", "282px")
    $(".slider1").css("height", "356px")
    $(".slider1").css("background-color", "#dbf6e9")
    $(".slider1").css("border-radius", "4px")

    $(".slider2").css("background", "none")
    $(".slider2").css("width", "282px")
    $(".slider2").css("height", "356px")
    $(".slider2").css("background-color", "#ecf9f3")
    $(".slider2").css("border-radius", "4px")

    $(".slider4").css("background", "none")
    $(".slider4").css("width", "282px")
    $(".slider4").css("height", "356px")
    $(".slider4").css("background-color", "#ecf9f3")
    $(".slider4").css("border-radius", "4px")

    // 本身字体的变换
    // 内容
    $(".slider3-txt>p").addClass("content-change-txt")
    $(".slider3-txt").addClass("content-change-border")

    //其余块字体点击当前块时复原
    $(".slider2-txt>p").removeClass("content-change-txt")
    $(".slider2-txt").removeClass("content-change-border")

    $(".slider4-txt>p").removeClass("content-change-txt")
    $(".slider4-txt").removeClass("content-change-border")

    $(".slider1-txt>p").removeClass("content-change-txt")
    $(".slider1-txt").removeClass("content-change-border")

    // 时间
    $(".news3>p").addClass("news-change-txt")
    $(".data3>p").addClass("data-change-txt")
    $(".news3").addClass("news-change-border")
    $(".data3").addClass("data-change-border")

    // 其余点击的时间也要去掉
    $(".news2>p").removeClass("news-change-txt")
    $(".data2>p").removeClass("data-change-txt")
    $(".news2").removeClass("news-change-border")
    $(".data2").removeClass("data-change-border")

    $(".news>p").removeClass("news-change-txt")
    $(".data>p").removeClass("data-change-txt")
    $(".news").removeClass("news-change-border")
    $(".data").removeClass("data-change-border")

    $(".news4>p").removeClass("news-change-txt")
    $(".data4>p").removeClass("data-change-txt")
    $(".news4").removeClass("news-change-border")
    $(".data4").removeClass("data-change-border")

    //其他字体的变化
    // 内容

    $(".slider1-txt").addClass("content-onclick-border")

    $(".slider2-txt").addClass("content-onclick-border2")

    $(".slider4-txt").addClass("content-onclick-border4")

    // 时间
    $(".news>p").addClass("news-onclick-txt")
    $(".data>p").addClass("data-onclick-txt")
    $(".news").addClass("news-onclick")
    $(".data").addClass("data-onclick")

    $(".news2>p").addClass("news-onclick-txt2")
    $(".data2>p").addClass("data-onclick-txt2")
    $(".news2").addClass("news-onclick2")
    $(".data2").addClass("data-onclick2")

    $(".news4>p").addClass("news-onclick-txt4")
    $(".data4>p").addClass("data-onclick-txt4")
    $(".news4").addClass("news-onclick4")
    $(".data4").addClass("data-onclick4")


    // 原来的第一框的各种字体颜色回到原来
    $(".slider1-txt>p").css("color", "#444444")
    $(".slider1-txt>p").css("font-weight", "550")
    $(".news>p").css("color", "#45c387")
    $(".data>p").css("color", "#999999")
    $(".news").css("margin-top", "317px")
    $(".data").css("margin-top", "316px")
    $(".data3").css("margin-top", "-10px")

    // 当框变大时字体变色
    $(".news3>p").css("color", "#d1df69")
    $(".data3>p").css("color", "#fff")

    $(".news2>p").css("color", "#45c387")
    $(".data2>p").css("color", "#999999")
    $(".news>p").css("color", "#45c387")
    $(".data>p").css("color", "#999999")
    $(".news4>p").css("color", "#45c387")
    $(".data4>p").css("color", "#999999")
}

var s4 = function() {
    $(".slider4").css("background", "url(./img/index/know-pic.png)")
    $(".slider4").css("width", "592px")
    $(".slider4").css("height", "356px")
    $(".slider4").css("margin-left", "-9px")

    $(".slider1").css("background", "none")
    $(".slider1").css("width", "282px")
    $(".slider1").css("height", "356px")
    $(".slider1").css("background-color", "#dbf6e9")
    $(".slider1").css("border-radius", "4px")

    $(".slider2").css("background", "none")
    $(".slider2").css("width", "282px")
    $(".slider2").css("height", "356px")
    $(".slider2").css("background-color", "#ecf9f3")
    $(".slider2").css("border-radius", "4px")

    $(".slider3").css("background", "none")
    $(".slider3").css("width", "282px")
    $(".slider3").css("height", "356px")
    $(".slider3").css("background-color", "#dbf6e9")
    $(".slider3").css("border-radius", "4px")

    // 本身字体的变换
    // 内容
    $(".slider4-txt>p").addClass("content-change-txt")
    $(".slider4-txt").addClass("content-change-border")
        //其余块字体点击当前块时复原
    $(".slider2-txt>p").removeClass("content-change-txt")
    $(".slider2-txt").removeClass("content-change-border")

    $(".slider3-txt>p").removeClass("content-change-txt")
    $(".slider3-txt").removeClass("content-change-border")

    $(".slider1-txt>p").removeClass("content-change-txt")
    $(".slider1-txt").removeClass("content-change-border")

    // 时间
    $(".news4>p").addClass("news-change-txt")
    $(".data4>p").addClass("data-change-txt")
    $(".news4").addClass("news-change-border")
    $(".data4").addClass("data-change-border")


    // 其余点击的时间也要去掉
    $(".news2>p").removeClass("news-change-txt")
    $(".data2>p").removeClass("data-change-txt")
    $(".news2").removeClass("news-change-border")
    $(".data2").removeClass("data-change-border")

    $(".news>p").removeClass("news-change-txt")
    $(".data>p").removeClass("data-change-txt")
    $(".news").removeClass("news-change-border")
    $(".data").removeClass("data-change-border")

    $(".news3>p").removeClass("news-change-txt")
    $(".data3>p").removeClass("data-change-txt")
    $(".news3").removeClass("news-change-border")
    $(".data3").removeClass("data-change-border")

    //其他字体的变化
    // 内容

    $(".slider1-txt").addClass("content-onclick-border")

    $(".slider3-txt").addClass("content-onclick-border3")

    $(".slider2-txt").addClass("content-onclick-border2")

    // 时间
    $(".news>p").addClass("news-onclick-txt")
    $(".data>p").addClass("data-onclick-txt")
    $(".news").addClass("news-onclick")
    $(".data").addClass("data-onclick")

    $(".news3>p").addClass("news-onclick-txt3")
    $(".data3>p").addClass("data-onclick-txt3")
    $(".news3").addClass("news-onclick3")
    $(".data3").addClass("data-onclic3")

    $(".news2>p").addClass("news-onclick-txt2")
    $(".data2>p").addClass("data-onclick-txt2")
    $(".news2").addClass("news-onclick2")
    $(".data2").addClass("data-onclick2")

    // 原来的第一框的各种字体颜色回到原来
    $(".slider1-txt>p").css("color", "#444444")
    $(".slider1-txt>p").css("font-weight", "550")
    $(".news>p").css("color", "#45c387")
    $(".data>p").css("color", "#999999")
    $(".news").css("margin-top", "317px")
    $(".data").css("margin-top", "316px")
    $(".data3").css("margin-top", "199px")

    // 当框变大时字体变色
    $(".news4>p").css("color", "#d1df69")
    $(".data4>p").css("color", "#fff")

    $(".news2>p").css("color", "#45c387")
    $(".data2>p").css("color", "#999999")
    $(".news3>p").css("color", "#45c387")
    $(".data3>p").css("color", "#999999")
    $(".news>p").css("color", "#45c387")
    $(".data>p").css("color", "#999999")
}

var s1 = function() {
    $(".slider1").css("background", "url(./img/index/know-pic.png)")
    $(".slider1").css("width", "592px")
    $(".slider1").css("height", "356px")
    $(".slider1").css("margin-left", "-9px")

    $(".slider4").css("background", "none")
    $(".slider4").css("width", "282px")
    $(".slider4").css("height", "356px")
    $(".slider4").css("background-color", "#ecf9f3")
    $(".slider4").css("border-radius", "4px")

    $(".slider2").css("background", "none")
    $(".slider2").css("width", "282px")
    $(".slider2").css("height", "356px")
    $(".slider2").css("background-color", "#ecf9f3")
    $(".slider2").css("border-radius", "4px")

    $(".slider3").css("background", "none")
    $(".slider3").css("width", "282px")
    $(".slider3").css("height", "356px")
    $(".slider3").css("background-color", "#dbf6e9")
    $(".slider3").css("border-radius", "4px")

    // 本身字体的变换
    // 内容
    $(".slider1-txt>p").addClass("content-change-txt")
    $(".slider1-txt").addClass("content-change-border")

    //其余块字体点击当前块时复原
    $(".slider2-txt>p").removeClass("content-change-txt")
    $(".slider2-txt").removeClass("content-change-border")

    $(".slider4-txt>p").removeClass("content-change-txt")
    $(".slider4-txt").removeClass("content-change-border")

    $(".slider3-txt>p").removeClass("content-change-txt")
    $(".slider3-txt").removeClass("content-change-border")

    // 时间
    $(".news>p").addClass("news-change-txt")
    $(".data>p").addClass("data-change-txt")
    $(".news").addClass("news-change-border")
    $(".data").addClass("data-change-border")


    // 其余点击的时间也要去掉
    $(".news2>p").removeClass("news-change-txt")
    $(".data2>p").removeClass("data-change-txt")
    $(".news2").removeClass("news-change-border")
    $(".data2").removeClass("data-change-border")

    $(".news3>p").removeClass("news-change-txt")
    $(".data3>p").removeClass("data-change-txt")
    $(".news3").removeClass("news-change-border")
    $(".data3").removeClass("data-change-border")

    $(".news4>p").removeClass("news-change-txt")
    $(".data4>p").removeClass("data-change-txt")
    $(".news4").removeClass("news-change-border")
    $(".data4").removeClass("data-change-border")

    //其他字体的变化
    // 其他框的内容

    $(".slider2-txt").addClass("content-onclick-border")

    $(".slider3-txt").addClass("content-onclick-border3")

    $(".slider4-txt").addClass("content-onclick-border4")

    // 其他框的时间
    $(".news2>p").addClass("news-onclick-txt")
    $(".data2>p").addClass("data-onclick-txt")
    $(".news2").addClass("news-onclick")
    $(".data2").addClass("data-onclick")

    $(".news3>p").addClass("news-onclick-txt")
    $(".data3>p").addClass("data-onclick-txt")
    $(".news3").addClass("news-onclick")
    $(".data3").addClass("data-onclick")

    $(".news4>p").addClass("news-onclick-txt")
    $(".data4>p").addClass("data-onclick-txt")
    $(".news4").addClass("news-onclick")
    $(".data4").addClass("data-onclick")

    // 原来的第一框的各种字体颜色回到原来
    $(".slider1-txt>p").css("color", "#444444")
    $(".slider1-txt>p").css("font-weight", "550")
    $(".news>p").css("color", "#45c387")
    $(".data>p").css("color", "#999999")
    $(".news").css("margin-top", "-7px")
    $(".data").css("margin-top", "-10px")

    // 当框变大时字体变色
    $(".news>p").css("color", "#d1df69")
    $(".data>p").css("color", "#fff")

    $(".news2>p").css("color", "#45c387")
    $(".data2>p").css("color", "#999999")
    $(".news3>p").css("color", "#45c387")
    $(".data3>p").css("color", "#999999")
    $(".news4>p").css("color", "#45c387")
    $(".data4>p").css("color", "#999999")
}