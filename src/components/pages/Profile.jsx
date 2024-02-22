import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='w-[100%]  flex justify-center'>
       <div className='w-[60%] h-[500px] bg-slate-300 mt-10 flex justify-center pt-10 rounded-lg  '>

       <div className='w-[80%] '>
            <p className='text-[45px] font-bold'>This profile is private</p>
           <Link to={"/"}>
           <button className='bg-blue-500 p-3 rounded-lg hover:bg-blue-300 my-3 '> Go to Homepage</button>
           </Link>
        </div>

       </div>
       
    </div>
  )
}

export default Profile
