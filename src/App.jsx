import React, { useContext, useState } from "react";
import Navbar from "./components/header/Navbar";
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
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Loginform from "./components/login/LoginForm";
import RegisterForm from "./components/login/RegisterForm";
import { LoginContext } from "./components/LoginContext";

const App = () => {
    let { login} = useContext(LoginContext);
    
    
    return (
        <div className="  ">
            <Routes>
                
                <Route path={"/register"} element={<RegisterForm/>} />
                <Route path={"/login"} element={<Loginform/>} />
                <Route path={"/"} element={login ? <Home /> : <Login />} />
                <Route path={"/network"} element={<Network />} />
                <Route path={"/jobs"} element={<Jobs />} />
                <Route path={"/massaging"} element={<Massaging />} />
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
