import React from 'react'
import playButton from '../assets/play-button.png'

const Vedio = () => {
  return (
    <div className='bg-[url(./Components/assets/bg-img-2.png)] bg-no-repeat bg-center bg-cover w-full h-[800px] flex items-center justify-center'>
      <div className='bg-primary rounded-full flex items-center justify-center w-25 h-25'>
        <div>
          <img src={playButton} alt="playButton" />
        </div>
      </div>
    </div>
  )
}

export default Vedio
