import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';
import Peragraph from '../Container/Peragraph';

const Countdown = () => {
    let [count, setCount] = useState({});
    let [timeUp, setTimeUp] = useState(false);

    const conduct_date = '2026-07-06 12:00:00';

    useEffect(() => {

        let interval;

        let updateCountDown = () => {
            const countDown = countDownDateAndTime(conduct_date);

            //  time up condition
            if (countDown.days <= 0 && countDown.hours <= 0 && countDown.minutes <= 0 && countDown.seconds <= 0) {

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

    }, [conduct_date])

    return (

        <>
            {
                timeUp ?
                    <h2 className='text-red-500 text-3xl font-semibold'>Time's Up</h2>
                    :
                    <div className='flex flex-wrap items-center gap-3 md:gap-7.5'>
                        <div className='rounded-[20px] backdrop-blur-[20px] w-18 h-18 md:w-31.25 md:h-30 flex flex-col items-center justify-center bg-white-opacity'>
                            <h3 className='text-2xl md:text-[40px] font-bold'>{count.days}</h3>
                            <Peragraph className='text-white text-xs md:text-base'>Days</Peragraph>
                        </div>

                        <div className='rounded-[20px] backdrop-blur-[20px] w-18 h-18 md:w-31.25 md:h-30 flex flex-col items-center justify-center bg-white-opacity'>
                            <h3 className='text-2xl md:text-[40px] font-bold'>{count.hours}</h3>
                            <Peragraph className='text-white text-xs md:text-base'>Hours</Peragraph>
                        </div>

                        <div className='rounded-[20px] backdrop-blur-[20px] w-18 h-18 md:w-31.25 md:h-30 flex flex-col items-center justify-center bg-white-opacity'>
                            <h3 className='text-2xl md:text-[40px] font-bold'>{count.minutes}</h3>
                            <Peragraph className='text-white text-xs md:text-base'>Minutes</Peragraph>
                        </div>

                        <div className='rounded-[20px] backdrop-blur-[20px] w-18 h-18 md:w-31.25 md:h-30 flex flex-col items-center justify-center bg-white-opacity'>
                            <h3 className='text-2xl md:text-[40px] font-bold'>{count.seconds}</h3>
                            <Peragraph className='text-white text-xs md:text-base'>Seconds</Peragraph>
                        </div>
                    </div>
            }
        </>
    )
}

export default Countdown