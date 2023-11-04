//STEP 1
// I find if I enter a float, /2 prints same number of decimal digits.
function halfNumber() {
    userInput = parseFloat(prompt('Enter a number'))
    console.log(`Half of ${userInput} is ${userInput/2}`)
}

//STEP 2
function squareNumber() {
    var userInput = parseFloat(prompt('Enter a number'));
    if(isNaN(userInput)) {
        console.log(`User did not enter a number.`)
    }else {
        console.log(`The result of squaring ${userInput} is ${userInput**2}`)
    }
}

//STEP 3
function percentOf() {
    var userInput1 = parseFloat(prompt('Enter the first number'));
    var userInput2 = parseFloat(prompt('Enter the second number'));
    if(isNaN(userInput1) || isNaN(userInput2)) {
        console.log(`User did not enter two numbers.`)
    }else {
        var perCent = userInput1 / userInput2 * 100;
        console.log(`${userInput1} is ${perCent}% of ${userInput2}`)
    }

}

//STEP 4
function findModulus() {
    var userInput1 = parseInt(prompt('Enter some integer'));
    var userInput2 = parseInt(prompt('Enter the modulus(integer)'));
    if(isNaN(userInput1) || isNaN(userInput2)) {
        console.log(`User did not enter two integers.`)
    }else {
        console.log(`${userInput1} modulus ${userInput2} is ${userInput1 % userInput2}`)
    }
    
}

//STEP 5

function sumOfNumbers() {
    var userInput = prompt('Enter comma separated list of numbers');
    var userArray = userInput.split(',');
    var Sum = 0;
    for( let i = 0; i < userArray.length; i++ )
    {
        Sum += parseFloat(userArray[i]);
    }
    console.log(`The sum of ${userInput} is ${Sum}`)
}

// Function calls
halfNumber();
// squareNumber();
// percentOf();
// findModulus();
// sumOfNumbers();

//  vim: ft=javascript ai ts=4 et ff=unix
