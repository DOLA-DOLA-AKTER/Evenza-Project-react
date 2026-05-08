import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";
import Container from '../Container/Container'
import Btn from '../Button/Btn'


const Navber = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='backdrop-blur-[10px] fixed top-0 left-0 z-50 w-full'>
            <nav className='py-6 bg-white/10 px-5 lg:px-0'>
                <Container>
                    <div className='flex justify-between items-center'>

                        {/* LOGO */}
                        <div>
                            <img src={logo} alt="logo" />
                        </div>

                        {/* DESKTOP MENU */}
                        <div className='hidden lg:block'>
                            <ul className='text-white text-base flex items-center gap-10'>
                                <li className='group flex items-center gap-1 duration-300'>
                                    <NavLink className="group-hover:text-primary duration-300" to="/">Home</NavLink>
                                    <IoIosArrowDown className='group-hover:text-primary duration-300'/>
                                </li>
                                <li><NavLink className="hover:text-primary duration-300" to="/aboutus">About Us</NavLink></li>
                                <li><NavLink className="hover:text-primary duration-300" to="/schedules">Schedule</NavLink></li>
                                <li><NavLink className="hover:text-primary duration-300" to="/blogs">Blog</NavLink></li>
                                <li className='group flex items-center gap-1'>
                                    <NavLink className="group-hover:text-primary duration-300" to="/pages">Pages</NavLink>
                                    <IoIosArrowDown className='group-hover:text-primary duration-300'/>
                                </li>
                                <li><NavLink className="hover:text-primary duration-300" to="/contactUs">Contact Us</NavLink></li>
                            </ul>
                        </div>

                        {/* BUTTON */}
                        <div className='hidden lg:block'>
                            <Btn>Join the Conference</Btn>
                        </div>

                        {/* MENU ICON */}
                        <div className='lg:hidden text-white text-3xl cursor-pointer'
                            onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <HiX /> : <HiMenu />}
                        </div>
                    </div>

                    {/* MOBILE MENU */}
                    <div className={`lg:hidden mt-5 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
                        <ul className='flex flex-col gap-5 text-white text-base  text-center p-5 rounded-lg backdrop-blur-[10px]'>
                            <li><NavLink className="hover:text-primary duration-300" to="/">Home</NavLink></li>
                            <li><NavLink className="hover:text-primary duration-300" to="/aboutus">About Us</NavLink></li>
                            <li><NavLink className="hover:text-primary duration-300" to="/schedules">Schedule</NavLink></li>
                            <li><NavLink className="hover:text-primary duration-300" to="/blogs">Blog</NavLink></li>
                            <li><NavLink className="hover:text-primary duration-300" to="/pages">Pages</NavLink></li>
                            <li><NavLink className="hover:text-primary duration-300" to="/contactUs">Contact Us</NavLink></li>
                            <Btn className="mt-3">Join the Conference</Btn>
                        </ul>
                    </div>
                </Container>
            </nav>
        </header>
    )
}

export default Navber


