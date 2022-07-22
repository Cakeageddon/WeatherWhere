import React, {useContext, useEffect, } from "react";
import {useForm} from "react-hook-form";
import {PreferencesContext} from "../../context/PreferencesContext";

function Preferences() {
    const [preferencesList, setPreferencesList] = useContext(PreferencesContext)

    const {register, handleSubmit, watch} = useForm({
        defaultValues: {
            temperature: preferencesList.preferredWeather.temperature,
            cloudiness: preferencesList.preferredWeather.cloudiness,
            windspeed: preferencesList.preferredWeather.windspeed,
        }
    });
    const watchTemperature = watch("temperature")
    const watchCloudiness = watch("cloudiness")
    const watchWindspeed = watch("windspeed")

    const onSubmit = data => {
        console.log(data);
        if (data) {
            let uniqueId =
                new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
            let newPreferences = {
                id: uniqueId,
                preferredWeather: data,
            };
            setPreferencesList(newPreferences);
        }
    };


    useEffect(() => {
        localStorage.setItem('preferences', JSON.stringify(preferencesList))
    }, [preferencesList])


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="preferences-input-wrapper">
                <p>Temperatuurvoorkeur in %</p>
                <p>Koud<input type="range" placeholder="temperature" {...register("temperature", {})}/>Warm</p>
            </div>
            <div className="preferences-input-wrapper">
                <p>Bewolking: {watchCloudiness} %</p>
                <input type="range" placeholder="cloudiness" {...register("cloudiness", {})} />
            </div>
            <div className="preferences-input-wrapper">
                <p>Wind op schaal van beaufort:</p>
                <input type="range" placeholder="windspeed" max="12" {...register("windspeed", {})} />
                <p>Schaal: {watchWindspeed}</p>
            </div>
            <button
                type="submit"
                className="profile-button"
            >Opslaan
            </button>
        </form>
    )
}

export default Preferences