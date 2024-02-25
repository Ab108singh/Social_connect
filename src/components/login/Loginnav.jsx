import React from 'react'
import { Link } from 'react-router-dom'

const Loginnav = () => {
  return (
    <div className='w-screen flex justify-around md:justify-center bg-slate-200 h-[53px] items-center'>
     <div className='w-[20%] '>
     <img className='w-[80px] ' src="https://freelogopng.com/images/all_img/1656958733linkedin-logo-png.png" alt="" />
           
        </div>


     <div className='w-[45%] h-[100%] hidden sm:flex gap-6 md:gap-[40px] xl:gap-[70px] justify-end  '>
        <a className='flex flex-col justify-center items-center opacity-70 hover:opacity-100'  href="https://www.linkedin.com/pulse/topics/home/?trk=guest_homepage-basic_guest_nav_menu_articles">
         <img className='w-[20px]' src="https://cdn4.iconfinder.com/data/icons/ios-edge-glyph-7/25/Newspaper-Articles-512.png" alt="" />
         <p className='text-xs'>Articles</p>
        </a>
        <a className='flex flex-col justify-center items-center opacity-70 hover:opacity-100'  href="https://www.linkedin.com/pub/dir/+/+?trk=content-hub-home-page_guest_nav_menu_people">
         <img className='w-[20px]' src="https://cdn0.iconfinder.com/data/icons/social-media-2637/64/Friends-512.png" alt="" />
         <p className='text-xs'>People</p>
        </a>
        <a className='flex flex-col justify-center items-center opacity-70 hover:opacity-100'  href="https://www.linkedin.com/learning/search?trk=content-hub-home-page_guest_nav_menu_learning">
         <img className='w-[20px]' src="https://cdn0.iconfinder.com/data/icons/video-edit-tools/32/template_video_library_video_template_cinema_movie_subtitle-512.png" alt="" />
         <p className='text-xs'>Learning</p>
        </a>
        <a className='flex flex-col justify-center items-center opacity-70 hover:opacity-100'  href="https://www.linkedin.com/jobs/search?trk=content-hub-home-page_guest_nav_menu_jobs&position=1&pageNum=0">
         <img className='w-[20px]' src="https://cdn3.iconfinder.com/data/icons/business-glyph-vol-01/100/Job-512.png" alt="" />
         <p className='text-xs'>Jobs</p>
        </a>
        <a className='flex flex-col justify-center items-center opacity-70 hover:opacity-100'  href="">
         <img className='w-[20px]' src="https://cdn4.iconfinder.com/data/icons/ios-edge-glyph-7/25/Newspaper-Articles-512.png" alt="" />
         <p className='text-xs'>Get the app</p>
        </a>
        
      </div>


     <div className='w-[60%] sm:w-[25%]  flex justify-end sm:justify-center gap-1'>
       <Link to={'/login'}>
       <button className='border px-4 py-1 rounded-xl text-sm hover:bg-slate-400'>Join now</button>
       </Link>
       <Link to={'/login'}>
       <button className='text-blue-600 text-sm border-blue-700 border px-4 py-1 rounded-xl hover:bg-blue-200'>Sign in</button>
       </Link>
        </div>
    </div>
    
  )
}

export default Loginnav
