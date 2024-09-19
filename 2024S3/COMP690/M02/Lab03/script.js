let score1 = parseFloat(prompt('Enter the first score'));
let score2 = parseFloat(prompt('Enter the second score'));
let score3 = parseFloat(prompt('Enter the third score'));
let total = score1 + score2 + score3;
let avg = total / 3;

document.write(`<h1>The Test Scores Average Application</h1>`);
document.write(`The first test score was ${score1}<br>`);
document.write(`The second test score was ${score2}<br>`);
document.write(`The third test score was ${score3}<br>`);
document.write(`The average score was ${avg.toFixed(2)}<br>`);
// vim: ft=javascript nu ai et sw=2 ts=2
