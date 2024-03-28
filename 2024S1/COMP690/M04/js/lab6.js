// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
do {
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
    if (isNaN(investment)) {
        alert('Your entry was not a number. Please enter a valid number.');
    } else {
        break;
    }
} while (true);

do {
    rate = parseFloat(prompt('Enter interest rate as xx.x'));
    if (isNaN(rate)) {
        alert('Your entry was not a number. Please enter a valid number.');
    } else if (rate < 0 || rate > 12) {
        alert('Enter a realistic rate: a number between 0 and 12');
    } else {
        break;
    }
} while (true);

do {
    years = parseInt(prompt('Enter the number of years you want to invest for'));
    if (isNaN(years)) {
        alert('Your entry was not a number. Please enter a valid number.');
    } else if (years < 1 || years > 30) {
        alert('Enter a number of years between 1 and 30');
    } else {
        break;
    }
} while (true);

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment}<br>`);
document.write(`Interest rate: ${rate}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);