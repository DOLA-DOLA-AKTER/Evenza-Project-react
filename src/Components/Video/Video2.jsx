import React, { useState } from 'react'
import playButton from '../assets/play-button.png'
import evenza from '../assets/evenza.mp4'
import { IoIosClose } from "react-icons/io";


const Video2 = () => {

    const [show, setShow] = useState(false);

    const handlePlay = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }

    return (
        <div className='bg-[url(./Components/assets/bg-img-2.png)] bg-no-repeat bg-center bg-cover w-full lg:h-200 h-100 flex items-center justify-center'>
  
                    <div onClick={handlePlay} className={`bg-primary rounded-full flex items-center justify-center md:w-25 w-20 md:h-25 h-20 animate-pulse cursor-pointer ${show ? "hidden" : "block"}`}>
                        <div>
                            <img src={playButton} alt="playButton" />
                        </div>
                    </div>
      
            {
                show && (
                    <div className='relative w-250 block mx-auto z-10'>
                        <video src={evenza} controls autoPlay className='w-full object-cover'></video>
                        <div className='absolute top-0 right-0'>
                            <button 
                            onClick={handleClose}
                            className='hover:bg-red-500 bg-gray text-3xl font-bold p-2.5 cursor-pointer duration-300'>
                                <IoIosClose />
                            </button>
                        </div>
                    </div>
                )
            }


        </div>
    )
}

export default Video2
