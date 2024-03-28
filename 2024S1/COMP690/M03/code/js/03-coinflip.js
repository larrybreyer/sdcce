let choice

do {
  choice = prompt("Please enter [H]eads or [T]ails","H");
} while (choice != "H" && choice != "T");

console.log("choice " + choice);

let randomNum = Math.round(Math.random() * 100);
console.log("randomNum = " + randomNum);

if ( randomNum > 49 ) {
  actual = 'T';
} else {
  actual = 'H';
}
console.log("actual = " + actual);

if ( choice == actual ) {
  if ( choice == "H" ) {
    alert("The flip was heads and you chose heads...you win!");
  } else {
    alert("The flip was tails and you chose tails...you win!");
  }
} else {
  if ( choice == "T" ) {
    alert("The flip was heads but you chose tails...you lose!");
  } else {
    alert("The flip was tails but you chose heads...you lose!");
  }
}

// vim: ai ts=2 et
