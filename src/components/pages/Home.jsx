import React from "react";
import Navbar from "../header/Navbar";
import "./Home.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-wrap gap-[30px]  justify-center mt-[30px] ">

        {/* this is first section-------------------------------------------------------- */}
        <section className="  homeprofile h-[600px] w-[100%]  sm:w-[75%] md:w-[30%] lg:w-[20%] xl:w-[20%] xl:max-w-[250px] ">
          {/* this is first box in this section ---- */}
          <div id="hl1" className="rounded-lg  box mb-2">
          <div className="w-[100%] h-[200px] bg-slate-100">
            <div className="h-[80px]">
              <img
                className="h-[70px] w-[100%]"
                src="https://media.licdn.com/dms/image/D5616AQEdi3ggnWOcPQ/profile-displaybackgroundimage-shrink_350_1400/0/1705070102947?e=1714003200&v=beta&t=TA6Qn-3mJxxXiZgslsuQiHhclCFpvrrdvu9KifOYfYQ"
                alt=""
              />
            </div>
            <div className="flex flex-col  items-center">
              <img
                className="w-[80px] rounded-full mt-[-46px] border-white border-2"
                src="https://media.licdn.com/dms/image/D5635AQElPtWDfHUBhA/profile-framedphoto-shrink_400_400/0/1705070996329?e=1708916400&v=beta&t=d-8eDbWnjKK030c0g9wNbvDbRIzIZ6-x6SAJhz6S-6g"
                alt=""
              />
              <button>Kalpna Shrivastav</button>
              <span className="text-xs text-stone-400">
                Android Developer and Freelancer
              </span>
            </div>
          </div>
          <div>
            <div className="w-[100%] mb-2 h-[1px] bg-slate-200"></div>
            <div className="flex md:justify-between items-center px-2"><span className="text-sm mx-4  text-slate-500">Profile viewers </span><span className="text-blue-600 text-sm ml-2 font-bold"> 227</span></div>
           <div className="flex md:justify-between items-center px-2"> <span className="text-sm mx-4  text-slate-500">Post impression </span><span className="text-blue-600 text-sm ml-2 font-bold"> 113</span></div>
            <div className="w-[100%] my-2 h-[1px] bg-slate-200"></div>
            <div className="w-[100%] my-2 h-[1px] bg-slate-200"></div>
          </div>
          </div>

           {/* this is second box in this section ---- */}
          <div id="hl2" className="box flex justify-center h-[54%] rounded-lg ">
            this is something else
          </div>
        </section>
       
       {/* this is second section in home component --------------------------------------- */}
        <section className=" homescrollbar  w-[100%]   sm:w-[75%] md:w-[55%] lg:w-[40%] xl:w-[40%] xl:max-w-[550px] ">
        
        <div id="post" className="box h-[120px] rounded-md " >
           <div className="h-[70px] flex justify-between items-center px-4 ">
            <img className="w-[55px] rounded-full h-[55px] " src="https://media.licdn.com/dms/image/D5635AQElPtWDfHUBhA/profile-framedphoto-shrink_400_400/0/1705070996329?e=1708956000&v=beta&t=1NmgBiyhol0Tt55JYk0j0ExagTbtYUgo8JgEMlU6yuM" alt="" />
            <div className="w-[88%] h-[50px] hover:bg-slate-200 border border-slate-400 rounded-full "></div>
           </div>
           <div className="flex justify-around items-center">
                <div className="flex gap-1 hover:bg-slate-200 rounded-sm px-3 py-1">
                  <img className="w-[20px]" src="https://cdn4.iconfinder.com/data/icons/utilities-part-2/64/image-512.png" alt="" />
                  <span>Media</span>
                </div>
                <div className="flex gap-1 hover:bg-slate-200 rounded-sm px-3 py-1">
                  <img className="w-[20px]" src="https://cdn3.iconfinder.com/data/icons/wedding-unending-love-and-happiness/512/Calendar-512.png" alt="" />
                  <span>Event</span>
                </div>
                <div className="flex gap-1 hover:bg-slate-200 rounded-sm px-3 py-1">
                  <img className="w-[20px]" src="https://cdn0.iconfinder.com/data/icons/files-15/64/_Article-512.png" alt="" />
                  <span>Write article</span>
                </div>
           </div>
        </div>
           <div className=" my-4 mb-[23px] h-fit  ">
             <Post name={"name"} age={"age"} note={"note"} />
             <Post name={"name"} age={"age"} note={"note"} />
             <Post name={"name"} age={"age"} note={"note"} />
           </div>




        </section>

        <section className="  box homefooter w-[100%] hidden  sm:hidden lg:flex flex-col-reverse    sm:w-[85%] md:w-[25%] lg:w-[25%] xl:w-[25%] xl:max-w-[300px] ">
            <Footer/>
        </section>
      </div>
    </div>
  );
};

export default Home;








 export const Post=({name,age,note})=>{
 return (
  <div className="h-[500px] bg-slate-400 rounded-md box my-3 ">
      
  </div>
 )
}