import React from 'react'

const Circle = ({children, className}) => {
  return (
    <div className='flex items-center gap-2.25'>
        <div className='w-1.5 h-1.5 rounded-full bg-primary'></div>
        <p className={`text-[14px] text-black font-semibold ${className}`}>{children}</p>
    </div>
  )
}

export default Circle
