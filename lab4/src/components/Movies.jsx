import Movie from "./Movie";
import{v4 as uuid} from 'uuid'
import SimpleBackdrop from "../components/Spinner";
import axios from "axios";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import MovieCard from "../components/MovieCard";

const Movies = () => {
    // const movieList = [
    const [movieList, setMovies] =useState( 
      null
  //     [
  // {
  //   title: "The Shawshank Redemption",
  //   director: "Frank Darabont",
  //   genre: "Drama",
  //   releaseDate: "1994",
  //   duration: "142 minutes",
  //   rating: "9.3",
  //   description: "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
  //   productionCompany: "Columbia Pictures",
  //   country: "United States"
  // },
  // {
  //   title: "Pulp Fiction",
  //   director: "Quentin Tarantino",
  //   genre: "Crime, Drama",
  //   releaseDate: "1994",
  //   duration: "154 minutes",
  //   rating: "8.9",
  //   description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  //   productionCompany: "Miramax Films",
  //   country: "United States"
  // },
  // {
  //   title: "The Dark Knight",
  //   director: "Christopher Nolan",
  //   genre: "Action, Crime, Drama",
  //   releaseDate: "2008",
  //   duration: "152 minutes",
  //   rating: "9.0",
  //   description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  //   productionCompany: "Warner Bros. Pictures",
  //   country: "United States"
  // }]
  );


useEffect(() => {
    axios
      .get ("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7")
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results)
      });
  }, []);

if (!movieList) return <SimpleBackdrop></SimpleBackdrop>;
  

    return ( 
        <div style={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
          {/* <div>{movieList}</div> */}
            {/* {movieList.map((m)=> <Movie key={uuid()} {...m}></Movie>)} */}
            {movieList.map((m)=> <MovieCard key={uuid()} {...m}></MovieCard>)}
        </div>
     );
}
 
export default Movies;