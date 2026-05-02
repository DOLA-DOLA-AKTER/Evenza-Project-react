import React from 'react'
import quote from '../assets/quote.png'
import { FaStar } from "react-icons/fa";
import Peragraph from '../Container/Peragraph';
import Heading3 from '../Container/Heading3';

const TestimonialCard = ({peragraph, icon, title, decs}) => {
    return (
        <div className='rounded-[20px] bg-white/10 p-10 cursor-pointer'>
            <div className='flex items-center gap-1'>
                <FaStar className='text-primary' />
                <FaStar className='text-primary' />
                <FaStar className='text-primary' />
                <FaStar className='text-primary' />
                <FaStar className='text-primary' />
            </div>
            <Peragraph className='pt-6 pb-15 text-white'> {peragraph} </Peragraph>
            <div className='flex items-center justify-between border border-t-white/10 border-l-0 border-r-0 border-b-0 pt-12.5'>
            <div className='flex items-center gap-3'>
                <div>
                    <img src={icon} alt="" className='w-12 h-12'/>
                </div>
                <div>
                    <Heading3 className='text-white'> {title} </Heading3>
                    <Peragraph className='text-white'> {decs} </Peragraph>
                </div>
            </div>
            <div>
                <img src={quote} alt="quote" />
            </div>
            </div>


        </div>
    )
}

export default TestimonialCard
