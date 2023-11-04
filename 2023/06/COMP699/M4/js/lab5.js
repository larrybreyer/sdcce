// GLOBAL VARIABLES
let miles
let gallons
let mpg
let again = 'y'

// PROCESS USER FEEDBACK   

do {
	miles = parseFloat(prompt('Enter miles driven'));
	gallons = parseFloat(prompt('How many gallons does your tank hold?'));
  if ( !isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
    mpg = miles / gallons;
    console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`);
  } else {
    window.alert('One of both entries is invalid.');
  }
  do {
    again = prompt('Repeat entries? (y or n)','y');
  } while ( again != 'y' && again != 'n');
} while (again === 'y');
console.log('Application has exited.');

// vim: ai ts=2 et
