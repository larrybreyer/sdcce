let coinFlip;

do {

  coinFlip = Math.random();
  
  if ( coinFlip < .5 ) {
    console.log(`Heads`);
  } else {
    console.log(`Tails`);
  }

} while ( coinFlip < .5);

// vim: ai ts=2 et
