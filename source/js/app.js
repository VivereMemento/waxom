(function() {
  'use strict';

    svg4everybody();

// ***** navigation ***** //

const trig = document.querySelector('.nav__trigger');
trig.addEventListener('click', function() {
    let navList = document.querySelector('.nav__list');
    
    if(navList.classList.contains('opened')) {
        navList.classList.remove('opened');
    } else {
        navList.classList.add('opened');
    }
});

// ***** bxslider ***** //
    let countSlide;

    $('#bxslider').bxSlider({
        auto: true,
        mode: 'fade',
        captions: true
    });

    let slider2;

    $(window).on('load', function() {
        let windowWidth = $(window).width();
        if ( windowWidth <= 425 ) {
            var slider = $('#bxslider2').bxSlider({
                pager: false,
                minSlides: 1,
                maxSlides: 1,
                slideWidth: 295,
                slideMargin: 15
            });
        } else {
            var slider = $('#bxslider2').bxSlider({
                pager: false,
                minSlides: 3,
                maxSlides: 3,
                slideWidth: 370,
                slideMargin: 45
            });
        }
        return slider2 = slider;
    });

    $(window).resize(function() {
        if ( $(window).width() <= 425 ) {
            slider2.reloadSlider({
                pager: false,
                minSlides: 1,
                maxSlides: 1,
                slideWidth: 295,
                slideMargin: 15
            });
        } else {
            slider2.reloadSlider({
                pager: false,
                minSlides: 3,
                maxSlides: 3,
                slideWidth: 370,
                slideMargin: 45
            });
        }
    });
})();
