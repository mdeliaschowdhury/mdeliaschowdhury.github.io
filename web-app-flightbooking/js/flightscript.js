$(document).ready(function(){
    $('.open-signup-form').click(function(){
        $('.sign-in').css('display', 'none');
        $('.sign-up').fadeIn();
    });
    $('.sign-in-return').click(function(){
        $('.sign-up').css('display', 'none');
        $('.sign-in').fadeIn();
    });
    $('.forget-pass').click(function(){
        $('.sign-in').css('display', 'none');
        $('.pass-reset').fadeIn();
    });
    $('.otp-to-sign-in').click(function(){
        $('.pass-reset').css('display', 'none');
        $('.sign-in').fadeIn();
    });
});

$(document).ready(function(){
    $('.droplist-toggle').click(function(){
        $('.droplist-menu').toggle();
    });
    $('.spin-submit span').click(function(){
        $('.droplist-menu').css('display', 'none');
    });
});

$(document).ready(function(){
    $('#International').on( "click", function() {
        $("#International input").prop("checked", true);
        $("#bd-domestic input").prop("checked", false);
        $("#ind-domestic input").prop("checked", false);
    });
    $('#bd-domestic').on( "click", function() {
        $("#International input").prop("checked", false);
        $("#bd-domestic input").prop("checked", true);
        $("#ind-domestic input").prop("checked", false);
    });
    $('#ind-domestic').on( "click", function() {
        $("#International input").prop("checked", false);
        $("#bd-domestic input").prop("checked", false);
        $("#ind-domestic input").prop("checked", true);
    });
});

try {
    var body = $('body,html');

    var selectSpecial = $('.droplist');
    var info = selectSpecial.find('.info');
    var dropdownSelect = selectSpecial.parent().find('.droplist-menu'); // dropdown-select;
    var getTraveller = dropdownSelect.find('.add-traveller'); // list-room;
    var totalTraveller = 0;

    getTraveller.on('click', '.btn-spin-plus', function () {
        var that = $(this);
        var qtyContainer = that.parent();
        var qtyInput = qtyContainer.find('input[type=number]');
        var max = 9;

        var oldValue = parseInt(qtyInput.val());
        var totalVal = 0;
    
        if (oldValue >= max) { //&& oldValue >= totalTraveller
            var newVal = oldValue;
        } else {
            var newVal = oldValue + 1;
        }
        //qtyInput.val(newVal);

        $('.inputQty').each(function(e,v){
            //console.log(v);
             totalVal = totalVal + parseInt($(v).val());
        });
       
        var adult = parseInt($('.quantity1').find('input').val());
        var infant = parseInt($('.quantity3').find('input').val());
        if(totalVal < max){
            if($(this).parent().hasClass('quantity3')){
                if(adult > infant){
                qtyInput.val(newVal);
            }
            }else{
                qtyInput.val(newVal);   
            }
                  var newTotal = 0; 
                $('.inputQty').each(function(e,v){
            //console.log(v);
             newTotal = newTotal + parseInt($(v).val());
        });
             $('.droplist-toggle-span').text(newTotal);   
        }
        // console.log('Counter :',newVal);
        // console.log('NEW TOTAL TRAVELLER',totalTraveller);

        updateTraveller();
    });

    getTraveller.on('click', '.btn-spin-minus', function () {
        var that = $(this);
        var qtyContainer = that.parent();
        var qtyInput = qtyContainer.find('input[type=number]');
        var min = qtyInput.attr('min');
        var max = 9;

        var oldValue = parseInt(qtyInput.val());
        if (oldValue <= min) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue - 1;
        }
        var totalVal = 0;
        qtyInput.val(newVal);
        var adult = parseInt($('.quantity1').find('input').val());
        var infant = parseInt($('.quantity3').find('input').val());
        
                if($(this).parent().hasClass('quantity1')){
                    if(adult < infant){
                   $('.quantity3').find('input').val(adult);
                    }
                }
                
                var newTotal = 0; 
                $('.inputQty').each(function(e,v){
            //console.log(v);
             newTotal = newTotal + parseInt($(v).val());
        });
             $('.droplist-toggle-span').text(newTotal);   
        

        updateTraveller();
    });

    getTraveller.on('change', '.inputQty', function () {
        var that = $(this);
        // console.log(isNumber);
        if (isNumber(that.val())) {
            var qtyVal = parseInt(that.val());
            if (that.val().length === 0) {
                qtyVal = 0;
            }

            if (qtyVal < 0) {
                qtyVal = 0;
            }
            // console.log(qtyVal);
            that.val(qtyVal);

            updateTraveller();
        }
    });

    function isNumber(n){
        return typeof(n) != "boolean" && !isNaN(n);
    }

    function countAdult() {
        var listRoomItem = getTraveller.find('.list-person_item_1');
        var totalAdults = 0;

        listRoomItem.each(function () {
            var that = $(this);
            var findAdult = that.find('.quantity1 > input');
            var numberAdults = parseInt(findAdult.val()); //parseInt(that.parent().find('.quantity1 > input').val());

            totalAdults = totalAdults + numberAdults;

        });
        // console.log(totalAdults);
        return totalAdults;
    }

    function countChildren() {
        var listRoomItem = getTraveller.find('.list-person_item_2');
        var totalChildren = 0;

        listRoomItem.each(function () {
            var that = $(this);
            var findChildren = that.find('.quantity2 > input');
            var numberChildren = parseInt(findChildren.val()); //parseInt(that.parent().find('.quantity2 > input').val());

            totalChildren = totalChildren + numberChildren;
        });
        
        return totalChildren;
    }

    function countInfant() {
        var listRoomItem = getTraveller.find('.list-person_item_3');
        var totalInfant = 0;

        listRoomItem.each(function () {
            var that = $(this);
            var findInfant = that.find('.quantity3 > input');
            var numberInfant = parseInt(findInfant.val()); //parseInt(that.parent().find('.quantity3 > input').val());

            totalInfant = totalInfant + numberInfant;
        });
        
        return totalInfant;
    }

    function updateTraveller() {
        var totalAd = parseInt(countAdult());
        var totalChi = parseInt(countChildren());
        var totalInf = parseInt(countInfant());

        totalTraveller = totalAd+totalChi+totalInf;
        // console.log('Total Traveller :',totalTraveller);

        var adults = 'Adult, ';

        if (totalAd > 1) {
            adults = 'Adults, ';
        }
        
        var infoText = totalAd + ' ' + adults + totalChi + ' ' + 'Children'+ ' ' + totalInf + '' + 'Infants';
        // console.log(infoText);
        info.val(infoText);
    }

} catch (e) {
    console.log(e);
}

