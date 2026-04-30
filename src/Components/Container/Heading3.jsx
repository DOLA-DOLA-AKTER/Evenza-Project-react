import React from 'react'

const Heading3 = ({children, className}) => {
  return (
    <h3 className={`text-black font-bold text-[20px] leading-5.5 ${className}`}>
        {children}
    </h3>
  )
}

export default Heading3
