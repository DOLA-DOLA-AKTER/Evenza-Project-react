import React from 'react'
import Heading3 from '../Container/Heading3'

const Accordion = ({title, decs}) => {
  return (

    <div className='bg-[#F6F6F7] rounded-[20px] my-4 cursor-pointer'>
      <h2>
        <button type="button" className="cursor-pointer flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none">
          <Heading3 className='md:text-[18px] text-[14px] font-semibold'>{title}</Heading3>

          <div className='md:border-3 border-primary rounded-full w-6 h-6 flex items-center justify-center'>
              <svg width="9" height="9" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.38202 2.5064H6.93002V4.3404H4.38202V6.8044H2.54802V4.3404H1.94609e-05V2.5064H2.54802V0.000398397H4.38202V2.5064Z" fill="#734BDF"/>
            </svg>
          </div>
        </button>
      </h2>
      
      <div className="hidden border border-t-0 border-default rounded-b-base shadow-xs">
        <div className="p-4 md:p-5">
          <p className="mb-2 text-body">{decs}</p>
        </div>
      </div>
    </div>

  )
}

export default Accordion
