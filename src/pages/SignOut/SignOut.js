import React from "react";
import {useHistory} from "react-router-dom";
import "./SignOut.css"
import HeaderWeather from "../../components/header/HeaderWeather";
import NavBar from "../../components/navBar/NavBar";

function SignOut() {

    const history = useHistory()

    return (
        <div className="signout-background">
            <HeaderWeather/>
            <NavBar/>
        <div className="signout-outer-container">
            <div className="signout-button-text-container">
                <div className="signout-goodbye-text">
                    <p>U bent uitgelogd.</p>
                    <p>Een prettige dag en tot de volgende keer!</p>
                </div>
                <p>Foutje?</p>
                <button
                    type="button"
                    onClick={() => history.push("/login")}
                    className="signout-page-button"
                >
                    Log In
                </button>
                <p>Of</p>
                <button
                    type="button"
                    onClick={() => history.push("/")}
                    className="signout-page-button"
                >
                    Home
                </button>
            </div>
        </div>
        </div>
    )
}

export default SignOut
