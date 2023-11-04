// Rock, Paper, Scissors Game

let userChoice = prompt("Enter R for Rock, or P for Paper, or S for Scissors");

const machChoice =  Math.floor(Math.random()*3);  // 0,1,2 == R,S,P

switch(userChoice.toUpperCase()) {

  case "R":
    machChoiceStr = "Rock";
    switch(machChoice) {
      case 0:  // Rock
        alert("Machine chose Rock. It's a tie!");
        break;
      case 1: // Scissors
        alert("Machine chose Scissors. User wins!");
        break;
      case 2: // Paper
        alert("Machine Chose Paper. Machine wins!");
        break;
    }
    break;
  case "S":
    machChoiceStr = "Scissors";
    switch(machChoice) {
      case 0:  // Rock
        alert("Machine chose Rock. Machine wins!");
        break;
      case 1: // Scissors
        alert("Machine chose Scissors. It's a tie!");
        break;
      case 2: // Paper
        alert("Machine Chose Paper. User wins!");
        break;
    }
    break;
  case "P":
    machChoiceStr = "Paper";
    switch(machChoice) {
      case 0:  // Rock
        alert("Machine chose Rock. User wins!");
        break;
      case 1: // Scissors
        alert("Machine chose Scissors. Machine wins!");
        break;
      case 2: // Paper
        alert("Machine Chose Paper. It's a tie!");
        break;
    }
    break;
  default:
    console.log(`User input ${userChoice.toUpperCase()} not valid. `)

}


//  vim: ft=javascript ai ts=2 et ff=unix

