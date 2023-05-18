import React, { useState } from "react";
import "../Styles/formStyle.css"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/actionCreators/moviesActions";

const AddNewMovie = ()=>{

  const dispatch = useDispatch();

    const navigate = useNavigate();
    const [newMovie, setNewMovie] = useState({title:"", genre_ids:"", popularity:"", overview:"", original_title:"", original_language:""});
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addMovie(newMovie));
        setNewMovie({title:"", genre_ids:"", popularity:"", overview:"", original_title:"", original_language:""});
        navigate("/movies");
    }
    const handleChange=(e)=>{
    setNewMovie(()=>({...newMovie, [e.target.name]: e.target.value}));
    };
    return(
        <form onSubmit={handleSubmit} className="form"><label>Title:</label>
      <input
        type="text"
        name="title"
        value={newMovie.title}
        onChange={handleChange}
        className="input"
      />
      <br />
      <label>Genre:</label>
      <input
        type="text"
        name="genre_ids"
        value={newMovie.genre_ids}
        onChange={handleChange}
        className="input"
      />
      <br />
      <label>Rating:</label>
      <input
        type="text"
        name="popularity"
        value={newMovie.popularity}
        onChange={handleChange}
        className="input"
      />
      <br />
      <label>Description:</label>
      <input
        type="text"
        name="overview"
        value={newMovie.overview}
        onChange={handleChange}
        className="input"
      />
      <br />
      <label>Languages:</label>
      <input
        type="text"
        name="original_language"
        value={newMovie.original_language}
        onChange={handleChange}
        className="input"
      />
      <br />
      <label>Original Title:</label>
      <input
        type="text"
        name="original_title"
        value={newMovie.original_title}
        onChange={handleChange}
        className="input"
      />
      <br />
      <input type="submit" className="button" />
    </form>
    );
};

export default AddNewMovie;