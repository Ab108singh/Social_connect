import React, { createContext, useState, useContext } from "react";

export const LoginContext = createContext();

export default function LoginContextProvider({ children }) {
   const[login,setLogin]=useState(false)
   const[admin,setAdmin]=useState({})
   

    const makelogin = () => {
       
        setLogin(true); 
    }

    return (
        <LoginContext.Provider value={{login ,makelogin,admin,setAdmin }}>
            {children}
        </LoginContext.Provider>
    )
}