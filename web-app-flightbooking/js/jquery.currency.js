/*
 *  FlagStrap - v1.0
 *  A lightwieght jQuery plugin for creating Bootstrap 3 compatible country select boxes with flags.
 *  http://www.blazeworx.com/flagstrap
 *
 *  Made by Alex Carter
 *  Under MIT License
 */
(function ($) {

    var defaults = {
        buttonSize: "btn-md",
        buttonType: "btn-default",
        labelMargin: "10px",
        scrollable: true,
        scrollableHeight: "250px",
        placeholder: {
            value: '',
            text: 'Please select country'
        }
    };

    var countries = {
        "AF": "AFN",
        "AL": "ALL",
        "DZ": "DZD",
        "AS": "USD",
        "AD": "EUR",
        "AO": "AOA",
        "AI": "XCD",
        "AG": "XCD",
        "AR": "ARS",
        "AM": "AMD",
        "AW": "AWG",
        "AU": "AUD",
        "AT": "EUR",
        "AZ": "AZN",
        "BS": "BSD",
        "BH": "BHD",
        "BD": "BDT",
        "BB": "BBD",
        "BY": "BYN",
        "BE": "EUR",
        "BZ": "BZD",
        "BJ": "XOF",
        "BM": "BMD",
        "BT": "BTN",
        "BO": "BOB",
        "BA": "BAM",
        "BW": "BWP",
        "BV": "NOK",
        "BR": "BRL",
        "IO": "USD",
        "BN": "BND",
        "BG": "BGN",
        "BF": "XOF",
        "BI": "BIF",
        "KH": "KHR",
        "CM": "XAF",
        "CA": "CAD",
        "CV": "CVE",
        "KY": "KYD",
        "CF": "XAF",
        "TD": "XAF",
        "CL": "CLP",
        "CN": "CNY",
        "CO": "COP",
        "KM": "COP",
        "CG": "CDF",
        "CD": "CDF",
        "CK": "CKD",
        // "CR": "CRC",
        // "CI": "C" + "&ocirc;" + "te d'Ivoire",
        "HR": "HRK",
        "CU": "CUP",
        // "CW": "Cura" + "&ccedil;" + "ao",
        "CY": "EUR",
        "CZ": "CZK",
        "DK": "DKK",
        "DJ": "DJF",
        "DM": "XCD",
        "DO": "DOP",
        "EC": "USD",
        "EG": "EGP",
        "SV": "USD",
        "GQ": "XAF",
        "ER": "ERN",
        "EE": "EUR",
        "ET": "ETB",
        "FK": "FKP",
        "FO": "DKK",
        "FJ": "FJD",
        "FI": "EUR",
        "FR": "EUR",
        "GF": "EUR",
        "PF": "CFP",
        "TF": "EUR",
        "GA": "XAF",
        "GM": "GMD",
        "GE": "GEL",
        "DE": "EUR",
        "GH": "GHS",
        "GI": "GIP",
        "GR": "EUR",
        "GL": "DKK",
        "GD": "XCD",
        "GP": "EUR",
        "GU": "Guam",
        "GT": "GTQ",
        "GG": "GGP",
        "GN": "GNF",
        "GW": "XOF",
        "GY": "GYD",
        "HT": "HTG",
        "HM": "AUD",
        "VA": "EUR",
        "HN": "HNL",
        "HK": "HKD",
        "HU": "HUF",
        "IS": "ISK",
        "IN": "INR",
        "ID": "IDR",
        "IR": "IRR",
        "IQ": "IQD",
        "IE": "EUR",
        "IM": "IMP",
        "IL": "ILS",
        "IT": "EUR",
        "JM": "JMD",
        "JP": "JPY",
        "JE": "JEP",
        "JO": "JOD",
        "KZ": "KZT",
        "KE": "KES",
        "KI": "AUD",
        "KP": "KPW",
        "KR": "KRW",
        "KW": "KWD",
        "KG": "KGS",
        "LA": "LAK",
        "LV": "EUR",
        "LB": "LBP",
        "LS": "LSL",
        "LR": "LRD",
        "LY": "LYD",
        "LI": "CHF",
        "LT": "EUR",
        "LU": "EUR",
        "MO": "MOP",
        "MK": "MKD",
        "MG": "MGA",
        "MW": "MWK",
        "MY": "MYR",
        "MV": "MVR",
        "ML": "XOF",
        "MT": "EUR",
        "MH": "USD",
        "MQ": "EUR",
        "MR": "MRO",
        "MU": "MUR",
        "YT": "EUR",
        "MX": "MXN",
        "FM": "USD",
        "MD": "MDL",
        "MC": "EUR",
        "MN": "MNT",
        "ME": "EUR",
        "MS": "XCD",
        "MA": "MAD",
        "MZ": "MZN",
        "MM": "MMK",
        "NA": "NAD",
        "NR": "AUD",
        "NP": "NPR",
        "NL": "EUR",
        "NC": "CFP",
        "NZ": "NZD",
        "NI": "NIO",
        "NE": "XOF",
        "NG": "NGN",
        "NU": "NZD",
        "NF": "AUD",
        "MP": "USD",
        "NO": "NOK",
        "OM": "OMR",
        "PK": "PKR",
        "PW": "USD",
        "PS": "‎EGP",
        "PA": "PAB",
        "PG": "PGK",
        "PY": "PYG",
        "PE": "PEN",
        "PH": "PHP",
        "PN": "NZD",
        "PL": "PLN",
        "PT": "EUR",
        "PR": "USD",
        "QA": "QAR",
        // "RE": "R" + "&eacute;" + "union",
        "RO": "RON",
        "RU": "RUB",
        "RW": "RWF",
        "SH": "SHP",
        "KN": "XCD",
        "LC": "XCD",
        "MF": "EUR",
        "PM": "EUR",
        "VC": "XCD",
        "WS": "WST",
        "SM": "EUR",
        "ST": "STD",
        "SA": "SAR",
        "SN": "XOF",
        "RS": "RSD",
        "SC": "SCR",
        "SL": "SLL",
        "SG": "SGD",
        "SX": "ANG",
        "SK": "EUR",
        "SI": "EUR",
        "SB": "SBD",
        "SO": "SOS",
        "ZA": "ZAR",
        "GS": "FKP",
        "SS": "SSP",
        "ES": "EUR",
        "LK": "LKR",
        "SD": "SDG",
        "SR": "SRD",
        "SZ": "SZL",
        "SE": "SEK",
        "CH": "CHF",
        "SY": "SYP",
        "TW": "TWD",
        "TJ": "TJS",
        "TZ": "TZS",
        "TH": "THB",
        "TL": "USD",
        "TG": "XOF",
        "TK": "NZD",
        "TO": "TOP",
        "TT": "TTD",
        "TN": "TND",
        "TR": "TRY",
        "TM": "TMT",
        "TC": "USD",
        "TV": "AUD",
        "UG": "UGX",
        "UA": "UAH",
        "AE": "AED",
        "GB": "GBP",
        "US": "USD",
        "UM": "USD",
        "UY": "UYU",
        "UZ": "UZS",
        "VU": "VUV",
        "VE": "VES",
        "VN": "VND",
        "VG": "USD",
        "VI": "USD",
        "WF": "CFP",
        "EH": "MAD",
        "YE": "YER",
        "ZM": "ZMW",
        "ZW": "USD"
    };

    $.currency = function (element, options, i) { // currency --> flagStrap

        var plugin = this;

        var uniqueId = generateId(8);

        plugin.countries = {};
        plugin.selected = {value: null, text: null};
        plugin.settings = {inputName: 'country-' + uniqueId};

        var $container = $(element);
        var htmlSelectId = 'flagstrap-' + uniqueId; 
        var htmlSelect = '#' + htmlSelectId;

        plugin.init = function () {

            // Merge in global settings then merge in individual settings via data attributes
            plugin.countries = countries;

            // Initialize Settings, priority: defaults, init options, data attributes
            plugin.countries = countries;
            plugin.settings = $.extend({}, defaults, options, $container.data());

            if (undefined !== plugin.settings.countries) {
                plugin.countries = plugin.settings.countries;
            }

            if (undefined !== plugin.settings.inputId) {
                htmlSelectId = plugin.settings.inputId;
                htmlSelect = '#' + htmlSelectId;
            }

            // Build HTML Select, Construct the drop down button, Assemble the drop down list items element and insert
            $container
                .addClass('flagstrap')
                .append(buildHtmlSelect)
                .append(buildDropDownButton)
                .append(buildDropDownButtonItemList);

            // Check to see if the onSelect callback method is assigned / callable, bind the change event for broadcast
            if (plugin.settings.onSelect !== undefined && plugin.settings.onSelect instanceof Function) {
                $(htmlSelect).change(function (event) {
                    var element = this;
                    options.onSelect($(element).val(), element);
                });
            }

            // Hide the actual HTML select
            $(htmlSelect).hide();

        };

        var buildHtmlSelect = function () {
            var htmlSelectElement = $('<select/>').attr('id', htmlSelectId).attr('name', plugin.settings.inputName);

            $.each(plugin.countries, function (code, country) {
                var optionAttributes = {value: code};
                if (plugin.settings.selectedCountry !== undefined) {
                    if (plugin.settings.selectedCountry === code) {
                        optionAttributes = {value: code, selected: "selected"};
                        plugin.selected = {value: code, text: country}
                    }
                }
                htmlSelectElement.append($('<option>', optionAttributes).text(country));
            });

            if (plugin.settings.placeholder !== false) {
                htmlSelectElement.prepend($('<option>', {
                    value: plugin.settings.placeholder.value,
                    text: plugin.settings.placeholder.text
                }));
            }

            return htmlSelectElement;
        };

        var buildDropDownButton = function () {

            var selectedText = $(htmlSelect).find('option').first().text();
            var selectedValue = $(htmlSelect).find('option').first().val();

            selectedText = plugin.selected.text || selectedText;
            selectedValue = plugin.selected.value || selectedValue;

            if (selectedValue !== plugin.settings.placeholder.value) {
                var $selectedLabel = $('<i/>').addClass('flagstrap-icon flagstrap-' + selectedValue.toLowerCase()).css('margin-right', plugin.settings.labelMargin);
            } else {
                var $selectedLabel = $('<i/>').addClass('flagstrap-icon flagstrap-placeholder');
            }

            var buttonLabel = $('<span/>')
                .addClass('flagstrap-selected-' + uniqueId)
                .html($selectedLabel)
                .append(selectedText);

            var button = $('<button/>')
                .attr('type', 'button')
                .attr('data-toggle', 'dropdown')
                .attr('id', 'flagstrap-drop-down-' + uniqueId)
                .addClass('btn ' + plugin.settings.buttonType + ' ' + plugin.settings.buttonSize + ' dropdown-toggle')
                .html(buttonLabel);

            $('<span/>')
                .addClass('caret')
                .css('margin-left', plugin.settings.labelMargin)
                .insertAfter(buttonLabel);

            return button;

        };

        var buildDropDownButtonItemList = function () {
            var items = $('<ul/>')
                .attr('id', 'flagstrap-drop-down-' + uniqueId + '-list')
                .attr('aria-labelled-by', 'flagstrap-drop-down-' + uniqueId)
                .addClass('dropdown-menu');

            if (plugin.settings.scrollable) {
                items.css('height', 'auto')
                    .css('max-height', plugin.settings.scrollableHeight)
                    .css('overflow-x', 'hidden');
            }

            // Populate the bootstrap dropdown item list
            $(htmlSelect).find('option').each(function () {

                // Get original select option values and labels
                var text = $(this).text();
                var value = $(this).val();

                // Build the flag icon
                if (value !== plugin.settings.placeholder.value) {
                    var flagIcon = $('<i/>').addClass('flagstrap-icon flagstrap-' + value.toLowerCase()).css('margin-right', plugin.settings.labelMargin);
                } else {
                    var flagIcon = null;
                }


                // Build a clickable drop down option item, insert the flag and label, attach click event
                var flagStrapItem = $('<a/>')
                    .attr('data-val', $(this).val())
                    .html(flagIcon)
                    .append(text)
                    .on('click', function (e) {
                        $(htmlSelect).val($(this).data('val'));
                        $(htmlSelect).trigger('change');
                        $('.flagstrap-selected-' + uniqueId).html($(this).html());
                        e.preventDefault();
                    });

                // Make it a list item
                var listItem = $('<li/>').prepend(flagStrapItem);

                // Append it to the drop down item list
                items.append(listItem);

            });

            return items;
        };

        function generateId(length) {
            var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

            if (!length) {
                length = Math.floor(Math.random() * chars.length);
            }

            var str = '';
            for (var i = 0; i < length; i++) {
                str += chars[Math.floor(Math.random() * chars.length)];
            }
            return str;
        }

        plugin.init();

    };

    $.fn.currency = function (options) {

        return this.each(function (i) {
            if ($(this).data('currency') === undefined) {
                $(this).data('currency', new $.currency(this, options, i));
            }
        });

    }

})(jQuery);
