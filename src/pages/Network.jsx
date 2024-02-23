import React from "react";
import Navbar from "../components/header/Navbar";
import "./Network.css";
import Footer from "./Footer";

const Network = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap gap-[30px]  justify-center mt-[30px] ">

        {/* this is first section-------------------------------------------------------- */}
        <section className="  homeprofile  w-[75%] flex flex-col  sm:w-[75%] md:w-[30%] lg:w-[20%] xl:w-[20%] xl:max-w-[250px] ">
          {/* this is first box in this section ---- */}
          
         <div className="w-[100%] flex flex-col   py-3 box rounded-t-lg ">
         <span className="ps-5 pb-2 text-[18px] ">Manage my network</span>

          <div className="flex justify-between gap-3 hover:bg-slate-200 py-2 px-5">
            <div className="flex gap-3 items-center">
            <img className="w-[21px] h-[26px] opacity-55  " src="https://cdn2.iconfinder.com/data/icons/user-and-group/64/User_And_Group-22-512.png" alt="" />
            <span className="text-md  text-slate-600">Connections</span>
            </div>
            <span className="text-md justify-self-end   text-slate-600">337</span>
          </div>


         

          <div className="flex justify-between gap-3 hover:bg-slate-200 py-2 px-5">
            <div className="flex gap-3 items-center">
            <img className="w-[21px] h-[26px] opacity-65  " src="https://cdn1.iconfinder.com/data/icons/instagram-ui-glyph/48/Sed-01-512.png" alt="" />
            <span className="text-md  text-slate-600">Following&Followers</span>
            </div>
            <span className="text-md justify-self-end   text-slate-600"></span>
          </div>


         

          <div className="flex justify-between gap-3 hover:bg-slate-200 py-2 px-5">
            <div className="flex gap-3 items-center">
            <img className="w-[21px] h-[26px] opacity-55  " src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/group_half-512.png" alt="" />
            <span className="text-md  text-slate-600">Group</span>
            </div>
            <span className="text-md justify-self-end   text-slate-600">2</span>
          </div>


         

          <div className="flex justify-between gap-3 hover:bg-slate-200 py-2 px-5">
            <div className="flex gap-3 items-center">
            <img className="w-[21px] h-[22px] opacity-55  " src="https://cdn0.iconfinder.com/data/icons/finance-4-5/38/1-42-512.png" alt="" />
            <span className="text-md  text-slate-600">Events</span>
            </div>
            <span className="text-md justify-self-end   text-slate-600">33</span>
          </div>


         

          <div className="flex justify-between gap-3 hover:bg-slate-200 py-2 px-5">
            <div className="flex gap-3 items-center">
            <img className="w-[21px] h-[26px] opacity-55  " src="https://cdn3.iconfinder.com/data/icons/remixicon-document/24/pages-line-512.png" alt="" />
            <span className="text-md  text-slate-600">Pages</span>
            </div>
            <span className="text-md justify-self-end   text-slate-600">3</span>
          </div>


         

          <div className="flex justify-between gap-3 hover:bg-slate-200 py-2 px-5">
            <div className="flex gap-3 items-center">
            <img className="w-[21px] h-[26px] opacity-55  " src="https://cdn1.iconfinder.com/data/icons/gradak-business-solidarity/32/business-15-512.png" alt="" />
            <span className="text-md  text-slate-600">Newsletters</span>
            </div>
            <span className="text-md justify-self-end   text-slate-600"></span>
          </div>


         

          <div className="flex justify-between gap-3 hover:bg-slate-200 py-2 px-5">
            <div className="flex gap-3 items-center">
            <img className="w-[21px] h-[26px] opacity-55  " src="https://cdn.iconscout.com/icon/free/png-512/free-hashtag-tag-programming-language-connect-46258.png?f=webp&w=256" alt="" />
            <span className="text-md  text-slate-600">Hashtags</span>
            </div>
            <span className="text-md justify-self-end   text-slate-600">3</span>
          </div>



         </div>

           {/* this is second box in this section ---- */}
          <div id="hl2" className="box flex flex-col-reverse items-center rounded-b-lg ">

            <Footer/>
            
          </div>
        </section>
       
       {/* this is second section in home component --------------------------------------- */}
        <section className=" homescrollbar  w-[75%]   sm:w-[75%] md:w-[55%] lg:w-[60%] xl:w-[60%] xl:max-w-[750px] ">
        
        <div id="post" className="box py-2  rounded-md flex flex-col " >
          <div className="flex justify-between px-3 py-2">
           <span>Invitations</span>
           <button>Manage</button>
          </div>
          <div className="w-[100%] h-[.1px] bg-slate-200 "></div>
           <Invitations/>
           <Invitations/>
           <Invitations/>
        

        </div>
           <div className=" box my-4 mb-[23px] gap-3 content-start h-fit flex flex-wrap justify-center  ">
            <div className="w-[100%] pl-4 pt-2 ">People in the IT Services and IT Consulting industry you may know -</div>
             <Post name={"name"} age={"age"} note={"note"} />
             <Post name={"name"} age={"age"} note={"note"} />
             <Post name={"name"} age={"age"} note={"note"} />
             <Post name={"name"} age={"age"} note={"note"} />
             <Post name={"name"} age={"age"} note={"note"} />
             <Post name={"name"} age={"age"} note={"note"} />
             <Post name={"name"} age={"age"} note={"note"} />
             <Post name={"name"} age={"age"} note={"note"} />
             <Post name={"name"} age={"age"} note={"note"} />
            
            
           </div>




        </section>

      </div>
    </div>
  );
};

