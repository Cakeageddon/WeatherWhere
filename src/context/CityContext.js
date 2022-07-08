import React, {createContext, useState, useEffect} from "react";

export const CityContext = createContext(null)

function CityContextProvider({children}) {
    const [cityList, setCityList] = useState([])

    useEffect(() => {
        const cityList = JSON.parse(localStorage.getItem('cities'));
        if (cityList) {
            setCityList(cityList);
        }
    },[])

    return (
        <CityContext.Provider value={[cityList, setCityList]}>
            { children }
        </CityContext.Provider>
    )
}

export default CityContextProvider