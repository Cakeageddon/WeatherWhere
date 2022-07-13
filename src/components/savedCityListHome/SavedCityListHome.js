import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {CityContext} from "../../context/CityContext";
import {PreferencesContext} from "../../context/PreferencesContext";
import WeatherHomeCard from "../weatherHomeCard/WeatherHomeCard";


function SavedCityListHome() {
    const [cityList] = useContext(CityContext)
    const [preferencesList] = useContext(PreferencesContext)
    const [cityListWeatherData, setCityListWeatherData] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        const exec = async () => {
            setError(false)
            try {
                const cityListWeather = await Promise.all(cityList.map(city => {
                    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.location}&appid=${process.env.REACT_APP_API_KEY}&lang=nl`)
                }))
                const filteredArr = cityListWeather.map((data) => {
                    return {
                        data: data.data
                    }
                });
                const changedArray = filteredArr.map((city) => {
                    const weightedTemperature = ((city.data.main.temp / 100) * preferencesList.preferredWeather.temperature)
                    const weightedCloudiness = ((city.data.clouds.all / 100) * preferencesList.preferredWeather.cloudiness)
                    const weightedWindspeed = ((city.data.wind.speed / 100) * preferencesList.preferredWeather.windspeed)
                    const weightedScore = (weightedTemperature + weightedCloudiness + weightedWindspeed)
                    return city.data = {...city.data, score: weightedScore};
                });
                changedArray.sort((a, b) => b.score - a.score)
                setCityListWeatherData(changedArray)
            } catch (e) {
                console.error(e)
                setError(true)
            }
        }
        exec();
    }, [cityList])


    console.log(cityListWeatherData)


    return (

        error ?
            <div>
                <p>Het ziet ernaar uit dat er iets mis is gegaan met het ophalen van gegevens.</p>
                <p>Kijk de stadsnamen in jouw profiel nog eens na en wijzig ze desnoods en kom dan terug.</p>
            </div>
            :
            <div className="weatherCards">
                {cityListWeatherData && cityListWeatherData.map((cityWeather) => {
                    return <WeatherHomeCard
                        name={cityWeather.name}
                        tempK={cityWeather.main.temp}
                        score={cityWeather.score}
                        weatherMain={cityWeather.weather[0].main}
                        weatherDescription={cityWeather.weather[0].description}
                        windDegree={cityWeather.wind.deg}
                        weatherWindSpeed={cityWeather.wind.speed}
                        humidity={cityWeather.main.humidity}
                        clouds={cityWeather.clouds.all}
                    />
                })}
            </div>
    )
}

export default SavedCityListHome