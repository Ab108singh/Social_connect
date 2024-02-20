import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="w-screen bg-slate-300 h-[60px] flex justify-center text-sm items-center">
      <nav className="flex pl-5 w-[100%] lg:w-[80%]  justify-between items-center  ">

        <section className="  flex gap-[20px] w-[30%]   ">
        <Link to={"/"} >
          <img
            className="w-[35px] h-[35px] "
            src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png"
            alt=""
          />
          </Link>
          <div className=" max-w-[300px] sm:w-[20px] md:w-[170px] lg:w-[200px] xl:w-[300px] h-[31px] rounded-md md:bg-white xl:bg-white flex items-center  ">
          
           <img
              className="w-[25px] "
              src="https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/search-512.png"
              alt=""
            />
          

          </div>
        </section>



        <section className="flex gap-[23px] xl:gap-[80px] justify-around md:justify-end sm:text-xs text-sm  w-[72%] md:w-[55%] ">
         <Link to={"/"}>
         <div className="nav2 ">
            <div>
              {" "}
              <img
                className="navlogo"
                src="https://cdn3.iconfinder.com/data/icons/font-awesome-solid/576/house-512.png"
                alt=""
              />
            </div>
            <div className="hidden sm:block">Home</div>
          </div>
         </Link>
          <Link to={"/networks"}>
          <div className="nav2  ">
            <svg
              className="navlogo "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              focusable="false"
            >
              <path d="M12 6.5a4.5 4.5 0 114.5 4.5A4.49 4.49 0 0112 6.5zm6 6.5h-3a3 3 0 00-3 3v6h9v-6a3 3 0 00-3-3zM6.5 6A3.5 3.5 0 1010 9.5 3.5 3.5 0 006.5 6zm1 9h-2A2.5 2.5 0 003 17.5V22h7v-4.5A2.5 2.5 0 007.5 15z"></path>
            </svg>
            <div className="hidden sm:block">My.network</div>
          </div>
          </Link>
          <Link to={"/"}>
          <div className="nav2  ">
            <svg
              className="navlogo  "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              focusable="false"
            >
              <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
            </svg>
            <div className="hidden sm:block">Jobs</div>
          </div>
          </Link>
         <Link to={"/"}>
         <div className="nav2  ">
            <svg
              className="navlogo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              focusable="false"
            >
              <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
            </svg>
            <div className="hidden sm:block">Messaging</div>
          </div>
         </Link>
         <Link className=" ">
         <div className="nav2 w-[45px] ">
            <div> 
              
              <img
                className="navlogo w-[20px] h-[20px] "
                src="https://cdn4.iconfinder.com/data/icons/ecommerce-glyph-20/512/bell-512.png"
                alt=""
              />
            </div>
            <div className="hidden sm:block">Notification</div>
          </div>
         </Link>
        </section>





        
        <section className="pl-[23px] gap-3 w-[24%] hidden sm:flex sm:text-[11px] md:text-[13px] justify-around items-center ">
          <Link className="w-[23px] ">
          <div>
            <div >
                <img className="rounded-full w-[40px]" src="https://media.licdn.com/dms/image/D5635AQElPtWDfHUBhA/profile-framedphoto-shrink_400_400/0/1705070996329?e=1708916400&v=beta&t=d-8eDbWnjKK030c0g9wNbvDbRIzIZ6-x6SAJhz6S-6g" alt="" />
                <div>Me&#9660;</div>
            </div>
          </div>
          </Link>
            <div className="h-[63px] w-[1px] mx-1 bg-slate-800 border-slate-400 border  "></div>
            <Link className="w-[23px] ">
          <div className="flex flex-col  items-center justify-center">
            <img className="w-[25px]  " src="https://cdn4.iconfinder.com/data/icons/web-design-device-solid-style-set-2/91/Web_-_Design_-_Device_82-512.png" alt="" />
            <div>Business&#9660;</div>
          </div>
            </Link>
          <Link >
          <div className="flex flex-col mt-[-6px] w-[64px] items-center justify-center">
            <img className="w-[25px] h-[15px] mt-3 mb-1 " src="https://cdn2.iconfinder.com/data/icons/office-38/24/office-52-512.png" alt="" />
            <div className=""> Job&#9660;</div>
          </div>
          </Link>
        </section>



      </nav>
    </header>
  );
};

export default Navbar;
