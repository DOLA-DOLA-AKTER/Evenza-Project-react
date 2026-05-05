import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';
import Peragraph from '../Container/Peragraph';

const Countdown = () => {
    let [count, setCount] = useState({});
    let [timeUp, setTimeUp] = useState(false);

    const conduct_date = '2026-05-06 19:30:00';

    useEffect(() => {

        let interval;

        let updateCountDown = () => {
            const countDown = countDownDateAndTime(conduct_date);

            //  time up condition
            if (countDown.total <= 0) {
                setTimeUp(true);
                clearInterval(interval);
            } else {
                setCount(countDown);
            }
        }

        updateCountDown();
        interval = setInterval(updateCountDown, 1000);

        return () => {
            clearInterval(interval);
        }
            
    }, [])

    if (timeUp) {
        return (
            <h2 className="text-3xl font-bold text-center text-red-500">
                Time's Up!
            </h2>
        )
    }

    return (
        <div className='flex flex-wrap items-center gap-7.5'>
            <div className='rounded-[20px] backdrop-blur-[20px] md:w-31.25 md:h-30 w-22 h-21 flex flex-col items-center justify-center bg-white-opacity'>
                <h3 className='md:text-[40px] text-3xl font-bold'>{count.days}</h3>
                <Peragraph className='text-white'>Days</Peragraph>
            </div>

            <div className='rounded-[20px] backdrop-blur-[20px] md:w-31.25 md:h-30 w-22 h-21 flex flex-col items-center justify-center bg-white-opacity'>
                <h3 className='md:text-[40px] text-3xl font-bold'>{count.hours}</h3>
                <Peragraph className='text-white'>Hours</Peragraph>
            </div>

            <div className='rounded-[20px] backdrop-blur-[20px] md:w-31.25 md:h-30 w-22 h-21 flex flex-col items-center justify-center bg-white-opacity'>
                <h3 className='md:text-[40px] text-3xl font-bold'>{count.minutes}</h3>
                <Peragraph className='text-white'>Minutes</Peragraph>
            </div>

            <div className='rounded-[20px] backdrop-blur-[20px] md:w-31.25 md:h-30 w-22 h-21 flex flex-col items-center justify-center bg-white-opacity'>
                <h3 className='md:text-[40px] text-3xl font-bold'>{count.seconds}</h3>
                <Peragraph className='text-white'>Seconds</Peragraph>
            </div>
        </div>
    )
}

export default Countdown