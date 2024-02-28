"use strict";
document.ready( () => {
  let number1 = prompt("Please enter a number");
  let number2 = prompt("Please enter another number");
  if ( number1 >= number2 ) {
    document.write("<h1>" + number1.toString() + "</h1>");
  } else {
    document.write("<h1>" + number2.toString() + "</h1>");
    //  document.write(number2);
  }
});
