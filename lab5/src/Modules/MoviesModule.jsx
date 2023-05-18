import{createContext, lazy, useMemo} from 'react'
import { useCallback, useState } from "react";
import {Routes,Route} from "react-router-dom"
import { v4 as uuid } from "uuid";
import AddNewMovie from "../components/FormNewMovie";
import DeleteMovie from "../components/DeleteMovie";

const MoviesPage = lazy(()=> import("../pages/Movies"));
const DetailsPage = lazy(()=> import("../pages/DetailsPage"));
const NotFound = lazy(()=>import("../pages/NotFound"));

export const MoviesContext = createContext();

const MoviesModule=()=>{
    const [movieList, setMovies] =useState( 
      // null
      [
  {
    id: uuid(),
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    genre: "Drama",
    releaseDate: "1994",
    duration: "142 minutes",
    rating: "9.3",
    description: "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
    productionCompany: "Columbia Pictures",
    country: "United States"
  },
  {
    id: uuid(),
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    genre: "Crime, Drama",
    releaseDate: "1994",
    duration: "154 minutes",
    rating: "8.9",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    productionCompany: "Miramax Films",
    country: "United States"
  },
  {
    id: uuid(),
    title: "The Dark Knight",
    director: "Christopher Nolan",
    genre: "Action, Crime, Drama",
    releaseDate: "2008",
    duration: "152 minutes",
    rating: "9.0",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    productionCompany: "Warner Bros. Pictures",
    country: "United States"
  }]
    );

    const addMovie = useCallback((movieData)=>{
      setMovies((oldMovies)=>[...oldMovies, {...movieData, id : uuid()} ])
    }, [])

    const deleteMovie = useCallback((movieId)=>{
      const movieIndex = movieList.findIndex((m)=> m.id === movieId);
      movieList.splice(movieIndex,1)
      setMovies(movieList);
    }, [])

    const valuee = useMemo(()=>({movieList, addMovie, deleteMovie, setMovies}), [movieList, addMovie, deleteMovie, setMovies]);

    return (
        <MoviesContext.Provider value = {valuee}>
            <Routes>
                <Route index element={<MoviesPage></MoviesPage>}/>
                <Route path='add' element={<AddNewMovie></AddNewMovie>}/>
                <Route path=':id' element={<DetailsPage></DetailsPage>}/>
                <Route path='delete/:id' element={<DeleteMovie></DeleteMovie>}/>
                <Route path='*' element={<NotFound></NotFound>}/>
            </Routes>
        </MoviesContext.Provider>
    )
};

export default MoviesModule;