var aboutLocation = $('.header').height();
var contactLocation = $('.header').height() + $('.about').height();

function showContent(a) {
    $(a + ' .vertical-center').animate({'opacity': '1', 'top': '0'}, 1000);
}

showContent('.header');

$(window).on('scroll', function() {
    if ($(window).scrollTop() >= aboutLocation) {
        $('.navbar .menu-right li button').css('color', '#4A4A4A');
        showContent('.about');
        for (var i = 0; i < $('.skill').length; i++) {
            $('.inner-bar').eq(i).animate({'width' : $('.percentage').eq(i).text()}, 2000);
        }
    }
    if ($(window).scrollTop() >= contactLocation) {
        showContent('.contact');
    }
    if ($(window).scrollTop() < $('.header').height()) {
        $('.navbar .menu-right li button').css('color', 'white');
    }
});

$('#about-btn').on('click', function() {
    $('html, body').animate({scrollTop: aboutLocation}, 500);
});

$('#contact-btn').on('click', function() {
    $('html, body').animate({scrollTop: contactLocation}, 500);
});
