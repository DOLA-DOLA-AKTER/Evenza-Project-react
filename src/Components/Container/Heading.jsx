import React from 'react'

const Heading = ({children, className}) => {
  return (
    <h2 className={`lg:text-[48px] md:text-[40px] text-[30px] font-semibold text-black lg:leading-13 tracking-[-0.96px] ${className}`}>
        {children}
    </h2>
  )
}

export default Heading
