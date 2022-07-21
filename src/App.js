import React from "react";
import {
    Switch,
    Route,
} from 'react-router-dom';


import './App.css';


import NavBar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import SignIn from "./pages/signin/SignIn";
import PasswordChange from "./pages/passwordChange/PasswordChange";
import SignUp from "./pages/signup/SignUp";
import Profile from "./pages/profile/Profile";
import SignOut from "./pages/SignOut/SignOut";
import PrivateRoute from "./helpers/PrivateRoute";
import HeaderWeather from "./components/header/HeaderWeather";


function App() {
    return (
        <>
            <HeaderWeather/>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/login">
                    <SignIn/>
                </Route>
                <PrivateRoute exact path="/wachtwoord-verandering">
                    <PasswordChange/>
                </PrivateRoute>
                <Route exact path="/registratie">
                    <SignUp/>
                </Route>
                <PrivateRoute exact path="/profiel">
                    <Profile/>
                </PrivateRoute>
                <Route exact path="/loguit">
                    <SignOut/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
