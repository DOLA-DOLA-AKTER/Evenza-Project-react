import React from 'react'
import phone3 from '../assets/phone3.png'
import Container from '../Container/Container'
import faqsImage from '../assets/faqs-image.png'
import Heading3 from '../Container/Heading3'
import Peragraph from '../Container/Peragraph'
import SectionHeading2 from '../Container/SectionHeading2'
import Accordion from './Accordion'

const FAQ = () => {
  return (
    <div className='py-25'>
        <Container>
            <div className='grid grid-cols-[4fr_8fr] gap-10'>
                <div className='relative'>
                    <div>
                        <img src={faqsImage} alt="faqsImage" />
                    </div>
                    <div className='absolute bottom-0 right-0 bg-white p-5 rounded-tl-xl rounded-bl-[65px] rounded-tr-[65px]'>
                        <div className='bg-primary rounded-[10px] p-6'>
                            <Heading3 className='text-white pb-12.5'>
                                <span className='block'>Your Questions,</span>
                                Clearly Answer
                            </Heading3>
                            <div>
                                <img src={phone3} alt="phone3" />
                            </div>
                            <Peragraph className='pt-4 text-white'>
                                +00 123 456 789
                            </Peragraph>
                        </div>
                    </div>
                </div>
                <div>
                    <SectionHeading2
                    about="FAQ's"
                    heading='What our customers say about their
                    experience'
                    />
                    <div>
                        <Accordion
                            title="1. How does the complete event register process actually work?"
                            decs="Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that
                            interest you most, and customize your learning experience throughout the day."
                        />
                        <Accordion
                            title="2. Where is the main event venue located precisely?"
                            decs="Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that
                            interest you most, and customize your learning experience throughout the day."
                        />
                        <Accordion
                            title="3. Can attendees freely switch between sessions and tracks?"
                            decs="Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that
                            interest you most, and customize your learning experience throughout the day."
                        />
                        <Accordion
                            title="4. Does the event provide virtual participation options online?"
                            decs="Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that
                            interest you most, and customize your learning experience throughout the day."
                        />
                        <Accordion
                            title="5. What is the event refund and cancellation policy?"
                            decs="Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that
                            interest you most, and customize your learning experience throughout the day."
                        />
                    </div>
                </div>

            </div>
        </Container>
      
    </div>
  )
}

export default FAQ
