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
$(document).ready(function () {
    $('.slider_news').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        
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