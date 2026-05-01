import React from 'react'
import Heading3 from '../Container/Heading3'
import Peragraph from '../Container/Peragraph'

const SpeakersCard = ({img, title, peragraph, images}) => {
  return (
    <div className={`bg-[#F6F6F7] rounded-[20px] p-2.5 `}>
        <div>
            <img src={img} alt="" />
        </div>
        <div className={`flex items-center justify-between p-5`}>
            <div className=''>
                <Heading3>
                    {title}
                </Heading3>
                <Peragraph>
                    {peragraph}
                </Peragraph>
            </div>
            <div>
                <img src={images} alt="" />
            </div>

        </div>

      
    </div>
  )
}

export default SpeakersCard
