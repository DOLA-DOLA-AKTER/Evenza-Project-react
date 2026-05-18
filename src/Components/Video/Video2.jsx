import React, { useState } from 'react'
import playButton from '../assets/play-button.png'
import evenza from '../assets/evenza.mp4'


const Video2 = () => {

    const [show, setShow] = useState(false);

    const handlePlay = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

    return (
        <div className='bg-[url(./Components/assets/bg-img-2.png)] bg-no-repeat bg-center bg-cover w-full lg:h-[800px] h-100 flex items-center justify-center'>
            {
                !show && (
                    <div onClick={handlePlay} className='bg-primary rounded-full flex items-center justify-center md:w-25 w-20 md:h-25 h-20 animate-pulse cursor-pointer'>
                        <div>
                            <img src={playButton} alt="playButton" />
                        </div>
                    </div>
                )
            }
            {
                show && (
                    <video 
                        src={evenza}
                        autoPlay
                        controls
                        onClick={handleClose}
                        className='w-full object-cover cursor-pointer'
                    />

                )
            }


        </div>
    )
}

export default Video2
