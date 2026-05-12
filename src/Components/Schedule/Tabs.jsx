import React from 'react'
// assets
import schedule from '../assets/schedule-image.png'
import location from '../assets/location.png'
// components 
import Heading3 from '../Container/Heading3'
import Peragraph from '../Container/Peragraph'

const Tabs = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-10'>
            <div className='flex flex-wrap lg:gap-14 gap-5 border border-b-white/10 border-l-0 border-r-0 border-t-0 pb-5'>
                <div className='flex gap-7.5 items-center'>
                    <div>
                        <img src={schedule} alt="schedule" />
                    </div>
                    <div>
                        <Heading3 className='text-white'>9:00 AM - 5:30 PM</Heading3>
                        <Peragraph className='text-white pt-2'>22 March 2025</Peragraph>
                    </div>
                </div>
                <div>
                    <Heading3 className='text-white'>
                        Professional Skills Development Workshop
                    </Heading3>
                    <Peragraph className='text-white pt-2 md:w-136 w-full'>
                        Unlock your potential and elevate your career with our Professional Skills
                        Development designed students, working professionals.
                    </Peragraph>
                </div>
                <div className="flex items-center gap-3.75">
                    <div>
                        <img src={location} alt="location" />
                    </div>
                    <div>
                        <Peragraph className='text-white'>
                            <span className='block'>Street, Block 12</span> Sector 4, Ipsum City
                        </Peragraph>

                    </div>
                </div>

            </div>

            <div className='flex flex-wrap lg:gap-14 gap-5 border border-b-white/10 border-l-0 border-r-0 border-t-0 pb-5'>
                <div className='flex gap-7.5 items-center'>
                    <div>
                        <img src={schedule} alt="schedule" />
                    </div>
                    <div>
                        <Heading3 className='text-white'>9:00 AM - 5:30 PM</Heading3>
                        <Peragraph className='text-white pt-2'>22 March 2025</Peragraph>
                    </div>
                </div>
                <div>
                    <Heading3 className='text-white'>
                        Professional Skills Development Workshop
                    </Heading3>
                    <Peragraph className='text-white pt-2 md:w-136 w-full'>
                        Unlock your potential and elevate your career with our Professional Skills
                        Development designed students, working professionals.
                    </Peragraph>
                </div>
                <div className="flex items-center gap-3.75">
                    <div>
                        <img src={location} alt="location" />
                    </div>
                    <div>
                        <Peragraph className='text-white'>
                            <span className='block'>Street, Block 12</span> Sector 4, Ipsum City
                        </Peragraph>

                    </div>
                </div>

            </div>

            <div className='flex flex-wrap lg:gap-14 gap-5 border border-b-white/10 border-l-0 border-r-0 border-t-0 pb-5'>
                <div className='flex gap-7.5 items-center'>
                    <div>
                        <img src={schedule} alt="schedule" />
                    </div>
                    <div>
                        <Heading3 className='text-white'>9:00 AM - 5:30 PM</Heading3>
                        <Peragraph className='text-white pt-2'>22 March 2025</Peragraph>
                    </div>
                </div>
                <div>
                    <Heading3 className='text-white'>
                        Professional Skills Development Workshop
                    </Heading3>
                    <Peragraph className='text-white pt-2 md:w-136 w-full'>
                        Unlock your potential and elevate your career with our Professional Skills
                        Development designed students, working professionals.
                    </Peragraph>
                </div>
                <div className="flex items-center gap-3.75">
                    <div>
                        <img src={location} alt="location" />
                    </div>
                    <div>
                        <Peragraph className='text-white'>
                            <span className='block'>Street, Block 12</span> Sector 4, Ipsum City
                        </Peragraph>

                    </div>
                </div>

            </div>

            <div className='flex flex-wrap lg:gap-14 gap-5 border border-b-white/10 border-l-0 border-r-0 border-t-0 pb-5'>
                <div className='flex gap-7.5 items-center'>
                    <div>
                        <img src={schedule} alt="schedule" />
                    </div>
                    <div>
                        <Heading3 className='text-white'>9:00 AM - 5:30 PM</Heading3>
                        <Peragraph className='text-white pt-2'>22 March 2025</Peragraph>
                    </div>
                </div>
                <div>
                    <Heading3 className='text-white'>
                        Professional Skills Development Workshop
                    </Heading3>
                    <Peragraph className='text-white pt-2 md:w-136 w-full'>
                        Unlock your potential and elevate your career with our Professional Skills
                        Development designed students, working professionals.
                    </Peragraph>
                </div>
                <div className="flex items-center gap-3.75">
                    <div>
                        <img src={location} alt="location" />
                    </div>
                    <div>
                        <Peragraph className='text-white'>
                            <span className='block'>Street, Block 12</span> Sector 4, Ipsum City
                        </Peragraph>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Tabs
