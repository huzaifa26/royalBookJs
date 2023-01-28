import { Result } from 'postcss';
import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import List from '../components/FAQs/List';
import AnimatedPage from '../components/Layout/AnimatedPage'

const data = [
  {
    title: "What if I forgot my password?",
    description: "On the log in screen, click “Forgot Password”. Once you submit your email address associated with your account, a link to reset your password will be emailed to you.",
  },
  {
    title: "What if I forgot which email I signed up with?",
    description: "Reach out to us at support@royalbookapp.com for assistance.",
  },
  {
    title: "How do I delete my account?",
    description: "If you must delete your account, reach out to us at support@royalbookapp.com. We’re sad to see you go!",
  },
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
    description: `There are three potential networks that add up to make your total \"connections\".
      Clients- Any client who has booked an appointment.
      Other- Any client who hasn\'t booked an appointment with you but follows your barber profile.</p>
      Barbers- Any barber who is connected with you and follows your page.`,
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
    description:"Yes! In order for clients to receive a cancellation or no-show fee you must enable mobile pay. Your client will be prompted to add their credit card at booking and be notified that there is a cancellation or no-show fee. Once this is set up, you can enforce your policy.",
  },
  {
    title: "Can I schedule time off?",
    description: "You definitely can. By creating an appointment, you can block off time for as long as you need. You can block off individual days or a larger amount of time.",
  },
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
  {
    title: "Is RoyalBook available on Android and iOS?",
    description:"Yes, RoyalBook is available for download on both the iOS App Store and Android Play Store.",
  },
  {
    title: "How user-friendly is RoyalBook?",
    description:"You do <span className='font-[700]'>not</span> need to be a technology expert to use RoyalBook! We’ve ran multiple tests and trials to make the mobile app as simple and user-friendly as possible. If anything is unclear, feel free to contact us at support@royalbookapp.com.",
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
    description:"As a team, we try to make sure that the app is always up and available to our users. Please reach out to us via email at support@royalbookapp.com for any unexpected issues, errors or bugs. Send a screenshot if possible, and we will get on top of the issue ASAP.",
  },
  {
    title: "What if RoyalBook doesn’t meet my needs?",
    description: "If you enjoy using RoyalBook but feel our current service is missing something that you’d like incorporated, please reach out! We’d love to discuss how we can potentially improve our app.",
  },
  {
    title: "Is RoyalBook free for barbers and clients?",
    description: "Yes, the app is free to download and use for barbers and clients. The only time clients may be charged is through mobile pay for a service fee.",
  },
]

export default function FAQ({ }) {

  const [showInput, setShowInput] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setsearchResults] = useState([]);
  const inputRef=useRef();

  function matchText(text) {
    if(searchResults.length>0){
      console.log("clearing");
      setsearchResults([]);
    }
    var matchedTitles = [];
    for (var i = 0; i < data.length; i++) {
      let title=data[i].title.toLowerCase()
      let description=data[i].description.toLowerCase()
      if (title.includes(text) || description.includes(text)) {
        matchedTitles.push(data[i]);
      }
    }
    setsearchResults(matchedTitles);
  }

  return (
    <AnimatedPage>
      <div className='w-[63.802083333333336vw] xsm:w-[100%] sm:w-[100%] m-auto bg-[#6581F8] h-[187px] flex items-center xsm:justify-center'>
        <h1 className='fontMain text-[72px] leading-[1.25em] tracking-normal	text-white ml-[99px] xsm:ml-0'>FAQs</h1>
      </div>
      <div className='w-[58.59375vw] xsm:w-[90%] m-auto xsm:pt-[15px] pt-[50px] pb-[30px]'>
        <div className='flex justify-end w-[100%] xsm:w-[100%] sm:w-[100%] m-auto'>
          <img style={showInput ? { zIndex: 100 } : {}} onClick={() => setShowInput(true)} className='transition-all duration-[0] cursor-pointer relative' src='/3844432_magnifier_search_zoom_icon.svg' alt='' />
          <input ref={inputRef} onChange={(e) => { matchText(e.target.value);setSearch(e.target.value);}} style={showInput ? { boxShadow: "0px 0px 1px 2px #6581F8", left: "-30px", maxWidth: "1000px", flex: 1 } : { left: "-30px", maxWidth: 0 }} className='relative outline-none transition-all duration-300 indent-[40px] h-[39px] text-[14px]' placeholder='Looking for something?' />
          <img style={showInput ? { display: "block" } : { display: "none" }} onClick={() => {setsearchResults([]);setSearch("");setShowInput(false);inputRef.current.value = "" }} className=' cursor-pointer relative' src='/cross.svg' alt='' />
        </div>
        <ul className='flex flex-wrap gap-[1.953125vw]  leading-[40px] sans font-[700]'>
          <NavLink to={"/faq/"} className={({ isActive }) => isActive ? "font-[900] w-[60px] text-center text-[18px] xsm:text-[16px] text-[#6581F8]" : "font-[900] w-[60px] text-center text-[18px] xsm:text-[16px]"} >
            <li className='cursor-pointer'>General</li>
          </NavLink>
          <NavLink to={"/faq/account"} className={({ isActive }) => isActive ? "font-[900] w-[60px] font text-center text-[18px] xsm:text-[16px] text-[#6581F8]" : "font-[900] w-[60px] text-center text-[18px] xsm:text-[16px]"} >
            <li className='cursor-pointer'>Account</li>
          </NavLink>
          <NavLink to={"/faq/barbers"} className={({ isActive }) => isActive ? "font-[900] w-[60px] text-center text-[18px] xsm:text-[16px] text-[#6581F8]" : "font-[900] w-[60px] text-center text-[18px] xsm:text-[16px]"} >
            <li className='cursor-pointer'>Barbers</li>
          </NavLink>
          <NavLink to={"/faq/clients"} className={({ isActive }) => isActive ? "font-[900] w-[60px] text-center text-[18px] xsm:text-[16px] text-[#6581F8]" : "font-[900] w-[60px] text-center text-[18px] xsm:text-[16px]"} >
            <li className='cursor-pointer'>Clients</li>
          </NavLink>
          <NavLink to={"/faq/pricing"} className={({ isActive }) => isActive ? "font-[900] w-[60px] text-center text-[18px] xsm:text-[16px] text-[#6581F8]" : "font-[900] w-[60px] text-center text-[18px] xsm:text-[16px]"} >
            <li className='cursor-pointer'>Pricing</li>
          </NavLink>
        </ul>
        {searchResults.length === 0  ?
          <Outlet /> :
          searchResults?.map((data) => <List data={data} />)
        }

      </div>
      <div className='w-[63.802083333333336vw] xsm:w-[100%] sm:w-[100%] bg-[#F5F5F5] h-[205px] m-auto pl-[99px] xsm:pl-[6.4453125vw] sm:pl-[6.4453125vw]'>
        <h2 className='pt-[53px] text-[20px] xsm:text-[18px] leading-[1.67em] sans font-[700]'>Couldn't find what you were looking for?</h2>
        <button style={{ boxShadow: "1.93px 2.30px 8px 0px rgba(0,0,0,0.45)" }} className='sans font-[700] text-[15px] mb-[47px] mt-[33px] w-[114px] h-[45px] text-white bg-black hover:bg-[rgba(0,0,0,0.6)] rounded-full transition-all duration-[0.4s]'><a className='cursor-pointer' href="mailto:support@royalbookapp.com">Contact Us</a></button>
      </div>
    </AnimatedPage>
  )
}