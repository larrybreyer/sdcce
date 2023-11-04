//  Based on Murach's JavaSript and JQuery, 4th Ed. Page 595

// ADD A PRIVATE FUNCTION CALLED CALCULATE
const calculate = (num1, num2, op) => {
//  function calculate(num1, num2, op) {
  switch(op) {
    case "+":
      return(num1 + num2);
      break;
    case "-":
      return(num1 - num2);
      break;
    case "*":
      return(num1 * num2);
      break;
    case "/":
      return(num1 / num2);
      break;
  }
}

//  ADD FOUR PUBLIC FUNCTIONS BELOW
//  EXPORT THE FOUR PUBLIC FUNCTIONS

//  ADD FUNCTION
//  export const add = (num1,num2) => {
export function add(num1,num2) {
  return(calculate(num1, num2, "+"));
}

//  SUBTRACT FUNCTION
//  export const subtract = (num1,num2) => {
export function subtract(num1,num2) {
  return(calculate(num1, num2, "-"));
}

//  MULTIPLY FUNCTION
//  export const multiply = (num1,num2) => {
export function multiply(num1,num2) {
  return(calculate(num1, num2, "*"));
}

//  DIVIDE FUNCTION
//  export const divide = (num1,num2) => {
export function divide(num1,num2) {
  return(calculate(num1, num2, "/"));
}



//  vim: ft=javascript ai ts=2 et
