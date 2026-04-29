import React, { Children } from 'react'

const Btn = ({children, className}) => {
  return (
    <div>
      <button className={`text-base font-bold leading-[16px] text-white py-3.5 px-5.75 rounded-full bg-primary cursor-pointer ${className}`}>
        {children}
      </button>
    </div>
  )
}

export default Btn
