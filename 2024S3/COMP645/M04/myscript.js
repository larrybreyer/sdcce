console.log("Executing myscript.js");

//  -----     VARIABLES     ----- //
/* keep track of the Objects of the <form> the <input> data, database */
let elFmSaveAlbum = document.querySelector("#fmSaveAlbum");  // form
let elFmShowAlbum = document.querySelector("#fmGetAlbum");  // form
let elDvShowAlbum = document.querySelector("#dvShowAlbum");  // div
let arrAlbumsTest = ["Beatles", "ZZ Top", "Nirvana", "No Doubt"]; // array, populated; counting from zero
let arrAlbums = [];  // Empty Array, no spaces between open/close bracket
console.log(arrAlbumsTest);   // Show the whole array
console.log(arrAlbumsTest[3]);   // Show the 4th item (index value 3)

//  -----     FUNCTIONS     ----- //
/* Our custom algorithms when processing input/storage/output */
// Define the meaning of Album (Object)
function Album (aBand, aName, aYear, aComments, aGenre, aFunction) {
  // Map the input data with internal meaning (Properties)
  this.aBand      = aBand;
  this.aComments  = aComments;
  this.aGenre     = aGenre;
  this.aName      = aName;
  this.aYear      = aYear;
  this.aFunction  = aFunction;
  // Define the Method (command) of .getAge()
  this.getAge     = function() {
    // Check the current date
    let tmpCurrentDate = new Date();
    // Calculate the age of the album and show it (return it)
    return tmpCurrentDate.getFullYear() - this.aYear;
  }; // END .getAge()
}; // END Album()

// Define what happens when we press save
function fnAlbumSave(event) {
  event.preventDefault(); // Stops the refresh/other defaults
  console.log("fnAlbumSave() is running");
  // Read what thyped into the <input> / <textarea>
  let valInSaveBand = document.querySelector("#inSaveBand").value;
  let valInSaveAlbum = document.querySelector("#inSaveAlbum").value;
  let valInSaveYear = document.querySelector("#inSaveYear").value;
  let valInSaveComment = document.querySelector("#inSaveComment").value;
  console.log("RawData: ", valInSaveBand, valInSaveAlbum, valInSaveYear, valInSaveComment);

  // Bundle the dispirate bits of data into one Object
  let tmpAlbum = new Album(valInSaveBand, valInSaveAlbum, valInSaveYear, valInSaveComment, null, null);
  console.log("Bundled: ", tmpAlbum);
  console.log("The age of the album: ", tmpAlbum.getAge());

  // Save this album to the array
  arrAlbums.push(tmpAlbum); 
  console.log("All albums so far: ", arrAlbums);

  // Let the user now they save properly
  window.alert("You saved the album!");
  elFmSaveAlbum.reset();
};  // END fnAlbumSave()

// Subroutine to get a random album and show it on-screen
function fnAlbumGet(event) {
  event.preventDefault(); // Stops the refresh/other defaults
  console.log("fnAlbumGet() is running");
  // Check first if there is data to show or not
  // Use a conditional statement to make a decision
  if(!arrAlbums.length){
    // NO DATA
    console.log("No data yet");
    window.alert("Please save an Album first");
  }else{
    // YES DATA
    console.log("Yes, we have data");
    // Randomly pick an album
    let tmpRandomAlbumNumber = Math.floor(Math.random() * arrAlbums.length);
    console.log("We picked: ", arrAlbums[tmpRandomAlbumNumber]);
    //  Show the results in the empty <div>
    elDvShowAlbum.innerHTML = "<p> Artist:"   + arrAlbums[tmpRandomAlbumNumber].aBand +
                              "<br>Album:"    + arrAlbums[tmpRandomAlbumNumber].aName +
                              "<br>Year:"     + arrAlbums[tmpRandomAlbumNumber].aYear +
                              "<br> Comment:" + arrAlbums[tmpRandomAlbumNumber].aComments +
                              "<br> </p>";
  }; // End of if there is data
}; // END fnAlbumGet()

//  -----  EVENT LISTENERS  ----- //
/*  Listen for interactivity */
elFmSaveAlbum.addEventListener("submit", function(event){fnAlbumSave(event);});
elFmShowAlbum.addEventListener("submit", function(event){fnAlbumGet(event);});
// vim:	ft=javascript ai et ts=2 nu
