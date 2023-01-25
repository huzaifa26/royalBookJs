import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer({}) {
    const date=new Date().getFullYear();
  return (
    <div className=' w-[63.802083333333336vw] m-auto flex mt-[34px] items-center flex-col'>
        <div className='flex w-[245px] justify-between items-center'>
            <img src={"./facebook.svg"} alt=''/>
            <img src={"./instagram.svg"} alt=''/>
            <img src={"./tiktok.svg"} alt=''/>
            <img src={"./twitter.svg"} alt=''/>
        </div>
        <div className='w-[300px] flex justify-around mt-[23px]'>
          {/* <Link to={"/privacy"}> */}
            <p className='font0 flex-1 !text-[12px] underline text-center cursor-pointer'>Privacy Policy</p>
          {/* </Link> */}
          {/* <Link to={"/term"}> */}
            <p className='font0 flex-1 !text-[12px] underline text-center cursor-pointer'>Terms of Service</p>
          {/* </Link> */}
        </div>
        <button className='font9 w-[142px] h-[40px] rounded-full border-[1px] border-black !text-[15px] mt-[25px] hover:bg-black hover:text-white transition-all duration-[0.4s]'><a className='cursor-pointer' href="mailto:support@royalbookapp.com">Contact Us</a></button>
        <p className='text-[12px] text-center mt-[36px] font-bold h-[14px] my-[8px]'>© {date} by RoyalBook</p>
    </div>
  )
}