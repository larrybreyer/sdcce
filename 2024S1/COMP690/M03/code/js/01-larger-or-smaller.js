let number1 = prompt("Please enter a number");
let number2 = prompt("Please enter another number");
// document.write() is illegal with async js,
// because the document may be closed before it runs,
// unless you explicity open it.
document.open();   
if ( number1 >= number2 ) {
  document.write(number1);
} else {
  document.write(number2);
  //  document.write(number2);
}
document.close();
