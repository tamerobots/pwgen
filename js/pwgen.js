/* =====================================================================
Password Generator by tamerobots.com. 
===================================================================== */
jQuery(function($){    


/* =====================================================================
Password Generation Function
===================================================================== */

	function GeneratePassword(){
		var newPassword = "";
		var chosenLength = 10; //Default to 10
		var possibleLetters = "abcdefghijkmnpqrstuvwxyz"; // leave 'o and l out as they look the same as 1 and 0
		var possibleNumbers = "123456789"; //Don't include 0, it looks the same as o or O
		// var randomnumber=Math.floor(Math.random()*11);
		var possibleCharacters = possibleLetters + possibleNumbers; //Default to just using letters
		for( var i=0; i < chosenLength; i++ )
        newPassword += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));

		passwordDisplay.text(newPassword);
	}	

	var passwordDisplay = $("h1.password-display"); //This is where the password is output to the user
	var btnGenerate = $("a.btn-generate");
	GeneratePassword(); //run it by default the first time
    btnGenerate.on('click', GeneratePassword);


}) /* EOF */