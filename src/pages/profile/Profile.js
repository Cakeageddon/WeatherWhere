import React from "react";
import {Link} from "react-router-dom";
import Preferences from "../../components/preferences/Preferences";
import SaveCity from "../../components/saveCity/SaveCity";
import "./Profile.css"
import profileBackground from "../../assets/backgrounds/beautiful-shot-misty-foggy-mysterious-forest.jpg"

function Profile() {

    return (
        <div className="profile-outer-container"
             style={
                 {
                     background: `url(${profileBackground})`,
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center"
                 }}>
            <div className="profile-text-city-pref-container">
                <div className="profile-text-container">
                    <p>Pas op deze pagina jouw opgeslagen steden en voorkeuren aan naar jouw wensen.</p>
                </div>

                <div className="profile-city-and-preferences-container">
                    <div className="profile-saved-cities-container">
                        <SaveCity/>
                    </div>
                    <div className="profile-preferences-container">
                        <Preferences/>
                    </div>
                </div>
            </div>

            <div className="profile-sidebar-container">
                <p>Wil je je wachtwoord veranderen? Klik dan <Link to="/wachtwoord-verandering">hier!</Link></p>
            </div>
        </div>
    )
}

export default Profile