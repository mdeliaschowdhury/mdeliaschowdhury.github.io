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

$(document).ready(function(){
    $("#btn-oneway").click(function(){
        $("#btn-oneway").prop("checked", true);
        $("#btn-roundtrip").prop("checked", false);
        $("#btn-multicity").prop("checked", false);
    });
    $("#btn-roundtrip").click(function(){
        $("#btn-oneway").prop("checked", false);
        $("#btn-roundtrip").prop("checked", true);
        $("#btn-multicity").prop("checked", false);
    });
    $("#btn-multicity").click(function(){
        $("#btn-oneway").prop("checked", false);
        $("#btn-roundtrip").prop("checked", false);
        $("#btn-multicity").prop("checked", true);
    });
});

$(document).ready(function(){
    var findCheckbox = $('#btn-oneway');

    $('#btn-oneway').on('click',function () {
        if (findCheckbox.is(':checked')) {
            $(".return").css("display", 'none');
            $(".multicityContainer").css("display", 'none');
            $(".flex-item__toggle").css("display", 'none');
        } 
        // else {
        //     $(".return").css("display", 'none');
        //     $(".flex-item__toggle").css("display", 'none');
        // }
    });
});

$(document).ready(function(){
    var findCheckbox = $('#btn-roundtrip');

    $('#btn-roundtrip').on('click',function () {
        if (findCheckbox.is(':checked')) {
            $(".return").css("display", 'table-cell');
            $(".multicityContainer").css("display", 'none');
            $(".flex-item__toggle").css("display", 'table-cell');
        } 
        // else {
        //     $(".return").css("display", 'none');
        //     $(".flex-item__toggle").css("display", 'none');
        // }
    });
});

