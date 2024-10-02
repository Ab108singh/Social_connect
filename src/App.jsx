import React, { useContext, useEffect, useState } from "react";

import {
    Business,
    Jobs,
    Postjob,
    Home,
    Notification,
    Network,
    Massaging,
    Notfound,
    Profile,
} from "./pages";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/login/Login";
import Loginform from "./components/login/Loginform";
import RegisterForm from "./components/login/RegisterForm";
import { LoginContext } from "./components/LoginContext";


const App = () => {
    const { login } = useContext(LoginContext);
   
 
  
      
   

    return (
        <div className="  ">
            <Routes>
                <Route path={"/register"} element={<RegisterForm />} />
                <Route path={"/login"} element={<Loginform />} />
                <Route path={"/"} element={login ? <Home /> : <Login />} />
                <Route path={"/network"} element={<Network />} />
                <Route path={"/jobs"} element={<Jobs />} />
                <Route path={"/messaging"} element={<Massaging />} />
                <Route path={"/notification"} element={<Notification />} />
                <Route path={"/profile"} element={<Profile />} />
                <Route path={"/business"} element={<Business />} />
                <Route path={"/postjob"} element={<Postjob />} />
                <Route path={"/*"} element={<Notfound />} />
            </Routes>
        </div>
    );
};

export default App;
