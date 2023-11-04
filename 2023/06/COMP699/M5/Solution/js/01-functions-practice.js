//STEP 1
// let halfNum
// let firstNum = 5

// function halfNumber(x) {
//     return x / 2
// }

// halfNum = parseFloat(halfNumber(firstNum))
// console.log(`Half of ${firstNum} is ${halfNum}`)

//STEP 2
// let squareNum
// let firstNum = 5

// function squareNumber(x) {
//     return x * x
// }

// squareNum = parseFloat(squareNumber(firstNum))
// console.log(`The result of squaring the number ${firstNum} is ${squareNum}`)

//STEP 3
// let firstNum = 50
// let secondNum = 10
// let finalNum

// function percentOf(x, y) {
//     let sum = (y / x) * 100
//     return sum
// }

// finalNum = parseFloat(percentOf(firstNum, secondNum))
// console.log(`${secondNum} is ${finalNum}% of ${firstNum}`)

//STEP 4
// let firstNum = 50
// let secondNum = 8
// let finalNum

// function modOf(x, y) {
//     return x % y
// }

// finalNum = parseFloat(modOf(firstNum, secondNum))
// console.log(`${finalNum} is the modulus of ${firstNum} of ${secondNum}`)

//STEP 5
let num1, num2, num3, total = 0

function calculate(numbers) {
    for (let i = 1; i < arguments.length; i++) {
        total += Number(arguments[i])
    }
    return total
}

num1 = parseInt(prompt('Enter number 1'))
num2 = parseInt(prompt('Enter number 2'))
num3 = parseInt(prompt('Enter number 3'))
console.log(`The sum of the three numbers is ${calculate(num1, num2, num3)}`)