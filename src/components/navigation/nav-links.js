import React from "react";
import { NavLink } from "react-router-dom";



const Navigation = () => {
    return (
        <div className="nav-wrapper">


            

            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Home
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink exact to="/about" activeClassName="nav-link-active">
                        About
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink exact to="/portfolio" activeClassName="nav-link-active">
                        Portfolio
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink exact to="/contact" activeClassName="nav-link-active">
                        Contact
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink exact to="/extra" activeClassName="nav-link-active">
                        Extra
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink exact to="/auth" activeClassName="nav-link-active">
                        Auth
                    </NavLink>
                </div>
            </div>

            <div className="right-side">
                Paul Southworth

                                   
            </div>
            
        </div>
    )
}

export default Navigation;