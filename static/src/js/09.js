$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        nav: true,
        navText: [`<img src="/custom_theme/static/src/img/left_arrow.png" alt="<" style="height:10%; width:4%; position: absolute; margin-top: -245px; margin-left: -620px;">`,`<img src="/custom_theme/static/src/img/right_arrow.png" alt=">" style="height:10%; width:4%; position: absolute; margin-top: -245px; margin-left: 565px;">`],
        // slideBy: 2,
        // items: 3,
        margin: 20,
        // autoplay: true,
        // animateIn: 'fadeIn',
        // animateOut: 'fadeOut',
        // loop: true,
        // autoplayTimeout: 2500,
        responsive: {
            0: {
                items: 1,
                nav: false,
                navText: false,
            },
            640: {
                items: 2,
                nav: false,
                navText: false,
            },
            900: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });
});