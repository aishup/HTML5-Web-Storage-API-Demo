// ----------- Session Storage -------------
// Login Window is loaded
// For the first time, UserName and Password are prompted
   // After entering them, submit button is clicked 
      //1. Values are cleared from display fields
      //2. Values are stored in Storage
      //3. Prompted to close and open the window again
// For the opening the window again, 
       //1. Window is prepopulated with the values of the form fields
       //2. Button to clear the storage is provided for the user
// ----------- Local Storage ------------
// Same scenario is executed and confirm that it does not store the values.Refer app.js



window.onload = function() {
if (typeof(Storage) != 'undefined') {
	if (sessionStorage.getItem('userName') ===  null )
	{	
        alert("Enter the Username and password . Click the Submit Button to Save it ");
	}
	else

	    document.getElementById("userName").value = sessionStorage.getItem('userName');
    	document.getElementById("password").value = sessionStorage.getItem('password');
}
else {
		document.write('storage is not present');
}

};

document.getElementById("formSubmit").onclick = function() {
 
        var userNameValue = document.getElementById("userName").value 
        var passwordValue = document.getElementById("password").value
        sessionStorage.setItem('password',passwordValue);
        sessionStorage.setItem('userName',userNameValue);
        alert("The UserName and Password is successfully stored in sessionStorage.Please close the window, open the link again and check it");
}
