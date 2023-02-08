import React from 'react'
import { useEffect } from 'react';
import { collection, getDocs, limit, orderBy, startAfter } from "firebase/firestore";
import { useState } from 'react';
import { db } from '../components/Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { query, startAt} from "firebase/firestore";

export default function Profiles() {
    const navigate=useNavigate();
    const [user, setUsers] = useState([]);
    const [start,setStart]=useState(0);

    const fetch = async () => {
        setUsers([]);
        console.log("2222222222222222")
        const querySnapshot = await getDocs(collection(db, "Users"));
        querySnapshot.forEach((doc) => {
            setUsers((prevState) => [...prevState, doc.data()]);
        });
        // const usersRef = collection(db, "Users");
        // const q = query(usersRef,orderBy("firstname") ,startAt(start),limit(start+10));
        // const querySnapshot = await getDocs(q);
        // querySnapshot.forEach((doc) => {
        //     setUsers((prevState) => [...prevState, doc.data()]);
        // });
    }

    // const loadMoreHandler=()=>{
    //     setStart(start+10)
    // }

    useEffect(() => {
        console.log("1111111111111111")
        fetch();
    }, [])

    const profileClickHandler=(u)=>{
        navigate(`/profiles/${u.firstname}`,{state:{u}});
    }

    return (
        <>
        <div className='w-[63.802083333333336vw] pt-[10px] m-auto'>
            {user?.map((u,index) => {
                return (
                    <div key={`Users-${index}`} onClick={()=>profileClickHandler(u)} className='flex items-center gap-[15px] cursor-pointer my-[15px] w-[50%] m-auto rounded-[10px] min-h-[70px] pl-[20px] bg-slate-100 shadow-md'>
                        <img className='w-[50px] h-[50px] rounded-full' src={u.avatar} alt=""/>
                        <h1>{u.firstname + " " + u.lastname}</h1>
                    </div>
                )
            })}
        </div>
        </>
    )
}
