(function ($) {

    $.fn.hoverElement = function () {
        this.each(function () {
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
    }

})(jQuery); 
