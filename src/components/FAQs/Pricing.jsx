import React from 'react'
import List from './List'
import {motion} from "framer-motion"


const pricing = [
  {
    title: "Is RoyalBook free for barbers and clients?",
    description: "Yes, the app is free to download and use for barbers and clients. The only time clients may be charged is through mobile pay for a service fee.",
  },
]

export default function Pricing({}) {
  return (
    <motion.div initial={{y:100}} animate={{y:0}} className='divide-y-2'>
      {pricing.map((data,index)=>{
        return(
          <List data={data} index={index}/>
        )
      })}
    </motion.div>
  )
}