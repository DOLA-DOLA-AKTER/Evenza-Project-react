import React from 'react'

// assets
import rightArrow from '../assets/right_arrow.png'

// Components
import SectionHeading2 from '../Container/SectionHeading2'
import Heading3 from '../Container/Heading3'
import Peragraph from '../Container/Peragraph'

const Image = () => {
  return (
    <div className='bg-[url(./Components/assets/image.png)] bg-no-repeat bg-center bg-cover w-full h-[800px] relative'>
      <div className='grid grid-cols-4 items-end h-full'>
        <div className='group hover:bg-white/10 h-full flex flex-col justify-end items-start p-6 duration-300 cursor-pointer'>
          <SectionHeading2
            about='Panels'
            desc='text-white '
          />
          <Heading3 className='text-white '>
            Interactive Panel Discussions
          </Heading3>

          <Peragraph className='hidden group-hover:block text-white pt-2.75 pb-8 duration-300'>
            Build meaningful relationships with industry
            leaders, innovators.
          </Peragraph>

          <div className='flex items-center gap-2.25 
          hidden group-hover:flex duration-300'>
            <p className='text-base font-bold leading-6 text-white'>
              Read More
            </p>
            <div>
              <img src={rightArrow} alt="RightArrow" />
            </div>
          </div>
        </div>

        <div className='group hover:bg-white/10 h-full flex flex-col justify-end items-start p-6 duration-300 cursor-pointer'>
          <SectionHeading2
            about='Networking'
            desc='text-white '
          />
          <Heading3 className='text-white '>
            Connect With Top Professionals
          </Heading3>

          <Peragraph className='hidden group-hover:block text-white pt-2.75 pb-8 duration-300'>
            Build meaningful relationships with industry
            leaders, innovators.
          </Peragraph>

          <div className='flex items-center gap-2.25 
          hidden group-hover:flex duration-300'>
            <p className='text-base font-bold leading-6 text-white'>
              Read More
            </p>
            <div>
              <img src={rightArrow} alt="RightArrow" />
            </div>
          </div>
        </div>

        <div className='group hover:bg-white/10 h-full flex flex-col justify-end items-start p-6 duration-300 cursor-pointer'>
          <SectionHeading2
            about='Resources'
            desc='text-white '
          />
          <Heading3 className='text-white '>
            Exclusive Access Event Material
          </Heading3>

          <Peragraph className='hidden group-hover:block text-white pt-2.75 pb-8 duration-300'>
            Build meaningful relationships with industry
            leaders, innovators.
          </Peragraph>

          <div className='flex items-center gap-2.25 
          hidden group-hover:flex duration-300'>
            <p className='text-base font-bold leading-6 text-white'>
              Read More
            </p>
            <div>
              <img src={rightArrow} alt="RightArrow" />
            </div>
          </div>
        </div>

        <div className='group hover:bg-white/10 h-full flex flex-col justify-end items-start p-6 duration-300 cursor-pointer'>
          <SectionHeading2
            about='Updates'
            desc='text-white '
          />
          <Heading3 className='text-white '>
            Real-Time Event Announcement
          </Heading3>

          <Peragraph className='hidden group-hover:block text-white pt-2.75 pb-8 duration-300'>
            Build meaningful relationships with industry
            leaders, innovators.
          </Peragraph>

          <div className='flex items-center gap-2.25 
          hidden group-hover:flex duration-300'>
            <p className='text-base font-bold leading-6 text-white'>
              Read More
            </p>
            <div>
              <img src={rightArrow} alt="RightArrow" />
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Image