$(document).on('click', '.category-name, input[name = "category-name"]', function(){
    var name = $(this).parents('.category-list').find('.category-name').text();
    $('.cabin-class-name').text(name);
});

$(document).ready(function(){
    var findCheckbox = $('#btn-multicity');

    $('#btn-multicity').on('click',function () {
        if (findCheckbox.is(':checked')) {
            $(".multicityContainer").css("display", 'block');
            $(".return").css("display", 'none');
            $(".flex-item__toggle").css("display", 'none');
        } else {
            $(".multicityContainer").css("display", 'none');
            $(".return").css("display", 'table-cell');
            $(".flex-item__toggle").css("display", 'table-cell');
        }
    });
});

$(document).ready(function(){
    var i = 0;  
    $("#removeMulticity").on("click", function(event){
        event.preventDefault();
        i++;
        if (i == 1) {
            $("#form-1").css("display","none");
            $("#add-flight_3").css("display","inline-block");
        }
        else if(i == 2) {
            $("#form-2").css("display","none");
            $("#add-flight_1").css("display","inline-block");
        }
    });
});



$(document).ready(function(){
$(".bs-searchbox input").attr("placeholder", "1000");
});

jQuery(function($){

'use strict';
    
    (function () {
        $(window).load(function() {
            $('#pre-status').fadeOut();
            $('#st-preloader').delay(350).fadeOut('slow');
        });
    }());
});


$(document).ready(function(){
    $("#btn-forget-pass").click(function(){
        $(".login").css("display","none");
        $(".confirm-email").css("display","block");
    });
    $("#demo-submit").click(function(){
        $(".confirm-email").css("display","none");
        $(".reset-password").css("display","block");
    });
    $(".btn-account").click(function(){
        $(".confirm-email").css("display","none");
        $(".reset-password").css("display","none");
        $(".login").css("display","block");
    });
});


$(function () {
    // Slideshow 1
    $("#homeCarousel").responsiveSlides({
        //maxwidth: 100%,
        speed: 800
    });
});

$(document).ready(function(){
    $("#btn-oneway").on("click",function(){
        $(".rslides img").css("height","auto");
    });
    $("#btn-roundtrip").on("click",function(){
        $(".rslides img").css("height","auto");
    });
    $("#btn-multicity").on("click",function(){
        $(".rslides img").css("height","auto");
    });
});

$(document).ready(function(){
    $(".fl-from-in").click(function(){     
        $(".typeahead__result .typeahead__list").css("display","block");
    });
});

$(document).ready(function(){
    $(".custom-combobox-input").attr("placeholder","Airport name");
    $("#hotel .custom-combobox-input").attr("placeholder","Hotel name");
});


