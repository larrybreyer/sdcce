let coinFlip;

do {

  coinFlip = Math.random();
  //console.log(coinFlip);
  
  if ( coinFlip < .5 ) {
    console.log(`Heads`);
  } else {
    // console.log(`Tails`);
    console.log(`You finally got Tails`);
  }

} while ( coinFlip < .5);

// vim: ai ts=2 et
