import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/header/Navbar";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[100%] mt-5 gap-x-7  gap-y-2    flex justify-center flex-wrap px-0  md:px-16">
        <section className=" flex-grow-0 shadow-slate-400  shadow-sm   sm:flex-grow max-w-[550px]   md:max-w-[800px]   bg-white  w-[99%] md:w-[50%] rounded-lg overflow-hidden ">
          <div className="w-[100%]  ">
            <div className="">
              <img
                className="h-[55%] w-[100%]"
                src="https://media.licdn.com/dms/image/D5616AQEdi3ggnWOcPQ/profile-displaybackgroundimage-shrink_350_1400/0/1705070102947?e=1714003200&v=beta&t=TA6Qn-3mJxxXiZgslsuQiHhclCFpvrrdvu9KifOYfYQ"
                alt=""
              />
              <div className="flex flex-col pl-6">
                <img
                  className="w-[20%] rounded-full mt-[-10%] border-white border-2"
                  src="https://media.licdn.com/dms/image/D4D03AQFnvQ35gVoE0Q/profile-displayphoto-shrink_400_400/0/1702142323383?e=1714003200&v=beta&t=8MfbndI9hGrNrHum-unVU4ApFKnRLfcL5V1oVaZByl4"
                  alt=""
                />
              </div>

              <div className="flex justify-between mx-6">
                <div className="w-[45%]  text-stone-600 ">
                  <p className="font-bold text-xl">Abhay Singh</p>
                  <p className="text-sm">
                    {" "}
                    C++ || DSA || javascript || Reactjs
                  </p>
                  <p className="text-xs text-stone-500">
                    Varansi, Uttar Pradesh, India{" "}
                    <span className="text-blue-500 font-bold hover:underline">
                      Contact info
                    </span>
                  </p>
                  <p className="text-blue-500 text-xs mt-2 font-bold hover:underline">
                    330 connections
                  </p>
                </div>
                <div className="w-[35%]  flex-col gap-3 hidden sm:flex md:hidden lg:flex  ">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-[30px]"
                      src="https://media.licdn.com/dms/image/D560BAQFTCiOSD64-qQ/company-logo_200_200/0/1707867955109/astit_ai_logo?e=1717027200&v=beta&t=ZsdN_JuvqYPVV9HsOltVcN841CVvtk_AZsPrMNVTf54"
                      alt=""
                    />
                    <span>Astita.ai</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      className="w-[34px]"
                      src="https://puchd.ac.in/asset/pu-logo.png"
                      alt=""
                    />
                    <span>Panjab University</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%] px-4  m-3 flex gap-3  ">
              <button className="px-4 py-1 border-blue-500 border-2 rounded-full bg-blue-600 hover:bg-blue-800 text-white font-bold ">
                {" "}
                Open to
              </button>
              <button className="px-4 py-1 border-blue-500 border-2 rounded-full text-blue-600 font-bold hover:bg-blue-100 ">
                {" "}
                Add profile section
              </button>
              <button className="px-4 py-1 border-stone-700 border-2 rounded-full text-stone-600 hover:bg-stone-200  hidden sm:flex md:hidden lg:flex  ">
                {" "}
                More
              </button>
            </div>
            <div className=" overflow-x-auto flex flex-row  gap-2 overflow-y-hidden  ">
              <div className=" text-stone-600  min-w-[350px]  rounded-md mx-5 my-4 px-3 py-2 bg-slate-300 ">
                <p className="font-bold text-sm">Hiring:Web Developer</p>
                <p className="text-sm">
                  Astita.Ai Mohali district,Punjab,India(Remote)
                </p>
                <button className="text-sm font-bold text-blue-700 hover:underline">
                  Show job
                </button>
              </div>
              <div className=" text-stone-600   min-w-[350px]  rounded-md mx-5 my-4 px-3 py-2 bg-slate-300 ">
                <p className="font-bold text-sm">Hiring:Web Developer</p>
                <p className="text-sm">
                  Astita.Ai Mohali district,Punjab,India(Remote)
                </p>
                <button className="text-sm font-bold text-blue-700 hover:underline">
                  Show job
                </button>
              </div>
             
             
            </div>
          </div>
           <div>
            
           </div>


        </section>

        <section className="h-[500px] shadow-slate-400  shadow-sm bg-white w-[99%] md:w-[250px]  max-w-[550px]   md:max-w-[800px] rounded-lg overflow-hidden "></section>
      </div>
    </div>
  );
};

export default Profile;
