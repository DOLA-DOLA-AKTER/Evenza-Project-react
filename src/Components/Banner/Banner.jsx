import React from 'react'
import Container from '../Container/Container'
import Btn from '../Button/Btn'
import { FaPlay } from "react-icons/fa";
import border from '../assets/border.png'
import border1 from '../assets/border1.png'
import border2 from '../assets/border2.png'

const Banner = () => {
  return (
    <div className='bg-[url(./Components/assets/background.png)] bg-no-repeat bg-cover bg-cover w-full pt-62.5 pb-37 bg-red-300 '>
      <Container>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex items-center gap-2 p-2.5 bg-white-opacity backdrop-blur-[20px] rounded-full'>
            <div className='flex items-center'>
              <div className='relative -z-0'>
                <img src={border} alt="" />
              </div>
              <div className='-ml-2 z-10'>
                <img src={border1} alt="" />
              </div>
              <div className='-ml-2 z-20'>
                <img src={border2} alt="" />
              </div>
            </div>
            <p className='text-sm font-semibold leading-5.5'>Ideas that spark change.</p>
          </div>
          <div>
            <h1 className='text-[76px] font-extrabold leading-21 -tracking-[1.52px] text-center'>Connecting Minds to Shape
              Tomorrow's Big Ideas</h1>
            <p className='text-base font-normal leading-6.25 w-183.25 text-center mx-auto pt-3.75 pb-13'>Experience a powerful gathering of visionaries, creators, and industry experts united by one goal—
              exchanging ideas that spark growth, innovation, and meaningful change.</p>
          </div>
          <div className='flex items-center gap-10'>
            <Btn>Explore Schedule</Btn>
            <div className='flex items-center gap-5'>
              <div className='p-1 rounded-full bg-lightwhite-opacity'>
                <div className='p-2.5 rounded-full bg-primary '>
                <FaPlay className='w-3.75 h-3.25 text-white '></FaPlay>
              </div>
              </div>
              <h5 className='text-base font-bold leading-4.25'>Watch Video</h5>
            </div>
          </div>
          <p className='text-[20px] font-bold leading-5.5 pt-15 pb-10'>Upcoming Speaker Reveal - Don't Miss Out</p>
          <div className='flex items-center gap-7.5'>
            <div className='rounded-[20px] backdrop-blur-[20px] w-31.25 h-30 flex flex-col items-center justify-center bg-white-opacity'>
              <h3 className='text-[40px] font-bold leading-11 '>202</h3>
              <p className='text-center'>Days</p>
            </div>
            <div className='rounded-[20px] backdrop-blur-[20px] w-31.25 h-30 flex flex-col items-center justify-center bg-white-opacity'>
              <h3 className='text-[40px] font-bold leading-11 '>08</h3>
              <p className='text-center'>Hours</p>
            </div>
            <div className='rounded-[20px] backdrop-blur-[20px] w-31.25 h-30 flex flex-col items-center justify-center bg-white-opacity'>
              <h3 className='text-[40px] font-bold leading-11 '>13</h3>
              <p className='text-center'>Minutes</p>
            </div>
            <div className='rounded-[20px] backdrop-blur-[20px] w-31.25 h-30 flex flex-col items-center justify-center bg-white-opacity'>
              <h3 className='text-[40px] font-bold leading-11 '>14</h3>
              <p className='text-center'>Seconds</p>
            </div>

          </div>
        </div>

      </Container>
    </div>
  )
}

export default Banner
