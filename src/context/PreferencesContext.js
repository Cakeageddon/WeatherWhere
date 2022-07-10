import React, {createContext, useState, useEffect} from "react";

export const PreferencesContext = createContext(null)

function PreferencesContextProvider({children}) {
    const [preferencesList, setPreferencesList] = useState({
        preferredWeather: 0
    })

    useEffect(() => {
        const preferencesList = JSON.parse(localStorage.getItem('preferences'));
        if (preferencesList) {
            setPreferencesList(preferencesList);
        }
    },[])

    return (
        <PreferencesContext.Provider value={[preferencesList, setPreferencesList]}>
            { children }
        </PreferencesContext.Provider>
    )
}

export default PreferencesContextProvider