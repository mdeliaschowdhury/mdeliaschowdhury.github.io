(function ($) {
    "use strict";
    var $ = $.noConflict();

    $(window).on('load', function() {
        $('.preloader-wrapper').fadeOut('slow');
        $('#preloader').delay(350).fadeOut('slow');
    });

    var bootstrapButton = $.fn.button.noConflict();
    $.fn.bootstrapBtn = bootstrapButton;

    var x, i, j, selElmnt, a, b, c;
    x = document.getElementsByClassName("select-redesign");
    for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 0; j < selElmnt.length; j++) {
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                var y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        for (k = 0; k < y.length; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function(e) {
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
            this.classList.add("tick-active");
        });
        }
        function closeAllSelect(elmnt) {
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }
    document.addEventListener("click", closeAllSelect);

    new WOW().init();

    $('.language').flagStrap({
        buttonSize: "btn-sm",
        buttonType: "btn-lg",
        labelMargin: "5px",
        scrollable: false,
        scrollableHeight: "350px",
        placeholder: {
            value: "",
            text: ""
        }
    });

    $(".login-signup a").on('click', function(e) {
        e.preventDefault();
        $("#modal-login").toggleClass("modal-open");
    });
    $(".modal-login-body").on('click', function(e){
        e.stopPropagation();
    });
    $(".modal-wrapper").on('click', function(e) {
        e.preventDefault();
        $("#modal-login").removeClass("modal-open");
    });
    $(".btn-close").on('click', function(){
        $("#modal-login").removeClass("modal-open");
    });
    $(".btn-forget").on('click', function(){
        $(".signin").css("display","none");
        $(".reset-password").fadeIn();
    });
    $(".btn-signup").on('click', function(){
        $(".signin").css("display","none");
        $(".reset-password").css("display","none");
        $(".register").fadeIn();
    });
    $(".btn-login-back").on('click', function(){
        $(".reset-password").css("display","none");
        $(".register").css("display","none");
        $(".signin").fadeIn();
    });

    $('.navbar-toggler').on('click', function(){
        $(this).toggleClass('custom-toggler');
    });

    $('#investmentnavbar .nav-link').on('click', function(){
        $(this).toggleClass('nav-link-active');
        $('#investmentnavbar .nav-link').not(this).removeClass('nav-link-active');
    });
    window.onclick = function(event) {
        if (!event.target.matches('#investmentnavbar .nav-link')) {
            var navLink = $('.nav-link-active');
            var i;
            for (i = 0; i < navLink.length; i++) {
                var activeNavLink = navLink[i];
                if (activeNavLink.classList.contains('nav-link-active')) {
                    activeNavLink.classList.remove('nav-link-active');
                }
            }
        }
    }

    $(".btn-play").on('click', function(e) {
        e.preventDefault();
        $("#modal-video").toggleClass("modal-open");
    });
    $(".modal-content").on('click', function(e){
        e.stopPropagation();
    });
    $(".modal-wrapper").on('click', function(e) {
        e.preventDefault();
        $("#modal-video").removeClass("modal-open");
    });
    $(".btn-close").on('click', function(){
        $("#modal-video").removeClass("modal-open");
    });
    $(".btn-close, .modal-wrapper").on('click', function() {
        $('.iframe').each(function(index) {
            $(this).attr('src', $(this).attr('src'));
            return false;
        });
    });

    $('.slider-testimonial').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        adaptiveHeight: true,
        infinite: true,
        useTransform: true,
        speed: 1000,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        fade: false,
        asNavFor: '.slider-nav',
    });
    $('.slider-nav').on('init', function(event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-testimonial',
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        }]
    });
    $('.slider-testimonial').on('afterChange', function(event, slick, currentSlide) {
        $('.slider-nav').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.slider-nav .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });
    $('.slider-nav').on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');
        $('.slider-testimonial').slick('slickGoTo', goToSingleSlide);
    });

    $('.slider-controls').slick({
        arrows: false,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsiveClass: true,
        responsive: [
            {
                breakpoint: 1200000,
                settings: 'unslick',
            },
            {
                breakpoint: 992,
                settings: {
                    settings: "slick",
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    settings: "slick",
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 401,
                settings: {
                    settings: "slick",
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

    $('.btn-faq').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('rotate-icon');
        $('.btn-faq').not(this).removeClass('rotate-icon');
        $(this).parents('.faq-card').find('.card-body').slideToggle();
        $('.btn-faq').not(this).parents('.faq-card').find('.card-body').slideUp();
    });

    $(".carousel-investor").each(function() {
        $(this).owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 30,
            autoplay: false,
            autoplayTimeout: 1000,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive:{
                0:{
                    items: 1,
                    nav: false,
                    dots: true
                },
                575:{
                    items: 1,
                    nav: false,
                    dots: true,
                },
                576:{
                    items: 2,
                },
                767:{
                    items: 2,
                },
                991:{
                    items: 2,
                },
                992:{
                    items: 3,
                },
                1200:{
                    items: 4,
                }
            }
        });
    });

    $(".carousel-shareoffer").each(function() {
        $(this).owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 30,
            autoplay: false,
            autoplayTimeout: 1000,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive:{
                0:{
                    items: 1,
                    nav: false,
                    dots: true
                },
                575:{
                    items: 1,
                    nav: false,
                    dots: true,
                },
                767:{
                    items: 1,
                },
                991:{
                    items: 2,
                },
                992:{
                    items: 3,
                },
                1200:{
                    items: 3,
                }
            }
        });
    });

    $(".carousel-payment").each(function() {
        $(this).owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 30,
            autoplay: false,
            autoplayTimeout: 1000,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive:{
                0:{
                    items: 1,
                    nav: false,
                    dots: true
                },
                575:{
                    items: 1,
                    nav: false,
                    dots: true,
                },
                767:{
                    items: 2,
                },
                991:{
                    items: 3,
                },
                992:{
                    items: 4,
                },
                1200:{
                    items: 4,
                }
            }
        });
    });

    $('.btn-reply').on('click', function(e){
        e.preventDefault();
        $(this).parents('.media-body').find('.reply').slideToggle();
    });
    
    // $('a[href*="#"]:not([href="#"])').on('click', function() {
    //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //         var target = $(this.hash);
    //         target = target.height ? target : $('[name=' + this.hash.slice(1) + ']');
    //         if (target.height) {
    //             $('html, body').animate({
    //                 scrollTop: target.offset().top
    //             }, 1000);
    //             return false;
    //         }
    //     }
    // });
})(jQuery);