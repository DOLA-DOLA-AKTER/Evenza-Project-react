import React from 'react'
import phone from '../assets/phone.png'
import Btn from '../Button/Btn'
import Heading3 from './Heading3'
import Peragraph from './Peragraph'

const Phone = ({children}) => {
    return (
        <div className='border border-t-black/10 flex items-center gap-7.5 pt-10'>
            <Btn>{children}</Btn>
            <div className='flex items-center gap-3'>
                <div className='bg-primary rounded-[10px] p-3 flex items-center justify-center'>
                    <img src={phone} alt="phone" />
                </div>
                <div className='flex flex-col'>
                    <Heading3>Call Now!</Heading3>
                    <Peragraph>+00 123 456 789</Peragraph>
                </div>
            </div>
        </div>
    )
}

export default Phone
