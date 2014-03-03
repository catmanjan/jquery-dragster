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
                if (this.first) {
                    return this.second = true;
                } else {
                    this.first = true;
                    $(this).trigger('dragster:enter');
                }
            });

            $(this).on('dragleave', function () {
                if (this.second) {
                    this.second = false;
                } else if (this.first) {
                    this.first = false;
                }
                if (!this.first && !this.second) {
                    $(this).trigger('dragster:leave');
                }
            });

            $(this).on('dragster:enter', settings.enter);
            $(this).on('dragster:leave', settings.leave);
        });
    };

}(jQuery));