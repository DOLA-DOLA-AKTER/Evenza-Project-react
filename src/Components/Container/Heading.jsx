import React from 'react'

const Heading = ({children, className}) => {
  return (
    <h2 className={`text-[48px] font-semibold text-black leading-13 -tracking-[0.96px] ${className}`}>
        {children}
    </h2>
  )
}

export default Heading
