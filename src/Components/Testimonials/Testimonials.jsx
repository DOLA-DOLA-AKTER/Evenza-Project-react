import React from 'react'
import supportsLogo from '../assets/supports-logo.png'
import Container from '../Container/Container'
import SectionHeading from '../Container/SecHeading'
import Peragraph from '../Container/Peragraph'
import Testimonialslider from './Testimonialslider'


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
                <Testimonialslider/>
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
