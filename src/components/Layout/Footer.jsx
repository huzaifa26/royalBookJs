import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer({}) {
    const date=new Date().getFullYear();
  return (
    <div className=' w-[63.802083333333336vw] m-auto flex mt-[34px] items-center flex-col'>
        <div className='flex w-[245px] justify-between items-center'>
          <a className='focus:border-[3px] w-[35px] h-[35px] flex justify-center items-center border-[#6581F8]' target={"_blank"} href='https://www.facebook.com/royalbookapp'><img src={"/facebook.svg"} alt=''/></a>
          <a className='focus:border-[3px] w-[35px] h-[35px] flex justify-center items-center border-[#6581F8]' target={"_blank"} href='https://www.instagram.com/royalbookapp/'><img src={"/instagram.svg"} alt=''/></a>
          <a className='focus:border-[3px] w-[35px] h-[35px] flex justify-center items-center border-[#6581F8]' target={"_blank"} href='https://www.tiktok.com/@royalbookapp'><img src={"/tiktok.svg"} alt=''/></a>
          <a className='focus:border-[3px] w-[35px] h-[35px] flex justify-center items-center border-[#6581F8]' target={"_blank"} href='https://twitter.com/royalbookapp'><img src={"/twitter.svg"} alt=''/></a>
        </div>
        <div className='w-[300px] flex justify-around mt-[23px]'>
          <Link to={"/privacy"}>
            <p className='sans font-[700] flex-1 !text-[12px] underline text-center cursor-pointer'>Privacy Policy</p>
          </Link>
          <Link to={"/term"}>
            <p className='sans font-[700] flex-1 !text-[12px] underline text-center cursor-pointer'>Terms of Service</p>
          </Link>
        </div>
        <button className='sans font-[600] w-[142px] h-[40px] rounded-full border-[1px] border-black !text-[15px] mt-[25px] hover:bg-black hover:text-white transition-all duration-[0.4s]'><a className='cursor-pointer' href="mailto:support@royalbookapp.com">Contact Us</a></button>
        <p className='text-[12px] text-center mt-[36px] sans font-[700] tracking-[0.05em] h-[14px] my-[8px]'>© {date} by RoyalBook</p>
    </div>
  )
}