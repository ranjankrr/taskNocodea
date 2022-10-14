import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar =()=>{
    return(
        <>
          <NavLink  exact activeClassName='active_class' to="/">Home</NavLink>
          <NavLink   activeClassName='active_class' to="/user">Adduser</NavLink>
          <NavLink   activeClassName='active_class' to="/blue">Blue</NavLink>
          <NavLink   activeClassName='active_class' to="/green">Green</NavLink>
          <NavLink   activeClassName='active_class' to="/yellow">Yellow</NavLink>
          
        </>
    )
}
export default Navbar;