import React from 'react';
import Navbar from './NavBar.jsx'
import SearchBar from './SearchBar.jsx'


// search engine id: c79e9538a8cea4634
// google search api key: AIzaSyCTsZsDBqz4KFkAjYLV1EftC126Pgf5yVU
// GET https://customsearch.googleapis.com/customsearch/v1
const Home = () => {

    return (
        <>
            <Navbar />
            <SearchBar />
        </>
    )
}

export default Home;