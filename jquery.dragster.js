(function ($) {

    $.fn.dragster = function (options) {
        var settings = $.extend({
            enter: function () { },
            leave: function () { }
        }, options);

        return this.each(function () {
            var first = false,
                second = false;

            $(this).on('dragenter', function () {
                if (first) {
                    return second = true;
                } else {
                    first = true;
                    $(this).trigger('dragster:enter');
                }
            });

            $(this).on('dragleave', function () {
                if (second) {
                    second = false;
                } else if (first) {
                    first = false;
                }
                if (!first && !second) {
                    $(this).trigger('dragster:leave');
                }
            });

            $(this).on('dragster:enter', settings.enter);
            $(this).on('dragster:leave', settings.leave);
        });
    };

}(jQuery));
