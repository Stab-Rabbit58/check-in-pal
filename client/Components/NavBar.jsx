import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink
        className="ToDo"
        to="/todo"
        style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : '' })}
      >
        To Do
      </NavLink>
      <NavLink
        className="Home"
        to="/home"
        style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : '' })}
      >
        Home
      </NavLink>
      <NavLink
        className="Study"
        to="/study"
        style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : '' })}
      >
        Study
      </NavLink>
      <NavLink className="UserProfile">Username</NavLink>
      <NavLink to="/login" className="Logout">Logout</NavLink>
    </nav>
  //   <Box sx={{ flexGrow: 1 }}>
  //   <AppBar position="fixed">
  //     <Toolbar>
  //       <IconButton
  //         size="large"
  //         edge="start"
  //         color="inherit"
  //         aria-label="menu"
  //         sx={{ mr: 2 }}
  //       >
  //       </IconButton>
  //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
  //         News
  //       </Typography>
  //       <Button color="inherit">Login</Button>
  //     </Toolbar>
  //   </AppBar>
  // </Box>
  );
};
export default NavBar;
