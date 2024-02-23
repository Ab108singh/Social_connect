import React from "react";
import Navbar from "../components/header/Navbar";
import "./Home.css";
import Footer from "./Footer";

const Jobs = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-wrap gap-[20px]  justify-center mt-[30px] ">
        {/* this is first section-------------------------------------------------------- */}
        <section className="  homeprofile  w-[100%]  sm:w-[75%] md:w-[30%] lg:w-[20%] xl:w-[20%] xl:max-w-[250px] ">
          {/* this is first box in this section ---- */}
          <div className="w-[100%] flex flex-col gap-5 font-bold   py-3 box rounded-t-lg ">
            <div className="flex justify-between gap-3 hover:bg-slate-200 py-2 px-5">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[21px] h-[26px] opacity-55  "
                  src="https://cdn1.iconfinder.com/data/icons/neutro-essential/32/bookmark-512.png"
                  alt=""
                />
                <span className="text-md  text-slate-600">My jobs</span>
              </div>
            </div>

            <div className="flex justify-between gap-3 hover:bg-slate-200 py-2 px-5">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[21px] h-[26px] opacity-65  "
                  src="https://cdn1.iconfinder.com/data/icons/user-interface-2-outline/32/ui_setting_equalizer_filter_preferences-512.png"
                  alt=""
                />
                <span className="text-md  text-slate-600">Preferences</span>
              </div>
              <span className="text-md justify-self-end   text-slate-600"></span>
            </div>

            <div className="flex justify-between gap-3 hover:bg-slate-200 py-2 px-5">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[21px] h-[26px] opacity-55  "
                  src="https://cdn2.iconfinder.com/data/icons/business-management-and-growth-1-9/48/31-512.png"
                  alt=""
                />
                <span className="text-md  text-slate-600">
                  Skill Assessments
                </span>
              </div>
            </div>

            <div className="flex justify-between gap-3 hover:bg-slate-200 py-2 px-5">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[21px] h-[22px] opacity-55  "
                  src="https://cdn1.iconfinder.com/data/icons/logos-brands-1/24/logo_brand_brands_logos_docs_google-512.png"
                  alt=""
                />
                <span className="text-md  text-slate-600">Interview prep</span>
              </div>
            </div>

            <div className="flex justify-between gap-3 hover:bg-slate-200 py-2 px-5">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[21px] h-[26px] opacity-55  "
                  src="https://cdn2.iconfinder.com/data/icons/documents-and-files-v-2/100/doc-08-512.png"
                  alt=""
                />
                <span className="text-md  text-slate-600">Resume Builder</span>
              </div>
            </div>

            <div className="flex justify-between gap-3 hover:bg-slate-200 py-2 px-5">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[21px] h-[26px] opacity-55  "
                  src="https://cdn1.iconfinder.com/data/icons/social-media-vol-3/24/_youtube_video-512.png"
                  alt=""
                />
                <span className="text-md  text-slate-600">
                  Job seeker guidance
                </span>
              </div>
              <span className="text-md justify-self-end   text-slate-600"></span>
            </div>

            <div className="flex justify-between gap-3 hover:bg-slate-200 py-2 px-5">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[21px] h-[26px] opacity-55  "
                  src="https://cdn2.iconfinder.com/data/icons/pictograms-3/512/30-512.png"
                  alt=""
                />
                <span className="text-md  text-slate-600">
                  Application settings
                </span>
              </div>
            </div>
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
          <div className="box h-[300px] rounded-lg py-5 px-4 text-stone-600  ">
            <p className="font-bold">Job seeker guidance</p>
            <p className="text-xs">Recommended based on your activity</p>
            <p className="my-6">I want to improve my resume</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, impedit. Laborum quo possimus suscipit ducimus nisi
              perferendis dicta iusto blanditiis a!
            </p>
          </div>
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Jobs;

export const Post = ({ name, age, note }) => {
  return (
    <div className=" rounded-md box mb-2 ">
      <div className="px-3  py-4 flex f justify-between">
        <div className="w-[60%]">
          <p>there are no jobs in this field </p>
          <p>inhance your skills and do something else</p>
        </div>
        <button className=" hover:bg-slate-200 w-[30px] h-[30px] flex justify-center items-center rounded-full   ">
          x
        </button>
      </div>
    </div>
  );
};
