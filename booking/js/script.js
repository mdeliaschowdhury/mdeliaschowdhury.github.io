"use strict";
var $ = $.noConflict();
$(document).ready(function(){
    $(".sign-in-up a").on('click', function(e) {
        e.preventDefault();
        $("#modal-login").toggleClass("modal-open");
    });
    $(".modal-login-body").click(function(e){
        e.stopPropagation();
    });
    $(".modal-wrapper").on('click', function(e) {
        e.preventDefault();
        $("#modal-login").removeClass("modal-open");
    });
    $(".btn-close").click(function(){
        $("#modal-login").removeClass("modal-open");
    });
    $("#btn-forget").click(function(){
        $(".signin").css("display","none");
        $(".reset-password").fadeIn();
    });
    $("#btn-backlogin").click(function(){
        $(".reset-password").css("display","none");
        $(".signin").fadeIn();
    });

    $('.flight-type a').click(function(){
        $('.flight-type a').removeClass('active');
        $(this).addClass('active');
    });

    $('._dropdown .dropdown-menu').click(function(e){
        e.stopPropagation();
    });

    $('#btn-oneway').click(function(e){
        e.preventDefault();
        $('._row_search').css('display', 'flex');
        $('._multicity_search').css('display', 'none');
        $('._return_date').fadeOut();
    });
    $('#btn-roundtrip').click(function(e){
        e.preventDefault();
        $('._row_search').css('display', 'flex');
        $('._multicity_search').css('display', 'none');
        $('._return_date').fadeIn();
    });
    $('#btn-multicity').click(function(e){
        e.preventDefault();
        $('._row_search').css('display', 'none');
        $('._multicity_search').fadeIn();
    });


    // $(document).on("click", ".btn-add-multicity", function(e){
    //     e.preventDefault();
    //     if($('._row_multicity').length < 6){
    //     var index = $('._row_multicity').length;
    //     var markUp = $('._row_multicity:eq(0)').clone();
    //     markUp.find('.tt-input, .depart-date').val('');
    //     markUp.find('.depart-date').removeAttr('id').removeClass('hasDatepicker');
    //     markUp.find('.inputQty:eq(0)').val('1');
    //     markUp.find('.inputQty:eq(1)').val('0');
    //     markUp.find('.inputQty:eq(2)').val('0');
    //     markUp.find('#economy__1').attr({id:'economy__'+index, name:'journeytype__'+index}).siblings('label').attr({for:'economy__'+index});
    //     markUp.find('#peconomy__1').attr({id:'peconomy__'+index, name:'journeytype__'+index}).siblings('label').attr({for:'peconomy__'+index});
    //     markUp.find('#business__1').attr({id:'business__'+index, name:'journeytype__'+index}).siblings('label').attr({for:'business__'+index});
    //     markUp.find('#firstclass__1').attr({id:'firstclass__'+index, name:'journeytype__'+index}).siblings('label').attr({for:'firstclass__'+index});
    //     markUp.find('.summation').text('1');
    //     markUp.find('.cabin-type').text('Economy');
    //     markUp.append('<div class="_multicity_btn_wrap"><button type="button" class="btn-remove-multicity"><i class="fa fa-times" aria-hidden="true"></i></button></div>');
    //     $(markUp).insertBefore('._row_multicity:eq(-1)');
    //     }
    //     $('#economy__'+index).prop('checked', true);
    //     if($('._row_multicity').length == 6){
    //         $(this).fadeOut(500);
    //     }
    // });

    

    // $(document).on('click', '.btn-remove-multicity', function(){
    //     $(this).parents('._row_multicity').remove();
    //     if($('._row_multicity').length < 6){
    //         $('.btn-add-multicity').fadeIn(500);
    //     }
    // });

    var data = ["Affligem Blonde", "Amsterdam Big Wheel", "Amsterdam Boneshaker IPA", "Amsterdam Downtown Brown", "Amsterdam Oranje Summer White",
    "Anchor Liberty Ale", "Beaus Lug Tread Lagered Ale", "Beerded Lady", "Belhaven Best Ale", "Big Rock Grasshopper Wheat",
    "Big Rock India Pale Ale", "Big Rock Traditional Ale", "Big Rock Warthog Ale", "Black Oak Nut Brown Ale", "Black Oak Pale Ale",
    "Boddingtons Pub Ale", "Boundary Ale", "Caffreys", "Camerons Auburn Ale", "Camerons Cream Ale", "Camerons Rye Pale Ale", "Ceres Strong Ale",
    "Cheval Blanc", "Crazy Canuck Pale Ale", "Creemore Springs Altbier", "Crosswind Pale Ale", "De Koninck", "Delirium Tremens",
    "Erdinger Dunkel Weissbier", "Erdinger Weissbier", "Export", "Flying Monkeys Amber Ale", "Flying Monkeys Antigravity",
    "Flying Monkeys Hoptical", "Flying Monkeys Netherworld", "Flying Monkeys Smashbomb", "Fruli", "Fullers Extra Spec Bitter",
    "Fullers London Pride", "Granville English Bay Pale", "Granville Robson Hefeweizen", "Griffon Pale Ale", "Griffon Red Ale",
    "Hacker-Pschorr Hefe Weisse", "Hacker-Pschorr Munchen Gold", "Hockley Dark Ale", "Hoegaarden", "Hops & Robbers IPA", "Houblon Chouffe",
    "James Ready Original Ale", "Kawartha Cream Ale", "Kawartha Nut Brown Ale", "Kawartha Premium Pale Ale", "Kawartha Raspberry Wheat",
    "Keiths", "Keiths Cascade Hop Ale", "Keiths Galaxy Hop Ale", "Keiths Hallertauer Hop Ale", "Keiths Hop Series Mixer",
    "Keiths Premium White", "Keiths Red", "Kilkenny Cream Ale", "Konig Ludwig Weissbier", "Kronenbourg 1664 Blanc", "La Chouffe",
    "La Messager Red Gluten Free", "Labatt 50 Ale", "Labatt Bass Pale Ale", "Lakeport Ale", "Leffe Blonde", "Leffe Brune",
    "Legendary Muskoka Oddity", "Liefmans Fruitesse", "Lions Winter Ale", "Maclays", "Mad Tom IPA", "Maisels Weisse Dunkel",
    "Maisels Weisse Original", "Maredsous Brune", "Matador 2.0 El Toro Bravo", "Mcauslan Apricot Wheat Ale", "Mcewans Scotch Ale",
    "Mill St Belgian Wit", "Mill St Coffee Porter", "Mill St Stock Ale", "Mill St Tankhouse Ale", "Molson Stock Ale", "Moosehead Pale Ale",
    "Mort Subite Kriek", "Muskoka Cream Ale", "Muskoka Detour IPA", "Muskoka Harvest Ale", "Muskoka Premium Dark Ale", "Newcastle Brown Ale",
    "Niagaras Best Blonde Prem", "Okanagan Spring Pale Ale", "Old Speckled Hen", "Ommegang Belgian Pale Ale", "Ommegang Hennepin", "PC IPA",
    "Palm Amber Ale", "Petrus Blonde", "Petrus Oud Bruin Aged Red", "Publican House Ale", "Red Cap", "Red Falcon Ale", "Rickards Dark",
    "Rickards Original White", "Rickards Red", "Rodenbach Grand Cru", "Schofferhofer Hefeweizen", "Shock Top Belgian White",
    "Shock Top Raspberry Wheat", "Shock Top Variety Pack", "Sleeman Cream Ale", "Sleeman Dark", "Sleeman India Pale Ale", "Smithwicks Ale",
    "Spark House Red Ale", "St. Ambroise India Pale Ale", "St. Ambroise Oatmeal Stout", "St. Ambroise Pale Ale", "Stereovision Kristall Wheat",
    "Stone Hammer Dark Ale", "Sunny & Share Citrus Saison", "Tetleys English Ale", "Thirsty Beaver Amber Ale", "True North Copper Altbier",
    "True North Cream Ale", "True North India Pale Ale", "True North Strong", "True North Wunder Weisse", "Twice As Mad Tom IPA",
    "Unibroue La Fin Du Monde", "Unibroue Maudite", "Unibroue Trois Pistoles", "Upper Canada Dark Ale", "Urthel Hop-It Tripel IPA",
    "Waterloo IPA", "Weihenstephan Kristalweiss", "Wellington Arkell Best Bitr", "Wellington County Dark Ale", "Wellington Special Pale", "Wells IPA"];
			
    var data = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: data
    });

    $('.typeahead').typeahead({
        hint: true,
        highlight: false,
        minLength: 1 
    },
    {
        name: 'data',
        source: data
    });

    $(document).on('click', '._exchangedata_left, ._exchangedata_right', function(e){
        if($(this).hasClass('_exchangedata_left')){
            $(this).removeClass('_exchangedata_left').addClass('_exchangedata_right');
        }else{
            $(this).removeClass('_exchangedata_right').addClass('_exchangedata_left');
        }
        if($(this).parent().siblings('._col_multicity').length){
            var form = $(this).parent().siblings('._col_multicity').find('._from').find('.tt-input').val();
            var to = $(this).parent().siblings('._col_multicity').find('._to').find('.tt-input').val();
        
            $(this).parent().siblings('._col_multicity').find('._from').find('.tt-input').val(to)
            $(this).parent().siblings('._col_multicity').find('._to').find('.tt-input').val(form);
        }else{
            var form = $(this).parent().siblings('._from').find('.tt-input').val();
            var to = $(this).parent().siblings('._to').find('.tt-input').val();
        
            $(this).parent().siblings('._from').find('.tt-input').val(to)
            $(this).parent().siblings('._to').find('.tt-input').val(form);
        }
    });

    $('.depart-date').datepicker({
        numberOfMonths: 2,
        dateFormat: "D mm/dd",
        // altFormat: "DD, d MM, yy",
        minDate: 0,
        beforeShow: function() {
            $(this).datepicker('option', 'maxDate', $('.return-date').val());
        }
    });
    $('.return-date').datepicker({
        numberOfMonths: 2,
        dateFormat: "D mm/dd",
        // altFormat: "DD, d MM, yy",
        defaultDate: "+1w",
        beforeShow: function() {
            $(this).datepicker('option', 'minDate', $('.depart-date').val());
            if ($('.depart-date').val() === '') $(this).datepicker('option', 'minDate', 0);                            
        }
    });

    // $(document).on('click', '._journey_block', function(){
    //     console.log('Clicked');
    //     var name = $(this).find('._category_label').text();
    //     $(this).parents('._dropdown').find('.cabin-type').text(name);
    // });

    $('.btn-spin-plus').click(function(){
        var thisInput = $(this).siblings('.inputQty');
        var thisInputVal = parseInt($(thisInput).val());
        var max = 9;
        var total = 0;
        $(this).parents('._passengers_type').find('.inputQty').each(function(key, val){
            total =  total + parseInt($(val).val());
        });
    
        if(total < max){
            if($(this).parents('._passengers_ranger').hasClass('_pr_3')){
                var pr1 = parseInt($(this).parents('._passengers_type').find('._pr_1').find('.inputQty').val());
                if(thisInputVal < pr1){
                    $(thisInput).val(thisInputVal + 1);
                }
            }else{
                $(thisInput).val(thisInputVal + 1);
            }
            var newTotal = 0;
            $(this).parents('._passengers_type').find('.inputQty').each(function(key, val){
                newTotal =  newTotal + parseInt($(val).val());
            });
            $(this).parents('._dropdown').find('.summation').text(newTotal);
        }
    });
    
    $('.btn-spin-minus').click(function(){
        var thisInput = $(this).siblings('.inputQty');
        var thisInputVal = parseInt($(thisInput).val());
        var max = 9;
        var total = 0;
        $(this).parents('._passengers_type').find('.inputQty').each(function(key, val){
            total =  total - parseInt($(val).val());
        });
    
        if(total < max){
            if($(this).parents('._passengers_ranger').hasClass('_pr_1')){
                var pr3 = parseInt($(this).parents('._passengers_type').find('._pr_3').find('.inputQty').val());
                if(thisInputVal > 1){
                    if(thisInputVal == pr3){
                        $(thisInput).val(thisInputVal - 1);
                        $(this).parents('._passengers_type').find('._pr_3').find('.inputQty').val(pr3 - 1)
                    }else{
                        $(thisInput).val(thisInputVal - 1);
                    }
                }
            } else{
                if(thisInputVal > 0){
                    $(thisInput).val(thisInputVal - 1);
                }
            }
            var newTotal = 0;
            $(this).parents('._passengers_type').find('.inputQty').each(function(key, val){
                newTotal =  newTotal + parseInt($(val).val());
            });
            $(this).parents('._dropdown').find('.summation').text(newTotal);
        }   
    });

    $('._journey_block').click(function(){
        var name = $(this).find('._category_label').text();
        $(this).parents('._dropdown').find('.cabin-type').text(name);
    });

    var af = 0;  
    $(".btn-add-multicity").on("click", function(e){
        e.preventDefault();
        af++;
        if (af == 1) {
            console.log('Click 1');
            $("._multicity_search .__3").css("display","flex");
        }
        if (af == 2) {
            console.log('Click 2');
            $("._multicity_search .__4").css("display","flex");
        }else if(af == 3) {
            console.log('Click 3');
            $("._multicity_search .__5").css("display","flex");

            $(".btn-add-multicity").css("display","none");
        }
    });
    $(".btn-remove-multicity").on("click",function(e){
        e.preventDefault();
        $(this).parents('._row_multicity').css("display","none");
        af--;
        if(af != 0){
            $(".btn-add-multicity").show();
        }   
    });

    $('.t-btn-spin-plus').click(function(){
        var thisInput = $(this).siblings('.inputQty');
        var thisInputVal = parseInt($(thisInput).val());
        var max = 100000000000;
        var total = 0;
        $(this).parents('._passengers_type').find('.inputQty').each(function(key, val){
            total =  total + parseInt($(val).val());
        });
    
        if(total < max){
            if($(this).parents('._passengers_ranger').hasClass('_pr_2')){
                var pr1 = parseInt($(this).parents('._passengers_type').find('._pr_1').find('.inputQty').val());
                // if(thisInputVal < pr1){
                //     $(thisInput).val(thisInputVal + 1);
                // }
                $(thisInput).val(thisInputVal + 1);
            }else{
                $(thisInput).val(thisInputVal + 1);
            }
            var newTotal = 0;
            $(this).parents('._passengers_type').find('.inputQty').each(function(key, val){
                newTotal =  newTotal + parseInt($(val).val());
            });
            $(this).parents('._dropdown').find('.summation').text(newTotal);
        }
    });
    
    $('.t-btn-spin-minus').click(function(){
        var thisInput = $(this).siblings('.inputQty');
        var thisInputVal = parseInt($(thisInput).val());
        var max = 100000000000;
        var total = 0;
        $(this).parents('._passengers_type').find('.inputQty').each(function(key, val){
            total =  total - parseInt($(val).val());
        });
    
        if(total < max){
            if($(this).parents('._passengers_ranger').hasClass('_pr_1')){
                var pr2 = parseInt($(this).parents('._passengers_type').find('._pr_2').find('.inputQty').val());
                if(thisInputVal > 1){
                    if(thisInputVal == pr2){
                        $(thisInput).val(thisInputVal - 1);
                        $(this).parents('._passengers_type').find('._pr_2').find('.inputQty').val(pr2 - 1)
                    }else{
                        $(thisInput).val(thisInputVal - 1);
                    }
                }
            } else{
                if(thisInputVal > 0){
                    $(thisInput).val(thisInputVal - 1);
                }
            }
            var newTotal = 0;
            $(this).parents('._passengers_type').find('.inputQty').each(function(key, val){
                newTotal =  newTotal + parseInt($(val).val());
            });
            $(this).parents('._dropdown').find('.summation').text(newTotal);
        }   
    });

    $('.r-btn-spin-plus').click(function(){
        var thisInput = $(this).siblings('.inputQtyr');
        var thisInputVal = parseInt($(thisInput).val());
        var max = 100000000000;
        console.log('Plus');
        var total = 0;
        $(this).parents('._passengers_type').find('.inputQtyr').each(function(key, val){
            total =  total + parseInt($(val).val());
        });
    
        if(total < max){
            if($(this).parents('._passengers_ranger').hasClass('_rm_3')){
                var pr1 = parseInt($(this).parents('._passengers_type').find('._rm_3').find('.inputQtyr').val());
                if(thisInputVal < pr1){
                    $(thisInput).val(thisInputVal + 1);
                }
            }else{
                $(thisInput).val(thisInputVal + 1);
            }
            var newTotal = 0;
            $(this).parents('._passengers_type').find('.inputQtyr').each(function(key, val){
                newTotal =  newTotal + parseInt($(val).val());
            });
            $(this).parents('._dropdown').find('.total-rooms').text(newTotal);
        }
    });
    
    $('.r-btn-spin-minus').click(function(){
        var thisInput = $(this).siblings('.inputQtyr');
        var thisInputVal = parseInt($(thisInput).val());
        var max = 100000000000;
        console.log('Minus');
        var total = 0;
        $(this).parents('._passengers_type').find('.inputQtyr').each(function(key, val){
            total =  total - parseInt($(val).val());
        });
    
        if(total < max){
            if($(this).parents('._rooms_ranger').hasClass('_rm_3')){
                if(thisInputVal > 1){
                    $(thisInput).val(thisInputVal - 1);
                }
            } else{
                if(thisInputVal > 0){
                    $(thisInput).val(thisInputVal - 1);
                }
            }
            var newTotal = 0;
            $(this).parents('._passengers_type').find('.inputQtyr').each(function(key, val){
                newTotal =  newTotal + parseInt($(val).val());
                console.log(newTotal);
            });
            $(this).parents('._dropdown').find('.total-rooms').text(newTotal);
        }   
    });

    $('[data-toggle="tooltip"]').tooltip();

    $(".initialize-owl-xi").each(function() {
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
                },
                575:{
                    items: 1,
                    nav: true,
                },
                576:{
                    items: 2,
                },
                769:{
                    items: 3,
                },
                991:{
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

    $(".initialize-owl-xii").each(function() {
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
                },
                575:{
                    items: 1,
                    nav: true,
                },
                576:{
                    items: 2,
                },
                769:{
                    items: 3,
                },
                991:{
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

    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
    });
    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match( /ium$/ );
        }
    };
    
    // bind filter button click
    $('.grid-filter').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
    });
    
    // bind sort button click
    $('#sorts').on( 'click', 'button', function() {
        var sortByValue = $(this).attr('data-sort-by');
        $grid.isotope({ sortBy: sortByValue });
    });
    
    // change is-checked class on buttons
    $('.grid-filter').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });

    $("#owl-testimonial").each(function() {
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
                },
                575:{
                    items: 1,
                    nav: true,
                },
                576:{
                    items: 2,
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

    /*--- FLIGHT PAGE ---*/
    $("#initialize-owl-xii").each(function() {
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
                },
                575:{
                    items: 1,
                    nav: true,
                },
                576:{
                    items: 2,
                },
                769:{
                    items: 3,
                },
                991:{
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

    $(".relateditem-carousel").each(function() {
        $(this).owlCarousel({
            loop: false,
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
                },
                575:{
                    items: 1,
                    nav: true,
                },
                576:{
                    items: 1,
                },
                769:{
                    items: 1,
                },
                991:{
                    items: 1,
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

    $(function () {
        $('#slider-container').slider({
            range: true,
            min: 5000,
            max: 150000,
            values: [5000, 150000],
            create: function() {
                $("#amount").val("$5000 - $150000");
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
        $("#flight-container div.fl-flex-container").hide().filter(function () {
            var price = parseInt($(this).data("price"),10);
            return price >= minPrice && price <= maxPrice;
        }).show();
    }

    $(document).on('click', '.filter-toggle', function(e){
        e.preventDefault();
        $(this).parents('.filter-box').find('.filter-collapse').slideToggle();
    });
    
    $('.btn-more').click(function(e){
        e.preventDefault();
    });

    $('.toggle-details').click(function(e){
        e.preventDefault();
        $(this).parents('.list-container').find('.list-item-details').slideToggle();
    });

    $('.summary-toggle').click(function(e){
        e.preventDefault();
        $(this).parents('.summary').find('.summary-collapse').slideToggle();
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

    $('.btn-list').click(function(e){
        e.preventDefault();
        $('.grid-container').addClass('matrix-container').removeClass('grid-container');
    });

    $('.btn-grid').click(function(e){
        e.preventDefault();
        $('.matrix-container').addClass('grid-container').removeClass('matrix-container');
    });

    $(function() {
        $('.call-calendar').click(function(){
            $('#ui-datepicker-div').addClass('calendar-redesign');
        });
        $('.call-calendar').datepicker({
            numberOfMonths: 1,
            changeMonth: true,
            changeYear: true,
            yearRange: "1900:2100",
            dateFormat: "dd M yy",
        });
    });

    $('.country').flagStrap({
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

    $('.btn-edit').click(function(e){
        e.preventDefault();
        $(this).parents('.rlc-trv-details').find('.update-trv-details').slideToggle();
    });

    $('.details-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
        arrows: true,
        fade: true,
        adaptiveHeight: true,
        infinite: true,
        useTransform: true,
        speed: 1000,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    });

    $('.slider-nav').on('init', function(event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        autoPlay: true,
        dots: false,
        focusOnSelect: false,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
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
            max: 9,
        });
    });

    $(document).on('click', '.btn-faq', function(e){
        e.preventDefault();
        if($(this).parent().siblings('.collapse').hasClass('show')) {
            $('.btn-faq').removeClass('active');
        }else{
            $('.btn-faq').not(this).removeClass('active');
            $(this).addClass('active');
        }
    });

    $('.comment-box .reactions a').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });

    $(document).on('click', '.btn-reply', function(e){
        e.preventDefault();
        $(this).parents('.comment-box').find('.reply').slideToggle();
    });

    $('#seat-plan .seat').click(function(){
        if($(this).parents('#seat-plan')){
            $(this).toggleClass('selected');
        }else{
            $(this).removeClass('selected');
        }
        if($(this).hasClass('booked')){
            $(this).removeClass('selected');
            $(this).children('.select-input').preventDefault();
        }
    });

    $('.btn-offcanvas').click(function(){
        $('.offcanvas-overlay').addClass('open');
        $('#offcanvas').addClass('open');
    });
    $('.brand-area .btn-close').click(function(){
        $('.offcanvas-overlay').removeClass('open');
        $('#offcanvas').removeClass('open');
    });

    $('#currency').flagStrap({
        buttonSize: "btn-lg",
        buttonType: "btn-success",
        labelMargin: "5px",
        scrollable: false,
        scrollableHeight: "350px",
        placeholder: {
            value: "",
            text: ""
        },
    });
    $('#language').flagStrap({
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

    $('._map_date_pick input').click(function(){
        $('#ui-datepicker-div').addClass('map-datepicker');
    });

    $('._map_price_filter .dropdown-menu').click(function(e){
        e.stopPropagation();
    });
    $('.btn-apply').click(function(){
        $('._map_price_filter .dropdown-menu').removeClass('show');
    });

    var map = L.map('map').setView([51.5, -0.09], 13);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	var LeafIcon = L.Icon.extend({
		options: {
			// shadowUrl: 'leaf-shadow.png',
			iconSize:     [40, 40],
			shadowSize:   [50, 64],
			iconAnchor:   [22, 94],
			shadowAnchor: [4, 62],
			popupAnchor:  [-3, -76]
		}
	});

	var greenIcon = new LeafIcon({iconUrl: 'images/icon/location.png'}),
		redIcon = new LeafIcon({iconUrl: 'images/icon/location.png'}),
        orangeIcon = new LeafIcon({iconUrl: 'images/icon/location.png'}),
        blueIcon = new LeafIcon({iconUrl: 'images/icon/location.png'}),
		yellowIcon = new LeafIcon({iconUrl: 'images/icon/location.png'});

	L.marker([51.5, -0.09], {icon: greenIcon}).bindPopup("Property Name").addTo(map);
	L.marker([51.495, -0.083], {icon: redIcon}).bindPopup("Property Name").addTo(map);
    L.marker([51.49, -0.1], {icon: orangeIcon}).bindPopup("Property Name").addTo(map);
    L.marker([51.49, -0.11], {icon: blueIcon}).bindPopup("Property Name").addTo(map);
    L.marker([51.49, -0.12], {icon: yellowIcon}).bindPopup("Property Name").addTo(map);
});




