import React from 'react'
import List from './List'
import {motion } from "framer-motion"

const clients = [
  {
    title: "Do I have to download the app to book an appointment?",
    description: "Yes, a developed web version of the app is not yet available. At some point, we may decide to build a web log-in however, we will keep you updated.",
  },
  {
    title: "Are all barbers pre-approved by RoyalBook?",
    description: "The barbers listed on the app have individually signed up and have been added to our database. We do not pre-approve barbers, so if your barber isn't already on the app, be sure to invite them to sign up to RoyalBook.",
  },
  {
    title: "Can I book an appointment for myself and somebody else?",
    description: "Yes, you can book back to back appointments for yourself and somebody else. Just be sure to leave a comment under the appointment or direct message your barber so they know who this appointment is for.",
  },
  {
    title: "What if I am unable to attend to my appointment?",
    description: "you can’t make it to your appointment, make sure you cancel it on the app as soon as possible to avoid potential cancellation or no-show fees. The earlier you cancel your appointment, the sooner your appointment time becomes available for a new client to book.",
  },
]

export default function Clients({}) {
  return (
    <motion.div initial={{y:100}} animate={{y:0}} className='divide-y-2'>
      {clients.map((data,index)=>{
        return(
          <List data={data} index={index}/>
        )
      })}
    </motion.div>
  )
}