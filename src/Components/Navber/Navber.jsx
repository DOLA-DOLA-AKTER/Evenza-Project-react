import React from 'react'
import logo from '../assets/logo.png'
import Container from '../Container/Container'
import Btn from '../Button/Btn'
import { IoIosArrowDown } from "react-icons/io";

const Navber = () => {
    return (
        <div>
            <header className='backdrop-blur-[10px] fixed top-0 left-0 z-10 w-full'>
                <nav className='py-6.25 bg-white-opacity'>
                    <Container>
                        <div className='flex justify-between items-center'>
                            <div>
                                <img src={logo} alt="logo" />
                            </div>
                            <div>
                                <ul className='text-white text-base leading-6 flex items-center gap-10 cursor-pointer'>
                                    <li className='flex items-center gap-1.75'>Home <IoIosArrowDown /></li>
                                    <li className='cursor-pointer'>About Us</li>
                                    <li className='cursor-pointer'>Schedule</li>
                                    <li className='cursor-pointer'>Blog</li>
                                    <li className='flex items-center gap-1.75 cursor-pointer'>Pages <IoIosArrowDown /></li>
                                    <li className='cursor-pointer'>Contact Us</li>
                                </ul>
                            </div>
                            <div>
                                <Btn>Join the Conference</Btn>
                            </div>
                        </div>
                    </Container>
                </nav>
            </header>
        </div>
    )
}

export default Navber
