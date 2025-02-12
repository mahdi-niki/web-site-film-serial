import { footer } from "./utils.js";
footer();
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("id");

async function loadMovieDetails(movieId) {
  try {
    const res =
      movieId <= 50
        ? await fetch("../data/movie.json")
        : await fetch("../data/anim.json");
    const data = await res.json();

    const movie = data.find((movie) => movie.id === parseInt(movieId));

    if (movie) {
      document.querySelector(".movie-poster img").src = movie.image_url;
      document.querySelector(".movie-info h1").textContent = movie.title;
      const description = movie.description ? movie.description : "";
      const cast = movie.cast
        ? `cast:<br> actor : ${movie.cast[0].actor} , character : ${movie.cast[0].character} <br>actor : ${movie.cast[1].actor} , character : ${movie.cast[1].character}`
        : "";
      document.querySelector(
        ".movie-description"
      ).innerHTML = `${description} <br> release date : ${movie.release_date}</br> ${cast} <br>  genre: ${movie.genres}`;

      document.querySelector(".watch-online").href = "#";
      document.querySelector(".download").href = "#";
    } else {
      console.error("The movie was not found");
    }
  } catch (error) {
    console.error("error", error);
  }
}

loadMovieDetails(movieId);
