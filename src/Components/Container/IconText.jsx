import React, { Children } from 'react'
import Peragraph from './Peragraph'
import Heading3 from './Heading3'

const IconText = ({ icons, text, peragraph, className }) => {
    return (
        <div className="flex gap-4">
            <div className={`md:w-15 md:h-15 w-9 h-9 rounded ${className}`}>
                <img src={icons} alt="" className='w-full h-full'/>
            </div>
            <div className='flex flex-col gap-2'>
                <Heading3>
                    {text}
                </Heading3>
                <Peragraph>
                    {peragraph}
                </Peragraph>
            </div>
        </div>
    )
}

export default IconText
