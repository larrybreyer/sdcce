// vim: ai ts=2 et

let score = parseInt(prompt("Enter your score"));

if ( score >= 1 && score <= 100 ) {
  if ( score >= 60 && score <= 69) {
    console.log("You received a D");
  } else if ( score >= 70 && score <= 79) {
    console.log("You received a C");
  } else if ( score >= 80 && score <= 89) {
    console.log("You received a B");
  } else if ( score >= 90 && score <= 100) {
    console.log("You received a A");
  } else {
    console.log("You received a F");
  }
} else{
	alert("Only a score between 1 and 100 is accepted.  Bye!");
}
