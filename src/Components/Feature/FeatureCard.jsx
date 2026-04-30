import React from 'react'
import rightArrow from '../assets/right_arrow.png'

const FeatureCard = ({icons, title, peragraph, read}) => {
  return (
    <div className='group bg-white/10 rounded-[20px] p-10 flex flex-col items-start hover:bg-primary cursor-pointer duration-300'>
      <div className='bg-primary rounded-[10px] p-3 group-hover:bg-white duration-300'>
        {icons}
      </div>
      {title}
      {peragraph}
      <div className='pt-7.5 border border-t-white/10 border-b-0 border-l-0 border-r-0 w-full mt-8 flex items-center gap-2.25'>
        <p className='text-base font-bold leading-6 text-white'>
          {read}
        </p>
        <div>
          <img src={rightArrow} alt="RightArrow" />
        </div>
      </div>
    </div>
  )
}


export default FeatureCard

