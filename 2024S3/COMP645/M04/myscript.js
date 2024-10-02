console.log("Executing myscript.js");

//  -----     VARIABLES     ----- //
/* keep track of the Objects of the <form> the <input> data, database */

let elFmSaveAlbum = document.querySelector("#fmSaveAlbum");  // form
let elFmShowAlbum = document.querySelector("#fmGetAlbum");  // form
let elDvShowAlbum = document.querySelector("#dvShowAlbum");  // div
let arrAlbums = [];  // Empty Array, no spaces between open/close bracket

//  -----     FUNCTIONS     ----- //
/* Our custom algorithms when processing input/storage/output */
// Define the meaning of Album (Object)
function Album (aBand, aName, aYear, aComment) {
  // Map the input data with internal meaning (Properties)
  this.aBand = aBand;
  this.aName = aName;
  this.aYear = aYear;
  this.aComment = aComment;
  
};

//  -----  EVENT LISTENERS  ----- //
/* Listen for interactivity */





/*
  Form ID:  fmSaveAlbum

*/

//  document.getElementById("contactMeForm");

/*

let myForm = document.querySelector("#contactMeForm");

myForm.addEventListener(
  "submit", 
  function(event){
    doStuff(event);
  }
);


function doStuff(event){
  event.preventDefault();
  let email = document.querySelector("#email").value;
  let comment = document.querySelector("#comment").value;
  // Inserting newline between email address and comment
  message = email + "\n" + comment;
  window.alert(message);
  myForm.reset();  // clear form
};

*/


// Is there an Emmet module for Javascript?
// vim:	ft=javascript ai et ts=2 nu
