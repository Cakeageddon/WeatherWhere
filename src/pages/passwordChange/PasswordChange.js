import React from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useHistory} from "react-router-dom";
import "./PasswordChange.css"
import HeaderWeather from "../../components/header/HeaderWeather";
import NavBar from "../../components/navBar/NavBar";

function PasswordChange() {
    const {register, handleSubmit} = useForm();
    const history = useHistory()
    const jwt = localStorage.getItem('token')

    async function changeSubmit(data) {
        console.log(data)
        try {
            await axios.put(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                    password: data.password,
                    repeatedPassword: data.passwordRepeated,
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${jwt}`,
                    }
                }
            )
            history.push('/profiel')
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className="passwordchange-background">
            <HeaderWeather/>
            <NavBar/>
        <div className="passwordchange-outer-container">
            <div className="passwordchange-form-container">
                <p>Vul de velden hieronder in om het wachtwoord aan te passen.</p>
                <form onSubmit={handleSubmit(changeSubmit)} className="passwordchange-form">
                    <label htmlFor="form-nieuw-wachtwoord" className="passwordchange-input-container">
                        <p>Nieuw wachtwoord:</p>
                        <input
                            type="text"
                            id="form-nieuw-wachtwoord"
                            {...register("password")}
                        />
                    </label>
                    <label htmlFor="form-nieuw-wachtwoord-herhaling" className="passwordchange-input-container">
                        <p>Nieuw wachtwoord herhaald:</p>
                        <input
                            type="text"
                            id="form-nieuw-wachtwoord-herhaald"
                            {...register("passwordRepeated")}
                        />
                    </label>
                    <button
                        type="submit"
                        className="passwordchange-button"
                    >Aanpassen
                    </button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default PasswordChange