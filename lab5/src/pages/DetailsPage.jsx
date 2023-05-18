import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MoviesContext } from '../Modules/MoviesModule';
import "../Styles/detailsStyling.module.css"

const DetailsPage = () => {
    const {movieList}=useContext(MoviesContext);
 const navigate=useNavigate();
    const movieId=useParams().id;
   const [movieInfo,setMovieInfo]=useState(null);
    useEffect(()=>{
     
        const movieDetail=movieList.find((m)=>{
            return m.id=== movieId});

        if (!movieDetail) navigate("/notFound")
        setMovieInfo(movieDetail)
    },[movieId,movieList])
    return (
        <div style={{ backgroundColor: '#e6e6e6', padding: '10px', border: '3px solid red', borderRadius: '20px', width: '30%', margin: '20px auto' }}>
      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold', marginRight: '5px' }}>Id:</span>
        {movieId}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold', marginRight: '5px' }}>Title:</span>
        {movieInfo?.title}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold', marginRight: '5px' }}>Director:</span>
        {movieInfo?.director}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold', marginRight: '5px' }}>Genre:</span>
        {movieInfo?.genre}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold', marginRight: '5px' }}>Duration:</span>
        {movieInfo?.duration}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold', marginRight: '5px' }}>Rating:</span>
        {movieInfo?.rating}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold', marginRight: '5px' }}>Description:</span>
        {movieInfo?.description}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold', marginRight: '5px' }}>Production Company:</span>
        {movieInfo?.productionCompany}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold', marginRight: '5px' }}>Country:</span>
        {movieInfo?.country}
      </div>
    </div>
    );
};

export default DetailsPage;