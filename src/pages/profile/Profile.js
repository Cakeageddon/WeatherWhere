import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Preferences from "../../components/preferences/Preferences";
import SearchBar from "../../components/searchBar/SearchBar";


function Profile() {
    const [location, setLocation] = useState('');
    const [error, setError] = useState(false);
    const [cityData, setCityData] = useState([]);
    const [storeCity, setStoreCity] = useState([]);


    useEffect(() => {
        async function getWeatherData() {
            setError(false);

            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&lang=nl`);
                setCityData(result.data)
                addCity(cityData)
            } catch (e) {
                console.error(e);
                setError(true);
            }

        }

        if (location) {
            getWeatherData();
        }

    }, [location]);

    // function addCity(cityData) {
    //     let cityList = JSON.parse(localStorage.getItem('cities') || [] )
    //     let city = cityData
    //     cityList.push(city)
    //     localStorage.setItem('cities', JSON.stringify(cityList))
    // }

    // function addCityTwo(cityData) {
    //     const cityListTwo = localStorage.getItem('cities')
    //     return cityListTwo === null ? [] : JSON.parse(cityListTwo)
    //     cityListTwo.push(cityData)
    //     localStorage.setItem('cities', JSON.stringify(cityListTwo))
    // }

    function addCity(city) {
        let cityList = [];
        cityList.push(city)
        cityList = cityList.concat(JSON.parse(localStorage.getItem('cities')||'[]'))
        console.log(cityList)
        localStorage.setItem('cities', JSON.stringify(cityList))
        }

    // const cities = (() => {
    //     const cityValue = localStorage.getItem('cities');
    //     return cityValue === null
    //     ? []
    //         : JSON.parse(cityValue)
    // })();
    // cities.push(cityData)
    // localStorage.setItem('cities', JSON.stringify(cities))
    // const cityTest = JSON.parse(localStorage.getItem('cities'))
    // console.log(cityTest)
    // localStorage.setItem('cities',JSON.stringify(result.data));

    return (
        <>
            <h1>Profiel</h1>
            <h3>Opgeslagen steden:</h3>
            <SearchBar setLocationHandler={setLocation}/>

            <Preferences/>
            <p>Wil je je wachtwoord veranderen? Klik dan <Link to="/wachtwoord-verandering">hier!</Link></p>
        </>
    )
}

export default Profile