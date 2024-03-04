import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaHome, FaBriefcase, FaBell } from "react-icons/fa";
import { IoChatboxEllipses, IoPeople } from "react-icons/io5";

const links = [
    {
        text: "Home",
        path: "/",
        icon: <FaHome size={21} />,
    },
    {
        text: "Network",
        path: "/network",
        icon: <IoPeople size={21} />,
    },
    {
        text: "Jobs",
        path: "/jobs",
        icon: <FaBriefcase size={21} />,
    },
    {
        text: "Messages",
        path: "/massaging",
        icon: <IoChatboxEllipses size={21} />,
    },
    {
        text: "Notifications",
        path: "/notification",
        icon: <FaBell size={21} />,
    },
];

const Navbar = () => {
   
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);
  



    return (
        <header className={`w-full bg-white z-[1000] h-[60px] flex justify-center text-sm items-center sticky shadow-sm shadow-stone-300 ${visible?"top-0":"top-[-100px]"}  `}>
            <nav className="flex justify-between items-center max-w-6xl  w-full mx-auto px-5  ">
                <section className="  flex gap-[20px] w-[30%]   ">
                    <Link to={"/"}>
                        <img
                            className="w-[35px] h-[35px] "
                            src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png"
                            alt=""
                        />
                    </Link>
                    <div className=" max-w-[300px] sm:w-[20px] md:w-[170px] lg:w-[200px] xl:w-[300px] h-[31px] rounded-md md:bg-slate-200 xl:bg-slate-200 flex items-center  ">
                        <img
                            className="w-[25px] "
                            src="https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/search-512.png"
                            alt=""
                        />
                        <input
                            className="text-sm w-[100%] h-[100%] rounded-lg border-none bg-slate-200 outline-none hidden xl:block "
                            type="text"
                            placeholder="search here.."
                        />
                    </div>
                </section>

                <section className="flex items-center justify-end gap-5 flex-1 divide-x-2 divide-slate-200 divide-solid">
                    <section className="flex gap-[20px] sm:gap-[25px] md:gap-4 lg:gap-7  w-[73%] justify-around sm:justify-end">
                        {links.map((link) => {
                            return (
                                <Link to={link.path}>
                                    <div className="nav2 opacity-60 hover:opacity-100 flex flex-col items-center  ">
                                        <div>{link.icon}</div>
                                        <div className="hidden sm:block">
                                            {link.text}
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </section>

                    <section className="md:flex w-[26%] gap-2 md:gap-2 lg:gap-5 justify-end hidden   items-center">
                        <Link to={"/profile"} className="">
                            <div className="flex flex-col items-center opacity-60 hover:opacity-100">
                                <img
                                    className="rounded-full w-[25px] hidden sm:inline-block"
                                    src="https://media.licdn.com/dms/image/D4D03AQFnvQ35gVoE0Q/profile-displayphoto-shrink_400_400/0/1702142323383?e=1714003200&v=beta&t=8MfbndI9hGrNrHum-unVU4ApFKnRLfcL5V1oVaZByl4"
                                    alt=""
                                />
                                <div>Me&#9660;</div>
                            </div>
                        </Link>
                        {/* <div className="h-[63px] w-[1px] mx-2  border-slate-300 border  "></div> */}
                        <Link to={"/business"}>
                            <div className="flex flex-col opacity-60 hover:opacity-100  items-center justify-center">
                                <img
                                    className="w-[25px]  "
                                    src="https://cdn4.iconfinder.com/data/icons/web-design-device-solid-style-set-2/91/Web_-_Design_-_Device_82-512.png"
                                    alt=""
                                />
                                <div>Business&#9660;</div>
                            </div>
                        </Link>
                        <Link to={"/postjob"}>
                            <div className="flex flex-col  opacity-60 hover:opacity-100 items-center justify-center">
                                <img
                                    className="w-[25px] h-[15px] mt-3 mb-1 "
                                    src="https://cdn2.iconfinder.com/data/icons/office-38/24/office-52-512.png"
                                    alt=""
                                />
                                <div className=""> Job&#9660;</div>
                            </div>
                        </Link>
                    </section>
                </section>
            </nav>
        </header>
    );
};

export default Navbar;
