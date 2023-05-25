var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    scrollbar: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: ".swiper-button-prev-02",
        nextEl: ".swiper-button-next-02",
    },
    breakpoints: {
        1: {
            slidesPerView: 1,
            navigation: false,
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: false,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
            navigation: false,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});


var swiper = new Swiper(".mySwipers", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next-09',
        prevEl: '.swiper-button-prev-09',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});


var swiper = new Swiper(".myAutoSwiper", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        1: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 83,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 69,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 135,
        },

    },
});


var swiper = new Swiper(".mySwiperproject", {
    slidesPerView: 1,
    spaceBetween: 10,
//    slideClass: '.swiper-slide-11',

    navigation: {
        nextEl: '.swiper-button-next-11',
        prevEl: '.swiper-button-prev-11',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});