'use strict';
// HANDLE THE LOAD EVENT OF THE WINDOW
// window.addEventListener('load', () => {
window.onload = function () {

    // SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
    let w = 800;
    let h = 700;
    
    // RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
    window.resizeTo(w,h);
    
    // MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
    let l = (screen.availWidth -w) / 2;
    let t = (screen.availHeight -h) / 2;
    window.moveTo(l,t);


};

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM

const $ = selector => document.querySelector(selector);

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW

const closeWindow = () => {
  window.opener.document.getElementById('loginDetails').innerHTML = '';
  window.close();
}

document.addEventListener("DOMContentLoaded", () => {
    $("#cancel").addEventListener("click", closeWindow);
});

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION

const processEntries = () => {

  // CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
  // SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
  let empData = 'ID: '+$("#id").value+'<br>Name:'+$("#name").value+'<br>Extension: '+$("#extension").value+'<br>Email: '+$("#email").value+'<br>Department: '+$("#department").value;

  // GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
  // SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
  window.opener.document.getElementById('loginDetails').innerHTML = empData;

  // CLOSE THE POPUP
  window.close();
}

document.addEventListener("DOMContentLoaded", () => {
    $("#submit").addEventListener("click", processEntries);
});

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE

// vim: ai ts=2 et
