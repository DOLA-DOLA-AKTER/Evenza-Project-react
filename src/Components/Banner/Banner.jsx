import React from 'react'
import Container from '../Container/Container'
import Btn from '../Button/Btn'
import { FaPlay } from "react-icons/fa";
import border from '../assets/border.png'
import border1 from '../assets/border1.png'
import border2 from '../assets/border2.png'
import Countdown from './Countdown';
import { NavLink } from "react-router";


const Banner = () => {
  return (
    <div className='bg-[url(./Components/assets/background.png)] bg-no-repeat bg-center bg-cover w-full pt-35 pb-16 md:pt-40 md:pb-24 lg:pt-62.5 lg:pb-37'>
      <Container className="lg:py-0! py-0!">
        <div className='flex flex-col items-center justify-center text-center  px-5 lg:px-0'>

          {/* TOP BADGE */}
          <div className='flex items-center gap-2 p-2 bg-white/20 backdrop-blur-[20px] rounded-full'>
            <div className='flex items-center'>
              <div className='relative'>
                <img src={border} alt="" />
              </div>
              <div className='-ml-2 z-10'>
                <img src={border1} alt="" />
              </div>
              <div className='-ml-2 z-20'>
                <img src={border2} alt="" />
              </div>
            </div>
            <p className='text-xs md:text-sm font-semibold'>
              Ideas that spark change.
            </p>
          </div>

          {/* HEADING */}
          <div className='mt-6'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-[76px] font-extrabold leading-tight lg:leading-21 tracking-tight text-center'>
              Connecting Minds to Shape <br className='hidden md:block' />
              Tomorrow's Big Ideas
            </h1>

            <p className='text-sm md:text-base leading-6 w-full lg:w-187.5 mx-auto pt-4 pb-8'>
              Experience a powerful gathering of visionaries, creators, and industry experts united by one goal—
              exchanging ideas that spark growth, innovation, and meaningful change.
            </p>
          </div>

          <div className='flex flex-col sm:flex-row items-center gap-5 sm:gap-10'>
            <Btn><NavLink to="/schedules">Explore Schedule</NavLink> </Btn>

            <NavLink to="/video" className='flex items-center gap-4'>
              <div className='p-1 rounded-full bg-white/20 cursor-pointer'>
                <div className='p-2 rounded-full bg-primary'>
                  <FaPlay className='w-3 h-3 text-white' />
                </div>
              </div>
              <h5 className='text-sm md:text-base font-bold'>
                Watch Video
              </h5>
            </NavLink>

          </div>

          {/* TEXT */}
          <p className='text-base md:text-lg font-bold pt-10 pb-6'>
            Upcoming Speaker Reveal - Don't Miss Out
          </p>

          {/* COUNTDOWN */}
          <Countdown />

        </div>
      </Container>
    </div>
  )
}

export default Banner
