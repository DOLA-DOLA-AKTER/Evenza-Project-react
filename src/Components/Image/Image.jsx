import React from 'react'
// assets
import rightArrow from '../assets/right_arrow.png'
// Components
import Heading3 from '../Container/Heading3'
import Peragraph from '../Container/Peragraph'
import SectionHeading from '../Container/SectionHeading'

const Image = () => {
  return (
    <div className='bg-[url(./Components/assets/image.png)] bg-no-repeat bg-center bg-cover w-full h-200 relative'>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-end h-full'>
        <div className='group hover:bg-white/10 h-full flex flex-col justify-end items-start p-6 duration-300 cursor-pointer'>
          <SectionHeading
            peragraph='Panels'
            peragraphCSS='text-white '
          />
          <Heading3 className='text-white '>
            Interactive Panel Discussions
          </Heading3>

          <Peragraph className='hidden group-hover:block text-white pt-2.75 pb-8 duration-300'>
            Build meaningful relationships with industry
            leaders, innovators.
          </Peragraph>

          <div className='items-center gap-2.25 
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
          <SectionHeading
            peragraph='Networking'
            peragraphCSS='text-white '
          />
          <Heading3 className='text-white '>
            Connect With Top Professionals
          </Heading3>

          <Peragraph className='hidden group-hover:block text-white pt-2.75 pb-8 duration-300'>
            Build meaningful relationships with industry
            leaders, innovators.
          </Peragraph>

          <div className=' items-center gap-2.25 
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
          <SectionHeading
            peragraph='Resources'
            peragraphCSS='text-white '
          />
          <Heading3 className='text-white '>
            Exclusive Access Event Material
          </Heading3>

          <Peragraph className='hidden group-hover:block text-white pt-2.75 pb-8 duration-300'>
            Build meaningful relationships with industry
            leaders, innovators.
          </Peragraph>

          <div className=' items-center gap-2.25 
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
          <SectionHeading
            peragraph='Updates'
            peragraphCSS='text-white '
          />
          <Heading3 className='text-white '>
            Real-Time Event Announcement
          </Heading3>

          <Peragraph className='hidden group-hover:block text-white pt-2.75 pb-8 duration-300'>
            Build meaningful relationships with industry
            leaders, innovators.
          </Peragraph>

          <div className=' items-center gap-2.25 
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
