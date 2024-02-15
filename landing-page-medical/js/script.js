jQuery(function ($) {
    "use strict";
    var $ = $.noConflict();

    $(window).on('load', function() {
        $('.preloader-wrapper').fadeOut('slow');
        $('#preloader').delay(350).fadeOut('slow');
    });

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

    $('.btn-faq').on('click', function(e){
        e.preventDefault();
        if($(this).parents('.faq-card').hasClass('preview')) {
            $(this).removeClass('rotate-icon');
            $(this).parents('.faq-card').removeClass('preview').find('.card-body').slideUp();
        } else {
            $(this).parents('.faq-card').addClass('preview').find('.card-body').slideDown();
            $(this).parents('.faq-card').find('.btn-faq').addClass('rotate-icon');
            $('.btn-faq').not(this).parents('.faq-card').removeClass('preview').find('.card-body').slideUp();
            $('.btn-faq').not(this).parents('.faq-card').find('.btn-faq').removeClass('rotate-icon');
        }
    });
});