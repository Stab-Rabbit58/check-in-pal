import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Avatar, 
  Box,
  Modal,
  Popper
 } from '@mui/material'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    if (open === false) setOpen(true);
    else setOpen(false)
  }
  return (
    <>
      <nav className="navbar">
        <NavLink className="ToDo" to="/todo" style= { ({isActive}) => ({fontWeight: isActive ? "bold" : "",})}>To Do</NavLink>
        <NavLink className="Home" to='/home' style= { ({isActive}) => ({fontWeight: isActive ? "bold" : "",})}>Home</NavLink>
        <NavLink className="Study" to='/study' style= { ({isActive}) => ({fontWeight: isActive ? "bold" : "",})}>Study</NavLink>
        <Avatar className="UserProfile" type="button" onClick={handleClick}> </Avatar>
      </nav>
      <Popper  open={open} placement='bottom-left'>
         <Box className ="profileModal" sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
            content
         </Box>
      </Popper>
    </>

  )
}
export default NavBar;
