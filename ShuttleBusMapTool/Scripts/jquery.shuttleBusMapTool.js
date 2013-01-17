(function ($) {

    //----------- This is only a demo for jQuery plugin --------------//

    $.fn.hoverElement = function () {   //对象(实例)方法附加到jQuery.fn对象上
        return this.each(function () {     //return: 返回jQuery对象以实现链式操作
            $(this).hover(
                function () {
                    $(this).addClass("hoverStyle");
                }
            );
            $(this).mouseout(
                function () {
                    $(this).removeClass("hoverStyle");
                }
            );
        });
    };

    //----------------- Shuttle Bus Map Tool -------------------//

    // Coming Soon...

})(jQuery); 
