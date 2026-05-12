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
import AboutTabs from './AboutTabs'


const About = () => {
    return (
        <div className='py-12 md:py-16 lg:py-25 px-5 lg:px-0'>
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-11 items-center'>

                    {/* images */}
                    <div className="flex flex-col items-center lg:items-start relative">

                        <div className='flex flex-col gap-4'>
                            <div className='w-full max-w-md'>
                                <img src={about} alt="about" className='w-full h-auto' />
                            </div>

                            <div className='w-20 sm:w-24 md:w-30 ml-0 lg:ml-25'>
                                <img src={experience} alt="experience" className='w-full h-auto' />
                            </div>
                        </div>

                        <div className=' absolute bottom-0 md:right-0 right-10'>
                            <div className='md:w-100 w-60'>
                                <img src={premium} alt="premium" className='absolute -bottom-18 -right-15' />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col pt-10 lg:pt-0'>
                        <SectionHeading2
                            about="About Us"
                            heading={`Uncover our mission & purpose behind this event`}
                        />

                        <Peragraph>
                            Discover the vision that drives this event—a commitment to bringing together innovators,
                            leaders, and changemakers to share knowledge, spark inspiration, and create meaningful
                            connections.
                        </Peragraph>

                        <AboutTabs/>
                
                        <div className='flex flex-col sm:flex-row gap-5 sm:gap-7.5 py-6 md:py-10'>
                            <IconText
                                icons={receive}
                                text='Receive real-time event updates.'
                            />
                            <IconText
                                icons={receive2}
                                text='Receive real-time event updates.'
                            />
                        </div>

                        <Phone>
                            Learn More About
                        </Phone>

                    </div>

                </div>
            </Container>
        </div>
    )
}

export default About
