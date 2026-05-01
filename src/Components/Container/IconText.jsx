import React, { Children } from 'react'
import Peragraph from './Peragraph'
import Heading3 from './Heading3'

const IconText = ({ icons, text, peragraph }) => {
    return (
        <div className="flex gap-4">
            <div className='w-15 h-15 rounded'>
                <img src={icons} alt=""/>
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
