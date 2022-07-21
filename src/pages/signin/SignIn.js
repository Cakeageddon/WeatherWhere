import React, {useContext} from "react";
import {useForm} from "react-hook-form";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";
import "./Signin.css"

function SignIn() {
    const {register, handleSubmit} = useForm();
    const {login} = useContext(AuthContext)

    async function handleLogin(data) {
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
        }
    }

    return (
        <div className="signin-outer-container">
            <div className="signin-form-container">
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
                    >Inloggen
                    </button>
                </form>
                <p>Geen account? Dat kan ook.</p>
                <p>Wil je er toch een? Klik dan <Link to="/registratie">hier!</Link></p>
            </div>
        </div>
    )
}

export default SignIn