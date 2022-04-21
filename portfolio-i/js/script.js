/*
SCRIPT :
-----------------------------------------------------*/
$(document).ready(function(){
  $(".navbar-toggle-custom").click(function(){
    $(this).toggleClass('custom-toggler');
    $(".ul").toggleClass("transition-width");
  });

  $(".navbar-toggle-custom").click(function(){
    $("#navbar-list ul li").toggleClass("ul-li");
  });

  $(".navbar-toggle-custom").click(function(){
    $("#navbar-list a").fadeToggle("5");
    $("#navbar-list a").toggleClass("navbar-a");
  });

  $(".navbar-toggle").click(function(){
    $(this).toggleClass('custom-toggler');
    $(".collapse").slideToggle();
  });

  $('.gallery').each(function() {
    var $container = $(this);
    var $imageLinks = $container.find('.item');

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

  $(window).scroll(function () {
    if($(this).scrollTop() > 350) {
      $('#scroll-up').fadeIn();
    } 
    else {
      $('#scroll-up').fadeOut();
    }
  });

  $('#scroll-up').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
});

/*
WOW INITIALIZE :
-----------------------------------------------------*/
new WOW().init();

/*
TEXTILLATE CHARACTER ANIMATION :
-----------------------------------------------------*/
$(function (){
  var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';

  $('#header-text h1').textillate({
    selector: '#header-text h1', // the default selector to use when detecting multiple texts to animate
    //loop: true, // enable looping
    minDisplayTime: 2000, // sets the minimum display time for each text before it is replaced
    initialDelay: 0,  // sets the initial delay before starting the animation
    autoStart: true,  // set whether or not to automatically start animating
    inEffects: ['fadeInLeftBig'], // custom set of 'in' effects. This effects whether or not the character is shown/hidden before or after an animation

    // in animation settings
    in: {
      effect: 'fadeInLeftBig', // set the effect name
      delayScale: 1, // set the delay factor applied to each consecutive character
      delay: 50, // set the delay between each character
      sync: false,  // set to true to animate all the characters at the same time
      shuffle: true  // randomize the character sequence (note that shuffle doesn't make sense with sync = true)
    },
  });

  $('#header-text h3').textillate({
    selector: '#header-text h3', // the default selector to use when detecting multiple texts to animate
    loop: true, // enable looping
    minDisplayTime: 2000, // sets the minimum display time for each text before it is replaced
    initialDelay: 0,  // sets the initial delay before starting the animation
    autoStart: true,  // set whether or not to automatically start animating
    inEffects: ['flipInX'], // custom set of 'in' effects. This effects whether or not the character is shown/hidden before or after an animation  
    outEffects: [ 'flipInX' ],   // custom set of 'out' effects

    // in animation settings
    in: {
      effect: 'flipInX', // set the effect name
      delayScale: 1, // set the delay factor applied to each consecutive character
      delay: 50, // set the delay between each character
      sync: false,  // set to true to animate all the characters at the same time
      shuffle: false  // randomize the character sequence (note that shuffle doesn't make sense with sync = true)
    },

    // out animation settings.
    out: {
      autoStart: true,
      effect: 'flipInX',
      delayScale: 1,
      delay: 50,
      sync: false,
      shuffle: false,
    }
  });
});

function textaboutme(el) {
  $(el).textillate({
    selector: '#text-about-me h6', // the default selector to use when detecting multiple texts to animate
    loop: false, // enable looping
    minDisplayTime: 2000, // sets the minimum display time for each text before it is replaced
    initialDelay: 0,  // sets the initial delay before starting the animation
    autoStart: false, // set whether or not to automatically start animating
    // in animation settings
    in: {
      effect: 'fadeInRightBig', // set the effect name
      //delayScale: 1, // set the delay factor applied to each consecutive character
      //delay: 50, // set the delay between each character
      //sync: false,  // set to true to animate all the characters at the same time
      //shuffle: false  // randomize the character sequence (note that shuffle doesn't make sense with sync = true)
    },
    type: 'word'
  });
}
$(window).on('scroll', function() {
  $("#text-about-me h6").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 550) {
      textaboutme('#text-about-me h6');
      $('#text-about-me h6').textillate();
    }  
  });
});

