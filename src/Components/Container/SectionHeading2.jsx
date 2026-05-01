import React from 'react'

const SectionHeading2 = ({ heading, about, className, classNames }) => {
  return (
    <div>
      <div className={`flex items-center gap-2.25 ${className}`}>
        <div className='w-1.5 h-1.5 rounded-full bg-primary'></div>
        <p className='text-[14px] text-black font-semibold'>{about}</p>
      </div>
      <h2 className={`text-[48px] font-semibold text-black leading-13 -tracking-[0.96px] pt-2.5 pb-4.5 ${classNames}`}>
        {heading}
      </h2>
    </div>
  )
}

export default SectionHeading2

