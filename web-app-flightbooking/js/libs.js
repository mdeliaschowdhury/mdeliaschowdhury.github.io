// DYNAMIC SEARCH :: LIBS UI
$( function() {
    $.widget( "custom.combobox", {
        _create: function() {
        this.wrapper = $( "<span>" )
            .addClass( "custom-combobox" )
            .insertAfter( this.element );
 
            this.element.hide();
            this._createAutocomplete();
            this._createShowAllButton();
        },
 
        _createAutocomplete: function() {
            var selected = this.element.children( ":selected" ),
            value = selected.val() ? selected.text() : "";
 
        this.input = $( "<input>" )
            .appendTo( this.wrapper )
            .val( value )
            .attr( "title", "" )
            .addClass( "custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left" )
            .autocomplete({
                delay: 0,
                minLength: 0,
                source: $.proxy( this, "_source" )
            })
            .tooltip({
                classes: {
              "ui-tooltip": "ui-state-highlight"
            }
        });
 
        this._on( this.input, {
            autocompleteselect: function( event, ui ) {
            ui.item.option.selected = true;
            this._trigger( "select", event, {
              item: ui.item.option
            });
          },
 
            autocompletechange: "_removeIfInvalid"
        });
        },
 
        _createShowAllButton: function() {
            var input = this.input,
            wasOpen = false;
 
        $( "<a>" )
            .attr( "tabIndex", -1 )
            .attr( "title", "Show All Items" )
            .tooltip()
            .appendTo( this.wrapper )
            .button({
            icons: {
              primary: "ui-icon-triangle-1-s"
            },
            text: false
            })
            .removeClass( "ui-corner-all" )
            .addClass( "custom-combobox-toggle ui-corner-right" )
            .on( "mousedown", function() {
                wasOpen = input.autocomplete( "widget" ).is( ":visible" );
            })
            .on( "click", function() {
            input.trigger( "focus" );
 
            // Close if already visible
            if ( wasOpen ) {
                return;
            }
 
            // Pass empty string as value to search for, displaying all results
            input.autocomplete( "search", "" );
            });
        },
 
        _source: function( request, response ) {
            var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
            response( this.element.children( "option" ).map(function() {
            var text = $( this ).text();
            if ( this.value && ( !request.term || matcher.test(text) ) )
            return {
                label: text,
                value: text,
                option: this
            };
        }) );
        },
 
        _removeIfInvalid: function( event, ui ) {
 
        // Selected an item, nothing to do
        if ( ui.item ) {
            return;
        }
 
        // Search for a match (case-insensitive)
        var value = this.input.val(),
            valueLowerCase = value.toLowerCase(),
            valid = false;
        this.element.children( "option" ).each(function() {
            if ( $( this ).text().toLowerCase() === valueLowerCase ) {
                this.selected = valid = true;
                return false;
            }
        });
 
        // Found a match, nothing to do
        if ( valid ) {
            return;
        }
 
        // Remove invalid value
        this.input
            .val( "" )
            .attr( "title", value + " didn't match any item" )
            .tooltip( "open" );
            this.element.val( "" );
            this._delay(function() {
            this.input.tooltip( "close" ).attr( "title", "" );
        }, 2500 );
            this.input.autocomplete( "instance" ).term = "";
        },
 
        _destroy: function() {
            this.wrapper.remove();
            this.element.show();
        }
    });
    // ONE WAY
    $( "#oneway-flight-from" ).combobox();
    $( "#toggle" ).on( "click", function() {
        $( "#combobox" ).toggle();
    });
    $( "#oneway-flight-to" ).combobox();
    $( "#toggle" ).on( "click", function() {
        $( "#combobox" ).toggle();
    });
    // ROUND TRIP
    $( "#roundtrip-flight-from" ).combobox();
    $( "#toggle" ).on( "click", function() {
        $( "#combobox" ).toggle();
    });
    $( "#roundtrip-flight-to" ).combobox();
    $( "#toggle" ).on( "click", function() {
        $( "#combobox" ).toggle();
    });
    // MULTI CITY
    $( "#multicity-flight-from" ).combobox();
    $( "#toggle" ).on( "click", function() {
        $( "#combobox" ).toggle();
    });
    $( "#multicity-flight-to" ).combobox();
    $( "#toggle" ).on( "click", function() {
        $( "#combobox" ).toggle();
    });
    // MULTI CITY INCREMENT FORM
    $( "#multicity-flight-increment-from" ).combobox();
    $( "#toggle" ).on( "click", function() {
        $( "#combobox" ).toggle();
    });
    $( "#multicity-flight-increment-to" ).combobox();
    $( "#toggle" ).on( "click", function() {
        $( "#combobox" ).toggle();
    });

    $( "#multicity-flight-increment-from-1" ).combobox();
    $( "#toggle" ).on( "click", function() {
        $( "#combobox" ).toggle();
    });
    $( "#multicity-flight-increment-to-1" ).combobox();
    $( "#toggle" ).on( "click", function() {
        $( "#combobox" ).toggle();
    });

    $( "#multicity-flight-increment-from-2" ).combobox();
    $( "#toggle" ).on( "click", function() {
        $( "#combobox" ).toggle();
    });
    $( "#multicity-flight-increment-to-2" ).combobox();
    $( "#toggle" ).on( "click", function() {
        $( "#combobox" ).toggle();
    });
    // HOTEL SEARCH
    $( "#hotel-search-from" ).combobox();
    $( "#toggle" ).on( "click", function() {
        $( "#combobox" ).toggle();
    });
    $( "#multicity-flight-to" ).combobox();
    $( "#toggle" ).on( "click", function() {
        $( "#combobox" ).toggle();
    });
});

