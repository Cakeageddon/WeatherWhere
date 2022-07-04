import React, {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {Redirect, Route} from "react-router-dom";

function PrivateRoute({children, isAuth, ...rest}) {
    const {loggedIn} = useContext(AuthContext)

    return (
        <Route {...rest}>
            {loggedIn ? children : <Redirect to='/login'/>}
        </Route>
    )
}

export default PrivateRoute