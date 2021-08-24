import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { BITrash } from "react-icons/bi"

const handleSignOut = () => {
axios.delete("https://api.devcamp.space/logout", {withCredentials: true}).then(response => {
    if(response.status === 200) {
    props.history.push("/");
    props.handleSuccessfulLogout();
    }
    return response.data; 
}).catch( error => {
    console.log("error signing out", error);
});

};


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
                        Login
                    </NavLink>
                </div>


                <div className="nav-link-wrapper">
                    <NavLink exact to="/signup" activeClassName="nav-link-active">
                        Sign Up
                    </NavLink>
                </div>
            </div>

            <div className="right-side">
                Paul Southworth
                
                <a onClick={handleSignOut}>Sign Out</a>

                
                
                                
            </div>
            
        </div>
    )
}

export default Navigation;