import React, { useContext } from 'react';
import { LoginContext } from '../LoginContext';
import { MdPermMedia } from "react-icons/md";

const Postpage = ({ setPop }) => {
  const { admin } = useContext(LoginContext);

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.3)" }}  onClick={() => setPop(false)} className="flex justify-center w-screen h-screen absolute top-10 z-30 pt-10 ">
        <div onClick={stopPropagation} className='w-[98%] max-w-[800px] z-40 h-[600px] rounded-md   bg-stone-100'>
          <div className='flex justify-between'>
           <div className='flex m-4 gap-2 p-2  rounded-lg'>
           <img
                className="w-[55px] rounded-full h-[55px] "
                src="/1.jpg"
                alt=""
              />
            <div>
              <p className=' text-xl font-bold text-stone-700 '>{admin.username}</p>
              <p className='text-xs text-stone-500 '>{admin.bio}</p>
            </div>
           </div>
            <button onClick={() => setPop(false)} className='w-[40px] m-2 h-[40px] text-3xl pb-[7px]  flex justify-center items-center  rounded-full hover:bg-stone-300'>x</button>
          </div>

          <div className='flex justify-center'>
            <textarea name="" placeholder='What do you want to talk about? ' id="" cols="70" rows="12" className='text-xl  outline-none p-2 bg-transparent '></textarea>
          </div>
          <div className='p-3 opacity-75 flex justify-center m-2 rounded-md gap-3 w-[150px] bg-stone-200 hover:bg-stone-300'>
          <MdPermMedia size={26} /> 
          <span>Add Media</span>
          </div>
          <div className='flex justify-center'><div className='border-[1px] w-[95%] '></div></div>

          <div className='flex justify-end p-3'>
            <button onClick={()=>setPop(false)} className='bg-blue-600 hover:bg-blue-800 rounded-lg px-6 py-1 font-semibold text-white '>Post</button>
          </div>



        </div>
      
    </div>
  );
};

export default Postpage;
