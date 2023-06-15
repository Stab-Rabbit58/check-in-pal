import React from 'react';
import Navbar from './NavBar.jsx';
import SearchBar from './SearchBar.jsx';
import { useState, useEffect } from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <SearchBar />
    </div>
  );
};

export default Home;
