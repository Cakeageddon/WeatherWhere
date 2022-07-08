import React, {useState, useEffect} from "react";

function SaveCity() {
    const [cityList, setCityList] = useState([])
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
        const cityList = JSON.parse(localStorage.getItem('cities'));
        if (cityList) {
            setCityList(cityList);
        }
    },[])

    useEffect(() => {
        localStorage.setItem('cities', JSON.stringify(cityList));
    },[cityList])

    return (
        <div className="save-city-container">
            <div className="save-city-form-contrainer">
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    value={city}
                    className={error ? 'error' : ''}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Voer hier de stad in"
                    />
                    <button type="submit" className="button">
                        Voeg stad toe
                    </button>
                </form>
            </div>
            <div className="saved-cities-container">
                {cityList.map((city) => {
                    const { id, cityName } = city;
                    return (
                        <div key={id} className="city-card">
                            <p className="city">{cityName}</p>
                            <button
                                type="button"
                                onClick={() => deleteCity(id)}
                                className="button"
                                />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}


export default SaveCity