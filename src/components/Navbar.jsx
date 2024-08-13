import React, { useState, useEffect } from 'react';
import pic from '../assets/photo.avif';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-scroll';
import { FaSun, FaMoon } from 'react-icons/fa';

function Navbar() {
    const [menu, setMenu] = useState(false);
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

    useEffect(() => {
        document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const handleThemeToggle = () => {
        setDarkMode(!darkMode);
    };

    const navList = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'About' },
        { id: 3, text: 'Skills' },
        { id: 4, text: 'Projects' },
        { id: 5, text: 'Contact' }
    ];

    return (
        <div className={`navbar max-w-screen-2xl container mx-auto px-4 h-16 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
            <div className="flex justify-between h-16 items-center">
                <div className="flex space-x-2">
                    <img src={pic} className="h-12 w-12 rounded-full" alt="Profile" loading="lazy" />
                    <h1 className="font-semibold text-xl cursor-pointer">
                        <Link to="Home">Asti<span className="text-green-500 text-2xl">k</span></Link>
                        <p className="text-sm">Web Developer</p>
                    </h1>
                </div>
                <div className="flex items-center space-x-4">
                    <button onClick={handleThemeToggle} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} className="p-2 rounded-full">
                        {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
                    </button>
                    <ul className="hidden md:flex space-x-8">
                        {navList.map((nav) => (
                            <li
                                className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                                key={nav.id}
                            >
                                <Link
                                    to={nav.text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass="active"
                                >
                                    {nav.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
                        {menu ? <IoClose size={24} /> : <AiOutlineMenuUnfold size={24} />}
                    </div>
                </div>
            </div>
            {menu && (
                <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} transition-all duration-300`}>
                    <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
                        {navList.map((nav) => (
                            <li
                                className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                                key={nav.id}
                            >
                                <Link
                                    onClick={() => setMenu(!menu)}
                                    to={nav.text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass="active"
                                >
                                    {nav.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
