import React, {createContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext({})

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const history = useHistory();

    useEffect(() => {
        const jwt = localStorage.getItem('token')
        if (jwt) {
            fetchUserData(jwt)
        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, [])

    function login(jwt) {
        localStorage.setItem('token', jwt)
        fetchUserData(jwt,'/profiel')
    }

    async function fetchUserData(jwt, redirectUrl) {
        try {
            const data = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${jwt}`,
                }
            })
            toggleIsAuth({
                isAuth: true,
                status: 'done',
                user: {
                    username: data.data.username,
                    email: data.data.email,
                    id: data.data.id,
                }
            });
            if (redirectUrl) {
                history.push(redirectUrl)
            }
        } catch (e) {
            console.error(e)
        }
    }


    function logout() {
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: 'done'
        })
        localStorage.clear()
        history.push('/')
    }

    const data = {
        loggedIn: isAuth.isAuth,
        login: login,
        logout: logout,
        user: isAuth.user,
    }

    return (
        <AuthContext.Provider value={data}>
            {/*{isAuth.status === 'done' ? children : <p>Loading...</p>}*/}
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
