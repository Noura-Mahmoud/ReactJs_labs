import Movie from "./Movie";
import{v4 as uuid} from 'uuid'
import SimpleBackdrop from "../components/Spinner";
import {  useContext, memo } from "react";
// import MovieCard from "../components/MovieCard";
import { MoviesContext } from "../Modules/MoviesModule";


const Movies = () => {
  const {movieList} =  useContext(MoviesContext);

if (!movieList) return <SimpleBackdrop></SimpleBackdrop>;
  

    return ( 
        <div style={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
            {movieList.map((m)=> { 
              return <Movie key={uuid()} {...m}></Movie>
              })}
        </div>
     );
};
 
export default Movies;