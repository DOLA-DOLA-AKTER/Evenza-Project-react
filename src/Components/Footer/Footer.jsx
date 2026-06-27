import React from 'react'

// assets
import footerIcon from '../assets/footer-icon.png'
import pIcon from '../assets/p-icon.png'
import logo from '../assets/logo.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'

// Components
import Container from '../Container/Container'
import Heading from '../Container/Heading'
import Peragraph from '../Container/Peragraph'
import Heading3 from '../Container/Heading3'

const Footer = () => {
    return (
        <div className='bg-[radial-gradient(circle_at_top,#47348C_0%,#161A2D_100%)]'>
            <Container>
                <div className='flex flex-wrap justify-between items-center px-5 lg:px-0'>
                    <div>
                        <Heading className='text-white w-full md:w-159.5 pb-5 md:pb-0'>
                            Join our newsletter for event
                            important announcement</Heading>
                    </div>
                    <div className='w-100'>
                        <div className='flex items-center gap-4'>
                            <div className='w-14.5 h-10'>
                                <img src={footerIcon} alt="footerIcon" className='w-full h-full'/>
                            </div>
                            <Peragraph className='text-white'>Stay informed with instant updates delivered straight to
                                your inbox.</Peragraph>

                        </div>
                        <div className='mt-5.5 py-5 rounded-[20px] bg-white/10 w-full'>
                        </div>
                    </div>
                </div>
                <div className='grid lg:grid-cols-[5fr_7fr] gap-0 border border-t-white/10 border-l-0 border-r-0 border-b-0 lg:py-20 py-10 lg:mt-20 mt-15'>
                    <div className='md:w-90 w-full'>
                        <div>
                            <img src={logo} alt="logo" />
                        </div>
                        <Peragraph className='text-white py-10'>Experience a world-class conference designed
                            to inspire innovation, empower professionals,
                            and connect leaders from around the globe.</Peragraph>
                        <div className="flex items-center gap-3.75">
                            <div className='cursor-pointer'>
                                <img src={pIcon} alt="pIcon" />
                            </div>
                            <div className='cursor-pointer'>
                                <img src={pIcon} alt="pIcon" />
                            </div>
                            <div className='cursor-pointer'>
                                <img src={facebook} alt="facebook" />
                            </div>
                            <div className='cursor-pointer'>
                                <img src={instagram} alt="instagram" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-wrap justify-between gap-0'>
                        <div className='pt-15 lg:pt-0'>
                            <Heading3 className='text-white pb-7.5 '>Quick Links</Heading3>
                            <ul className='text-base font-normal'>
                                <li className='pb-6 cursor-pointer'>Home</li>
                                <li className='pb-6 cursor-pointer'>About Us</li>
                                <li className='pb-6 cursor-pointer'>Speakers</li>
                                <li className='pb-6 cursor-pointer'>Events</li>
                                <li className='pb-6 cursor-pointer'>Contact Us</li>
                            </ul>
                        </div>
                        <div className='pt-15 lg:pt-0'>
                            <Heading3 className='text-white pb-7.5'>Quick Links</Heading3>
                            <ul className='text-base font-normal'>
                                <li className='pb-6 cursor-pointer'>Home</li>
                                <li className='pb-6 cursor-pointer'>About Us</li>
                                <li className='pb-6 cursor-pointer'>Speakers</li>
                                <li className='pb-6 cursor-pointer'>Events</li>
                                <li className='pb-6 cursor-pointer'>Contact Us</li>
                            </ul>
                        </div>
                        <div className='pt-15 lg:pt-0'>
                            <Heading3 className='text-white pb-7.5'>Schedules</Heading3>
                            <ul className='text-base font-normal'>
                                <li className='pb-6 cursor-pointer'>Event Management</li>
                                <li className='pb-6 cursor-pointer'>Live Streaming</li>
                                <li className='pb-6 cursor-pointer'>Virtual Event Setup</li>
                                <li className='pb-6 cursor-pointer'>Keynote Sessions</li>
                                <li className='pb-6 cursor-pointer'>Networking Programs</li>
                            </ul>
                        </div>
                        <div className='pt-15 lg:pt-0'>
                            <Heading3 className='text-white pb-7.5'>Get In Touch</Heading3>
                            <ul className='text-base font-normal'>
                                <li className='pb-6 cursor-pointer'>+00 123 456 789</li>
                                <li className='pb-6 cursor-pointer'>support@domainname.com</li>
                                <li className='pb-6 border border-t-white/10 border-l-0 border-r-0 border-b-0'></li>
                                <li className='w-60 cursor-pointer'>45/2 Central Business Innovation
                                    Near International Trade Tower</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
            <hr className='opacity-10' />
            <Peragraph className='text-white py-10 text-center'>Copyright © 2025 All Rights Reserved.</Peragraph>
        </div>
    )
}

export default Footer
