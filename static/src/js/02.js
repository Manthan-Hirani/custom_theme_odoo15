$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        nav: true,
        margin: 20,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            993: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });
});

//import Swiper from 'swiper/bundle';
//import 'swiper/css/bundle';
//
//var swiper = new Swiper(".mySwiperservice", {
//    slidesPerView: 1,
//    spaceBetween: 10,
//    pagination: {
//        el: ".swiper-pagination",
//        clickable: true,
//    },
//    breakpoints: {
//        640: {
//            slidesPerView: 2,
//            spaceBetween: 20,
//        },
//        768: {
//            slidesPerView: 2,
//            spaceBetween: 20,
//        },
//        900: {
//            slidesPerView: 3,
//            spaceBetween: 20,
//        },
//        1200: {
//            slidesPerView: 4,
//            spaceBetween: 20,
//        },
//
//    },
//});