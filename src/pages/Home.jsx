import React from "react";
import Navbar from "../components/header/Navbar";
import "./Home.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { FaBookmark, FaPeopleArrows, FaSave } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

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
                  src="https://media.licdn.com/dms/image/D4D03AQFnvQ35gVoE0Q/profile-displayphoto-shrink_400_400/0/1702142323383?e=1714003200&v=beta&t=8MfbndI9hGrNrHum-unVU4ApFKnRLfcL5V1oVaZByl4"
                  alt=""
                />
                
                <Link to={'/profile'} className="font-bold hover:underline text-stone-600">
                  Abhay Singh
                </Link>
                <span className="text-xs text-stone-400">
                  C++ || DSA || Javascript || Reactjs
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
              <div className="flex items-center gap-2 pl-6 mt-2 py-2 border-t-2  hover:bg-slate-300 opacity-75 "> 
              <FaBookmark/>
              <p>my items</p>
              </div>
            </div>
          </div>

          {/* this is second box in this section ---- */}
          <div
            id="hl2"
            className="box md:flex flex-col  text-stone-600  sm:hidden  rounded-lg "
          >
            <div className="my-4 px-4">
              <p className="text-sm font-semibold">recent</p>
              <div className="flex items-center my-1 gap-2">
              <HiUserGroup size={13}/>
              <span className="text-xs">JavaScript</span>
              </div>
              <div className="flex items-center my-1 gap-2">
              <HiUserGroup size={13}/>
              <span className="text-xs">business analysis</span>
              </div>
              <div className="flex items-center my-1 gap-2">
              <HiUserGroup size={13}/>
              <span className="text-xs">Explore world</span>
              </div>
            </div>
            <div className="my-4 px-4">
              <p className="text-sm font-semibold text-blue-600 hover:underline">Groups</p>
              <div className="flex items-center gap-2">
              <HiUserGroup size={13}/>
              <span className="text-xs">JavaScript</span>
              </div>
            </div>
            <div className="my-4 px-4">
              <p className="text-sm font-semibold text-blue-600 hover:underline">Events +</p>
              <div className="flex items-center gap-2">
              <HiUserGroup size={13}/>
              <span className="text-xs">JavaScript</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2  mt-2 py-2 border-t-2  hover:bg-slate-300 opacity-75 "> 
             
              <p>Discover more</p>
              </div>
          </div>
        </section>

        {/* this is second section in home component --------------------------------------- */}
        <section className=" homescrollbar  w-[100%]   sm:w-[75%] md:w-[55%] lg:w-[40%] xl:w-[40%] xl:max-w-[550px] ">
          <div id="post" className="box h-[120px] rounded-md ">
            <div className="h-[70px] flex justify-between gap-2 items-center px-4 ">
              <img
                className="w-[55px] rounded-full h-[55px] "
                src="https://media.licdn.com/dms/image/D4D03AQFnvQ35gVoE0Q/profile-displayphoto-shrink_400_400/0/1702142323383?e=1714003200&v=beta&t=8MfbndI9hGrNrHum-unVU4ApFKnRLfcL5V1oVaZByl4"
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

        <section className=" homefooter w-[100%] hidden  sm:hidden lg:flex flex-col    sm:w-[85%] md:w-[25%] lg:w-[25%] xl:w-[25%] xl:max-w-[300px] ">
          <div className="box  rounded-lg px-3 py-5 ">
            <p className="font-bold">Linked tip for you ...</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa
              voluptatibus architecto eaque atque modi adipisci excepturi
              accusantium, repellendus dignissimos, nemo unde reprehenderit
              voluptatem eligendi tenetur cumque vitae? Dolor et sit quas alias
              unde!
            </p>
          </div>
          <div className="box mt-2  rounded-lg  ">
            <img className="h-[200px]" src="https://storage.googleapis.com/website-production/uploads/2023/05/linkedin-video-ads.webp" alt="" />
          </div>
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
              <span className="font-bold hover:underline text-slate-500">
                Shardha Khapara
              </span>{" "}
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
          <button>
            <img
              className="w-[20px] "
              src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_more_horiz_48px-256.png"
              alt=""
            />
          </button>
        </div>
      </div>

      <div>
        <p className="px-5 text-sm">
          {" "}
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perspiciatis maxime, repellat dolore non sit tenetur
          quidem temporibus quibusdam est nemo natus tempore deserunt.
        </p>
        <div className="flex justify-center bg-black">
          <img
            className="h-[500px] "
            src="https://media.licdn.com/dms/image/D5622AQFhiKpxDVY4pg/feedshare-shrink_800/0/1707750885720?e=1711584000&v=beta&t=i0bk20mirW2trlwOLc8-qGrdnk37RiRCFtCC3VOSu2g"
            alt=""
          />
        </div>
      </div>
      <div>
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

          <span className="hover:underline">152 comments . 11 reposts</span>
        </div>
        <hr />
        <div className="flex justify-evenly text-xs lg:text-sm py-1">
          <button className="flex gap-1 opacity-70 hover:bg-slate-300 w-[20%] justify-center py-3 rounded-sm ">
            <img
              className="w-[20px] "
              src="https://cdn1.iconfinder.com/data/icons/office-and-business-14/48/100-512.png"
              alt=""
            />
            <span>Like</span>
          </button>
          <button className="flex gap-1 opacity-70 hover:bg-slate-300 w-[20%] justify-center py-3 rounded-sm ">
            <img
              className="w-[20px] "
              src="https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/comment-dots-512.png"
              alt=""
            />
            <span>comment</span>
          </button>
          <button className="flex gap-1 opacity-70 hover:bg-slate-300 w-[20%] justify-center py-3 rounded-sm ">
            <img
              className="w-[20px] "
              src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/retweet2-512.png"
              alt=""
            />
            <span>Repost</span>
          </button>
          <button className="flex gap-1 opacity-70 hover:bg-slate-300 w-[20%] justify-center py-3 rounded-sm ">
            <img
              className="w-[20px] "
              src="https://cdn3.iconfinder.com/data/icons/feather-5/24/send-512.png"
              alt=""
            />
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};
