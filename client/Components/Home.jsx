import React from 'react';
import Navbar from './NavBar.jsx';
import SearchBar from './SearchBar.jsx';
import { useState, useEffect } from 'react';

const Home = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
    </>
  );
};

export default Home;
