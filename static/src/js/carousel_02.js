odoo.define('website.s_image_gallery', function (require) {
    'use strict';

    var core = require('web.core');
    var publicWidget = require('web.public.widget');

    var qweb = core.qweb;

    const GalleryWidget = publicWidget.Widget.extend({
        selector: '.s_image_gallery:not(.o_slideshow)',
        xmlDependencies: ['/website/static/src/snippets/s_image_gallery/000.xml'],
        events: {
            'click .card': '_onClickCard',
        },

        //--------------------------------------------------------------------------
        // Handlers
        //--------------------------------------------------------------------------

        /**
         * Called when a card is clicked. Opens a dialog to browse all the images
         * with a bigger size.
         *
         * @private
         * @param {Event} ev
         */
        _onClickCard: function (ev) {
            if (this.$modal) {
                return;
            }
            var self = this;
            var $cur = $(ev.currentTarget);

            var $cards = $cur.closest('.s_image_gallery').find('.card');
            var size = 0.8;
            var dimensions = {
                min_width: Math.round(window.innerWidth * size * 0.9),
                min_height: Math.round(window.innerHeight * size),
                max_width: Math.round(window.innerWidth * size * 0.9),
                max_height: Math.round(window.innerHeight * size),
                width: Math.round(window.innerWidth * size * 0.9),
                height: Math.round(window.innerHeight * size)
            };

            var $card = $cur.is('.card') ? $cur : $cur.closest('.card');

            const milliseconds = $cur.closest('.s_image_gallery').data('interval') || false;
            this.$modal = $(qweb.render('website.gallery.slideshow.lightbox', {
                images: $cards.get(),
                index: $cards.index($card),
                dim: dimensions,
                interval: milliseconds || 0,
                id: _.uniqueId('slideshow_'),
            }));
            this.$modal.modal({
                keyboard: true,
                backdrop: true,
            });
            this.$modal.on('hidden.bs.modal', function () {
                $(this).hide();
                $(this).siblings().filter('.modal-backdrop').remove(); // bootstrap leaves a modal-backdrop
                $(this).remove();
                self.$modal = undefined;
            });
            this.$modal.find('.modal-content, .modal-body.o_slideshow').css('height', '100%');
            this.$modal.appendTo(document.body);

            this.$modal.one('shown.bs.modal', function () {
                self.trigger_up('widgets_start_request', {
                    editableMode: false,
                    $target: self.$modal.find('.modal-body.o_slideshow'),
                });
            });
        },
    });

    const GallerySliderWidget = publicWidget.Widget.extend({
        selector: '.o_slideshow',
        xmlDependencies: ['/website/static/src/snippets/s_image_gallery/000.xml'],
        disabledInEditableMode: false,

        /**
         * @override
         */
        start: function () {
            var self = this;
            this.$carousel = this.$target.is('.carousel') ? this.$target : this.$target.find('.carousel');
            this.$indicator = this.$carousel.find('.carousel-indicators');
            this.$prev = this.$indicator.find('li.o_indicators_left').css('visibility', ''); // force visibility as some databases have it hidden
            this.$next = this.$indicator.find('li.o_indicators_right').css('visibility', '');
            var $lis = this.$indicator.find('li[data-slide-to]');
            var cardsPerPage = {
                lg: 4,
                md: 2,
                sm: 1
            };
            var screenSize = 'lg'; // default to large screen size
            var realCardsPerPage = cardsPerPage[screenSize];
            var nbPages = Math.ceil($lis.length / realCardsPerPage);
            var index;
            var page;
            update();

            function hide() {
                $lis.each(function (i) {
                    $(this).toggleClass('d-none', i < page * realCardsPerPage || i >= (page + 1) * realCardsPerPage);
                });
                if (page <= 0) {
                    self.$prev.detach();
                } else {
                    self.$prev.removeClass('d-none');
                    self.$prev.prependTo(self.$indicator);
                }
                if (page >= nbPages - 1) {
                    self.$next.detach();
                } else {
                    self.$next.removeClass('d-none');
                    self.$next.appendTo(self.$indicator);
                }
            }

            function update() {
                const active = $lis.filter('.active');
                index = active.length ? $lis.index(active) : 0;
                page = Math.floor(index / realCardsPerPage);
                hide();
            }

            this.$carousel.on('slide.bs.carousel.gallery_slider', function () {
                setTimeout(function () {
                    var $item = self.$carousel.find('.carousel-inner .carousel-item-prev, .carousel-inner .carousel-item-next');
                    var index = $item.index();
                    $lis.removeClass('active')
                        .filter('[data-slide-to="' + index + '"]')
                        .addClass('active');
                }, 0);
            });
            this.$indicator.on('click.gallery_slider', '> li:not([data-slide-to])', function () {
                page += ($(this).hasClass('o_indicators_left') ? -1 : 1);
                page = Math.max(0, Math.min(nbPages - 1, page)); // should not be necessary
                self.$carousel.carousel(page * realCardsPerPage);
                // We dont use hide() before the slide animation in the editor because there is a traceback
                // TO DO: fix this traceback
                if (!self.editableMode) {
                    hide();
                }
            });
            this.$carousel.on('slid.bs.carousel.gallery_slider', update);

            // Update the number of cards per page based on screen size
            function updateCardsPerPage() {
                var width = window.innerWidth;
                if (width < 768) {
                    screenSize = 'sm'; // small screen
                } else if (width < 992) {
                    screenSize = 'md'; // medium screen
                } else {
                    screenSize = 'lg'; // large screen
                }
                realCardsPerPage = cardsPerPage[screenSize];
                nbPages = Math.ceil($lis.length / realCardsPerPage);
                page = Math.min(page, nbPages - 1);
                hide();
            }

            // Call updateCardsPerPage on window resize
            $(window).on('resize', updateCardsPerPage);
            updateCardsPerPage(); // Call initially to set the correct number of cards

            return this._super.apply(this, arguments);
        },
        /**
         * @override
         */
        destroy: function () {
            this._super.apply(this, arguments);

            if (!this.$indicator) {
                return;
            }

            this.$prev.prependTo(this.$indicator);
            this.$next.appendTo(this.$indicator);
            this.$carousel.off('.gallery_slider');
            this.$indicator.off('.gallery_slider');

            // Remove the window resize event listener
            $(window).off('resize', this.updateCardsPerPage);
        },
    });

    publicWidget.registry.gallery = GalleryWidget;
    publicWidget.registry.gallerySlider = GallerySliderWidget;

    return {
        GalleryWidget: GalleryWidget,
        GallerySliderWidget: GallerySliderWidget,
    };
});