export default Network;








 export const Post=({name,age,note})=>{
 return (
  <div className="box pb-5 m-1 sm:w-[44%] md:w-[30%]  rounded-md box  ">
     <div className="w-[100%]">
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
                <button className="hover:underline">Kalpna Shrivastav</button>
                <span className="text-xs text-center text-stone-400">
                  Android Developer and Freelancer
                </span>
              </div>
            </div>
      <p className="my-5 text-center text-xs text-slate-400">15 mutual connections</p>      
      <div className="flex justify-center">
        <button className="text-blue-700 hover:bg-blue-200 flex justify-center w-[80%] border-blue-400 border-[2px] py-1 rounded-full "> 
        <div className="flex items-center ">
        <img className="w-[8px] h-[16px] " src="https://cdn0.iconfinder.com/data/icons/ui-blue/200/Untitled-5-512.png" alt="" />
       <span>+Connect</span>
        </div>
        </button>
      </div>

  </div>
 )
}






export const Invitations =()=>{
 return (
  <div className="px-3  py-4 flex flex-wrap justify-between">
   
   <div className="flex gap-4 w-[100%] max-w-[500px] ">
    <img className="w-[64px] h-[64px] rounded-full  " src="https://media.licdn.com/dms/image/D5603AQFAn4SR7YSE9g/profile-displayphoto-shrink_800_800/0/1707575650870?e=1714003200&v=beta&t=Sy4Q_5AqFjvV53TbzCRJpD-P0n24yPf5nr6n2OCsd2Q" alt="" />
    <div>
      <p className="text-slate-900"><span className="font-bold hover:underline">Prakhar Gautam</span> <span>follows you and is inviting you to connect</span></p>
      <p className="text-slate-600 text-sm">Student at University of Allahabad</p>
      <p className="text-slate-500 text-xs"><span className="font-bold">&#128279; </span> <span>Amaan Malik and 25 others</span> </p>
    </div>
   </div>
   <div className="flex gap-2 mt-3 pl-[43px] justify-center items-center ">
    <button className="text-slate-500 font-bold rounded-md hover:bg-slate-200 px-4 py-1  ">Ignore</button>
    <button className="text-blue-500 border-blue-500 border-[1px] py-1 px-4 rounded-full hover:bg-blue-100 hover:border-[2px] ">Accept</button>

   </div>

  </div>
 )
}