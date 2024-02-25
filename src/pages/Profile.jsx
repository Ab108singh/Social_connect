import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/header/Navbar'

const Profile = () => {
  return (
  <div>
 <Navbar/>
 <div className='w-[100%] mt-5 gap-x-7  gap-y-2    flex justify-center flex-wrap px-0  md:px-3'>
       <div className=' h-[500px] flex-grow-0   sm:flex-grow max-w-[550px]   md:max-w-[800px]   bg-white  w-[99%] md:w-[50%] rounded-lg overflow-hidden '>
       <div className="w-[100%] h-[2px] bg-slate-100">
              <div className=" h-[25vw]">
                <img
                  className="h-[50%] w-[100%]"
                  src="https://media.licdn.com/dms/image/D5616AQEdi3ggnWOcPQ/profile-displaybackgroundimage-shrink_350_1400/0/1705070102947?e=1714003200&v=beta&t=TA6Qn-3mJxxXiZgslsuQiHhclCFpvrrdvu9KifOYfYQ"
                  alt=""
                />
              <div className="flex flex-col pl-6">
                <img
                  className="w-[12vw] rounded-full mt-[-6vw] border-white border-2"
                  src="https://media.licdn.com/dms/image/D4D03AQFnvQ35gVoE0Q/profile-displayphoto-shrink_400_400/0/1702142323383?e=1714003200&v=beta&t=8MfbndI9hGrNrHum-unVU4ApFKnRLfcL5V1oVaZByl4"
                  alt=""
                />
                
                <Link to={'/profile'} className="font-bold hover:underline text-stone-600">
                  Abhay Singh
                </Link>
                <span className="text-xs text-stone-400">
                  C++ || DSA || Javascript || Reactjs
                </span>
                <span className='text-xs text-stone-500 '>something something <span>Lorem ipsum dolor sit </span></span>
              </div>
              </div>
            </div>
      
 
       </div>

       <div className='h-[500px] bg-slate-500 w-[99%] md:w-[250px]  max-w-[550px]   md:max-w-[800px] rounded-lg overflow-hidden '>

       </div>
       
    </div>

  </div>
  )
}

export default Profile
