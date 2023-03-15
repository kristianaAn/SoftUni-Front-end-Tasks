function moviesInfo(inputArr) {
  let outputMoviesArr = [];

  for (const line of inputArr) {
    let output = line.split(' ');
    if (line.includes("addMovie")) {
      let movie = output.slice(1).join(' ');
      addMovie(movie);

    } else if (line.includes("directedBy")) {
      let startIndex = output.indexOf("directedBy");
      let movie = output.slice(0, startIndex).join(' ');
      let director = output.slice(startIndex + 1).join(' ');
      addDirector(movie, director);

    } else if (line.includes("onDate")) {
      let startIndex = output.indexOf("onDate");
      let date = output.slice(startIndex + 1).join(' ');
      let movie = output.slice(0, startIndex).join(' ');
      addDate(movie, date);
    }
  }

  function addMovie(name) {
    outputMoviesArr.push({ name });
  }

  function addDirector(name, director) {
    let check = outputMoviesArr.find((m) => m.name === name);

    if (check) {
      check.director = director;
    }
  }

  function addDate(name, date) {
    let check = outputMoviesArr.find((m) => m.name === name);

    if(check) {
        check.date = date;
    }
  }

  outputMoviesArr
  .filter((movie) => movie.hasOwnProperty('name') && movie.hasOwnProperty('director') && movie.hasOwnProperty('date'))
  .forEach((m) => console.log(JSON.stringify(m)));
}

moviesInfo([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);

moviesInfo([
    'addMovie The Avengers', 
    'addMovie Superman', 
    'The Avengers directedBy Anthony Russo', 
    'The Avengers onDate 30.07.2010', 
    'Captain America onDate 30.07.2010', 
    'Captain America directedBy Joe Russo' 
    ]);
