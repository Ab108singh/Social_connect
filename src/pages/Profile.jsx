import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/header/Navbar";
import {
  FaChartBar,
  FaCocktail,
  FaEye,
  FaPeopleCarry,
  FaSatelliteDish,
  FaSearch,
} from "react-icons/fa";
import { IoPeople, IoPeopleCircle } from "react-icons/io5";
import { MdDiamond ,MdPersonAddAlt1 } from "react-icons/md";
const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[100%] mt-5 gap-x-7  gap-y-2    flex justify-center flex-wrap px-0  md:px-16">
        <section className=" flex-grow-0 pb-2 z-[-1]   sm:flex-grow max-w-[550px]   md:max-w-[800px]    w-[99%] md:w-[50%] ">
          <div className="w-[100%] bg-white shadow-slate-400  shadow-sm rounded-lg overflow-hidden   ">
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
              <button className="px-4 py-1 border-blue-400 border-[1px] rounded-full text-blue-600 font-bold hover:bg-blue-100 ">
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
          <div className="w-[100%]  bg-white shadow-slate-400  shadow-sm rounded-lg overflow-hidden  mt-4 ">
            <div className="p-4">
              <p className="text-2xl font-semibold text-stone-600">Anasytics</p>
              <p className="opacity-65 flex items-center gap-2">
                <FaEye /> <span>Private to you </span>
              </p>
            </div>

            <div className="w-[100%] px-4 flex flex-wrap opacity-75 gap-y-4 gap-x-2 ">
              <div className="min-w-[400px] flex  gap-2 ">
                <div className="pt-2">
                  <IoPeople size={"23"} />
                </div>
                <div>
                  <p className="font-semibold">228 profile views</p>
                  <p>Discover who's viewed your profile.</p>
                </div>
              </div>
              <div className="min-w-[400px] flex gap-2  ">
                <div className="pt-2">
                  <FaChartBar size={"23"} />
                </div>
                <div>
                  <p className="font-semibold">228 profile views</p>
                  <p>Discover who's viewed your profile.</p>
                </div>
              </div>
              <div className="max-w-[400px] flex gap-2 ">
                <div className="pt-2">
                  <FaSearch size={"23"} />
                </div>
                <div>
                  <p className="font-semibold">228 profile views</p>
                  <p>Discover who's viewed your profile.</p>
                </div>
              </div>
            </div>
            <div className="w-[100%] mt-3 bg-stone-300 h-[1px] "></div>
            <div className="text-xl text-stone-500 hover:bg-stone-200 py-3 font-semibold flex justify-center ">
              Show all analytics &rarr;
            </div>
          </div>

          <div className="w-[100%]  bg-white shadow-slate-400  shadow-sm rounded-lg overflow-hidden  mt-4 ">
            <div className="p-4">
              <p className="text-2xl font-semibold text-stone-600">Resources</p>
              <p className="opacity-65 flex items-center gap-2">
                <FaEye /> <span>Private to you </span>
              </p>
            </div>

            <div className="w-[100%] px-4 flex flex-wrap opacity-75 gap-y-4 gap-x-2 ">
              <div className="max-w-[400px] flex gap-2 ">
                <div className="pt-2">
                  <FaSatelliteDish size={"23"} />
                </div>
                <div>
                  <p className="font-semibold">
                    Creator mode{" "}
                    <span className="bg-stone-300 rounded-md px-1">Off</span>{" "}
                  </p>
                  <p>Discover who's viewed your profile.</p>
                </div>
              </div>
              <div className="w-[100%]  bg-stone-300 h-[1px] "></div>

              <div className="min-w-[400px] flex  gap-2 ">
                <div className="pt-2">
                  <IoPeople size={"23"} />
                </div>
                <div>
                  <p className="font-semibold">My network</p>
                  <p>See and manage your connections and interests.</p>
                </div>
              </div>
            </div>
            <div className="w-[100%] mt-3 bg-stone-300 h-[1px] "></div>
            <div className="text-xl text-stone-500 hover:bg-stone-200 py-3 font-semibold flex justify-center ">
              Show all 5 Resources &rarr;
            </div>
          </div>

          <div className="w-[100%]   bg-white shadow-slate-400  shadow-sm rounded-lg overflow-hidden  mt-4 ">
            <div className="w-[full] flex flex-wrap justify-between mx-4 my-3">
              <div>
                <p className="text-xl font-bold text-stone-700">Activity</p>
                <p className="text-md text-blue-600 hover:underline">
                  337 followers
                </p>
              </div>
              <button className="text-blue-600 h-10 px-3 hover:bg-blue-100 justify-center items-center text-lg  border-blue-400 rounded-full border-2">
                Create a post
              </button>
            </div>

            <Activity />
            <Activity />
            <Activity />
            <div className="text-xl text-stone-500 hover:bg-stone-200 py-3 font-semibold flex justify-center ">
              Show all Posts &rarr;
            </div>
          </div>




          <div className="w-[100%]   bg-white shadow-slate-400  pt-4 px-4 shadow-sm rounded-lg overflow-hidden  mt-4 ">
            <div className="w-[full] flex flex-wrap justify-between mx-1 my-3">
              <div>
                <p className="text-xl font-bold text-stone-700">Experience</p>
               
              </div>
              <button className=" text-stone-500 px-3 hover:bg-blue-100 rounded-full justify-center items-center text-4xl ">
              &#xFF0B;
              </button>
            </div>

          <Experience/>
          <Experience/>
            
          </div>




          <div className="w-[100%]   bg-white shadow-slate-400  pt-4 px-4 shadow-sm rounded-lg overflow-hidden  mt-4 ">
            <div className="w-[full] flex flex-wrap justify-between mx-1 my-3">
              <div>
                <p className="text-xl font-bold text-stone-700">Education</p>
               
              </div>
              <button className=" text-stone-500 px-3 hover:bg-blue-100 rounded-full justify-center items-center text-4xl ">
              &#xFF0B;
              </button>
            </div>

          <Education/>
          <Education/>
            
          </div>



          <div className="w-[100%]   bg-white shadow-slate-400  pt-4  shadow-sm rounded-lg overflow-hidden  mt-4 ">
            <div className="w-[full] flex flex-wrap justify-between mx-1 my-3">
              <div>
                <p className="text-xl pl-3 font-bold text-stone-700">Skills</p>
               
              </div>
              <button className=" text-stone-500 px-3 hover:bg-blue-100 rounded-full justify-center items-center text-4xl ">
              &#xFF0B;
              </button>
            </div>

          <Skills/>
          <Skills/>
          <div className="text-xl text-stone-500 hover:bg-stone-200 py-3 font-semibold  flex justify-center ">
              Show all 10 Skills &rarr;
            </div>
            
          </div>



          <div className="w-[100%]   bg-white shadow-slate-400  pt-4  shadow-sm rounded-lg overflow-hidden  mt-4 ">
             <div>
                <p className="text-xl pl-3 font-bold text-stone-700">Interests</p>
               
              </div>
              
           <div className="flex flex-wrap gap-x-5">
              <Interests/>
              <Interests/>
           </div>
             
          
          <div className="text-xl text-stone-500 hover:bg-stone-200 py-3 font-semibold  flex justify-center ">
              Show all companies &rarr;
            </div>
            
          </div>
        </section>

        <section className="    w-[99%] md:w-[250px]  max-w-[550px]   md:max-w-[800px]  ">
         {/* first box */}
         <div className="  text-stone-700  bg-white shadow-sm rounded-lg overflow-hidden  shadow-slate-400">
          <p className="m-3 text-lg font-semibold">People also viewed</p>
          <div>
           <Peoples/>
           <Peoples/>
           <Peoples/>
           <Peoples/>
           <Peoples/>
           <Peoples/>
          </div>
          <div className="w-[100%] flex justify-center  py-1 border-t-2 hover:bg-stone-200 ">
           <button>Show all &rarr; </button>
          </div>
         </div>


         <div className=" mt-4 mb-3  text-stone-700  bg-white shadow-sm rounded-lg overflow-hidden  shadow-slate-400">
          <p className="m-3 text-lg font-semibold">Peoples you may know </p>
          <div>
           <Mayknow/>
           <Mayknow/>
           <Mayknow/>
           <Mayknow/>
           <Mayknow/>
           <Mayknow/>
          </div>
          <div className="w-[100%] flex justify-center  py-1 border-t-2 hover:bg-stone-200 ">
           <button>Show all &rarr; </button>
          </div>
         </div>

        </section>
      </div>
    </div>
  );
};

