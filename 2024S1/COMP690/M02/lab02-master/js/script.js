let milesDriven = prompt("How many miles have you driven?");
let gallons = prompt("How many gallons of fuel does your car hold?");
let mpg = milesDriven / gallons;
document.write(`Your car gets ${mpg.toFixed(2)} miles per gallon.`);