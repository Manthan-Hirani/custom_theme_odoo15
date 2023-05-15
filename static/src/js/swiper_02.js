// swiper_02.js

odoo.define('custom_theme.swiper_02', function (require) {
    'use strict';

    var publicWidget = require('web.public.widget');

    publicWidget.registry.yourCustomSlider = publicWidget.Widget.extend({
        selector: '.swiper-container',
        start: function () {
            this._initializeSwiper();
        },
        _initializeSwiper: function () {
            new Swiper(this.$el[0], {
                // Swiper options and configuration
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        },
    });

    return publicWidget.registry.yourCustomSlider;
});
