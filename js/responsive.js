
$(function() {
    $(window).on("resize", function() {
        var a = $(window).width();
        var b = a / 1920
        var c = 180 - 180 * b
        var d = c / $(".map").width();
        var e = 1 + d * 2;
        $(".wrapper > div:not(.map)").css("transform", "scale(" + b + ")");
        $(".wrapper > .map").css("transform", "scale(" + e + ", " + b + ")");

        var h = 75 / 1560 * 100;
        var i = 75 / 805 * 100;

        var j = 365 / 1560 * 100;
        var k = 125 / 805 * 100;

        var l = 200 / 1560 * 100;
        var m = 215 / 805 * 100;

        var n = 355 / 1560 * 100;
        var o = 320 / 805 * 100;

        var p = 1020 / 1560 * 100;
        var q = 485 / 805 * 100;

        var r = 900 / 1560 * 100;
        var s = 610 / 805 * 100;
        
        $(".wrapper > .map > div > div").css({"width": h+"%", "height": i+"%"});
        $(".wrapper > .map > div > div:nth-child(2)").css({"left": j+"%", "top": k+"%"});
        $(".wrapper > .map > div > div:nth-child(3)").css({"left": l+"%", "top": m+"%"});
        $(".wrapper > .map > div > div:nth-child(4)").css({"left": n+"%", "top": o+"%"});
        $(".wrapper > .map > div > div:nth-child(5)").css({"left": p+"%", "top": q+"%"});
        $(".wrapper > .map > div > div:nth-child(6)").css({"left": r+"%", "top": s+"%"});
    }).resize();
});