// ONEWAY DEPARTURE DATE
$( function() {
    $( "#departure-date" ).datepicker({
        numberOfMonths: 2,
        // altFormat: "DD, d MM, yy",
        /*changeMonth: true,
        changeYear: true*/
    });
});

// ONEWAY RETURN DATE
$( function() {
    $( "#return-date" ).datepicker({
        numberOfMonths: 2,
        // altFormat: "DD, d MM, yy",
        /*changeMonth: true,
        changeYear: true*/
    });
});

// ROUNDTRIP DEPARTURE DATE
// $( function() {
//     $( "#rtrip-departure-date" ).datepicker({
//         numberOfMonths: 2,
//     });
// });
$( function() {
    $( ".call-calendar" ).datepicker({
        numberOfMonths: 2,
        dateFormat: "D, d M, yy",
        // altFormat: "DD, d MM, yy",
    });
});
// ROUNDTRIP RETURN DATE
// $( function() {
//     $( "#rtrip-return-date" ).datepicker({
//         numberOfMonths: 2,
//     });
// });

// MULTICITY DEPARTURE DATE
$( function() {
    $( "#mcity-departure-date" ).datepicker({
        numberOfMonths: 2,
        dateFormat: "D, d M, yy",
        // altFormat: "DD, d MM, yy",
        /*changeMonth: true,
        changeYear: true*/
    });
});

// MULTICITY RETURN DATE :: INCTREMENT FORM
$( function() {
    $( ".mcity-inc-departure-date" ).datepicker({
        numberOfMonths: 2,
        /*changeMonth: true,
        changeYear: true*/
    });
});

// CHECK IN
$( function() {
    $( "#check-in" ).datepicker({
        numberOfMonths: 1,
        /*changeMonth: true,
        changeYear: true*/
    });
});

// CHECK OUT
$( function() {
    $( "#check-out" ).datepicker({
        numberOfMonths: 1,
        /*changeMonth: true,
        changeYear: true*/
    });
});

/*
HOME PAGE :
-----------------------------------------------------*/
$(document).ready(function(){
    $("#ui-id-2 li").on("click",function(){
        $("#ui-datepicker-calander").css("display","block")
    });
});
  $( function() {
    $( "#datepicker" ).datepicker({
      showOn: "#ui-id-2 li",
      //buttonImage: "images/calendar.gif",
      //buttonImageOnly: true,
      buttonText: "Select date"
    });
  } );

