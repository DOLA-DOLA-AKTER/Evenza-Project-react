import React from 'react'

// assets
import pricing1 from '../assets/pricing1.png'
import right from '../assets/right.png'
import pricingBenefit from '../assets/pricing-benefit.png'

// Components
import IconText from '../Container/IconText'
import Container from '../Container/Container'
import SectionHeading2 from '../Container/SectionHeading2'
import Peragraph from '../Container/Peragraph'
import Heading3 from '../Container/Heading3'
import Btn from '../Button/Btn'

const Pricing = () => {
    return (
        <div className='py-25 lg:px-0 px-5'>
            <Container>
                <SectionHeading2
                    about="Pricing Plan"
                    heading="Discover our flexible pricing plans
                    for attendees"
                    className='justify-center'
                    classNames='md:w-184 w-full mx-auto text-center'
                />
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5 pt-20 pb-15'>
                    <div className='group bg-[#F6F6F7] rounded-[20px] relative overflow-hidden cursor-pointer'>
                        <div className='text-sm font-semibold bg-primary uppercase py-2 px-11 rotate-45 translate-x-3 translate-y-3 absolute -right-6 top-3 hidden group-hover:block transition-all duration-500 ease-out'>Popular</div>
                        <div className='p-2.5'>
                            <div className='p-8'>
                                <IconText
                                    icons={pricing1}
                                    text="Basic Package"
                                    peragraph="Perfect for first-time attend"
                                />
                                <div className='flex gap-0 pt-9 pb-6.25 '>
                                    <h1 className='text-[48px] font-bold leading-13 text-black'>$49</h1>
                                    <Peragraph className='flex items-end'> /One-Time</Peragraph>
                                </div>
                            </div>

                            <div className='bg-white rounded-[10px] p-10'>
                                <Heading3>What's Included:</Heading3>
                                <Peragraph className='pt-2'>It could relate to a subscription</Peragraph>
                                <div className='flex flex-col gap-3.75 mt-10 py-10 border border-t-black/10'>
                                    <div className='flex items-center gap-1.5 '>
                                        <div>
                                            <img src={right} alt="right" />
                                        </div>
                                        <Peragraph>Entry to all standard sessions</Peragraph>
                                    </div>
                                    <div className='flex items-center gap-1.5'>
                                        <div>
                                            <img src={right} alt="right" />
                                        </div>
                                        <Peragraph>Reserved seating in select session</Peragraph>
                                    </div>
                                    <div className='flex items-center gap-1.5'>
                                        <div>
                                            <img src={right} alt="right" />
                                        </div>
                                        <Peragraph>Meet & greet with speakers</Peragraph>
                                    </div>
                                    <div className='flex items-center gap-1.5'>
                                        <div>
                                            <img src={right} alt="right" />
                                        </div>
                                        <Peragraph>Premium networking lounge</Peragraph>
                                    </div>
                                </div>
                                <Btn className='w-full'>Get Standard Pass</Btn>

                            </div>
                        </div>
                    </div>

                    <div className='group bg-[#F6F6F7] rounded-[20px] relative overflow-hidden cursor-pointer'>
                        <div className='text-sm font-semibold bg-primary uppercase py-2 px-11 rotate-45 translate-x-3 translate-y-3 absolute -right-6 top-3 hidden group-hover:block transition-all duration-500 ease-out'>Popular</div>
                        <div className='p-2.5'>
                            <div className='p-8'>
                                <IconText
                                    icons={pricing1}
                                    text="Standard Pass"
                                    peragraph="Perfect for first-time attend"
                                />
                                <div className='flex gap-0 pt-9 pb-6.25 '>
                                    <h1 className='text-[48px] font-bold leading-13 text-black'>$59</h1>
                                    <Peragraph className='flex items-end'> /One-Time</Peragraph>
                                </div>
                            </div>

                            <div className='bg-white rounded-[10px] p-10'>
                                <Heading3>What's Included:</Heading3>
                                <Peragraph className='pt-2'>It could relate to a subscription</Peragraph>
                                <div className='flex flex-col gap-3.75 mt-10 py-10 border border-t-black/10'>
                                    <div className='flex items-center gap-1.5 '>
                                        <div>
                                            <img src={right} alt="right" />
                                        </div>
                                        <Peragraph>Entry to all standard sessions</Peragraph>
                                    </div>
                                    <div className='flex items-center gap-1.5'>
                                        <div>
                                            <img src={right} alt="right" />
                                        </div>
                                        <Peragraph>Reserved seating in select session</Peragraph>
                                    </div>
                                    <div className='flex items-center gap-1.5'>
                                        <div>
                                            <img src={right} alt="right" />
                                        </div>
                                        <Peragraph>Meet & greet with speakers</Peragraph>
                                    </div>
                                    <div className='flex items-center gap-1.5'>
                                        <div>
                                            <img src={right} alt="right" />
                                        </div>
                                        <Peragraph>Premium networking lounge</Peragraph>
                                    </div>
                                </div>
                                <Btn className='w-full'>Get Standard Pass</Btn>

                            </div>
                        </div>
                    </div>

                    <div className='group bg-[#F6F6F7] rounded-[20px] relative overflow-hidden cursor-pointer'>
                        <div className='text-sm font-semibold bg-primary uppercase py-2 px-11 rotate-45 translate-x-3 translate-y-3 absolute -right-6 top-3 hidden group-hover:block transition-all duration-500 ease-out'>Popular</div>
                        <div className='p-2.5'>
                            <div className='p-8'>
                                <IconText
                                    icons={pricing1}
                                    text="Premium Pass"
                                    peragraph="Perfect for first-time attend"
                                />
                                <div className='flex gap-0 pt-9 pb-6.25 '>
                                    <h1 className='text-[48px] font-bold leading-13 text-black'>$69</h1>
                                    <Peragraph className='flex items-end'> /One-Time</Peragraph>
                                </div>
                            </div>

                            <div className='bg-white rounded-[10px] p-10'>
                                <Heading3>What's Included:</Heading3>
                                <Peragraph className='pt-2'>It could relate to a subscription</Peragraph>
                                <div className='flex flex-col gap-3.75 mt-10 py-10 border border-t-black/10'>
                                    <div className='flex items-center gap-1.5 '>
                                        <div>
                                            <img src={right} alt="right" />
                                        </div>
                                        <Peragraph>Entry to all standard sessions</Peragraph>
                                    </div>
                                    <div className='flex items-center gap-1.5'>
                                        <div>
                                            <img src={right} alt="right" />
                                        </div>
                                        <Peragraph>Reserved seating in select session</Peragraph>
                                    </div>
                                    <div className='flex items-center gap-1.5'>
                                        <div>
                                            <img src={right} alt="right" />
                                        </div>
                                        <Peragraph>Meet & greet with speakers</Peragraph>
                                    </div>
                                    <div className='flex items-center gap-1.5'>
                                        <div>
                                            <img src={right} alt="right" />
                                        </div>
                                        <Peragraph>Premium networking lounge</Peragraph>
                                    </div>
                                </div>
                                <Btn className='w-full'>Get Standard Pass</Btn>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap items-center justify-center gap-10'>
                    <div className='flex items-center gap-2.5'>
                        <div>
                            <img src={pricingBenefit} alt="pricingBenefit" />
                        </div>
                        <Peragraph>Get 30 day free trial</Peragraph>
                    </div>
                    <div className='flex items-center gap-2.5'>
                        <div>
                            <img src={pricingBenefit} alt="pricingBenefit" />
                        </div>
                        <Peragraph>No any hidden fee pay</Peragraph>
                    </div>
                    <div className='flex items-center gap-2.5'>
                        <div>
                            <img src={pricingBenefit} alt="pricingBenefit" />
                        </div>
                        <Peragraph>You can cancel anytime</Peragraph>
                    </div>
                </div>

            </Container>

        </div>
    )
}

export default Pricing
