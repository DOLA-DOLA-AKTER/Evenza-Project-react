import React from 'react'
// assets
import about from '../assets/about.png'
import premium from '../assets/premium.png'
import experience from '../assets/experience.png'
import receive from '../assets/receive.png'
import receive2 from '../assets/receive2.png'

// components
import Container from '../Container/Container'
import Peragraph from '../Container/Peragraph'
import Heading3 from '../Container/Heading3'
import Btn from '../Button/Btn'
import SectionHeading2 from '../Container/SectionHeading2'
import IconText from '../Container/IconText'
import Phone from '../Container/Phone'


const About = () => {
  return (
    <div className='py-25'>
        <Container>
            <div className='grid grid-cols-2 gap-11.25 items-center justify-content-center'>

                {/* right info */}
                <div className="flex flex-row gap-0 relative">
                    <div className='flex flex-col gap-4'>
                        <div className='w-120.75 h-90'>
                            <img src={about} alt="about" />
                        </div>
                        <div className='w-30 h-30 ml-25'>
                            <img src={experience} alt="experience" />
                        </div>
                    </div>
                    <div className=' absolute bottom-0 right-0'>
                        <div className='w-100'>
                            <img src={premium} alt="premium" className='absolute -bottom-18 -right-15' />
                        </div>
                    </div>
                </div>

                {/* left info */}
                <div className='flex flex-col gap-0'>
                    <SectionHeading2
                        about="About Us"
                        heading="Uncover our mission & purpose
                        behind this event"
                        
                    />
                    <Peragraph>
                        Discover the vision that drives this event—a commitment to bringing together innovators,
                        leaders, and changemakers to share knowledge, spark inspiration, and create meaningful
                        connections.
                    </Peragraph>

                    {/* Our Mission, Vision, Goal */}

                    <div className='bg-[#F6F6F7] rounded-[20px] p-2.5 flex items-center gap-4 justify-center my-10.5'>
                        <h5 className='hover:bg-white rounded-[10px] py-5 px-11 text-black font-bold text-base leading-5 transition duration-300 text-center cursor-pointer'>
                            Our Mission
                        </h5>
                        <h5 className='hover:bg-white rounded-[10px] py-5 px-11 text-black font-bold text-base leading-5 transition duration-300 text-center cursor-pointer'>
                            Our Vision
                        </h5>
                        <h5 className='hover:bg-white rounded-[10px] py-5 px-11 text-black font-bold text-base leading-5 transition duration-300 text-center cursor-pointer'>
                            Our Goal
                        </h5>
                    </div>
                    <Peragraph>
                        Our vision is to build a global community where collaboration fuels innovation we aim encourage
                        fresh thinking, spark inspiring dialogues, and create a space.
                    </Peragraph>
                    <div className='flex items-center gap-7.5 py-10'>
                        <IconText
                         icons={receive}
                         text=' Receive real-time event updates.'
                        />
                        <IconText
                         icons={receive2}
                         text='Receive real-time event
                         updates.'
                        />
                    </div>
                    <Phone
                        children="Learn More About"
                    />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default About
