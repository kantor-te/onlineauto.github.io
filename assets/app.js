"use strict";

$(window).scroll(e => {
    const { scrollY } = e.delegateTarget
    const isTop = $('.top-contacts').hasClass('small-top-menu');

    if(scrollY < 158 && isTop) {
        $('.top-contacts').removeClass('small-top-menu');
    }
    if(scrollY > 158 && !isTop) {
        $('.top-contacts').addClass('small-top-menu');
    }
});

$('#mobile-contacts-btn').click(() => {
    $(".mobile-contacts-block").toggleClass('active');
    $('#mobile-contacts-btn i').toggleClass('active');
});

$('.top-contacts .fa-bars').click(() => {
    $(".clouse-mobile-menu-icon").css('display', 'block');
    $('.mobile-menu').addClass('open');
});

$('.clouse-mobile-menu-icon').click(() => {
    $(".clouse-mobile-menu-icon").css('display', 'none');
    $('.mobile-menu').removeClass('open');
});