$(document).ready(function () {
    var vC1;
    var vC2;
    var vC3;
    var vC4;
    var vC5;
    var vC;
    $(document).on('change', '#validationCheck1, #validationCheck2, #validationCheck3, #validationCheck4', function () {
        vC1 = parseInt($('#validationCheck1 option:selected').val());
        vC2 = parseInt($('#validationCheck2 option:selected').val());
        vC3 = parseInt($('#validationCheck3 option:selected').val());
        vC4 = ($('#validationCheck4 option:selected').val());
    });
    $(document).on('click', '#search-oneway', function (e) {
        e.preventDefault();
        vC5= vC1+vC2;
        vC = vC1+vC2+vC3;

        if (vC5 > 9){
            $(".warning").fadeIn()
        }
        else if (vC5 > 9 && vC1 < vC4){
            $(".warning").fadeIn()
        }
        else if (vC > 9){
            $(".warning").fadeIn()
        }
        else if((vC1 < vC4)){
            $(".warning").fadeIn()
        }
        else{
            $(".warning").fadeOut()
            alert('ok')
        }
    });
});

$(document).ready(function () {
    var vC1;
    var vC2;
    var vC3;
    var vC4;
    var vC5;
    var vC;
    $(document).on('change', '#validationCheck5, #validationCheck6, #validationCheck7, #validationCheck8', function () {
        vC1 = parseInt($('#validationCheck5 option:selected').val());
        vC2 = parseInt($('#validationCheck6 option:selected').val());
        vC3 = parseInt($('#validationCheck7 option:selected').val());
        vC4 = ($('#validationCheck8 option:selected').val());
    });
    $(document).on('click', '#search-roundtrip', function (e) {
        e.preventDefault();
        vC5 = vC1+vC2;
        vC = vC1+vC2+vC3;

        if (vC5 > 9){
            $(".warning").fadeIn()
        }
        else if (vC5 > 9 && vC1 < vC4){
            $(".warning").fadeIn()
        }
        else if (vC > 9){
            $(".warning").fadeIn()
        }
        else if((vC1 < vC4)){
            $(".warning").fadeIn()
        }
        else{
            $(".warning").fadeOut()
            alert('ok')
        }
    });
});

$(document).ready(function () {
    var vC1;
    var vC2;
    var vC3;
    var vC4;
    var vC5;
    var vC;
    $(document).on('change', '#validationCheck9, #validationCheck10, #validationCheck11, #validationCheck12', function () {
        vC1 = parseInt($('#validationCheck9 option:selected').val());
        vC2 = parseInt($('#validationCheck10 option:selected').val());
        vC3 = parseInt($('#validationCheck11 option:selected').val());
        vC4 = ($('#validationCheck12 option:selected').val());
    });
    $(document).on('click', '#search-multicity', function (e) {
        e.preventDefault();
        vC5= vC1+vC2;
        vC = vC1+vC2+vC3;

        if (vC5 > 9){
            $(".warning").fadeIn()
        }
        else if (vC5 > 9 && vC1 < vC4){
            $(".warning").fadeIn()
        }
        else if (vC > 9){
            $(".warning").fadeIn()
        }
        else if((vC1 < vC4)){
            $(".warning").fadeIn()
        }
        else{
            $(".warning").fadeOut()
            alert('ok')
        }
    });
});



$(document).ready(function(){
    var i = 0;  
    $(".add-flight").on("click", function(event){
        event.preventDefault();
        i++;
        if (i == 1) {
            $("#form-1").css("display","flex");
        }
        else if(i == 2) {
            $("#form-2").css("display","flex");

            $(".add-flight").css("display","none");
        }
    });
    $(".remove-flight").on("click",function(event){
        event.preventDefault();
        $(this).parents('.formFlex').css("display","none");
        i--;
        if(i != 0){
            $(".add-flight").show();
        }   
    });
});

$(document).ready(function(){
    $('.stopage-row a').on("click",function(){
        $(this).toggleClass('active');
        console.log('Find',this);
    });
    $('.filterStopage, .departureFilter, .arrivalFilter, .faretype, .airlinesFilter').delegate('input[type=checkbox]', 'change', function() {
        var $lis = $('.allFlights > #flight-container > .fl-flex-container');
        console.log('Find List',$lis);
        $checked = $('.rangerbox input[type=checkbox]:checked');
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
                $('.allFlights > #flight-container > .fl-flex-container').hide().filter(selector).fadeIn(1000);            
            } else {
            $lis.fadeIn(1000);
            console.log('Find',$lis);
        }
    });
});

// MATRIX SORTING
$(document).ready(function(){
    $(".matrix-ul li a").on("click",function(e){
        e.preventDefault();
    });
});

// FLIGHT DETAILS POP UP
$(document).ready(function(){
    $(".btn-fl-details").click(function(){
        $('#flight-details .modal').css('display','block');
    });
    $('.close').click(function(){
        $('#flight-details .modal').fadeOut();
    });
});
// FARE RULES POP UP
$(document).ready(function(){
    $(".btn-fr-rules").click(function(){
        $('#fare-rules .modal').css('display','block');
    });
    $('.close').click(function(){
        $('#fare-rules .modal').fadeOut();
    });
});

$(document).ready(function(){
    $(".btn-inclusions").click(function(){
        $('#inclusions .modal').css('display','block');
    });
    $('.close').click(function(){
        $('#inclusions .modal').fadeOut();
    });
});
















