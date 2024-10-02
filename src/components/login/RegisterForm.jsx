import React, { useState } from "react";
import Footer from "../../pages/Footer";
import { Link , useNavigate } from "react-router-dom";


const RegisterForm = () => {  
    const [show, setShow] = useState(false);
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
   const nevigate = useNavigate()

    const makeRegister = () => {
        nevigate('/login');

       
    }

    const makeChange = (e) => {
        setPass(e.target.value);
    }

    const mouseon = () => {
        setShow(true);
    }

    const mouseoff = () => {
        setShow(false);
    }

    return (
        <div className="flex text-stone-700 flex-col w-screen justify-between bg-white h-m-auto ">
            <div className="flex text-stone-700 flex-col items-center w-[100%] max-w-[800px] m-auto ">
                <div className="flex items-center px-4 h-[80px] w-[100%] ">
                    <img
                        className="h-[22px]  "
                        src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png"
                        alt=""
                    />
                </div>
                <p className="text-2xl my-3 font-semibold px-2 ">Make the most of your professional life</p>
                <div className="flex flex-col items-center px-4 mt-3 w-[100%] mx-auto max-w-[400px] h-[500px] ">
                    <div className="flex flex-col  text-">
                        <label htmlFor="text" className="mt-2">Name </label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="rounded-md text-lg py-1 px-1 border-black border-[1px] hover:border-2 h-[35px] " />
                        <label htmlFor="email" className="mt-2">Email </label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-md text-lg py-1 px-1 border-black border-[1px] hover:border-2 h-[35px] " />
                        <label htmlFor="email" className="mt-5">Password (6+ characters)</label>
                        <div className="flex justify-between pr-4 bg-white rounded-md text-lg py-1 px-1 border-black border-[1px] hover:border-2 h-[35px] ">
                            <input onChange={makeChange} type={show ? 'text' : 'password'} value={pass} className=" outline-none w-3/4 " />
                            <button onMouseOver={mouseon} onMouseLeave={mouseoff} className="text-blue-700 h-6">Show</button>
                        </div>
                        <div className="flex mt-5 justify-center">
                            <p className="text-[12px]  py-4 text-center "> By clicking Agree & Join or Continue, you agree to the LinkedIn <span className="text-blue-600 hover:underline ">User Agreement</span>, <span className="text-blue-600 hover:underline ">Privacy Policy,</span> and <span className="text-blue-600 hover:underline ">Cookie Policy</span>.</p>
                        </div>
                        <div className="w-full h-[40px] flex justify-center items-center rounded-full bg-blue-700 hover:bg-blue-800 text-white ">
                            <span onClick={makeRegister} >Agree & Join</span>
                        </div>
                        <div className="my-4 px-1 flex justify-around items-center ">
                            <div className="w-[43%] h-[1px] bg-slate-400 "></div>
                            <span> or</span>
                            <div className="w-[43%] h-[1px] bg-slate-400 "></div>
                        </div>
                    </div>
                    <div className="w-[89%] h-[40px] flex justify-center items-center rounded-full border-[1px] hover:border-[2px] border-slate-700  ">
                        <img className="w-[17px]" src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png" alt="" />
                        <span className="text-md px-2 font-semibold"> Continue with google</span>
                    </div>

                    <p className="mt-10">
                        Already on LinkedIn?
                        <Link to={'/login'}>
                            <span className="text-blue-800 font-semibold hover:underline">Sing in</span>
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

export default RegisterForm;
