let coinFlip;
let coinFlips;

do {
    coinFlips = prompt("Please enter number of coin flips (integer > 0)");
//  console.log(coinFlips);
    if ( coinFlips == null ) {
      coinFlips = 0;
      break;
    }
    coinFlips = Number(coinFlips);
//  console.log(isNaN(coinFlips))
//  console.log(!Number.isInteger(coinFlips));
//  console.log(coinFlips < 1);
} while ( isNaN(coinFlips) || !Number.isInteger(coinFlips) || coinFlips < 1);

// Note: The condition is evaluated before execution
for (let i = 1; i <= coinFlips; i++) {

  coinFlip = Math.random();
  
  if ( coinFlip < .5 ) {
    console.log(`${i}. Heads`);
  } else {
    console.log(`${i}. Tails`);
  }

}

// vim: ai ts=2 et
