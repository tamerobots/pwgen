/* =====================================================================
Password Generator by tamerobots.com. 
===================================================================== */
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
	var numberCharsRequired = Math.floor(password.length) / 3 //Make it so a third of the characters are overwritten
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
		var possibleLetters = "abcdefghijkmnpqrstuvwxyz"; // leave 'o and l out as they look the same as 1 and 0
		var possibleNumbers = "123456789"; //Don't include 0, it looks the same as o or O
		var possibleCharacters = possibleLetters + possibleNumbers; //Default to just using letters and numbers
		//Generate the starter password, then replace individual characters if they decide to later.
		for( var i=0; i < chosenLength; i++ ){
        	newPassword += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    	}
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
	}	

/* =====================================================================
Hooking up function to frontend
===================================================================== */


	var passwordDisplay = $("h1.password-display"); //This is where the password is output to the user
	var btnGenerate = $("a.btn-generate");
	GeneratePassword(); //run it by default the first time
    btnGenerate.on('click', GeneratePassword);


}) /* EOF */
