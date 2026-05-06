import React from 'react'
// assets
import schedule from '../assets/schedule-image.png'
import location from '../assets/location.png'

// Components
import Container from '../Container/Container'
import SectionHeading from '../Container/SectionHeading'
import Heading3 from '../Container/Heading3'
import Peragraph from '../Container/Peragraph'

const Schedule = () => {
  return (
    <div className='bg-[radial-gradient(circle_at_top,#47348C_0%,#161A2D_100%)] py-25 lg:px-0 px-5'>
        <Container>
            <SectionHeading
                peragraph='Our Event Schedule'
                title='Explore the complete schedule for
                our event'
                className="md:w-187 w-full"
            />
            <div className='bg-white/10 rounded-full flex items-center justify-center md:gap-7.5 gap-3 md:p-2.5 p-2 md:my-20 my-15 md:w-125 w-full mx-auto'>
              <h4 className='text-white hover:text-black font-bold md:text-[20px] leading-5.5 hover:bg-white rounded-full md:py-4.5 py-3 md:px-9 px-6 duration-300 cursor-pointer'>Day 01</h4>
              <h4 className='text-white hover:text-black font-bold md:text-[20px] leading-5.5 hover:bg-white rounded-full md:py-4.5 py-3 md:px-9 px-6 duration-300 cursor-pointer'>Day 02</h4>
              <h4 className='text-white hover:text-black font-bold md:text-[20px] leading-5.5 hover:bg-white rounded-full md:py-4.5 py-3 md:px-9 px-6 duration-300 cursor-pointer'>Day 03</h4>
            </div>

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

        </Container>
        
      
    </div>
  )
}

export default Schedule
