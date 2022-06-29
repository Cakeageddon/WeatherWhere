import React from "react";
import {
    Switch,
    Route,
} from 'react-router-dom';


import './App.css';


import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import SignIn from "./pages/signin/SignIn";
import PasswordRecovery from "./pages/passwordRecovery/PasswordRecovery";
import SignUp from "./pages/signup/SignUp";
import Profile from "./pages/profile/Profile";
import SignOut from "./pages/SignOut/SignOut";


function App() {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/login">
                    <SignIn/>
                </Route>
                <Route exact path="/wachtwoord-herstel">
                    <PasswordRecovery/>
                </Route>
                <Route exact path="/registratie">
                    <SignUp/>
                </Route>
                <Route exact path="/profiel">
                    <Profile/>
                </Route>
                <Route exact path="/loguit">
                    <SignOut/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
