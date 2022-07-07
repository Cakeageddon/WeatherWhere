import React, {useState} from 'react';
import StoredCity from "../storedCity/StoredCity";

function SearchBarStoreCity({setLocationHandler}) {
    const [query, setQuery] = useState('');
    const [savedCities, setSavedCities] = useState([])

    function handleClick() {
        setLocationHandler(query);
        addCity(query)
    }

    function keyPressCheck(e) {
        if (e.keyCode === 13) {
            setLocationHandler(query);
            addCity(query)
        }
    }

    function addCity(city) {
        setSavedCities(savedCities => [...savedCities, [city]])
    }

    function deleteCity(id) {
        let newCityList = savedCities.filter((savedCities) => savedCities.id !== id);
        setSavedCities([...newCityList])
    }

    console.log(savedCities)

    return (
        <>
        <span className="searchbar">
      <input
          type="text"
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={keyPressCheck}
          placeholder="Zoek een stad"
      />

      <button
          type="button"
          onClick={handleClick}
          disabled={savedCities.length === 5}
      >
        Zoek
      </button>
            <div className="savedCitiesContainer">
                {savedCities && savedCities.map((city) => {
                    const { id } = city
                    return (
                    <div key={id}>
                    <StoredCity cityName={city} />
                    <button
                        type="button"
                        onClick={() => deleteCity(id)}
                    >Verwijder</button>
                    </div>
                    )
                })}
            </div>
    </span>
    </>
    );
}

export default SearchBarStoreCity;
