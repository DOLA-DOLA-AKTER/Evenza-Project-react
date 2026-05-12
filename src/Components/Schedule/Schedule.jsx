import React, { useState } from 'react'
// Components
import Container from '../Container/Container'
import SectionHeading from '../Container/SectionHeading'
import Heading3 from '../Container/Heading3'
import Peragraph from '../Container/Peragraph'
import Tabs from './Tabs'
import Tabs2 from './Tabs2'
import Tabs3 from './Tabs3'

const Schedule = () => {

  const [activeDay, setActiveDay] = useState("Day 01");

  const renderActiveDay = () => {
    if (activeDay === "Day 01")
      return <Tabs />;
    if (activeDay === "Day 02")
      return <Tabs2 />;
    if (activeDay === "Day 03")
      return <Tabs3 />;
    return null;
  }

  return (
    <div className='bg-[radial-gradient(circle_at_top,#47348C_0%,#161A2D_100%)] py-25 lg:px-0 px-5'>
      <Container>
        <SectionHeading
          peragraph='Our Event Schedule'
          title='Explore the complete schedule for
                our event'
          className="md:w-187 w-full"
        />
        <div className='bg-white/10 md:rounded-full rounded-xl flex flex-wrap items-center justify-center gap-7.5  md:p-2.5 p-2 md:my-20 my-15 md:w-125 w-full mx-auto'>

          <h4
            onClick={() => setActiveDay("Day 01")}
            className={`font-bold md:text-[20px] leading-5.5 rounded-full md:py-4.5 py-3 md:px-9 px-6 duration-300 cursor-pointer
    
              ${activeDay === "Day 01"
                ? "bg-white text-black"
                : "text-white hover:text-black hover:bg-white/70"
              }`}
          >
            Day 01
          </h4>

          <h4
            onClick={() => setActiveDay("Day 02")}
            className={`font-bold md:text-[20px] leading-5.5 rounded-full md:py-4.5 py-3 md:px-9 px-6 duration-300 cursor-pointer
    
              ${activeDay === "Day 02"
                ? "bg-white text-black"
                : "text-white hover:text-black hover:bg-white/70"
              }`}
          >
            Day 02
          </h4>

          <h4
            onClick={() => setActiveDay("Day 03")}
            className={`font-bold md:text-[20px] leading-5.5 rounded-full md:py-4.5 py-3 md:px-9 px-6 duration-300 cursor-pointer
    
              ${activeDay === "Day 03"
                ? "bg-white text-black"
                : "text-white hover:text-black hover:bg-white/70"
              }`}
          >
            Day 03
          </h4>

        </div>

        <div> {renderActiveDay()} </div>

      </Container>
    </div>
  );
};

export default Schedule;
