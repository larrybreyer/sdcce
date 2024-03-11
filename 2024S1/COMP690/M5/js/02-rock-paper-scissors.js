// GLOBAL VARIABLES
let userChoice
let compChoice
let playAgain
let ranNum
let score

function playGame() {
    // PROMPT THE USER FOR THEIR CHOICE
    // VALIDATE THE DATA ENTRY TO MAKE SURE IT;S r,p, OR s
    do {
        userChoice = prompt('Make a choice between rock, paper, or scissors.').toLowerCase()
        if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
            alert('Pleae enter a valid entry.')
        } else {
            break;
        }
    } while (true)

    // COMPUTER'S CHOICE
    ranNum = Math.random()
    if (ranNum >= 0 && ranNum <= .33) {
        compChoice = 'rock' // ROCK
    } else if (ranNum > .33 && ranNum <= .66) {
        compChoice = 'paper' // PAPER
    } else {
        compChoice = 'scissors' // SCISSORS
    }

    // DETEREMINE WINNER
    if (userChoice === compChoice) {
        score = `There was a tie.`
    } else if (userChoice === 'rock' && compChoice === 'scissors') {
        score = `User won.`
    }  else if (userChoice === 'paper' && compChoice === 'rock') {
        score = `User won.`
    } else if (userChoice === 'scissors' && compChoice === 'paper') {
        score = `User won.`
    } else if (userChoice === 'paper' && compChoice === 'scissors') {
        score = `Computer won.`
    } else if (userChoice === 'scissors' && compChoice === 'rock') {
        score = `Computer won.`
    } else if (userChoice === 'rock' && compChoice === 'paper') {
        score = `Computer won.`
    }
    score += ` User chose ${userChoice}. Computer chose ${compChoice}.`
    return score
}

function init() {
    alert('Welcome to the Rock, Paper, Scissors Game')
    playAgain = 'y'
    do {
        alert(playGame())
        playAgain = prompt('Do you want to play again? (y/n)', 'y')
    } while (playAgain === 'y')
    alert('Thank you for playing the game.')
}
init()