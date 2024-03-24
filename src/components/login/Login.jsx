import React, { useContext } from "react";
import Loginnav from "./Loginnav";
import Footer from "../../pages/Footer";
import { LoginContext } from "../LoginContext";
import { Link } from 'react-router-dom';

const Login = () => {

  let{makelogin}=useContext(LoginContext);

  return (
    <div className="flex flex-col justify-between">
      <div className=" flex flex-wrap justify-center">
        <Loginnav />
        <div className=" w-[90%] sm:w-[45%] mt-[100px]  ">
          

        <div className='flex justify-center'>
     <div className='flex flex-col w-[100%] max-w-[600px]  justify-start'>
        <p className='text-5xl  text-orange-800 '>Discover what your network can do for you</p>
      <form className='flex flex-col items-start w-[100%] max-w-[500px] my-4 '>
        <label className='w-[100%] ' htmlFor="Email">Email</label>
        <input className='w-[100%] mb-3 h-[40px] rounded-md ' type="text" />
        <label className='w-[100%] ' htmlFor="Email">Password</label>
        <input className='w-[100%] mb-3 h-[40px] rounded-md ' type="text" />
        <button className='text-xs w-[100%] my-1 text-blue-600 text-start'>Forgot password?</button>
        <Link onClick={()=>makelogin()} to={'/'} className='text-white text-center bg-blue-700 w-[100%] my-2 py-2 rounded-full hover:bg-blue-500 hover:text-black '>Submit</Link>
      </form>
    </div>
   </div>



          <img
            className="w-[90%] "
            src="https://scontent.fixc4-2.fna.fbcdn.net/v/t39.30808-6/281676737_3228104294144026_4381959379528061331_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=pm0vnn_e2M8AX_vUlZt&_nc_ht=scontent.fixc4-2.fna&oh=00_AfBXT_L7GF5nIhr4scrayoE4hRRShK2rJ3EUrvXxiJ0DYw&oe=65DDCC51"
            alt=""
          />
        </div>
        <div className="w-[90%] sm:w-[45%] pl-3 mt-[20px] sm:mt-[250px] ">
          <img
            className="w-[90%] "
            src="https://scontent.fixc4-1.fna.fbcdn.net/v/t39.30808-6/308424800_401366055509776_7652867127584418156_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=2X2JLpqp4SMAX_RbEdr&_nc_ht=scontent.fixc4-1.fna&oh=00_AfC2OqetBuT23T2MnC7es1Y6llCam3tMJtMOwx0q59rhqw&oe=65DCEA8F"
            alt=""
          />
        </div>
        <p className="w-[85%] text-stone-600 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          quis accusantium tempora dolorem laborum iste cumque alias veniam
          autem. Magnam officia animi adipisci, repellendus debitis libero.
          Explicabo reiciendis nesciunt dicta debitis nulla?
        </p>
        
      </div>
      <div className="bg-stone-300 h-[]">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
