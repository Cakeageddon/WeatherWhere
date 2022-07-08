import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Preferences from "../../components/preferences/Preferences";
import SearchBar from "../../components/searchBar/SearchBar";
import SaveCity from "../../components/saveCity/SaveCity";


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

    // useEffect(() => {
    //     function addCity(city) {
    //         setStoreCity([...storeCity, [city]]);
    //     }
    //     if (storeCity) {
    //         addCity();
    //     }
    // }, [])
    // console.log(storeCity)

    return (
        <>
            <h1>Profiel</h1>
            <h3>Opgeslagen steden:</h3>
            <SaveCity/>

            <Preferences/>
            <p>Wil je je wachtwoord veranderen? Klik dan <Link to="/wachtwoord-verandering">hier!</Link></p>
        </>
    )
}

export default Profile