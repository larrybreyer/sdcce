let num = parseInt(prompt('How many times do you want to flip the coin?'))

for (let i = 1; i <= num; i++) {
    let coinFlip = Math.round(Math.random())
    if (coinFlip) {
        console.log('Heads')
    } else {
        console.log('Tails')
    }
}