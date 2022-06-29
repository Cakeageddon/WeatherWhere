import React from "react";
import {NavLink} from "react-router-dom";

function NavBar() {


    return (
        <nav>
            <div className="nav-outer-container">
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" exact
                                 activeClassName="active-link"
                                 >
                            Home
                        </NavLink>
                        <NavLink to="/login"
                                 activeClassName="active-link"
                        >
                            Log in
                        </NavLink>
                        <NavLink to="/profiel"
                                 activeClassName="active-link"
                        >
                            Profiel
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar