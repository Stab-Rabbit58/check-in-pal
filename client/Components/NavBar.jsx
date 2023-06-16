import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Avatar, 
  Modal,
  Fade,
  Popper
 } from '@mui/material'
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';

const NavBar = () => {

  const reds = "#F47174"
  const secondaryRed = "#FC9C9E"
  const blues = "#AACEDB"
  const secondaryBlue = "#C0E3EF"
  const blacks = "black"
  const secondaryBlack = "#323232"
  const greens = "#bfe3b4"
  const secondaryGreen = "#D2F6C7"
  const purples = "#af64b5"
  const secondaryPurple = "#CE7CD5"

  useEffect(() => {
    setColor("blues")
    setSecondary("secondaryBlue")
  }, [])
  const [color, setColor] = useState('blues')
  const [secondary, setSecondary] = useState('secondaryBlue')

  const [open, setOpen] = useState(false)
  const colorChange = (color) => {
    setColor(color);
  }
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
        <Avatar whileHover={{}}className="UserProfile" type="button" onClick={handleClick} sx= {{ bgcolor: color }} style={{ border: `2px solid ${secondary}` }}> </Avatar>
    </nav>
    <Popper  open={open} placement='bottom-left' transition>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Box className ="profileModal" sx={{ border: "hidden", p: 1, bgcolor: 'background.paper' }}>
            <button className="modalButton" style={{backgroundColor: "#F47174"}} onClick={() => {setColor(reds); setSecondary(secondaryRed)}}></button>
            <button className="modalButton" style={{backgroundColor: '#AACEDB'}} onClick={() => {setColor(blues); setSecondary(secondaryBlue)}}></button>
            <button className="modalButton" style={{backgroundColor: 'black'}} onClick={() => {setColor(blacks); setSecondary(secondaryBlack)}}></button>
            <button className="modalButton" style={{ backgroundColor:'#bfe3b4'}} onClick={() => {setColor(greens); setSecondary(secondaryGreen)}}></button>
            <button className="modalButton" style={{ backgroundColor: "#af64b5" }} onClick={() => {setColor(purples); setSecondary(secondaryPurple)}}></button>
            <NavLink to="/login" className="Logout" ><Typography className="LogoutText">Logout</Typography></NavLink>
          </Box>
        </Fade>
      )}
      </Popper>
    </>

  )
}
export default NavBar;
