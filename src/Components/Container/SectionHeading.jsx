import React from 'react'

const SectionHeading = ({peragraph, title}) => {
    return (
        <div>
            <div className='flex items-center justify-center gap-2.25'>
                <div className='w-1.5 h-1.5 rounded-full bg-white'></div>
                <p className='text-[14px] text-white font-semibold'>{peragraph}</p>
            </div>
            <h2 className='text-[48px] font-semibold leading-13 -tracking-[0.96px] text-white w-160 mx-auto text-center pt-3 '>
                {title}
            </h2>
        </div>
    )
}

export default SectionHeading

