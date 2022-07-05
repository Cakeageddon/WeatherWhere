import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

function NavBar() {
    const {loggedIn, logout} = useContext(AuthContext)

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
                        {loggedIn ? <button
                            type="button"
                            onClick={logout}
                        >
                            Log Uit
                        </button> : <NavLink
                            to="/login"
                            activeClassName="active-link"
                        >
                            Log in
                        </NavLink>}
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