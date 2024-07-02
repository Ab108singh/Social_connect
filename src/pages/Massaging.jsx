import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
import { AiOutlineGif } from "react-icons/ai";
import { FaRegFaceSmile } from "react-icons/fa6";
import { MdVideoCall } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import Navbar from "../components/header/Navbar";
import "./Home.css";
import Footer from "./Footer";
import { FaGripfire, FaImage, FaLink, FaSearch } from "react-icons/fa";

const Massaging = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-wrap gap-[20px] h-[94vh] lg:h-[90vh]  justify-center mt-[10px] ">
        <section className="  h-[100%]  flex shadow-sm shadow-stone-300  rounded-lg overflow-hidden  bg-white  w-[100%] max-w-[800px]   lg:w-[65%]   xl:w-[50%] xl:max-w-[750px] ">
          {/* first box of peoples................. */}
          <div className="h-full border   w-[100%] sm:w-[40%] sm:max-w-[450px]   ">
            <div className="w-full flex px-3 justify-between items-center border-b-[1px] border-stone-300  ">
              <span className="font-semibold">Messaging</span>
              <div className="flex  opacity-65">
                <div className=" hover:bg-slate-300 rounded-full justify-center items-center   p-3 ">
                  <BsThreeDots size={"20px"} />
                </div>
                <div className=" hover:bg-slate-300 rounded-full flex justify-center items-center  p-3 ">
                  <FiEdit size={"20px"} />
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-2 mb-1 h-10 w-full items-center">
              <div className="flex px-2 items-center opacity-55 w-[95%] border-2 rounded-md m-2 bg-slate-200 hover:border-slate-900 justify-between ">
                <div className="flex items-center justify-start gap-1">
                  <FaSearch />
                  <input
                    type="text"
                    placeholder="Search messages"
                    className="bg-slate-200 outline-none text-sm"
                  />
                </div>
                <VscSettings
                  className="transform rotate-90 p-1 hover:bg-slate-400 rounded-full transition-all duration-300"
                  size={"30"}
                />
              </div>
            </div>

            <div className="flex opacity-75 font-semibold">
              <button className="w-[50%] h-10 hover:bg-slate-200 ">
                Focused
              </button>
              <button className="w-[50%] h-10 hover:bg-slate-200 ">
                Other
              </button>
            </div>

            <div className=" overflow-x-hidden overflow-y-auto h-[80%]  w-[100%]   ">
              <People />
              <People />
              <People />
              <People />
              <People />
              <People />
              <People />
              <People />
              <People />
              <People />
              <People />
              <People />
              <People />
              <People />
              <People />
            </div>
          </div>

          {/* second box of messages............ */}
          <div className="h-full  flex-grow hidden sm:block  ">
            <div className="h-[70%] ">
           <Messagebox/>

            </div>

            <div className="h-[30%] border-t-2 flex flex-col  justify-start items-center  border-stone-300 ">
             
            <textarea placeholder="Write a message..." className=" rounded-md outline-none p-2 bg-stone-200 w-[90%] my-3 max-h-[5em] resize-none h-[5em]  " />
            <div className="w-[100%] border  "></div>
            <div className="flex w-[100%] opacity-65 justify-between px-4 py-4">
                   <div className="flex w-[40%] justify-around  ">
                      <div className="p-2 rounded-full hover:bg-stone-300">
                        <FaImage className=" " size={'22'}/>
                      </div>
                      <div className="p-2 rounded-full hover:bg-stone-300">
                      <FaLink size={'22'}/>
                      </div>
                      <div className="p-2 rounded-full hover:bg-stone-300">
                      <AiOutlineGif size={'22'} />
                      </div>
                      <div className="p-2 rounded-full hover:bg-stone-300">
                      <FaRegFaceSmile size={'22'} />
                      </div>

                    
                   
                    
                   </div>
                   <div className="flex items-center gap-4">
                    <button className="bg-stone-200 px-5 py-1 hover:bg-stone-300 rounded-full">send</button>
                    <div className="p-2 rounded-full hover:bg-stone-300">
                      <BsThreeDots size={'22'} />
                      </div>
                   
                   </div>
            </div>
            <div>

            </div>
            </div>
          </div>
        </section>

        <section className=" homefooter w-[100%] max-h-[200px]   lg:flex flex-col     md:w-[25%] lg:w-[25%] xl:w-[25%] xl:max-w-[300px] ">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Massaging;

