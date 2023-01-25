import React from 'react'
import List from './List'
import {motion} from "framer-motion"


const general = [
  {
    title: "Is RoyalBook available on Android and iOS?",
    description: <p>Yes, RoyalBook is available for download on both the iOS App Store and Android Play Store.</p>,
  },
  {
    title: "How user-friendly is RoyalBook?",
    description: <p>You do <span className='font-[700]'>not</span> need to be a technology expert to use RoyalBook! We’ve ran multiple tests and trials to make the mobile app as simple and user-friendly as possible. If anything is unclear, feel free to contact us at <a className='cursor-pointer text-[#0261FF]' href="mailto:support@royalbookapp.com">support@royalbookapp.com</a>.</p>,
  },
  {
    title: "Where is my data stored?",
    description: "All data is stored securely on Google’s cloud server.",
  },
  {
    title: "Can I use the app on a tablet?",
    description: "It’s possible to use the app on a tablet however, RoyalBook is tailored for iPhone and Androids. If you are using it on a tablet, the format may be off.",
  },
  {
    title: "Does RoyalBook operate internationally?",
    description: "Currently, RoyalBook is available in the United States. However, we are working to make the app available in other countries.",
  },
  {
    title: "Why am I not receiving RoyalBook notifications?",
    description: "To receive notifications, please turn on notifications in the Settings of your mobile device.",
  },
  {
    title: "How often do you guys make updates and add new features?",
    description: "Our development team is constantly working to release new features. We take user feedback to build upon our app. We won’t be content until you are!",
  },
  {
    title: "What do I do if RoyalBook goes down or the service is temporarily unavailable?",
    description: <p>As a team, we try to make sure that the app is always up and available to our users. Please reach out to us via email at <a className='cursor-pointer text-[#0261FF]' href="mailto:support@royalbookapp.com">support@royalbookapp.com</a> for any unexpected issues, errors or bugs. Send a screenshot if possible, and we will get on top of the issue ASAP.</p>,
  },
  {
    title: "What if RoyalBook doesn’t meet my needs?",
    description: "If you enjoy using RoyalBook but feel our current service is missing something that you’d like incorporated, please reach out! We’d love to discuss how we can potentially improve our app.",
  },
]

export default function General({ }) {
  return (
    <motion.div initial={{y:100}} animate={{y:0}} className='divide-y-2'>
      {general.map((data,index) => {
        return (
          <List data={data} index={index}/>
        )
      })}
    </motion.div>
  )
}