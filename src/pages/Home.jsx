import React from 'react'
import ApplePlay from "../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917 copy.svg"
import GooglePlay from "../assets/google-play-badge.png"
import DownArrow from "../assets/downarrow.svg"
import LoginIcon from "../assets/Log In.png"
import ProfileImage from "../assets/Profile.png"
import DetailsImage from "../assets/Details.png"
import Card from '../components/Home/Card'
import Barber1 from "../assets/IMG_3061.jpg"
import Barber2 from "../assets/IMG_3060.jpg"
import Barber3 from "../assets/IMG_3059.jpg"
import Customer1 from "../assets/IMG_3062.JPG.jpg"
import Customer2 from "../assets/IMG_C866B9BE1105-1.jpeg"
import Customer3 from "../assets/IMG_D341AA4258FC-1.jpeg"
import Appointment1 from "../assets/Find.png"
import Appointment2 from "../assets/Book.png"
import Appointment3 from "../assets/Appointments.png"
import LogoPreview from "../assets/AppImage (5)_edited.png"
import Safari from "../assets/testflight-64x64_2x.png";
import AnimatedPage from '../components/Layout/AnimatedPage'

const data = [
    {
        type: "barber",
        img: Barber1,
        title: "Jacob D.",
        occup: "Master Barber | Seattle, WA",
        desc: '"I love the control I get with my business. I can set my hours to make it easy for clients to pick a time to schedule with me. RoyalBook has definitely helped me manage all my clients."'
    },
    {
        type: "barber",
        img: Barber2,
        title: "Lj E.",
        occup: "Master Barber | Seattle, WA",
        desc: '"RoyalBook\'s booking is easy to use and looks professional. My clients really appreciate the convenience of seeing my calendar and requesting appointments directly from the app."'
    }, {
        img: Barber3,
        type: "barber",
        title: "Jacob D.",
        occup: "Master Barber | Miami, FL",
        desc: '“I run a small barber business and RoyalBook saves me time and has streamlined my bookings. As I slowly started uploading more pictures and poitmy business grew significantly!"'
    },
]


const dataCustomer = [
    {
        type: "customer",
        img: Customer1,
        title: "Rashad L.",
        occup: "Master Barber | Seattle, WA",
        desc: '"RoyalBook connected me with barbers that made sure my lineups stayed fresh. I\'m glad I finally found a barber I want to stick with!"'
    },
    {
        type: "customer2",
        img: Customer2,
        title: "Marquese C.",
        occup: "Master Barber | Seattle, WA",
        desc: '"The feed was a great way to find my new barber. I was able to see the work of local barbers in my area during my busy NBA schedule and feel confident booking my appointment!"'
    }, {
        type: "customer",
        img: Customer3,
        title: "Isaiah P.",
        occup: "Master Barber | Miami, FL",
        desc: '"I\'m a busy guy, so I love the fact RoyalBook sends me confirmations and reminders on all my appointments."'
    },
]

