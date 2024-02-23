import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='w-[100%] flex flex-wrap px-4 py-3 justify-center '>
         <Items val={"About"}/>
         <Items val={"Accessibility"}/>
         <Items val={"Help Center"}/>
         <Items val={"Privacy & Terms"}/>
         <Items val={"Ad Choices"}/>
         <Items val={"Advertising"}/>
         <Items val={"Business Services"}/>
         <Items val={"Get the Linkedin app"}/>
         <Items val={"More"}/>
         <div className='flex  w-[100%]  justify-center'> 
            <img className='w-[55px] h-[15px]' src="https://freelogopng.com/images/all_img/1656958733linkedin-logo-png.png" alt="" />
            <p className=' text-[11px] ml-1'>LinkedIn Corporation &#169; 2024 </p>
         </div>
      </div>
    </div>
  )
}

export default Footer




export const Items=({val})=>{
   return (
    <span className='text-xs text-slate-500 hover:underline m-2 hover:text-slate-700'>
        {val}
    </span>
   )
}