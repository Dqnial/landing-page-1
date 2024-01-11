$(document).ready(function() {
    $(window).resize(function() {
        var windowWidth = $(window).width();
        if (windowWidth <= 960) $(".clients__item").removeClass("col").addClass("col-lg-3");
        else $(".clients__item").removeClass("col-lg-3").addClass("col");
        if (windowWidth < 680) $(".footer__upper-box2").addClass("d-flex").addClass("justify-content-center");
        else $(".clients__item").removeClass("col-lg-3").addClass("col");
        // if (windowWidth <= 960) $(".clients__item").removeClass("col").addClass("col-lg-12");
        // else $(".clients__item").removeClass("col-lg-12").addClass("col");
    });
});

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,

    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper__button-prev',
        prevEl: '.swiper__button-next',
    },
    breakpoints: {
        1650: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1500: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        580: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
    }
});

$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
    });
    $('.menu-burger__header').click(function() {
        $('.mobile__header__nav').toggleClass('mobile__header__nav-active');
    });

});

$('.header__call').click(function() {
    $('.header__modal').css('display', 'block')
});
$('.header__modal-close').click(function() {
    $('.header__modal').css('display', 'none')
})

$('.about__button-offer').click(function() {
    $('.about__modal').css('display', 'block')
});
$('.about__modal-close').click(function() {
    $('.about__modal').css('display', 'none')
})

$('.call__form-upload').change(function() {
    if (this.files[0]) {
        $('.call-attach')[0].innerHTML = this.files[0].name;
    }
});