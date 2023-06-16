import React from 'react';
import { Paper, FormGroup, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <motion.div className="search-container" initial={{opacity: 0, scale: 0.75}} animate={{opacity: 1, scale:1}} transition={{delay: 1.5}}>
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
    </motion.div>
  );
};

export default SearchBar;