function tltheading(el) {
  $(el).textillate({
    selector: '.tlt-heading', // the default selector to use when detecting multiple texts to animate
    loop: false, // enable looping
    minDisplayTime: 2000, // sets the minimum display time for each text before it is replaced
    initialDelay: 0,  // sets the initial delay before starting the animation
    autoStart: false, // set whether or not to automatically start animating
    
    // in animation settings
    in: {
      effect: 'fadeInRightBig', // set the effect name
      //delayScale: 1, // set the delay factor applied to each consecutive character
      //delay: 50, // set the delay between each character
      //sync: false,  // set to true to animate all the characters at the same time
      //shuffle: false  // randomize the character sequence (note that shuffle doesn't make sense with sync = true)
    },
    type: 'char'
  });
}

$(window).on('scroll', function() {
  $(".tlt-heading").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 1550) {
      tltheading('.tlt-heading');
      $('.tlt-heading').textillate();
    }  
  });
});

function tltslogan(el) {
  $(el).textillate({
    selector: '.tlt-heading', // the default selector to use when detecting multiple texts to animate
    loop: false, // enable looping
    minDisplayTime: 2000, // sets the minimum display time for each text before it is replaced
    initialDelay: 0,  // sets the initial delay before starting the animation
    autoStart: false, // set whether or not to automatically start animating
    
    // in animation settings
    in: {
      effect: 'fadeInRightBig', // set the effect name
      //delayScale: 1, // set the delay factor applied to each consecutive character
      //delay: 50, // set the delay between each character
      //sync: false,  // set to true to animate all the characters at the same time
      //shuffle: false  // randomize the character sequence (note that shuffle doesn't make sense with sync = true)
    },
    type: 'char'
  });
}

$(window).on('scroll', function() {
  $(".tlt-sloagan").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 1550) {
      tltslogan('.tlt-sloagan');
      $('.tlt-sloagan').textillate();
    }  
  });
});

function tltquoteheading(el) {
  $(el).textillate({
    selector: '.tlt-quote-heading', // the default selector to use when detecting multiple texts to animate
    loop: false, // enable looping
    minDisplayTime: 2000, // sets the minimum display time for each text before it is replaced
    initialDelay: 0,  // sets the initial delay before starting the animation
    autoStart: false, // set whether or not to automatically start animating
    
    // in animation settings
    in: {
      effect: 'fadeInRightBig', // set the effect name
      //delayScale: 1, // set the delay factor applied to each consecutive character
      //delay: 50, // set the delay between each character
      //sync: false,  // set to true to animate all the characters at the same time
      //shuffle: false  // randomize the character sequence (note that shuffle doesn't make sense with sync = true)
    },
    type: 'char'
  });
}

$(window).on('scroll', function() {
  $(".tlt-quote-heading").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 2550) {
      tltquoteheading('.tlt-quote-heading');
      $('.tlt-quote-heading').textillate();
    }  
  });
});

function tltquoteslogan(el) {
  $(el).textillate({
    selector: '.tlt-quote-slogan', // the default selector to use when detecting multiple texts to animate
    loop: false, // enable looping
    minDisplayTime: 2000, // sets the minimum display time for each text before it is replaced
    initialDelay: 0,  // sets the initial delay before starting the animation
    autoStart: false, // set whether or not to automatically start animating
   
    // in animation settings
    in: {
      effect: 'fadeInRightBig', // set the effect name
      //delayScale: 1, // set the delay factor applied to each consecutive character
      //delay: 50, // set the delay between each character
      //sync: false,  // set to true to animate all the characters at the same time
      //shuffle: false  // randomize the character sequence (note that shuffle doesn't make sense with sync = true)
    },
    type: 'char'
  });
}

$(window).on('scroll', function() {
  $(".tlt-quote-slogan").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 4550) {
      tltquoteheading('.tlt-quote-slogan');
      $('.tlt-quote-slogan').textillate();
    }  
  });
});


