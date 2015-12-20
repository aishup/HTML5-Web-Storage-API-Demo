// ----------- Local Storage ------------
// Login Window is loaded
// For the first time, UserName and Password are prompted
   // After entering them, submit button is clicked 
      //1. Values are cleared from display fields
      //2. Values are stored in Storage
      //3. Prompted to close and open the window again
// For the opening the window again, 
       //1. Window is prepopulated with the values of the form fields
       //2. Button to clear the storage is provided for the user
// ----------- Session Storage -------------
// Same scenario is executed and confirm that it does not store the values.Refer app1.js



window.onload = function() {
if (typeof(Storage) != 'undefined') {
	if (localStorage.getItem('userName') ===  null )
	{	
        alert("Enter the Username and password . Click the Submit Button to Save it ");
	}
	else

	    document.getElementById("userName").value = localStorage.getItem('userName');
    	document.getElementById("password").value = localStorage.getItem('password');
}
else {
		document.write('storage is not present');
}

};

document.getElementById("formSubmit").onclick = function() {
 
        var userNameValue = document.getElementById("userName").value;
        var passwordValue = document.getElementById("password").value;
        localStorage.setItem('password',passwordValue);
        localStorage.setItem('userName',userNameValue);
        alert("The UserName and Password is successfully stored in localStorage.Please close the window, open the link again and check it");
}
