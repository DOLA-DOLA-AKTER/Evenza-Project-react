import React from 'react'
// assets
import about from '../assets/about.png'
import premium from '../assets/premium.png'
import experience from '../assets/experience.png'
import receive from '../assets/receive.png'
import receive2 from '../assets/receive2.png'
import phone from '../assets/phone.png'

// components
import Container from '../Container/Container'
import Peragraph from '../Container/Peragraph'
import Heading from '../Container/Heading'
import Circle from '../Container/Circle'
import Heading3 from '../Container/Heading3'
import Btn from '../Button/Btn'


const About = () => {
  return (
    <div className='py-20'>
        <Container>
            <div className='grid grid-cols-2 gap-11.25 items-center justify-content-center'>
                <div className="grid grid-cols-[10_2fr] gap-0 relative">
                    <div className='flex flex-col gap-7 items-center'>
                        <div className='w-141.75' h-101>
                            <img src={about} alt="about" />
                        </div>
                        <div className=''>
                            <img src={experience} alt="experience" />
                        </div>
                    </div>
                    <div className='w-88 h-123.5 absolute -right-20 -bottom-24'>
                        <img src={premium} alt="premium" />
                    </div>
                </div>
                <div className='flex flex-col gap-0'>
                    <Circle>
                        About Us
                    </Circle>
                    <Heading className='pt-2.5 pb-4.5'>
                        Uncover our mission & purpose
                        behind this event
                    </Heading>
                    <Peragraph>
                        Discover the vision that drives this event—a commitment to bringing together innovators,
                        leaders, and changemakers to share knowledge, spark inspiration, and create meaningful
                        connections.
                    </Peragraph>
                    <div className='bg-[#F6F6F7] rounded-[20px] p-2.5 flex items-center gap-2 justify-center my-10.5'>
                        <h5 className='hover:bg-white rounded-[10px] py-5 px-10 text-black font-bold text-base leading-5 transition duration-300 text-center cursor-pointer'>
                            Our Mission
                        </h5>
                        <h5 className='hover:bg-white rounded-[10px] py-5 px-10 text-black font-bold text-base leading-5 transition duration-300 text-center cursor-pointer'>
                            Our Vision
                        </h5>
                        <h5 className='hover:bg-white rounded-[10px] py-5 px-10 text-black font-bold text-base leading-5 transition duration-300 text-center cursor-pointer'>
                            Our Goal
                        </h5>
                    </div>
                    <Peragraph>
                        Our vision is to build a global community where collaboration fuels innovation we aim encourage
                        fresh thinking, spark inspiring dialogues, and create a space.
                    </Peragraph>
                    <div className='flex items-center gap-7.5'>
                        <div className="flex items-center gap-4 py-10">
                            <div className='w-12.5 h-12.5 rounded'>
                                <img src={receive} alt="" />
                            </div>
                            <Heading3>
                                Receive real-time event
                                updates.
                            </Heading3>
                        </div>
                        <div className="flex items-center gap-4 py-10">
                            <div className='w-12.5 h-12.5 rounded'>
                                <img src={receive2} alt="" />
                            </div>
                            <Heading3>
                                Receive real-time event
                                updates.
                            </Heading3>
                        </div>
                    </div>
                    <div className='border border-t-black/10 flex items-center gap-7.5 pt-10'>
                        <Btn>Learn More About</Btn>
                        <div className='flex items-center gap-3'>
                            <div className='bg-primary rounded-[10px] p-3 flex items-center justify-center'>
                                <img src={phone} alt="phone" />
                            </div>
                            <div className='flex flex-col'>
                                <Heading3>Call Now!</Heading3>
                                <Peragraph>+00 123 456 789</Peragraph>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default About
