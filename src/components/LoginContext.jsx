import React, { createContext, useState, useContext } from "react";

export const LoginContext = createContext();

export default function LoginContextProvider({ children }) {
   const[login,setLogin]=useState(false)

    const makelogin = () => {
       
        setLogin(true); 
    }

    return (
        <LoginContext.Provider value={{login ,makelogin }}>
            {children}
        </LoginContext.Provider>
    )
}