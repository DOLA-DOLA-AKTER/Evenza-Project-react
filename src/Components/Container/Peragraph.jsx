import React from 'react'
import { Children } from 'react'

const Peragraph = ({children, className}) => {
  return (
    <p className={`text-base font-normal leading-6 text-gray ${className}`}>
        {children}
    </p>
  )
}

export default Peragraph
