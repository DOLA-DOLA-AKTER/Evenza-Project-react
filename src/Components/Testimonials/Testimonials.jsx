import React from 'react'
import supportsLogo from '../assets/supports-logo.png'
import Container from '../Container/Container'
import Peragraph from '../Container/Peragraph'
import Testimonialslider from './Testimonialslider'
import SectionHeading from '../Container/SectionHeading'


const Testimonials = () => {

    return (
        <div className='bg-[radial-gradient(circle_at_top,#47348C_0%,#161A2D_100%)]'>
            <Container>
                <div className='md:w-195 w-full block mx-auto text-center'>
                    <SectionHeading
                        secheading='flex flex-col items-center'
                        peragraph="Testimonials"
                        heading='What our customers say about their experience'
                        circle='bg-white'
                        peragraphCSS='text-white'
                        headingCSS='text-white'
                    />
                </div>
                <Testimonialslider />
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
