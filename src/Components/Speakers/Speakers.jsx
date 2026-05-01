import React from 'react'
// assets
import speakers from '../assets/speakers.png'
import speaker2 from '../assets/speaker2.png'
import speaker3 from '../assets/speaker3.png'
import speakersImg from '../assets/speakersImg.png'
import border from '../assets/border.png'
import phone2 from '../assets/phone2.png'

// Components
import Container from '../Container/Container'
import SectionHeading from '../Container/SectionHeading'
import SectionHeading2 from '../Container/SectionHeading2'
import SpeakersCard from './SpeakersCard'

const Speakers = () => {
    return (
        <div className='py-25'>
            <Container>
                <SectionHeading2
                    about="Our Speakers"
                    heading="Introducing the expert speakers
                joining our event"
                    className='justify-center'
                    classNames='w-200 mx-auto text-center'
                />
                <div className='grid grid-cols-3 gap-7.5 pt-20 pb-16'>
                    <SpeakersCard
                        img={speakers}
                        title='Sophia Rodrigues'
                        peragraph='Global Marketing Director'
                        images={speakersImg}
                    />
                    <SpeakersCard
                        img={speaker2}
                        title='Jacob Jones'
                        peragraph='Lead AI Research Scientist'
                        images={speakersImg}
                    />
                    <SpeakersCard
                        img={speaker3}
                        title='Arlene McCoy'
                        peragraph='Innovation Strategy Expert'
                        images={speakersImg}
                    />
                </div>
                <div className='flex items-center justify-center gap-4 '>
                    <div className='flex items-center'>
                        <div className='relative -z-0 '>
                            <img src={border} alt="border" className='w-8 h-8' />
                        </div>
                        <div className='-ml-3 z-10'>
                            <img src={phone2} alt="phone2" />
                        </div>
                    </div>
                    <p className='text-sm font-semibold leading-5.5 text-gray'>Join our speaker and help weave innovation, quality, and success together worldwide.</p>
                </div>
            </Container>

        </div>
    )
}

export default Speakers
