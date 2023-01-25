import React from 'react'
import List from './List'
import {motion} from  "framer-motion"

const account = [
  {
    title: "What if I forgot my password?",
    description: "On the log in screen, click “Forgot Password”. Once you submit your email address associated with your account, a link to reset your password will be emailed to you.",
  },
  {
    title: "What if I forgot which email I signed up with?",
    description: <p>Reach out to us at <a className='cursor-pointer text-[#0261FF]' href="mailto:support@royalbookapp.com">support@royalbookapp.com</a> for assistance.</p>,
  },
  {
    title: "How do I delete my account?",
    description: "If you must delete your account, reach out to us at support@royalbookapp.com. We’re sad to see you go!",
  },
]

export default function Account({}) {
  return (
    <motion.div initial={{y:100}} animate={{y:0}} className='divide-y-2'>
    {account.map((data,index) => {
      return (
        <List data={data} index={index} />
      )
    })}
  </motion.div>
  )
}