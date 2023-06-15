import React from 'react';
import { Paper, FormGroup, TextField, Button } from '@mui/material';

const SearchBar = () => {
  return (
    <div className="search-container">
        <FormGroup>
          <form
            action="https://www.google.com/search"
            method="get"
            className="search-bar">
            <TextField label="Google search ..." className='search-box'/>
            <Button type="submit" variant="contained">
              Search
            </Button>
          </form>
        </FormGroup>
    </div>
  );
};

export default SearchBar;
