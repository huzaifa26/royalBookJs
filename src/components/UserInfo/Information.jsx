import React from 'react'
import GoogleMaps from '../Utils/GoogleMaps';

export default function Information(props) {
    console.log(props)

    function toCamelCase(str) {
        let words = str.split(' ');
        let camelCased = '';
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            camelCased += " "
            camelCased += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        return camelCased;
    }

    console.log(props?.user["1"].start);
    return (
        <div>
            <h3 className='sans font-bold text-[24px]'>{props?.user?.shopName}</h3>
            <div className='flex items-center'>
                <div className='w-[30px] h-[30px]'>
                    <img src='/scissor.svg' alt='' />
                </div>
                <p className='ubuntu'>{toCamelCase(props?.user?.barberType)}</p>
            </div>
            <div className='flex items-center'>
                <div className='w-[30px] h-[30px]'>
                    <img src='/location.svg' alt='' />
                </div>
                <p className='ubuntu'>{props?.user?.address}</p>
            </div>
            <div className='relative mt-[20px] rounded-[15px] overflow-hidden'>
                <div className='w-[100%] h-[300px]  '>
                    <GoogleMaps lat={props?.user?.location._lat} lng={props?.user?.location._long} />
                </div>
                <div className='absolute top-[18%] left-[3%]'>
                    <p className='ubuntu text-white'><span className='font-bold'>Monday:</span>{` ${props?.user["1"].start}AM - ${props?.user["1"].end}PM`}</p>
                    <p className='ubuntu text-white'><span className='font-bold'>Tuesday:</span>{` ${props?.user["2"].start}AM - ${props?.user["2"].end}PM`}</p>
                    <p className='ubuntu text-white'><span className='font-bold'>Wednesday:</span>{` ${props?.user["3"].start}AM - ${props?.user["3"].end}PM`}</p>
                    <p className='ubuntu text-white'><span className='font-bold'>Thursday:</span>{` ${props?.user["4"].start}AM - ${props?.user["4"].end}PM`}</p>
                    <p className='ubuntu text-white'><span className='font-bold'>Friday:</span>{` ${props?.user["5"].start}AM - ${props?.user["5"].end}PM`}</p>
                    <p className='ubuntu text-white'><span className='font-bold'>Saturday:</span>{` ${props?.user["6"].start}AM - ${props?.user["6"].end}PM`}</p>
                    <p className='ubuntu text-white'><span className='font-bold'>Sunday:</span>{` ${props?.user["7"].start}AM - ${props?.user["7"].end}PM`}</p>
                </div>
            </div>
        </div>
    )
}