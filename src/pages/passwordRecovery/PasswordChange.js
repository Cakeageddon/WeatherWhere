import React from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useHistory} from "react-router-dom";

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
            },{
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
        <>
            <h1>Wachtwoord aanpassing</h1>
            <form onSubmit={handleSubmit(changeSubmit)}>
                <label htmlFor="form-nieuw-wachtwoord">
                    Nieuw wachtwoord:
                    <input
                        type="text"
                        id="form-nieuw-wachtwoord"
                        {...register("password")}
                    />
                </label>
                <label htmlFor="form-nieuw-wachtwoord-herhaling">
                    Nieuw wachtwoord herhaald:
                    <input
                        type="text"
                        id="form-nieuw-wachtwoord-herhaald"
                        {...register("passwordRepeated")}
                    />
                </label>
                <button
                    type="submit"
                >Aanpassen
                </button>
            </form>
        </>
    )
}

export default PasswordChange