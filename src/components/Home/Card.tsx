import React from 'react'

export default function Card({ data }) {
    return (
        <div className='w-[330px] flex flex-col items-center'>
            <div style={{outlineColor:data.type === "barber"? "#B1BFFB" :"#D5D5D5"}} className='rounded-full outline outline-[8px] w-[184px] h-[184px] overflow-hidden'>
                <img style={{top:data.type === "barber"? "-25px" :"0px", minWidth:data.type==="customer2"?"230px":"auto",left:data.type==="customer2"?"-20px":"0",}} className='object-fill  relative top-[-25px] grayscale-[100%]' src={data.img} alt='' />
            </div>
            <h2 className='font2 mt-[16px] mb-[6px] !text-[26px]'>{data.title}</h2>
            <p className='font2 !text-[13px] mb-[17px]'>{data.occup}</p>
            <p className='font9 w-[258px] !text-center !font-[400] !text-[15px]'>{data.desc}</p>
        </div>
    )
}