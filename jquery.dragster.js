(function ($) {

    $.fn.dragster = function (options) {
        var settings = $.extend({
            enter: $.noop,
            leave: $.noop
        }, options);

        return this.each(function () {
            var first = false,
                second = false,
                $this = $(this);

            $this.on({
                dragenter: function (event) {
                    if (first) {
                        return second = true;
                    } else {
                        first = true;
                        $this.trigger('dragster:enter', event);
                    }
                },
                dragleave: function (event) {
                    if (second) {
                        second = false;
                    } else if (first) {
                        first = false;
                    }
                    if (!first && !second) {
                        $this.trigger('dragster:leave', event);
                    }
                },
                'dragster:enter': settings.enter,
                'dragster:leave': settings.leave
            });
        });
    };

}(jQuery));
