$(document).ready(function () {
    $('.slider').slick({
        autoplay: false,
        autoplaySpeed: 4500,
        slidesToShow: 1,
        speed: 1400,
        dots: true,
        arrows: false,
        fade: true,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,
                    autoplaySpeed: 1000,
                }
            }
        ]
    });
});