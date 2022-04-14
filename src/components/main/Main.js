import React from 'react'
import './MainStyles.css'
import {AiOutlineSearch} from 'react-icons/ai'
import FrontImageMain from '../../assets/123.jpeg'


function Main() {
    return (
        <div className='main'>
            <img src={FrontImageMain} alt='/'/>
            <div className='content'>
            <h1>First Hostel Travel</h1>
            <h2>Top 1 Locations WorldWide</h2>
            <form className='form'>
                <div>
                    <input type='text' placeholder='Search Hostel'/>
                </div>
                <div>
                    <button><AiOutlineSearch className='icon'/></button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Main