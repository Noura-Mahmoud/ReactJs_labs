import React, { useContext, useEffect } from "react";
import "../Styles/formStyle.css"
import { MoviesContext } from '../Modules/MoviesModule';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteMovie = ()=>{

    const {movieList, deleteMovie}=useContext(MoviesContext);

    const movieId=useParams().id;

    const navigate = useNavigate();
    
    useEffect(()=>{
        deleteMovie(movieId);
        navigate("/movies");
    },[movieId,movieList]);
    
    return(
        
    <div>
      deleteeeeeee
    </div>
    );
};

export default DeleteMovie;