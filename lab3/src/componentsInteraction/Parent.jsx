import React, { useState } from "react";
import Movie from "./Movie";
import {v4 as uuid} from 'uuid';
import AddNewMovie from "./FormNewMovie";


const Parent = ()=>{
    const [movieList, setMovies] = useState([
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    rating: "9.3",
    description: "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
  },
  {
    title: "Pulp Fiction",
    genre: "Crime, Drama",
    rating: "8.9",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    },
  {
    title: "The Dark Knight",
    genre: "Action, Crime, Drama",
    rating: "9.0",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    }]);

    // const [filteredMovies, setFelteredMovies] = useState(movieList);
    const getNewMovie = (newData)=>{
        console.log("inside parent, get new movie");
        // console.log(newData);
        setMovies(()=>
            [...movieList, {...newData}]
        );
    }

    return(
        <>
        <AddNewMovie getNewMovie={getNewMovie}/>
        <br/>
        <div>
            {movieList.map((m)=> <Movie key={uuid()}  title = {m.title} genre = {m.genre} rating ={m.rating} description={m.description} ></Movie> )}
        </div>
        </>
    );
};

export default Parent;