$(document).ready(function(){
    var findCheckbox = $('#btn-multicity');

    $('#btn-multicity').on('click',function () {
        if (findCheckbox.is(':checked')) {
            $(".multicityContainer").css("display", 'block');
            $(".return").css("display", 'none');
            $(".flex-item__toggle").css("display", 'none');
        } 
        // else {
        //     $(".multicityContainer").css("display", 'none');
        //     $(".return").css("display", 'table-cell');
        //     $(".flex-item__toggle").css("display", 'table-cell');
        // }
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
    $("#btn__oneway").click(function(){
        $("#btn__oneway").prop("checked", true);
        $("#btn__roundtrip").prop("checked", false);
        $("#btn__multicity").prop("checked", false);
    });
    $("#btn__roundtrip").click(function(){
        $("#btn__oneway").prop("checked", false);
        $("#btn__roundtrip").prop("checked", true);
        $("#btn__multicity").prop("checked", false);
    });
    $("#btn__multicity").click(function(){
        $("#btn__oneway").prop("checked", false);
        $("#btn__roundtrip").prop("checked", false);
        $("#btn__multicity").prop("checked", true);
    });
});

$(document).ready(function(){
    var findCheckbox1 = $('#btn__oneway');
    var findCheckbox2 = $('#btn__roundtrip');
    var findCheckbox3 = $('#btn__multicity');

    $('#btn__oneway').on('click',function () {
        if (findCheckbox1.is(':checked')) {
            $(".ds__searchform > ._row-i").css("display", 'flex');
            $(".ds__searchform > ._row-i").css("float", 'auto');
            $(".ds__searchform > ._row-i").css("width", '100%');
            $(".ds__searchform > ._row-i").css("max-width", '100%');
            $(".ds__searchform > ._row-i").css("padding-right", '0');
            $(".ds__searchform > ._row-ii").css("display", 'flex');
            $(".ds__searchform > ._row-ii").css("float", 'auto');;
            $(".ds__searchform > ._row-ii").css("width", '100%');
            $(".ds__searchform > ._row-ii").css("max-width", '100%');
            $(".ds__searchform > ._row-ii").css("padding-left", '0');
            $(".return").css("display", 'none');
            $("._row-ii > .flex-item").css("width", '50%');
            $("._row-ii > .flex-item").css("max-width", '50%');
            $(".flex-item__toggle").css("display", 'table-cell');
            $(".ds__mulContainer").css("display", 'none');
        }
        // else {
        //     $(".ds__searchform > ._row-i").css("display", 'flex');
        //     $(".ds__searchform > ._row-i").css("float", 'auto');
        //     $(".ds__searchform > ._row-i").css("width", '100%');
        //     $(".ds__searchform > ._row-i").css("max-width", '100%');
        //     $(".ds__searchform > ._row-i").css("padding-right", 'auto');
        //     $(".ds__searchform > ._row-ii").css("display", 'flex');
        //     $(".ds__searchform > ._row-ii").css("float", 'auto');;
        //     $(".ds__searchform > ._row-ii").css("width", '100%');
        //     $(".ds__searchform > ._row-ii").css("max-width", '100%');
        //     $(".ds__searchform > ._row-ii").css("padding-left", 'auto');
        //     $(".return").css("display", 'block');
        //     $("._row-ii > .flex-item").css("width", '33.33333333333%');
        //     $("._row-ii > .flex-item").css("max-width", '33.33333333333%');
        //     $(".flex-item__toggle").css("display", 'table-cell');
        // }
    });

    $('#btn__roundtrip').on('click',function () {
        if (findCheckbox2.is(':checked')) {
            $(".ds__searchform > ._row-i").css("display", 'flex');
            $(".ds__searchform > ._row-i").css("float", 'auto');
            $(".ds__searchform > ._row-i").css("width", '100%');
            $(".ds__searchform > ._row-i").css("max-width", '100%');
            $(".ds__searchform > ._row-i").css("padding-right", '0');
            $(".ds__searchform > ._row-ii").css("display", 'flex');
            $(".ds__searchform > ._row-ii").css("float", 'auto');;
            $(".ds__searchform > ._row-ii").css("width", '100%');
            $(".ds__searchform > ._row-ii").css("max-width", '100%');
            $(".ds__searchform > ._row-ii").css("padding-left", '0');
            $(".return").css("display", 'table-cell');
            $("._row-ii > .flex-item").css("width", '33.33333333333%');
            $("._row-ii > .flex-item").css("max-width", '33.33333333333%');
            $(".flex-item__toggle").css("display", 'table-cell');
            $(".ds__mulContainer").css("display", 'none');
        }
        // else {
        //     $(".ds__searchform > ._row-i").css("display", 'flex');
        //     $(".ds__searchform > ._row-i").css("float", 'auto');
        //     $(".ds__searchform > ._row-i").css("width", '100%');
        //     $(".ds__searchform > ._row-i").css("max-width", '100%');
        //     $(".ds__searchform > ._row-i").css("padding-right", 'auto');
        //     $(".ds__searchform > ._row-ii").css("display", 'flex');
        //     $(".ds__searchform > ._row-ii").css("float", 'auto');;
        //     $(".ds__searchform > ._row-ii").css("width", '100%');
        //     $(".ds__searchform > ._row-ii").css("max-width", '100%');
        //     $(".ds__searchform > ._row-ii").css("padding-left", 'auto');
        //     $(".return").css("display", 'block');
        //     $("._row-ii > .flex-item").css("width", '33.33333333333%');
        //     $("._row-ii > .flex-item").css("max-width", '33.33333333333%');
        //     $(".flex-item__toggle").css("display", 'table-cell');
        // }
    });

    $('#btn__multicity').on('click',function () {
        if (findCheckbox3.is(':checked')) {
            $(".ds__searchform > ._row-i").css("display", 'flex');
            $(".ds__searchform > ._row-i").css("float", 'left');
            $(".ds__searchform > ._row-i").css("width", '50%');
            $(".ds__searchform > ._row-i").css("max-width", '50%');
            $(".ds__searchform > ._row-i").css("padding-right", '7.5px');
            $(".ds__searchform > ._row-ii").css("display", 'flex');
            $(".ds__searchform > ._row-ii").css("float", 'right');;
            $(".ds__searchform > ._row-ii").css("width", '50%');
            $(".ds__searchform > ._row-ii").css("max-width", '50%');
            $(".ds__searchform > ._row-ii").css("padding-left", '7.5px');
            $(".multicityContainer").css("display", 'block');
            $(".return").css("display", 'none');
            $("._row-ii > .flex-item").css("width", '50%');
            $("._row-ii > .flex-item").css("max-width", '50%');
            $(".flex-item__toggle").css("display", 'none');
        }
        // else {
        //     $(".multicityContainer").css("display", 'none');
        //     $(".ds__searchform > ._row-i").css("display", 'flex');
        //     $(".ds__searchform > ._row-i").css("float", 'auto');
        //     $(".ds__searchform > ._row-i").css("width", '100%');
        //     $(".ds__searchform > ._row-i").css("max-width", '100%');
        //     $(".ds__searchform > ._row-i").css("padding-right", 'auto');
        //     $(".ds__searchform > ._row-ii").css("display", 'flex');
        //     $(".ds__searchform > ._row-ii").css("float", 'auto');;
        //     $(".ds__searchform > ._row-ii").css("width", '100%');
        //     $(".ds__searchform > ._row-ii").css("max-width", '100%');
        //     $(".ds__searchform > ._row-ii").css("padding-left", 'auto');
        //     $(".return").css("display", 'block');
        //     $("._row-ii > .flex-item").css("width", '33.33333333333%');
        //     $("._row-ii > .flex-item").css("max-width", '33.33333333333%');
        //     $(".flex-item__toggle").css("display", 'table-cell');
        // }
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
    var i = 0;  
    $(".add-flight").on("click", function(event){
        event.preventDefault();
        i++;
        if (i == 1) {
            $("#form-1").css("display","flex");
        }
        if (i == 2) {
            $("#form-2").css("display","flex");
        }
        if (i == 3) {
            $("#form-3").css("display","flex");
        }
        if (i == 4) {
            $("#form-4").css("display","flex");
        }
        else if(i == 5) {
            $("#form-5").css("display","flex");

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
    var i = 0;  
    $(".add-ff").on("click", function(event){
        event.preventDefault();
        i++;
        if (i == 1) {
            $(".ff-form > .sequence__2").css("display","flex");
        }
        if (i == 2) {
            $(".ff-form > .sequence__3").css("display","flex");
        }
        if (i == 3) {
            $(".ff-form > .sequence__4").css("display","flex");
        }
        if (i == 4) {
            $(".ff-form > .sequence__5").css("display","flex");
        }
        if (i == 5) {
            $(".ff-form > .sequence__6").css("display","flex");
        }
        if (i == 6) {
            $(".ff-form > .sequence__7").css("display","flex");
        }
        if (i == 7) {
            $(".ff-form > .sequence__8").css("display","flex");
        }
        else if(i == 8) {
            $(".ff-form > .sequence__9").css("display","flex");

            $(".add-ff").css("display","none");
        }
    });
    $(".remove-ff").on("click",function(event){
        event.preventDefault();
        $(this).parents('.fac__row').css("display","none");
        i--;
        if(i != 1){
            $(".add-ff").show();
        }   
    });
});

$(document).ready(function(){
    var i = 0;  
    $(".add-mr").on("click", function(event){
        event.preventDefault();
        i++;
        if (i == 1) {
            $(".mr-form > .sequence__2").css("display","flex");
        }
        if (i == 2) {
            $(".mr-form > .sequence__3").css("display","flex");
        }
        if (i == 3) {
            $(".mr-form > .sequence__4").css("display","flex");
        }
        if (i == 4) {
            $(".mr-form > .sequence__5").css("display","flex");
        }
        if (i == 5) {
            $(".mr-form > .sequence__6").css("display","flex");
        }
        if (i == 6) {
            $(".mr-form > .sequence__7").css("display","flex");
        }
        if (i == 7) {
            $(".mr-form > .sequence__8").css("display","flex");
        }
        else if(i == 8) {
            $(".mr-form > .sequence__9").css("display","flex");

            $(".add-mr").css("display","none");
        }
    });
    $(".remove-mr").on("click",function(event){
        event.preventDefault();
        $(this).parents('.fac__row').css("display","none");
        i--;
        if(i != 1){
            $(".add-mr").show();
        }   
    });
});

$(document).ready(function(){
    var i = 0;  
    $(".add-wc").on("click", function(event){
        event.preventDefault();
        i++;
        if (i == 1) {
            $(".wc-form > .sequence__2").css("display","flex");
        }
        if (i == 2) {
            $(".wc-form > .sequence__3").css("display","flex");
        }
        if (i == 3) {
            $(".wc-form > .sequence__4").css("display","flex");
        }
        if (i == 4) {
            $(".wc-form > .sequence__5").css("display","flex");
        }
        if (i == 5) {
            $(".wc-form > .sequence__6").css("display","flex");
        }
        if (i == 6) {
            $(".wc-form > .sequence__7").css("display","flex");
        }
        if (i == 7) {
            $(".wc-form > .sequence__8").css("display","flex");
        }
        else if(i == 8) {
            $(".wc-form > .sequence__9").css("display","flex");

            $(".add-wc").css("display","none");
        }
    });
    $(".remove-wc").on("click",function(event){
        event.preventDefault();
        $(this).parents('.fac__row').css("display","none");
        i--;
        if(i != 1){
            $(".add-wc").show();
        }   
    });
});

$(document).ready(function(){
    var i = 0;  
    $(".add-bgg").on("click", function(event){
        event.preventDefault();
        i++;
        if (i == 1) {
            $(".bgg-form > .sequence__2").css("display","flex");
        }
        if (i == 2) {
            $(".bgg-form > .sequence__3").css("display","flex");
        }
        if (i == 3) {
            $(".bgg-form > .sequence__4").css("display","flex");
        }
        if (i == 4) {
            $(".bgg-form > .sequence__5").css("display","flex");
        }
        if (i == 5) {
            $(".bgg-form > .sequence__6").css("display","flex");
        }
        if (i == 6) {
            $(".bgg-form > .sequence__7").css("display","flex");
        }
        if (i == 7) {
            $(".bgg-form > .sequence__8").css("display","flex");
        }
        else if(i == 8) {
            $(".bgg-form > .sequence__9").css("display","flex");

            $(".add-bgg").css("display","none");
        }
    });
    $(".remove-bgg").on("click",function(event){
        event.preventDefault();
        $(this).parents('.fac__row').css("display","none");
        i--;
        if(i != 1){
            $(".add-bgg").show();
        }   
    });
});

$(document).ready(function(){
    var i = 0;  
    $(".add-ch").on("click", function(event){
        event.preventDefault();
        i++;
        if (i == 1) {
            $(".ch-form > .sequence__2").css("display","flex");
        }
        if (i == 2) {
            $(".ch-form > .sequence__3").css("display","flex");
        }
        if (i == 3) {
            $(".ch-form > .sequence__4").css("display","flex");
        }
        if (i == 4) {
            $(".ch-form > .sequence__5").css("display","flex");
        }
        if (i == 5) {
            $(".ch-form > .sequence__6").css("display","flex");
        }
        if (i == 6) {
            $(".ch-form > .sequence__7").css("display","flex");
        }
        else if(i == 7) {
            $(".ch-form > .sequence__8").css("display","flex");

            $(".add-ch").css("display","none");
        }
    });
    $(".remove-ch").on("click",function(event){
        event.preventDefault();
        $(this).parents('.fac__row').css("display","none");
        i--;
        if(i != 1){
            $(".add-ch").show();
        }   
    });
});

$(document).ready(function(){
    var i = 0;  
    $(".add-str").on("click", function(event){
        event.preventDefault();
        i++;
        if (i == 1) {
            $(".str-form > .sequence__2").css("display","block");
        }
        if (i == 2) {
            $(".str-form > .sequence__3").css("display","block");
        }
        if (i == 3) {
            $(".str-form > .sequence__4").css("display","block");
        }
        if (i == 4) {
            $(".str-form > .sequence__5").css("display","block");
        }
        if (i == 5) {
            $(".str-form > .sequence__6").css("display","block");
        }
        if (i == 6) {
            $(".str-form > .sequence__7").css("display","block");
        }
        if (i == 7) {
            $(".str-form > .sequence__8").css("display","block");
        }
        else if(i == 8) {
            $(".str-form > .sequence__9").css("display","block");

            $(".add-str").css("display","none");
        }
    });
    $(".remove-str").on("click",function(event){
        event.preventDefault();
        $(this).parents('.fac__row').css("display","none");
        i--;
        if(i != 1){
            $(".add-str").show();
        }   
    });
});

$(document).ready(function(){
    var i = 0;  
    $(".add-med").on("click", function(event){
        event.preventDefault();
        i++;
        if (i == 1) {
            $(".med-form > .sequence__2").css("display","block");
        }
        if (i == 2) {
            $(".med-form > .sequence__3").css("display","block");
        }
        if (i == 3) {
            $(".med-form > .sequence__4").css("display","block");
        }
        if (i == 4) {
            $(".med-form > .sequence__5").css("display","block");
        }
        if (i == 5) {
            $(".med-form > .sequence__6").css("display","block");
        }
        if (i == 6) {
            $(".med-form > .sequence__7").css("display","block");
        }
        if (i == 7) {
            $(".med-form > .sequence__8").css("display","block");
        }
        else if(i == 8) {
            $(".med-form > .sequence__9").css("display","block");

            $(".add-med").css("display","none");
        }
    });
    $(".remove-med").on("click",function(event){
        event.preventDefault();
        $(this).parents('.fac__row').css("display","none");
        i--;
        if(i != 1){
            $(".add-med").show();
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

// $(document).ready(function(){
//     $("#btn-oneway").on("click",function(){
//         $(".rslides img").css("height","auto");
//     });
//     $("#btn-roundtrip").on("click",function(){
//         $(".rslides img").css("height","auto");
//     });
//     $("#btn-multicity").on("click",function(){
//         $(".rslides img").css("height","auto");
//     });
// });

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

$(document).ready(function() {
    $('.filter-close').on('click', function() {
        $('#filter').fadeOut();
    });
});



$(document).ready(function(){
    $("#fl-card-btn-1").click(function(){
        $("#fl-card-offer-1").slideToggle();
        $("#fl-card-footer-1").slideToggle();
    });
});
$(document).ready(function(){
    $("#fl-card-btn-2").click(function(){
        $("#fl-card-offer-2").slideToggle();
        $("#fl-card-footer-2").slideToggle();
    });
});
$(document).ready(function(){
    $("#fl-card-btn-3").click(function(){
        $("#fl-card-offer-3").slideToggle();
        $("#fl-card-footer-3").slideToggle();
    });
});
$(document).ready(function(){
    $("#fl-card-btn-4").click(function(){
        $("#fl-card-offer-4").slideToggle();
        $("#fl-card-footer-4").slideToggle();
    });
});
$(document).ready(function(){
    $("#fl-card-btn-5").click(function(){
        $("#fl-card-offer-5").slideToggle();
        $("#fl-card-footer-5").slideToggle();
    });
});
$(document).ready(function(){
    $("#fl-card-btn-6").click(function(){
        $("#fl-card-offer-6").slideToggle();
        $("#fl-card-footer-6").slideToggle();
    });
});

$(document).ready(function(){
    $("#card-btn-1").click(function(){
        $("#card-offer-1").slideToggle();
        $("#card-footer-1").slideToggle();
    });
});
$(document).ready(function(){
    $("#card-btn-2").click(function(){
        $("#card-offer-2").slideToggle();
        $("#card-footer-2").slideToggle();
    });
});
$(document).ready(function(){
    $("#card-btn-3").click(function(){
        $("#card-offer-3").slideToggle();
        $("#card-footer-3").slideToggle();
    });
});
$(document).ready(function(){
    $("#card-btn-4").click(function(){
        $("#card-offer-4").slideToggle();
        $("#card-footer-4").slideToggle();
    });
});
$(document).ready(function(){
    $("#card-btn-5").click(function(){
        $("#card-offer-5").slideToggle();
        $("#card-footer-5").slideToggle();
    });
});
$(document).ready(function(){
    $("#card-btn-6").click(function(){
        $("#card-offer-6").slideToggle();
        $("#card-footer-6").slideToggle();
    });
});

$(document).ready(function(){
    $("#btn-range-01").on("click",function(){
        $("#collapse_01").slideToggle();
    });
    $("#btn-range-02").on("click",function(){
        $("#collapse_02").slideToggle();
    });
    $("#btn-range-03").on("click",function(){
        $("#collapse_03").slideToggle();
    });
    $("#btn-range-04").on("click",function(){
        $("#collapse_04").slideToggle();
    });
    $("#btn-range-05").on("click",function(){
        $("#collapse_05").slideToggle();
    });
    $("#btn-range-06").on("click",function(){
        $("#collapse_06").slideToggle();
    });
});

$(document).ready(function(){
    $('.btn-submit').on("click",function(){
        $('#edit-search').toggle();
    }); 
});

$(document).ready(function(){
    $('.btnFilter').on("click",function(){
        $('#filter').toggle();
    }); 
});

$(document).ready(function(){
    $('.btn-reset').on("click",function(){
        $('#flight-container > .fl-flex-container').css('display', 'block');
    });
    $('.fl-btn-reset > span').on("click",function(){
        $('#flight-container > .fl-flex-container').css('display', 'block');
    });
});

$(document).ready(function(){
    $('.stopage-row .btn-filter--focus').on("click",function(){
        $(this).toggleClass('active');
        //console.log('Find',this);
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
$(document).ready(function(){
    $('.filter-carousel .item.fltr-controls').on("click",function(){
        $(this).toggleClass('active');
        console.log('Find',this);
    });
    $('.fltr-controls').delegate('input[type=checkbox]', 'change', function() {
        var $lis = $('.allFlights > #flight-container > .fl-flex-container');
        console.log('Find List',$lis);
        $checked = $('.fltr-controls input[type=checkbox]:checked');
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
// $(document).ready(function(){
    // $(".trip-price h4").hover(function(){
        // $(".all-price").css("display", "block");
        // $(this).css("background-color", "pink");
    // });
// });
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

// FLIGHT BOOKING PAGE
// var countChecked = function() {
//     var n = $( "input:checked" ).length;
//     $( ".modal" ).css('display','block');
// };
// countChecked();
// $( "input[type=checkbox]" ).on( "click", countChecked );
var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 0; j < selElmnt.length; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
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
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
        this.classList.add("tick-active");
    });
    }
    function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
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
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


$(document).ready(function(){
    $("#conditions").click(function(){
        $('.modal').css('display','block');
    });
    $('.close').click(function(){
        $('.modal').fadeOut();
    });
});

$(document).ready(function(){
    $(".btn-map-trigger").click(function(){
        $('#map .modal').css('display','block');
    });
    $('.close').click(function(){
        $('#map .modal').fadeOut();
    });
});

//HOTEL TOOLTIP
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

$(document).ready(function(){
    $(".btn-bk-forgot").click(function(){
        $('#bk-popup .modal').css('display','block');
    });
    $('.close').click(function(){
        $('#bk-popup .modal').fadeOut();
    });
});

$(document).ready(function(){
    $('#btn-rm-bk-user').click(function(){
        $('#rm-bk-as-guest').toggle();
        $('#rm-bk-user').toggle();
    });
});

$(document).ready(function(){
    $(".prt-btn-open").click(function(){
        $('#prt-registration .modal').css('display','block');
    });
    $('.close').click(function(){
        $('#prt-registration .modal').fadeOut();
    });

    $("#btn-reg2").click(function(){
        $('#prt-registration .modal').css('display','block');
    });
    $('.close').click(function(){
        $('#prt-registration .modal').fadeOut();
    });

    $("#btn-forget-pass").click(function(){
        $('#prt-confirm .modal').css('display','block');
    });
    $('.close').click(function(){
        $('#prt-confirm .modal').fadeOut();
    });
});

$(document).ready(function(){
    $(document).on('change', '#iataReg', function(){
        var val = $('option:selected', this).val();
       
        if(val == 2){
            $('#iataCode').prop('disabled', true);
        }else{
            $('#iataCode').prop('disabled', false);
        }
   })
});

$(document).ready(function(){
    $('#d-btn-edit').click(function(){
        $('.d-user-address').toggle();
        $('#d-user-form-i').toggle();
    });
});

$(document).ready(function(){
    $('#d-btn-add').click(function(){
        $('.d-traveller-info').toggle();
        $('#d-user-form-ii').toggle();
    });
});

$(document).ready(function(){
    $('#d-btn-cancel-i').click(function(){
        $('#d-user-form-i').css('display', 'none')
        $('.d-user-address').fadeIn();
        // $('.d-traveller-info').fadeIn();
    });
});

$(document).ready(function(){
    $('#d-btn-cancel-ii').click(function(){
        $('#d-user-form-ii').css('display', 'none')
        // $('.d-user-address').fadeIn();
        $('.d-traveller-info').fadeIn();
    });
});

$(document).ready(function(){
    $(".btn-pr-view").click(function(){
        $('#booking-progress .modal').css('display','block');
        // $('.cancel-booking').fadeIn();
    });
    $('.close').click(function(){
        $('#booking-progress .modal').fadeOut();
    });
});
$(document).ready(function(){
    // $('.btn-close').click(function(){
    //     $('#cancel-booking.collapse').fadeOut();
    // });
});

$(document).ready(function(){
    $(".btn-cancel-form").click(function(){
        $('#htl-cancel-booking .modal').css('display','block');
    });
    $('.close').click(function(){
        $('#htl-cancel-booking .modal').fadeOut();
    });
});

$(document).ready(function(){
    $(".htl-btn-pr-view").click(function(){
        $('#htl-booking-progress .modal').css('display','block');
    });
    $('.close').click(function(){
        $('#htl-booking-progress .modal').fadeOut();
    });

    $(".btn-bk-manage").click(function(){
        // $('.cancel-booking').css('display','block');
        $('.manage-booking').fadeIn();
    });
    $('.btn-close-i').click(function(){
        $('.manage-booking').fadeOut();
    });
});


$(document).ready(function(){
    $(".btn-trv-update").click(function(){
        $('#trv-info-update .modal').css('display','block');
    });
    $('.close').click(function(){
        $('#trv-info-update .modal').fadeOut();
    });
});
// jQuery(document).ready(function($){
//     $('#d-btn-add').on('click',function(){
//         if($(this).attr('data-click-state') == 1) {
//             $(this).attr('data-click-state', 0)
//             $('.d-traveller-info').css('display', 'none');
//             $('.d-user-form').fadeIn();
//         } else {
//             $(this).attr('data-click-state', 1)
//             $('.d-user-form').css('display', 'none');
//             $('.d-user-address').fadeIn();
//         }
//     });
// });

$(document).ready(function(){
    $("#btn-tct-ii").click(function(){
        $('.tct-payment').toggle();
        $('.tct-baggage').toggle();
    });
    $("#btn-tct-iv").click(function(){
        $('.tct-payment').toggle();
        $('.tct-baggage').toggle();
    });

    $("#btn-tct-i").click(function(){
        $('#email-ticket .modal').css('display','block');
    });
    $('.close').click(function(){
        $('#email-ticket .modal').fadeOut();
    });
    $("#btn-tct-ii").click(function(){
        $('#email-ticket .modal').css('display','block');
    });
    $('.close').click(function(){
        $('#email-ticket .modal').fadeOut();
    });
});



$(document).ready(function(){
    // Activate Carousel
    $("#productCarousel").carousel({interval: 2500,pause: false});

    // Click on the button to start sliding 
    $("#productCarousel .carousel-inner .item img").click(function(){
        $("#productCarousel").carousel("cycle");
    });

    // Click on the button to stop sliding 
    $("#productCarousel .carousel-inner .item img").click(function(){
        $("#productCarousel").carousel("pause");
    });
});

$(document).ready(function(){
    $('.htl-trv-forget-pass').click(function(){
        $('.htl-trv-login').css('display','none');
        $('.htl-trv-reset-pass').fadeIn();
    });
    $('.htl-trv-go-back').click(function(){
        $('.htl-trv-reset-pass').css('display','none');
        $('.htl-trv-login').fadeIn();
    });
});

$(document).ready(function () {
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

// $(document).ready(function(){
//     $(document).on('click', '.typeahead__group, .typeahead__item', function(){
//         if($(".fl-from-in").is(":focus")){
//             $('.fl-to-in').focus();
//         } else if($(".fl-to-in").is(":focus")){
//             $('.departure').focus();
//         }
//     });
//     $(document).on('change', '.departure', function(){ 
//         if($(this).val() != ''){
//             $('.to').focus();  
//         } 
        // else if($('.to').on('change', '.to', function(event){
        //     event.preventDefault();
        //     $(this).val() = 'null';
        //     $('.to').focus();
        // } 
    // });
    // $(document).on('change', '.return', function(event){ 
    //     event.preventDefault();
    //     console.log();
    //     if($(this).val() = 'null'){
    //         console.log();
    //         $('.to').focus();  
    //     }
    // });
//     $(document).on('change', '.return', function(){ 
//         if($(this).val() != ''){
//            $('.trip-cat>.dropdown-toggle').click();  
//         }
//     });
// });



$(document).ready(function(){
    $("#conf-password").keyup(function(){
        if ($("#new-password").val() != $("#conf-password").val()) {
            $("#error-txt").html("Password do not match!").css("color","#ff132a");
            console.log('Password not match');
            $("#bnt-submit-update").click(function(e){
                e.preventDefault();
                console.log('Dont submit Data');
            });
        }else{
            $("#bnt-submit-update").unbind();
            $("#error-txt").html("Password matched").css("color","green");
        }
    });
});

$(document).ready(function(){
    $('#add__traveller').click(function(){
        $('.d-traveller-info').css('display', 'none');
        $('.form__travellerinfo').fadeIn();
    });
    $('.btncancel__form').click(function(e){
        e.preventDefault();
        $('.form__travellerinfo').css('display', 'none');
        $('.d-traveller-info').fadeIn();
    });
});

$(document).ready(function(){
    var input = document.querySelector("#phone-i"),
    errorMsg = document.querySelector("#error-msg-i"),
    validMsg = document.querySelector("#valid-msg-i");

    // here, the index maps to the error code returned from getValidationError - see readme
    var errorMap = [ "Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

    // initialise plugin
    var iti;
    if(iti) {
        iti = window.intlTelInput(input, {
            utilsScript: "js/utils.js?1551697588835"
        });

        var reset = function() {
        input.classList.remove("error");
        errorMsg.innerHTML = "";
        errorMsg.classList.add("hide");
        validMsg.classList.add("hide");
        };

        // on blur: validate
        input.addEventListener('blur', function() {
        reset();
        if (input.value.trim()) {
            if (iti.isValidNumber()) {
            validMsg.classList.remove("hide");
            } else {
            input.classList.add("error");
            var errorCode = iti.getValidationError();
            errorMsg.innerHTML = errorMap[errorCode];
            errorMsg.classList.remove("hide");
            }
        }
        });

        // on keyup / change flag: reset
        input.addEventListener('change', reset);
        input.addEventListener('keyup', reset);
    };
});