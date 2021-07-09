import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="nav-links-wrapper">
            <NavLink exact to="/">
                Home
            </NavLink>

            <NavLink to="/about">
                About
            </NavLink>

            <NavLink to="/portfolio">
                Portfolio
            </NavLink>

            <NavLink to="/contact">
                Contact
            </NavLink>

            <NavLink to="/extra">
                Extra   
            </NavLink>
        </div>
    )
}

export default Navigation;