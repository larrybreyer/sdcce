/*
  This is a multi-line comment.
  Just like CSS.  It's ignored.
*/
/* single line comment */

// single line comment

console.log("Hello, developer!");   // In debugger
// document.write("Hello, webpage");   // in web page
// window.alert("Hello, browser");     // a Popup

//  document.getElementById("contactMeForm");


let myForm = document.querySelector("#contactMeForm");

myForm.addEventListener(
  "submit", 
  function(event){
    doStuff(event);
  }
);


function doStuff(event){
  event.preventDefault();
  //  window.alert("hahahaha");
  let data1 = document.querySelector("#data1").value;
  // let data1 = document.getElementById("data1").value;
  console.log(data1);
  // myForm.reset();  // clear form
};




// Is there an Emmet module for Javascript?
// vim:	ft=javascript ai et ts=2 nu
