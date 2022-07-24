import React from "react";
import {useHistory} from "react-router-dom";
import "./SignOut.css"
import SignoutBackground from "../../assets/backgrounds/birch-forest-sunny-afternoon-while-autumn-season.jpg";

function SignOut() {

    const history = useHistory()

    return (
        <div className="signout-outer-container"
             style={
                 {
                     background: `url(${SignoutBackground})`,
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center"
                 }}>
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
    )
}

export default SignOut
