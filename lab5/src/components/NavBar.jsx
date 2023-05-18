import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ background: '#f2f2f2', padding: '10px' }}>
      <Link to="/">Home</Link>
      <span style={{ margin: '0 10px' }}>|</span>
      <Link to="/movies">All Movies</Link>
      <span style={{ margin: '0 10px' }}>|</span>
      <Link to="/movies/add">Add Movie</Link>
    </div>
  );
};

export default NavBar;
