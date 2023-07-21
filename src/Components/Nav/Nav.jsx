import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';
import { FiBook } from 'react-icons/fi';
import { RiServiceLine } from 'react-icons/ri';
import { AiOutlineMessage } from 'react-icons/ai';
import { useState } from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href='#' onClick={() => setActiveNav('#')} className={activeNav == '#' ? 'active' : ''}>
                <AiOutlineHome />
            </a>
            <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav == '#experience' ? 'active' : ''}>
                <FcAbout />
            </a>
            <a href='#service' onClick={() => setActiveNav('#service')} className={activeNav == '#service' ? 'active' : ''}>
                <FiBook />
            </a>
            <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav == '#portfolio' ? 'active' : ''}>
                <RiServiceLine />
            </a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav == '#contact' ? 'active' : ''}>
                <AiOutlineMessage />
            </a>
        </nav>
    )
}

export default Nav;