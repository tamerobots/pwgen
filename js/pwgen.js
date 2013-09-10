/* =====================================================================
Password Generator by tamerobots.com. 
===================================================================== */
//Javascript to be able to select text easy - note this is not JQuery.
// this is no longer used as the ZeroClipboard is in use, but is kept in case someone does not use flash.

function SelectText(element) {
    var doc = document,
        text = doc.getElementById(element),
        range, selection;
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}



/* JQUERY STARTS HERE AND CONTINUES TO END ---------------------------------------------------------------------------------------------- */

jQuery(function ($) {


    /*-----------------------------------------------------------------
     *  A character replace function. used in 'injectCharacters'
     * ----------------------------------------------------------------*/

    function setCharAt(str, index, char) {
        if (index > str.length - 1) return str;
        return str.substr(0, index) + char + str.substr(index + 1); //substr with only one parameter returns the entire string after that index, so this is fine.
    }

    /*-----------------------------------------------------------------
    *  This injects characters according to the options selected
    * ----------------------------------------------------------------*/
    function injectCharacters(password, characters) {
        var randomSeed = (Math.floor(Math.random() * 3)) + 2; //Randomise the number of characters that will be overwritten. Minimum 2, maximum 4. I told you this would be random..
        var numberCharsRequired = Math.floor(password.length) / randomSeed //Make it so a third of the characters are overwritten
        var x = 0;
        while (x < numberCharsRequired) {
            var chosenPosition = (Math.floor(Math.random() * password.length)); // decide where in the password to inject the new char
            var replacementChar = characters.charAt(Math.floor(Math.random() * characters.length)); //pick a random character to replace
            password = setCharAt(password, chosenPosition, replacementChar);
            x++;
        }

        return password;
    }

    /*-----------------------------------------------------------------
     *  This checks for a $_GET parameter in the URL.
     * ----------------------------------------------------------------*/

    function getURLParameter(name) {
        return decodeURI(
            (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1]
        );
    }

    function generateURLtoCopy(chosenLength, uppercase, symbols) {
        var url = (window.location.href.split('?')[0]);

        url = url + "?chosenLength=" + chosenLength; //chosenLength will always be chosen or will default so safe to use.

        if (uppercase) {
            url = url + "&uppercase=1";
        }
        if (symbols) {
            url = url + "&symbols=1";
        }

        return url;
    }


    /*-----------------------------------------------------------------
    *  Password Generation Function
    * ----------------------------------------------------------------*/

    function GeneratePassword() {
        var newPassword = "";
        var chosenLength = 12; //Default to 12 chars                
        var possibleCharacters = "abcdefghijkmnpqrstuvwxyz"; // leave 'o and l out as they look the same as 1 and 0             

        //Get potential parameters from URL, if this is the first time this is running----------------
        if (useGETParameters) {
            //chosen Length first
            var chosenLengthGET = getURLParameter("chosenLength");
            if (chosenLengthGET) {
                chosenLengthGET = parseInt(chosenLengthGET);
                if (Math.floor(chosenLengthGET) == chosenLengthGET) {
                    //it's an integer, so accept it.
                    chosenLength = chosenLengthGET;
                    $("#length").val(chosenLengthGET); //set the length from GET parameter
                }
            }

            var uppercaseGET = getURLParameter("uppercase");
            if (uppercaseGET) {
                uppercaseGET = parseInt(uppercaseGET);
                if (Math.floor(uppercaseGET) == uppercaseGET) {
                    if (uppercaseGET == 1) {
                        $("#uppercase").attr('checked', 'checked');
                    }
                }
            }

            var symbolsGET = getURLParameter("symbols");
            if (symbolsGET) {
                symbolsGET = parseInt(symbolsGET);
                if (Math.floor(symbolsGET) == symbolsGET) {
                    if (symbolsGET == 1) {
                        $("#symbols").attr('checked', 'checked');
                    }
                }
            }

        } //End testing of GET params --------------------------------------------------

        //find the chosen length if they've entered one.
        if ($("#length").val().length != 0) {
            var selectedLength = parseInt($("#length").val());
            if (Math.floor(selectedLength) == selectedLength) {
                //it's an integer, so accept it.
                chosenLength = selectedLength;
            }
        }

        //Generate the starter password, then replace individual characters if they decide to later.        
        for (var i = 0; i < chosenLength; i++) {
            newPassword += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
        }
        //Add some numbers
        var possibleNumbers = "123456789"; //Don't include 0, it looks the same as o or O
        newPassword = injectCharacters(newPassword, possibleNumbers);

        //Check options boxes       
        if ($("#uppercase").prop('checked')) {
            possibleCharacters = "ABCDEFGHIJLKMNPQRSTUVWXYZ";
            newPassword = injectCharacters(newPassword, possibleCharacters);
        }

        if ($("#symbols").prop('checked')) {
            possibleCharacters = "!$%^&*()-_=+[{]};:@#~|,<.>?";
            newPassword = injectCharacters(newPassword, possibleCharacters);
        }

        //Could have extra password generation rules here. 

        passwordDisplay.text(newPassword); //display the password to the user!
        passwordDisplay.css("color", "#666666");
        //Change the data-clipboard-text to the new password so ZeroClipboard can pick it up.
        passwordDisplay.attr('data-clipboard-text', newPassword);

        clickToCopyP.text("Click the password to copy to clipboard (Requires Flash).");
        clickToCopyP.removeClass("copied");
        //Set this here, so that after the first time generatepassword is run, it never tries to find get params again.
        useGETParameters = false;
        var url = generateURLtoCopy(chosenLength, $("#uppercase").prop('checked'), $("#symbols").prop('checked'));
        $("a.password-url-link").attr("href", url);
        $("a.password-url-link").text(url);

    }

    /*-----------------------------------------------------------------
     *  Show or Hide the 'Options' Panel
     * ----------------------------------------------------------------*/

    function showHideOptions() {
        var optionsDiv = $("div.options");
        var optionsLink = $("a.options-arrow");
        if ($("div.options").is(":visible")) {
            optionsDiv.slideUp();
            optionsLink.removeClass("options-arrow-up");
            optionsLink.addClass("options-arrow-down");

        } else {
            optionsDiv.slideDown();
            optionsLink.removeClass("options-arrow-down");
            optionsLink.addClass("options-arrow-up");
        }
    }

    /*-----------------------------------------------------------------
     *  Make it so when someone clicks on the password, it selects it.
     * ----------------------------------------------------------------*/
    $('.password-display').click(function () {
        SelectText('password-display');
    });

    /*-----------------------------------------------------------------
     *  Configure 'Copy to Clipboard' functionality.
     * Uses zeroclipboard: http://zeroclipboard.github.io/ZeroClipboard/
     * ----------------------------------------------------------------*/

    var clip = new ZeroClipboard(document.getElementById("password-display"), {
        moviePath: "ZeroClipboard/ZeroClipboard.swf",
        allowScriptAccess: "sameDomain"
    });

    clip.on("load", function (client) {
        $('.click-to-copy').show();
    });

    clip.on('complete', function (client, args) {
        passwordDisplay.animate({
            backgroundColor: '#5BB75B',
            color: '#FFFFFF'
        }, 200);
        passwordDisplay.animate({
            backgroundColor: '#FFFFFF',
            color: '#93B2C2'
        }, 400);
        clickToCopyP.text("Copied.");
        clickToCopyP.addClass("copied");
    });

    /*-----------------------------------------------------------------
    * 'About' and 'Password Generator' pane show
    * ----------------------------------------------------------------*/

    $('.about-dialog-link').on('click', function(){
        $('.password-generate-panel').hide();
        $('.about-panel').show();
    });

    $('.home-link').on('click', function(){
        $('.about-panel').hide();
        $('.password-generate-panel').show();
    });

    /*-----------------------------------------------------------------
    *  Hooking up function to frontend
    * ----------------------------------------------------------------*/
    var passwordDisplay = $(".password-display"); //This is where the password is output to the user
    var btnGenerate = $("a.btn-generate");
    var btnShowHideOptions = $("p.options-link a");
    var clickToCopyP = $("p.click-to-copy");
    var optionsInputs = $(".options_input");
    //Only use GET parameters the first time you load page (i.e. first time you run), then the user can override these
    //in 'options' panel.
    var useGETParameters = true;
    GeneratePassword(); //run it by default the first time
    btnGenerate.on('click', GeneratePassword);
    btnShowHideOptions.on('click', showHideOptions);
    //Make it so that every time their mouse leaves an input button, the new URL to copy is changed
    optionsInputs.on('click', function () {

        var url = generateURLtoCopy($("#length").val(), $("#uppercase").prop('checked'), $("#symbols").prop('checked'));
        $("a.password-url-link").attr("href", url);
        $("a.password-url-link").text(url);

    });



}) /* EOF */
