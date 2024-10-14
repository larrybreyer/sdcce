// GLOBAL VARIABLES
let total = 0

// ADD A PRIVATE FUNCTION CALLED CALCULATE
const calculate = (x, y, method) => {
    switch (method) {
        case 'add':
            return x + y
            break
        case 'subtract':
            return x - y
            break
        case 'multiply':
            return x * y
            break
        case 'divide':
            return x / y
            break
        default:
            return 0
    }
}
// ADD FOUR PUBLIC FUNCTIONS BELOW

// ADD FUNCTION
const add = (x, y) => {
    total = calculate(x, y, 'add')
    return total
}
// SUBTRACT FUNCTION
const subtract = (x, y) => {
    total = calculate(x, y, 'subtract')
    return total
}
// MULTIPLY FUNCTION
const multiply = (x, y) => {
    total = calculate(x, y, 'multiply')
    return total
}
// DIVIDE FUNCTION
const divide = (x, y) => {
    total = calculate(x, y, 'divide')
    return total
}
// EXPORT THE FOUR PUBLIC FUNCTIONS
export {add, subtract, multiply, divide}