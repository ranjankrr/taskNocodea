import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar =()=>{
    return(
        <>
        <div className="navbar">
          <NavLink  exact activeClassName='active_class' to="/">NewRegister</NavLink>
          <NavLink  exact activeClassName='active_class' to="/about">Login</NavLink>
          <NavLink  exact activeClassName='active_class' to="/skills">Admin</NavLink>
          
        </div>
        </>
    )
}
export default Navbar;