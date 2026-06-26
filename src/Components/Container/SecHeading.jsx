import React from 'react'

const SectionHeading = ({peragraph, title, className}) => {
    return (
        <div>
            <div className='flex items-center justify-center gap-2.25'>
                <div className='w-1.5 h-1.5 rounded-full bg-white'></div>
                <p className='text-[14px] text-white font-semibold'>{peragraph}</p>
            </div>
            <h2 className={`lg:text-[48px] md:text-[40px] text-[33px] font-semibold md:leading-13 leading-tight tracking-[-0.96px] text-white md:w-160 w-full mx-auto text-center pt-3 ${className}`}>
                {title}
            </h2>
        </div>
    )
}

export default SectionHeading

