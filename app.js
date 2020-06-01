$(function () {
    $('.solutions_2.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        dotsClass: "owl-dots container",
        items:1
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        navContainer: '.areas_nav',
        dots: false,
        items:1
    })

    var navToggle = $('.nav-toggle');
    var addedClass = 'nav-toggle--active';
    var header = $('.header');
    var nav = $('.header__nav');

    changeFloatState();

    navToggle.on('click', function (event) {

        event.preventDefault();
        $(this).toggleClass(addedClass);
        nav.toggleClass('nav--show');
        header.toggleClass('header--nav-open');

        if ($(window).width() <= 480) {
            document.body.classList.toggle('--no-scroll')
        } else {
            header.toggleClass('--fixed');
        }

    });

    nav.on('click', function (event) {
        if ($(window).width() > 960) return;

        if (nav.hasClass('nav--show')) {
            navToggle.toggleClass(addedClass);
            nav.toggleClass('nav--show');
            header.toggleClass('header--nav-open');

            if ($(window).width() <= 480) {
                document.body.classList.toggle('--no-scroll')
            } else {
                header.toggleClass('--fixed');
            }
        }
    });

    $(window).on('scroll', function () {
        changeFloatState();
    });

    function changeFloatState() {
        if ($('body').scrollTop() > 100 || $('html').scrollTop() > 100) {
            header.addClass('header--darken');
        } else {
            header.removeClass('header--darken');
        }
    }
})
