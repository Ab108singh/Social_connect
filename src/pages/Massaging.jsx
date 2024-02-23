import React from "react";
import Navbar from "../components/header/Navbar";
import "./Home.css";
import Footer from "./Footer";

const Massaging = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-wrap gap-[20px] h-screen  justify-center mt-[30px] ">
       
        <section className=" homescrollbar h-[600px] bg-white  w-[100%]   sm:w-[65%] md:w-[55%] lg:w-[50%] xl:w-[50%] xl:max-w-[750px] ">
          <div className="w-[100%] p-[22px] ">
            Massage component
          </div>
        </section>

        <section className=" homefooter w-[100%] max-h-[200px]   lg:flex flex-col    sm:w-[30%] md:w-[25%] lg:w-[25%] xl:w-[25%] xl:max-w-[300px] ">
          
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Massaging;


