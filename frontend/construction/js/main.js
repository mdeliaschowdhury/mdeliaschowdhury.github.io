(function ($) {
  "user strict";

  $(document).ready(function() {

  // nice select
  $('select:not(.ignore)').niceSelect();

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  // Input Increase
  var minVal = 1, maxVal = 20;
  $(".increaseQty").on('click', function(){
    var $parentElm = $(this).parents(".qtySelector");
    $(this).addClass("clicked");
    setTimeout(function(){
        $(".clicked").removeClass("clicked");
    },100);
    var value = $parentElm.find(".qtyValue").val();
    if (value < maxVal) {
        value++;
    }
    $parentElm.find(".qtyValue").val(value);
  });
  
  $(".decreaseQty").on('click', function(){
    var $parentElm = $(this).parents(".qtySelector");
    $(this).addClass("clicked");
    setTimeout(function(){
        $(".clicked").removeClass("clicked");
    },100);
    var value = $parentElm.find(".qtyValue").val();
    if (value > 1) {
        value--;
    }
    $parentElm.find(".qtyValue").val(value);
  });


  // folder toggle
  $(".folder").click(function(){
    $(".file-subtree").toggle(500);
  });

  // Comment reply hide show
  $(".reply-btn").click(function(){
    $(".reply-form").slideToggle("active");
  });

  // Range Slider
  $("#sliderdemo").ionRangeSlider({
    skin: "big",
    type: "double",
    grid: true,
    min: -0,
    max: 10000,
    from: 100,
    to: 10000
  });

  // popup video
  $('.popupvideo').magnificPopup({
    type: 'video'
  });

  // popup images
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      }
    }
  });

  // mixer code
  var gallery = $('.gallery-body');
  if (gallery.length) {
      var mixer = mixitup(gallery, {
          animation: {
              animateResizeContainer: false
          }
      });
  }

});

  // scrollTop
  var fixed_top = $("#header-section");
  $(window).on("scroll", function(){
      if( $(window).scrollTop() > 50){  
          fixed_top.addClass("animated fadeInDown header-fixed");
      }
      else{
          fixed_top.removeClass("animated fadeInDown header-fixed");
      }
  });

  // navbar-click
  $(".navbar li a").on("click", function () {
    var element = $(this).parent("li");
    if (element.hasClass("show")) {
      element.removeClass("show");
      element.find("li").removeClass("show");
    }
    else {
      element.addClass("show");
      element.siblings("li").removeClass("show");
      element.siblings("li").find("li").removeClass("show");
    }
  });

  // banner-carousel
  $('.banner-carousel').slick({
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icofont-arrow-left\"  aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icofont-arrow-right\"  aria-hidden='true'></i></button>",
    dots: true,
    dotsClass: 'section-dots',
    customPaging: function (slider, i) {
        var slideNumber = (i + 1),
            totalSlides = slider.slideCount;
        return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    }
  });

  // testimonial-carousel
  $('.testimonial-carousel').slick({
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icofont-arrow-left\"  aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icofont-arrow-right\"  aria-hidden='true'></i></button>",
    dots: false,
    dotsClass: 'section-dots',
    customPaging: function (slider, i) {
        var slideNumber = (i + 1),
            totalSlides = slider.slideCount;
        return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    }
  });

  // services-carousel
  $('.services-carousel').slick({
    infinite: true,
    autoplay: true,
    focusOnSelect: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icofont-rounded-left\"  aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icofont-rounded-right\"  aria-hidden='true'></i></button>",
    dots: false,
    dotsClass: 'section-dots',
    customPaging: function (slider, i) {
        var slideNumber = (i + 1),
            totalSlides = slider.slideCount;
        return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    },
    responsive: [
        {
          breakpoint: 992,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true
          }
        },
        {
          breakpoint: 577,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
        }
      ]
  });

  // blog-carousel
  $('.blog-carousel').slick({
    infinite: true,
    autoplay: false,
    focusOnSelect: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icofont-rounded-left\"  aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icofont-rounded-right\"  aria-hidden='true'></i></button>",
    dots: false,
    dotsClass: 'section-dots',
    customPaging: function (slider, i) {
        var slideNumber = (i + 1),
            totalSlides = slider.slideCount;
        return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    },
    responsive: [
        {
          breakpoint: 992,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
          }
        }
      ]
  });

  // brand-carousel
  $('.brand-carousel').slick({
    infinite: true,
    autoplay: true,
    focusOnSelect: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icofont-rounded-left\"  aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icofont-rounded-right\"  aria-hidden='true'></i></button>",
    dots: false,
    dotsClass: 'section-dots',
    customPaging: function (slider, i) {
        var slideNumber = (i + 1),
            totalSlides = slider.slideCount;
        return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    },
    responsive: [
        {
          breakpoint: 991,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
        }
      ]
  });

  // commercial-carousel
  $('.commercial-carousel-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.commercial-carousel-nav'
  });
  $('.commercial-carousel-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.commercial-carousel-for',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 481,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
        }
      ]

  });

  // wow Animation
  // wow = new WOW(
  //   {
  //     animateClass: 'animated',
  //     offset: 100,
  //   }
  // );
  // wow.init();

})(jQuery);