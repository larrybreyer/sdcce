let coinFlip

do {
    coinFlip = Math.round(Math.random())
    if (coinFlip) {
        console.log('Heads')
    } else {
        console.log('You finally got Tails')
    }
} while (coinFlip)