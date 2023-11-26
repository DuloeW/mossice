import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import '../App.css'

const TopBar = () => {
    const [active, setActive] = useState(false);
    const handleScrollView = () => {

    };

    return (
        <nav className=' relative flex justify-between items-center'>
            <h1 id='icon' className='text-2xl md:text-4xl'>MOSS<span className='text-[#04d400]'>ICE</span></h1>
            <div>
                <div className='mr-3 md:hidden'>
                    <AiOutlineMenu className='text-3xl font-extrabold' onClick={() => setActive(!active)} />
                </div>

                {/* untuk dekstop */}
                <ul id='top-bar-list' className={`absolute hidden justify-between items-end w-28 p-2 h-28 top-10 right-3 bg-[#44BE89] rounded-md  md:flex md:flex-row md:top-0 md:right-0 md:w-1/3 md:justify-around md:items-center md:h-fit md:bg-transparent md:rounded-full md:border-2`}>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#contact-us' onClick={() => handleScrollView()}>Contact Us</a></li>
                </ul>

                {/* untuk mobile */}
                <ul id='top-bar-list' className={`absolute flex flex-col md:flex-row gap-4 items-end w-28 p-2 h-24 top-11 -right-2 bg-[#44BE89] text-white font-semibold rounded-md tracking-wider    md:hidden ${active ? 'block' : 'hidden'}`}>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#contact-us' onClick={() => document.getElementById('contact-us').scrollIntoView({ block: 'end', behavior: 'smooth' })}>Contact Us</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default TopBar;