export const People = () => {
  return (
    <div className="w-[100%] py-2 px-1 hover:bg-slate-200 gap-2 flex">
      <img
        className="w-[55px] h-[55px] rounded-full mt-3 "
        src={'./public/2.jpg'}
        alt=""
      />
      <div className="flex-grow">
        <div className="flex text-[15px]  justify-between  py-2">
          <span>Jitesh meena</span>
          <span className="text-[13px] ">4:37 PM</span>
        </div>
        <p className="text-[12px] text-stone-500 px-2 ">
          You : lodu lalit lorem ipsum dolor sit ...{" "}
        </p>
      </div>
    </div>
  );
};

export const Messagebox =()=>{
  return (
   <div className="h-[100%] ">
     <div className="flex h-[10%] justify-between items-center border-b border-b-stone-300 py-2">
      <div className="w-[60%] px-2 py-[1px]   ">
            <p className="font-semibold text-stone-700 hover:text-blue-800 hover:underline ">Jitesh meena</p>
            <p className="text-xs text-stone-500">Pursuing Information Technology @...</p>
           </div>
           <div className="w-[40%] flex items-center justify-end gap-2 ">
           <div className="p-2 rounded-full hover:bg-stone-300">
            <BsThreeDots className=" " size={'22'}/>
           </div>
           <div className="p-2 rounded-full hover:bg-stone-300">
            <MdVideoCall className=" " size={'22'}/>
           </div>
           <div className="p-2 rounded-full hover:bg-stone-300">
            <CiStar className=" " size={'22'}/>
           </div>
           
           </div>
    </div>
    <div className="h-[90%] overflow-x-hidden overflow-y-auto px-4 py-2 ">
     
   <img className="w-[60px] rounded-full mx-3 my-2 " src={'./public/2.jpg'} alt="" />
   <p className="font-semibold hover:underline">Jitesh meena</p>
   <p className="text-sm pb-3 text-stone-500">Pursuing Information Technology @ UIETH,Panjab University | Javascript, React.Js, Node.Js, Python | Web Developer | MERN |</p>
  <Message/>
  <Message/>
  <Message/>
    </div>


   </div>
  )
}

export const Message =()=>{
  return (
     <div className="mt-4">
        <div className="flex items-center justify-between">
          <div className="w-[43%] h-[1px]  bg-stone-300 "></div>
          <div className="w-[14%] text-xs flex justify-center text-stone-500 ">14 january</div>
          <div className="w-[43%] h-[1px] bg-stone-300 "></div>
        </div>


       <div className="flex gap-2 my-4">
      <img className="w-[45px] h-[45px] rounded-full  " src={'./public/2.jpg'} alt="" />
     <div>
       <p className="font-semibold text-sm hover:underline hover:text-blue-600">Jitesh meena</p>
        <p className="text-sm text-stone-500">Lorem ipsum harum id ut? Molestiae, voluptatibus esse?</p>
     </div>
     </div>
       <div className="flex gap-2 my-4">
      <img className="w-[45px] h-[45px] rounded-full  " src={'./public/1.jpg'} alt="" />
     <div>
       <p className="font-semibold text-sm hover:underline hover:text-blue-600 ">Abhay Singh</p>
        <p className="text-sm text-stone-500">Lorem ipsum harum id ut?   esse?</p>
     </div>
     </div>

     </div>
    
  )
}