/*Previous date hide*/
$('.from').datepicker({
    numberOfMonths: 2,
    dateFormat: "D, d M, yy",
    // altFormat: "DD, d MM, yy",
    minDate: 0,
    beforeShow: function() {
        $(this).datepicker('option', 'maxDate', $('.to').val());
    }
});
$('.to').datepicker({
    numberOfMonths: 2,
    dateFormat: "D, d M, yy",
    // altFormat: "DD, d MM, yy",
    defaultDate: "+1w",
    beforeShow: function() {
        $(this).datepicker('option', 'minDate', $('.from').val());
        if ($('.from').val() === '') $(this).datepicker('option', 'minDate', 0);                            
    }
});
/*Previous date hide || Dashboard*/
$('.depart-date').datepicker({
    numberOfMonths: 2,
    dateFormat: "D, d M, yy",
    // altFormat: "DD, d MM, yy",
    minDate: 0,
    beforeShow: function() {
        $(this).datepicker('option', 'maxDate', $('.return-date').val());
    }
});
$('.return-date').datepicker({
    numberOfMonths: 2,
    dateFormat: "D, d M, yy",
    // altFormat: "DD, d MM, yy",
    defaultDate: "+1w",
    beforeShow: function() {
        $(this).datepicker('option', 'minDate', $('.depart-date').val());
        if ($('.depart-date').val() === '') $(this).datepicker('option', 'minDate', 0);                            
    }
});
/*
FLIGHT PAGE :
-----------------------------------------------------*/
// PRICE RANGER FILTER
$(function () {
    $('#slider-container').slider({
        range: true,
        min: 5000,
        max: 150000,
        values: [5000, 150000],
        create: function() {
            $("#amount").val("BDT5000 - BDT150000");
        },
        slide: function (event, ui) {
            $("#amount").val("BDT" + ui.values[0] + " - BDT" + ui.values[1]);
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
/*
HOTEL PAGE :
-----------------------------------------------------*/
// PRICE RANGER FILTER
// $(function () {
//     $('#slider-container').slider({
//         range: true,
//         min: 5000,
//         max: 150000,
//         values: [5000, 150000],
//         create: function() {
//             $("#amount").val("BDT5000 - BDT150000");
//         },
//         slide: function (event, ui) {
//             $("#amount").val("BDT" + ui.values[0] + " - BDT" + ui.values[1]);
//             var mi = ui.values[0];
//             var mx = ui.values[1];
//             filterSystem(mi, mx);
//         }
//     })
// });

// function filterSystem(minPrice, maxPrice) {
//     $("#hotel-container div.fl-flex-container").hide().filter(function () {
//         var price = parseInt($(this).data("price"),10);
//         return price >= minPrice && price <= maxPrice;
//     }).show();
// }
/*
FL-BOOKING PAGE :
-----------------------------------------------------*/
$( function() {
    $( "#tr-dob-i" ).datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "1900:2100",
        dateFormat: "dd-mm-yy",
        gotoCurrent: true,
        monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
        showCurrentAtPos: 0,
        selectOtherMonths: false,
        numberOfMonths: 1
    });
});

$( function() {
    $( "#tr-dob-ii" ).datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "1900:2100",
        dateFormat: "dd-mm-yy",
        gotoCurrent: true,
        monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
        showCurrentAtPos: 0,
        selectOtherMonths: false,
        numberOfMonths: 1
    });
});

$( function() {
    $( "#tr-dob-iii" ).datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "1900:2100",
        dateFormat: "dd-mm-yy",
        gotoCurrent: true,
        monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
        showCurrentAtPos: 0,
        selectOtherMonths: false,
        numberOfMonths: 1
    });
});

$( function() {
    $( "#tr-dob-iv" ).datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "1900:2100",
        dateFormat: "dd-mm-yy",
        gotoCurrent: true,
        monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
        showCurrentAtPos: 0,
        selectOtherMonths: false,
        numberOfMonths: 1
    });
});

$( function() {
    $( "#tr-info-dob" ).datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "1900:2100",
        dateFormat: "dd-mm-yy",
        gotoCurrent: true,
        monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
        showCurrentAtPos: 0,
        selectOtherMonths: false,
        numberOfMonths: 1
    });
});
/*
D-TRAVELLERINFO PAGE :
-----------------------------------------------------*/
$( function() {
    $( ".pass-expiry-i" ).datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "1900:2100",
        dateFormat: "dd-mm-yy",
        gotoCurrent: true,
        monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
        showCurrentAtPos: 0,
        selectOtherMonths: false,
        numberOfMonths: 1
    });
});
// $( function() {
//     $( ".dob-i" ).datepicker({
//         changeMonth: true,
//         changeYear: true,
//         yearRange: "1900:2100",
//         dateFormat: "dd-mm-yy",
//         gotoCurrent: true,
//         monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
//         showCurrentAtPos: 0,
//         selectOtherMonths: false,
//         numberOfMonths: 1
//     });
// });
// $( function() {
//     $( ".pass-expiry-ii" ).datepicker({
//         changeMonth: true,
//         changeYear: true,
//         yearRange: "1900:2100",
//         dateFormat: "dd-mm-yy",
//         gotoCurrent: true,
//         monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
//         showCurrentAtPos: 0,
//         selectOtherMonths: false,
//         numberOfMonths: 1
//     });
// });

$( function() {
    $( ".user-callendar" ).datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "1900:2100",
        dateFormat: "dd-mm-yy",
        gotoCurrent: true,
        monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
        showCurrentAtPos: 0,
        selectOtherMonths: false,
        numberOfMonths: 1
    });
});