'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    return (
        <div>
            <nav className={`fixed w-full z-20 top-0 start-0 border-gray-200 transition-colors duration-300 shadow-lg ${isScrolled ? 'bg-white text-black' : 'text-white'}`}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Rexton</span>
                    </Link>

                    <div className="flex md:hidden">
                        <button
                            type="button"
                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>

                    <div className={`items-center justify-between w-full md:flex md:w-auto ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                        <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ${isScrolled ? 'text-black' : 'text-white'} bg-gray-800 md:bg-transparent`}>
                            <li>
                                <Link href="/" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                                    About
                                </Link>
                            </li>

                            <li className="relative">
                                <button
                                    id="dropdownNavbarLink"
                                    className="flex items-center justify-between w-full py-2 px-3 rounded 
                                    hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                                    onClick={toggleDropdown}
                                    onMouseEnter={toggleDropdown}
                                >
                                    Dropdown
                                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                <div
                                    id="dropdownNavbar"
                                    className={`absolute z-10 ${isDropdownOpen ? 'block' : 'hidden'} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
                                >
                                    <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Outdoor LED Screens</Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Indoor LED Screens</Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Rental LED Screens</Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Digital Displays</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link href="/services" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
