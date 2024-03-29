import React, { useState } from 'react'
import dropdown from "../../assets/downarrow.svg";
import { motion } from "framer-motion"
import "../../../src/index.css"


export default function List({ data, index }) {
    const [isOpen, setIsOpen] = useState(index===0?true:false);


    return (
        <div>
            <div onClick={() => setIsOpen(!isOpen)} className='h-[66px] py-[8px] flex items-center justify-between cursor-pointer'>
                <h1 className='!text-[15px] sans font-[600]'>{data.title}</h1>
                <img className={isOpen?'rotate-[-90deg] max-w-[14px] max-h-[14px]':'rotate-90 max-w-[14px] max-h-[14px]'} src={dropdown} alt="" />
            </div>
            <div className={`answer ${isOpen ? "open" : "closed"}`}>
                {/* <p className='text-[14px] leading-[1.2em] font-[300]' dangerouslySetInnerHTML={{__html: data.description}}></p> */}
                <p style={{fontFamily:"Source Sans Pro"}} className='!ubuntu font-[400] !text-[14px] leading-[1.2em] w-[92%]'>{data.description}</p>
                <p className='h-[30px]'></p>
            </div>
        </div>
    )
}