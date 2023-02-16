import { getDoc, doc, getDocs, collection } from 'firebase/firestore';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import Apps from '../components/UserInfo/Apps';
import Information from '../components/UserInfo/Information';
import { db } from '../components/Utils/firebase';
import Loader from '../components/Utils/Loader';

export default function UserInfo() {
    const params = useParams();
    const navigate=useNavigate();
    const [user, setUsers] = useState({});
    const [loading, setLoading] = useState(true)
    // const [changeTabs, setChangeTabs] = useState(false);

    useEffect(() => {
        document.title = `RoyalBook | ${params.username}`;
        return ()=>{
            // document.title = `RoyalBook`;
        }
    }, []);

    const fetch = async () => {
        const docRef = doc(db, "Usernames", params.username);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            try {
                const userRef = doc(db, "Users", docSnap.data().id)
                const userSnap = await getDoc(userRef);
                if(!userSnap.data().barber){
                    navigate("/")
                }
                setUsers((prev) => {
                    console.log(userSnap.data())
                    setLoading(false);
                    return userSnap.data()
                })
            } catch (e) {
                console.log(e)
            }
        } else {
            console.log("No such document!");
        }
    }

    useEffect(() => {
        fetch()
    }, [])

    if (loading) {
        return <Loader />
    }

    return (
        <div className='w-[63.802083333333336vw] xsm:w-[95%] sm:w-[90%] pt-[10px] m-auto'>
            <div className='w-[500px] xsm:w-[100%] sm:w-[100%] flex gap-[10px] bg-[#E1E1E1] rounded-full'>
                <img className='w-[130px] border-[2px] h-[130px] rounded-full object-cover' src={user?.avatar} alt="" />
                <div className='flex flex-col justify-center'>
                    <h2 className='sans font-bold text-[24px]'>{user?.firstname + " " + user?.lastname}</h2>
                    <div className='flex items-center gap-[5px]'>
                        <img src={'/call.svg'} alt="" />
                        <a href={`tel:${user?.phone}`}><p className='text-[#6581F8] underline ubuntu text-[18px]'>{user?.phone}</p></a>
                    </div>
                    <div className='flex items-center gap-[5px]'>
                        <div className='max-w-[20px] max-h-[20px]'>
                            <img src={'/instagram.svg'} alt="" />
                        </div>
                        <a target={"_blank"} href={`https://www.instagram.com/${user?.instagram}/`}><p className='text-[#6581F8] underline ubuntu text-[18px]'>{user?.instagram}</p></a>
                    </div>
                </div>
            </div>
            <p className='w-[500px] xsm:w-[100%] sm:w-[100%] text-center ubuntu text-[14px] my-[12px] px-[50px]'>{user?.bio}</p>
            <div className='flex xsm:gap-[10px] sm:gap-[15px] gap-[25px] w-[500px] xsm:w-[100%] sm:w-[100%] justify-center'>
                <button className='w-[170px] text-white  h-[40px] rounded-full bg-[#6581F8]'>Book</button>
                <button className='w-[170px] text-white  h-[40px] rounded-full bg-[#6581F8]'>Contact</button>
            </div>
            {/* <div className='mt-[20px] flex w-[370px] min-h-[40px]'>
                <div style={!changeTabs ?{borderBottom:"3px solid #6581F8"}:{borderBottom:"3px solid white"}} onClick={()=> setChangeTabs(false)} className='flex-1 flex justify-center items-center'>
                    <div className='w-[20px] h-[20px]'>
                        <img src='/warning.svg' alt='' />
                    </div>
                </div>
                <div style={changeTabs ?{borderBottom:"3px solid #6581F8"}:{borderBottom:"3px solid white"}} onClick={()=> setChangeTabs(true)} className='flex-1 flex justify-center items-center'>
                    <div className='w-[20px] h-[20px]'>
                        <img src='/app.svg' alt='' />
                    </div>
                </div>
            </div> */}
            <div className='mt-[20px]'>
                {/* {!changeTabs ? <Information user={user}/>: <Apps user={user}/>} */}
                <Information user={user} />
            </div>
        </div>
    )
}