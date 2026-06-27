import React from 'react'

const SectionHeading = ({ secheading, className, circle, peragraphCSS, peragraph, heading, headingCSS }) => {
  return (
    <div className={`${secheading}`}>
      <div className={`flex items-center gap-2.25 ${className}`}>
        <span className={`w-1.5 h-1.5 rounded-full bg-primary ${circle}`}></span>
        <p className={`text-[14px] text-black font-semibold ${peragraphCSS}`}>
            {peragraph}
        </p>
      </div>
      <h2 className={`lg:text-[48px] md:text-[40px] text-[33px] 
        font-semibold text-black leading-tight md:leading-snug lg:leading-13 tracking-tight pt-2 pb-3 md:pt-2.5 md:pb-4.5 ${headingCSS}`}>
        {heading}
      </h2>
    </div>
  )
}

export default SectionHeading


