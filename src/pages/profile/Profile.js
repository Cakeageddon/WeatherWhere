import React from "react";
import {Link} from "react-router-dom";
import Preferences from "../../components/preferences/Preferences";
import SaveCity from "../../components/saveCity/SaveCity";
import "./Profile.css"
import HeaderWeather from "../../components/header/HeaderWeather";
import NavBar from "../../components/navBar/NavBar";

function Profile() {

    return (
        <div className="profile-background">
            <HeaderWeather/>
            <NavBar/>
            <div className="profile-outer-container">
                <div className="profile-text-city-pref-container">
                    <span className="profile-text-container">
                        <p>Pas op deze pagina jouw opgeslagen steden en voorkeuren aan naar jouw wensen.</p>
                    </span>
                    <div className="profile-city-and-preferences-container">
                        <section className="profile-saved-cities-container">
                            <SaveCity/>
                        </section>
                        <section className="profile-preferences-container">
                            <Preferences/>
                        </section>
                    </div>
                </div>
                <aside className="profile-sidebar-container">
                    <p>Wil je je wachtwoord veranderen? Klik dan <Link to="/wachtwoord-verandering">hier!</Link></p>
                </aside>
            </div>
        </div>
    )
}

export default Profile