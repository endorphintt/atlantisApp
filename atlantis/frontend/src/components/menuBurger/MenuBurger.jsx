import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuBurger.scss"
 
const MenuBurger = () => {
    return (
        <div className="menuBurger">
            <NavLink to='/main'>Home</NavLink>
            <NavLink to="/about">about</NavLink>
            <NavLink to='/blog'>blog</NavLink>
            <NavLink to='/offers'>offers</NavLink>
            <NavLink to='admin'>admin</NavLink>           
        </div>
    )
}

export default MenuBurger;
