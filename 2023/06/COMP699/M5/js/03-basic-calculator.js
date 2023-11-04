// IMPORT THE MODULE
import {add, subtract, multiply, divide} from './modules/calculator.js';

var validOp, num1, num2, op, result;

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
do {
  validOp = true;
  num1 = parseFloat(prompt("Input first number"));
  num2 = parseFloat(prompt("Input second number"));
  op = prompt("Enter operation [+,-,*,/]");

  // CHECK TO SEE WHAT OPERATION THEY'RE USING
  switch(op) {
    // CALL THE APPROPRIATE FUNCTION
    case "+":
      result = add(num1, num2);
      break;

    case "-":
      result = subtract(num1, num2);
      break;

    case "*":
      result = multiply(num1, num2);
      break;

    case "/":
      result = divide(num1, num2);
      break;

    default:
      validOp = false;
      alert(`${op} is not a valid operation.`)
  }
} while (! validOp);

alert(`The result of ${num1} ${op} ${num2} is ${result}`)

//  vim: ft=javascript ai ts=2 et

