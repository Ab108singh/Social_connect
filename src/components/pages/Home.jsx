import React from "react";
import Navbar from "../header/Navbar";
import "./Home.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-wrap gap-[20px]  justify-center mt-[30px] ">
        {/* this is first section-------------------------------------------------------- */}
        <section className="  homeprofile  w-[100%]  sm:w-[75%] md:w-[30%] lg:w-[20%] xl:w-[20%] xl:max-w-[250px] ">
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
              <div className="flex md:justify-between hover:bg-slate-200 items-center px-2">
                <span className="text-sm mx-4  text-slate-500">
                  Profile viewers{" "}
                </span>
                <span className="text-blue-600 text-sm ml-2 font-bold">
                  {" "}
                  227
                </span>
              </div>
              <div className="flex md:justify-between items-center hover:bg-slate-200 px-2">
                {" "}
                <span className="text-sm mx-4  text-slate-500">
                  Post impression{" "}
                </span>
                <span className="text-blue-600 text-sm ml-2 font-bold">
                  {" "}
                  113
                </span>
              </div>
              <div className="w-[100%] my-2 h-[1px] bg-slate-200"></div>
              <div className="w-[100%] my-2 h-[1px] bg-slate-200"></div>
            </div>
          </div>

          {/* this is second box in this section ---- */}
          <div id="hl2" className="box md:flex justify-center h-[54%] sm:hidden  rounded-lg ">
            this is something else
          </div>
        </section>

        {/* this is second section in home component --------------------------------------- */}
        <section className=" homescrollbar  w-[100%]   sm:w-[75%] md:w-[55%] lg:w-[40%] xl:w-[40%] xl:max-w-[550px] ">
          <div id="post" className="box h-[120px] rounded-md ">
            <div className="h-[70px] flex justify-between items-center px-4 ">
              <img
                className="w-[55px] rounded-full h-[55px] "
                src="https://media.licdn.com/dms/image/D5635AQElPtWDfHUBhA/profile-framedphoto-shrink_400_400/0/1705070996329?e=1708956000&v=beta&t=1NmgBiyhol0Tt55JYk0j0ExagTbtYUgo8JgEMlU6yuM"
                alt=""
              />
              <div className="w-[88%] h-[50px] hover:bg-slate-200 border border-slate-400 rounded-full "></div>
            </div>
            <div className="flex justify-around items-center">
              <div className="flex gap-1 hover:bg-slate-200 rounded-sm px-3 py-1">
                <img
                  className="w-[20px]"
                  src="https://cdn4.iconfinder.com/data/icons/utilities-part-2/64/image-512.png"
                  alt=""
                />
                <span>Media</span>
              </div>
              <div className="flex gap-1 hover:bg-slate-200 rounded-sm px-3 py-1">
                <img
                  className="w-[20px]"
                  src="https://cdn3.iconfinder.com/data/icons/wedding-unending-love-and-happiness/512/Calendar-512.png"
                  alt=""
                />
                <span>Event</span>
              </div>
              <div className="flex gap-1 hover:bg-slate-200 rounded-sm px-3 py-1">
                <img
                  className="w-[20px]"
                  src="https://cdn0.iconfinder.com/data/icons/files-15/64/_Article-512.png"
                  alt=""
                />
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
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Home;

export const Post = ({ name, age, note }) => {
  return (
    <div className=" rounded-md box my-3 ">
      <div className="px-3  py-4 flex f justify-between">
        <div className="flex gap-4 w-[70%] max-w-[500px] ">
          <img
            className="w-[44px] h-[44px] rounded-full  "
            src="https://media.licdn.com/dms/image/D4D03AQHGNAxeyJhZbQ/profile-displayphoto-shrink_800_800/0/1685972237021?e=1714003200&v=beta&t=R9ApILvWq0cu9Shk7zCe-mYQVp30ciNVdgaCXtE2xS0"
            alt=""
          />
          <div>
            <p className="text-slate-900">
              <span className="font-bold hover:underline text-slate-500">Shardha Khapara</span>{" "}
            </p>
            <p className="text-slate-600 hover:underline text-xs">
              Co-founder,ApnaCollege | Ex-Microsoft | Tedx Speaker
            </p>
            <p className="text-slate-500 text-xs">
              <span className="font-bold">&#128279; </span>{" "}
              <span>3w .&#127760; </span>{" "}
            </p>
          </div>
        </div>
        <div className="flex mt-3 pl-[43px] justify-center items-center">
          <button className="text-blue-500 font-bold rounded-md hover:bg-blue-200 px-4 py-1  ">
            +Follow
          </button>
          <button><img className="w-[20px] " src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_more_horiz_48px-256.png" alt="" /></button>
        </div>
      </div>
      
      <div>
        <p className="px-5 text-sm"> <span className="ml-4"></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maxime, repellat dolore non sit tenetur quidem temporibus quibusdam est nemo natus tempore deserunt.</p>
       <div className="flex justify-center bg-black">
       <img className="h-[500px] " src="https://media.licdn.com/dms/image/D5622AQFhiKpxDVY4pg/feedshare-shrink_800/0/1707750885720?e=1711584000&v=beta&t=i0bk20mirW2trlwOLc8-qGrdnk37RiRCFtCC3VOSu2g" alt="" />
     
       </div>
       
        </div>
      <div>
        <div className="flex justify-between px-2 text-slate-500 text-xs py-2">
         <div className="flex items-center  gap-1">
          <div className="flex items-center ">
            <img className="w-[12px] h-[12px] " src="https://cdn0.iconfinder.com/data/icons/communication-7-2/98/311-512.png" alt="" />
            <img className="w-[16px] h-[16px] " src="https://cdn2.iconfinder.com/data/icons/office-and-business-18/65/100-512.png" alt="" />
            <img className="w-[12px] h-[12px] " src="https://cdn3.iconfinder.com/data/icons/user-interface-filled-line-7/32/09_Like-512.png" alt="" />
          </div>
            <span className="hover:underline">Ayushi Kushwaha and 14,419 others</span>
         </div>

         <span className="hover:underline">
          152 comments . 11 reposts
         </span>
        </div>
        <hr />
        <div className="flex justify-evenly py-1">
          <button className="flex gap-1 opacity-70 hover:bg-slate-300 w-[20%] justify-center py-3 rounded-sm ">
            <img className="w-[20px] " src="https://cdn1.iconfinder.com/data/icons/office-and-business-14/48/100-512.png" alt="" />
            <span>Like</span>
          </button>
          <button className="flex gap-1 opacity-70 hover:bg-slate-300 w-[20%] justify-center py-3 rounded-sm ">
            <img className="w-[20px] " src="https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/comment-dots-512.png" alt="" />
            <span>comment</span>
          </button>
          <button className="flex gap-1 opacity-70 hover:bg-slate-300 w-[20%] justify-center py-3 rounded-sm ">
            <img className="w-[20px] " src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/retweet2-512.png" alt="" />
            <span>Repost</span>
          </button>
          <button className="flex gap-1 opacity-70 hover:bg-slate-300 w-[20%] justify-center py-3 rounded-sm ">
            <img className="w-[20px] " src="https://cdn3.iconfinder.com/data/icons/feather-5/24/send-512.png" alt="" />
            <span>Send</span>
          </button>
          

        </div>
      </div>


    </div>
  );
};
