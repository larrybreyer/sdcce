// IMPORT THE MODULE
import * as calc from './modules/calculator.js'

do {
// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
let num1 = parseFloat(prompt('Enter the first number'))
let num2 = parseFloat(prompt('Enter the second number'))
let method = prompt('How do you want to calculate these values? (+,-,*,/)')
var repeat = false;

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION
    switch (method) {
        case '+':
            alert(calc.add(num1, num2))
            break
        case '-':
            alert(calc.subtract(num1, num2))
            break
        case '*':
            alert(calc.multiply(num1, num2))
            break
        case '/':
            alert(calc.divide(num1, num2))
            break
        default:
            alert('You did not enter a correct method.')
            repeat = true;
    }
}
while ( repeat == true );