export default function Home({ }) {

    return (
        <AnimatedPage>
            <div className='bg-[#6581F8]'>
                <div className='w-[63.802083333333336vw] m-auto flex xsm:flex-col xsm:items-center sm:flex-col sm:items-center h-full'>
                    <div className='w-[35.091145833333336vw] flex flex-col items-center'>
                        <h2 className='fontMain text-[clamp(60px,5.208333333333333vw,80px)] text-white mt-[108px] mb-[2px]'>RoyalBook</h2>
                        <h3 className='w-[32.096354166666664vw] max-w-[493px] text-center min-w-[300px] text-[24px] tracking-[0.14em] leading-[33.6px] font7'>Build your business the Royal way</h3>
                        <p className='w-[32.096354166666664vw] min-w-[310px] max-w-[493px] text-[#33417c] !text-center !text-[18px] mt-[32px] mb-[41px] tracking-[0.05em] !leading-[23.4px] font7'>A social media booking platform tailored for barbers to connect with others in the industry. Clients can find nearby barbers and book appointments directly through the app.</p>
                        <p className='text-white text-[18px]'>Try the beta app</p>
                        <div className='flex xsm:flex-col mt-[3.5px] mb-[5.5px] justify-center items-center'>
                            <a target={"_blank"} href='https://testflight.apple.com/join/GhvNB40u'><img src={ApplePlay} alt="" /></a>
                            <a target={"_blank"} href='https://testflight.apple.com/join/GhvNB40u'><img className='max-w-[216px] min-h-[93px] max-h-[150.12px]' src={GooglePlay} alt="" /></a>
                        </div>
                        <p className='font7 text-[#33417c] mb-[14px] !text-[16px]'>Learn more</p>
                        <div className='relative z-10 mb-[0px] mt-[-16px]'>
                            <img className='rotate-90' src={DownArrow} alt="" />
                            <img className='rotate-90 relative top-[-27px]' src={DownArrow} alt="" />
                        </div>
                    </div>
                    <div className='flex justify-center items-center flex-1'>
                        <img className='max-w-[253px]' src={LoginIcon} alt='' />
                    </div>
                </div>
            </div>

            <div className='w-[63.802083333333336vw] xsm:w-[100%] sm:w-[100%] m-auto flex flex-col items-center bg-[#F5F5F5]'>
                <div className='my-[45px] flex xsm:flex-col sm:flex-col justify-end xsm:items-center sm:items-center'>
                    <div className='w-[393px] flex justify-center '>
                        <img className='max-w-[272px]' src={ProfileImage} alt='' />
                    </div>
                    <div className='w-[38.216145833333336vw] xsm:w-[100%] sm:w-[100%] flex flex-col justify-center'>
                        <div className="w-[29.8828125vw] max-w-[459px] xsm:min-w-[100%] sm:min-w-[100%] min-w-[80%] m-auto">
                            <h3 className='font0 !text-[40px] mb-[42px] xsm:text-center sm:text-center'>Barbers</h3>
                            <p className='font8 w-[29.8828125vw] max-w-[459px] min-w-[90%] !text-[16px] mb-[36px] leading-[28px]'>Bring in more customers and scale your business with our in-app appointment system, and portfolio feed. Make more money while building your brand and staying productive.</p>
                            <p className='font9 w-[29.8828125vw] max-w-[459px] min-w-[90%] !text-[15px] leading-[28.125px]'>Easily set up your shop and add your services. Upload your own barber photos and link your Instagram barber account. Conveniently manage your appointments. A client appointment time created a gap in your schedule? Simply drag and drop the appointment to a more convenience time and we'll notify your client. And as you use RoyalBook, all clients that have booked with you over time will be saved in the connections folder for your convenience. Get the app today.</p>
                        </div>
                    </div>
                </div>

                <div className='my-[45px] flex xsm:flex-col-reverse sm:flex-col-reverse justify-end xsm:items-center sm:items-center'>
                    <div className='w-[38.216145833333336vw]  xsm:w-[100%] sm:w-[100%] flex flex-col justify-center'>
                        <div className="w-[29.8828125vw] max-w-[459px] xsm:min-w-[100%] sm:min-w-[100%] min-w-[80%] m-auto">
                            <h3 className='font0 !text-[40px] mb-[42px] xsm:text-center sm:text-center'>Clients</h3>
                            <p className='font8 w-[29.8828125vw] max-w-[459px] min-w-[90%] !text-[16px] mb-[36px] leading-[28px]'>Get connected with more barbers near you and get the haircut you really want. Simply go to the feed or find barbers tab to populate barbers closest in distance from your current location. </p>
                            <p className='font9 w-[29.8828125vw] max-w-[459px] min-w-[90%] !text-[15px] leading-[28.125px]'>Use RoyalBook to connect with barbers in your city and across the nation. Save barbers' posts in the app to use as references for your next hair cut. Book, reschedule, and cancel appointments at your convenience, without having to contact your barber. Get the app today.</p>
                        </div>
                    </div>
                    <div className='w-[393px] flex justify-center items-center'>
                        <img className='max-w-[272px]' src={DetailsImage} alt='' />
                    </div>
                </div>
            </div>

            <div className='w-[63.802083333333336vw] m-auto flex flex-col'>
                <div className='flex xsm:flex-col sm:flex-col md:flex-col mt-[50px] xsm:items-center xsm:gap-[50px] sm:items-center sm:gap-[50px] md:items-center md:gap-[50px]'>
                    {data.map((d) => {
                        return (
                            <Card data={d}></Card>
                        )
                    })}
                </div>

                <div className='flex mb-[81px] mt-[130px] xsm:flex-col sm:flex-col md:flex-col xsm:items-center xsm:gap-[50px] sm:items-center sm:gap-[50px] md:items-center md:gap-[50px]'>
                    {dataCustomer.map((d) => {
                        return (
                            <Card data={d}></Card>
                        )
                    })}
                </div>
            </div>

            <div className='w-[63.802083333333336vw] xsm:w-[100%] m-auto flex flex-col bg-[#F5F5F5]'>
                <h2 className='text-[40px] leading-[1.35em] text-center mt-[42px]'>Your Next Haircut Appointment</h2>
                <div className='flex flex-wrap justify-center xsm:gap-[100px] mt-[60px] mb-[68px]'>
                    <div className='w-[20.703125vw] min-w-[310px]'>
                        <img className='w-[147px] m-auto' src={Appointment1} alt="" />
                        <h3 className='font0 !text-[22px] leading-[1.41em] text-center mt-[39px] w-[277px] m-auto'>DISCOVER BARBERS</h3>
                        <p className='font9 !text-[15px] leading-[1.875em] w-[277px] mt-[37px] m-auto'>Set your search radius by sliding the 'Distance' bar anywhere up to 30 miles away. Then look for barbers to book with based on reviews and total connections they have on their profile. Connect with talented barbers anywhere, anytime!</p>
                    </div>
                    <div className='w-[20.703125vw] min-w-[310px]'>
                        <img className='w-[147px] m-auto' src={Appointment2} alt="" />
                        <h3 className='font0 !text-[22px] leading-[1.41em] text-center mt-[39px] w-[277px] m-auto'>EXPLORE FEED</h3>
                        <p className='font9 !text-[15px] leading-[1.875em] w-[277px] mt-[42px] m-auto'>RoyalBook allows barbers to upload photos of their work. Once uploaded, these photos populate onto the feed for nearby clients to browse through. This is just another way for barbers to market their business to potential customers looking for the right barber!</p>
                    </div>
                    <div className='w-[20.703125vw] min-w-[310px]'>
                        <img className='w-[147px] m-auto' src={Appointment3} alt="" />
                        <h3 className='font0 !text-[22px] leading-[1.41em] text-center mt-[39px] w-[277px] m-auto'>HAIRCUT REMINDER</h3>
                        <p className='font9 !text-[15px] leading-[1.875em] w-[277px] mt-[42px] m-auto'>Clients are automatically sent reminder notifications a couple hours prior to their appointment. These automated notifications come in handy when unexpected things happen that make clients forget about their haircut appointment they booked.</p>
                    </div>
                </div>
            </div>

            <div className='xsm:w-[100%] xsm:items-center sm:items-center sm:w-[100%] md:w-[63.802083333333336vw] lg:w-[63.802083333333336vw] xl:w-[63.802083333333336vw] 2xl:w-[63.802083333333336vw] m-auto flex flex-col bg-[#6581F8] xsm:pl-0 sm:pl-0 pl-[24px] mb-[20px]'>
                <img className='w-[110px] mt-[41px]' src={LogoPreview} alt="" />
                <h3 className='font4 tracking-normal xsm:text-center sm:text-center !text-[36px] leading-[1.25em] text-white mt-[16px]'>Grow your network of clients and barbers.</h3>
                <p className='font0 mt-[11px] text-[22px] '>Get the app today.</p>
                <div className='flex items-center xsm:flex-col'>
                    <a target={"_blank"} href='https://apps.apple.com/us/app/testflight/id899247664'><img className='w-[71px]' src={Safari} alt="" /></a>
                    <a target={"_blank"} href='https://testflight.apple.com/join/GhvNB40u'><img className='w-[197px] ml-[11px] xsm:ml-[-2px]' src={ApplePlay} alt="" /></a>
                    <img className='max-w-[215.08px] min-h-[93px] xsm:ml-[-13px]' src={GooglePlay} alt="" />
                </div>
                <p className='!text-[14px] xsm:text-center sm:text-center font-500 text-[#33417C] mt-[8px] mb-[39px]'>For iPhone users, install TestFlight from the App Store before downloading the RoyalBook app with the button above.</p>
            </div>
        </AnimatedPage>
    )
}