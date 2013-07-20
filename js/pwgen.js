/* =====================================================================
Password Generator by tamerobots.com. 
===================================================================== */
jQuery(function($){    


/* =====================================================================
Password Generation Function
===================================================================== */

	function GeneratePassword(){
		passwordDisplay.text("hix");
	}

	var passwordDisplay = $("h1.password-display"); //This is where the password is output to the user
	var btnGenerate = $("a.btn-generate");
    btnGenerate.on('click', GeneratePassword);    


}) /* EOF */