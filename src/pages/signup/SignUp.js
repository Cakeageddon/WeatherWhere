import React from "react";
import {ErrorMessage} from "@hookform/error-message";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useHistory} from "react-router-dom";
import "./signUp.css"
import HeaderWeather from "../../components/header/HeaderWeather";
import NavBar from "../../components/navBar/NavBar";

function SignUp() {
    const {
        register,
        formState: {errors},
        handleSubmit
    } = useForm({
        criteriaMode: "all"
    });

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
                                {...register("username", {
                                    required: "Dit moet ingevuld zijn",
                                    minLength: {
                                        value: 6,
                                        message: "De minimale lengte dient 6 karakters te zijn."
                                    }
                                })}
                                className="signup-input-field"
                            />
                            <ErrorMessage
                                errors={errors}
                                name="username"
                                render={({message}) => <p className="signup-error-message">{message}</p>}
                            />
                        </label>

                        <label htmlFor="form-email" className="signup-input-container">
                            <p>Email:</p>
                            <input
                                type="text"
                                id="form-email"
                                {...register("email",
                                    {
                                        required: "Dit moet ingevuld zijn.",
                                        pattern: {
                                            value: /^(.+)@(.+)$/,
                                            message: "Het e-mailadres heeft een '@' nodig."
                                        }
                                    })}
                                className="signup-input-field"
                            />
                            <ErrorMessage
                                errors={errors}
                                name="email"
                                render={({message}) => <p className="signup-error-message">{message}</p>}
                            />
                        </label>

                        <label htmlFor="form-wachtwoord" className="signup-input-container">
                            <p>Wachtwoord:</p>
                            <input
                                type="password"
                                id="form-wachtwoord"
                                {...register("password",
                                    {
                                        required: "Dit moet ingevuld zijn",
                                        minLength: {
                                            value: 6,
                                            message: "De minimale lengte dient 6 karakters te zijn."
                                        }
                                    })}
                                className="signup-input-field"
                            />
                            <ErrorMessage
                                errors={errors}
                                name="password"
                                render={({message}) => <p className="signup-error-message">{message}</p>}
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