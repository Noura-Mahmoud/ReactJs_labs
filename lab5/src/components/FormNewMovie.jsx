import React, { useContext, useState } from "react";
import "../Styles/formStyle.css"
import { MoviesContext } from '../Modules/MoviesModule';

import { useNavigate } from "react-router-dom";

const AddNewMovie = ()=>{

  const {addMovie} = useContext(MoviesContext);

    const navigate = useNavigate();
    const [newMovie, setNewMovie] = useState({title:"", genre:"", rating:"", description:""});
    const handleSubmit = (e)=>{
        e.preventDefault();
        addMovie(newMovie);
        setNewMovie({ title: "", genre: "", rating: "", description: "" });
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
        name="genre"
        value={newMovie.genre}
        onChange={handleChange}
        className="input"
      />
      <br />
      <label>Rating:</label>
      <input
        type="text"
        name="rating"
        value={newMovie.rating}
        onChange={handleChange}
        className="input"
      />
      <br />
      <label>Description:</label>
      <input
        type="text"
        name="description"
        value={newMovie.description}
        onChange={handleChange}
        className="input"
      />
      <br />
      <input type="submit" className="button" />
    </form>
    );
};

export default AddNewMovie;