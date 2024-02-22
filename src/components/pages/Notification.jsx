import React from "react";
import Navbar from "../header/Navbar";
import "./Home.css";
import Footer from "./Footer";

const Notification = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-wrap gap-[20px]  justify-center mt-[30px] ">
        {/* this is first section-------------------------------------------------------- */}
        <section className="  homeprofile  w-[100%]  sm:w-[75%] md:w-[30%] lg:w-[20%] xl:w-[20%] xl:max-w-[250px] ">
          {/* this is first box in this section ---- */}
          <div className="w-[100%] flex flex-col gap-5 font-bold px-3  py-3 box rounded-t-lg ">
          <p>Manage your Notification</p>
          <span className="bg-blue-200 hover:bg-blue-300 w-[100px] text-center rounded-md ">Manage</span>
          </div>
        </section>

        {/* this is second section in home component --------------------------------------- */}
        <section className=" homescrollbar  w-[100%]   sm:w-[75%] md:w-[55%] lg:w-[40%] xl:w-[40%] xl:max-w-[550px] ">
          <div className=" mb-[23px] h-fit  ">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </section>

        <section className=" homefooter w-[100%] hidden  sm:hidden lg:flex flex-col    sm:w-[85%] md:w-[25%] lg:w-[25%] xl:w-[25%] xl:max-w-[300px] ">
         
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Notification;






export const Post = ({ name, age, note }) => {
  return (
    <div className=" rounded-md box mb-2 ">
      <div className="px-3  py-4 flex f justify-between">
        <div className="w-[60%]">
          <p>There are no notification for you . </p>
          <p>Don't wait for notifications keep doing your work</p>
          
        </div>
        <button className=" hover:bg-slate-200 w-[30px] h-[30px] flex justify-center items-center rounded-full   ">
          x
        </button>
      </div>
    </div>
  );
};
