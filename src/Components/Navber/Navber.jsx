import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";
import Container from '../Container/Container'
import Btn from '../Button/Btn'


const Navber = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [homeDropdown, setHomeDropdown] = useState(false);
    const [pagesDropdown, setPagesDropdown] = useState(false);

    return (
        <header className='backdrop-blur-[10px] fixed top-0 left-0 z-50 w-full'>
            <nav className='py-6 bg-white/10'>
                <Container className="lg:py-0! py-0!">
                    <div className='flex justify-between items-center'>

                        {/* LOGO */}
                        <div>
                            <img src={logo} alt="logo" />
                        </div>

                        {/* DESKTOP MENU */}
                        <div className='hidden lg:block'>
                            <ul className='text-white text-base flex items-center gap-10'>
                                <li className='group relative'>
                                    <div className='flex items-center gap-1 duration-300'>
                                        <NavLink
                                            to="/"
                                            className="hover:text-primary duration-300">Home
                                        </NavLink>
                                        <IoIosArrowDown className='group-hover:text-primary duration-300 group-hover:rotate-180' />
                                    </div>
                                    <ul className="absolute top-full left-0 mt-2 w-40 bg-primary shadow-lg invisible group-hover:visible duration-300 z-50 rounded-md">
                                        <li className='w-full'>
                                            <NavLink
                                                to="/feature"
                                                className="block px-4 py-2 hover:bg-white hover:text-black">Feature
                                            </NavLink>
                                        </li>
                                        <li className='w-full'>
                                            <NavLink
                                                to="/benefits"
                                                className="block px-4 py-2 hover:bg-white hover:text-black">Benefits
                                            </NavLink>
                                        </li>
                                        <li className='w-full'>
                                            <NavLink
                                                to="/video"
                                                className="block px-4 py-2 hover:bg-white hover:text-black">Video
                                            </NavLink>
                                        </li>
                                        <li className='w-full'>
                                            <NavLink
                                                to="/testimonials"
                                                className="block px-4 py-2 hover:bg-white hover:text-black">Testimonials
                                            </NavLink>
                                        </li>

                                    </ul>

                                </li>
                                <li><NavLink className="hover:text-primary duration-300" to="/aboutus">About Us</NavLink></li>
                                <li><NavLink className="hover:text-primary duration-300" to="/schedules">Schedule</NavLink></li>
                                <li><NavLink className="hover:text-primary duration-300" to="/blogs">Blog</NavLink></li>
                                <li className='relative group'>
                                    <div className='flex items-center gap-1'>
                                        <a href="#"
                                            className="group-hover:text-primary duration-300">Pages</a>
                                        <IoIosArrowDown className='group-hover:text-primary duration-300 group-hover:rotate-180' />
                                    </div>
                                    <ul className="absolute top-full left-0 mt-2 w-40 bg-primary shadow-lg invisible group-hover:visible duration-300 z-50 rounded-md">

                                        <li className='w-full'>
                                            <NavLink
                                                to="/speakers"
                                                className="block px-4 py-2 hover:bg-white hover:text-black">Speakers
                                            </NavLink>
                                        </li>
                                        <li className='w-full'>
                                            <NavLink
                                                to="/pricing "
                                                className="block px-4 py-2 hover:bg-white hover:text-black">Pricing
                                            </NavLink>
                                        </li>
                                        <li className='w-full'>
                                            <NavLink
                                                to="/faq"
                                                className="block px-4 py-2 hover:bg-white hover:text-black">FAQ
                                            </NavLink>
                                        </li>

                                    </ul>
                                </li>
                                <li><NavLink className="hover:text-primary duration-300" to="/contactUs">Contact Us</NavLink></li>
                            </ul>
                        </div>

                        {/* BUTTON */}
                        <div className='hidden lg:block'>
                            <Btn><NavLink to="/Image">Join the Conference</NavLink></Btn>
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

                            <li>
                                <div
                                    onClick={() => setHomeDropdown(!homeDropdown)}
                                    className='group flex items-center justify-center gap-1 duration-300'>
                                    <NavLink
                                            to="/"
                                            className="group-hover:text-primary duration-300">Home
                                        </NavLink>
                                    <IoIosArrowDown className={`group-hover:text-primary duration-300 ${homeDropdown ? "rotate-180" : ""}`} />
                                </div>
                                {homeDropdown &&
                                    (<ul className="mt-2 rounded-md bg-primary">
                                        <li className='w-full'>
                                            <NavLink
                                                to="/feature"
                                                className="block px-4 py-2 hover:bg-white hover:text-black">Feature
                                            </NavLink>
                                        </li>
                                        <li className='w-full'>
                                            <NavLink
                                                to="/benefits"
                                                className="block px-4 py-2 hover:bg-white hover:text-black">Benefits
                                            </NavLink>
                                        </li>
                                        <li className='w-full'>
                                            <NavLink
                                                to="/video"
                                                className="block px-4 py-2 hover:bg-white hover:text-black">Video
                                            </NavLink>
                                        </li>
                                        <li className='w-full'>
                                            <NavLink
                                                to="/testimonials"
                                                className="block px-4 py-2 hover:bg-white hover:text-black">Testimonials
                                            </NavLink>
                                        </li>

                                    </ul>)}

                            </li>

                            <li><NavLink className="hover:text-primary duration-300" to="/aboutus">About Us</NavLink></li>
                            <li><NavLink className="hover:text-primary duration-300" to="/schedules">Schedule</NavLink></li>
                            <li><NavLink className="hover:text-primary duration-300" to="/blogs">Blog</NavLink></li>
                            <li>
                                <div
                                    onClick={() => setPagesDropdown(!pagesDropdown)}
                                    className='group flex items-center justify-center gap-1'>
                                    <a href="#" className="group-hover:text-primary duration-300">Pages</a>
                                    <IoIosArrowDown className={`group-hover:text-primary duration-300 ${pagesDropdown ? "rotate-180" : ""}`} />
                                </div>
                                {pagesDropdown &&
                                    (<ul className="mt-2 bg-primary rounded-md duration-300">
                                        <li className='w-full'>
                                            <NavLink
                                                to="/speakers"
                                                className="block px-4 py-2 hover:bg-white hover:text-black">Speakers
                                            </NavLink>
                                        </li>
                                        <li className='w-full'>
                                            <NavLink
                                                to="/pricing "
                                                className="block px-4 py-2 hover:bg-white hover:text-black">Pricing
                                            </NavLink>
                                        </li>
                                        <li className='w-full'>
                                            <NavLink
                                                to="/faq"
                                                className="block px-4 py-2 hover:bg-white hover:text-black">FAQ
                                            </NavLink>
                                        </li>

                                    </ul>)}
                            </li>
                            <li><NavLink className="hover:text-primary duration-300" to="/contactUs">Contact Us</NavLink></li>
                            <Btn className="mt-3"> <NavLink to="/Image">Join the Conference</NavLink> </Btn>
                        </ul>
                    </div>
                </Container>
            </nav>
        </header>
    )
}

export default Navber


