import React from 'react'
import border2 from '../assets/border2.png'
import supportsLogo from '../assets/supports-logo.png'
import Container from '../Container/Container'
import SectionHeading from '../Container/SectionHeading'
import Peragraph from '../Container/Peragraph'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <div className='bg-[radial-gradient(circle_at_top,#47348C_0%,#161A2D_100%)] py-25 lg:px-0 px-5'>
        <Container>
            <SectionHeading
                peragraph='Testimonials'
                title='What our customers say about their
                experience'
                className='md:w-197 w-full'
            />
            <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-7.5 pt-20'>
                <TestimonialCard 
                peragraph='"Truly outstanding service! The team exceeded our
                expectations with their professionalism, creativity,
                and quick turnaround time. Highly recommended for
                anyone seeking quality and reliability."'
                icon={border2}
                title='Kristin Watson'
                decs='Global Marketing Director'
                />
                <TestimonialCard 
                peragraph='"Truly outstanding service! The team exceeded our
                expectations with their professionalism, creativity,
                and quick turnaround time. Highly recommended for
                anyone seeking quality and reliability."'
                icon={border2}
                title='Ralph Edwards'
                decs='Global Marketing Director'
                />
                <TestimonialCard 
                peragraph='"Truly outstanding service! The team exceeded our
                expectations with their professionalism, creativity,
                and quick turnaround time. Highly recommended for
                anyone seeking quality and reliability."'
                icon={border2}
                title='Harry Potter'
                decs='Global Marketing Director'
                />
            </div>
            <Peragraph className='py-15 text-white text-center'>
                Supported by Brands That Inspire Innovation
            </Peragraph>
            <div className='flex flex-wrap items-center justify-center gap-20'>
                <div>
                    <img src={supportsLogo} alt="supportsLogo" />
                </div>
                <div>
                    <img src={supportsLogo} alt="supportsLogo" />
                </div>
                <div>
                    <img src={supportsLogo} alt="supportsLogo" />
                </div>
                <div>
                    <img src={supportsLogo} alt="supportsLogo" />
                </div>
                <div>
                    <img src={supportsLogo} alt="supportsLogo" />
                </div>
            </div>
        </Container>
      
    </div>
  )
}

export default Testimonials
