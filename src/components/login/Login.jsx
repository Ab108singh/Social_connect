import React from 'react'
import Loginnav from './Loginnav'
import Loginform from './Loginform'

const Login = ({setlogin}) => {
  return (
    <div>
      <Loginnav/>
      
     <div className='w-screen flex flex-wrap justify-center'>
          <div onClick={setlogin}  className=' w-[90%] sm:w-[45%] mt-[100px]  '>
           <Loginform/>
           <img className='w-[90%] ' src="https://scontent.fixc4-2.fna.fbcdn.net/v/t39.30808-6/281676737_3228104294144026_4381959379528061331_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=pm0vnn_e2M8AX_vUlZt&_nc_ht=scontent.fixc4-2.fna&oh=00_AfBXT_L7GF5nIhr4scrayoE4hRRShK2rJ3EUrvXxiJ0DYw&oe=65DDCC51" alt="" />
          </div>
          <div className='w-[90%] sm:w-[45%] pl-3 mt-[20px] sm:mt-[250px] '>
            <img className='w-[90%] ' src="https://scontent.fixc4-1.fna.fbcdn.net/v/t39.30808-6/308424800_401366055509776_7652867127584418156_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=2X2JLpqp4SMAX_RbEdr&_nc_ht=scontent.fixc4-1.fna&oh=00_AfC2OqetBuT23T2MnC7es1Y6llCam3tMJtMOwx0q59rhqw&oe=65DCEA8F" alt="" />
          </div>


     </div>

    </div>
  )
}

export default Login
