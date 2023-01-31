import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../components/Utils/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 


export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const formRef = useRef();

  const signinSubmitHandler = async (e) => {
    e.preventDefault();

    if (formRef.current.password.value === formRef.current.confirmpassword.value) {
      createUserWithEmailAndPassword(auth, formRef.current.email.value, formRef.current.password.value)
        .then(async (userCredential) => {
          let user = {
            id: userCredential.user.uid,
            email: formRef.current.email.value,
            username: formRef.current.username.value
          }

          await setDoc(doc(db, "users", userCredential.user.uid), user)
            .then(() => {
              console.log("success");
            })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error)
          console.log("failed");
        });
    }
  }

  return (
    <div className='bg-[#F0F2F5] h-screen w-screen flex justify-center items-center'>
      <div className="bg-white px-6 py-3 rounded-[10px] min-w-[300px] shadow-lg w-[25.216vw]">
        <div className="flex flex-col items-center justify-center mt-[1.271vh] mb-4">
          <h2 className="text-[clamp(32px,1.978vw,81px)] font-[900]">Sign Up</h2>
        </div>
        <form onSubmit={signinSubmitHandler} ref={formRef}>
          <div className="flex flex-col my-4">
            <label className="text-[clamp(14px,0.801vw,32.82px)] font-bold text-[#000000] ">Email</label>
            <input className="emailIcon text-[clamp(14px,0.586vw,24px)] border-b-[0.23148148148148vh] rounded px-3 py-1 mt-2 h-[40px]" type="email" id="email" placeholder="Please type your email" required />
          </div>

          <div className="flex flex-col my-4">
            <label className="text-[clamp(14px,0.801vw,32.82px)] font-bold text-[#000000] ">Name</label>
            <input className="userIcon text-[clamp(14px,0.586vw,24px)] border-b-[0.23148148148148vh] rounded px-3 py-1 mt-2 h-[40px]" type="text" id="username" placeholder="Please type your name" required />
          </div>

          <div className="flex flex-col my-4 relative">
            <label className="text-[clamp(14px,0.801vw,32.82px)] font-bold text-[#000000]">Password</label>
            <input className="passwordIcon text-[clamp(14px,0.586vw,24px)] border-b-[0.23148148148148vh] rounded px-3 py-1 mt-2 h-[40px]" type={showPassword === false ? "password" : "text"} id="password" name='password' placeholder="Please type your password" required />
            {showPassword === false &&
              <div onClick={() => { setShowPassword(true) }} className='w-[20px] cursor-pointer absolute right-[3%] top-[60%]'>
                <img src='./eye-solid.svg' />
              </div>
            }
            {showPassword === true &&
              <div onClick={() => { setShowPassword(false) }} className='w-[22px] cursor-pointer absolute right-[3%] top-[60%]'>
                <img src='./eye-slash-solid.svg' />
              </div>
            }
          </div>

          <div className="flex flex-col my-4 relative">
            <label className="text-[clamp(14px,0.801vw,32.82px)] font-bold text-[#000000]">Confirm Password</label>
            <input className="passwordIcon text-[clamp(14px,0.586vw,24px)] border-b-[0.23148148148148vh] rounded px-3 py-1 mt-2 h-[40px]" id="confirmpassword" type={showPassword1 === false ? "password" : "text"} name="confirmpassword" placeholder="Please confirm your password" required />
            {showPassword1 === false &&
              <div onClick={() => { setShowPassword1(true) }} className='w-[20px] cursor-pointer absolute right-[3%] top-[60%]'>
                <img src='./eye-solid.svg' />
              </div>
            }
            {showPassword1 === true &&
              <div onClick={() => { setShowPassword1(false) }} className='w-[22px] cursor-pointer absolute right-[3%] top-[60%]'>
                <img src='./eye-slash-solid.svg' />
              </div>
            }
          </div>

          <div className="flex flex-col items-center justify-center my-3">
            <button style={{ boxShadow: "0px 0px 0px rgba(0,0,0,0)" }} className="button h-[4.3518518518519vh] min-w-[120px] min-h-[30px] !mt-[2.051vh] !mb-[1.221vh] rounded-full !py-1 !text-[clamp(14px,0.801vw,32.82px)] bg-[#81c2ff] !text-white !uppercase !font-bold">
              Signup
            </button>
            <p className='text-[14px] font-[400] '>Already have account? <Link className='font-[900] cursor-pointer hover:text-blue-400' to="/login">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}
