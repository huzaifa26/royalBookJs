import { doc, getDocs, collection } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { db } from '../Utils/firebase';
import GoogleMaps from '../Utils/GoogleMaps';

export default function Information(props) {
    const [services, setService] = useState([])

    const fetch = async () => {
        setService([]);
        const userRef = collection(db, "Users", props?.user?.id, "Services")
        const querySnapshot = await getDocs(userRef);
        querySnapshot.forEach((doc) => {
            setService((prevState) => [...prevState, doc.data()]);
        });
    }

    useEffect(() => {
        fetch();
    }, [props])

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

    const converDate = (time) => {
        let newTime = time.split(":");
        const date = new Date(2023, 01, 20, newTime[0], newTime[1], 0)
        return new Intl.DateTimeFormat('default', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            timeZone: "Europe/Dublin"
        }).format(date)
    }

    return (
        <div>
            <h3 className='sans font-bold text-[24px] mb-[8px]'>{props?.user?.shopName}</h3>
            <div className='flex items-center gap-[5px]'>
                <div className='w-[30px] h-[30px]'>
                    <img src='/scissor.svg' alt='' />
                </div>
                <p className='ubuntu'>{toCamelCase(props?.user?.barberType)}</p>
            </div>
            <div className='flex items-center gap-[5px]'>
                <div className='w-[30px] h-[30px]'>
                    <img src='/location.svg' alt='' />
                </div>
                <p className='ubuntu'>{props?.user?.address}</p>
            </div>
            <div className='relative mt-[20px] rounded-[15px] overflow-hidden'>
                <div className='w-[100%] h-[300px]  '>
                    <GoogleMaps lat={props?.user?.location._lat} lng={props?.user?.location._long} />
                </div>
                {props?.user["1"] !== undefined &&
                    <div style={{ backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.6) , rgba(0,0,0,0.1))" }} className='flex items-center absolute w-[100%] h-[100%]  top-[0%] left-[0%] px-[30px]'>
                        <div className='h-auto'>
                            <p className='ubuntu text-white'><span className='font-bold'>Monday:</span>{props?.user[1]?.start !== props?.user[1]?.end ? ` ${converDate(props?.user["1"]?.start)} - ${converDate(props?.user["1"]?.end)}`:` Closed`}</p>
                            <p className='ubuntu text-white'><span className='font-bold'>Tuesday:</span>{props?.user[2]?.start !== props?.user[2]?.end ? ` ${converDate(props?.user["2"]?.start)} - ${converDate(props?.user["2"]?.end)}`:` Closed`}</p>
                            <p className='ubuntu text-white'><span className='font-bold'>Wednesday:</span>{props?.user[3]?.start !== props?.user[3]?.end ? ` ${converDate(props?.user["3"]?.start)} - ${converDate(props?.user["3"]?.end)}`:` Closed`}</p>
                            <p className='ubuntu text-white'><span className='font-bold'>Thursday:</span>{props?.user[4]?.start !== props?.user[4]?.end ? ` ${converDate(props?.user["4"]?.start)} - ${converDate(props?.user["4"]?.end)}`:` Closed`}</p>
                            <p className='ubuntu text-white'><span className='font-bold'>Friday:</span>{props?.user[5]?.start !== props?.user[5]?.end ? ` ${converDate(props?.user["5"]?.start)} - ${converDate(props?.user["5"]?.end)}`:` Closed`}</p>
                            <p className='ubuntu text-white'><span className='font-bold'>Saturday:</span>{props?.user[6]?.start !== props?.user[6]?.end ? ` ${converDate(props?.user["6"]?.start)} - ${converDate(props?.user["6"]?.end)}`:` Closed`}</p>
                            <p className='ubuntu text-white'><span className='font-bold'>Sunday:</span>{props?.user[7]?.start !== props?.user[7]?.end ? ` ${converDate(props?.user["7"]?.start)} - ${converDate(props?.user["7"]?.end)}`:` Closed`}</p>
                        </div>
                    </div>}
            </div>
            <div className='mt-[30px] mb-[80px]'>
                <h3 className='sans font-bold text-[24px] mb-[8px]'>Services</h3>
                {services.map((s, index) => {
                    return (
                        <div key={index} style={{ boxShadow: "1px 1px 4px rgba(0,0,0,0.2)" }} className=' flex items-center min-w-[300px] xsm:w-[100%] sm:w-[80vw] md:w-[60vw] w-[32.552083333333336vw] min-h-[80px] my-[20px] p-[5px] roudned-[10px]'>
                            <div className='flex-1'>
                                <h3 className='sans font-bold text-[18px]'>{s.name}</h3>
                                <p className='sans text-[14px] font-bold'>{`${s.minutes} minutes`}</p>
                                <p className='sans text-[14px] font-bold'>{`${s.description}`}</p>
                            </div>
                            <div className='w-[50px]'>
                                <p className='sans text-[18px] font-bold'>{`$${s.price}`}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}