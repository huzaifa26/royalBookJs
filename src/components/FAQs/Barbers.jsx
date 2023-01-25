import React from 'react'
import List from './List'
import {motion} from "framer-motion"

const barbers = [
  {
    title: "Does my shop owner need to approve my account?",
    description: "Nope! RoyalBook focuses on empowering every individual barber to be able to build their personal barber brand. On top of that, manage their clientele, schedule appointments and receive payments",
  },
  {
    title: "How do I find new clients?",
    description: "To ensure you reach new clientele, make sure your profile is complete and you are active on the social media feed. Our growing community of clients will find you themselves and book based on if your feed intrigues them. Your existing clients can leave reviews on your profile which can help you boost your attraction.",
  },
  {
    title: "What are “connections”?",
    description: <div>There are three potential networks that add up to make your total \"connections\".
    <p className='mt-[20px]'><span className='font-[700]'>Clients-</span> Any client who has booked an appointment.</p>
    <p><span className='font-[700]'>Other-</span> Any client who hasn\'t booked an appointment with you but follows your barber profile.</p>
    <p><span className='font-[700]'>Barbers-</span> Any barber who is connected with you and follows your page.</p>
    </div>,
  },
  {
    title: "What can I do with all my connections?",
    description: "We have a feature called \"Connection Blast\" where you can send a business notification to all of your connections at once.",
  },
  {
    title: "Can my clients rate and review me?",
    description: "Of course! Once a client has completed a visit with you, they will have the ability to leave a review and rate you out of 5 stars. Potential clients can use reviews as a reference for referral and validation.",
  },
  {
    title: "Is there a cancellation or no-show policy?",
    description: <p>Yes! In order for clients to receive a cancellation or no-show fee you must enable <span className='font-[700]'>mobile pay</span>. Your client will be prompted to add their credit card at booking and be notified that there is a cancellation or no-show fee. Once this is set up, you can enforce your policy.</p>,
  },
  {
    title: "Can I schedule time off?",
    description: "You definitely can. By creating an appointment, you can block off time for as long as you need. You can block off individual days or a larger amount of time.",
  },
]

export default function Barbers({ }) {
  return (
    <motion.div initial={{y:100}} animate={{y:0}} className='divide-y-2'>
      {barbers.map((data,index) => {
        return (
          <List data={data} index={index}/>
        )
      })}
    </motion.div>
  )
}