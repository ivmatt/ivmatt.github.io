import React, { useState } from 'react'
import './navbar.css';

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false)

    return (
        <div className='navbar'>
            <div className='navbar-links'>
                <div className='navbar-links-left'>
                    <p><a href='#about'>About</a></p>
                    <p><a href='#projects'>Projects</a></p>
                </div>
                <div className='navbar-links-center'>
                    <p><a href='#landing'>I.T</a></p>
                </div>
                <div className='navbar-links-right'>
                    <p><a href='#resume'>Resume</a></p>
                    <p><a href='#contact'>Contact</a></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar