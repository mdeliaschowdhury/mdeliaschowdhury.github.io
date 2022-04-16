(function ($) {
    "use strict";
    var $ = $.noConflict();

    $(window).on('load', function() {
        $('.preloader-wrapper').fadeOut('slow');
        $('#preloader').delay(350).fadeOut('slow');
    });

    var bootstrapButton = $.fn.button.noConflict();
    $.fn.bootstrapBtn = bootstrapButton;

    $('.nav-registration li a').mouseenter(function(){
        $(this).parents('.nav-registration').find('.active.nav-link').removeClass('active');
        $(this).addClass('active');
    });

    $('.btn-forgetpass').click(function(e){
        e.preventDefault();
        $('.login').css('display', 'none');
        $('.regain').fadeIn('500');
    });
    $('.btn-back').click(function(e){
        e.preventDefault();
        $('.regain').css('display', 'none');
        $('.login').fadeIn('500');
    });

    $('.navbar-toggler').click(function(){
        $(this).toggleClass('custom-toggler');
    });

    $(".btn-play").on('click', function(e) {
        e.preventDefault();
        $("#modal-video").toggleClass("modal-open");
    });
    $(".modal-content").click(function(e){
        e.stopPropagation();
    });
    $(".modal-wrapper").on('click', function(e) {
        e.preventDefault();
        $("#modal-video").removeClass("modal-open");
    });
    $(".btn-close").click(function(){
        $("#modal-video").removeClass("modal-open");
    });
    $(".btn-close, .modal-wrapper").on('click', function() {
        $('.iframe').each(function(index) {
            $(this).attr('src', $(this).attr('src'));
            return false;
        });
    });

    new WOW().init();

    $(".team-slider").each(function() {
        $(this).owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            margin: 30,
            autoplay: false,
            autoplayTimeout: 1000,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive:{
                0:{
                    items: 1,
                    nav: false,
                },
                575:{
                    items: 1,
                    nav: false,
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
                }
            }
        });
    });
    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function() {
        owl.trigger('stop.owl.autoplay')
    })

    $('.gallery-preview').each(function() {
        var $container = $(this);
        var $imageLinks = $container.find('.preview-item');
        var items = [];
        $imageLinks.each(function() {
            var $item = $(this);
            var type = 'image';
            if ($item.hasClass('magnific-youtube')) {
                type = 'iframe';
            }
            var magItem = {
                src: $item.attr('href'),
                type: type
            };
            magItem.title = $item.data('title');    
            items.push(magItem);
        });
        $imageLinks.magnificPopup({
            mainClass: 'mfp-fade',
            items: items,
            gallery:{
                enabled:true,
                tPrev: $(this).data('prev-text'),
                tNext: $(this).data('next-text')
            },
            type: 'image',
            callbacks: {
                beforeOpen: function() {
                    var index = $imageLinks.index(this.st.el);
                    if (-1 !== index) {
                    this.goTo(index);
                    }
                }
            }
        });
    });

    $('.toggle-switch').click(function(){
        $(this).toggleClass('toggle-switch-content');
    });

    $('.btn-reply').click(function(e){
        e.preventDefault();
        $('.reply').slideToggle();
    });

    var digitalStrategy = $('.digitalstrategy');
    if(digitalStrategy.length) {
        $('.digitalstrategy').rProgressbar({
            width: '100%',
            height: '4px',
            percentage: 60,
            borderRadius: '4px',
            backgroundColor: '#e9ecef',
            fillBackground: 'green',
            duration: 2000
        });
    };
    
    var financialService = $('.financialservice');
    if(financialService.length) {
        $('.financialservice').rProgressbar({
            width: '100%',
            height: '4px',
            percentage: 75,
            borderRadius: '4px',
            backgroundColor: '#e9ecef',
            fillBackground: 'green',
            duration: 2000
        });
    };
    
    var brandResearch = $('.brandresearch');
    if(brandResearch.length) {
        $('.brandresearch').rProgressbar({
            width: '100%',
            height: '4px',
            percentage: 90,
            borderRadius: '4px',
            backgroundColor: '#e9ecef',
            fillBackground: 'green',
            duration: 2000
        });
    };
    
    $(document).on('click', '.btn-faq', function(e){
        e.preventDefault();
        if($(this).parent().siblings('.collapse').hasClass('show')) {
            $('.btn-faq').removeClass('rotate-icon');
        }else{
            $('.btn-faq').not(this).removeClass('rotate-icon');
            $(this).toggleClass('rotate-icon');
        }
    });

    var containerEl = document.querySelector('.showcase');
    if(containerEl) {
        var mixer = mixitup(containerEl, {
            selectors: {
                control: '[data-mixitup-control]'
            },
            animation: {
                animateResizeContainer: false
            }
        });
    }
    
    $('.showcase').each(function() {
        var $container = $(this);
        var $imageLinks = $container.find('.preview-item');
        var items = [];
        $imageLinks.each(function() {
            var $item = $(this);
            var type = 'image';
            if ($item.hasClass('magnific-youtube')) {
                type = 'iframe';
            }
            var magItem = {
                src: $item.attr('href'),
                type: type
            };
            magItem.title = $item.data('title');    
            items.push(magItem);
        });
        $imageLinks.magnificPopup({
            mainClass: 'mfp-fade',
            items: items,
            gallery:{
                enabled:true,
                tPrev: $(this).data('prev-text'),
                tNext: $(this).data('next-text')
            },
            type: 'image',
            callbacks: {
                beforeOpen: function() {
                    var index = $imageLinks.index(this.st.el);
                    if (-1 !== index) {
                    this.goTo(index);
                    }
                }
            }
        });
    });
})(jQuery);