import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';

const Countdown = () => {
    let [count, setCount] = useState({});
    let [timeUp, setTimeUp] = useState(false);

    const conduct_date = '2026-04-30 12:15:00';

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
            
    }, [])

    if (timeUp) {
        return (
            <h2 className="text-3xl font-bold text-center text-red-500">
                Sorry, Time's Up!
            </h2>
        )
    }

    return (
        <div className='flex items-center gap-7.5'>
            <div className='rounded-[20px] backdrop-blur-[20px] w-31.25 h-30 flex flex-col items-center justify-center bg-white-opacity'>
                <h3 className='text-[40px] font-bold'>{count.days}</h3>
                <p>Days</p>
            </div>

            <div className='rounded-[20px] backdrop-blur-[20px] w-31.25 h-30 flex flex-col items-center justify-center bg-white-opacity'>
                <h3 className='text-[40px] font-bold'>{count.hours}</h3>
                <p>Hours</p>
            </div>

            <div className='rounded-[20px] backdrop-blur-[20px] w-31.25 h-30 flex flex-col items-center justify-center bg-white-opacity'>
                <h3 className='text-[40px] font-bold'>{count.minutes}</h3>
                <p>Minutes</p>
            </div>

            <div className='rounded-[20px] backdrop-blur-[20px] w-31.25 h-30 flex flex-col items-center justify-center bg-white-opacity'>
                <h3 className='text-[40px] font-bold'>{count.seconds}</h3>
                <p>Seconds</p>
            </div>
        </div>
    )
}

export default Countdown