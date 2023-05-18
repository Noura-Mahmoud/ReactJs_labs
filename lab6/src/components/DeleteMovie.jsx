import React, { useEffect } from "react";
import "../Styles/formStyle.css"
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { deleteMovie } from "../redux/actionCreators/moviesActions";

const DeleteMovie = ()=>{
    const dispatch = useDispatch();
    const movieId=useParams().id;
    const navigate = useNavigate();
    
    useEffect(()=>{
        dispatch(deleteMovie(movieId));
        navigate("/movies");
    },[movieId, navigate, dispatch]);
    
    return(
        
    <div>
      deleteeeeeee
    </div>
    );
};

export default DeleteMovie;