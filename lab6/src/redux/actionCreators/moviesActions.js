import { fetchMovies } from "../../Api/moviesApi";
import { Add_Movie, Delete_Movie, Get_All_Movies } from "../actionTypes";

export const getAllMovies = () => (dispatch) => {
  fetchMovies().then((res) => {
    dispatch({
      type: Get_All_Movies,
      payload: res.data.results,
    });
  });
};

export const addMovie = (movie) => ({
  type: Add_Movie,
  payload: movie,
});

export const deleteMovie = (movie) => ({
  type: Delete_Movie,
  payload: movie,
});
