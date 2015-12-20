# HTML5-Web-Storage-API-Demo
This demonstrates with an simple example HTML5 localStorage and sessionStorage

HTML5 Web Storage was introduced to reduce the amount of space occupied in cookies unwantedly and helps to store the data in local storage(5mb) for client-side without an expiry date.

HTML5 web storage: divided into 3.

- HTML5 local Storage - data is stored in local computer and stores around 5MB . It does not get deleted until it is cleared
- HTML5 session storage - when the window is closed, data is deleted . It remains for that session only
- HTML5 web database

To follow the example, below is the pseudo code. Clone the code to your git profile.  Use the Javascript file app.js(local storage) & app1.js(session storage) one at time, execute the program and check how it works.

 - ----------- Local Storage ------------ 
 - Use app.js 
 -  Login Window is loaded.
 -  For the first time, UserName and Password are prompted.
    - after entering them, submit button is clicked. 
       - 1. Values are cleared from display fields.
       - 2. Values are stored in Storage.
       - 3. Prompted to close and open the window again.
 -  When the window is opened again, 
       - 1. Window is prepopulated with the values of the form fields.
       - 2. Button to clear the storage is provided for the user.
 - ----------- Session Storage -------------.
 - Same scenario is executed and confirm that it does not store the values.Use app1.js.
