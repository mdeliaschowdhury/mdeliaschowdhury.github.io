(function ($){
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

    // new WOW().init();

    // $(".login-signup a").on('click', function(e) {
    //     e.preventDefault();
    //     $("#modal-login").toggleClass("modal-open");
    // });
    // $(".modal-login-body").click(function(e){
    //     e.stopPropagation();
    // });
    // $(".modal-wrapper").on('click', function(e) {
    //     e.preventDefault();
    //     $("#modal-login").removeClass("modal-open");
    // });
    // $(".btn-close").click(function(){
    //     $("#modal-login").removeClass("modal-open");
    // });
    // $(".btn-forget").click(function(){
    //     $(".signin").css("display","none");
    //     $(".reset-password").fadeIn();
    // });
    // $(".btn-signup").click(function(){
    //     $(".signin").css("display","none");
    //     $(".reset-password").css("display","none");
    //     $(".register").fadeIn();
    // });
    // $(".btn-login").click(function(){
    //     $(".reset-password").css("display","none");
    //     $(".register").css("display","none");
    //     $(".signin").fadeIn();
    // });

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

    $('.general-reports-slider').each(function(){
        $(this).slick({
            vertical: false,
            arrows: true,
            dots: false,
            autoplay: true,
            loop: true,
            infinite: false,
            speed: 1000,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1367,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
            ]
        })
    });

    var xValues = [
            'Covered Areas',
            'Restaurants',
            'Riders',
            'Total Orders',
            'Total Sells'
        ],
        barColors = [
            '#e93e21',
            '#cccccc',
            '#131e51', 
            '#bd157c',
            '#d63235',
        ],
        yValues = [50, 150, 50, 500, 1000];
    
    new Chart(yearlyChart, {
        type: 'bar',
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues,
            }]
        },
        options: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Complete overview of Hunger Food",
                fontSize: 20,
                lineHeight: 0,
                padding: 20,
            }
        }
    });

    var xCurrent = [
            'New Restaurants',
            'New Riders',
            'Total Orders',
            'Delivered',
            'Undelivered'
        ],
        barColors = [
            '#ff7b4f',
            '#131e51',
            '#bd157c',
            '#44f26e',
            '#eb3d4d'
        ],
        yCurrent = [5, 2, 75, 25, 3];
    
    new Chart(currentChart, {
        type: 'bar',
        data: {
            labels: xCurrent,
            datasets: [{
                backgroundColor: barColors,
                data: yCurrent,
            }]
        },
        options: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Todays overview of Hunger Food",
                fontSize: 20,
                lineHeight: 0,
                padding: 20,
            }
        }
    });

    var optionLabels = [
            'Dhaka',
            'Chittagong',
            'Narayanganj',
            'Munshiganj',
        ],
        optionColor = [
            '#3498DB',
            '#9B59B6',
            '#E74C3C',
            '#26B99A',
        ],
        hoverOptionColor = [
            "#49A9EA",
            "#B370CF",
            "#E95E4F",
            "#36CAAB"
        ],
        optionData = [100, 200, 300, 400],
        currentOptionData = [40, 20, 30, 10];

    var myChart = new Chart(areawisesellsAll, {
        type: 'doughnut',
        data: {
            labels: optionLabels,
            datasets: [{
                label: 'All Data',
                data: optionData,
                backgroundColor: optionColor,
                hoverBackgroundColor: hoverOptionColor,
                borderColor: '#fff',
                borderWidth: 2,
            }]
        },
        options: {
            legend: {
                display: true,
                position: 'bottom',
                padding: 50,
            },
            title: {
                display: true,
                text: "Areawise all sells data",
                fontSize: 20,
                lineHeight: 0,
                padding: 10,
            }
        }
    });

    var myChart = new Chart(areawisesellsToday, {
        type: 'doughnut',
        data: {
            labels: optionLabels,
            datasets: [{
                label: 'All Data',
                data: currentOptionData,
                backgroundColor: optionColor,
                hoverBackgroundColor: hoverOptionColor,
                borderColor: '#fff',
                borderWidth: 2,
            }]
        },
        options: {
            legend: {
                display: true,
                position: 'bottom',
                padding: 50,
            },
            title: {
                display: true,
                text: "Today's sells data",
                fontSize: 20,
                lineHeight: 0,
                padding: 10,
            }
        }
    });

    $(".pricing-carousel").each(function() {
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
                    items: 1,
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

    $(".testimonial-carousel").each(function() {
        $(this).owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            margin: 30,
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            lazyLoad: true,
            slideSpeed: 1000,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
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
                    items: 1,
                },
                767:{
                    items: 1,
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

    $(document).on('click', '.btn-faq', function(e){
        e.preventDefault();
        if($(this).parent().siblings('.collapse').hasClass('show')) {
            $('.btn-faq').removeClass('rotate-icon');
        }else{
            $('.btn-faq').not(this).removeClass('rotate-icon');
            $(this).toggleClass('rotate-icon');
        }
    });

    $('.partner-slider').slick({
        arrows: true,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 481,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.controls-slider').slick({
        arrows: false,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200000,
                settings: 'unslick',
            },
            {
                breakpoint: 498,
                settings: {
                    settings: "slick",
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
})(jQuery);

// "use strict";
// var $ = $.noConflict();
// $(document).ready(function(){
//     $(window).on('load', function() {
//         $('.preloader-wrapper').fadeOut('slow');
//         $('#preloader').delay(350).fadeOut('slow');
//     });

    
// });