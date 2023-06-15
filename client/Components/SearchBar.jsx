import React from 'react';
import { Paper, FormGroup, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <div className="search-container">
      <FormGroup>
        <form
          action="https://www.google.com/search"
          method="get"
          className="search-bar">
          <input placeholder="Google search ..." className='search-box' name="q" />
          <button type="submit" variant="contained">
            <SearchIcon />
          </button>
        </form>
      </FormGroup>
    </div>
  );
};

export default SearchBar;
