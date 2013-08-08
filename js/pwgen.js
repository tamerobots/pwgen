/* =====================================================================
Password Generator by tamerobots.com. 
===================================================================== */

//Javascript to be able to select text easy - note this is not JQuery.
function SelectText(element) {
    var doc = document
        , text = doc.getElementById(element)
        , range, selection
    ;    
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

jQuery(function($){    

/*-----------------------------------------------------------------
*  A character replace function. used in 'injectCharacters'
* ----------------------------------------------------------------*/
function setCharAt(str,index,char) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + char + str.substr(index+1); //substr with only one parameter returns the entire string after that index, so this is fine.
}

/* =====================================================================
This injects characters according to the options selected
===================================================================== */
function injectCharacters(password, characters){
	var randomSeed = (Math.floor(Math.random() * 3)) + 2; //Randomise the number of characters that will be overwritten. Minimum 2, maximum 4. I told you this would be random..
	var numberCharsRequired = Math.floor(password.length) / randomSeed //Make it so a third of the characters are overwritten
	var x=0;	
	while ( x < numberCharsRequired){
		var chosenPosition = (Math.floor(Math.random() * password.length)); // decide where in the password to inject the new char
		var replacementChar = characters.charAt(Math.floor(Math.random() * characters.length)); //pick a random character to replace
		password = setCharAt(password, chosenPosition, replacementChar);
		x++;
	}

	return password;
}


/* =====================================================================
Password Generation Function
===================================================================== */

	function GeneratePassword(){
		var newPassword = "";
		var chosenLength = 10; //Default to 10 chars		
		var possibleCharacters = "abcdefghijkmnpqrstuvwxyz"; // leave 'o and l out as they look the same as 1 and 0				
		//find the chosen length if they've entered one.
		if ($("#length").val().length != 0){
			var typedLength = parseInt($("#length").val());			
			if (Math.floor(typedLength) == typedLength){
				//it's an integer, so accept it.
				chosenLength = typedLength;
			}
		}

		//Generate the starter password, then replace individual characters if they decide to later.		
		for( var i=0; i < chosenLength; i++ ){
        	newPassword += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    	}
    	//Add some numbers
    	var possibleNumbers = "123456789"; //Don't include 0, it looks the same as o or O
    	newPassword = injectCharacters(newPassword, possibleNumbers);

		// var randomnumber=Math.floor(Math.random()*11);
		//Check options boxes		
		if ($("#uppercase").prop('checked')){
			possibleCharacters = "ABCDEFGHIJLKMNPQRSTUVWXYZ";
			newPassword = injectCharacters(newPassword, possibleCharacters);
		}

		if ($("#symbols").prop('checked')){
			//possibleCharacters = ["!$%^&*()-_=+[{]};:@#~|,<.>/?"];
			possibleCharacters = "!$%^&*()-_=+[{]};:@#~|,<.>?";
			newPassword = injectCharacters(newPassword, possibleCharacters);	
		}





		passwordDisplay.text(newPassword); //display the password to the user!
        passwordDisplay.css("color", "#666666");
        //Change the data-clipboard-text to the new password so ZeroClipboard can pick it up.
        passwordDisplay.attr('data-clipboard-text', newPassword); 
        
        clickToCopyP.text("Click to copy to clipboard.");
        clickToCopyP.removeClass("copied");        
	}	

/*-----------------------------------------------------------------
*  Show or Hide the 'Options' Panel
* ----------------------------------------------------------------*/
	function showHideOptions(){
		var optionsDiv = $("div.options");
		var optionsLink = $("a.options-arrow");
		if ($("div.options").is(":visible")){
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
 $('h1.password-display').click(function() {
        SelectText('password-display');
    });

/*-----------------------------------------------------------------
*  Configure 'Copy to Clipboard' functionality. 
* Uses zeroclipboard: http://zeroclipboard.github.io/ZeroClipboard/
* ----------------------------------------------------------------*/

var clip = new ZeroClipboard( document.getElementById("password-display"), {
  moviePath:"ZeroClipboard/ZeroClipboard.swf",
  allowScriptAccess: "sameDomain"
} );

clip.on( 'complete', function(client, args) {
        passwordDisplay.animate({color: '#5BB75B'}, 100);
        passwordDisplay.animate({color: '#93B2C2'}, 100);
        clickToCopyP.text("Copied.");
        clickToCopyP.addClass("copied");
    }  
);

/* =====================================================================
Hooking up function to frontend
===================================================================== */

	var passwordDisplay = $("h1.password-display"); //This is where the password is output to the user
	var btnGenerate = $("a.btn-generate");
	var btnShowHideOptions = $("p.options-link a");
    var clickToCopyP = $("p.click-to-copy");
	GeneratePassword(); //run it by default the first time
    btnGenerate.on('click', GeneratePassword);
    btnShowHideOptions.on('click', showHideOptions);


}) /* EOF */
