import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div>
        <div className='text-[100px]'>
      this  page is not exist 
    </div>
    <div>
       <Link to={"/"}>
       <span className='bg-green-300 p-3 rounded-lg'>go to home page</span>
       </Link>
    </div>
    </div>
  )
}

export default Notfound
