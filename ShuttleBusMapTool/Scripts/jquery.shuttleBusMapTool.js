// i'd like add some comments here , what i referenced from jquery.com
//(function($){}(jqury)) is to keep "dollar sign" works


(function ($) {

    //----------- This is only a demo for jQuery plugin --------------//



    var methods={

        init: function () {
            return this.each(function () {
                $(this).hover(
                    function () {
                        $(this).addClass("hoverStyle");
                    }
                );
                $(this).mouseout(
                    function () {
                        $(this).removeClass("hoverStyle");
                    });
            });
        },

        maxMapHeight:function () {
            var max;
            return this.each(function () {
                max=Math.max(max,$(this).height());
            });
        }


    };

$.fn.shuttleBusMapTool=function (method) {
    if (methods[method]) {
        return methods[method].apply(this,Array.prototype.slice.call(arguments,1));

    }else if (typeof method==='object'|| method ) {
        return methods.init.apply(this,arguments);
    }else{
        $.error('Method'+method +'does not exist on jquery.shuttleBusMapTool');
    
}
};

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

    // here comes some prototype design
    $.fn.maxMapHeight=function () {
        //body...
        var max =0;
        this.each(function  () {
            max=Math.max(max, $(this).height());

        });
        return max;

    };


    //----------------- Shuttle Bus Map Tool -------------------//

    // Coming Soon...

})(jQuery); 



//if you don't need doller sign, you can add you plugin in this way




