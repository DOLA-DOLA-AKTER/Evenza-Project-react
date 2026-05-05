import React from 'react'

const Heading3 = ({children, className}) => {
  return (
    <h4 className={`text-black md:font-bold font-semibold md:text-[20px] md:leading-5.5 ${className}`}>
        {children}
    </h4>
  )
}

export default Heading3