export default Profile;







export const Activity = () => {
  return (
    <div className="flex flex-col text-stone-600 gap-3 px-3 mt-5 ">
      <p className="text-xs">Abhay Singh reposted this &#x2022; 1w </p>
      <div className="flex gap-4">
        <div>
          <img
            className="w-[73px]"
            src="https://media.licdn.com/dms/image/D5622AQFhiKpxDVY4pg/feedshare-shrink_800/0/1707750885720?e=1711584000&v=beta&t=i0bk20mirW2trlwOLc8-qGrdnk37RiRCFtCC3VOSu2g"
            alt=""
          />
        </div>
        <div>
          <p className="text-">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa magni, obcaeca.</p>
        </div>
      </div>
      <div className="flex justify-between px-2 text-slate-500 text-xs py-2">
          <div className="flex items-center  gap-1">
            <div className="flex items-center ">
              <img
                className="w-[12px] h-[12px] "
                src="https://cdn0.iconfinder.com/data/icons/communication-7-2/98/311-512.png"
                alt=""
              />
              <img
                className="w-[16px] h-[16px] "
                src="https://cdn2.iconfinder.com/data/icons/office-and-business-18/65/100-512.png"
                alt=""
              />
              <img
                className="w-[12px] h-[12px] "
                src="https://cdn3.iconfinder.com/data/icons/user-interface-filled-line-7/32/09_Like-512.png"
                alt=""
              />
            </div>
            <span className="hover:underline">
              Ayushi Kushwaha and 14,419 others
            </span>
          </div>

          <span className="hover:underline">152 comments &#x2022; 11 reposts</span>
        </div>
      <div className="w-[100%]  bg-stone-300 h-[1px] "></div>

    </div>
  );
};


