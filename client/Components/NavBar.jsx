import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    
    <nav className="navbar">
      <NavLink className="ToDo" style= { ({isActive}) => ({fontWeight: isActive ? "bold" : "",})}>To Do</NavLink>
      <NavLink className="Home" style= { ({isActive}) => ({fontWeight: isActive ? "bold" : "",})}>Home</NavLink>
      <NavLink className="StudyZone" style= { ({isActive}) => ({fontWeight: isActive ? "bold" : "",})}>Study Zone</NavLink>
      <NavLink className="UserProfile">Username</NavLink>
        
    </nav>
     

  )
}
export default NavBar;
