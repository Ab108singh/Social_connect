import React, { useContext, useState } from "react";
import Footer from "../../pages/Footer";

import { Link ,useNavigate } from "react-router-dom";
import { LoginContext } from "../LoginContext";
import axios from 'axios'

const Loginform = () => {
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const nevigate = useNavigate();
  
  const {makelogin} = useContext(LoginContext)


  const login =()=>{
    nevigate('/');
  //   const postData = {
  //     email: email,
  //     password: pass,
  // };
  
  // const url = 'http://localhost:8000/api/v1/user/login';
  
  // axios.post(url, postData)
  //     .then(response => {
  //       console.log("login successfull")
  //         console.log('Response:', response.data.data.token);
  //         localStorage.setItem('token' , response.data.data.token)
          makelogin(true);
  //        nevigate('/');
  //     })
  //     .catch(err => {
    
  //         alert(err.response.data.error)
  //     });

  }
  

  const makeChange = (e) => {
    setPass(e.target.value);
  };

  const mouseon = () => {
    setShow(true);
  };
  const mouseoff = () => {
    setShow(false);
  };

  return (
    <div className="flex text-stone-700 flex-col w-screen justify-between bg-white  m-auto ">
      <div className="flex text-stone-700 flex-col  items-center w-[100%]   max-w-[800px] m-auto ">
        <div className=" flex items-center px-4 h-[80px] w-[100%] ">
          <img
            className=" h-[32px]  "
            src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png"
            alt=""
          />
        </div>

        <div className=" flex flex-col items-center px-4 mt-3 w-[100%] mx-auto max-w-[350px]  ">
          <div className="w-[100%] ">
            <p className="text-4xl font-semibold text-start ">Sing in</p>
            <p className="text-sm my-3   ">
              Stay updated on your professional world
            </p>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="email" className="mt-2">
              Email
            </label>
            <input
              type="text"
              value={email}
              onChange={e=>setEmail(e.target.value)}
              className="rounded-md text-lg py-1 px-1 border-black border-[1px] hover:border-2 h-[35px] "
            />
            <label htmlFor="email" className="mt-5">
              Password{" "}
            </label>
            <div className=" flex justify-between pr-4 bg-white rounded-md text-lg py-1 px-1 border-black border-[1px] hover:border-2 h-[35px] ">
              <input
                onChange={makeChange}
                type={show ? "text" : "password"}
                value={pass}
                className=" outline-none w-3/4 "
              />
              <button
                onMouseOver={mouseon}
                onMouseLeave={mouseoff}
                className="text-blue-700 text-xs px-2 rounded-full hover:bg-blue-100 h-6"
              >
                Show
              </button>
            </div>
            <div className="text-sm font-semibold text-blue-600 mt-4 hover:underline">
              Forgot password?
            </div>
            <div className="flex mt-5 justify-center">
              <p className="text-[12px]  py-4 text-center ">
                {" "}
                By clicking Agree & Join or Continue, you agree to the LinkedIn{" "}
                <span className="text-blue-600 hover:underline ">
                  User Agreement
                </span>
                ,{" "}
                <span className="text-blue-600 hover:underline ">
                  Privacy Policy,
                </span>{" "}
                and{" "}
                <span className="text-blue-600 hover:underline ">
                  Cookie Policy
                </span>
                .
              </p>
            </div>
            <div className=" w-full h-[40px] flex justify-center items-center rounded-full bg-blue-700 hover:bg-blue-800 text-white ">
              <span onClick={login} >Sign in</span>
            </div>
            <div className=" my-4 px-1 flex justify-around items-center ">
              <div className="w-[43%] h-[1px] bg-slate-400 "></div>
              <span> or</span>
              <div className="w-[43%] h-[1px] bg-slate-400 "></div>
            </div>
          </div>
          <div className=" w-[99%] h-[40px] flex justify-center items-center rounded-full border-[1px] hover:border-[2px] border-slate-700  ">
            <img
              className="w-[17px]"
              src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png"
              alt=""
            />
            <span className="text-md px-2 py-2 font-semibold">
              {" "}
              Continue with google
            </span>
          </div>
          <div className=" w-[99%] mt-2 h-[40px] flex justify-center items-center rounded-full border-[1px] hover:border-[2px] border-slate-700  ">
            <img
              className="w-[20px]"
              src="https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-512.png"
              alt=""
            />
            <span className="text-md px-2 py-2 font-semibold">
              {" "}
              Sing in with Apple
            </span>
          </div>

          <p className="my-10">
            New to LinkedIn?{" "}
            <Link to={"/register"}>
              {" "}
              <span className="text-blue-800 font-semibold hover:underline">
                Join now
              </span>
            </Link>
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Loginform;
