var topmovies = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
var imgPoster = "https://image.tmdb.org/t/p/w1280";
var searchAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

async function fetchMovies(API) {
 var response = await fetch(API);
 var data = await response.json();
 moviesData(data.results)
}

fetchMovies(topmovies);

function moviesData(movies) {

 document.querySelector(".movies").innerHTML = "";
 
 for (let data of movies) {
  var divElm = document.createElement("div");
  divElm.classList.add("movie-card")
  divElm.innerHTML = `<div class="movie-poster">
              <img
              src = ${"https://image.tmdb.org/t/p/w1280"+ data.poster_path}  alt="Movie Poster">
          </div>

          <div class="movie-info">
            <h3 class="movie-title">${data.title}</h3>

            <p class="movie-meta">
              <span class="year">${data.release_date}</span> •
              <span class="genre">${data.genre_ids}</span>
            </p>

            <p class="movie-plot">${data.overview}</p>
          </div>`

          document.querySelector(".movies").append(divElm);
 }
}

// input js
document.querySelector("#inp").addEventListener(
 "keyup" ,
 function (event) {
  if (event.target.value == "") {
   fetchMovies(topmovies)
  } else {
   fetchMovies(searchAPI + event.target.value)
  }
 }
)