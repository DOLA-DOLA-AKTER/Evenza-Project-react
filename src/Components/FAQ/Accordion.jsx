import React, { useState } from 'react'
import Heading3 from '../Container/Heading3'

const Accordion = ({ title, decs }) => {

  const [open, setOpen] = useState(false)

  return (
    <div className='bg-[#F6F6F7] rounded-[20px] my-4 overflow-hidden'>

      <button
        onClick={() => setOpen(!open)}
        type="button"
        className="cursor-pointer flex items-center justify-between w-full p-5 font-medium text-body border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3"
      >
        <Heading3 className='md:text-[18px] text-[14px] font-semibold'>
          {title}
        </Heading3>

        <div className='md:border-3 border-primary rounded-full w-6 h-6 flex items-center justify-center'>
          {
          open ? 
            <svg width="9" height="2" viewBox="0 0 9 2">
              <path d="M0 1H9" stroke="#734BDF" strokeWidth="2" />
            </svg>
           : 
            <svg width="9" height="9" viewBox="0 0 7 7">
              <path
                d="M4.38202 2.5064H6.93002V4.3404H4.38202V6.8044H2.54802V4.3404H1.94609e-05V2.5064H2.54802V0.000398397H4.38202V2.5064Z"
                fill="#734BDF"
              />
            </svg>
          }
        </div>
      </button>

      {/* Smooth Content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${open ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="p-4 md:p-5 border-t-black/10 border border-[#F6F6F7]">
          <p className="text-gray">
            {decs}
          </p>
        </div>
      </div>

    </div>
  )
}

export default Accordion