export const Experience =() =>{
  return(
    <div>
      <div className="flex  mt-4 gap-2">
    <div>
      <img className="w-[63px] mt-1" src="https://media.licdn.com/dms/image/D560BAQFTCiOSD64-qQ/company-logo_200_200/0/1707867955109/astit_ai_logo?e=1717027200&v=beta&t=ZsdN_JuvqYPVV9HsOltVcN841CVvtk_AZsPrMNVTf54" alt="" />
    </div>
    <div className="text-stone-500">
      <div>
      <p className="text-xl font-semibold">HR Manager</p>
      <p className="text-md">Astita.AI &#x2022; Full-time</p>
      <p className="text-md text-stone-400">Jan 2024 - Present &#x2022; 2 mos</p>
      <p className="text-md text-stone-400">India</p>
      </div>
      <div className="py-4">
       <p className="flex items-center text-sm text-stone-800"><MdDiamond/> Leadership, Android Studio and +8 skills</p>
      </div>
    </div>
   
  </div>
  <div className="w-[100%]  bg-stone-300 h-[1px] "></div>
    </div>
  )
}

export const Education =() =>{
  return(
   <div>
     <div className="flex my-4 gap-2">
    <div>
      <img className="w-[63px] mt-1" src="https://seeklogo.com/images/P/panjab-university-logo-97FD0EFE4E-seeklogo.com.png" alt="" />
    </div>
    <div className="text-stone-500">
      <div>
      <p className="text-xl font-semibold">Panjab University</p>
      <p className="text-md">Bachelor of Engineering - BE, Informatin Technology</p>
      <p className="text-md text-stone-400">july 2020 - jun 2024</p>
      <p className="text-md text-stone-600">Grade : 8.02 GPA</p>
      </div>
      <div className="py-4">
       <p className="flex items-center text-sm text-stone-800"><MdDiamond/>Presentation, Leadership, Android Studio and +8 skills</p>
      </div>
    </div>

  </div>
  <div className="w-[100%]  bg-stone-300 h-[1px] "></div>
   </div>
  )
}


