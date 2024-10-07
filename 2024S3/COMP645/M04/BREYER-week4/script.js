console.log("Executing myscript.js");

//  -----     VARIABLES     ----- //
/* keep track of the Objects of the <form> the <input> data, database */
let elFmSaveMovie = document.querySelector("#fmSaveMovie");  // form
let elFmShowMovie = document.querySelector("#fmGetMovie");  // form
let elDvShowMovie = document.querySelector("#dvShowMovie");  // div
let arrMovies = [];  // Empty Array, no spaces between open/close bracket

//  -----     FUNCTIONS     ----- //
/* Our custom algorithms when processing input/storage/output */
// Define the meaning of Movie (Object)
function Movie (mName, mDirector, mYear, mComment) {
  // Map the input data with internal meaning (Properties)
  this.mName     = mName;
  this.mDirector = mDirector;
  this.mYear     = mYear;
  this.mComment  = mComment;
}; // END Movie()

// Define what happens when we press save
function fnMovieSave(event) {
  event.preventDefault(); // Stops the refresh/other defaults
  console.log("fnMovieSave() is running");
  // Read what was typed into the <input> / <textarea>
  let valInSaveName = document.querySelector("#inSaveName").value;
  let valInSaveDirector = document.querySelector("#inSaveDirector").value;
  let valInSaveYear = document.querySelector("#inSaveYear").value;
  let valInSaveComment = document.querySelector("#inSaveComment").value;
  console.log("RawData: ", valInSaveName, valInSaveDirector, valInSaveYear, valInSaveComment);

  // Bundle the dispirate bits of data into one Object
  let tmpMovie = new Movie(valInSaveName, valInSaveDirector, valInSaveYear, valInSaveComment, null, null);
  console.log("Bundled: ", tmpMovie);

  // Save this album to the array
  arrMovies.push(tmpMovie); 
  console.log("All movies so far: ", arrMovies);

  // Let the user now they save properly
  window.alert("You saved the movie!");
  elFmSaveMovie.reset();
};  // END fnMovieSave()

// Subroutine to get a random album and show it on-screen
function fnMovieGet(event) {
  event.preventDefault(); // Stops the refresh/other defaults
  console.log("fnMovieGet() is running");
  // Check first if there is data to show or not
  // Use a conditional statement to make a decision
  if(!arrMovies.length){
    // NO DATA
    console.log("No data yet");
    window.alert("Please save a Movie first");
  }else{
    // YES DATA
    console.log("Yes, we have data");
    // Randomly pick an album
    let tmpRandomMovieNumber = Math.floor(Math.random() * arrMovies.length);
    console.log("We picked: ", arrMovies[tmpRandomMovieNumber]);
    //  Show the results in the empty <div>
    elDvShowMovie.innerHTML = "<p> Movie:"    + arrMovies[tmpRandomMovieNumber].mName +
                              "<br>Director:" + arrMovies[tmpRandomMovieNumber].mDirector +
                              "<br>Year:"     + arrMovies[tmpRandomMovieNumber].mYear +
                              "<br>Comment:"  + arrMovies[tmpRandomMovieNumber].mComment +
                              "<br></p>";
  }; // End of if there is data
}; // END fnMovieGet()

//  -----  EVENT LISTENERS  ----- //
/*  Listen for interactivity */
elFmSaveMovie.addEventListener("submit", function(event){fnMovieSave(event);});
elFmShowMovie.addEventListener("submit", function(event){fnMovieGet(event);});
// vim:	ft=javascript ai et ts=2 nu
