import { combineReducers } from "redux";
import { moviesReducers } from "./MoviesReducer";
import { directorsReducer } from "./DirectorsReducer";

const rootReducer = combineReducers({
  movies: moviesReducers,
  directors: directorsReducer,
});

export default rootReducer;
