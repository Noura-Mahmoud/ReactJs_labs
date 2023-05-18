import axios from "axios";

export const fetchMovies = () =>
  axios.get(
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
  );
