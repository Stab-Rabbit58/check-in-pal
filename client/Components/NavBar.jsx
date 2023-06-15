import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    
    <nav className="navbar">
      <NavLink className="ToDo" to="/todo" style= { ({isActive}) => ({fontWeight: isActive ? "bold" : "",})}>To Do</NavLink>
      <NavLink className="Home" to='/home' style= { ({isActive}) => ({fontWeight: isActive ? "bold" : "",})}>Home</NavLink>
      <NavLink className="Study" to='/study' style= { ({isActive}) => ({fontWeight: isActive ? "bold" : "",})}>Study</NavLink>
      <NavLink className="UserProfile">Username</NavLink>
        
    </nav>
     

  )
}
export default NavBar;
