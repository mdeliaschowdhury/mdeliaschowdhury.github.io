(function ($) {
    "use strict";
    var $ = $.noConflict();

    $(window).on('load', function() {
        $('.preloader-wrapper').fadeOut('slow');
        $('#preloader').delay(350).fadeOut('slow');
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
    $(".new-dropdown-toggle").hover(function(){
            $('.dropdown-menu').addClass('show');
        }, function(){
            $('.dropdown-menu').removeClass('show');
    });
    $('.btn-favourite-remove').on('click', function() {
        $(this).parents('.favourite-item').fadeOut();
    });
    $('.btn-cart-remove').on('click', function() {
        $(this).parents('.cart-item').fadeOut();
    });

    $(".initialize-owl-i").each(function() {
        $(this).owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 24,
            autoplay: false,
            autoplayTimeout: 1000,
            autoplayHoverPause: true,
            responsiveClass: true,
            navText: ["<i class='fa fa-chevron-left fa-2x'></i>","<i class='fa fa-chevron-right fa-2x'></i>"],
            responsive:{
                0:{
                    items: 1,
                    nav: false,
                },
                575:{
                    items: 1,
                    nav: true,
                },
                576:{
                    items: 2,
                },
                767:{
                    items: 2,
                },
                992:{
                    items: 4,
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

    $('.btn-item-save').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('btn-item-save-active');
    });

    $(".initialize-owl-ii").each(function() {
        $(this).owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 24,
            autoplay: false,
            autoplayTimeout: 1000,
            autoplayHoverPause: true,
            responsiveClass: true,
            navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            responsive:{
                0:{
                    items: 1,
                    nav: false,
                },
                575:{
                    items: 1,
                    nav: true,
                },
                576:{
                    items: 2,
                },
                767:{
                    items: 2,
                },
                992:{
                    items: 4,
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

    $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        infinite: true,
        useTransform: true,
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev pull-left"><i class="bi bi-caret-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next pull-right"><i class="bi bi-caret-right"></i></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        }]
    });

    $('.filter-toggle').on('click', function() {
        if(window.matchMedia('(max-width: 767px)').matches) {
            $('.fa-angle-down').not(this).removeClass('angle-rotate-up');
            $('.filter-collapse').not(this).slideUp();
            $(this).children('.fa-angle-down').toggleClass('angle-rotate-up');
            $(this).siblings('.filter-collapse').slideToggle();
        }
        
    });
    $(window).on('resize', function() {
        if(window.matchMedia('(min-width: 768px)').matches) {
            console.log('Matched');
            $('.fa-angle-down').removeClass('angle-rotate-up');
            $('.filter-collapse').slideDown();
        }
        else if (window.matchMedia('(max-width: 768px)').matches) {
            $('.fa-angle-down').removeClass('angle-rotate-up');
            $('.filter-collapse').css('display', 'none');
        }
    });

    $(function () {
        $('#slider-container').slider({
            range: true,
            min: 0,
            max: 1000,
            values: [0, 1000],
            create: function() {
                $("#amount").val("$0 - $1000");
            },
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                var mi = ui.values[0];
                var mx = ui.values[1];
                filterSystem(mi, mx);
            }
        })
    });
    function filterSystem(minPrice, maxPrice) {
        $(".matrix-container .row .col-sm-6").hide().filter(function () {
            var price = parseInt($(this).data("price"),10);
            return price >= minPrice && price <= maxPrice;
        }).show();
    }

    $('.star-filter, .review-filter').delegate('input[type=checkbox]', 'change', function() {
        var $lis = $('.matrix-container .row .col-sm-6');
        console.log('Find List',$lis);
        var $checked = $('.form-check input[type=checkbox]:checked');
        console.log('Find',$checked); 
        if ($checked.length) {                          
            var selector = '';
            $($checked).each(function(index, element){
                if(selector === '') {
                    selector += "[data-category~='" + element.value + "']";                  
                } else {
                            selector += ",[data-category~='" + element.value + "']";
                    }
                });
                $lis.hide();
                console.log('Find',selector);
                $('.matrix-container .row .col-sm-6').hide().filter(selector).fadeIn(1000);            
            } else {
            $lis.fadeIn(1000);
            console.log('Find',$lis);
        }
    });

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

    $('.details-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        infinite: true,
        useTransform: true,
        speed: 1000,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        prevArrow: '<button type="button" class="slick-prev pull-left"><i class="bi bi-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next pull-right"><i class="bi bi-arrow-right"></i></button>',
    });

    $('.slider-nav').on('init', function(event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoPlay: true,
        dots: false,
        focusOnSelect: false,
        infinite: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev pull-left"><i class="bi bi-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next pull-right"><i class="bi bi-arrow-right"></i></button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }]
    });

    $('.details-slider').on('afterChange', function(event, slick, currentSlide) {
        $('.slider-nav').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.slider-nav .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });

    $('.slider-nav').on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');
        $('.details-slider').slick('slickGoTo', goToSingleSlide);
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

    $(function() {
        $( ".spinner" ).spinner({
            min: 0,
            max: 100000000,
        });
    });
    $('.btn-remove').on('click', function() {
        $(this).parents('.cart-matrix-list').fadeOut();
        console.log('REMOVE ROW');
    });
    $('#shipping-country').flagStrap({
        buttonSize: "",
        buttonType: "",
        labelMargin: "10px",
        myTransition: "all 0.35s ease",
        scrollable: true,
        scrollableHeight: "350px",
        placeholder: {
            value: "",
            text: "<span>&#9983;</span> &nbsp;Select Country"
        },
    });
    $('#shipping-country-alt').flagStrap({
        buttonSize: "",
        buttonType: "",
        labelMargin: "10px",
        myTransition: "all 0.35s ease",
        scrollable: true,
        scrollableHeight: "350px",
        placeholder: {
            value: "",
            text: "<span>&#9983;</span> &nbsp;Select Country"
        },
    });
    $('.btn-myflag').on('click', function(){
        if($(this).hasClass('show')){
            $(this).addClass('rotate-caret');
        }
        else {
            $(this).removeClass('rotate-caret');
        }
    });
    $(window).on('click', function(){
        if($('.btn-myflag').hasClass('show')){
            $('.btn-myflag').addClass('rotate-caret');
        }
        else {
            $('.btn-myflag').removeClass('rotate-caret');
        }
    });

    function checkoutAccount() {
		$('#checkbox-create-account').on('click', function () {
			if ($('#checkbox-create-account:checked').length > 0) {
				$('.create-account').slideDown();
			} else {
                $('#checkbox-create-account').prop('checked', false);
				$('.create-account').slideUp();
			}
		});
	}
	checkoutAccount();

    function alternateAddress() {
		$('#checkbox-shipment-alternate').on('click', function () {
			if ($('#checkbox-shipment-alternate:checked').length > 0) {
				$('.shipment-alternate-address').slideDown();
			} else {
                $('#checkbox-shipment-alternate').prop('checked', false);
				$('.shipment-alternate-address').slideUp();
			}
		});
	}
	alternateAddress();
})(jQuery);