import React from 'react'
// assets
import benefits from '../assets/benefits1.png'
import benefits2 from '../assets/benefits2.png'
import benefitsImage from '../assets/benefits-image.png'
import benefitsImage2 from '../assets/benefits-image2.png'
import benefits3 from '../assets/benefits3.png'
import benefits4 from '../assets/benefits4.png'

// Components
import SectionHeading2 from '../Container/SectionHeading2'
import Container from '../Container/Container'
import IconText from '../Container/IconText'
import Peragraph from '../Container/Peragraph'
import Phone from '../Container/Phone'


const Benefits = () => {
    return (
        <div className='py-25 px-5 lg:px-0'>
            <Container>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-10 items-center'>
                    <div>
                        <SectionHeading2
                            about="Key Benefits"
                            heading="Key advantages that ensure
                            your events stand out"
                        />
                        <div className='flex flex-col gap-10 py-18'>
                            <IconText 
                                className="w-25"
                                icons={benefits}
                                text="Expert-Led Keynote Sessions"
                                peragraph="Experience inspiring keynote sessions led by industry experts who share valuable
                                insights, trends, and strategies to help you grow personally and professionally."
                            />
                            <IconText 
                                className="w-25"
                                icons={benefits2}
                                text="Expert-Led Keynote Sessions"
                                peragraph="Experience inspiring keynote sessions led by industry experts who share valuable
                                insights, trends, and strategies to help you grow personally and professionally."
                            />
                        </div>
                        <Phone
                            children='View Our Schedule'
                        />
                    </div>

                    <div className='grid grid-cols-2 gap-0 relative'>
                        <div className='flex flex-col gap-10'>
                            <div className='md:w-100 md:h-100 w-full'>
                                <img src={benefitsImage} alt="" />
                            </div>
                            <div className='md:ml-20  '>
                                <img src={benefits3} alt="" />
                            </div>
                        </div>

                        <div className='flex flex-col items-end gap-10'>
                            <div className=''>
                                <img src={benefits4} alt="" />
                            </div>
                            <div className='md:absolute md:-bottom-20 md:-right-10 md:w-100 md:h-100 w-full'>
                                <img src={benefitsImage2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Benefits
