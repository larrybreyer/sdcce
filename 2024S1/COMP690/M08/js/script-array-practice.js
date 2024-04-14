//  Global variables

const five_favorite_movies = [
    "The Magnificent 7",
    "Lawrence of Arabia",
    "Ben Hur",
    "2001: A Space Odyssey",
    "How The West Was Won"
];


//STEP 1
//  let movies = five_favorite_movies;
//  console.log(five_favorite_movies[1]);
//STEP 2
//  let movies = new Array(5);
//  movies[0] = five_favorite_movies[0];
//  movies[1] = five_favorite_movies[1];
//  movies[2] = five_favorite_movies[2];
//  movies[3] = five_favorite_movies[3];
//  movies[4] = five_favorite_movies[4];
//  
//  console.log(movies[0]);
//STEP 3
//  let movies = new Array(5);
//  movies[0] = five_favorite_movies[0];
//  movies[1] = five_favorite_movies[1];
//  movies[2] = five_favorite_movies[2];
//  movies[3] = five_favorite_movies[3];
//  movies[4] = five_favorite_movies[4];
//  let slice1 = movies.slice(0,3);
//  let slice2 = movies.slice(3,5);
//  movies = slice1;
//  movies = movies.concat('Braveheart');
//  movies = movies.concat(slice2);
//   
//  console.log(movies.length);
//STEP 4
//  let movies = five_favorite_movies;
//  movies.shift();
//  console.log(movies);
//STEP 5
//  const movies = [
//      "The Magnificent 7",
//      "Lawrence of Arabia",
//      "Ben Hur",
//      "2001: A Space Odyssey",
//      "How The West Was Won",
//      "Some Like It Hot",
//      "Harvey"];
//  
//  for (let movie in movies){ console.log(movies[movie])};
//STEP 6
//  const movies = [
//      "The Magnificent 7",
//      "Lawrence of Arabia",
//      "Ben Hur",
//      "2001: A Space Odyssey",
//      "How The West Was Won",
//      "Some Like It Hot",
//      "Harvey"];
//  
//  for (let movie of movies){ console.log(movie)};
//STEP 7
//  const movies = [
//      "The Magnificent 7",
//      "Lawrence of Arabia",
//      "Ben Hur",
//      "2001: A Space Odyssey",
//      "How The West Was Won",
//      "Some Like It Hot",
//      "Harvey"];
//  
//     for (let movie of movies.sort()){ console.log(movie)};
//  
//STEP 8
//  const movies = [
//      "The Magnificent 7",
//      "Lawrence of Arabia",
//      "Ben Hur",
//      "2001: A Space Odyssey",
//      "How The West Was Won",
//      "Some Like It Hot",
//      "Harvey"];
//  
//  const leastFavMovies = [
//      "The Ridiculous 6 (2015)",
//      "Gold Diggers (2003)",
//      "Cabin Fever (2016)"
//  ];
//  
//  console.log("\nMovies I like:\n\n");
//  for (let movie of movies){ console.log(movie)};
//  console.log("\nMovies I regret watching:\n\n");
//  for (let movie of leastFavMovies){ console.log(movie)};
//STEP 9
//  const movies1 = [
//      "The Magnificent 7",
//      "Lawrence of Arabia",
//      "Ben Hur",
//      "2001: A Space Odyssey",
//      "How The West Was Won",
//      "Some Like It Hot",
//      "Harvey"];
//  
//  const leastFavMovies = [
//      "The Ridiculous 6 (2015)",
//      "Gold Diggers (2003)",
//      "Cabin Fever (2016)"
//  ];
//  
//  const movies = movies1.concat(leastFavMovies);
//  movies.sort();
//  for (let movie of movies.reverse()){ console.log(movie)};
//  
//STEP 10
//  const movies1 = [
//      "The Magnificent 7",
//      "Lawrence of Arabia",
//      "Ben Hur",
//      "2001: A Space Odyssey",
//      "How The West Was Won",
//      "Some Like It Hot",
//      "Harvey"];
//  
//  const leastFavMovies = [
//      "The Ridiculous 6 (2015)",
//      "Gold Diggers (2003)",
//      "Cabin Fever (2016)"
//  ];
//  
//  const movies = movies1.concat(leastFavMovies);
//  movies.sort();
//  movies.reverse();
//  console.log(movies[movies.length - 1]);
//STEP 11
//  const movies1 = [
//      "The Magnificent 7",
//      "Lawrence of Arabia",
//      "Ben Hur",
//      "2001: A Space Odyssey",
//      "How The West Was Won",
//      "Some Like It Hot",
//      "Harvey"];
//  
//  const leastFavMovies = [
//      "The Ridiculous 6 (2015)",
//      "Gold Diggers (2003)",
//      "Cabin Fever (2016)"
//  ];
//  
//  const movies = movies1.concat(leastFavMovies);
//  movies.sort();
//  movies.reverse();
//  console.log(movies[0]);
//STEP 12
//  const movies = [
//      "The Ridiculous 6 (2015)",
//      "The Magnificent 7",
//      "Some Like It Hot",
//      "Lawrence of Arabia",
//      "How The West Was Won",
//      "Harvey",
//      "Gold Diggers (2003)",
//      "Cabin Fever (2016)",
//      "Ben Hur",
//      "2001: A Space Odyssey" 
//  ];
//  
//  const leastFavMovies = [
//      "The Ridiculous 6 (2015)",
//      "Gold Diggers (2003)",
//      "Cabin Fever (2016)"
//  ];
//  
//  const goodMovies = [
//      "Operation Mincemeat",
//      "Darkest Hour",
//      "Dunkirk"
//  ];
//  
//  // list of indices of movies I don't like
//  badlist = [];
//  
//  console.log("Movie list:");
//  // compare all movies to the bad ones
//  for ( let i = 0; i < movies.length ; i++) {
//      console.log(movies[i]);
//      for (let bad of leastFavMovies ) {
//          if (movies[i] == bad ) { 
//              // Add bad movie to bad list
//              badlist.push(i);
//              //  console.log(movies[i]);
//          }
//      }
//  }
//  //  console.log(badlist);
//  // Replace bad movies with good movies
//  for ( let i = 0; i < goodMovies.length ; i++) {
//      movies[badlist[i]] = goodMovies[i];
//      // console.log(movies[badlist[i]]);
//  }
//  // Print out the result to the console.
//  console.log("\nMovie list with replacements:");
//  for (let movie of movies) {
//      console.log(movie);
//  }
//STEP 13
//  function checkTypeof(data) {
//      return typeof data == "string";
//  }
//  
//  movies = [["Movie 1", 1], 
//            ["Movie 2", 2], 
//            ["Movie 3", 3],
//            ["Movie 4", 4], 
//            ["Movie 5", 5]];
//  
//  flatten = movies.flat();
//  console.log(flatten.filter(checkTypeof));
//STEP 14
//  employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
//  
//  const showEmployee = function (list ) {
//      console.log("Employees:\n\n");
//      for ( let i = 0 ; i < list.length; i++ ) {
//          console.log(list[i]);
//      }
//      
//  }
//  
//  showEmployee(employees);
//STEP 15
//  function filterValues(oldList) {
//      let newList = [];
//      for ( let data of oldList ) {
//          if(data != false && data != null && data != 0 && data != '') {
//              newList.push(data);
//          }
//      }
//      return newList;
//  }
//  console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
//STEP 16
//  let numbers = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
//  
//  function RNG(list) {
//      return list[Math.floor(Math.random() * list.length)];
//  }
//  
//  console.log(RNG(numbers));
//STEP 17
//  let numbers = [0, 10, -20, 300, 4, 50, 6, 70, 8, 90];
//  let max = 0
//  
//  for (let i = 0; i< numbers.length; i++) {
//      if ( numbers[i] > max ) {
//          max = numbers[i];
//      }
//  }
//  
//  console.log(max);

// vim: ai ts=4 et 
