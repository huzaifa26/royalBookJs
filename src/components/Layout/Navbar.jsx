import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'


export default function Navbar({ }) {
    const [showNavMob, setNavMob] = useState(false);

    return (
        <>
            <div style={showNavMob ? { maxHeight: "10000px" } : { maxHeight: "0px" }} className='transition-all duration-300 fixed min-w-[100%] bg-[#fff] z-20 h-full'>
                {showNavMob&&<ul className='font1 relative top-[140px] flex flex-col gap-[20px] items-center'>
                    <NavLink onClick={() => setNavMob(false)} className={({ isActive }) => isActive ? "font0 w-[60px] text-center !text-[14px] text-[#6581F8]" : "font0 w-[60px] text-center !text-[14px]"} to={"/"}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink onClick={() => setNavMob(false)} className={({ isActive }) => isActive ? "font0 w-[60px] text-center !text-[14px] text-[#6581F8]" : "font0 w-[60px] text-center !text-[14px]"} to={"/faq"}>
                        <li>FAQs</li>
                    </NavLink>
                </ul>}
            </div>
            <div className='sticky top-0 z-20 bg-white'>
                <div className=' w-[63.802083333333336vw] xsm:w-[90%] sm:w-[90%] flex items-center justify-between m-auto h-[124px] pt-[20px]'>
                    <div className='flex items-center text-[35px] leading-[1.25em]'>
                        <img className='max-w-[51px] max-h-[49px]' src={"./IconForeground.png"} alt='' />
                        <h1 className='fontMain'>RoyalBook</h1>
                    </div>
                    <div>
                        <ul className='font1 flex ml-[-155px] xsm:hidden sm:hidden'>
                            <NavLink className={({ isActive }) => isActive ? "font0 w-[60px] text-center !text-[14px] text-[#6581F8]" : "font0 w-[60px] text-center !text-[14px]"} to={"/"}>
                                <li>Home</li>
                            </NavLink>
                            <NavLink className={({ isActive }) => isActive ? "font0 w-[60px] text-center !text-[14px] text-[#6581F8]" : "font0 w-[60px] text-center !text-[14px]"} to={"/faq"}>
                                <li>FAQs</li>
                            </NavLink>
                        </ul>
                        <ul style={showNavMob ? { gap: "0px" } : {}} onClick={() => setNavMob(!showNavMob)} className='hidden w-[20px] xsm:flex sm:flex gap-[5px] flex-col cursor-pointer relative z-40'>
                            <div style={showNavMob ? { transform: "rotate(45deg)", top: "3px" } : {}} className=' bg-black relative min-w-[30] border-[1px] border-black rounded-full transition-all'></div>
                            <div style={showNavMob ? { visibility: "hidden" } : {}} className=' bg-black min-w-[30] border-[1px] border-black rounded-full transition-all'></div>
                            <div style={showNavMob ? { transform: "rotate(-45deg)" } : {}} className=' bg-black min-w-[30] border-[1px] border-black rounded-full transition-all'></div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}