import React from 'react'
import rightArrow from '../assets/right_arrow.png'

import Peragraph from '../Container/Peragraph'
import Heading3 from '../Container/Heading3'

const BlogCard = ({img, icon, peragraph, title, decs, className, imgclass}) => {
    return (
        <div className={`bg-light-gray rounded-[20px] p-2.5 ${className}`}>
            <div className={` ${imgclass} `}>
                <img src={img} alt="blogImg" className='md:w-full md:h-full'/>
            </div>
            <div className='p-10'>
                <div className='flex items-center gap-2.5'>
                    <div>
                        <img src={icon} alt="" />
                    </div>
                    <Peragraph>{peragraph}</Peragraph>
                </div>
                <Heading3 className='pt-5 pb-3.5'> {title} </Heading3>
                <Peragraph> {decs} </Peragraph>
                <div className='mt-8 pt-8 border border-t-black/10 border-l-0 border-r-0 border-b-0 flex items-center gap-2.5'>
                    <p className='text-base font-bold leading-6 text-primary'>
                        Read More
                    </p>
                    <div>
                        <img src={rightArrow} alt="RightArrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
