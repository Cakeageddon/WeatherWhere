import React, {useState, useEffect, useContext} from "react";
import {CityContext} from "../../context/CityContext";
import "./SaveCity.css"

function SaveCity() {
    const [cityList, setCityList] = useContext(CityContext)
    const [city, setCity] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city) {
            setError(false);
            let uniqueId =
                new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
            let newCity = {
                id: uniqueId,
                location: city,
            };
            setCityList([newCity, ...cityList]);
            setCity('');
        } else {
            setError(true);
            setCity('');
        }
    };

    const deleteCity = (id) => {
        let newCityList = cityList.filter((city) => city.id !== id);
        setCityList([...newCityList])
    }

    useEffect(() => {
        localStorage.setItem('cities', JSON.stringify(cityList));
    }, [cityList])

    return (
        <section className="savecity-container">
            <p>Opgeslagen steden: (Max 5)</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={city}
                    className={error ? 'error' : 'city-input'}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Voer hier de stad in"
                />
                <button type="submit" className="button" disabled={cityList.length === 5}>
                    Voeg stad toe
                </button>
            </form>
            <section className="saved-cities-container">
                {cityList.map((city) => {
                    const {id, location} = city;
                    return (
                        <article key={id} className="city-card">
                            <p className="city">{location}</p>
                            <button
                                type="button"
                                onClick={() => deleteCity(id)}
                                className="button"
                            > Verwijder Stad
                            </button>
                        </article>
                    );
                })}
            </section>
        </section>
    );
}


export default SaveCity