import React, { useContext, useEffect, useState } from "react";
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
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/login/Login";
import Loginform from "./components/login/LoginForm";
import RegisterForm from "./components/login/RegisterForm";
import { LoginContext } from "./components/LoginContext";
import axios from "axios";

const App = () => {
    const { login,makelogin,admin,setAdmin } = useContext(LoginContext);
    const [isLoading, setIsLoading] = useState(true);
    const nevigate = useNavigate();
    const url = 'http://localhost:8000/api/v1/user';
   let token = localStorage.getItem('token');
    // useEffect(() => {
    //     // Fetch data from the server
       
    //     axios.get(url, {
    //         headers: {
    //             authorization:"Bearer "+token
    //         }
    //     })
    //     .then(response => {
    //         // Handle successful response
    //         console.log('Data:', response.data);
            
    //         makelogin(false);
    //         setAdmin(response.data)
    //     })
    //     .catch(error => {
    //         makelogin(false);
    //        nevigate('/login')
           
    //     })
    //     .finally(() => {
    //         // Once the request is completed (whether success or failure), set isLoading to false
    //         setIsLoading(false);
    //     });
    // }, []); // Empty dependency array indicates that useEffect should run only once before application starts
    
    // if (isLoading) {
    //     // Render a loading indicator while data is being fetched
    //     return <div>Loading...</div>;
    // }

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
