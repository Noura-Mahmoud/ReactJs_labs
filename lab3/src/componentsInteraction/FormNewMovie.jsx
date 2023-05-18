import React, { useState } from "react";
import "../Styles/formStyle.css"
const AddNewMovie = ({getNewMovie})=>{

    const [newMovie, setNewMovie] = useState({title:"", genre:"", rating:"", description:""});
    const handleSubmit = (e)=>{
        e.preventDefault();
        getNewMovie(newMovie);
        setNewMovie({ title: "", genre: "", rating: "", description: "" });
    }
    const handleChange=(e)=>{
        // console.log(e.target.name);
        // console.log(e.target.value);
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