import React from 'react'

const Loginform = () => {
  return (
    <div className='flex flex-col w-[90%]  justify-center'>
        <p className='text-5xl  text-orange-800 '>Discover what your network can do for you</p>
      <form className='flex flex-col items-start w-[100%] max-w-[500px] my-4 '>
        <label className='w-[100%] ' htmlFor="Email">Email</label>
        <input className='w-[100%] mb-3 h-[40px] rounded-md ' type="text" />
        <label className='w-[100%] ' htmlFor="Email">Password</label>
        <input className='w-[100%] mb-3 h-[40px] rounded-md ' type="text" />
        <button className='text-xs w-[100%] my-1 text-blue-600 text-start'>Forgot password?</button>
        <button className='text-white bg-blue-700 w-[100%] my-2 py-2 rounded-full hover:bg-blue-500 hover:text-black '>Submit</button>
      </form>
    </div>
  )
}

export default Loginform
