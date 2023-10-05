jQuery(function($) {

    'use strict';

    // --------------------------------------------------------------------
    // Back to top
    // --------------------------------------------------------------------

    (function() {
        var offset = 220;
        var duration = 500;
        jQuery(window).scroll(function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.crunchify-top').fadeIn(duration);
            } else {
                jQuery('.crunchify-top').fadeOut(duration);
            }
        });

        jQuery('.crunchify-top').click(function(event) {
            event.preventDefault();
            jQuery('html, body').animate({
                scrollTop: 0
            }, duration);
            return false;
        })

    }());


    // --------------------------------------------------------------------
    // Owl Carousel Video Slider
    // --------------------------------------------------------------------

    (function() {
        $('.owl-carousel').owlCarousel({
            nav: false,
            loop: true,
            center: true,
            autoplay: true,
            autoplayHoverPause: true,
            mouseDrag: true,
            dots: false,
            margin: 10,

            lazyLoad: true,

            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });

    }());

}); // JQuery end