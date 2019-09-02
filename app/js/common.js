$(document).ready(function () {

    $('.banner-slider').owlCarousel({
        autoplay:true,
        items: 1,
        loop: true,
        animateOut: 'fadeOut',
        stagePadding: 0,
        dots: false,
        autoHeight: true,
        responsive : {

            768 : {
               dots: true
            }
        }
    });

    $('.certificates').owlCarousel({

        loop: true,
        nav: true,
        dots: false,
        margin: 15,
        responsive : {
            0 : {
                items: 1,
                autoHeight: false,
                singleItem:true
                // autoWidth: true
            },
            576 : {
                items: 3,
            }
        }
    });

    $(".current-year").text((new Date).getFullYear());

    $('[data-fancybox="certificate"]').fancybox();

    function isScrolledIntoView(elem) {
        let docViewTop = $(window).scrollTop(),
            docViewBottom = docViewTop + $(window).height(),
            elemTop = $(elem).offset().top - 300,
            elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    $(window).on('resize scroll', function () {
        if (isScrolledIntoView($('.why-us'))) {

        } else {

        }
    });

    $(".search-btn").click(function () {
        $(".header-search").slideToggle();
    });

    document.addEventListener('click',
        hideOnClickOutside(".header-search", ".search-btn")
    );

    function hideOnClickOutside(blockName, toggler) {
        $('body').on('click', function (e) {
                if (!$(blockName).is(e.target)
                    && $(blockName).has(e.target).length === 0
                    && !$(event.target).is(toggler)) {
                    $(blockName).slideUp();
                }
        });
    }

    hideMenuArrows();

    function hideMenuArrows() {
        var menuItems = $('.header-btm .nav').children();
        $.each(menuItems, function () {
            if ($(this).children(".drop-menu").length) {
                $(this).addClass('withSubmenu')
            }
        });
    }

    $('.menu-item').each(function () {
        if ($(this).children("ul").length) {
            $(this).addClass('withSubmenu')
        }
    });

    toggleNavMenuByLink();

    function toggleNavMenuByLink() {
        if ($(window).width() < 1200) {
            $(".menu-item").click(function (e) {
                if ($(this).children("ul").css('display') === 'none') {
                    e.preventDefault();
                    $(this).children("ul").slideToggle();
                    $(this).children("a").toggleClass("opened");
                } else if ($(this).children("ul").css('display') === 'block') {
                    e.preventDefault();
                    $(this).children("ul").slideToggle();
                    $(this).children("a").toggleClass("opened");
                }
            })
        }
    }

    $('#burger').click(function(){
        $(this).toggleClass('open');
        $('.menu').toggleClass('show')
    });
});

