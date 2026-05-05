import React, { Children } from 'react'

const Btn = ({children, className}) => {
  return (
      <button className={`text-base font-bold leading-[16px] text-white py-3.5 px-5.75 rounded-full bg-primary cursor-pointer ${className}`}>
        {children}
      </button>
  )
}

export default Btn
