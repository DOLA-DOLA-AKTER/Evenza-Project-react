import React from 'react'
import { FaStar } from "react-icons/fa";
import { LuBellRing } from "react-icons/lu";

import Container from '../Container/Container'
import Circle from '../Container/SectionHeading'
import Heading from '../Container/Heading'
import FeatureCard from './FeatureCard'
import Heading3 from '../Container/Heading3'
import Peragraph from '../Container/Peragraph'
import SectionHeading from '../Container/SectionHeading';

const Feature = () => {
    return (
        <div className='bg-[radial-gradient(circle_at_top,#47348C_0%,#161A2D_100%)] '>
            <Container>

                {/* Section Heading */}
                <div className='md:w-160 w-full block mx-auto text-center'>
                    <SectionHeading
                    secheading='flex flex-col items-center'
                    peragraph="Core Feature"
                    heading='Core features that power our
                    exceptional services'
                    circle='bg-white'
                    peragraphCSS='text-white'
                    headingCSS='text-white'
                    />
                </div>


                {/* Feature Card */}
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7.5 pt-20'>

                    {/* Card 1 */}
                    <FeatureCard
                        icons={

                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_285)">
                                    <g clipPath="url(#clip1_1_285)">
                                        <g clipPath="url(#clip2_1_285)">
                                            <mask id="mask0_1_285" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x={0} y={0} width={24} height={24}>
                                                <path d="M24 0H0V24H24V0Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_1_285)">
                                                <path d="M14.5714 16.2858C15.0261 16.2858 15.4621 16.1052 15.7835 15.7837C16.105 15.4622 16.2857 15.0262 16.2857 14.5715" stroke="white" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-primary" />
                                                <path d="M7.71423 16.2856H10.2857" stroke="white" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-primary" />
                                                <path d="M16.2857 7.71436V10.2858" stroke="white" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-primary" />
                                                <path d="M9.42851 7.71436C8.97386 7.71436 8.53783 7.89497 8.21633 8.21646C7.89484 8.53795 7.71423 8.97399 7.71423 9.42865" stroke="white" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-primary" />
                                                <path d="M0.857117 2.57147C0.857117 2.11681 1.03773 1.68077 1.35922 1.35928C1.68071 1.03779 2.11675 0.857178 2.5714 0.857178H14.5714C15.0261 0.857178 15.4621 1.03779 15.7836 1.35928C16.105 1.68077 16.2857 2.11681 16.2857 2.57147V7.71432H21.4285C21.8832 7.71432 22.3192 7.89494 22.6407 8.21642C22.9622 8.53791 23.1428 8.97395 23.1428 9.4286V21.4286C23.1428 21.8833 22.9622 22.3193 22.6407 22.6408C22.3192 22.9623 21.8832 23.1429 21.4285 23.1429H9.42854C8.97388 23.1429 8.53785 22.9623 8.21636 22.6408C7.89487 22.3193 7.71426 21.8833 7.71426 21.4286V16.2858H2.5714C2.11675 16.2858 1.68071 16.1051 1.35922 15.7836C1.03773 15.4621 0.857117 15.0261 0.857117 14.5714V2.57147Z" stroke="white" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-primary" />
                                                <path d="M13.7142 7.71436H16.2857" stroke="white" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-primary" />
                                                <path d="M7.71423 13.7144V16.2858" stroke="white" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-primary" />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>

                        }
                        title={<Heading3 className="text-white pt-20 pb-3">Event Planning Manage</Heading3>}
                        peragraph={<Peragraph className='text-white'>Deliver seamless virtual experience
                            with high-quality streaming and
                            interactive tools.</Peragraph>}
                        read="Read More"
                    />

                    {/* Card 2 */}
                    <FeatureCard
                        icons={
                            <LuBellRing className='w-6 h-6 group-hover:text-primary duration-300' />}
                        title={<Heading3 className="text-white pt-20 pb-3 text-nowrap">Conference Coordination</Heading3>}
                        peragraph={<Peragraph className='text-white'>Deliver seamless virtual experience
                            with high-quality streaming and
                            interactive tools.</Peragraph>}
                        read="Read More"
                    />

                    {/* Card 3 */}
                    <FeatureCard
                        icons={
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_335)">
                                    <g clipPath="url(#clip1_1_335)">
                                        <mask id="mask0_1_335" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x={0} y={0} width={24} height={24}>
                                            <path d="M24 0H0V24H24V0Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_1_335)">
                                            <path d="M21.4286 0.857178H2.57141C1.62463 0.857178 0.857117 1.62469 0.857117 2.57147V21.4286C0.857117 22.3754 1.62463 23.1429 2.57141 23.1429H21.4286C22.3753 23.1429 23.1428 22.3754 23.1428 21.4286V2.57147C23.1428 1.62469 22.3753 0.857178 21.4286 0.857178Z" stroke="white" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-primary" />
                                            <path d="M12 19.7143C15.3137 19.7143 18 17.028 18 13.7143C18 10.4007 15.3137 7.71436 12 7.71436C8.68629 7.71436 6 10.4007 6 13.7143C6 17.028 8.68629 19.7143 12 19.7143Z" stroke="white" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-primary" />
                                            <path d="M0.857117 6H5.99998" stroke="white" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-primary" />
                                            <path d="M18 6H23.1428" stroke="white" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-primary" />
                                            <path d="M12 13.6628V19.6628" stroke="white" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-primary" />
                                            <path d="M6.85712 10.6287L12 13.6629" stroke="white" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-primary" />
                                            <path d="M17.1428 10.6287L12 13.6629" stroke="white" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-primary" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        }
                        title={<Heading3 className="text-white pt-20 pb-3">Venue Booking & Setup</Heading3>}
                        peragraph={<Peragraph className='text-white'>Deliver seamless virtual experience
                            with high-quality streaming and
                            interactive tools.</Peragraph>}
                        read="Read More"
                    />

                    {/* Card 4 */}
                    <FeatureCard
                        icons={
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_359)">
                                    <g clipPath="url(#clip1_1_359)">
                                        <g clipPath="url(#clip2_1_359)">
                                            <mask id="mask0_1_359" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x={0} y={0} width={24} height={24}>
                                                <path d="M24 0H0V24H24V0Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_1_359)">
                                                <path d="M7.97139 3.83984L7.30282 3.99413C7.36336 4.25764 7.37094 4.53054 7.32508 4.79699C7.27922 5.06345 7.18086 5.31813 7.03571 5.54622C6.89055 5.77433 6.7015 5.97129 6.47955 6.12569C6.25759 6.28008 6.00716 6.38881 5.74282 6.44556C5.20678 6.55831 4.6479 6.45628 4.18629 6.16136C3.72469 5.86644 3.39721 5.40221 3.27425 4.86842L1.9371 5.1427C1.75373 5.18271 1.58037 5.25948 1.4275 5.36837C1.27463 5.47726 1.14543 5.61602 1.04769 5.77624C0.949947 5.93647 0.885704 6.11485 0.858841 6.3006C0.831977 6.48636 0.843049 6.67564 0.891389 6.85699C0.891389 6.85699 1.50853 9.71984 2.22853 12.9427" stroke="white" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-primary" />
                                                <path d="M20.8286 3.82271C20.7261 4.11136 20.5662 4.37622 20.3583 4.60122C20.1506 4.82623 19.8993 5.0067 19.6196 5.13171C19.34 5.25672 19.0378 5.32365 18.7316 5.32847C18.4254 5.33329 18.1213 5.27588 17.8379 5.15973C17.5545 5.04357 17.2977 4.8711 17.0828 4.65274C16.8681 4.43437 16.6999 4.17468 16.5883 3.8894C16.4769 3.60411 16.4245 3.29916 16.4343 2.99303C16.4442 2.6869 16.5161 2.38595 16.6457 2.10843L15.2572 1.457C14.8864 1.30248 14.4696 1.30042 14.0973 1.45126C13.725 1.60211 13.4272 1.89369 13.2686 2.26271L7.50859 15.8227L6.7543 17.537C6.59978 17.9078 6.59772 18.3246 6.74856 18.6969C6.8994 19.0692 7.19098 19.367 7.56002 19.5255L14.52 22.4913C14.8908 22.6458 15.3076 22.6479 15.6799 22.497C16.0522 22.3462 16.3499 22.0546 16.5086 21.6855L23.0229 6.35986C23.1665 6.00347 23.1704 5.60602 23.0338 5.2469C22.897 4.88778 22.63 4.59346 22.2857 4.42271L20.8286 3.82271Z" stroke="white" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-primary" />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        }
                        title={<Heading3 className="text-white pt-20 pb-3">Post-Event Analytics</Heading3>}
                        peragraph={<Peragraph className='text-white'>Deliver seamless virtual experience
                            with high-quality streaming and
                            interactive tools.</Peragraph>}
                        read="Read More"
                    />
                </div>

                <Peragraph className='pt-15 pb-5.5 text-center text-white'>Join our team and help weave innovation, quality, and success together worldwide.</Peragraph>

                <div className='flex items-center justify-center gap-3.5'>
                    <Heading3 className='text-white'>4.9/5</Heading3>
                    <div className='flex items-center gap-1'>
                        <FaStar className='text-primary' />
                        <FaStar className='text-primary' />
                        <FaStar className='text-primary' />
                        <FaStar className='text-primary' />
                        <FaStar className='text-primary' />
                    </div>
                    <Heading3 className='text-white'>Our 4200 Review</Heading3>
                </div>

            </Container>

        </div>
    )
}

export default Feature
