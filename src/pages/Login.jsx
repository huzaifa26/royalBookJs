import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate=useNavigate();

    const [showPassword,setShowPassword]=useState(false);
    const formSubmitHandler=(e)=>{
        e.preventDefault();
    }

  return (
    <div className='bg-[#F0F2F5] h-screen w-screen flex justify-center items-center'>
          <div className="bg-white px-6 py-3 rounded-[10px] min-w-[300px] shadow-lg w-[21.216vw]">
            <div className="flex flex-col items-center justify-center mt-[1.271vh] mb-4">
              <h2 className="text-[clamp(32px,1.978vw,81px)] font-[900]">Login</h2>
            </div>
            <form onSubmit={formSubmitHandler}>
              <div className="flex flex-col my-2">
                <label className="text-[clamp(14px,0.801vw,32.82px)] font-bold text-[#000000] ">Email</label>
                <input name="email" className="emailIcon text-[clamp(14px,0.586vw,24px)] border-b-[0.23148148148148vh] rounded px-3 py-1 mt-2 h-[40px]" type="text" placeholder="Type your email" />
              </div>
              <div className="flex flex-col mt-10 relative">
                <label className="text-[clamp(14px,0.801vw,32.82px)] font-bold text-[#000000]">Password</label>
                <input name="password" className="passwordIcon text-[clamp(14px,0.586vw,24px)] border-b-[0.23148148148148vh] rounded px-3 py-1 mt-2 h-[40px]" type={showPassword===false?"password":"text"} placeholder="Type your password" />
                {showPassword === false &&
                <div onClick={()=>{setShowPassword(true);console.log("showing")}} className='w-[20px] cursor-pointer absolute right-[3%] top-[60%]'>
                  <img src='./eye-solid.svg'/>
                </div>
                }
                {showPassword === true &&
                <div onClick={()=>{setShowPassword(false);console.log("hiding")}} className='w-[22px] cursor-pointer absolute right-[3%] top-[60%]'>
                  <img src='./eye-slash-solid.svg'/>
                </div>
                }
              </div>
              <div className="flex flex-col items-center justify-center my-3">
                <div className="flex w-full items-center justify-end text-xs text-gray-500">
                  <p onClick={() => { navigate('/forgotPassword'); }} className="text-[clamp(12px,0.659vw,27px)] text-[#000] font-semibold cursor-pointer hover:text-blue-400">Forgot password?</p>
                </div>
                <button style={{ boxShadow: "0px 0px 0px rgba(0,0,0,0)" }} className="button h-[4.3518518518519vh] min-w-[150px] min-h-[30px] !mt-[2.051vh] !mb-[1.221vh] rounded-full !py-1 !text-[clamp(14px,0.801vw,32.82px)] bg-[#81c2ff] !text-white !uppercase !font-bold">
                  Login
                </button>
                <button onClick={() => { navigate('/signup') }} style={{ background: "white", color: "white", boxShadow: "0px 0px 0px rgba(0,0,0,0)" }} className="rounded-full button !mb-[4.443vh] min-w-[150px] min-h-[30px] !my-1 !py-1 !text-[clamp(14px,0.801vw,32.82px)] !bg-white !border-2 !border-[#303035] !text-[#303035] !font-bold !uppercase">
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
  )
}
