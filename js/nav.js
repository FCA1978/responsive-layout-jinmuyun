$(function() {
    // 点击对应的目录栏时出现当前特效，其余特效消失
    $(".one>li>a").click(function() {
        $(this).siblings(".nod").css("display", "block");
        $(this).siblings(".nod-first").css("display", "block");
        $(this).css("color", "#45c387");
        $(this).parents("li").siblings("li").children("a").css("color", "#555555");
        $(this).parents("li").siblings("li").children("div").css("display", "none")
    })

    // 点击右侧在线联系的上拉菜单时，qq和电话联系隐藏
    $(".back").click(function() {
        $(".webchat").css("display", "none");
    })

    // 点击图标时，下拉的电话qq联系显示
    $(".btn").click(function() {
        $(".webchat").css("display", "block");
    })
    $(".btn-txt").click(function() {
        $(".webchat").css("display", "block");
    })
})