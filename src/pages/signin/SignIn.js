import React, {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";
import "./Signin.css"
import HeaderWeather from "../../components/header/HeaderWeather";
import NavBar from "../../components/navBar/NavBar";

function SignIn() {
    const {register, handleSubmit} = useForm();
    const {login} = useContext(AuthContext)
    const [error, setError] = useState(false);

    async function handleLogin(data) {
        setError(false)
        console.log(data)
        try {
            const result = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signin`, {
                    username: data.username,
                    password: data.wachtwoord,
                }
            )
            console.log(result)
            login(result.data.accessToken)
        } catch (e) {
            console.error(e)
            setError(true)
        }
    }

    return (
        <div className="signin-background">
            <HeaderWeather/>
            <NavBar/>
            <div className="signin-outer-container">
                <section className="signin-form-container">
                    <p>Vul de velden hieronder in om in te loggen.</p>
                    <form onSubmit={handleSubmit(handleLogin)} className="signin-form">
                        <label htmlFor="form-email" className="signin-input-container">
                            <p>Gebruikersnaam:</p>
                            <input
                                type="text"
                                id="form-username"
                                {...register("username")}
                                placeholder="gebruikersnaam"
                                className="signin-input-field"
                            />
                        </label>
                        <label htmlFor="form-wachtwoord" className="signin-input-container">
                            <p>Wachtwoord:</p>
                            <input
                                type="password"
                                id="form-wachtwoord"
                                {...register("wachtwoord")}
                                placeholder="wachtwoord"
                                className="signin-input-field"
                            />
                        </label>

                        <button
                            type="submit"
                            className="signin-button"
                        >Inloggen
                        </button>

                        {error === true ?
                            <p>Deze inloggegevens kloppen niet; kijk je spelling na en probeer opnieuw.</p> : null}

                    </form>
                    <p>Geen account? Dat kan ook.</p>
                    <p>Wil je er toch een? Klik dan <Link to="/registratie">hier!</Link></p>
                </section>
            </div>
        </div>
    )
}

export default SignIn