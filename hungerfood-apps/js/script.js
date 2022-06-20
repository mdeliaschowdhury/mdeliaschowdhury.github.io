"use strict";
var $ = $.noConflict();
$(document).ready(function(){
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

    var bootstrapButton = $.fn.button.noConflict();
    $.fn.bootstrapBtn = bootstrapButton;
    
    $('.navbar-cart').on('click', function(){
        $('#sidecart').addClass('cart-show')
    });
    $('.btn-cartclose').on('click', function(){
        $('#sidecart').removeClass('cart-show')
    });

    $(function() {
        $( ".spinner" ).spinner({
            min: 0,
            max: 100000,
        });
    });

    $('.btn-remove').on('click', function(){
        $(this).parent('.cart-list-item').fadeOut();
    });

    $('.slider-hero').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: false,
        focusOnSelect: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                }
            },
            {
                breakpoint: 768,
                settings: {
                }
            },
        ]
    });

    $('.carousel-foodz').each(function() {
        $(this).owlCarousel({
            center: false,
            rtl: false,
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            autoWidth: true,
            nav: false,
            dots: false,
            margin: 7,
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            lazyLoad: false,
            slideSpeed: 100,
            responsiveClass: true,
            responsive:{
                0:{
                    items: 3,
                    nav: false,
                    autoplay: false,
                },
                575:{
                    items: 3,
                    nav: false,
                    autoplay: false,
                },
            }
        });
    });
    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function() {
        owl.trigger('stop.owl.autoplay')
    })

    $('.carousel-restaurants').each(function() {
        $(this).owlCarousel({
            rtl: false,
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            autoWidth: true,
            nav: false,
            dots: false,
            margin: 7,
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            lazyLoad: false,
            slideSpeed: 100,
            responsiveClass: true,
            responsive:{
                0:{
                    items: 3,
                    nav: false,
                    autoplay: false,
                },
                575:{
                    items: 3,
                    nav: false,
                    autoplay: false,
                },
            }
        });
    });
    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function() {
        owl.trigger('stop.owl.autoplay')
    })

    $('.btn-view-password').on('click', function() {
        $(this).find('i').toggleClass('fa-eye-slash');
        if ($(this).parent().find('.password-field').attr('type') == 'password') {
            $(this).parent().find('.password-field').attr('type', 'text');
        }else {
            $(this).parent().find('.password-field').attr('type', 'password');
        }
    });
    $('.btn-forget').on('click', function(){
        $('.signin').css('display', 'none');
        $('.reset-password').fadeIn(1000);
    });
    $('.btn-login-back').on('click', function(){
        $('.reset-password').css('display', 'none');
        $('.signin').fadeIn(1000);
    });

    $('.btn-apply-filter').on('click', function(){
        $(this).parent().parents('.collapse').removeClass('show');
    });

    $(".food-item").on('click', function(e) {
        e.preventDefault();
        $("#modal-addtocart").toggleClass("modal-open");
    });
    $(".modal-content-wrapper").click(function(e){
        e.stopPropagation();
    });
    $(".modal-wrapper").on('click', function(e) {
        e.preventDefault();
        $("#modal-addtocart").removeClass("modal-open");
    });
    $(".btn-close").click(function(){
        $("#modal-addtocart").removeClass("modal-open");
    });

    $(document).on('click', '.btn-ordered-foodz', function(e){
        e.preventDefault();
        if($(this).parent().siblings('.collapse').hasClass('show')) {
            $('.btn-ordered-foodz').removeClass('rotate-icon');
        }else{
            $('.btn-ordered-foodz').not(this).removeClass('rotate-icon');
            $(this).toggleClass('rotate-icon');
        }
    });
});