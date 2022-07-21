import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Preferences from "../../components/preferences/Preferences";
import SearchBar from "../../components/searchBar/SearchBar";
import SaveCity from "../../components/saveCity/SaveCity";
import "./Profile.css"


function Profile() {
    const [location, setLocation] = useState('');
    const [error, setError] = useState(false);
    const [cityData, setCityData] = useState([]);
    const [storeCity, setStoreCity] = useState([]);


    // useEffect(() => {
    //     async function getWeatherData() {
    //         setError(false);
    //
    //         try {
    //             const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&lang=nl`);
    //             setCityData(result.data)
    //         } catch (e) {
    //             console.error(e);
    //             setError(true);
    //         }
    //
    //     }
    //
    //     if (location) {
    //         getWeatherData();
    //     }
    //
    // }, [location]);

    return (
        <div className="profile-outer-container">
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