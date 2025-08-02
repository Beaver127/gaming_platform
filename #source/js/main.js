$(document).ready(function () {
    $(".header-row-burger").click(function () {
        $(this).toggleClass("active")
        $("body").toggleClass("lock")
        $(".header-mobile").toggleClass("active")
    })
    const swiper = new Swiper('.first-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        on: {
            init: function () {
                updateSlideCounter(this);
            },
            slideChange: function () {
                updateSlideCounter(this);
            },
        }
    });
    function updateSlideCounter(swiper) {
        const current = swiper.activeIndex + 1;
        const total = swiper.slides.length;
        $(".about-banner-row-right-arrows__text").text(`${current} of ${total}`);
    }
    $(".about-banner-row-right-arrows__left").click(() => {
        swiper.slidePrev()
    })
    $(".about-banner-row-right-arrows__right").click(() => {
        swiper.slideNext()
    })


    const swiper1 = new Swiper('.first-slider1', {

        slidesPerView: 1,

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 1,
                loop: true,
            },
            // when window width is >= 480px
            993: {
                slidesPerView: 3,
                spaceBetween: 50,
                updateOnWindowResize: true,
                loop: true,
                grabCursor: true,

                initialSlide: 0,
                clickable: true,
            },

        },


        pagination: {
            el: ".swiper-pagination1",
            clickable: true,
        },

    });
    $(".banner-row1-arrows__left").click(() => {
        swiper1.slidePrev()
    })
    $(".banner-row1-arrows__right").click(() => {
        swiper1.slideNext()
    })

    function getValueFromUrl() {
        const url = window.location.pathname; // "/index.html"
        if (url === "/") {
            $(`.link__index`).addClass("active")
            return
        }
        const fileName = url.substring(url.lastIndexOf('/') + 1); // "index.html"
        const nameWithoutExtension = fileName.split('.')[0]; // "index"
        $(`.link__${nameWithoutExtension}`).addClass("active")

    }
    getValueFromUrl()

});

