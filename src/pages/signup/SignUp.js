import React from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useHistory} from "react-router-dom";
import "./signUp.css"
import HeaderWeather from "../../components/header/HeaderWeather";
import NavBar from "../../components/navBar/NavBar";

function SignUp() {
    const {register, handleSubmit} = useForm();
    const history = useHistory()

    async function registrationSubmit(data) {
        try {
            await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signup`, {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                }
            )
            history.push('/login')
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className="signup-background">
            <HeaderWeather/>
            <NavBar/>
        <div className="signup-outer-container">
            <div className="signup-form-container">
                <p>Vul de velden hieronder in om jezelf te registreren.</p>
            <form onSubmit={handleSubmit(registrationSubmit)} className="signup-form">
                <label htmlFor="form-gebruikersnaam" className="signup-input-container">
                    <p>Gebruikersnaam:</p>
                    <input
                        type="text"
                        id="form-gebruikersnaam"
                        {...register("username")}
                        className="signup-input-field"
                    />
                </label>
                <label htmlFor="form-email" className="signup-input-container">
                    <p>Email:</p>
                    <input
                        type="text"
                        id="form-email"
                        {...register("email")}
                        className="signup-input-field"
                    />
                </label>
                <label htmlFor="form-wachtwoord" className="signup-input-container">
                    <p>Wachtwoord:</p>
                    <input
                        type="password"
                        id="form-wachtwoord"
                        {...register("password")}
                        className="signup-input-field"
                    />
                </label>

                <button
                    type="submit"
                    className="signup-button"
                >Registreren
                </button>
            </form>
            </div>
        </div>
        </div>
    )
}

export default SignUp