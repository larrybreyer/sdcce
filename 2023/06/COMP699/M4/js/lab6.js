// GLOBAL VARIABLES
let futureValue
let invenstment
let rate
let years

// COLLECT THE VALUES FROM THE USER
do {
  investment = parseFloat(prompt('Enter investment amount as xxx.xx'))
} while (isNaN(investment));
do {
  rate       = parseFloat(prompt('Enter interest rate as xx.x (0 - 6)'))
} while (isNaN(rate) || rate < 0 || rate > 6);
do {
  years      = parseFloat(prompt('Enter years of investment (1 - 30)'))
} while (isNaN(years) || years < 1 || years > 30);

// CALCULATE FUTURE VALUE
futureValue = investment
for (let i = 0; i < years; i++) {
  futureValue  = futureValue + (futureValue * rate / 100)
}

// DISPLAY RESULTS
document.write(`Investment amount: $${investment.toFixed(2)}<br>`)
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`)
document.write(`Years: ${years}<br>`)
document.write(`Future value: $${futureValue.toFixed(2)}<br>`)

// vim: ai ts=2 et nu
