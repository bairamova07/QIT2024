let san = [10, 20, 30, 40];
san.push(50);
san.shift();
san.splice(0, 1, 25);

console.log(san.slice(2, 4));

function movieList() {
  let movieList = [];

  while (true) {
    let movie = prompt("Enter movie name");
    if (movie == "stop") break;
    movieList.unshift(movie);
  }

  movieList.splice(movieList.indexOf("batman"), 1);

  return `Your  movies: ${movieList}` + "\n";
}
console.log(movieList());