export const Skills =() =>{
  return(
   <div className="text-stone-600 mt-5 mx-5 ">
    <p className="text-xl font-semibold pl-1">Web Development</p>
     <div className="flex  gap-2 mb-2 items-center  ">
    <div>
      <img className="w-[33px] mt-1" src="https://seeklogo.com/images/P/panjab-university-logo-97FD0EFE4E-seeklogo.com.png" alt="" />
    </div>
   
    
      <p className="text-md font-semibold">Panjab University</p>
      
 
  </div>
  <div className="w-[100%]  bg-stone-300 h-[1px] "></div>
   </div>
  )
}


export const Interests =() =>{
  return(
   <div className="text-stone-600 min-w-[300px] flex gap-3 mt-5 mx-5 ">
   <div>
    <img className="w-[45px] mt-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" alt="" />
   </div>
   <div className="flex flex-col gap-1">
    <p className="text-xl font-bold ">Microsoft</p>
    <p className="text-md"> 21,755,693 followers</p>
    <button className=" border-stone-700 rounded-full px-3 text-lg border-[1px] ">&#x2713;Following</button>
   </div>
   
    
 
   </div>
  )
}


export const Peoples = ()=>{
  return (
   <div className="flex flex-col items-center">
     <div className="flex w-[100%] gap-2 pb-3  px-4">
      <div>
        <img className="w-[55px] mt-2 rounded-full  " src="https://media.licdn.com/dms/image/D5635AQE9LcW9SjIpXA/profile-framedphoto-shrink_200_200/0/1706232575750?e=1709600400&v=beta&t=NV_j0CwsMr0P9s0qpTlL6fXinceLfsBfuRxHDMRY3Ro" alt="" />
      </div>
      <div className="flex flex-col gap-1">
    <p className="text-lg font-semibold ">Gupta Ji</p>
    <p className="text-sm"> Student at UIETH Punjab University </p>
    <button className=" text-stone-500 w-[100px] border-stone-500 rounded-full  border-[2px] ">+Follow</button>
   </div>
   

    </div>
    <div className="w-[96%]  bg-stone-300 h-[1px] "></div>
   </div>
  )
}


export const Mayknow = ()=>{
  return (
   <div className="flex flex-col items-center">
     <div className="flex w-[100%] gap-2 pb-3  px-4">
      <div>
        <img className=" min-w-[35px] max-w-[45px] mt-2 rounded-full  " src="https://scontent.fixc4-1.fna.fbcdn.net/v/t39.30808-6/415956459_3674174952870289_2433742899111164051_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=6X3npMCItoAAX8zQzy1&_nc_ht=scontent.fixc4-1.fna&oh=00_AfCWG2T-EhCjDiDyRHHcxDhMEl62VYbmg_-fdoKl26m9KA&oe=65E520B4" alt="" />
      </div>
      <div className="flex flex-col gap-1">
    <p className="text-lg font-semibold ">Ji Gupta</p>
    <p className="text-sm"> Student at Punjab University Swami Sarvanand Giri Regional center Hoshiarpur  </p>
    <button className=" text-stone-500 w-[100px] border-stone-500 rounded-full px-1 text- border-[2px] flex items-center gap-1 justify-center "><MdPersonAddAlt1 size={15} /> connect </button>
   </div>
   

    </div>
    <div className="w-[96%]  bg-stone-300 h-[1px] "></div>
   </div>
  )
}