import React from 'react'
import Loginnav from './Loginnav'
import Loginform from './Loginform'

const Login = () => {
   

  return (
    <div>
      <Loginnav/>
      
     <div className='w-screen flex flex-wrap justify-center'>
          <div   className=' w-[90%] sm:w-[45%] mt-[100px]  '>
           <Loginform/>
           <img className='w-[90%] ' src="https://scontent.fixc4-2.fna.fbcdn.net/v/t39.30808-6/281676737_3228104294144026_4381959379528061331_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=pm0vnn_e2M8AX_vUlZt&_nc_ht=scontent.fixc4-2.fna&oh=00_AfBXT_L7GF5nIhr4scrayoE4hRRShK2rJ3EUrvXxiJ0DYw&oe=65DDCC51" alt="" />
          </div>
          <div className='w-[90%] sm:w-[45%] pl-3 mt-[20px] sm:mt-[250px] '>
            <img className='w-[90%] ' src="https://scontent.fixc4-1.fna.fbcdn.net/v/t39.30808-6/308424800_401366055509776_7652867127584418156_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=2X2JLpqp4SMAX_RbEdr&_nc_ht=scontent.fixc4-1.fna&oh=00_AfC2OqetBuT23T2MnC7es1Y6llCam3tMJtMOwx0q59rhqw&oe=65DCEA8F" alt="" />
          </div>
          <p className='w-[85%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quis accusantium tempora dolorem laborum iste cumque alias veniam autem. Magnam officia animi adipisci, repellendus debitis libero. Explicabo reiciendis nesciunt dicta debitis nulla?</p>
          <div className='w-[90%] max-w-[1100px]'>
          <div className='w-[90%] flex justify-start '>
            <img className='my-4 w-[70%] max-w-[500px] ' src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg" alt="" />
            <p className='py-5 px-3  max-w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis aperiam quod?</p>
          </div>
          <div className='w-[90%] flex justify-end '>
          <p className='py-5 px-3 max-w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis aperiam quod?</p>
          
            <img className='my-4 w-[70%] max-w-[500px] ' src="https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_640.jpg" alt="" />
          </div>
          
         
          <p className='py-5 px-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium vitae, suscipit veniam dolor alias placeat praesentium dicta veritatis vero eum quo, doloremque incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis aperiam quod?</p>
          
          </div>

     </div>

    </div>
  )
}

export default Login
