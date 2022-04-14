import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import {MdOutlineAccountCircle} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa'
import {useState} from 'react'

import './NavbarStyle.css'

function Navbar(){
    const[nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    return (
        <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className='logo'>
                <h2>HOSTEL.</h2>
            </div>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>Book</li>
                <li>Views</li>
            </ul>
            <div className='nav-icons'>
                <BiSearchAlt2 className='icon'/>
                <MdOutlineAccountCircle className='icon'/>
            </div>
            <div className="hamburger" onClick={handleNav}>
            <GiHamburgerMenu className='icon'/>
            </div>
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className='mobile-nav'>
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Travel</li>
                    <li>Book</li>
                    <li>Views</li>
                </ul>
            <div className='mobile-menu-bottom'>
                <div className='menu-icons'>
                    <button>Search</button>
                    <button>Account</button>
                </div>
                <div className='social-icons'>
                    <FaFacebook className='icon'/>
                    <FaInstagram className='icon'/>
                    <FaTwitter className='icon'/>
                    <FaPinterest className='icon'/>
                    <FaYoutube className='icon'/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Navbar
